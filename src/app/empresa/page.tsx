import type { Metadata } from "next";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  ORGANIZATION_ID,
  webPageSchema,
} from "@/lib/schema";
import { HOME_WHATSAPP_MESSAGE } from "@/lib/site";

const path = "/empresa";

export const metadata: Metadata = {
  title: "Sobre o MoneySystem",
  description:
    "Conheça o MoneySystem, empresa brasileira responsável por um ERP online com implantação acompanhada, migração de dados e suporte humano.",
  alternates: { canonical: path },
};

export default function CompanyPage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <header className="knowledge-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Empresa" },
              ]}
            />
            <div className="knowledge-hero__grid">
              <div>
                <p className="eyebrow eyebrow--bright">Sobre o MoneySystem</p>
                <h1>Software brasileiro. Gestão explicada por pessoas.</h1>
              </div>
              <p>
                Conheça o produto, a forma de implantação e os compromissos que
                orientam o atendimento.
              </p>
            </div>
          </div>
        </header>

        <section className="knowledge-intro section">
          <div className="container knowledge-intro__grid">
            <div>
              <p className="eyebrow">Quem é o MoneySystem?</p>
              <h2>
                O MoneySystem é uma empresa brasileira de software de gestão
                empresarial.
              </h2>
            </div>
            <div>
              <p>
                A equipe desenvolve e mantém um ERP online próprio para
                organizar financeiro, estoque, vendas, clientes, notas fiscais,
                serviços, ordens e equipe.
              </p>
              <p>
                O trabalho não termina na entrega do acesso. A implantação
                inclui orientação, preparação dos dados previstos e atendimento
                humano para dúvidas do uso.
              </p>
            </div>
          </div>
        </section>

        <section className="company-principles section section--warm">
          <div className="container">
            <div className="knowledge-section-heading">
              <div>
                <p className="eyebrow">Compromissos verificáveis</p>
                <h2>O que a empresa oferece hoje.</h2>
              </div>
              <p>
                Condições públicas e objetivas, explicadas antes da
                contratação para que sua empresa saiba como será acompanhada.
              </p>
            </div>
            <div className="company-principles__grid">
              <article>
                <span>01</span>
                <h3>Reunião completa e sem custo.</h3>
                <p>
                  A equipe apresenta o sistema de ponta a ponta, entende a
                  operação e responde às dúvidas.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Migração sem custo adicional.</h3>
                <p>
                  Na contratação, produtos, clientes e lançamentos financeiros
                  disponíveis no sistema anterior são preparados pela equipe.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Suporte 100% humano.</h3>
                <p>
                  O atendimento é feito por pessoas, com resposta em até 5
                  minutos nos canais e períodos informados.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Conhecimento aberto.</h3>
                <p>
                  Blog, guias e Central de Ajuda explicam gestão e uso do
                  sistema em HTML acessível, com datas e autoria.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="knowledge-links section">
          <div className="container knowledge-links__grid">
            <Link href="/erp">
              <p className="eyebrow">Conhecimento</p>
              <h2>Entenda o que é um ERP.</h2>
              <span>
                Ler guia <ArrowIcon />
              </span>
            </Link>
            <Link href="/ajuda">
              <p className="eyebrow">Uso do produto</p>
              <h2>Consulte a Central de Ajuda.</h2>
              <span>
                Ver orientações <ArrowIcon />
              </span>
            </Link>
            <Link href="/termos">
              <p className="eyebrow">Transparência</p>
              <h2>Termos e Privacidade.</h2>
              <span>
                Ler documento <ArrowIcon />
              </span>
            </Link>
          </div>
        </section>

        <section className="final-cta section">
          <div className="container final-cta__inner open-frame">
            <p className="eyebrow eyebrow--bright">Fale com a equipe</p>
            <h2>Conheça o MoneySystem com uma pessoa de verdade.</h2>
            <p>
              A reunião é completa, sem custo e usa a rotina da sua empresa
              como ponto de partida.
            </p>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--light"
            >
              Agendar uma conversa
            </WhatsAppCta>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={webPageSchema({
          path,
          pageType: "AboutPage",
          name: "Sobre o MoneySystem",
          description:
            "Informações institucionais e compromissos públicos do MoneySystem.",
          aboutId: ORGANIZATION_ID,
          breadcrumbs: [
            { name: "Início", path: "/" },
            { name: "Empresa" },
          ],
        })}
      />
    </>
  );
}
