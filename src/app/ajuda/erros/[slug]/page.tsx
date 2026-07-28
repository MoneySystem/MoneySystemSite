import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/ArticleBody";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getHelpError, helpErrors } from "@/content/help";
import { absoluteUrl, createWhatsAppUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return helpErrors.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getHelpError(slug);
  if (!article) return {};

  return {
    title: `${article.title} — Ajuda`,
    description: article.summary,
    alternates: { canonical: `/ajuda/erros/${article.slug}` },
  };
}

export default async function HelpErrorArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getHelpError(slug);
  if (!article) notFound();

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <article>
          <header className="help-article-hero help-article-hero--error">
            <div className="container help-article-hero__inner">
              <Breadcrumbs
                items={[
                  { label: "Início", href: "/" },
                  { label: "Ajuda", href: "/ajuda" },
                  { label: "Erros frequentes", href: "/ajuda/erros" },
                  { label: article.title },
                ]}
              />
              <p className="eyebrow eyebrow--bright">Erro frequente</p>
              <h1>{article.title}</h1>
              <p>{article.summary}</p>
            </div>
          </header>

          <div className="container help-error-layout">
            <aside>
              <strong>Antes de alterar</strong>
              <p>
                Anote o código, a mensagem completa, a data e o documento
                afetado.
              </p>
            </aside>
            <ArticleBody sections={article.sections} />
          </div>
        </article>

        <section className="error-support">
          <div className="container error-support__inner">
            <div>
              <h2>Ainda não resolveu?</h2>
              <p>
                Fale com nosso suporte humano e envie a mensagem completa do
                erro. Respondemos em até 5 minutos.
              </p>
            </div>
            <a
              className="button button--light"
              href={createWhatsAppUrl(
                `Olá! Preciso de ajuda com o erro: ${article.title}`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              Falar com suporte
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: article.title,
          description: article.summary,
          dateModified: article.updatedAt,
          author: { "@type": "Organization", name: "MoneySystem" },
          mainEntityOfPage: absoluteUrl(`/ajuda/erros/${article.slug}`),
        }}
      />
    </>
  );
}
