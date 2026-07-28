/* eslint-disable @next/next/no-html-link-for-pages -- Native links keep the static marketing page free of client-side navigation work. */
import type { Metadata } from "next";
import Image from "next/image";

import { ArrowIcon } from "@/components/ArrowIcon";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  absoluteUrl,
  HOME_WHATSAPP_MESSAGE,
} from "@/lib/site";
import {
  combineSchemaGraphs,
  faqSchema,
  ORGANIZATION_ID,
  SOFTWARE_ID,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "O sistema que coloca sua empresa em ordem",
  description:
    "Organize financeiro, estoque, vendas, notas fiscais, serviços e equipe. Migração gratuita, reunião sem custo e suporte 100% humano.",
  alternates: { canonical: "/" },
};

const painPoints = [
  {
    label: "No fim do mês",
    title: "O movimento foi grande. Mas quanto realmente sobrou?",
  },
  {
    label: "Durante o dia",
    title: "Cobranças, pedidos e serviços dependem da sua memória.",
  },
  {
    label: "Na operação",
    title: "O estoque acaba antes que alguém perceba.",
  },
  {
    label: "Na decisão",
    title: "A resposta existe — só está espalhada em lugares diferentes.",
  },
];

const connectedFlow = [
  ["01", "A venda acontece"],
  ["02", "O estoque acompanha"],
  ["03", "A nota fica no fluxo"],
  ["04", "O recebimento não some"],
  ["05", "O resultado aparece"],
];

const benefits = [
  {
    number: "01",
    href: "/recursos/fluxo-de-caixa-e-dre",
    title: "Saiba exatamente quanto sobra no fim do mês.",
    text: "Entradas, saídas, contas e DRE ficam claras sem você remontar a empresa em uma planilha.",
  },
  {
    number: "02",
    href: "/recursos/controle-financeiro",
    title: "Pare de descobrir cobranças quando já estão atrasadas.",
    text: "Você enxerga o que vence, o que entrou e o que ainda precisa da sua atenção.",
  },
  {
    number: "03",
    href: "/recursos/controle-de-estoque",
    title: "Descubra antes quando o estoque está acabando.",
    text: "Acompanhe movimentações e disponibilidade antes que a falta interrompa uma venda ou serviço.",
  },
  {
    number: "04",
    href: "/recursos/emissao-de-nota-fiscal",
    title: "Emita a nota sem refazer o trabalho da venda.",
    text: "Pedido, faturamento e emissão fiscal continuam no mesmo caminho, com menos conferência manual.",
  },
  {
    number: "05",
    href: "/recursos/clientes-e-vendas",
    title: "Tenha a empresa inteira no mesmo contexto.",
    text: "Clientes, serviços, equipe, metas, comissões e histórico deixam de viver em ferramentas separadas.",
  },
];

