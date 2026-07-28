import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts } from "@/content/blog";
import { personProfileSchema } from "@/lib/schema";

const path = "/autores/ney-moraes";

export const metadata: Metadata = {
  title: "Ney Moraes — autor no Blog MoneySystem",
  description:
    "Artigos de Ney Moraes sobre gestão empresarial, financeiro, ERP e o mercado de películas no Blog MoneySystem.",
  alternates: { canonical: path },
};

export default function NeyMoraesAuthorPage() {
  const posts = blogPosts.filter((post) => post.author === "Ney Moraes");

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="author-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Ney Moraes" },
              ]}
            />
            <p className="eyebrow eyebrow--bright">Autor</p>
            <h1>Ney Moraes</h1>
            <p>
              Autor no Blog MoneySystem, com conteúdos sobre gestão
              empresarial, organização financeira, ERP e operações do mercado
              de películas.
            </p>
          </div>
        </header>

        <section className="author-posts section">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Conteúdos publicados</p>
                <h2>{posts.length} artigos assinados.</h2>
              </div>
              <p>
                Cada artigo informa data de publicação, atualização e temas
                relacionados.
              </p>
            </div>
            <div className="post-grid">
              {posts.map((post) => (
                <article className="post-card" key={post.slug}>
                  <div className="article-tags">
                    {post.categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
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
      <JsonLd
        data={personProfileSchema({
          path,
          slug: "ney-moraes",
          name: "Ney Moraes",
          description:
            "Autor no Blog MoneySystem sobre gestão empresarial, financeiro, ERP e mercado de películas.",
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Ney Moraes" },
          ],
        })}
      />
    </>
  );
}
