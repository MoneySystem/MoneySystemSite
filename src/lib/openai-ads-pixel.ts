type OpenAIAdsEventData = Record<string, unknown> & {
  type: string;
};

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

export function trackOpenAIAdsEvent(
  eventName: string,
  data: OpenAIAdsEventData,
  eventId?: string,
) {
  if (typeof window === "undefined" || typeof window.oaiq !== "function") {
    return;
  }

  try {
    window.oaiq(
      "measure",
      eventName,
      data,
      eventId ? { event_id: eventId } : undefined,
    );
  } catch {
    // Measurement must never interrupt the visitor's conversion flow.
  }
}
