"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Script from "next/script";
import CookieConsentBanner from "./CookieConsentBanner";

export const STORAGE_KEY = "sk-cookie-consent";
export const COOKIE_KEY = "sk_cookie_consent";
export const COOKIE_MAX_AGE_DAYS = 180;

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
export const CONSENT_VERSION = 1;

type GaDisableProperty = `ga-disable-${string}`;

export type ConsentCategory = "necessary" | "statistics" | "marketing";

export type ConsentPreferences = Record<ConsentCategory, boolean>;

type StoredConsent = {
  version: number;
  preferences: ConsentPreferences;
  updatedAt: string;
};

type ConsentStatus = "unknown" | "saved";

type ConsentContextValue = {
  status: ConsentStatus;
  preferences: ConsentPreferences;
  openManager: () => void;
  acceptAll: () => void;
  declineAll: () => void;
  savePreferences: (prefs: ConsentPreferences) => void;
};

const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  statistics: false,
  marketing: false,
};

const CookieConsentContext = createContext<ConsentContextValue | undefined>(
  undefined,
);

const normalizePreferences = (
  prefs: ConsentPreferences,
): ConsentPreferences => ({
  ...DEFAULT_PREFERENCES,
  ...prefs,
  necessary: true,
});

const parseStoredConsent = (
  value: string | null | undefined,
): StoredConsent | null => {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Partial<StoredConsent>;
    if (!parsed || typeof parsed !== "object" || !parsed.preferences) {
      return null;
    }

    return {
      version: typeof parsed.version === "number" ? parsed.version : 0,
      preferences: normalizePreferences(parsed.preferences),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Failed to parse stored cookie consent", error);
    return null;
  }
};

const readConsentFromCookie = (): StoredConsent | null => {
  if (typeof document === "undefined") return null;

  const raw = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_KEY}=`))
    ?.split("=")?.[1];

  if (!raw) return null;

  try {
    return parseStoredConsent(decodeURIComponent(raw));
  } catch (error) {
    console.warn("Failed to decode cookie consent cookie", error);
    return null;
  }
};

const AnalyticsScripts = ({ enabled }: { enabled: boolean }) => {
  if (!enabled || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          window['ga-disable-${GA_MEASUREMENT_ID}'] = false;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
        `}
      </Script>
    </>
  );
};

export const AnalyticsConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isClient = typeof window !== "undefined";
  const [status, setStatus] = useState<ConsentStatus>("unknown");
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);
  const [managerOpen, setManagerOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(() => !isClient);

  const setGaDisabled = useCallback((disabled: boolean) => {
    if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
    (window as typeof window & Record<GaDisableProperty, boolean>)[
      `ga-disable-${GA_MEASUREMENT_ID}`
    ] = disabled;
  }, []);

  useEffect(() => {
    setGaDisabled(!preferences.statistics);
  }, [preferences.statistics, setGaDisabled]);

  const persistPreferences = useCallback((prefs: ConsentPreferences) => {
    if (typeof window === "undefined") return;

    const payload: StoredConsent = {
      version: CONSENT_VERSION,
      preferences: prefs,
      updatedAt: new Date().toISOString(),
    };

    const serialized = JSON.stringify(payload);

    try {
      window.localStorage.setItem(STORAGE_KEY, serialized);
    } catch (error) {
      console.warn("Cookie consent localStorage unavailable", error);
    }

    try {
      const maxAgeSeconds = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
      const expiresAt = new Date(Date.now() + maxAgeSeconds * 1000).toUTCString();
      const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `${COOKIE_KEY}=${encodeURIComponent(serialized)}; Max-Age=${maxAgeSeconds}; Expires=${expiresAt}; Path=/; SameSite=Lax${secureFlag}`;
    } catch (error) {
      console.warn("Cookie consent cookie unavailable", error);
    }
  }, []);

  const applyStoredConsent = useCallback(
    (stored: StoredConsent | null) => {
      if (!stored) return false;

      const normalized = normalizePreferences(stored.preferences);
      setPreferences(normalized);
      setStatus("saved");
      setManagerOpen(false);

      if (stored.version !== CONSENT_VERSION) {
        persistPreferences(normalized);
      }

      return true;
    },
    [persistPreferences],
  );

  const handlePersistedUpdate = useCallback(
    (next: ConsentPreferences) => {
      const normalized = normalizePreferences(next);
      setPreferences(normalized);
      setStatus("saved");
      persistPreferences(normalized);
      setManagerOpen(false);
    },
    [persistPreferences],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      applyStoredConsent(parseStoredConsent(event.newValue));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyStoredConsent]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      let storedFromLocalStorage: StoredConsent | null = null;

      try {
        storedFromLocalStorage = parseStoredConsent(
          window.localStorage.getItem(STORAGE_KEY),
        );
      } catch (error) {
        console.warn("Cookie consent localStorage unavailable", error);
      }

      let storedFromCookie: StoredConsent | null = null;

      try {
        storedFromCookie = readConsentFromCookie();
      } catch (error) {
        console.warn("Cookie consent cookie unavailable", error);
      }

      if (!applyStoredConsent(storedFromLocalStorage ?? storedFromCookie)) {
        setStatus("unknown");
        setManagerOpen(true);
      }
    } catch (error) {
      console.error("Failed to initialize cookie consent", error);
      setStatus("unknown");
      setManagerOpen(true);
    } finally {
      setIsInitialized(true);
    }
  }, [applyStoredConsent]);

  const acceptAll = useCallback(() => {
    handlePersistedUpdate({
      necessary: true,
      statistics: true,
      marketing: true,
    });
  }, [handlePersistedUpdate]);

  const declineAll = useCallback(() => {
    handlePersistedUpdate(DEFAULT_PREFERENCES);
  }, [handlePersistedUpdate]);

  const savePreferences = useCallback(
    (next: ConsentPreferences) => {
      handlePersistedUpdate(next);
    },
    [handlePersistedUpdate],
  );

  const openManager = useCallback(() => {
    setManagerOpen(true);
  }, []);

  const closeManager = useCallback(() => {
    if (status === "saved") {
      setManagerOpen(false);
    }
  }, [status]);

  const contextValue = useMemo(
    () => ({
      status,
      preferences,
      openManager,
      acceptAll,
      declineAll,
      savePreferences,
    }),
    [status, preferences, openManager, acceptAll, declineAll, savePreferences],
  );

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
      {isInitialized && (
        <CookieConsentBanner
          open={managerOpen}
          allowClose={status === "saved"}
          preferences={preferences}
          onAcceptAll={acceptAll}
          onDeclineAll={declineAll}
          onSaveSelection={savePreferences}
          onClose={closeManager}
        />
      )}
      {isInitialized && status === "saved" && !managerOpen && (
        <button
          type="button"
          onClick={openManager}
          className="fixed bottom-4 left-4 z-[900] rounded-full border border-slate-200 bg-white/95 px-6 py-2 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-white"
        >
          Cookie-Einstellungen
        </button>
      )}
      <AnalyticsScripts
        enabled={status === "saved" && preferences.statistics}
      />
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within an AnalyticsConsentProvider",
    );
  }
  return context;
};
