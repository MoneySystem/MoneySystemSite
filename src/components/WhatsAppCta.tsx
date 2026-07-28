import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/ArrowIcon";
import { createWhatsAppUrl } from "@/lib/site";

type WhatsAppCtaProps = {
  children: ReactNode;
  message: string;
  className?: string;
  ariaLabel?: string;
};

export function WhatsAppCta({
  children,
  message,
  className = "button button--primary",
  ariaLabel,
}: WhatsAppCtaProps) {
  return (
    <a
      className={className}
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}
