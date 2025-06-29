import WarmNavigation from '@/components/WarmNavigation';
import WarmFooter from '@/components/WarmFooter';

export const metadata = {
  title: 'AGB | Sascha Kohler - NLP-Trainer & Mentaltrainer',
  description: 'Allgemeine Geschäftsbedingungen für Coaching und Beratungsleistungen von Sascha Kohler.',
};

export default function AGBPage() {
  return (
    <>
      <WarmNavigation />
      <div className="min-h-screen bg-warm-white pt-24 pb-16">
      {/* Header */}
      <header className="py-16 bg-hero-gradient relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-klare-a-soft rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-dark-brown mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xl text-warm-brown">
            Coaching, Training und Beratungsleistungen von Sascha Kohler
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-warm-white border border-light-beige rounded-2xl p-8 shadow-sm">
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              1. Geltungsbereich
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von Sascha Kohler 
                als NLP-Trainer, Mentaltrainer und angehendem Lebens- und Sozialberater.
              </p>
              <p>
                Abweichende Bedingungen des Auftraggebers werden nur wirksam, wenn sie ausdrücklich 
                schriftlich anerkannt werden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              2. Leistungsumfang
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-4">
              <div>
                <h3 className="font-medium text-dark-brown mb-2">Coaching und Beratung</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Einzelcoaching mit der KLARE-Methode</li>
                  <li>NLP-Training und Mentaltraining</li>
                  <li>Lebens- und Sozialberatung (ab September 2025)</li>
                  <li>Workshops und Seminare</li>
                  <li>Philosophischer Dialog und Gesprächsführung</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              3. Abgrenzung zu medizinischen und psychotherapeutischen Berufen
            </h2>
            <div className="bg-light-beige p-6 rounded-lg space-y-4 text-warm-brown leading-relaxed">
              <div className="border-l-4 border-klare-r pl-4">
                <h3 className="font-medium text-dark-brown mb-2">Wichtige Klarstellung</h3>
                <p>
                  Meine Tätigkeit als NLP-Trainer, Mentaltrainer und Lebens- und Sozialberater 
                  erfolgt ausschließlich im gewerblichen Bereich und stellt keine Ausübung der 
                  Psychotherapie, Psychologie oder Medizin dar.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-dark-brown mb-2">Was ich NICHT anbiete:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Behandlung von psychischen Erkrankungen</li>
                  <li>Psychotherapeutische Behandlung</li>
                  <li>Medizinische Diagnosen oder Behandlungen</li>
                  <li>Verschreibung von Medikamenten</li>
                  <li>Heilungsversprechen</li>
                  <li>Behandlung von Suchterkrankungen</li>
                  <li>Krisenintervention bei akuten psychischen Notfällen</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-dark-brown mb-2">Was ich anbiete:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Beratung zur Lebensgestaltung und persönlichen Entwicklung</li>
                  <li>Unterstützung bei der Zielfindung und -erreichung</li>
                  <li>Training von Kommunikations- und Verhaltensmustern</li>
                  <li>Ressourcenaktivierung und Potenzialentfaltung</li>
                  <li>Begleitung in Veränderungsprozessen</li>
                  <li>Präventive Maßnahmen zur Stärkung der Lebenszufriedenheit</li>
                </ul>
              </div>

              <div className="bg-warm-white p-4 rounded border border-klare-r/30">
                <p className="font-medium text-dark-brown">
                  Bei Vorliegen einer psychischen Erkrankung, Suchtproblematik oder bei akuten 
                  Krisen empfehle ich ausdrücklich die Konsultation eines Arztes, Psychotherapeuten 
                  oder entsprechender Fachstellen.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              4. Termine und Stornierung
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Termine werden nach Vereinbarung vergeben. Eine Bestätigung erfolgt schriftlich 
                per E-Mail.
              </p>
              <p>
                <strong>Stornierung:</strong> Termine können bis 24 Stunden vor dem vereinbarten 
                Termin kostenfrei storniert werden. Bei kurzfristigerer Absage wird das volle 
                Honorar in Rechnung gestellt, außer in begründeten Notfällen.
              </p>
              <p>
                <strong>Erstgespräch:</strong> Das kostenlose Erstgespräch (bis 30 Minuten) dient 
                dem gegenseitigen Kennenlernen und kann jederzeit ohne Angabe von Gründen beendet werden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              5. Honorar und Zahlung
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Die Honorare werden vor Beginn der Zusammenarbeit transparent kommuniziert 
                und richten sich nach Art und Umfang der Leistung.
              </p>
              <p>
                Die Zahlung erfolgt nach Leistungserbringung binnen 14 Tagen nach Rechnungserhalt.
              </p>
              <p>
                Das Erstgespräch (bis 30 Minuten) ist kostenfrei und dient dem gegenseitigen 
                Kennenlernen ohne Verpflichtung.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              6. Vertraulichkeit und Verschwiegenheit
            </h2>
            <div className="bg-light-beige p-6 rounded-lg text-warm-brown leading-relaxed space-y-3">
              <p>
                Alle im Rahmen der Beratung, des Coachings und Trainings bekanntgewordenen 
                Informationen werden streng vertraulich behandelt.
              </p>
              <p>
                Eine Weitergabe an Dritte erfolgt nur mit ausdrücklicher schriftlicher 
                Einwilligung des Klienten oder bei gesetzlicher Verpflichtung.
              </p>
              <p>
                Diese Vertraulichkeitspflicht besteht auch nach Beendigung der 
                Geschäftsbeziehung fort.
              </p>
              <p className="font-medium text-dark-brown">
                Als angehender Lebens- und Sozialberater unterliege ich den Verschwiegenheitspflichten 
                gemäß § 119 Gewerbeordnung.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              7. Eigenverantwortung und Mitwirkungspflicht
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Der Klient ist für die Umsetzung der erarbeiteten Erkenntnisse und 
                Strategien selbst verantwortlich. Coaching und Beratung zielen auf die 
                Stärkung der Eigenverantwortung und Selbstwirksamkeit ab.
              </p>
              <p>
                Eine aktive Mitarbeit und Offenheit des Klienten ist Voraussetzung für 
                den Erfolg der Beratung.
              </p>
              <p>
                Bei gesundheitlichen Problemen, die möglicherweise die Beratung beeinflussen, 
                ist der Klient verpflichtet, diese zu erwähnen.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              8. Haftung und Haftungsausschluss
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Die Haftung beschränkt sich auf Vorsatz und grobe Fahrlässigkeit. 
                Eine Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit 
                nicht Schäden aus der Verletzung des Lebens, des Körpers oder der 
                Gesundheit betroffen sind.
              </p>
              <p>
                Eine Haftung für den Erfolg der Beratung oder bestimmte Ergebnisse 
                wird ausdrücklich ausgeschlossen. Coaching und Beratung sind Prozesse, 
                die von vielen Faktoren abhängen.
              </p>
              <p>
                Eine Haftung für Schäden, die durch die Umsetzung der Beratungsinhalte 
                entstehen, ist ausgeschlossen, soweit diese nicht auf grober Fahrlässigkeit 
                oder Vorsatz beruhen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              9. Kündigung und Beendigung
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Die Beratungsbeziehung kann von beiden Seiten jederzeit ohne Angabe 
                von Gründen beendet werden.
              </p>
              <p>
                Bei längerfristigen Vereinbarungen ist eine Kündigung mit einer 
                Frist von einer Woche möglich.
              </p>
              <p>
                Bereits vereinbarte und bestätigte Termine sind entsprechend der 
                Stornobedingungen zu behandeln.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              10. Datenschutz
            </h2>
            <div className="text-warm-brown leading-relaxed">
              <p>
                Für den Umgang mit personenbezogenen Daten gelten die Bestimmungen 
                der DSGVO und unsere{' '}
                <a href="/datenschutz" className="text-klare-k hover:text-klare-l underline">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-6 text-dark-brown border-b border-light-beige pb-2">
              11. Schlussbestimmungen
            </h2>
            <div className="text-warm-brown leading-relaxed space-y-3">
              <p>
                Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen.
              </p>
              <p>
                Gerichtsstand ist Perg, Österreich.
              </p>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
                berührt dies nicht die Wirksamkeit der übrigen Bestimmungen.
              </p>
              <p>
                Änderungen dieser AGB bedürfen der Schriftform. Mündliche Nebenabreden 
                bestehen nicht.
              </p>
              <p className="mt-4 font-medium">
                <strong>Stand:</strong> {new Date().toLocaleDateString('de-AT')}
              </p>
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
      <WarmFooter />
    </>
  );
}
