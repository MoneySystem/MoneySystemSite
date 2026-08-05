export const META_PIXEL_ID = "1537160514130708";

type MetaEventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track",
      eventName: string,
      parameters?: MetaEventParameters,
      options?: Record<string, string>,
    ) => void;
  }
}

export function trackMetaEvent(
  eventName: string,
  parameters?: MetaEventParameters,
  eventId?: string,
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq(
    "track",
    eventName,
    parameters,
    eventId ? { eventID: eventId } : undefined,
  );
}
