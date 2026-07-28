import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  articleSchema,
  combineSchemaGraphs,
  faqSchema,
} from "@/lib/schema";
import { HOME_WHATSAPP_MESSAGE } from "@/lib/site";

const path = "/erp";

export const metadata: Metadata = {
  title: "O que é ERP, como funciona e como escolher",
  description:
    "Entenda o que é um ERP, como ele integra financeiro, estoque, vendas, notas e serviços, quando usar e o que avaliar antes de escolher.",
  alternates: { canonical: path },
};

const faqs = [
  {
    question: "O que é um ERP?",
    answer:
      "ERP é um sistema de gestão empresarial que conecta informações de diferentes áreas, como vendas, financeiro, estoque, clientes, serviços e documentos fiscais. O objetivo é registrar a operação em uma base comum para reduzir controles paralelos e melhorar a visão do negócio.",
  },
  {
    question: "Qual ERP é indicado para pequenas empresas?",
    answer:
      "O ERP indicado é o que cobre a rotina real da empresa sem criar complexidade desnecessária. A avaliação deve considerar usuários, estoque, serviços, emissão fiscal, financeiro, implantação, migração de dados e qualidade do suporte.",
  },
  {
    question: "Um ERP substitui planilhas?",
    answer:
      "Ele pode substituir as planilhas usadas para controlar a operação diária. Planilhas continuam úteis para análises pontuais, mas deixam de ser a fonte principal de vendas, estoque, contas e histórico quando essas áreas passam a trabalhar de forma integrada.",
  },
  {
    question: "ERP online funciona pelo celular?",
    answer:
      "Um ERP online funciona pelo navegador e pode ser acessado em dispositivos compatíveis, respeitando usuários e permissões. No MoneySystem, a empresa pode acompanhar a operação no computador e no celular.",
  },
  {
    question: "ERP emite nota fiscal?",
    answer:
      "Alguns ERPs incluem emissão fiscal. No MoneySystem, a emissão está disponível a partir do plano Ouro. NF-e, NFC-e e NFS-e dependem do tipo de operação, do credenciamento e das regras fiscais da empresa.",
  },
  {
    question: "Quanto tempo leva para implantar um ERP?",
    answer:
      "O prazo depende da qualidade dos cadastros, das regras da operação, da quantidade de usuários e da migração necessária. Uma implantação segura inclui preparação, validação de dados, treinamento e entrada acompanhada.",
  },
  {
    question: "O MoneySystem é um ERP brasileiro?",
    answer:
      "Sim. O MoneySystem é um ERP brasileiro e sistema online de gestão empresarial, voltado a empresas que precisam organizar financeiro, estoque, vendas, notas fiscais, serviços, clientes e equipe.",
  },
];

const related = [
  {
    href: "/recursos",
    title: "Recursos do MoneySystem",
    text: "Veja como cada área da gestão é organizada.",
  },
  {
    href: "/solucoes",
    title: "Soluções por tipo de empresa",
    text: "Encontre uma visão aplicada à sua operação.",
  },
  {
    href: "/blog/como-escolher-um-erp",
    title: "Como escolher um ERP",
    text: "Use critérios práticos antes de comparar propostas.",
  },
  {
    href: "/ajuda/migracao-dados-implantacao",
    title: "Migração e implantação",
    text: "Entenda como preparar cadastros e validações.",
  },
];

