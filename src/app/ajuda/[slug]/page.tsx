import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/ArticleBody";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getArticlesByCategory,
  getHelpArticle,
  getHelpCategory,
  helpArticles,
} from "@/content/help";
import { absoluteUrl, createWhatsAppUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(`${date}T12:00:00-03:00`));
}

export function generateStaticParams() {
  return helpArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} — Ajuda`,
    description: article.summary,
    alternates: { canonical: `/ajuda/${article.slug}` },
  };
}

export default async function HelpArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) notFound();
  const category = getHelpCategory(article.category);
  if (!category) notFound();
  const related = getArticlesByCategory(category.slug)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <article>
          <header className="help-article-hero">
            <div className="container help-article-hero__inner">
              <Breadcrumbs
                items={[
                  { label: "Início", href: "/" },
                  { label: "Ajuda", href: "/ajuda" },
                  {
                    label: category.title,
                    href: `/ajuda/categoria/${category.slug}`,
                  },
                  { label: article.title },
                ]}
              />
              <p className="eyebrow eyebrow--bright">{category.title}</p>
              <h1>{article.title}</h1>
              <p>{article.summary}</p>
              <small>
                Atualizado em <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
              </small>
            </div>
          </header>

          <div className="container help-article-layout">
            <aside className="help-article-aside">
              <p className="eyebrow">Categoria</p>
              <Link href={`/ajuda/categoria/${category.slug}`}>
                {category.title} <ArrowIcon />
              </Link>
              <div>
                <strong>Precisa de uma pessoa?</strong>
                <p>O suporte humano responde em até 5 minutos.</p>
                <a
                  href={createWhatsAppUrl(
                    `Olá! Preciso de ajuda com: ${article.title}`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com suporte
                </a>
              </div>
            </aside>
            <ArticleBody sections={article.sections} />
          </div>
        </article>

        {related.length > 0 ? (
          <section className="related-help section section--warm">
            <div className="container">
              <p className="eyebrow">Nesta categoria</p>
              <div className="related-help__grid">
                {related.map((item) => (
                  <Link href={`/ajuda/${item.slug}`} key={item.slug}>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: article.title,
          description: article.summary,
          dateModified: article.updatedAt,
          author: {
            "@type": "Organization",
            name: "MoneySystem",
          },
          mainEntityOfPage: absoluteUrl(`/ajuda/${article.slug}`),
        }}
      />
    </>
  );
}
