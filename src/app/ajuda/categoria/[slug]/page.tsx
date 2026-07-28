import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getArticlesByCategory,
  getHelpCategory,
  helpCategories,
} from "@/content/help";
import { collectionPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return helpCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getHelpCategory(slug);
  if (!category) return {};

  return {
    title: `${category.title} — Central de Ajuda`,
    description: category.description,
    alternates: { canonical: `/ajuda/categoria/${category.slug}` },
  };
}

export default async function HelpCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getHelpCategory(slug);
  if (!category) notFound();
  const articles = getArticlesByCategory(category.slug);
  const path = `/ajuda/categoria/${category.slug}`;
  const structuredData = collectionPageSchema({
    path,
    name: `${category.title} — Central de Ajuda MoneySystem`,
    description: category.description,
    breadcrumbs: [
      { name: "Início", path: "/" },
      { name: "Central de Ajuda", path: "/ajuda" },
      { name: category.title },
    ],
    items: articles.map((article) => ({
      name: article.title,
      path: `/ajuda/${article.slug}`,
      description: article.summary,
    })),
  });

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="help-category-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Ajuda", href: "/ajuda" },
                { label: category.title },
              ]}
            />
            <p className="eyebrow eyebrow--bright">Central de Ajuda</p>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
          </div>
        </header>

        <section className="help-article-list section">
          <div className="container help-article-list__grid">
            <aside>
              <p className="eyebrow">Nesta categoria</p>
              <strong>
                {articles.length} {articles.length === 1 ? "artigo" : "artigos"}
              </strong>
              <Link href="/ajuda">Ver todas as categorias</Link>
            </aside>
            <div>
              {articles.map((article, index) => (
                <Link
                  className="help-article-row"
                  href={`/ajuda/${article.slug}`}
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
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={structuredData} />
    </>
  );
}
