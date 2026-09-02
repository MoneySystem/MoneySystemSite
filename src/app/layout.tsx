import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";

import { JsonLd } from "@/components/JsonLd";
import { MetaPixel } from "@/components/MetaPixel";
import { OpenAIAdsPixel } from "@/components/OpenAIAdsPixel";
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

const rawOpenAIAdsPixelId = process.env.OPENAI_ADS_PIXEL_ID?.trim() ?? "";
const openAIAdsPixelId = /^[A-Za-z0-9_-]{1,128}$/.test(rawOpenAIAdsPixelId)
  ? rawOpenAIAdsPixelId
  : null;
const openAIAdsPixelScript = openAIAdsPixelId
  ? `(function (w, d, s, u) {
  if (w.oaiq) return;
  var q = function () { q.q.push(arguments); };
  q.q = [];
  w.oaiq = q;
  var js = d.createElement(s);
  js.async = true;
  js.src = u;
  var f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(js, f);
})(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");
oaiq("init", { pixelId: ${JSON.stringify(openAIAdsPixelId)} });
oaiq("measure", "page_viewed", {
  type: "contents",
  contents: [{
    id: window.location.pathname,
    name: window.location.pathname,
    content_type: "page"
  }]
});`
  : null;

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
        {openAIAdsPixelScript ? (
          <Script
            id="openai-ads-pixel"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: openAIAdsPixelScript }}
          />
        ) : null}
        {children}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: metaPixelScript }}
        />
        <MetaPixel />
        <OpenAIAdsPixel />
        <JsonLd data={siteEntityGraph()} />
      </body>
    </html>
  );
}
