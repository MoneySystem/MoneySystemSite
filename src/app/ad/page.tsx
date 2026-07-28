import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AdLeadForm } from "@/components/AdLeadForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Organize sua empresa sem começar do zero",
  description:
    "Conheça o MoneySystem em uma demonstração personalizada, com migração gratuita e atendimento 100% humano.",
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
            Empresa brasileira <span aria-hidden="true">•</span> Atendimento
            100% humano
          </p>
        </div>
      </header>

      <main id="conteudo">
        <section className="ad-hero">
          <div className="container ad-hero__grid">
            <div className="ad-hero__content">
              <p className="eyebrow">Demonstração personalizada do MoneySystem</p>
              <h1>Organize sua empresa sem perder o que você já construiu.</h1>
              <p>
                Veja como colocar a rotina no lugar, entender o que realmente
                sobra e trabalhar com menos conferência. Na contratação, seus
                principais dados vêm com você.
              </p>
              <ul aria-label="Diferenciais da conversa">
                <li>Reunião completa e sem custo</li>
                <li>Migração sem custo adicional</li>
                <li>Resposta humana em até 5 minutos</li>
              </ul>
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
                Você acompanha a empresa no computador e no celular.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="ad-results">
          <div className="container">
            <div className="ad-results__heading">
              <p className="eyebrow">Uma conversa direta sobre sua empresa</p>
              <h2>Você entende o que muda antes de tomar uma decisão.</h2>
            </div>
            <div className="ad-results__grid">
              <article>
                <span>01</span>
                <h3>Veja quanto realmente sobra.</h3>
                <p>Financeiro e resultado deixam de depender de planilhas.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Antecipe o que pede atenção.</h3>
                <p>Estoque, cobranças e pendências ficam visíveis.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Mude sem recadastrar tudo.</h3>
                <p>
                  Produtos, clientes e lançamentos financeiros podem ser
                  transferidos.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Fale com uma pessoa de verdade.</h3>
                <p>Sem robôs e sem resposta genérica sobre sua operação.</p>
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
