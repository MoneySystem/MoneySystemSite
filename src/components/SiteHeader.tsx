import { ArrowIcon } from "@/components/ArrowIcon";
import { Logo } from "@/components/Logo";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  HOME_WHATSAPP_MESSAGE,
  LOGIN_URL,
  NAVIGATION,
} from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo priority />

        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAVIGATION.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="header-login" href={LOGIN_URL}>
            Acessar sistema
          </a>
          <WhatsAppCta
            message={HOME_WHATSAPP_MESSAGE}
            className="button button--header"
          >
            Falar com especialista
          </WhatsAppCta>
        </div>

        <WhatsAppCta
          message={HOME_WHATSAPP_MESSAGE}
          className="button site-header__mobile-cta"
        >
          Falar agora
        </WhatsAppCta>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu">
            <span />
            <span />
          </summary>
          <div className="mobile-menu__panel">
            <nav aria-label="Navegação móvel">
              {NAVIGATION.map((item) => (
                <a href={item.href} key={item.href}>
                  <span>{item.label}</span>
                  <ArrowIcon />
                </a>
              ))}
            </nav>
            <a className="mobile-menu__login" href={LOGIN_URL}>
              Acessar sistema
            </a>
            <WhatsAppCta
              message={HOME_WHATSAPP_MESSAGE}
              className="button button--primary button--full"
            >
              Falar com especialista
            </WhatsAppCta>
          </div>
        </details>
      </div>
    </header>
  );
}
