import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "./route";

const validBody = {
  nome: "Ney Moraes",
  whatsapp: "(48) 98874-5520",
  possuiFiliais: false,
  desejaEmitirNota: true,
  submissionId: "0f3a7377-a54a-4f64-b938-2a4051136b34",
  startedAt: Date.now() - 2_000,
  website: "",
  attribution: {
    utm_source: "google",
  },
};

function request(
  body: unknown,
  options: {
    origin?: string;
    contentType?: string;
    ip?: string;
  } = {},
) {
  return new Request("http://localhost:3000/api/leads", {
    method: "POST",
    headers: {
      "content-type": options.contentType ?? "application/json",
      origin: options.origin ?? "http://localhost:3000",
      "x-real-ip": options.ip ?? crypto.randomUUID(),
      "user-agent": "Vitest",
    },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  vi.stubEnv("GOOGLE_APPS_SCRIPT_LEAD_URL", "https://example.com/webhook");
  vi.stubEnv("WHATSAPP_NUMBER", "5548988745520");
  vi.stubGlobal(
    "fetch",
    vi.fn().mockImplementation(() =>
      Promise.resolve(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
      ),
    ),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("POST /api/leads", () => {
  it("salva antes de retornar o WhatsApp", async () => {
    const response = await POST(request(validBody));
    const result = await response.json();

    expect(response.status).toBe(201);
    expect(result.ok).toBe(true);
    expect(result.whatsappUrl).toContain("https://wa.me/5548988745520");
    expect(fetch).toHaveBeenCalledOnce();

    const [, options] = vi.mocked(fetch).mock.calls[0];
    expect(options?.redirect).toBe("follow");
    expect(options?.headers).toEqual({
      "Content-Type": "text/plain;charset=utf-8",
    });
  });

  it("rejeita origem externa", async () => {
    const response = await POST(
      request(validBody, { origin: "https://attacker.example" }),
    );
    expect(response.status).toBe(403);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("rejeita tipo de conteúdo incorreto", async () => {
    const response = await POST(
      request(validBody, { contentType: "text/plain" }),
    );
    expect(response.status).toBe(415);
  });

  it("retorna erros de validação por campo", async () => {
    const response = await POST(
      request({ ...validBody, nome: "", whatsapp: "123" }),
    );
    const result = await response.json();
    expect(response.status).toBe(400);
    expect(result.errors.nome).toBeTruthy();
    expect(result.errors.whatsapp).toBeTruthy();
  });

  it("bloqueia honeypot e envio rápido demais", async () => {
    const honeypot = await POST(
      request({ ...validBody, website: "https://bot.example" }),
    );
    const tooFast = await POST(
      request({ ...validBody, startedAt: Date.now() }),
    );
    expect(honeypot.status).toBe(403);
    expect(tooFast.status).toBe(403);
  });

  it("não aceita HTML de erro como confirmação da planilha", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response("<html>Login</html>", {
          status: 200,
          headers: { "content-type": "text/html" },
        }),
      ),
    );

    const response = await POST(request(validBody));
    expect(response.status).toBe(502);
  });

  it("diferencia timeout do upstream", async () => {
    const error = new Error("aborted");
    error.name = "AbortError";
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(error));

    const response = await POST(request(validBody));
    const result = await response.json();
    expect(response.status).toBe(504);
    expect(result.code).toBe("UPSTREAM_TIMEOUT");
  });

  it("limita seis envios no mesmo intervalo", async () => {
    const ip = "203.0.113.77";
    const responses = [];
    for (let index = 0; index < 6; index += 1) {
      responses.push(
        await POST(
          request(
            {
              ...validBody,
              submissionId: `0f3a7377-a54a-4f64-b938-2a4051136b3${index}`,
            },
            { ip },
          ),
        ),
      );
    }

    expect(responses.slice(0, 5).every((response) => response.status === 201)).toBe(
      true,
    );
    expect(responses[5].status).toBe(429);
  });
});
