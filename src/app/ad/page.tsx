import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AdLeadForm } from "@/components/AdLeadForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Gestão para negócios automotivos",
  description:
    "Organize serviços, estoque, financeiro e emissão fiscal do seu negócio automotivo com o MoneySystem.",
  alternates: { canonical: "/ad" },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function AdPage() {
  return (
    <div className="ad-page">
      <header className="ad-header">
        <div className="container ad-header__inner">
          <Logo href={null} priority />
          <p>
            Gestão para o setor automotivo <span aria-hidden="true">•</span>{" "}
            Atendimento 100% humano
          </p>
        </div>
      </header>

      <main id="conteudo">
        <section className="ad-hero">
          <div className="container ad-hero__grid">
            <div className="ad-hero__content">
              <p className="eyebrow">
                Para oficinas, centros automotivos e estética automotiva
              </p>
              <h1>Seu negócio automotivo, do orçamento ao caixa, em ordem.</h1>
              <p>
                Centralize serviços, estoque, financeiro e emissão fiscal.
                Veja na prática como o MoneySystem se adapta à sua operação,
                sem compromisso.
              </p>
              <ul aria-label="Diferenciais da conversa">
                <li>Demonstração focada no seu segmento</li>
                <li>Migração gratuita na contratação</li>
                <li>Resposta humana em até 5 minutos</li>
              </ul>
              <a
                className="button button--primary ad-hero__mobile-cta"
                href="#lead-form"
              >
                Quero ver como funciona
              </a>
            </div>

            <div className="ad-form-column">
              <AdLeadForm />
            </div>

            <figure className="ad-product">
              <div className="ad-product__top">
                <span>
                  <i aria-hidden="true" />
                  Tela real do sistema
                </span>
                <span>Web + celular</span>
              </div>
              <Image
                src="/images/dashboard-devices.png"
                alt="MoneySystem aberto em notebook e celular, com a visão geral da operação"
                width={962}
                height={698}
                preload
                sizes="(max-width: 900px) 92vw, 50vw"
              />
              <figcaption>
                Acompanhe sua operação automotiva no computador e no celular.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="ad-case" aria-labelledby="ad-case-title">
          <div className="container ad-case__grid">
            <div className="ad-case__number" aria-label="35 anos de mercado">
              <strong>35</strong>
              <span>anos de mercado</span>
            </div>
            <div>
              <p className="eyebrow">História real do setor</p>
              <h2 id="ad-case-title">
                A LunarFilm modernizou sua rotina de gestão com o MoneySystem.
              </h2>
              <p>
                Uma empresa consolidada no mercado de películas também pode
                mudar de sistema com acompanhamento humano.
              </p>
              <Link
                className="text-link"
                href="/blog/2025-08-22-lunarfilm-35-anos-transformacao-gestao-moneysystem"
              >
                Conhecer o case da LunarFilm
              </Link>
            </div>
          </div>
        </section>

        <section className="ad-results">
          <div className="container">
            <div className="ad-results__heading">
              <p className="eyebrow">Uma conversa direta sobre sua operação</p>
              <h2>Veja como a rotina automotiva pode ficar mais simples.</h2>
            </div>
            <div className="ad-results__grid">
              <article>
                <span>01</span>
                <h3>Do orçamento à ordem de serviço.</h3>
                <p>Atendimento, execução e cobrança ficam conectados.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Peças e produtos sob controle.</h3>
                <p>Estoque e movimentações ficam visíveis para a equipe.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Mude sem começar do zero.</h3>
                <p>
                  Produtos, clientes e lançamentos financeiros podem ser
                  transferidos.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Receba uma demonstração do seu cenário.</h3>
                <p>Atendimento humano, sem robôs e sem compromisso.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="ad-footer">
        <div className="container ad-footer__inner">
          <p>© {new Date().getFullYear()} MoneySystem.</p>
          <Link href="/termos">Termos e Privacidade</Link>
        </div>
      </footer>
    </div>
  );
}
