import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { solutions } from "@/content/solutions";
import { collectionPageSchema } from "@/lib/schema";

const path = "/solucoes";

const allSolutions = [
  {
    slug: "automotivo",
    title: "Setor automotivo",
    metaTitle: "Sistema para o setor automotivo",
    description:
      "Visão completa para oficinas, autopeças, películas, PPF e serviços ligados a veículos.",
  },
  ...solutions,
];

export const metadata: Metadata = {
  title: "Soluções de gestão por tipo de empresa",
  description:
    "Veja como o MoneySystem organiza oficinas, autopeças, comércio, prestadores, distribuidoras, gráficas, lojas, pequenas e médias empresas.",
  alternates: { canonical: path },
};

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="knowledge-hero knowledge-hero--solutions">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Soluções" },
              ]}
            />
            <div className="knowledge-hero__grid">
              <div>
                <p className="eyebrow eyebrow--bright">
                  Soluções MoneySystem
                </p>
                <h1>O mesmo controle, aplicado à rotina do seu negócio.</h1>
              </div>
              <p>
                Cada setor combina produtos, serviços, documentos e equipe de
                um jeito próprio. Escolha uma operação para ver o fluxo com
                clareza.
              </p>
            </div>
          </div>
        </header>

        <section className="knowledge-intro section">
          <div className="container knowledge-intro__grid">
            <div>
              <p className="eyebrow">Resposta direta</p>
              <h2>
                O MoneySystem atende empresas de produtos, serviços e
                distribuição.
              </h2>
            </div>
            <div>
              <p>
                O ponto de partida muda por segmento. Uma oficina começa pela
                ordem de serviço; uma loja, pela venda; uma distribuidora, pelo
                pedido e pela entrega.
              </p>
              <p>
                As páginas abaixo explicam essas diferenças sem prometer uma
                configuração genérica. A reunião inicial confirma o que faz
                sentido para cada empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-directory section section--warm">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Escolha sua operação</p>
                <h2>Encontre o contexto mais próximo da sua empresa.</h2>
              </div>
              <p>
                As páginas mostram processo, recursos relacionados, dúvidas e
                pontos que devem ser confirmados na demonstração.
              </p>
            </div>
            <div className="solution-directory__grid">
              {allSolutions.map((solution, index) => (
                <Link
                  href={`/solucoes/${solution.slug}`}
                  key={solution.slug}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{solution.title}</h2>
                  <p>{solution.description}</p>
                  <small>
                    Ver solução <ArrowIcon />
                  </small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="knowledge-map section">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Como avaliar</p>
                <h2>O segmento orienta a conversa. A rotina define a solução.</h2>
              </div>
              <p>
                Duas empresas do mesmo setor podem ter processos diferentes.
                Por isso, a escolha precisa considerar o caminho real da
                informação.
              </p>
            </div>
            <ol className="knowledge-map__steps">
              <li>
                <span>01</span>
                <strong>O que a empresa vende ou executa?</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Onde estoque e serviços se encontram?</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Quais documentos precisam ser emitidos?</strong>
              </li>
              <li>
                <span>04</span>
                <strong>Quem precisa consultar ou registrar?</strong>
              </li>
            </ol>
          </div>
        </section>

        <section className="knowledge-links section">
          <div className="container knowledge-links__grid">
            <Link href="/erp">
              <p className="eyebrow">Entenda a base</p>
              <h2>O que é um ERP?</h2>
              <span>
                Ler guia <ArrowIcon />
              </span>
            </Link>
            <Link href="/recursos">
              <p className="eyebrow">Veja por área</p>
              <h2>Recursos do MoneySystem.</h2>
              <span>
                Explorar recursos <ArrowIcon />
              </span>
            </Link>
            <Link href="/contato">
              <p className="eyebrow">Converse com a equipe</p>
              <h2>Conte como sua empresa trabalha.</h2>
              <span>
                Ver formas de contato <ArrowIcon />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={collectionPageSchema({
          path,
          name: "Soluções de gestão MoneySystem",
          description:
            "Soluções do MoneySystem organizadas por tipo de empresa e operação.",
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Soluções" },
          ],
          items: allSolutions.map((solution) => ({
            name: solution.metaTitle,
            path: `/solucoes/${solution.slug}`,
            description: solution.description,
          })),
        })}
      />
    </>
  );
}
