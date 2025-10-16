// utils/analytics.ts
import { hasStatisticsConsent, type ConsentPreferences } from "./consent";

export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_ID;

type DataLayerItem = Record<string, unknown>;
type DataLayerEntry = DataLayerItem | unknown[];

type ConsentModeSetting = "denied" | "granted";
type ConsentModePayload = {
  ad_storage: ConsentModeSetting;
  analytics_storage: ConsentModeSetting;
  ad_user_data: ConsentModeSetting;
  ad_personalization: ConsentModeSetting;
  functionality_storage: ConsentModeSetting;
  security_storage: ConsentModeSetting;
};

const CONSENT_MODE_DEFAULTS: ConsentModePayload = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  functionality_storage: "granted",
  security_storage: "granted",
};

const ensureDataLayer = (): void => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
};

const ensureGtag = (): ((...args: unknown[]) => void) | null => {
  if (typeof window === "undefined") return null;

  ensureDataLayer();

  const nextWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof nextWindow.gtag !== "function") {
    nextWindow.gtag = (...args: unknown[]) => {
      ensureDataLayer();
      window.dataLayer!.push(args);
    };
  }

  return nextWindow.gtag ?? null;
};

const preferencesToConsentMode = (
  prefs: ConsentPreferences,
): ConsentModePayload => ({
  ...CONSENT_MODE_DEFAULTS,
  analytics_storage: prefs.statistics ? "granted" : "denied",
  ad_storage: prefs.marketing ? "granted" : "denied",
  ad_user_data: prefs.marketing ? "granted" : "denied",
  ad_personalization: prefs.marketing ? "granted" : "denied",
});

export const setConsentModeDefaults = (): void => {
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("consent", "default", CONSENT_MODE_DEFAULTS);
};

export const updateConsentMode = (prefs: ConsentPreferences): void => {
  const gtag = ensureGtag();
  if (!gtag) return;

  const consentPayload = preferencesToConsentMode(prefs);
  gtag("consent", "update", consentPayload);
  gtag("event", "cookie_consent_update", { consent: consentPayload });
};

const canTrack = (): boolean =>
  typeof window !== "undefined" &&
  Boolean(GTM_CONTAINER_ID) &&
  hasStatisticsConsent();

const pushToDataLayer = (payload: DataLayerItem) => {
  if (!canTrack()) return;

  ensureDataLayer();
  window.dataLayer!.push(payload);
};

// Track page views
export const pageview = (url: string): void => {
  pushToDataLayer({
    event: "page_view",
    page_path: url,
  });
};

// Track specific events for SEO monitoring
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  pushToDataLayer({
    event: action,
    event_category: category,
    event_label: label,
    value,
  });
};

// Specific events for Online Coaching tracking
export const trackOnlineBooking = (type: "started" | "completed"): void => {
  event({
    action: type === "started" ? "booking_started" : "booking_completed",
    category: "Online Coaching",
    label: "Online Booking Process",
  });
};

export const trackVideoCallClick = (): void => {
  event({
    action: "video_call_click",
    category: "Online Coaching",
    label: "Video Call CTA",
  });
};

export const trackFAQInteraction = (question: string): void => {
  event({
    action: "faq_opened",
    category: "Online Coaching",
    label: question,
  });
};

export const trackPhoneClick = (): void => {
  event({
    action: "phone_click",
    category: "Contact",
    label: "Direct Phone Call",
  });
};

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
    gtag?: (...args: unknown[]) => void;
  }
}
