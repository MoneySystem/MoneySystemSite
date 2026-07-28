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
import {
  getResource,
  resources,
} from "@/content/resources";
import {
  combineSchemaGraphs,
  faqSchema,
  webPageSchema,
} from "@/lib/schema";
import { HOME_WHATSAPP_MESSAGE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  return {
    title: resource.metaTitle,
    description: resource.description,
    alternates: { canonical: `/recursos/${resource.slug}` },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();
  const path = `/recursos/${resource.slug}`;

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="topic-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Recursos", href: "/recursos" },
                { label: resource.eyebrow },
              ]}
            />
            <p className="eyebrow eyebrow--bright">{resource.eyebrow}</p>
            <h1>{resource.title}</h1>
            <p>{resource.description}</p>
          </div>
        </header>

        <article className="topic-page section">
          <div className="container topic-page__grid">
            <aside className="topic-page__aside">
              <p className="eyebrow">Entidades relacionadas</p>
              <ul>
                {resource.entities.map((entity) => (
                  <li key={entity}>{entity}</li>
                ))}
              </ul>
            </aside>
            <div>
              <section className="answer-card answer-card--compact">
                <p className="eyebrow">Resposta direta</p>
                <h2>O que isso significa na prática?</h2>
                {resource.shortAnswer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <ArticleBody sections={resource.sections} />

              <section className="topic-checklist">
                <p className="eyebrow">Antes de escolher</p>
                <h2>O que confirmar em uma demonstração?</h2>
                <ul>
                  <li>
                    Use exemplos reais da sua empresa, não apenas uma lista de
                    telas.
                  </li>
                  <li>
                    Confirme usuários, filiais, documentos e regras da
                    operação.
                  </li>
                  <li>
                    Entenda como os dados atuais serão preparados e conferidos.
                  </li>
                  <li>
                    Defina responsáveis pela implantação e pelo uso diário.
                  </li>
                </ul>
              </section>

              <aside className="migration-callout">
                <p className="eyebrow">Troca sem recomeço</p>
                <h2>Produtos, clientes e financeiro vêm com você.</h2>
                <p>
                  Na contratação, a equipe transfere sem custo adicional os
                  produtos, clientes e lançamentos financeiros disponíveis no
                  sistema anterior. A reunião completa de apresentação também
                  não tem custo.
                </p>
                <WhatsAppCta
                  message={HOME_WHATSAPP_MESSAGE}
                  className="button button--primary"
                >
                  Ver na minha empresa
                </WhatsAppCta>
              </aside>
            </div>
          </div>
        </article>

        <section className="faq-section section section--warm">
          <div className="container faq-section__grid">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Dúvidas sobre {resource.eyebrow.toLowerCase()}.</h2>
            </div>
            <div className="faq-list">
              {resource.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="knowledge-related section">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Conteúdo complementar</p>
                <h2>Continue pelo assunto relacionado.</h2>
              </div>
              <Link className="text-link" href="/recursos">
                Ver todos os recursos <ArrowIcon />
              </Link>
            </div>
            <div className="knowledge-related__grid">
              {resource.related.map((item) => (
                <Link href={item.href} key={item.href}>
                  <h3>{item.label}</h3>
                  <span>
                    Abrir conteúdo <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={combineSchemaGraphs(
          webPageSchema({
            path,
            name: resource.metaTitle,
            description: resource.description,
            breadcrumbs: [
              { name: "Início", path: "/" },
              { name: "Recursos", path: "/recursos" },
              { name: resource.eyebrow },
            ],
          }),
          faqSchema(path, resource.faqs),
        )}
      />
    </>
  );
}
