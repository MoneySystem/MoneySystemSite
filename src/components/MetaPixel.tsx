"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { trackMetaEvent } from "@/lib/meta-pixel";

export function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    trackMetaEvent("PageView");
  }, [pathname]);

  useEffect(() => {
    const trackWhatsAppClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>(
        'a[href^="https://wa.me/"]',
      );
      if (!link) return;

      trackMetaEvent("Contact", {
        content_name: link.textContent?.trim().slice(0, 100) || "WhatsApp",
      });
    };

    document.addEventListener("click", trackWhatsAppClick);
    return () => document.removeEventListener("click", trackWhatsAppClick);
  }, []);

  return null;
}
