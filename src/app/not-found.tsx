import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="not-found-page">
        <div className="container not-found-page__inner">
          <p className="eyebrow">Erro 404</p>
          <h1>Esta página não existe.</h1>
          <p>
            O endereço pode ter mudado ou sido digitado incorretamente. Você
            pode voltar ao início ou procurar uma resposta na Central de Ajuda.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/">
              Voltar ao início <ArrowIcon />
            </Link>
            <Link className="button button--secondary" href="/ajuda">
              Ir para a Ajuda
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
