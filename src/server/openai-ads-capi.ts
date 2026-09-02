import { createHash } from "node:crypto";
import { isIP } from "node:net";

import { after } from "next/server";

import { SITE_URL } from "@/lib/site";

const OPENAI_ADS_ENDPOINT = "https://bzr.openai.com/v1/events";
const OPENAI_ADS_INTEGRATION_SOURCE = "moneysystem_site";
const OPENAI_ADS_TIMEOUT_MS = 2_000;
const ASCII_PUNCTUATION_AND_WHITESPACE =
  /[\s\u0021-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/g;

type OpenAIAdsLeadInput = {
  eventId: string;
  name: string;
  phoneNumber: string;
  sourceUrl?: string;
  requestOrigin?: string;
  cookieHeader?: string;
  ipAddress?: string;
  userAgent?: string;
  timestampMs?: number;
};

type OpenAIAdsConfig = {
  pixelId: string;
  apiKey: string;
  validateOnly: boolean;
};

type OpenAIAdsUser = {
  obref?: string;
  phone_numbers_sha256?: string[];
  first_names_sha256?: string[];
  last_names_sha256?: string[];
  countries?: string[];
  ip_address?: string;
  user_agent?: string;
};

function sha256(value: string) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

function validOrigin(value?: string) {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : null;
  } catch {
    return null;
  }
}

export function readRawCookie(cookieHeader: string | undefined, name: string) {
  if (!cookieHeader) return undefined;

  for (const segment of cookieHeader.split(";")) {
    const cookie = segment.trim();
    const separator = cookie.indexOf("=");
    if (separator < 1 || cookie.slice(0, separator) !== name) continue;

    const value = cookie.slice(separator + 1);
    return value ? value : undefined;
  }

  return undefined;
}

export function sanitizeOpenAIAdsSourceUrl(
  sourceUrl?: string,
  requestOrigin?: string,
) {
  const siteOrigin = validOrigin(SITE_URL) ?? "https://moneysystem.com.br";
  const currentOrigin = validOrigin(requestOrigin);
  const trustedOrigins = new Set(
    [siteOrigin, currentOrigin].filter((value): value is string => Boolean(value)),
  );

  if (sourceUrl) {
    try {
      const url = new URL(sourceUrl);
      if (trustedOrigins.has(url.origin)) {
        return `${url.origin}${url.pathname}`;
      }
    } catch {
      // Fall through to the trusted landing-page fallback.
    }
  }

  return `${siteOrigin}/ad`;
}

export function normalizeOpenAIAdsPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^0+/, "");
  return /^\d{8,15}$/.test(digits) ? digits : null;
}

export function normalizeOpenAIAdsName(value: string) {
  const normalized = value.toLowerCase().replace(
    ASCII_PUNCTUATION_AND_WHITESPACE,
    "",
  );
  return normalized || null;
}

export function buildOpenAIAdsLeadEvent(input: OpenAIAdsLeadInput) {
  const phone = normalizeOpenAIAdsPhone(input.phoneNumber);
  const nameParts = input.name.trim().split(/\s+/).filter(Boolean);
  const firstName = normalizeOpenAIAdsName(nameParts[0] ?? "");
  const lastName =
    nameParts.length > 1
      ? normalizeOpenAIAdsName(nameParts[nameParts.length - 1])
      : null;
  const obref = readRawCookie(input.cookieHeader, "__obref");
  const oppref = readRawCookie(input.cookieHeader, "__oppref");
  const ipAddress = input.ipAddress?.trim();
  const userAgent = input.userAgent?.trim().slice(0, 500);

  const user: OpenAIAdsUser = {
    ...(obref ? { obref } : {}),
    ...(phone ? { phone_numbers_sha256: [sha256(phone)] } : {}),
    ...(firstName ? { first_names_sha256: [sha256(firstName)] } : {}),
    ...(lastName ? { last_names_sha256: [sha256(lastName)] } : {}),
    countries: ["BR"],
    ...(ipAddress && isIP(ipAddress) ? { ip_address: ipAddress } : {}),
    ...(userAgent ? { user_agent: userAgent } : {}),
  };

  return {
    id: input.eventId,
    type: "lead_created" as const,
    timestamp_ms: input.timestampMs ?? Date.now(),
    ...(oppref ? { oppref } : {}),
    source_url: sanitizeOpenAIAdsSourceUrl(
      input.sourceUrl,
      input.requestOrigin,
    ),
    action_source: "web" as const,
    user,
    data: {
      type: "customer_action" as const,
    },
  };
}

function getOpenAIAdsConfig(): OpenAIAdsConfig | null {
  const pixelId = process.env.OPENAI_ADS_PIXEL_ID?.trim();
  const apiKey = process.env.OPENAI_ADS_CONVERSIONS_API_KEY?.trim();

  if (!pixelId || !apiKey) return null;

  return {
    pixelId,
    apiKey,
    validateOnly: process.env.OPENAI_ADS_VALIDATE_ONLY === "true",
  };
}

export async function sendOpenAIAdsLeadEvent(
  input: OpenAIAdsLeadInput,
  config: OpenAIAdsConfig,
  fetcher: typeof fetch = fetch,
) {
  const response = await fetcher(
    `${OPENAI_ADS_ENDPOINT}?pid=${encodeURIComponent(config.pixelId)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        validate_only: config.validateOnly,
        integration_source: OPENAI_ADS_INTEGRATION_SOURCE,
        events: [buildOpenAIAdsLeadEvent(input)],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(OPENAI_ADS_TIMEOUT_MS),
    },
  );

  if (!response.ok) {
    throw new Error(`OpenAI Ads CAPI returned HTTP ${response.status}`);
  }
}

export function scheduleOpenAIAdsLeadEvent(input: OpenAIAdsLeadInput) {
  const config = getOpenAIAdsConfig();
  if (!config) return false;

  try {
    after(async () => {
      try {
        await sendOpenAIAdsLeadEvent(input, config);
      } catch {
        console.warn(
          "[OpenAI Ads] Não foi possível enviar a conversão pela CAPI.",
        );
      }
    });
    return true;
  } catch {
    console.warn(
      "[OpenAI Ads] Não foi possível agendar a conversão pela CAPI.",
    );
    return false;
  }
}
