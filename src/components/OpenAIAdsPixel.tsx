"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { trackOpenAIAdsEvent } from "@/lib/openai-ads-pixel";

export function OpenAIAdsPixel() {
  const pathname = usePathname();
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }

    trackOpenAIAdsEvent("page_viewed", {
      type: "contents",
      contents: [
        {
          id: pathname,
          name: pathname,
          content_type: "page",
        },
      ],
    });
  }, [pathname]);

  return null;
}
