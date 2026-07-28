import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { resources } from "@/content/resources";
import { collectionPageSchema } from "@/lib/schema";

const path = "/recursos";

export const metadata: Metadata = {
  title: "Recursos do sistema de gestão MoneySystem",
  description:
    "Entenda como o MoneySystem organiza financeiro, estoque, vendas, clientes, notas fiscais, fluxo de caixa, DRE e ordens de serviço.",
  alternates: { canonical: path },
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="knowledge-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Recursos" },
              ]}
            />
            <div className="knowledge-hero__grid">
              <div>
                <p className="eyebrow eyebrow--bright">
                  Recursos do MoneySystem
                </p>
                <h1>Cada área em ordem. A empresa inteira conectada.</h1>
              </div>
              <p>
                Entenda o papel de cada recurso, o problema que ele resolve e
                como as informações continuam de uma etapa para a próxima.
              </p>
            </div>
          </div>
        </header>

        <section className="knowledge-intro section">
          <div className="container knowledge-intro__grid">
            <div>
              <p className="eyebrow">Resposta direta</p>
              <h2>
                O MoneySystem é um sistema de gestão empresarial para organizar
                a operação em uma base comum.
              </h2>
            </div>
            <div>
              <p>
                Financeiro, estoque, vendas, clientes, notas fiscais e serviços
                não funcionam isoladamente. Uma venda pode movimentar produtos,
                gerar um documento e criar um recebimento.
              </p>
              <p>
                Os recursos abaixo explicam essas áreas em linguagem direta,
                com perguntas frequentes e links para orientações práticas.
              </p>
            </div>
          </div>
        </section>

        <section className="knowledge-collection section section--warm">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Conheça por área</p>
                <h2>Encontre a resposta que sua empresa precisa.</h2>
              </div>
              <p>
                Cada página começa pelo conceito e depois mostra a aplicação na
                rotina.
              </p>
            </div>
            <div className="knowledge-card-grid">
              {resources.map((resource, index) => (
                <Link
                  href={`/recursos/${resource.slug}`}
                  key={resource.slug}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{resource.eyebrow}</p>
                  <h2>{resource.title}</h2>
                  <small>
                    Abrir explicação <ArrowIcon />
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
                <p className="eyebrow">Gestão conectada</p>
                <h2>Registrar uma vez evita reconstruir a empresa depois.</h2>
              </div>
              <p>
                A configuração varia conforme a operação, mas a lógica é
                simples: cadastros sustentam movimentos, e movimentos sustentam
                decisões.
              </p>
            </div>
            <ol className="knowledge-map__steps">
              <li>
                <span>01</span>
                <strong>Cliente, produto ou serviço</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Venda ou ordem de serviço</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Estoque e documento fiscal</strong>
              </li>
              <li>
                <span>04</span>
                <strong>Recebimento e resultado</strong>
              </li>
            </ol>
          </div>
        </section>

        <section className="knowledge-links section">
          <div className="container knowledge-links__grid">
            <Link href="/erp">
              <p className="eyebrow">Comece pelo conceito</p>
              <h2>O que é um ERP?</h2>
              <span>
                Ler o guia completo <ArrowIcon />
              </span>
            </Link>
            <Link href="/solucoes">
              <p className="eyebrow">Veja na sua rotina</p>
              <h2>Soluções por tipo de empresa.</h2>
              <span>
                Encontrar meu segmento <ArrowIcon />
              </span>
            </Link>
            <Link href="/ajuda">
              <p className="eyebrow">Já usa o sistema?</p>
              <h2>Central de Ajuda MoneySystem.</h2>
              <span>
                Consultar orientações <ArrowIcon />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={collectionPageSchema({
          path,
          name: "Recursos do MoneySystem",
          description:
            "Explicações sobre os recursos de gestão empresarial do MoneySystem.",
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Recursos" },
          ],
          items: resources.map((resource) => ({
            name: resource.metaTitle,
            path: `/recursos/${resource.slug}`,
            description: resource.description,
          })),
        })}
      />
    </>
  );
}