const plans = [
  {
    name: "Prata",
    price: "R$ 240",
    suffix: "/mês",
    description: "Para colocar os números e a rotina essencial em ordem.",
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
    description: "Para acompanhar a operação e emitir notas fiscais.",
    features: [
      "Tudo do plano Prata",
      "Emissão de notas fiscais",
      "Previsão de vendas",
      "Agenda inteligente",
      "Até 5 usuários",
    ],
    featured: true,
    badge: "Inclui emissão fiscal",
  },
  {
    name: "Diamante",
    price: "R$ 850",
    suffix: "/mês",
    description: "Para uma operação completa e uma equipe maior.",
    features: [
      "Tudo do plano Ouro",
      "Mony, a IA no WhatsApp",
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
    description: "Para rotas, frota e uma distribuição organizada.",
    features: [
      "Recursos do Diamante",
      "Mony, a IA no WhatsApp",
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
      "Não. Na contratação, nossa equipe transfere sem custo adicional os produtos, clientes e lançamentos financeiros disponíveis no seu sistema atual.",
  },
  {
    question: "O MoneySystem emite notas fiscais?",
    answer:
      "Sim. A emissão fiscal está disponível a partir do plano Ouro. Na reunião, confirmamos os documentos e as regras necessários para sua empresa.",
  },
  {
    question: "O sistema atende o meu segmento?",
    answer:
      "O MoneySystem atende empresas de produtos, serviços e distribuição. Uma pessoa da nossa equipe avalia sua rotina e indica a configuração adequada.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "O atendimento é feito por pessoas, com resposta em até 5 minutos nos canais e períodos informados pela equipe.",
  },
  {
    question: "Em quais planos a Mony está disponível?",
    answer:
      "A Mony, IA do MoneySystem pelo WhatsApp, está incluída exclusivamente nos planos Diamante e Distribuidoras.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <section className="home-hero">
          <div className="container home-hero__grid">
            <div className="home-hero__content">
              <p className="eyebrow">O sistema que coloca sua empresa em ordem</p>
              <h1>Sua empresa não precisa morar na sua cabeça.</h1>
              <p className="home-hero__lead">
                O MoneySystem organiza a operação e mostra o que precisa da sua
                atenção. Você decide com clareza, sem passar o dia apagando
                incêndios.
              </p>
              <div className="button-row">
                <WhatsAppCta
                  message={HOME_WHATSAPP_MESSAGE}
                  className="button button--primary button--hero"
                >
                  Quero minha empresa em ordem
                </WhatsAppCta>
                <a
                  className="button button--soft"
                  href="#como-funciona"
                >
                  Entender como funciona <ArrowIcon direction="down" />
                </a>
              </div>
              <ul className="home-trust-row" aria-label="Diferenciais de atendimento">
                <li>Reunião completa, sem custo</li>
                <li>Migração gratuita</li>
                <li>Resposta humana em até 5 min</li>
              </ul>
            </div>

            <div className="home-hero__visual" aria-label="MoneySystem em uso">
              <div className="home-stage-glow home-stage-glow--blue" aria-hidden="true" />
              <div
                className="home-stage-glow home-stage-glow--purple"
                aria-hidden="true"
              />
              <figure className="home-product-stage">
                <div className="home-product-stage__top">
                  <span>
                    <i aria-hidden="true" />
                    Tela real do MoneySystem
                  </span>
                  <span>Computador + celular</span>
                </div>
                <Image
                  src="/images/dashboard-devices.png"
                  alt="MoneySystem aberto em um notebook e em um celular, mostrando a visão geral de clientes, produtos, serviços, vendas e financeiro"
                  width={962}
                  height={698}
                  sizes="(max-width: 900px) 94vw, 56vw"
                />
                <figcaption>
                  A informação acompanha você onde o trabalho acontece.
                </figcaption>
              </figure>
              <div className="home-stage-note home-stage-note--top">
                <span aria-hidden="true" />
                <div>
                  <small>Em poucos segundos</small>
                  <strong>Veja o que pede atenção hoje</strong>
                </div>
              </div>
              <div className="home-stage-note home-stage-note--bottom">
                <span aria-hidden="true" />
                <div>
                  <small>Uma única operação</small>
                  <strong>Tudo conversa no mesmo lugar</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-problem section">
          <div className="container home-problem__grid">
            <SectionHeading
              eyebrow="A rotina real de quem empreende"
              title="O problema não é falta de esforço. É informação espalhada."
              description={
                <p>
                  Você vende, atende, compra, cobra e resolve. Mesmo assim, o
                  dia termina com perguntas que a empresa já deveria responder.
                </p>
              }
            />
            <div className="home-chaos-list">
              {painPoints.map((item, index) => (
                <article className="home-chaos-item home-reveal" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{item.label}</small>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-flow section" id="como-funciona">
          <div className="container">
            <SectionHeading
              eyebrow="Quando a informação se encontra"
              title="Você registra uma vez. O restante deixa de se perder pelo caminho."
              description={
                <p>
                  Uma parte da empresa atualiza a próxima. Menos repetição,
                  menos conferência e uma visão mais clara do resultado.
                </p>
              }
            />
            <div className="home-flow__line" aria-label="Fluxo conectado da operação">
              {connectedFlow.map(([number, title]) => (
                <article className="home-flow__step home-reveal" key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-product section">
          <div className="container">
            <SectionHeading
              eyebrow="O MoneySystem por dentro"
              title="Abra o sistema e encontre respostas — não mais trabalho."
              description={
                <p>
                  A tela reúne o que mudou, o que ficou pendente e o que merece
                  uma decisão. Cada informação aparece com um motivo.
                </p>
              }
            />
            <div className="home-product__story">
              <figure className="home-product__focus">
                <div className="home-product__crop">
                  <Image
                    src="/images/dashboard-devices.png"
                    alt="Detalhe da tela real do MoneySystem com agenda e indicadores da operação"
                    width={962}
                    height={698}
                    loading="lazy"
                    sizes="(max-width: 900px) 92vw, 58vw"
                  />
                </div>
                <figcaption>Tela real do produto, sem ilustração genérica.</figcaption>
              </figure>
              <ol className="home-product__answers">
                <li className="home-reveal">
                  <span>01</span>
                  <div>
                    <h3>Comece o dia sabendo onde olhar.</h3>
                    <p>
                      Agenda, números e pendências aparecem na mesma visão.
                    </p>
                  </div>
                </li>
                <li className="home-reveal">
                  <span>02</span>
                  <div>
                    <h3>Entenda a empresa sem montar relatório.</h3>
                    <p>
                      Financeiro, vendas e operação permanecem conectados.
                    </p>
                  </div>
                </li>
                <li className="home-reveal">
                  <span>03</span>
                  <div>
                    <h3>Leve a informação com você.</h3>
                    <p>
                      A mesma rotina pode ser acompanhada no computador e no
                      celular.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="home-benefits section" id="recursos">
          <div className="container">
            <SectionHeading
              eyebrow="O que muda na prática"
              title="Menos dúvida no dia. Mais controle no fim do mês."
              description={
                <p>
                  O MoneySystem não adiciona mais uma tarefa à sua rotina. Ele
                  organiza o que sua empresa já faz.
                </p>
              }
            />
            <div className="home-benefits__grid">
              {benefits.map((benefit) => (
                <a
                  className="home-benefit home-reveal"
                  href={benefit.href}
                  key={benefit.title}
                >
                  <span>{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </a>
              ))}
            </div>
            <a className="text-link home-benefits__more" href="/recursos">
              Ver todos os recursos explicados <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="home-migration section">
          <div className="container">
            <div className="home-migration__intro">
              <p className="eyebrow">Troca sem recomeço</p>
              <h2>Você muda de sistema. Seus dados e sua história vêm junto.</h2>
              <p>
                Nossa equipe prepara a mudança com você para a empresa continuar
                trabalhando com segurança.
              </p>
            </div>
            <div className="home-migration__steps">
              <article className="home-reveal">
                <span>01</span>
                <h3>Conhecemos sua operação.</h3>
                <p>
                  Uma reunião completa e sem custo apresenta o sistema de ponta
                  a ponta e responde às suas dúvidas.
                </p>
              </article>
              <article className="home-reveal">
                <span>02</span>
                <h3>Levamos o que já é seu.</h3>
                <p>
                  Na contratação, transferimos produtos, clientes e lançamentos
                  financeiros sem custo adicional.
                </p>
              </article>
              <article className="home-reveal">
                <span>03</span>
                <h3>Você fala com uma pessoa.</h3>
                <p>
                  O suporte é 100% humano e responde em até 5 minutos nos canais
                  e períodos informados pela equipe.
                </p>
              </article>
            </div>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--primary"
            >
              Agendar minha reunião sem custo
            </WhatsAppCta>
          </div>
        </section>

        <section className="home-segments section">
          <div className="container home-segments__grid">
            <SectionHeading
              eyebrow="Feito para operações reais"
              title="Sua empresa tem um jeito próprio de funcionar. O sistema acompanha."
              description={
                <p>
                  Produtos, serviços ou distribuição: a organização se adapta à
                  rotina sem obrigar sua equipe a trabalhar de um jeito
                  artificial.
                </p>
              }
            />
            <div className="home-segments__list">
              {[
                {
                  label: "Automotivo",
                  href: "/solucoes/automotivo",
                  description: "Oficinas, autopeças, películas e PPF",
                  featured: true,
                },
                {
                  label: "Gráficas",
                  href: "/solucoes/graficas",
                  description: "Orçamentos, serviços e materiais",
                },
                {
                  label: "Lojas de móveis",
                  href: "/solucoes/lojas-de-moveis",
                  description: "Pedidos, estoque e recebimentos",
                },
                {
                  label: "Joalherias",
                  href: "/solucoes/joalherias",
                  description: "Produtos, clientes e vendas",
                },
                {
                  label: "Distribuidoras",
                  href: "/solucoes/distribuidoras",
                  description: "Pedidos, estoque, rotas e frota",
                },
                {
                  label: "Outros segmentos",
                  href: "/solucoes",
                  description: "Veja todas as soluções",
                },
              ].map((segment, index) => (
                <a
                  className={`home-segment${segment.featured ? " home-segment--featured" : ""}`}
                  href={segment.href}
                  key={segment.label}
                >
                  <span>
                    <strong>{segment.label}</strong>
                    <small>{segment.description}</small>
                  </span>
                  {segment.featured ? (
                    <ArrowIcon />
                  ) : (
                    <span className="home-segment__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="container home-case">
            <div className="home-case__number">
              <strong>35</strong>
              <span>anos de história</span>
            </div>
            <div className="home-case__content">
              <p className="eyebrow">Uma empresa real, uma mudança consciente</p>
              <h2>
                A LunarFilm modernizou a gestão sem ignorar a experiência
                construída no mercado.
              </h2>
              <p>
                Conheça a história de uma empresa consolidada que decidiu
                organizar a rotina com o MoneySystem.
              </p>
              <a
                className="text-link"
                href="/blog/2025-08-22-lunarfilm-35-anos-transformacao-gestao-moneysystem"
              >
                Ler a história da LunarFilm <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="knowledge-links section section--warm">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Entenda antes de decidir</p>
                <h2>Conhecimento para escolher um sistema com clareza.</h2>
              </div>
              <p>
                Guias diretos sobre ERP, gestão empresarial e os processos que
                precisam continuar conectados.
              </p>
            </div>
            <div className="knowledge-links__grid">
              <a href="/erp">
                <p className="eyebrow">Guia principal</p>
                <h2>O que é um ERP e como funciona?</h2>
                <span>
                  Ler a explicação <ArrowIcon />
                </span>
              </a>
              <a href="/blog/como-organizar-uma-empresa">
                <p className="eyebrow">Gestão na prática</p>
                <h2>Como organizar uma empresa?</h2>
                <span>
                  Ver o passo a passo <ArrowIcon />
                </span>
              </a>
              <a href="/blog/como-escolher-um-erp">
                <p className="eyebrow">Critérios de escolha</p>
                <h2>Como escolher um ERP?</h2>
                <span>
                  Comparar com segurança <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="pricing-section pricing-section--premium section" id="planos">
          <div className="container">
            <SectionHeading
              eyebrow="Planos claros"
              title="Escolha pelo momento da sua empresa."
              description={
                <p>
                  Todos incluem reunião completa sem custo, migração gratuita de
                  produtos, clientes e lançamentos financeiros e suporte humano.
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
                      {plan.badge ? <span>{plan.badge}</span> : null}
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
                  <p className="eyebrow">Projeto customizado</p>
                  <h3>Quando a operação precisa de uma configuração própria.</h3>
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
                    className="button button--light"
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
              title="Respostas diretas. Sem letra pequena."
              description={
                <p>
                  Se sua dúvida for específica, uma pessoa da nossa equipe
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

        <section className="home-final section">
          <div className="container home-final__inner">
            <p className="eyebrow eyebrow--bright">O próximo passo é uma conversa</p>
            <h2>Você cuida do negócio. O MoneySystem coloca a rotina em ordem.</h2>
            <p>
              Conheça o sistema, tire suas dúvidas e veja como mudar sem
              recadastrar tudo.
            </p>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--light button--hero"
            >
              Quero conhecer o MoneySystem
            </WhatsAppCta>
            <ul aria-label="Condições do atendimento">
              <li>Reunião sem custo</li>
              <li>Atendimento humano</li>
              <li>Resposta em até 5 minutos</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />

      <JsonLd
        data={combineSchemaGraphs(
          webPageSchema({
            path: "/",
            name: "MoneySystem — O sistema que coloca sua empresa em ordem",
            description:
              "ERP brasileiro para organizar financeiro, estoque, vendas, notas fiscais, serviços, clientes e equipe.",
          }),
          {
            "@context": "https://schema.org",
            "@type": ["SoftwareApplication", "WebApplication"],
            "@id": SOFTWARE_ID,
            name: "MoneySystem",
            url: absoluteUrl("/"),
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "ERP e sistema de gestão empresarial",
            operatingSystem: "Web",
            inLanguage: "pt-BR",
            description:
              "ERP brasileiro e sistema online de gestão empresarial para organizar financeiro, estoque, vendas, notas fiscais, serviços, clientes e equipe.",
            provider: { "@id": ORGANIZATION_ID },
            screenshot: {
              "@type": "ImageObject",
              url: absoluteUrl("/images/dashboard-devices.png"),
              contentUrl: absoluteUrl("/images/dashboard-devices.png"),
              caption:
                "Dashboard do MoneySystem em um notebook e em um celular.",
            },
            featureList: [
              "Controle financeiro e DRE",
              "Controle de estoque",
              "Vendas e clientes",
              "Emissão de notas fiscais",
              "Ordens de serviço e agenda",
              "Gestão de equipe",
            ],
            offers: plans.map((plan) => ({
              "@type": "Offer",
              name: `Plano ${plan.name}`,
              priceCurrency: "BRL",
              price: plan.price.replace(/\D/g, ""),
              url: absoluteUrl("/#planos"),
            })),
          },
          faqSchema("/", faqs),
        )}
      />
    </>
  );
}
