import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HelpSearch } from "@/components/HelpSearch";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts } from "@/content/blog";
import {
  helpArticles,
  helpCategories,
  helpErrors,
} from "@/content/help";
import { collectionPageSchema } from "@/lib/schema";
import { createWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Central de Ajuda",
  description:
    "Encontre respostas sobre implantação, cadastros, estoque, vendas, notas fiscais, financeiro, serviços e configurações do MoneySystem.",
  alternates: { canonical: "/ajuda" },
};

export default function HelpCenterPage() {
  const structuredData = collectionPageSchema({
    path: "/ajuda",
    name: "Central de Ajuda MoneySystem",
    description:
      "Encontre respostas sobre implantação, cadastros, estoque, vendas, notas fiscais, financeiro, serviços e configurações do MoneySystem.",
    breadcrumbs: [
      { name: "Início", path: "/" },
      { name: "Central de Ajuda" },
    ],
    items: [
      {
        name: "Erros frequentes",
        path: "/ajuda/erros",
        description:
          "Diagnóstico para rejeições fiscais, certificado digital, emissão de NF-e, estoque e tributação.",
      },
      ...helpCategories.map((category) => ({
        name: category.title,
        path: `/ajuda/categoria/${category.slug}`,
        description: category.description,
      })),
    ],
  });

  const searchItems = [
    ...helpArticles.map((article) => {
      const category = helpCategories.find(
        (item) => item.slug === article.category,
      );
      return {
        title: article.title,
        summary: article.summary,
        href: `/ajuda/${article.slug}`,
        category: category?.title ?? "Ajuda",
        keywords: article.keywords,
      };
    }),
    ...helpErrors.map((article) => ({
      title: article.title,
      summary: article.summary,
      href: `/ajuda/erros/${article.slug}`,
      category: "Erros frequentes",
      keywords: article.keywords,
    })),
  ];

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <section className="help-hero">
          <div className="container help-hero__inner">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Central de Ajuda" },
              ]}
            />
            <p className="eyebrow eyebrow--bright">Central de Ajuda</p>
            <h1>Encontre a resposta. Continue o trabalho.</h1>
            <p>
              Orientações objetivas para configurar e usar o MoneySystem com
              segurança.
            </p>
            <HelpSearch items={searchItems} />
          </div>
        </section>

        <section className="help-errors-strip">
          <div className="container help-errors-strip__inner">
            <div>
              <span>Erros frequentes</span>
              <h2>NF-e rejeitada, certificado, tributação ou estoque?</h2>
              <p>
                Vá direto ao diagnóstico com uma sequência clara de
                conferência.
              </p>
            </div>
            <Link className="button button--light" href="/ajuda/erros">
              Ver erros frequentes <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="help-categories section">
          <div className="container">
            <div className="help-section-heading">
              <div>
                <p className="eyebrow">Navegue por categoria</p>
                <h2>Do primeiro acesso ao fechamento do mês.</h2>
              </div>
              <p>
                Cada categoria reúne artigos relacionados a uma rotina do
                sistema.
              </p>
            </div>
            <div className="category-grid">
              {helpCategories.map((category, index) => {
                const count = helpArticles.filter(
                  (article) => article.category === category.slug,
                ).length;
                return (
                  <Link
                    className="category-card"
                    href={`/ajuda/categoria/${category.slug}`}
                    key={category.slug}
                  >
                    <div>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <small>
                        {count} {count === 1 ? "artigo" : "artigos"}
                      </small>
                    </div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <ArrowIcon />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="help-human section section--warm">
          <div className="container help-human__grid">
            <div>
              <p className="eyebrow">Ainda precisa de ajuda?</p>
              <h2>Nosso suporte é 100% humano.</h2>
              <p>
                Envie o contexto da dúvida e, se possível, a mensagem exibida
                pelo sistema. Respondemos em até 5 minutos.
              </p>
            </div>
            <a
              className="button button--dark"
              href={createWhatsAppUrl(
                "Olá! Preciso de ajuda com o MoneySystem.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Falar com o suporte <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="help-blog section">
          <div className="container">
            <div className="help-section-heading">
              <div>
                <p className="eyebrow">No blog</p>
                <h2>Gestão, histórias e decisões além do passo a passo.</h2>
              </div>
              <Link className="text-link" href="/blog">
                Ver todos no blog <ArrowIcon />
              </Link>
            </div>
            <div className="help-blog__grid">
              {blogPosts.slice(0, 3).map((post) => (
                <article key={post.slug}>
                  <span>{post.categories[0]}</span>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" href={`/blog/${post.slug}`}>
                    Ler artigo <ArrowIcon />
                  </Link>
                </article>
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
