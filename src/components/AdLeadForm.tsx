"use client";

import Link from "next/link";
import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { normalizeBrazilianWhatsApp } from "@/lib/lead";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, unknown>,
    ) => void;
  }
}

type FieldErrors = Partial<
  Record<
    "nome" | "whatsapp" | "possuiFiliais" | "desejaEmitirNota" | "form",
    string
  >
>;

type FormState = {
  nome: string;
  whatsapp: string;
  possuiFiliais: boolean | null;
  desejaEmitirNota: boolean | null;
};

function maskWhatsApp(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 11 && digits.startsWith("55")) {
    digits = digits.slice(2);
  }
  digits = digits.slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function collectAttribution() {
  const params = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "fbclid",
    "msclkid",
  ];
  const attribution: Record<string, string> = {};

  keys.forEach((key) => {
    const value = params.get(key);
    if (value) attribution[key] = value;
  });

  if (document.referrer) attribution.referrer = document.referrer;
  attribution.landing_url = window.location.href;

  return attribution;
}

export function AdLeadForm() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    whatsapp: "",
    possuiFiliais: null,
    desejaEmitirNota: null,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [successUrl, setSuccessUrl] = useState("");
  const startedAt = useRef(0);
  const honeypot = useRef("");
  const nameRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const branchRef = useRef<HTMLInputElement>(null);
  const invoiceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function validate() {
    const nextErrors: FieldErrors = {};

    if (!form.nome.trim()) {
      nextErrors.nome = "Informe seu nome.";
    } else if (form.nome.trim().length < 2) {
      nextErrors.nome =
        "Digite seu nome completo ou como prefere ser chamado.";
    }

    if (!form.whatsapp.trim()) {
      nextErrors.whatsapp = "Informe seu número de WhatsApp.";
    } else if (!normalizeBrazilianWhatsApp(form.whatsapp)) {
      nextErrors.whatsapp = "Confira o DDD e o número informado.";
    }

    if (form.possuiFiliais === null) {
      nextErrors.possuiFiliais = "Selecione uma opção para continuar.";
    }

    if (form.desejaEmitirNota === null) {
      nextErrors.desejaEmitirNota = "Selecione uma opção para continuar.";
    }

    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0] as keyof FieldErrors;
    if (firstError === "nome") nameRef.current?.focus();
    if (firstError === "whatsapp") whatsappRef.current?.focus();
    if (firstError === "possuiFiliais") branchRef.current?.focus();
    if (firstError === "desejaEmitirNota") invoiceRef.current?.focus();

    return Object.keys(nextErrors).length === 0;
  }

  function navigateAfterAnalytics(whatsappUrl: string) {
    let navigated = false;
    const navigate = () => {
      if (navigated) return;
      navigated = true;
      window.location.assign(whatsappUrl);
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        event_callback: navigate,
        event_timeout: 650,
      });
      window.setTimeout(navigate, 700);
      return;
    }

    window.setTimeout(navigate, 350);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || !validate()) return;

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          whatsapp: form.whatsapp,
          possuiFiliais: form.possuiFiliais,
          desejaEmitirNota: form.desejaEmitirNota,
          submissionId: crypto.randomUUID(),
          attribution: collectAttribution(),
          website: honeypot.current,
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | {
            ok?: boolean;
            whatsappUrl?: string;
            errors?: FieldErrors;
          }
        | null;

      if (!response.ok || !result?.ok || !result.whatsappUrl) {
        if (response.status === 400 && result?.errors) {
          setErrors(result.errors);
        } else if (response.status === 403) {
          setErrors({
            form: "Não conseguimos validar este envio. Recarregue a página e tente novamente.",
          });
        } else if (response.status === 429) {
          setErrors({
            form: "Já recebemos uma tentativa recente. Aguarde alguns minutos e envie novamente.",
          });
        } else {
          setErrors({
            form: "Não conseguimos enviar seus dados agora. Confira sua conexão e tente novamente.",
          });
        }
        setStatus("idle");
        return;
      }

      setSuccessUrl(result.whatsappUrl);
      setStatus("success");
      navigateAfterAnalytics(result.whatsappUrl);
    } catch {
      setErrors({
        form: "Não conseguimos enviar seus dados agora. Confira sua conexão e tente novamente.",
      });
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-success" role="status" aria-live="polite">
        <div className="lead-success__mark" aria-hidden="true">
          ✓
        </div>
        <p className="eyebrow">Dados recebidos</p>
        <h2>Pronto. Agora vamos abrir o WhatsApp.</h2>
        <p>
          Seus dados já foram enviados. Uma pessoa da equipe MoneySystem
          continuará a conversa com você.
        </p>
        <p className="lead-success__human">
          Atendimento 100% humano · resposta em até 5 minutos
        </p>
        <a className="button button--primary button--full" href={successUrl}>
          Continuar para o WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="lead-form__heading">
        <div className="lead-form__step">
          <span>4 respostas rápidas</span>
          <span>Reunião sem custo</span>
        </div>
        <p className="eyebrow">Uma conversa sobre a sua operação</p>
        <h2>Veja o MoneySystem na sua empresa.</h2>
        <p>
          Preencha os campos abaixo. Depois do envio, você segue para o WhatsApp
          e fala com uma pessoa da nossa equipe.
        </p>
      </div>

      <ul className="lead-form__proof" aria-label="Como será o atendimento">
        <li>Demonstração personalizada</li>
        <li>Atendimento sem robôs</li>
        <li>Sem compromisso</li>
      </ul>

      <div className="form-field">
        <label htmlFor="lead-name">Nome</label>
        <input
          ref={nameRef}
          id="lead-name"
          name="nome"
          type="text"
          value={form.nome}
          onChange={(event) =>
            setForm((current) => ({ ...current, nome: event.target.value }))
          }
          placeholder="Como podemos chamar você?"
          autoComplete="name"
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={errors.nome ? "lead-name-error" : undefined}
          maxLength={80}
        />
        {errors.nome ? (
          <p className="field-error" id="lead-name-error">
            {errors.nome}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="lead-whatsapp">Número do WhatsApp</label>
        <input
          ref={whatsappRef}
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          value={form.whatsapp}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              whatsapp: maskWhatsApp(event.target.value),
            }))
          }
          placeholder="(00) 00000-0000"
          autoComplete="tel"
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={
            errors.whatsapp ? "lead-whatsapp-error" : "lead-whatsapp-hint"
          }
        />
        <p className="field-hint" id="lead-whatsapp-hint">
          Inclua o DDD.
        </p>
        {errors.whatsapp ? (
          <p className="field-error" id="lead-whatsapp-error">
            {errors.whatsapp}
          </p>
        ) : null}
      </div>

      <fieldset
        className="form-field form-choice"
        aria-describedby={
          errors.possuiFiliais ? "lead-branches-error" : undefined
        }
      >
        <legend>Sua empresa possui filiais?</legend>
        <div className="choice-grid">
          {[true, false].map((value, index) => (
            <label key={String(value)}>
              <input
                ref={index === 0 ? branchRef : undefined}
                type="radio"
                name="possuiFiliais"
                value={value ? "sim" : "nao"}
                checked={form.possuiFiliais === value}
                onChange={() =>
                  setForm((current) => ({
                    ...current,
                    possuiFiliais: value,
                  }))
                }
              />
              <span>{value ? "Sim" : "Não"}</span>
            </label>
          ))}
        </div>
        {errors.possuiFiliais ? (
          <p className="field-error" id="lead-branches-error">
            {errors.possuiFiliais}
          </p>
        ) : null}
      </fieldset>

      <fieldset
        className="form-field form-choice"
        aria-describedby={
          errors.desejaEmitirNota ? "lead-invoice-error" : undefined
        }
      >
        <legend>Deseja emitir nota?</legend>
        <div className="choice-grid">
          {[true, false].map((value, index) => (
            <label key={String(value)}>
              <input
                ref={index === 0 ? invoiceRef : undefined}
                type="radio"
                name="desejaEmitirNota"
                value={value ? "sim" : "nao"}
                checked={form.desejaEmitirNota === value}
                onChange={() =>
                  setForm((current) => ({
                    ...current,
                    desejaEmitirNota: value,
                  }))
                }
              />
              <span>{value ? "Sim" : "Não"}</span>
            </label>
          ))}
        </div>
        {errors.desejaEmitirNota ? (
          <p className="field-error" id="lead-invoice-error">
            {errors.desejaEmitirNota}
          </p>
        ) : null}
      </fieldset>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="lead-website">Site da empresa</label>
        <input
          id="lead-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          onChange={(event) => {
            honeypot.current = event.target.value;
          }}
        />
      </div>

      {errors.form ? (
        <p className="form-error" role="alert" aria-live="assertive">
          {errors.form}
        </p>
      ) : null}

      <button
        className="button button--primary button--full lead-form__submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? "Enviando seus dados…"
          : "Quero ver como funciona"}
      </button>

      <p className="lead-form__privacy">
        Usaremos seus dados apenas para entrar em contato sobre o MoneySystem.{" "}
        <Link href="/termos">Leia os Termos e a Política de Privacidade.</Link>
      </p>
      <p className="lead-form__support">
        Atendimento 100% humano · resposta em até 5 minutos · sem robôs
      </p>
      <noscript>
        Ative o JavaScript para enviar o formulário e continuar pelo WhatsApp.
      </noscript>
    </form>
  );
}
