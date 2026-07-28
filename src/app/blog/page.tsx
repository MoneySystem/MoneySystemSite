import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre gestão empresarial, financeiro, mercado automotivo, implantação e histórias de clientes MoneySystem.",
  alternates: { canonical: "/blog" },
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
          <div className="container editorial-hero__grid">
            <div>
              <p className="eyebrow eyebrow--bright">Blog MoneySystem</p>
              <h1>Gestão explicada para quem precisa decidir.</h1>
            </div>
            <p>
              Ideias práticas, histórias reais e orientações para colocar
              números, processos e rotina em ordem.
            </p>
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
                  <span>{featured.author}</span>
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
    </>
  );
}
