import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/ArticleBody";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { blogPosts, getBlogPost } from "@/content/blog";
import type { ContentSection } from "@/content/types";
import {
  articleSchema,
  combineSchemaGraphs,
  faqSchema,
  articleId,
} from "@/lib/schema";
import { HOME_WHATSAPP_MESSAGE, absoluteUrl } from "@/lib/site";

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
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const isNeyMoraes = post.author === "Ney Moraes";

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.entities,
    authors: [
      isNeyMoraes
        ? {
            name: post.author,
            url: absoluteUrl("/autores/ney-moraes"),
          }
        : { name: post.author },
    ],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: `${post.publishedAt}T12:00:00-03:00`,
      modifiedTime: `${post.updatedAt ?? post.publishedAt}T12:00:00-03:00`,
      authors: [post.author],
      tags: post.categories,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const isNeyMoraes = post.author === "Ney Moraes";

  const path = `/blog/${post.slug}`;
  const breadcrumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title },
  ];
  const related = post.relatedSlugs?.length
    ? post.relatedSlugs.flatMap((relatedSlug) => {
        const relatedPost = getBlogPost(relatedSlug);
        return relatedPost ? [relatedPost] : [];
      })
    : blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const visibleSections: ContentSection[] = [
    ...(post.shortAnswer
      ? [
          {
            heading: "Resposta direta",
            paragraphs: [post.shortAnswer],
          },
        ]
      : []),
    ...post.sections,
    ...(post.faqs?.length
      ? [
          {
            heading: "Perguntas frequentes",
            paragraphs: [
              "Respostas objetivas para as dúvidas mais comuns sobre este tema.",
            ],
          },
          ...post.faqs.map((faq) => ({
            heading: faq.question,
            paragraphs: [faq.answer],
          })),
        ]
      : []),
  ];
  const howToSections = post.shortAnswer
    ? post.sections.filter((section) => section.numbered?.length)
    : [];
  const howToId = `${absoluteUrl(path)}#howto`;
  const articleStructuredData = articleSchema({
    path,
    type: "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: isNeyMoraes
      ? {
          type: "Person",
          slug: "ney-moraes",
          name: post.author,
        }
      : { type: "Organization" },
    breadcrumbs,
    keywords: post.entities ?? post.categories,
    hasPartIds: howToSections.length ? [howToId] : undefined,
  });
  const howToStructuredData = howToSections.length
    ? {
        "@type": "HowTo",
        "@id": howToId,
        name:
          howToSections.length === 1
            ? howToSections[0].heading
            : `Passo a passo: ${post.title}`,
        description: post.shortAnswer ?? post.excerpt,
        inLanguage: "pt-BR",
        isPartOf: { "@id": articleId(path) },
        step: howToSections.map((section) => ({
          "@type": "HowToSection",
          name: section.heading,
          itemListElement: (section.numbered ?? []).map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step,
            text: step,
          })),
        })),
      }
    : null;
  const structuredData = combineSchemaGraphs(
    articleStructuredData,
    ...(post.faqs?.length ? [faqSchema(path, post.faqs)] : []),
    ...(howToStructuredData ? [howToStructuredData] : []),
  );

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <article>
          <header className="article-hero">
            <div className="container article-hero__inner">
              <Breadcrumbs
                items={[
                  { label: "Início", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
              <div className="article-tags">
                {post.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
              <h1>{post.title}</h1>
              <p className="article-hero__excerpt">{post.excerpt}</p>
              <div className="post-meta post-meta--hero">
                <span>
                  Por{" "}
                  {isNeyMoraes ? (
                    <Link href="/autores/ney-moraes">{post.author}</Link>
                  ) : (
                    post.author
                  )}
                </span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                {post.updatedAt ? (
                  <span>
                    Atualizado em{" "}
                    <time dateTime={post.updatedAt}>
                      {formatDate(post.updatedAt)}
                    </time>
                  </span>
                ) : null}
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <div className="article-layout__aside" aria-hidden="true">
              <span>MoneySystem</span>
              <div />
              <small>Gestão empresarial</small>
            </div>
            <ArticleBody sections={visibleSections} />
          </div>
        </article>

        <section className="article-cta">
          <div className="container article-cta__inner">
            <div>
              <p className="eyebrow eyebrow--bright">
                Leve essa organização para a empresa
              </p>
              <h2>Conheça o MoneySystem de ponta a ponta.</h2>
              <p>
                A reunião é completa, sem custo e feita por uma pessoa da nossa
                equipe.
              </p>
            </div>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--light"
            >
              Falar com especialista
            </WhatsAppCta>
          </div>
        </section>

        <section className="related-posts section">
          <div className="container">
            <p className="eyebrow">Continue lendo</p>
            <div className="related-posts__grid">
              {related.map((item) => (
                <article key={item.slug}>
                  <span>{item.categories[0]}</span>
                  <h2>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h2>
                  <Link className="text-link" href={`/blog/${item.slug}`}>
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
