import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MoneySystem",
    short_name: "MoneySystem",
    description:
      "Gestão empresarial com vendas, financeiro, estoque, notas fiscais e serviços.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafbf8",
    theme_color: "#111411",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
