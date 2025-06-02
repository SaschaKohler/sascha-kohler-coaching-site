export const metadata = {
  title: 'Impressum | Sascha Kohler - NLP-Trainer & Mentaltrainer',
  description: 'Rechtliche Informationen und Kontaktdaten von Sascha Kohler - NLP-Trainer, Mentaltrainer und angehender Lebens- und Sozialberater.',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-16">
      {/* Header */}
      <header className="py-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-klare-k-soft rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-dark-brown mb-4">
            Impressum
          </h1>
          <p className="text-xl text-warm-brown">
            Gemäß § 5 ECG, § 25 MedienG und § 63 GewO - Gesetzlich erforderliche Angaben
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-warm-white border border-light-beige rounded-2xl p-8 shadow-sm">
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Angaben gemäß § 5 ECG
            </h2>
            <div className="space-y-3 text-warm-brown">
              <p className="font-medium text-dark-brown text-lg">Sascha Kohler</p>
              <p>Furth 6</p>
              <p>4311 Schwertberg</p>
              <p>Österreich</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Kontakt
            </h2>
            <div className="space-y-2 text-warm-brown">
              <p>Telefon: +43 650 90 30 372</p>
              <p>E-Mail: office@sascha-kohler.at</p>
              <p>Website: www.sascha-kohler.at</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Berufsbezeichnungen und Qualifikationen
            </h2>
            <div className="space-y-4 text-warm-brown">
              <div className="bg-light-beige p-4 rounded-lg">
                <h3 className="font-medium text-dark-brown mb-2">Haupttätigkeiten:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="font-medium">NLP-Master & Trainer (zertifiziert)</li>
                  <li className="font-medium">Mentaltrainer (zertifiziert)</li>
                  <li className="font-medium">Pharmazeut (Approbation 2003, Deutschland)</li>
                  <li>Lebens- und Sozialberater (LSB in A.u.SV.) - <em>Diplom ab September 2025</em></li>
                </ul>
              </div>
              
              <div>
                <p className="mb-2">Zusätzliche Ausbildungen:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Monodramatisches Spiel</li>
                  <li>Provokative Methode nach Frank Farrelly</li>
                  <li>Systemische und tiefenpsychologische Ansätze</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Unternehmensdaten
            </h2>
            <div className="space-y-3 text-warm-brown">
              <p>Eingetragene Gewerbe:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IT-Dienstleistung <em>(für eigene Online-Präsenz)</em></li>
                <li>Werbeagentur</li>
              </ul>
              <p>GISA: 37168483, 37168445</p>
              <p className="mt-4">
                Zusätzliche freie Gewerbe/neue Selbständige:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>NLP-Trainer & Mentaltrainer</li>
                <li>Lebens- und Sozialberater (in Ausbildung unter Supervision bis September 2025)</li>
              </ul>
              <p className="mt-4">Mitglied der WKO Oberösterreich</p>
              <p>Berufsrecht: Gewerbeordnung: www.ris.bka.gv.at</p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Aufsichtsbehörde/Gewerbebehörde
            </h2>
            <p className="text-warm-brown">Bezirkshauptmannschaft Perg</p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Verbraucherstreitbeilegung
            </h2>
            <p className="text-warm-brown leading-relaxed">
              Wir erkennen den Internet Ombudsmann als außergerichtliche
              Streitbeilegungsstelle an. Bei Beschwerden wenden Sie sich bitte
              an: office@sascha-kohler.at oder an die Plattform zur
              Online-Streitbeilegung der Europäischen Kommission:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-klare-k hover:text-klare-l underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Urheberrecht
            </h2>
            <div className="space-y-3 text-warm-brown leading-relaxed">
              <p>
                Die Inhalte dieser Website sind urheberrechtlich geschützt. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="font-medium">
                © {new Date().getFullYear()} Sascha Kohler. Alle Rechte vorbehalten.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              Haftungsausschluss
            </h2>
            <div className="space-y-3 text-warm-brown leading-relaxed">
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
              <p>Alle Angaben sind ohne Gewähr.</p>
            </div>
          </section>
        </div>

        {/* Zurück-Link */}
        <div className="max-w-4xl mx-auto mt-8">
          <a
            href="/"
            className="inline-flex items-center text-warm-brown hover:text-klare-k transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </a>
        </div>
      </main>
    </div>
  );
}
