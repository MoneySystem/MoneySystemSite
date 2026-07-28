import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts } from "@/content/blog";
import { collectionPageSchema } from "@/lib/schema";

const blogPath = "/blog";
const blogTitle = "Blog MoneySystem sobre ERP e gestão empresarial";
const blogDescription =
  "Guias claros sobre ERP, organização empresarial, controle financeiro, estoque, emissão de nota fiscal, ordens de serviço e uso de sistemas de gestão.";

export const metadata: Metadata = {
  title: "Blog sobre ERP e Gestão Empresarial",
  description: blogDescription,
  alternates: {
    canonical: blogPath,
    types: {
      "application/rss+xml": `${blogPath}/feed.xml`,
    },
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

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <section className="editorial-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Blog" },
              ]}
            />
            <div className="editorial-hero__grid">
              <div>
                <p className="eyebrow eyebrow--bright">Blog MoneySystem</p>
                <h1>Gestão explicada para quem precisa decidir.</h1>
              </div>
              <p>
                Ideias práticas, histórias reais e orientações para colocar
                números, processos e rotina em ordem.
              </p>
            </div>
          </div>
        </section>

        <section className="blog-index section">
          <div className="container">
            <article className="featured-post">
              <Link
                className="featured-post__visual open-frame open-frame--light"
                href={`/blog/${featured.slug}`}
                aria-label={`Ler ${featured.title}`}
              >
                <Image
                  src="/images/dashboard-devices.png"
                  alt="Tela real do dashboard MoneySystem"
                  width={962}
                  height={698}
                  loading="eager"
                  sizes="(max-width: 900px) 92vw, 52vw"
                />
              </Link>
              <div className="featured-post__content">
                <div className="article-tags">
                  {featured.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <h2>
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.excerpt}</p>
                <div className="post-meta">
                  {featured.author === "Ney Moraes" ? (
                    <Link href="/autores/ney-moraes">{featured.author}</Link>
                  ) : (
                    <span>{featured.author}</span>
                  )}
                  <time dateTime={featured.publishedAt}>
                    {formatDate(featured.publishedAt)}
                  </time>
                  <span>{featured.readingTime}</span>
                </div>
                <Link className="text-link" href={`/blog/${featured.slug}`}>
                  Ler artigo <ArrowIcon />
                </Link>
              </div>
            </article>

            <div className="post-grid">
              {posts.map((post, index) => (
                <article className="post-card" key={post.slug}>
                  <div className="post-card__index">
                    <span>{String(index + 2).padStart(2, "0")}</span>
                    <small>{post.categories[0]}</small>
                  </div>
                  <div className="article-tags">
                    {post.categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    {post.author === "Ney Moraes" ? (
                      <Link href="/autores/ney-moraes">{post.author}</Link>
                    ) : (
                      <span>{post.author}</span>
                    )}
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span>{post.readingTime}</span>
                  </div>
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
      <JsonLd
        data={collectionPageSchema({
          path: blogPath,
          name: blogTitle,
          description: blogDescription,
          items: blogPosts.map((post) => ({
            name: post.title,
            path: `/blog/${post.slug}`,
            description: post.excerpt,
          })),
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Blog" },
          ],
        })}
      />
    </>
  );
}
