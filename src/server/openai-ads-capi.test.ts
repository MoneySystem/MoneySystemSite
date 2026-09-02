import { createHash } from "node:crypto";

import { describe, expect, it, vi } from "vitest";

import {
  buildOpenAIAdsLeadEvent,
  normalizeOpenAIAdsName,
  normalizeOpenAIAdsPhone,
  readRawCookie,
  sanitizeOpenAIAdsSourceUrl,
  sendOpenAIAdsLeadEvent,
} from "./openai-ads-capi";

function sha256(value: string) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

const lead = {
  eventId: "0f3a7377-a54a-4f64-b938-2a4051136b34",
  name: "José D'Ávila",
  phoneNumber: "+55 (48) 98874-5520",
  sourceUrl:
    "https://moneysystem.com.br/ad?utm_source=openai&telefone=secreto#form",
  requestOrigin: "https://moneysystem.com.br",
  cookieHeader: "other=1; __oppref=opaque%3Dclick; __obref=browser==",
  ipAddress: "203.0.113.10",
  userAgent: "Vitest browser",
  timestampMs: 1_767_225_600_000,
};

describe("OpenAI Ads CAPI", () => {
  it("preserva identificadores opacos dos cookies", () => {
    expect(readRawCookie(lead.cookieHeader, "__oppref")).toBe(
      "opaque%3Dclick",
    );
    expect(readRawCookie(lead.cookieHeader, "__obref")).toBe("browser==");
  });

  it("normaliza telefone e nomes conforme a especificação", () => {
    expect(normalizeOpenAIAdsPhone("+55 (48) 98874-5520")).toBe(
      "5548988745520",
    );
    expect(normalizeOpenAIAdsPhone("123")).toBeNull();
    expect(normalizeOpenAIAdsName(" D'Ávila ")).toBe("dávila");
  });

  it("remove query string e rejeita origem não confiável", () => {
    expect(
      sanitizeOpenAIAdsSourceUrl(
        "https://moneysystem.com.br/ad?utm_source=openai#form",
        "https://moneysystem.com.br",
      ),
    ).toBe("https://moneysystem.com.br/ad");
    expect(
      sanitizeOpenAIAdsSourceUrl(
        "https://attacker.example/roubo",
        "http://localhost:3000",
      ),
    ).toBe("https://moneysystem.com.br/ad");
  });

  it("monta lead_created sem PII em texto aberto", () => {
    const event = buildOpenAIAdsLeadEvent(lead);
    const serialized = JSON.stringify(event);

    expect(event).toMatchObject({
      id: lead.eventId,
      type: "lead_created",
      timestamp_ms: lead.timestampMs,
      oppref: "opaque%3Dclick",
      source_url: "https://moneysystem.com.br/ad",
      action_source: "web",
      data: { type: "customer_action" },
      user: {
        obref: "browser==",
        phone_numbers_sha256: [sha256("5548988745520")],
        first_names_sha256: [sha256("josé")],
        last_names_sha256: [sha256("dávila")],
        countries: ["BR"],
        ip_address: "203.0.113.10",
        user_agent: "Vitest browser",
      },
    });
    expect(serialized).not.toContain(lead.phoneNumber);
    expect(serialized).not.toContain(lead.name);
    expect(serialized).not.toContain("telefone=secreto");
  });

  it("envia um lote deduplicável com autenticação somente no servidor", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(null, { status: 202 }));

    await sendOpenAIAdsLeadEvent(
      lead,
      {
        pixelId: "Ui4FFWmostPwksH32uC8BF",
        apiKey: "test-secret",
        validateOnly: false,
      },
      fetcher,
    );

    expect(fetcher).toHaveBeenCalledOnce();
    const [url, options] = fetcher.mock.calls[0];
    const body = JSON.parse(String(options?.body));

    expect(url).toBe(
      "https://bzr.openai.com/v1/events?pid=Ui4FFWmostPwksH32uC8BF",
    );
    expect(options?.headers).toEqual({
      Authorization: "Bearer test-secret",
      "Content-Type": "application/json",
    });
    expect(body.validate_only).toBe(false);
    expect(body.integration_source).toBe("moneysystem_site");
    expect(body.events[0].id).toBe(lead.eventId);
  });
});
