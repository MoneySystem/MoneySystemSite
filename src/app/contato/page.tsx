import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ORGANIZATION_ID,
  webPageSchema,
} from "@/lib/schema";
import {
  createWhatsAppUrl,
  HOME_WHATSAPP_MESSAGE,
} from "@/lib/site";

const path = "/contato";

export const metadata: Metadata = {
  title: "Contato e atendimento humano",
  description:
    "Fale pelo WhatsApp com a equipe MoneySystem para conhecer o sistema, tirar dúvidas comerciais ou pedir ajuda.",
  alternates: { canonical: path },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="knowledge-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Contato" },
              ]}
            />
            <div className="knowledge-hero__grid">
              <div>
                <p className="eyebrow eyebrow--bright">Contato MoneySystem</p>
                <h1>Você fala com uma pessoa.</h1>
              </div>
              <p>
                Use o WhatsApp para conhecer o sistema, falar sobre sua empresa
                ou pedir ajuda com uma rotina do MoneySystem.
              </p>
            </div>
          </div>
        </header>

        <section className="contact-options section">
          <div className="container contact-options__grid">
            <article>
              <p className="eyebrow">Quero conhecer</p>
              <h2>Conversa comercial e demonstração.</h2>
              <p>
                Conte o tipo de empresa, se há filiais, quantas pessoas usarão
                o sistema e se precisa emitir notas fiscais.
              </p>
              <a
                className="button button--primary"
                href={createWhatsAppUrl(HOME_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
              >
                Falar com especialista <ArrowIcon />
              </a>
            </article>
            <article>
              <p className="eyebrow">Já uso o sistema</p>
              <h2>Suporte e dúvidas de operação.</h2>
              <p>
                Informe a tela, a ação realizada e a mensagem exibida. Não envie
                senhas, certificado digital ou dados além do necessário.
              </p>
              <a
                className="button button--dark"
                href={createWhatsAppUrl(
                  "Olá! Preciso de ajuda com o MoneySystem.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Falar com suporte <ArrowIcon />
              </a>
            </article>
          </div>
        </section>

        <section className="contact-prep section section--warm">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Para agilizar</p>
                <h2>O que enviar na primeira mensagem?</h2>
              </div>
              <p>
                Um pouco de contexto ajuda a equipe a responder de forma mais
                útil.
              </p>
            </div>
            <ol className="knowledge-map__steps">
              <li>
                <span>01</span>
                <strong>Seu nome e o nome da empresa</strong>
              </li>
              <li>
                <span>02</span>
                <strong>O que a empresa vende ou executa</strong>
              </li>
              <li>
                <span>03</span>
                <strong>A principal dificuldade de gestão</strong>
              </li>
              <li>
                <span>04</span>
                <strong>Se precisa emitir nota ou migrar dados</strong>
              </li>
            </ol>
          </div>
        </section>

        <section className="knowledge-links section">
          <div className="container knowledge-links__grid">
            <Link href="/solucoes">
              <p className="eyebrow">Antes da conversa</p>
              <h2>Veja soluções por segmento.</h2>
              <span>
                Explorar soluções <ArrowIcon />
              </span>
            </Link>
            <Link href="/recursos">
              <p className="eyebrow">Recursos</p>
              <h2>Entenda cada área do sistema.</h2>
              <span>
                Ver recursos <ArrowIcon />
              </span>
            </Link>
            <Link href="/ajuda">
              <p className="eyebrow">Autoatendimento</p>
              <h2>Consulte a Central de Ajuda.</h2>
              <span>
                Buscar resposta <ArrowIcon />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={webPageSchema({
          path,
          pageType: "ContactPage",
          name: "Contato MoneySystem",
          description:
            "Canais para atendimento comercial e suporte humano MoneySystem.",
          aboutId: ORGANIZATION_ID,
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Contato" },
          ],
        })}
      />
    </>
  );
}
