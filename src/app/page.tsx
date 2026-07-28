import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  HOME_WHATSAPP_MESSAGE,
  absoluteUrl,
  createWhatsAppUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Sua empresa em ordem. Sua cabeça tranquila.",
  description:
    "Centralize vendas, financeiro, estoque, notas fiscais, serviços e equipe. Migração gratuita, reunião completa sem custo e suporte 100% humano.",
  alternates: { canonical: "/" },
};

const outcomes = [
  {
    number: "01",
    title: "Financeiro sob controle",
    text: "Acompanhe contas, receitas, despesas, fluxo de caixa e DRE sem remontar o mês em planilhas.",
  },
  {
    number: "02",
    title: "Estoque organizado",
    text: "Veja entradas, saídas e produtos disponíveis antes que a falta vire um problema.",
  },
  {
    number: "03",
    title: "Vendas e notas no mesmo fluxo",
    text: "Do pedido à emissão fiscal e ao recebimento, sem repetir informações em ferramentas diferentes.",
  },
  {
    number: "04",
    title: "Serviços acompanhados",
    text: "Organize agenda, ordens, responsáveis, garantias e histórico do cliente.",
  },
  {
    number: "05",
    title: "Equipe com regras claras",
    text: "Cadastre funcionários, metas, comissões e permissões no mesmo ambiente.",
  },
];

const plans = [
  {
    name: "Prata",
    price: "R$ 240",
    suffix: "/mês",
    description: "Para organizar os números e as rotinas essenciais.",
    features: [
      "DRE",
      "Relatórios completos",
      "Agenda básica",
      "Contas a pagar",
      "Até 2 usuários",
    ],
  },
  {
    name: "Ouro",
    price: "R$ 360",
    suffix: "/mês",
    description: "Para operar, acompanhar e emitir notas fiscais.",
    features: [
      "Tudo do plano Prata",
      "Emissão de notas fiscais",
      "Previsão de vendas",
      "Agenda inteligente",
      "Até 5 usuários",
    ],
    featured: true,
  },
  {
    name: "Diamante",
    price: "R$ 850",
    suffix: "/mês",
    description: "Para uma operação completa e uma equipe maior.",
    features: [
      "Tudo do plano Ouro",
      "Mony no WhatsApp",
      "Controle de ponto",
      "Treinamento especializado",
      "Usuários ilimitados",
    ],
    mony: true,
  },
  {
    name: "Distribuidoras",
    price: "R$ 1.580",
    suffix: "/mês",
    description: "Para rotas, frota e operação de distribuição.",
    features: [
      "Recursos do Diamante",
      "Mony no WhatsApp",
      "Gerenciamento de rotas e frota",
      "Manifesto de transporte",
      "Integrações e painéis operacionais",
    ],
    mony: true,
  },
];

