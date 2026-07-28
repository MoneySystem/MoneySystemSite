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
import {
  HOME_WHATSAPP_MESSAGE,
  absoluteUrl,
} from "@/lib/site";

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

  return {
    title: post.title,
    description: post.excerpt,
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

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

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
                <span>Por {post.author}</span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
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
            <ArticleBody sections={post.sections} />
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          author: {
            "@type": "Person",
            name: post.author,
          },
          publisher: {
            "@type": "Organization",
            name: "MoneySystem",
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl("/logo.svg"),
            },
          },
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        }}
      />
    </>
  );
}
