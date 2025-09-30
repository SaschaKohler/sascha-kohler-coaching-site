"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { ConsentPreferences } from "../utils/consent";
import { XMarkIcon } from "@heroicons/react/24/outline";

type CookieConsentBannerProps = {
  open: boolean;
  allowClose: boolean;
  preferences: ConsentPreferences;
  onAcceptAll: () => void;
  onDeclineAll: () => void;
  onSaveSelection: (prefs: ConsentPreferences) => void;
  onClose: () => void;
};

const CATEGORY_TEXT = {
  necessary: {
    title: "Notwendig",
    description:
      "Diese Cookies sind für den technischen Betrieb der Website essenziell und können nicht deaktiviert werden.",
  },
  statistics: {
    title: "Statistik",
    description:
      "Hilft uns zu verstehen, wie Besucher*innen mit der Website interagieren, um Inhalte zu optimieren (z. B. Google Analytics).",
  },
  marketing: {
    title: "Marketing",
    description:
      "Diese Cookies ermöglichen personalisierte Inhalte und Kampagnen über verschiedene Kanäle hinweg.",
  },
} as const;

const CONSENT_TEXT =
  "Wir verwenden Cookies, um unsere Website zu betreiben und zu verbessern. Du kannst selbst entscheiden, " +
  "welche Kategorien du zulässt. Notwendige Cookies sind für die grundlegende Funktionalität erforderlich und können nicht abgelehnt werden. " +
  "Weitere Informationen findest du in unserer Datenschutzerklärung.";

const useSelectionState = (open: boolean, initial: ConsentPreferences) => {
  const [selection, setSelection] = useState<ConsentPreferences>(initial);

  useEffect(() => {
    if (open) {
      setSelection(initial);
    }
  }, [open, initial]);

  return [selection, setSelection] as const;
};

const CookieConsentBanner = ({
  open,
  allowClose,
  preferences,
  onAcceptAll,
  onDeclineAll,
  onSaveSelection,
  onClose,
}: CookieConsentBannerProps) => {
  const [selection, setSelection] = useSelectionState(open, preferences);

  const categories = useMemo(
    () => ["necessary", "statistics", "marketing"] as const,
    [],
  );

  const toggleCategory = (category: keyof ConsentPreferences) => {
    if (category === "necessary") return;

    setSelection((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/70 px-4 py-8">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Cookie-Einstellungen</h2>
            <p className="mt-2 text-sm text-slate-600">
              {CONSENT_TEXT} {" "}
              <Link href="/datenschutz" className="underline decoration-slate-400 underline-offset-4 hover:text-slate-900">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={!allowClose}
            className="ml-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Cookie-Einstellungen schließen"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3 px-6 py-4">
          {categories.map((category) => {
            const isRequired = category === "necessary";
            const active = selection[category];
            const { title, description } = CATEGORY_TEXT[category];

            return (
              <div
                key={category}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-base font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm text-slate-600">{description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {active ? "Aktiv" : "Inaktiv"}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleCategory(category)}
                      disabled={isRequired}
                      className={`relative h-6 w-12 rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-klare-k focus-visible:ring-offset-2 ${
                        active ? "border-klare-k bg-klare-k" : "border-slate-300 bg-white"
                      } ${isRequired ? "cursor-not-allowed opacity-60" : ""}`}
                      aria-pressed={active}
                      aria-label={`${title} ${active ? "deaktivieren" : "aktivieren"}`}
                    >
                      <span
                        className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 transform rounded-full bg-white shadow transition ${
                          active ? "right-1" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 px-6 py-5 md:flex-row md:justify-end">
          <button
            type="button"
            onClick={onDeclineAll}
            className="w-full rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:w-auto"
          >
            Alle ablehnen
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="w-full rounded-md bg-klare-k px-5 py-2 text-sm font-semibold text-white transition hover:bg-klare-k/90 md:w-auto"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => onSaveSelection(selection)}
            className="w-full rounded-md border border-pink-200 bg-pink-50 px-5 py-2 text-sm font-semibold text-pink-700 transition hover:bg-pink-100 md:w-auto"
          >
            Auswahl speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
