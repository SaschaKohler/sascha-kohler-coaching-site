export const metadata = {
  title: 'Datenschutzerklärung | Sascha Kohler - NLP-Trainer & Mentaltrainer',
  description: 'Informationen zum Datenschutz gemäß DSGVO für die Website von Sascha Kohler.',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-16">
      {/* Header */}
      <header className="py-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-klare-l-soft rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-dark-brown mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-warm-brown">
            Informationen zum Schutz Ihrer persönlichen Daten gemäß DSGVO
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-warm-white border border-light-beige rounded-2xl p-8 shadow-sm">
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-4 text-warm-brown leading-relaxed">
              <h3 className="font-medium text-dark-brown">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              2. Verantwortlicher für die Datenverarbeitung
            </h2>
            <div className="bg-light-beige p-6 rounded-lg text-warm-brown">
              <p className="font-medium text-dark-brown mb-2">Sascha Kohler</p>
              <p>NLP-Trainer & Mentaltrainer</p>
              <p>Furth 6</p>
              <p>4311 Schwertberg</p>
              <p>Österreich</p>
              <p className="mt-3">
                <strong>Kontakt:</strong><br />
                Telefon: +43 650 90 30 372<br />
                E-Mail: office@sascha-kohler.at
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              3. Datenerfassung auf dieser Website
            </h2>
            <div className="space-y-6 text-warm-brown leading-relaxed">
              <div>
                <h3 className="font-medium text-dark-brown mb-2">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                  so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                  Dies sind:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-3">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                  Die Daten werden nach einer statistischen Auswertung gelöscht.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-dark-brown mb-2">Kontaktformular und E-Mail-Kontakt</h3>
                <p>
                  Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre 
                  Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              4. Ihre Rechte
            </h2>
            <div className="space-y-4 text-warm-brown leading-relaxed">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>unentgeltlich Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>die Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen</li>
                <li>die Datenübertragbarkeit zu verlangen</li>
              </ul>
              <p className="mt-4">
                Für die Ausübung Ihrer Rechte wenden Sie sich bitte an: office@sascha-kohler.at
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              5. Coaching und Beratungsleistungen
            </h2>
            <div className="bg-light-beige p-6 rounded-lg space-y-4 text-warm-brown leading-relaxed">
              <h3 className="font-medium text-dark-brown">Besondere Hinweise für Coaching-Klienten</h3>
              <p>
                Als NLP-Trainer, Mentaltrainer und angehender Lebens- und Sozialberater unterliege ich 
                besonderen Vertraulichkeitspflichten. Alle im Rahmen der Beratung und des Coachings 
                geteilten Informationen werden streng vertraulich behandelt.
              </p>
              <p>
                Ihre persönlichen Daten aus Coaching-Sitzungen werden ausschließlich für die 
                Dokumentation des Beratungsprozesses verwendet und nicht an Dritte weitergegeben, 
                es sei denn, Sie stimmen dem ausdrücklich zu oder es besteht eine gesetzliche Verpflichtung.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              6. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-warm-brown leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
              in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
              Datenschutzerklärung.
            </p>
            <p className="text-warm-brown mt-4">
              <strong>Stand:</strong> {new Date().toLocaleDateString('de-AT')}
            </p>
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
