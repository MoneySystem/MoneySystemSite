import { createHash } from "node:crypto";

import {
  buildLeadUpstreamPayload,
  buildLeadWhatsAppMessage,
  validateLeadInput,
} from "@/lib/lead";
import { createWhatsAppUrl, SITE_URL } from "@/lib/site";
import { scheduleOpenAIAdsLeadEvent } from "@/server/openai-ads-capi";

const MAX_BODY_SIZE = 4_096;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestBuckets = new Map<string, number[]>();

function json(
  body: Record<string, unknown>,
  status: number,
  headers?: HeadersInit,
) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...headers,
    },
  });
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    const forwardedHost =
      request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    const allowedHosts = new Set([
      requestUrl.host,
      forwardedHost,
      new URL(SITE_URL).host,
      process.env.VERCEL_URL,
    ]);

    return (
      (originUrl.protocol === "https:" || originUrl.protocol === "http:") &&
      allowedHosts.has(originUrl.host)
    );
  } catch {
    return false;
  }
}

function getAnonymousClientKey(request: Request) {
  const ip =
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  return createHash("sha256")
    .update(`${ip}:${process.env.GOOGLE_APPS_SCRIPT_SECRET ?? "local"}`)
    .digest("hex");
}

function isRateLimited(request: Request) {
  const now = Date.now();
  const key = getAnonymousClientKey(request);
  const current = (requestBuckets.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (current.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestBuckets.set(key, current);
    return true;
  }

  current.push(now);
  requestBuckets.set(key, current);

  if (requestBuckets.size > 1_000) {
    for (const [bucketKey, timestamps] of requestBuckets) {
      if (
        timestamps.every(
          (timestamp) => now - timestamp >= RATE_LIMIT_WINDOW_MS,
        )
      ) {
        requestBuckets.delete(bucketKey);
      }
    }
  }

  return false;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return json({ ok: false, code: "FORBIDDEN" }, 403);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json({ ok: false, code: "UNSUPPORTED_MEDIA_TYPE" }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_SIZE) {
    return json({ ok: false, code: "PAYLOAD_TOO_LARGE" }, 413);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_SIZE) {
    return json({ ok: false, code: "PAYLOAD_TOO_LARGE" }, 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, code: "INVALID_JSON" }, 400);
  }

  const validation = validateLeadInput(parsedBody);
  if (!validation.ok) {
    return json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        errors: validation.errors,
      },
      400,
    );
  }

  const elapsed = Date.now() - (validation.data.startedAt ?? Date.now());
  if (
    validation.data.website ||
    !validation.data.startedAt ||
    elapsed < 0
  ) {
    return json({ ok: false, code: "BOT_DETECTED" }, 403);
  }

  if (isRateLimited(request)) {
    return json(
      { ok: false, code: "RATE_LIMITED" },
      429,
      { "Retry-After": "600" },
    );
  }

  const upstreamUrl = process.env.GOOGLE_APPS_SCRIPT_LEAD_URL;
  if (!upstreamUrl) {
    return json({ ok: false, code: "SERVICE_UNAVAILABLE" }, 503);
  }

  const upstreamPayload = buildLeadUpstreamPayload(
    validation.data,
    request.headers.get("user-agent") ?? "",
    process.env.GOOGLE_APPS_SCRIPT_SECRET,
  );

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(upstreamPayload),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(8_000),
    });

    const upstreamText = await upstreamResponse.text();
    let upstreamResult: { ok?: boolean } | null = null;
    try {
      upstreamResult = JSON.parse(upstreamText) as { ok?: boolean };
    } catch {
      upstreamResult = null;
    }

    if (!upstreamResponse.ok || upstreamResult?.ok !== true) {
      return json({ ok: false, code: "UPSTREAM_ERROR" }, 502);
    }
  } catch (error) {
    const isTimeout =
      error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "AbortError");
    return json(
      {
        ok: false,
        code: isTimeout ? "UPSTREAM_TIMEOUT" : "UPSTREAM_ERROR",
      },
      isTimeout ? 504 : 502,
    );
  }

  const message = buildLeadWhatsAppMessage({
    nome: validation.data.nome,
    possuiFiliais: validation.data.possuiFiliais,
    desejaEmitirNota: validation.data.desejaEmitirNota,
  });

  scheduleOpenAIAdsLeadEvent({
    eventId: validation.data.submissionId,
    name: validation.data.nome,
    phoneNumber: validation.data.whatsappInternational,
    sourceUrl: validation.data.attribution.landing_url,
    requestOrigin: request.headers.get("origin") ?? undefined,
    cookieHeader: request.headers.get("cookie") ?? undefined,
    ipAddress:
      request.headers.get("x-real-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
    userAgent: request.headers.get("user-agent") ?? undefined,
    timestampMs: Date.now(),
  });

  return json(
    {
      ok: true,
      leadId: validation.data.submissionId,
      whatsappUrl: createWhatsAppUrl(message),
    },
    201,
  );
}
