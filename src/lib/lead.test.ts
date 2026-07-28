import { describe, expect, it } from "vitest";

import {
  buildLeadUpstreamPayload,
  buildLeadWhatsAppMessage,
  formatBrazilianWhatsApp,
  normalizeBrazilianWhatsApp,
  sanitizeSpreadsheetCell,
  validateLeadInput,
} from "./lead";

const validLead = {
  nome: "  Ney   Moraes ",
  whatsapp: "(48) 98874-5520",
  possuiFiliais: true,
  desejaEmitirNota: false,
  submissionId: "0f3a7377-a54a-4f64-b938-2a4051136b34",
};

describe("normalização de WhatsApp", () => {
  it.each([
    ["(48) 98874-5520", "48988745520"],
    ["+55 48 98874-5520", "48988745520"],
    ["48 3333-4444", "4833334444"],
  ])("normaliza %s", (input, expected) => {
    expect(normalizeBrazilianWhatsApp(input)).toBe(expected);
  });

  it.each(["123", "00123456789", "2012345678", "48123456789", "48000000000"])(
    "rejeita %s",
    (input) => {
      expect(normalizeBrazilianWhatsApp(input)).toBeNull();
    },
  );

  it("formata celular brasileiro", () => {
    expect(formatBrazilianWhatsApp("48988745520")).toBe("(48) 98874-5520");
  });
});

describe("segurança de planilha", () => {
  it.each(["=SUM(1;1)", "+cmd", "-10", "@formula"])(
    "neutraliza fórmula %s",
    (input) => {
      expect(sanitizeSpreadsheetCell(input)).toBe(`'${input}`);
    },
  );
});

describe("validação do lead", () => {
  it("aceita e normaliza um lead válido", () => {
    const result = validateLeadInput(validLead);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.nome).toBe("Ney Moraes");
      expect(result.data.whatsappInternational).toBe("5548988745520");
    }
  });

  it("rejeita tipos e propriedades inesperadas", () => {
    const result = validateLeadInput({ ...validLead, admin: true });
    expect(result).toEqual({
      ok: false,
      errors: { form: "Dados inválidos." },
    });
  });

  it("retorna erros por campo", () => {
    const result = validateLeadInput({
      ...validLead,
      nome: "",
      whatsapp: "123",
      possuiFiliais: "sim",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.nome).toBeTruthy();
      expect(result.errors.whatsapp).toBeTruthy();
      expect(result.errors.possuiFiliais).toBeTruthy();
    }
  });
});

describe("integrações", () => {
  it("monta a mensagem comercial aprovada", () => {
    expect(
      buildLeadWhatsAppMessage({
        nome: "Ney",
        possuiFiliais: false,
        desejaEmitirNota: true,
      }),
    ).toContain(
      "Minha empresa não possui filiais e deseja emitir nota fiscal.",
    );
  });

  it("mantém o contrato legado do Apps Script", () => {
    const result = validateLeadInput({
      ...validLead,
      attribution: { utm_source: "google", utm_campaign: "erp" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    const payload = buildLeadUpstreamPayload(
      result.data,
      "Vitest",
      "secret",
    );
    expect(payload).toMatchObject({
      nome: "Ney Moraes",
      whatsapp: "https://wa.me/5548988745520",
      whatsapp_formatado: "(48) 98874-5520",
      possui_filiais: "Sim",
      emite_nf: "Não",
      fonte: "/ad | utm_source=google | utm_campaign=erp",
      user_agent: "Vitest",
      secret: "secret",
    });
  });
});
