import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";

import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MoneySystem — Sua empresa em ordem",
    template: "%s | MoneySystem",
  },
  description:
    "Vendas, financeiro, estoque, notas fiscais, serviços e equipe em um só lugar, com migração gratuita e suporte 100% humano.",
  applicationName: SITE_NAME,
  authors: [{ name: "MoneySystem", url: SITE_URL }],
  creator: "MoneySystem",
  publisher: "MoneySystem",
  category: "Gestão empresarial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MoneySystem — Sua empresa em ordem",
    description:
      "Vendas, financeiro, estoque, notas fiscais e serviços em um só lugar.",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "MoneySystem — Sua empresa em ordem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneySystem — Sua empresa em ordem",
    description:
      "Vendas, financeiro, estoque, notas fiscais e serviços em um só lugar.",
    images: [absoluteUrl("/opengraph-image")],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111411" },
    { media: "(prefers-color-scheme: dark)", color: "#111411" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={instrumentSans.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: absoluteUrl("/logo.svg"),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: "Portuguese",
            },
          }}
        />
      </body>
    </html>
  );
}
