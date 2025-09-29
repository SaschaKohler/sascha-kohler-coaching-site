import { Metadata } from "next";
import WarmNavigation from "@/components/WarmNavigation";
import WarmFooter from "@/components/WarmFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Sascha Kohler - Lebens- und Sozialberater",
  description:
    "Nehmen Sie Kontakt auf für ein unverbindliches Beratungsgespräch. Online-Beratung und persönliche Termine in Schwertberg, Oberösterreich.",
  openGraph: {
    title: "Kontakt | Sascha Kohler - Lebens- und Sozialberater",
    description:
      "Nehmen Sie Kontakt auf für ein unverbindliches Beratungsgespräch. Online-Beratung und persönliche Termine in Schwertberg, Oberösterreich.",
    type: "website",
  },
};

export default function KontaktPage() {
  return (
    <>
      <WarmNavigation />
      <main className="pt-28 pb-16 bg-warm-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-800">
              Lassen Sie uns
              <span className="text-amber-600"> sprechen</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Der erste Schritt zu Veränderung ist oft ein Gespräch. Ich freue
              mich darauf, Sie kennenzulernen und gemeinsam zu erkunden, wie ich
              Sie auf Ihrem Weg unterstützen kann.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">
                Nachricht senden
              </h2>

              <ContactForm />
            </div>

            {/* Kontaktinformationen */}
            <div className="space-y-8">
              <div className="bg-amber-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  Direkter Kontakt
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">E-Mail</p>
                      <p className="text-slate-600">office@sascha-kohler.at</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Telefon</p>
                      <p className="text-slate-600">+43 (0) 650 90 30 372</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Standort</p>
                      <p className="text-slate-600">
                        Furth 6<br />
                        4311 Schwertberg - Oberösterreich
                        <br />
                        Österreich
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  Terminvereinbarung
                </h3>
                <p className="text-slate-600 mb-6">
                  Ich biete sowohl persönliche Gespräche in Schwertberg
                  (Oberösterreich) als auch Online-Beratung via Video-Call an.
                  Das Erstgespräch (30 Min.) ist für Sie kostenfrei und
                  unverbindlich.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Flexible Terminzeiten auch abends und am Wochenende
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Diskretion und Vertraulichkeit garantiert
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <svg
                      className="w-4 h-4 text-amber-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Menschenzentrierter, einfühlsamer Ansatz
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  Was Sie erwartet
                </h3>
                <p className="text-slate-600 mb-4">
                  In unserem ersten Gespräch nehme ich mir Zeit, Sie und Ihr
                  Anliegen kennenzulernen. Gemeinsam erkunden wir, ob und wie
                  ich Sie auf Ihrem Weg unterstützen kann.
                </p>
                <p className="text-slate-600">
                  <strong>Wichtig:</strong> Sie entscheiden selbst, ob und in
                  welchem Tempo Sie weitergehen möchten. Es gibt keinen Druck
                  und keine Verpflichtungen.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
              Häufige Fragen
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-slate-800 mb-2">
                  Wie läuft das Erstgespräch ab?
                </h3>
                <p className="text-slate-600 text-sm">
                  Das kostenfreie Erstgespräch (30 Min.) dient dem gegenseitigen
                  Kennenlernen. Wir besprechen Ihr Anliegen und schauen, ob eine
                  Zusammenarbeit für beide Seiten passt.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-slate-800 mb-2">
                  Wie schnell erhalte ich einen Termin?
                </h3>
                <p className="text-slate-600 text-sm">
                  In der Regel kann ich Ihnen innerhalb von 1-2 Wochen einen
                  Termin anbieten. Bei dringenden Anliegen finden wir auch
                  kurzfristigere Lösungen.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-slate-800 mb-2">
                  Ist Online-Beratung genauso wirksam?
                </h3>
                <p className="text-slate-600 text-sm">
                  Ja, Online-Beratung kann genauso wirksam sein wie persönliche
                  Gespräche. Viele Menschen schätzen die Flexibilität und fühlen
                  sich in der gewohnten Umgebung wohler.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-slate-800 mb-2">
                  Unterliegen Sie der Schweigepflicht?
                </h3>
                <p className="text-slate-600 text-sm">
                  Als diplomierter Lebens- und Sozialberater unterliege ich der
                  beruflichen Verschwiegenheitspflicht. Alles was Sie mir
                  anvertrauen, bleibt zwischen uns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WarmFooter />
    </>
  );
}
