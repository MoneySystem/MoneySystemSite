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
          <p className="footer-label">Explore</p>
          {NAVIGATION.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/empresa">Sobre o MoneySystem</a>
          <a href="/contato">Contato</a>
          <a href={LOGIN_URL}>Acessar sistema</a>
        </div>

        <div className="site-footer__contact">
          <p className="footer-label">Fale com uma pessoa</p>
          <h2>Suporte 100% humano, sem respostas genéricas.</h2>
          <p>
            Nosso atendimento responde em até 5 minutos nos canais e períodos
            informados pela equipe.
          </p>
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
        <div className="site-footer__legal">
          <a href="/empresa">Empresa</a>
          <a href="/contato">Contato</a>
          <a href="/termos">Termos de Uso e Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
