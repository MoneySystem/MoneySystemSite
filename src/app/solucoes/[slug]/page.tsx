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
  getSolution,
  solutions,
} from "@/content/solutions";
import { servicePageSchema } from "@/lib/schema";
import {
  createWhatsAppUrl,
  HOME_WHATSAPP_MESSAGE,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return {
    title: solution.metaTitle,
    description: solution.description,
    alternates: { canonical: `/solucoes/${solution.slug}` },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const path = `/solucoes/${solution.slug}`;
  const message = `Olá! Quero entender como o MoneySystem atende ${solution.title.toLowerCase()} e agendar uma reunião sem custo.`;

  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="topic-hero topic-hero--solution">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Soluções", href: "/solucoes" },
                { label: solution.title },
              ]}
            />
            <p className="eyebrow eyebrow--bright">{solution.eyebrow}</p>
            <h1>{solution.title}</h1>
            <p>{solution.description}</p>
            <a
              className="button button--primary"
              href={createWhatsAppUrl(message)}
              target="_blank"
              rel="noreferrer"
            >
              Falar sobre minha empresa <ArrowIcon />
            </a>
          </div>
        </header>

        <article className="topic-page section">
          <div className="container topic-page__grid">
            <aside className="topic-page__aside">
              <p className="eyebrow">Este conteúdo explica</p>
              <ul>
                {solution.entities.map((entity) => (
                  <li key={entity}>{entity}</li>
                ))}
              </ul>
            </aside>
            <div>
              <section className="answer-card answer-card--compact">
                <p className="eyebrow">Resposta direta</p>
                <h2>Como o sistema entra nessa rotina?</h2>
                {solution.shortAnswer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <ArticleBody sections={solution.sections} />

              <section className="topic-checklist">
                <p className="eyebrow">O que vale confirmar</p>
                <h2>Uma demonstração precisa usar a sua operação.</h2>
                <ul>
                  <li>
                    Mostre como um atendimento, pedido ou serviço começa.
                  </li>
                  <li>
                    Explique onde produtos, materiais e estoque entram no
                    processo.
                  </li>
                  <li>
                    Confirme os documentos fiscais e as regras da sua empresa.
                  </li>
                  <li>
                    Liste usuários, responsabilidades, filiais e relatórios
                    necessários.
                  </li>
                </ul>
              </section>

              <aside className="migration-callout">
                <p className="eyebrow">Implantação acompanhada</p>
                <h2>Você não precisa recadastrar tudo sozinho.</h2>
                <p>
                  Na contratação, a equipe transfere sem custo adicional
                  produtos, clientes e lançamentos financeiros disponíveis no
                  sistema anterior. Também apresenta o MoneySystem de ponta a
                  ponta em uma reunião sem custo.
                </p>
                <a
                  className="button button--primary"
                  href={createWhatsAppUrl(message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar minha reunião
                </a>
              </aside>
            </div>
          </div>
        </article>

        <section className="faq-section section section--warm">
          <div className="container faq-section__grid">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Respostas sobre essa operação.</h2>
            </div>
            <div className="faq-list">
              {solution.faqs.map((faq) => (
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
                <h2>Recursos e orientações relacionados.</h2>
              </div>
              <Link className="text-link" href="/solucoes">
                Ver todas as soluções <ArrowIcon />
              </Link>
            </div>
            <div className="knowledge-related__grid">
              {solution.related.map((item) => (
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

        <section className="final-cta section">
          <div className="container final-cta__inner open-frame">
            <p className="eyebrow eyebrow--bright">
              Sua rotina, sem apresentação genérica
            </p>
            <h2>Veja o MoneySystem aplicado à sua empresa.</h2>
            <p>
              Conte como o trabalho acontece e tire suas dúvidas com uma pessoa
              da equipe.
            </p>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--light"
            >
              Conhecer o MoneySystem
            </WhatsAppCta>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={servicePageSchema({
          path,
          name: solution.metaTitle,
          description: solution.description,
          serviceType: solution.metaTitle,
          audience: [solution.title],
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Soluções", path: "/solucoes" },
            { name: solution.title },
          ],
          faqs: solution.faqs,
        })}
      />
    </>
  );
}