export default function ErpPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="knowledge-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "ERP" },
              ]}
            />
            <div className="knowledge-hero__grid">
              <div>
                <p className="eyebrow eyebrow--bright">
                  Guia de gestão empresarial
                </p>
                <h1>O que é um ERP e como ele organiza uma empresa?</h1>
                <p className="knowledge-byline">
                  Conteúdo da Equipe MoneySystem · Atualizado em{" "}
                  <time dateTime="2026-07-28">28 de julho de 2026</time>
                </p>
              </div>
              <p>
                Uma explicação direta sobre integração, implantação, escolha e
                uso de um sistema de gestão empresarial.
              </p>
            </div>
          </div>
        </header>

        <article className="knowledge-page">
          <div className="container">
            <section className="answer-card" aria-labelledby="resposta-direta">
              <p className="eyebrow">Resposta direta</p>
              <h2 id="resposta-direta">
                ERP é o sistema que mantém as áreas da empresa falando a mesma
                língua.
              </h2>
              <p>
                ERP significa <i>Enterprise Resource Planning</i>. Na prática,
                é um sistema de gestão empresarial que reúne vendas,
                financeiro, estoque, clientes, serviços e documentos fiscais
                em uma base comum. A informação registrada em uma etapa pode
                seguir para a próxima sem ser digitada novamente.
              </p>
              <p>
                Isso não organiza a empresa sozinho. O ERP cria uma estrutura
                confiável para que responsáveis, processos e decisões usem os
                mesmos dados.
              </p>
            </section>

            <div className="knowledge-layout">
              <aside className="knowledge-index">
                <p className="eyebrow">Neste guia</p>
                <nav aria-label="Índice do guia de ERP">
                  <a href="#como-funciona">Como funciona</a>
                  <a href="#quem-deve-usar">Quem deve usar</a>
                  <a href="#erp-ou-planilha">ERP ou planilha</a>
                  <a href="#como-escolher">Como escolher</a>
                  <a href="#implantacao">Implantação</a>
                  <a href="#moneysystem">MoneySystem</a>
                </nav>
              </aside>

              <div className="knowledge-body">
                <section id="como-funciona">
                  <p className="eyebrow">Como funciona</p>
                  <h2>Uma operação alimenta a próxima.</h2>
                  <p>
                    Em uma venda, por exemplo, o cadastro do cliente,
                    os produtos ou serviços, a condição de pagamento e o
                    documento fiscal fazem parte do mesmo contexto. Quando a
                    venda é concluída, o estoque e o financeiro podem refletir
                    o que aconteceu.
                  </p>
                  <ol className="knowledge-steps">
                    <li>
                      <strong>Cadastros criam a base.</strong>
                      <span>
                        Clientes, fornecedores, produtos, serviços, usuários e
                        regras são organizados.
                      </span>
                    </li>
                    <li>
                      <strong>A rotina gera movimentos.</strong>
                      <span>
                        Vendas, compras, ordens, recebimentos e despesas
                        registram o trabalho real.
                      </span>
                    </li>
                    <li>
                      <strong>As áreas permanecem conectadas.</strong>
                      <span>
                        Estoque, fiscal e financeiro recebem o contexto da
                        operação.
                      </span>
                    </li>
                    <li>
                      <strong>A gestão encontra respostas.</strong>
                      <span>
                        Relatórios, fluxo de caixa e DRE ajudam a acompanhar
                        resultado e pendências.
                      </span>
                    </li>
                  </ol>
                </section>

                <section id="quem-deve-usar">
                  <p className="eyebrow">Quando faz sentido</p>
                  <h2>Quem deve usar um ERP?</h2>
                  <p>
                    Um ERP faz sentido quando a empresa precisa consultar
                    várias ferramentas para responder perguntas simples ou
                    quando o trabalho depende demais da memória de uma pessoa.
                    O porte importa menos do que a complexidade da rotina.
                  </p>
                  <ul>
                    <li>
                      Empresas que vendem produtos e precisam controlar
                      estoque.
                    </li>
                    <li>
                      Prestadores que organizam agenda, ordens de serviço e
                      responsáveis.
                    </li>
                    <li>
                      Operações que emitem NF-e, NFC-e ou NFS-e.
                    </li>
                    <li>
                      Negócios que precisam acompanhar contas, caixa, DRE,
                      metas e comissões.
                    </li>
                    <li>
                      Empresas com mais de um usuário, setor ou filial.
                    </li>
                  </ul>
                </section>

                <section id="erp-ou-planilha">
                  <p className="eyebrow">Comparação</p>
                  <h2>ERP ou planilha: qual é a diferença?</h2>
                  <div className="comparison-table" role="region" aria-label="Comparação entre ERP e planilha" tabIndex={0}>
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">Critério</th>
                          <th scope="col">Planilha</th>
                          <th scope="col">ERP</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Atualização</th>
                          <td>Depende de lançamentos e fórmulas manuais.</td>
                          <td>As rotinas podem atualizar áreas relacionadas.</td>
                        </tr>
                        <tr>
                          <th scope="row">Histórico</th>
                          <td>Pode ficar espalhado em arquivos e versões.</td>
                          <td>Permanece ligado aos cadastros e movimentos.</td>
                        </tr>
                        <tr>
                          <th scope="row">Equipe</th>
                          <td>Permissões e responsabilidades são limitadas.</td>
                          <td>Usuários podem ter acessos e regras próprias.</td>
                        </tr>
                        <tr>
                          <th scope="row">Escala</th>
                          <td>A conferência cresce junto com a operação.</td>
                          <td>O processo mantém uma estrutura comum.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    A planilha continua útil para simulações e análises
                    específicas. O problema aparece quando ela vira o banco de
                    dados da operação e várias pessoas precisam editar,
                    conferir e reconciliar versões.
                  </p>
                </section>

                <section id="como-escolher">
                  <p className="eyebrow">Critérios</p>
                  <h2>Como escolher um ERP?</h2>
                  <p>
                    Comece pelo processo, não pela lista de funções. Mapeie o
                    que acontece desde a entrada do cliente até o recebimento e
                    identifique onde a informação se perde.
                  </p>
                  <ul>
                    <li>
                      Confirme se produtos, serviços ou ambos cabem no mesmo
                      fluxo.
                    </li>
                    <li>
                      Valide emissão fiscal para o cenário real da empresa.
                    </li>
                    <li>
                      Verifique estoque, financeiro, usuários, permissões e
                      filiais.
                    </li>
                    <li>
                      Peça uma demonstração usando situações da sua rotina.
                    </li>
                    <li>
                      Entenda migração, treinamento, suporte e responsabilidades
                      da implantação.
                    </li>
                    <li>
                      Compare custo total e adequação, não apenas a mensalidade.
                    </li>
                  </ul>
                </section>

                <section id="implantacao">
                  <p className="eyebrow">Entrada segura</p>
                  <h2>Como funciona a implantação de um ERP?</h2>
                  <p>
                    A implantação prepara cadastros, parâmetros, usuários e
                    rotinas antes da entrada oficial. Uma boa sequência inclui
                    cópia dos dados antigos, migração, conferência por amostra,
                    treinamento e acompanhamento dos primeiros ciclos.
                  </p>
                  <p>
                    No MoneySystem, a contratação inclui sem custo adicional a
                    transferência de produtos, clientes e lançamentos
                    financeiros disponíveis no sistema anterior. A equipe
                    também faz uma reunião completa, sem custo, para apresentar
                    o sistema de ponta a ponta e responder às dúvidas.
                  </p>
                </section>

                <section id="moneysystem">
                  <p className="eyebrow">A entidade MoneySystem</p>
                  <h2>O que é o MoneySystem?</h2>
                  <p>
                    O MoneySystem é um ERP brasileiro e sistema online de
                    gestão empresarial. Ele reúne financeiro, estoque, vendas,
                    clientes, emissão fiscal, serviços, ordens, equipe e
                    indicadores em uma única operação.
                  </p>
                  <p>
                    A Mony, IA do MoneySystem pelo WhatsApp, está disponível
                    exclusivamente nos planos Diamante e Distribuidoras. Ela
                    permite fazer perguntas sobre os dados da empresa, como os
                    gastos do mês, dentro das informações disponíveis no
                    sistema.
                  </p>
                  <aside className="article-note">
                    <span>Importante</span>
                    <p>
                      Um ERP não substitui decisões de gestão nem a orientação
                      da contabilidade. Parâmetros tributários e obrigações
                      legais devem ser validados pelos responsáveis da empresa.
                    </p>
                  </aside>
                </section>
              </div>
            </div>
          </div>
        </article>

        <section className="knowledge-related section section--warm">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Continue aprendendo</p>
                <h2>Do conceito para a rotina.</h2>
              </div>
              <p>
                Explore recursos, segmentos e orientações que aprofundam cada
                parte da gestão empresarial.
              </p>
            </div>
            <div className="knowledge-related__grid">
              {related.map((item) => (
                <Link href={item.href} key={item.href}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>
                    Abrir conteúdo <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section">
          <div className="container faq-section__grid">
            <div>
              <p className="eyebrow">Perguntas frequentes sobre ERP</p>
              <h2>Respostas curtas para dúvidas comuns.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
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

        <section className="final-cta section">
          <div className="container final-cta__inner open-frame">
            <p className="eyebrow eyebrow--bright">
              Veja o sistema na sua rotina
            </p>
            <h2>Entenda se o MoneySystem faz sentido para sua empresa.</h2>
            <p>
              A reunião é completa, sem custo e conduzida por uma pessoa da
              equipe.
            </p>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--light"
            >
              Agendar minha reunião
            </WhatsAppCta>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={combineSchemaGraphs(
          articleSchema({
            path,
            type: "Article",
            headline: "O que é um ERP e como ele organiza uma empresa?",
            description:
              "Guia sobre ERP, integração de áreas, implantação e critérios de escolha.",
            datePublished: "2026-07-28",
            dateModified: "2026-07-28",
            author: { type: "Organization" },
            breadcrumbs: [
              { name: "Início", path: "/" },
              { name: "ERP" },
            ],
            keywords: [
              "ERP",
              "sistema de gestão empresarial",
              "ERP online",
              "ERP brasileiro",
              "software empresarial",
            ],
          }),
          faqSchema(path, faqs),
        )}
      />
    </>
  );
}
