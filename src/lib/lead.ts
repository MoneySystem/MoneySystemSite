const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f-\u009f]/g;
const SPREADSHEET_FORMULA_PREFIX = /^[=+\-@]/;
const ALLOWED_ATTRIBUTION_KEYS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "msclkid",
  "referrer",
  "landing_url",
]);
const BRAZILIAN_AREA_CODES = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34,
  35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62,
  63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

export type LeadInput = {
  nome: string;
  whatsapp: string;
  possuiFiliais: boolean;
  desejaEmitirNota: boolean;
  submissionId: string;
  attribution?: Record<string, string>;
  website?: string;
  startedAt?: number;
};

export type LeadField =
  | "nome"
  | "whatsapp"
  | "possuiFiliais"
  | "desejaEmitirNota";

export type LeadValidation =
  | {
      ok: true;
      data: LeadInput & {
        nome: string;
        whatsapp: string;
        whatsappLocal: string;
        whatsappInternational: string;
        whatsappFormatted: string;
        attribution: Record<string, string>;
      };
    }
  | {
      ok: false;
      errors: Partial<Record<LeadField | "form", string>>;
    };

function compactSpaces(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function sanitizeSpreadsheetCell(value: string) {
  const normalized = compactSpaces(
    value.normalize("NFKC").replace(CONTROL_CHARACTERS, ""),
  );

  return SPREADSHEET_FORMULA_PREFIX.test(normalized)
    ? `'${normalized}`
    : normalized;
}

export function normalizeBrazilianWhatsApp(value: string) {
  let digits = value.replace(/\D/g, "");

  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) {
    digits = digits.slice(2);
  }

  if (digits.length !== 10 && digits.length !== 11) {
    return null;
  }

  const areaCode = Number(digits.slice(0, 2));
  if (!BRAZILIAN_AREA_CODES.has(areaCode)) {
    return null;
  }

  if (digits.length === 11 && digits[2] !== "9") {
    return null;
  }

  const subscriber = digits.slice(2);
  if (/^0+$/.test(subscriber)) {
    return null;
  }

  return digits;
}

export function formatBrazilianWhatsApp(localDigits: string) {
  if (localDigits.length === 11) {
    return `(${localDigits.slice(0, 2)}) ${localDigits.slice(2, 7)}-${localDigits.slice(7)}`;
  }

  return `(${localDigits.slice(0, 2)}) ${localDigits.slice(2, 6)}-${localDigits.slice(6)}`;
}

function cleanAttribution(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key, item]) =>
          ALLOWED_ATTRIBUTION_KEYS.has(key) && typeof item === "string",
      )
      .map(([key, item]) => [
        key,
        sanitizeSpreadsheetCell((item as string).slice(0, 500)),
      ])
      .filter(([, item]) => Boolean(item)),
  );
}

export function validateLeadInput(value: unknown): LeadValidation {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { form: "Dados inválidos." } };
  }

  const input = value as Record<string, unknown>;
  const allowedKeys = new Set([
    "nome",
    "whatsapp",
    "possuiFiliais",
    "desejaEmitirNota",
    "submissionId",
    "attribution",
    "website",
    "startedAt",
  ]);
  const hasUnexpectedKey = Object.keys(input).some((key) => !allowedKeys.has(key));

  if (hasUnexpectedKey) {
    return { ok: false, errors: { form: "Dados inválidos." } };
  }

  const errors: Partial<Record<LeadField | "form", string>> = {};
  const rawName = typeof input.nome === "string" ? input.nome : "";
  const cleanName = compactSpaces(rawName.normalize("NFKC"));

  if (!cleanName) {
    errors.nome = "Informe seu nome.";
  } else if (
    cleanName.length < 2 ||
    cleanName.length > 80 ||
    CONTROL_CHARACTERS.test(cleanName)
  ) {
    errors.nome = "Digite seu nome ou como prefere ser chamado.";
  }

  CONTROL_CHARACTERS.lastIndex = 0;

  const rawWhatsApp =
    typeof input.whatsapp === "string" ? input.whatsapp.slice(0, 40) : "";
  const localWhatsApp = normalizeBrazilianWhatsApp(rawWhatsApp);

  if (!rawWhatsApp) {
    errors.whatsapp = "Informe seu número de WhatsApp.";
  } else if (!localWhatsApp) {
    errors.whatsapp = "Confira o DDD e o número informado.";
  }

  if (typeof input.possuiFiliais !== "boolean") {
    errors.possuiFiliais = "Selecione uma opção para continuar.";
  }

  if (typeof input.desejaEmitirNota !== "boolean") {
    errors.desejaEmitirNota = "Selecione uma opção para continuar.";
  }

  const submissionId =
    typeof input.submissionId === "string" ? input.submissionId : "";
  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      submissionId,
    )
  ) {
    errors.form = "Não foi possível identificar o envio. Atualize a página.";
  }

  if (Object.keys(errors).length > 0 || !localWhatsApp) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      nome: sanitizeSpreadsheetCell(cleanName),
      whatsapp: rawWhatsApp,
      whatsappLocal: localWhatsApp,
      whatsappInternational: `55${localWhatsApp}`,
      whatsappFormatted: formatBrazilianWhatsApp(localWhatsApp),
      possuiFiliais: input.possuiFiliais as boolean,
      desejaEmitirNota: input.desejaEmitirNota as boolean,
      submissionId,
      attribution: cleanAttribution(input.attribution),
      website: typeof input.website === "string" ? input.website : "",
      startedAt:
        typeof input.startedAt === "number" ? input.startedAt : undefined,
    },
  };
}

export function buildLeadWhatsAppMessage(input: {
  nome: string;
  possuiFiliais: boolean;
  desejaEmitirNota: boolean;
}) {
  const branchText = input.possuiFiliais ? "possui" : "não possui";
  const invoiceText = input.desejaEmitirNota ? "deseja" : "não deseja";

  return `Olá! Sou ${input.nome} e acabei de preencher o formulário do MoneySystem. Minha empresa ${branchText} filiais e ${invoiceText} emitir nota fiscal. Quero falar com um especialista.`;
}

export function buildLeadUpstreamPayload(
  input: Extract<LeadValidation, { ok: true }>["data"],
  userAgent: string,
  secret?: string,
) {
  const sourceParts = ["/ad"];
  if (input.attribution.utm_source) {
    sourceParts.push(`utm_source=${input.attribution.utm_source}`);
  }
  if (input.attribution.utm_campaign) {
    sourceParts.push(`utm_campaign=${input.attribution.utm_campaign}`);
  }

  return {
    nome: input.nome,
    whatsapp: `https://wa.me/${input.whatsappInternational}`,
    whatsapp_digitos: input.whatsappInternational,
    whatsapp_formatado: input.whatsappFormatted,
    possui_filiais: input.possuiFiliais ? "Sim" : "Não",
    emite_nf: input.desejaEmitirNota ? "Sim" : "Não",
    fonte: sourceParts.join(" | "),
    timestamp: new Date().toISOString(),
    user_agent: sanitizeSpreadsheetCell(userAgent.slice(0, 500)),
    submission_id: input.submissionId,
    attribution: input.attribution,
    ...(secret ? { secret } : {}),
  };
}
