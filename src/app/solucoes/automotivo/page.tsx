import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  AUTOMOTIVE_WHATSAPP_MESSAGE,
  absoluteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Sistema para oficinas, autopeças, películas e PPF",
  description:
    "Organize orçamento, ordem de serviço, peças, estoque, nota, garantia e financeiro no MoneySystem. Migração gratuita e suporte humano.",
  alternates: { canonical: "/solucoes/automotivo" },
};

const flow = [
  {
    number: "01",
    title: "Cliente e orçamento",
    text: "Registre o atendimento, o veículo e prepare o orçamento.",
  },
  {
    number: "02",
    title: "Ordem de serviço",
    text: "Organize serviços, responsáveis, agenda e prazos.",
  },
  {
    number: "03",
    title: "Peças e materiais",
    text: "Vincule os itens usados e acompanhe a movimentação do estoque.",
  },
  {
    number: "04",
    title: "Execução",
    text: "Mantenha a equipe alinhada sobre o que está em andamento.",
  },
  {
    number: "05",
    title: "Nota e garantia",
    text: "Conclua com os documentos e registros necessários.",
  },
  {
    number: "06",
    title: "Financeiro",
    text: "Acompanhe recebimentos, despesas e o resultado da operação.",
  },
];

const automotiveFaq = [
  {
    question: "Atende oficina e loja de peças?",
    answer:
      "Sim. O MoneySystem organiza operações com produtos, serviços ou os dois no mesmo atendimento.",
  },
  {
    question: "Consigo controlar peças e materiais usados no serviço?",
    answer:
      "O sistema reúne produtos, estoque e ordens de serviço para manter essas informações ligadas à operação.",
  },
  {
    question: "Posso manter o histórico do cliente e do veículo?",
    answer:
      "Sim. Clientes, atendimentos, produtos, serviços e registros relacionados permanecem centralizados.",
  },
  {
    question: "Vocês migram meus cadastros atuais?",
    answer:
      "Sim. Na contratação, produtos, clientes e lançamentos financeiros são migrados sem custo adicional.",
  },
  {
    question: "Posso emitir nota fiscal?",
    answer:
      "Sim, a partir do plano Ouro. A reunião inicial confirma o cenário fiscal da empresa.",
  },
  {
    question: "O atendimento é humano?",
    answer:
      "Sim. O suporte é feito por pessoas, sempre que precisar, com resposta em até 5 minutos.",
  },
];

