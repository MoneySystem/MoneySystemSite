import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AdLeadForm } from "@/components/AdLeadForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Coloque sua empresa em ordem",
  description:
    "Fale com o MoneySystem sobre vendas, financeiro, estoque, serviços e emissão fiscal.",
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
          <Logo />
          <p>Atendimento 100% humano</p>
        </div>
      </header>

      <main id="conteudo">
        <section className="ad-hero">
          <div className="container ad-hero__grid">
            <div className="ad-hero__content">
              <p className="eyebrow eyebrow--bright">
                Gestão empresarial sem informações espalhadas
              </p>
              <h1>Coloque sua empresa em ordem sem começar do zero.</h1>
              <p>
                O MoneySystem reúne vendas, financeiro, estoque, serviços e
                notas fiscais. Ao contratar, migramos gratuitamente seus
                produtos, clientes e lançamentos financeiros.
              </p>
              <ul>
                <li>Reunião completa e sem custo</li>
                <li>Migração gratuita</li>
                <li>Atendimento humano em até 5 minutos</li>
              </ul>
            </div>

            <div className="ad-form-column">
              <AdLeadForm />
            </div>

            <figure className="ad-product open-frame">
              <Image
                src="/images/dashboard-devices.png"
                alt="Tela real do MoneySystem em notebook e celular"
                width={962}
                height={698}
                loading="eager"
                sizes="(max-width: 900px) 92vw, 50vw"
              />
              <figcaption>Tela real do MoneySystem</figcaption>
            </figure>
          </div>
        </section>

        <section className="ad-results">
          <div className="container ad-results__grid">
            <article>
              <span>01</span>
              <h2>Saiba como a empresa está.</h2>
              <p>Acompanhe números e pendências em um só lugar.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Organize a rotina.</h2>
              <p>Conecte vendas, estoque, serviços e financeiro.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Mude sem recadastrar tudo.</h2>
              <p>Leve seus principais cadastros e lançamentos.</p>
            </article>
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
