export const SITE_NAME = "MoneySystem";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://moneysystem.com.br";

export const WHATSAPP_NUMBER =
  process.env.WHATSAPP_NUMBER?.replace(/\D/g, "") || "5548988745520";

export const LOGIN_URL = "https://app.moneysystem.com.br/";

export const NAVIGATION = [
  { label: "Recursos", href: "/#recursos" },
  { label: "Soluções", href: "/solucoes/automotivo" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Planos", href: "/#planos" },
  { label: "Blog", href: "/blog" },
  { label: "Ajuda", href: "/ajuda" },
] as const;

export const HOME_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site do MoneySystem e quero agendar uma reunião completa, sem custo, para entender como o sistema pode funcionar na minha empresa.";

export const AUTOMOTIVE_WHATSAPP_MESSAGE =
  "Olá! Vim pela página da solução automotiva e quero agendar uma reunião sem custo para conhecer o MoneySystem.";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
