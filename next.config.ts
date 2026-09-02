import type { NextConfig } from "next";

const scriptSource =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      `${scriptSource} https://connect.facebook.net https://bzrcdn.openai.com`,
      "connect-src 'self' https://connect.facebook.net https://www.facebook.com https://bzr.openai.com https://bzrcdn.openai.com",
      "img-src 'self' data: blob: https://www.facebook.com https://bzr.openai.com",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/termos",
        permanent: true,
      },
      {
        source: "/anuncios",
        destination: "/ad",
        permanent: true,
      },
      {
        source: "/automotivo",
        destination: "/solucoes/automotivo",
        permanent: true,
      },
      {
        source:
          "/blog/2025-08-21-moneysystem-erp-completo-para-pequenas-empresas",
        destination:
          "/blog/2025-11-05-moneysystem-erp-completo-para-pequenas-empresas",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
