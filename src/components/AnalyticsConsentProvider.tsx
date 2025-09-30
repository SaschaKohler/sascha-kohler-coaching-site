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
import {
  CONSENT_VERSION,
  DEFAULT_PREFERENCES,
  STORAGE_KEY,
  normalizePreferences,
  parseStoredConsent,
  persistConsent,
  readConsentFromCookie,
  readConsentFromStorage,
  type ConsentPreferences,
  type StoredConsent,
} from "../utils/consent";
import {
  GTM_CONTAINER_ID,
  setConsentModeDefaults,
  updateConsentMode,
} from "../utils/analytics";

const GTM_ID = GTM_CONTAINER_ID;

type GtmDisableProperty = `gtm-disable-${string}`;

type ConsentStatus = "unknown" | "saved";

type ConsentContextValue = {
  status: ConsentStatus;
  preferences: ConsentPreferences;
  openManager: () => void;
  acceptAll: () => void;
  declineAll: () => void;
  savePreferences: (prefs: ConsentPreferences) => void;
};

const CookieConsentContext = createContext<ConsentContextValue | undefined>(
  undefined,
);

const AnalyticsScripts = () => {
  if (!GTM_ID) {
    return null;
  }

  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', ${JSON.stringify({
            ad_storage: "denied",
            analytics_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            functionality_storage: "granted",
            security_storage: "granted",
          })});
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
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

  const setGtmDisabled = useCallback(
    (disabled: boolean) => {
      if (typeof window === "undefined" || !GTM_ID) return;

      (window as typeof window & Record<GtmDisableProperty, boolean>)[
        `gtm-disable-${GTM_ID}`
      ] = disabled;
    },
    [],
  );

  useEffect(() => {
    if (!GTM_ID) return;
    setGtmDisabled(!preferences.statistics);
    updateConsentMode(preferences);
  }, [preferences, setGtmDisabled]);

  const persistPreferences = useCallback((prefs: ConsentPreferences) => {
    persistConsent(prefs);
  }, []);

  const applyStoredConsent = useCallback(
    (stored: StoredConsent | null) => {
      if (!stored) return false;

      const normalized = normalizePreferences(stored.preferences);
      setPreferences(normalized);
      setStatus("saved");
      setManagerOpen(false);

      updateConsentMode(normalized);

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
      updateConsentMode(normalized);
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
      setConsentModeDefaults();
      const storedFromLocalStorage = readConsentFromStorage();
      const storedFromCookie = storedFromLocalStorage ?? readConsentFromCookie();

      if (!applyStoredConsent(storedFromCookie)) {
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
      <AnalyticsScripts />
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
