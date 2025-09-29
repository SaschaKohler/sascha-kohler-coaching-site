export const STORAGE_KEY = "sk-cookie-consent";
export const COOKIE_KEY = "sk_cookie_consent";
export const COOKIE_MAX_AGE_DAYS = 180;
export const CONSENT_VERSION = 1;

export type ConsentCategory = "necessary" | "statistics" | "marketing";

export type ConsentPreferences = Record<ConsentCategory, boolean>;

export type StoredConsent = {
  version: number;
  preferences: ConsentPreferences;
  updatedAt: string;
};

export const DEFAULT_PREFERENCES: ConsentPreferences = {
    necessary: true,
    statistics: false,
    marketing: false,
};

export const normalizePreferences = (
  prefs: ConsentPreferences,
): ConsentPreferences => ({
  ...DEFAULT_PREFERENCES,
  ...prefs,
  necessary: true,
  statistics: Boolean(prefs.statistics),
  marketing: Boolean(prefs.marketing),
});

export const parseStoredConsent = (value: string | null): StoredConsent | null => {
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

export const readConsentFromStorage = (): StoredConsent | null => {
  if (typeof window === "undefined") return null;

  try {
    return parseStoredConsent(window.localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    console.warn("Cookie consent localStorage unavailable", error);
    return null;
  }
};

export const readConsentFromCookie = (): StoredConsent | null => {
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

export const getLatestStoredConsent = (): StoredConsent | null =>
  readConsentFromStorage() ?? readConsentFromCookie();

export const persistConsent = (prefs: ConsentPreferences) => {
  if (typeof window === "undefined") return;

  const payload: StoredConsent = {
    version: CONSENT_VERSION,
    preferences: normalizePreferences(prefs),
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
};

export const hasStatisticsConsent = (): boolean => {
  const stored = getLatestStoredConsent();
  return stored?.preferences.statistics ?? false;
};
