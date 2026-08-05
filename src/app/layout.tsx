import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";

import { JsonLd } from "@/components/JsonLd";
import { MetaPixel } from "@/components/MetaPixel";
import { META_PIXEL_ID } from "@/lib/meta-pixel";
import { siteEntityGraph } from "@/lib/schema";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const metaPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;

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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: metaPixelScript }}
        />
        <MetaPixel />
        <JsonLd data={siteEntityGraph()} />
      </body>
    </html>
  );
}
