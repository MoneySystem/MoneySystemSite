import Link from "next/link";

import { Logo } from "@/components/Logo";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  HOME_WHATSAPP_MESSAGE,
  LOGIN_URL,
  NAVIGATION,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <Logo />
          <p>
            O sistema que coloca vendas, financeiro, estoque, notas e serviços
            em ordem.
          </p>
        </div>

        <div className="site-footer__column">
          <p className="footer-label">Navegação</p>
          {NAVIGATION.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={LOGIN_URL}>Acessar sistema</a>
        </div>

        <div className="site-footer__contact">
          <p className="footer-label">Fale com uma pessoa</p>
          <h2>Suporte 100% humano, sempre que precisar.</h2>
          <p>Nosso atendimento responde em até 5 minutos.</p>
          <WhatsAppCta
            message={HOME_WHATSAPP_MESSAGE}
            className="button button--light"
          >
            Conversar no WhatsApp
          </WhatsAppCta>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} MoneySystem. Todos os direitos reservados.</p>
        <Link href="/termos">Termos de Uso e Privacidade</Link>
      </div>
    </footer>
  );
}
