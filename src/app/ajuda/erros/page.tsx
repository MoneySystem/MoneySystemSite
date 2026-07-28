import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { helpErrors } from "@/content/help";
import { collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Erros frequentes — Central de Ajuda",
  description:
    "Diagnóstico para rejeições fiscais, certificado digital, emissão de NF-e, estoque e tributação no MoneySystem.",
  alternates: { canonical: "/ajuda/erros" },
};

export default function HelpErrorsPage() {
  const structuredData = collectionPageSchema({
    path: "/ajuda/erros",
    name: "Erros frequentes — Central de Ajuda MoneySystem",
    description:
      "Diagnóstico para rejeições fiscais, certificado digital, emissão de NF-e, estoque e tributação no MoneySystem.",
    breadcrumbs: [
      { name: "Início", path: "/" },
      { name: "Central de Ajuda", path: "/ajuda" },
      { name: "Erros frequentes" },
    ],
    items: helpErrors.map((article) => ({
      name: article.title,
      path: `/ajuda/erros/${article.slug}`,
      description: article.summary,
    })),
  });

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="help-category-hero help-category-hero--error">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Ajuda", href: "/ajuda" },
                { label: "Erros frequentes" },
              ]}
            />
            <p className="eyebrow eyebrow--bright">Diagnóstico</p>
            <h1>Erros frequentes, com uma ordem clara para corrigir.</h1>
            <p>
              Leia a mensagem completa, preserve o documento original e siga as
              conferências antes de tentar novamente.
            </p>
          </div>
        </header>

        <section className="error-list section">
          <div className="container">
            {helpErrors.map((article, index) => (
              <Link
                className="error-row"
                href={`/ajuda/erros/${article.slug}`}
                key={article.slug}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{article.title}</h2>
                  <p>{article.summary}</p>
                </div>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={structuredData} />
    </>
  );
}
