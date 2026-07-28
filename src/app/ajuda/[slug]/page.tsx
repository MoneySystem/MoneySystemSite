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
import { articleSchema } from "@/lib/schema";
import { createWhatsAppUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const conceptLinks: Record<
  string,
  { href: string; label: string; title: string }
> = {
  financeiro: {
    href: "/recursos/controle-financeiro",
    label: "Entenda o conceito",
    title: "Como funciona o controle financeiro empresarial",
  },
  estoque: {
    href: "/recursos/controle-de-estoque",
    label: "Conhecimento relacionado",
    title: "O que um controle de estoque precisa mostrar",
  },
  "notas-fiscais-e-tributacoes": {
    href: "/recursos/emissao-de-nota-fiscal",
    label: "Antes do passo a passo",
    title: "Como funciona a emissão de nota fiscal",
  },
  vendas: {
    href: "/recursos/clientes-e-vendas",
    label: "Conhecimento relacionado",
    title: "Como conectar clientes, vendas e financeiro",
  },
  cadastros: {
    href: "/recursos/clientes-e-vendas",
    label: "Base da operação",
    title: "Por que clientes e cadastros precisam permanecer conectados",
  },
  servicos: {
    href: "/recursos/ordem-de-servico",
    label: "Entenda o fluxo",
    title: "Como organizar uma ordem de serviço",
  },
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
  const conceptLink = conceptLinks[category.slug] ?? {
    href: "/erp",
    label: "Guia de gestão",
    title: "Entenda como um ERP conecta as áreas da empresa",
  };
  const related = getArticlesByCategory(category.slug)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4);
  const path = `/ajuda/${article.slug}`;
  const structuredData = articleSchema({
    path,
    type: "TechArticle",
    headline: article.title,
    description: article.summary,
    dateModified: article.updatedAt,
    author: { type: "Organization" },
    keywords: article.keywords,
    breadcrumbs: [
      { name: "Início", path: "/" },
      { name: "Central de Ajuda", path: "/ajuda" },
      {
        name: category.title,
        path: `/ajuda/categoria/${category.slug}`,
      },
      { name: article.title },
    ],
  });

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
                <p>
                  O suporte humano responde em até 5 minutos nos canais e
                  períodos informados pela equipe.
                </p>
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
            <div>
              <ArticleBody sections={article.sections} />
              <aside className="help-concept-link">
                <p className="eyebrow">{conceptLink.label}</p>
                <h2>{conceptLink.title}</h2>
                <Link className="text-link" href={conceptLink.href}>
                  Abrir explicação <ArrowIcon />
                </Link>
              </aside>
            </div>
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
      <JsonLd data={structuredData} />
    </>
  );
}