const faqs = [
  {
    question: "Posso conhecer o sistema antes de contratar?",
    answer:
      "Sim. Fazemos uma reunião completa e sem custo para entender sua operação, apresentar o MoneySystem de ponta a ponta e responder às suas dúvidas.",
  },
  {
    question: "Vou precisar cadastrar tudo novamente?",
    answer:
      "Não. Na contratação, nossa equipe transfere sem custo adicional os produtos, clientes e lançamentos financeiros disponíveis no seu sistema antigo.",
  },
  {
    question: "O MoneySystem emite notas fiscais?",
    answer:
      "Sim. A emissão fiscal está disponível a partir do plano Ouro. Na reunião, confirmamos os documentos e regras necessários para o cenário da sua empresa.",
  },
  {
    question: "O sistema atende o meu segmento?",
    answer:
      "O MoneySystem atende empresas de produtos, serviços e distribuição. Um especialista avalia sua rotina e indica a configuração adequada.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "O atendimento é feito por pessoas, sempre que você precisar, com resposta em até 5 minutos.",
  },
  {
    question: "Em quais planos a Mony está disponível?",
    answer:
      "A Mony, IA do MoneySystem pelo WhatsApp, está incluída nos planos Diamante e Distribuidoras.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow eyebrow--bright">
                Gestão empresarial, sem complicação
              </p>
              <h1>Sua empresa em ordem. Sua cabeça tranquila.</h1>
              <p className="hero__lead">
                Vendas, financeiro, estoque, notas fiscais, serviços e equipe
                em um só lugar — para você enxergar o negócio e decidir com
                segurança.
              </p>
              <div className="button-row">
                <WhatsAppCta message={HOME_WHATSAPP_MESSAGE}>
                  Falar com um especialista
                </WhatsAppCta>
                <Link className="button button--ghost-light" href="#recursos">
                  Conhecer o sistema <ArrowIcon direction="down" />
                </Link>
              </div>
              <ul className="hero__trust" aria-label="Diferenciais de atendimento">
                <li>Reunião completa, sem custo</li>
                <li>Migração gratuita</li>
                <li>Suporte humano em até 5 min</li>
              </ul>
            </div>

            <figure className="hero__product open-frame">
              <div className="hero__product-label">
                <span>Tela real do produto</span>
                <span>Web + celular</span>
              </div>
              <Image
                src="/images/dashboard-devices.png"
                alt="MoneySystem aberto em um notebook e em um celular, mostrando o dashboard com clientes, produtos, serviços, vendas e financeiro"
                width={962}
                height={698}
                preload
                sizes="(max-width: 900px) 94vw, 56vw"
              />
              <figcaption>
                A mesma operação, acessível onde o trabalho acontece.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="pain-section section">
          <div className="container pain-section__grid">
            <SectionHeading
              eyebrow="A rotina real da empresa"
              title="Sua gestão não deveria depender de memória, planilhas e conferência manual."
              description={
                <p>
                  Quando cada informação fica em um lugar, você perde tempo
                  procurando respostas que deveria ter na hora.
                </p>
              }
            />
            <div className="pain-list">
              {[
                "Quanto entrou, quanto saiu e quanto realmente sobrou.",
                "O que há no estoque e o que precisa ser comprado.",
                "O que foi vendido, entregue, faturado ou ficou pendente.",
                "Como estão os serviços, a equipe e os compromissos do dia.",
              ].map((item, index) => (
                <div className="pain-list__item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
              <p className="pain-list__closing">
                O MoneySystem reúne essa rotina em uma visão clara e atualizada.
              </p>
            </div>
          </div>
        </section>

        <section className="outcomes section" id="recursos">
          <div className="container">
            <SectionHeading
              eyebrow="Clareza para trabalhar"
              title="Abra o sistema e saiba onde sua empresa está."
              description={
                <p>
                  Cada área alimenta a próxima. Você acompanha o trabalho sem
                  reconstruir a história em ferramentas separadas.
                </p>
              }
            />
            <div className="outcome-list">
              {outcomes.map((outcome) => (
                <article className="outcome-item" key={outcome.title}>
                  <span>{outcome.number}</span>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section section section--warm">
          <div className="container product-section__grid">
            <div className="product-section__visual open-frame open-frame--light">
              <Image
                src="/images/dashboard-devices.png"
                alt="Dashboard real do MoneySystem com módulos de clientes, produtos, serviços, ordens, vendas e financeiro"
                width={962}
                height={698}
                sizes="(max-width: 900px) 92vw, 54vw"
              />
            </div>
            <div className="product-section__content">
              <p className="eyebrow">O MoneySystem por dentro</p>
              <h2>O que importa, no mesmo sistema.</h2>
              <div className="product-points">
                {[
                  ["Visão geral", "Comece o dia sabendo o que exige sua atenção."],
                  [
                    "Financeiro e DRE",
                    "Entenda receitas, despesas, contas e resultado.",
                  ],
                  [
                    "Vendas e notas",
                    "Registre a venda e siga até o faturamento.",
                  ],
                  [
                    "Produtos e estoque",
                    "Acompanhe movimentações e disponibilidade.",
                  ],
                  [
                    "Serviços e ordens",
                    "Organize cada atendimento do início à entrega.",
                  ],
                ].map(([title, text]) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mony-section section">
          <div className="container mony-section__grid">
            <div className="mony-section__content">
              <p className="eyebrow eyebrow--purple">
                Mony, a IA do MoneySystem
              </p>
              <h2>Os números da sua empresa, respondidos no WhatsApp.</h2>
              <p>
                Faça perguntas sobre a operação e receba uma resposta
                contextual sem precisar abrir relatórios ou juntar planilhas.
              </p>
              <div className="mony-badge">
                Disponível nos planos Diamante e Distribuidoras
              </div>
            </div>
            <div
              className="mony-chat"
              role="img"
              aria-label="Exemplo ilustrativo de uma conversa com a Mony"
            >
              <div className="mony-chat__top">
                <span className="mony-avatar">M</span>
                <div>
                  <strong>Mony</strong>
                  <small>IA do MoneySystem</small>
                </div>
                <span className="mony-online">online</span>
              </div>
              <div className="mony-chat__body">
                <p className="chat-bubble chat-bubble--question">
                  Quanto tive de gastos neste mês?
                </p>
                <div className="chat-bubble chat-bubble--answer">
                  <small>Exemplo ilustrativo</small>
                  <p>
                    Seus gastos registrados neste mês somam{" "}
                    <strong>R$ 18.420,00</strong>.
                  </p>
                  <span>
                    Posso separar por categoria ou comparar com o mês passado.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="migration-section section" id="como-funciona">
          <div className="container">
            <SectionHeading
              eyebrow="Troca sem recomeço"
              title="Seus dados vêm com você. E nossa equipe fica ao seu lado."
              description={
                <p>
                  Implantar um sistema novo não precisa significar recadastrar
                  a empresa inteira ou descobrir tudo sozinho.
                </p>
              }
            />
            <div className="migration-grid">
              <article>
                <span>01</span>
                <h3>Uma reunião completa e sem custo</h3>
                <p>
                  Conhecemos sua rotina, apresentamos o sistema de ponta a ponta
                  e tiramos as dúvidas antes de começar.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Migração sem custo adicional</h3>
                <p>
                  Transferimos produtos, clientes e lançamentos financeiros do
                  seu sistema antigo.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Suporte 100% humano</h3>
                <p>
                  Quando precisar, você fala com uma pessoa. Nosso atendimento
                  responde em até 5 minutos.
                </p>
              </article>
            </div>
            <WhatsAppCta message={HOME_WHATSAPP_MESSAGE}>
              Agendar minha reunião sem custo
            </WhatsAppCta>
          </div>
        </section>

        <section className="segments-section section">
          <div className="container segments-section__grid">
            <SectionHeading
              eyebrow="Feito para operações diferentes"
              title="O seu negócio tem particularidades. O sistema acompanha."
              description={
                <p>
                  Empresas de produtos, serviços e distribuição não precisam
                  trabalhar do mesmo jeito para manter a gestão em ordem.
                </p>
              }
            />
            <div className="segments-list">
              {[
                "Automotivo",
                "Gráficas",
                "Lojas de móveis",
                "Joalherias",
                "Distribuidoras",
                "Outros segmentos",
              ].map((segment, index) =>
                segment === "Automotivo" ? (
                  <Link href="/solucoes/automotivo" key={segment}>
                    <span>{segment}</span>
                    <ArrowIcon />
                  </Link>
                ) : (
                  <a
                    href={createWhatsAppUrl(
                      `Olá! Quero saber como o MoneySystem atende ${segment.toLowerCase()}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    key={segment}
                  >
                    <span>{segment}</span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="automotive-callout section">
          <div className="container automotive-callout__inner">
            <div>
              <p className="eyebrow eyebrow--bright">Solução automotiva</p>
              <h2>
                Do orçamento à ordem de serviço. Da peça usada ao resultado no
                caixa.
              </h2>
            </div>
            <div>
              <p>
                Uma página dedicada para autopeças, oficinas, centros
                automotivos, insulfilm, películas e PPF.
              </p>
              <Link className="button button--light" href="/solucoes/automotivo">
                Conhecer a solução <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="case-section section">
          <div className="container case-section__grid">
            <div className="case-section__index">
              <span>35</span>
              <p>anos de história no mercado de películas</p>
            </div>
            <div className="case-section__content">
              <p className="eyebrow">História real</p>
              <h2>
                LunarFilm: experiência de mercado e uma nova forma de organizar
                a gestão.
              </h2>
              <p>
                Conheça a história de uma empresa consolidada que decidiu
                modernizar a rotina com o MoneySystem, respeitando os processos
                e o histórico construído ao longo dos anos.
              </p>
              <Link
                className="text-link"
                href="/blog/2025-08-22-lunarfilm-35-anos-transformacao-gestao-moneysystem"
              >
                Ler o case da LunarFilm <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="pricing-section section section--warm" id="planos">
          <div className="container">
            <SectionHeading
              eyebrow="Planos claros"
              title="Escolha pelo momento da sua operação."
              description={
                <p>
                  Todos incluem reunião completa sem custo, migração gratuita
                  de produtos, clientes e lançamentos financeiros e suporte
                  humano em até 5 minutos.
                </p>
              }
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`plan-card${plan.featured ? " plan-card--featured" : ""}`}
                  key={plan.name}
                >
                  <div className="plan-card__top">
                    <div>
                      <h3>{plan.name}</h3>
                      {plan.featured ? <span>Escolha frequente</span> : null}
                    </div>
                    {plan.mony ? <small>Inclui Mony</small> : null}
                  </div>
                  <p className="plan-card__description">{plan.description}</p>
                  <p className="plan-card__price">
                    <strong>{plan.price}</strong>
                    <span>{plan.suffix}</span>
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <WhatsAppCta
                    message={`Olá! Quero conhecer o plano ${plan.name} do MoneySystem e agendar uma reunião sem custo.`}
                    className={
                      plan.featured
                        ? "button button--primary button--full"
                        : "button button--secondary button--full"
                    }
                  >
                    {plan.name === "Distribuidoras"
                      ? "Conversar sobre Distribuidoras"
                      : `Conversar sobre o ${plan.name}`}
                  </WhatsAppCta>
                </article>
              ))}
              <article className="plan-card plan-card--custom">
                <div>
                  <p className="eyebrow">Customizado</p>
                  <h3>Uma configuração própria para operações específicas.</h3>
                  <p>
                    Funcionalidades exclusivas, infraestrutura dedicada,
                    consultoria, transferência de dados e acompanhamento de
                    implantação.
                  </p>
                </div>
                <div>
                  <strong>Sob consulta</strong>
                  <WhatsAppCta
                    message="Olá! Quero conversar sobre um projeto customizado do MoneySystem."
                    className="button button--dark"
                  >
                    Conversar sobre o projeto
                  </WhatsAppCta>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="faq-section section">
          <div className="container faq-section__grid">
            <SectionHeading
              eyebrow="Antes de conversar"
              title="Respostas diretas para dúvidas comuns."
              description={
                <p>
                  Se a sua pergunta for específica, nosso atendimento humano
                  responde em até 5 minutos.
                </p>
              }
            />
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

        <section className="drf-section">
          <div className="container drf-section__inner">
            <div>
              <p className="eyebrow">Programa social</p>
              <h2>DRF — organização financeira para a família.</h2>
            </div>
            <p>
              O Demonstrativo de Resultado Familiar leva o rigor do DRE para
              moradia, alimentação, educação e metas pessoais. Uma ferramenta
              gratuita do programa Cada Dia Melhor, da R5 Window Film, para
              clientes e comunidade.
            </p>
          </div>
        </section>

        <section className="final-cta section">
          <div className="container final-cta__inner open-frame">
            <p className="eyebrow eyebrow--bright">Próximo passo</p>
            <h2>Coloque sua empresa em ordem sem começar do zero.</h2>
            <p>
              Conheça o sistema, tire suas dúvidas e entenda como seus dados
              podem ser migrados.
            </p>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--light"
            >
              Agendar uma reunião completa
            </WhatsAppCta>
            <small>
              Sem custo · atendimento humano · resposta em até 5 minutos
            </small>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "MoneySystem",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Sistema de gestão empresarial para vendas, financeiro, estoque, notas fiscais e serviços.",
          image: absoluteUrl("/images/dashboard-devices.png"),
          offers: plans.map((plan) => ({
            "@type": "Offer",
            name: `Plano ${plan.name}`,
            priceCurrency: "BRL",
            price: plan.price.replace(/\D/g, ""),
          })),
        }}
      />
    </>
  );
}