export default function AutomotiveSolutionPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <section className="solution-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Soluções" },
                { label: "Automotivo" },
              ]}
            />
            <div className="solution-hero__grid">
              <div className="solution-hero__content">
                <p className="eyebrow eyebrow--bright">
                  Gestão para o setor automotivo
                </p>
                <h1>
                  Seu negócio automotivo, do orçamento ao caixa, em ordem.
                </h1>
                <p>
                  Organize clientes, veículos, peças, estoque, serviços, ordens,
                  notas fiscais, garantias e financeiro no mesmo sistema.
                </p>
                <WhatsAppCta message={AUTOMOTIVE_WHATSAPP_MESSAGE}>
                  Falar com um especialista automotivo
                </WhatsAppCta>
                <ul className="hero__trust">
                  <li>Reunião completa, sem custo</li>
                  <li>Migração gratuita</li>
                  <li>Resposta humana em até 5 min</li>
                </ul>
              </div>
              <figure className="solution-hero__visual open-frame">
                <Image
                  src="/images/dashboard-devices.png"
                  alt="Tela real do MoneySystem em notebook e celular"
                  width={962}
                  height={698}
                  preload
                  sizes="(max-width: 900px) 94vw, 52vw"
                />
                <figcaption>
                  Acompanhe a operação também pelo celular.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="automotive-recognition section">
          <div className="container automotive-recognition__grid">
            <SectionHeading
              eyebrow="A operação corre"
              title="A informação precisa acompanhar."
              description={
                <p>
                  Um orçamento aprovado altera a agenda. Uma peça usada altera
                  o estoque. Um serviço concluído precisa chegar à nota, à
                  garantia e ao financeiro.
                </p>
              }
            />
            <ul className="automotive-audiences">
              {[
                "Autopeças e acessórios",
                "Oficinas e mecânicas",
                "Centros automotivos",
                "Insulfilm e películas",
                "PPF e estética automotiva",
                "Serviços ligados a veículos",
              ].map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="automotive-flow section section--warm">
          <div className="container">
            <SectionHeading
              eyebrow="A operação inteira"
              title="Cada etapa continua de onde a anterior terminou."
              description={
                <p>
                  O trabalho deixa de ser uma sequência de conferências e passa
                  a ter um fluxo comum para toda a equipe.
                </p>
              }
            />
            <div className="flow-grid">
              {flow.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="automotive-benefits section">
          <div className="container">
            <SectionHeading
              eyebrow="Menos conferência"
              title="Mais clareza sobre o que está acontecendo."
            />
            <div className="benefit-editorial">
              <article>
                <span>Estoque</span>
                <h3>O material acompanha o serviço.</h3>
                <p>
                  Saiba o que entrou, o que foi usado e o que precisa ser
                  reposto.
                </p>
              </article>
              <article>
                <span>Histórico</span>
                <h3>O atendimento não fica preso em conversas antigas.</h3>
                <p>
                  Consulte clientes, veículos, serviços, produtos e garantias.
                </p>
              </article>
              <article>
                <span>Equipe</span>
                <h3>Agenda, ordens e responsáveis alinhados.</h3>
                <p>
                  Veja o que está programado, em andamento e pronto para
                  entregar.
                </p>
              </article>
              <article>
                <span>Resultado</span>
                <h3>Movimento não é a mesma coisa que lucro.</h3>
                <p>
                  Acompanhe financeiro e DRE para entender o resultado real.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="automotive-mony section">
          <div className="container automotive-mony__grid">
            <div>
              <p className="eyebrow eyebrow--purple">
                Mony no setor automotivo
              </p>
              <h2>Pergunte sobre sua empresa pelo WhatsApp.</h2>
              <p>
                A Mony consulta os dados da operação no MoneySystem e responde
                perguntas de gestão com contexto.
              </p>
              <span className="mony-badge">
                Planos Diamante e Distribuidoras
              </span>
            </div>
            <div className="automotive-mony__question">
              <small>Exemplo ilustrativo</small>
              <p>“Quanto tive de gastos com materiais neste mês?”</p>
              <span>
                A resposta pode ser detalhada por categoria para apoiar sua
                análise.
              </span>
            </div>
          </div>
        </section>

        <section className="migration-section section">
          <div className="container">
            <SectionHeading
              eyebrow="Seus cadastros não ficam para trás"
              title="Nós preparamos a mudança com você."
              description={
                <p>
                  Ao contratar, migramos gratuitamente seus produtos, clientes
                  e lançamentos financeiros. Na reunião completa e sem custo,
                  entendemos como a empresa trabalha e organizamos a
                  implantação.
                </p>
              }
            />
            <div className="automotive-migration-facts">
              <div>
                <strong>Produtos</strong>
                <span>Cadastros levados para o novo sistema</span>
              </div>
              <div>
                <strong>Clientes</strong>
                <span>Histórico de relacionamento preservado</span>
              </div>
              <div>
                <strong>Financeiro</strong>
                <span>Lançamentos preparados pela nossa equipe</span>
              </div>
              <div>
                <strong>Atendimento</strong>
                <span>Suporte 100% humano em até 5 minutos</span>
              </div>
            </div>
            <WhatsAppCta message={AUTOMOTIVE_WHATSAPP_MESSAGE}>
              Agendar minha reunião sem custo
            </WhatsAppCta>
          </div>
        </section>

        <section className="automotive-case section section--warm">
          <div className="container automotive-case__grid">
            <div className="case-section__index">
              <span>35</span>
              <p>anos de mercado</p>
            </div>
            <div>
              <p className="eyebrow">História do setor</p>
              <h2>
                LunarFilm: uma empresa consolidada e uma mudança na gestão.
              </h2>
              <p>
                Veja como uma empresa do mercado de películas modernizou a
                rotina com o MoneySystem.
              </p>
              <Link
                className="text-link"
                href="/blog/2025-08-22-lunarfilm-35-anos-transformacao-gestao-moneysystem"
              >
                Conhecer o case <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="faq-section section">
          <div className="container faq-section__grid">
            <SectionHeading
              eyebrow="Dúvidas do setor"
              title="O que vale confirmar antes da implantação."
            />
            <div className="faq-list">
              {automotiveFaq.map((faq) => (
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
              Uma conversa, sem compromisso
            </p>
            <h2>Veja como o MoneySystem se encaixa na sua operação.</h2>
            <p>
              Conheça o sistema de ponta a ponta e tire suas dúvidas com uma
              pessoa da nossa equipe.
            </p>
            <WhatsAppCta
              message={AUTOMOTIVE_WHATSAPP_MESSAGE}
              className="button button--light"
            >
              Falar com especialista automotivo
            </WhatsAppCta>
            <small>
              Reunião sem custo · migração gratuita · resposta em até 5 minutos
            </small>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "MoneySystem para o setor automotivo",
          provider: {
            "@type": "Organization",
            name: "MoneySystem",
          },
          areaServed: "BR",
          serviceType:
            "Sistema de gestão para oficinas, autopeças, películas e PPF",
          url: absoluteUrl("/solucoes/automotivo"),
        }}
      />
    </>
  );
}
