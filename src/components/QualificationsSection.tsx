export default function QualificationsSection() {
  return (
    <section className="py-24 bg-warm-white" id="qualifikationen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Qualifications */}
          <div className="bg-light-beige p-8 rounded-2xl">
            <h2 className="font-serif text-3xl font-light text-dark-brown mb-6">
              Mentaltrainer-Expertise & Qualifikationen
            </h2>

            {/* Current Core Qualifications */}
            <div className="mb-8">
              <h3 className="font-medium text-dark-brown mb-4 text-klare-r">
                🎯 Kernkompetenzen Mentaltraining
              </h3>
              <ul className="space-y-3">
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  <span className="font-semibold">
                    Mentaltrainer (zertifiziert)
                  </span>{" "}
                  - Visualisierung, Affirmationen, Fokustechniken
                </li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  <span className="font-semibold">NLP-Master & Trainer</span> -
                  Schnelle Veränderungsarbeit, Anker-Techniken
                </li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  <span className="font-semibold">
                    20+ Jahre Menschenerfahrung
                  </span>{" "}
                  - Über 1000 erfolgreiche Gespräche
                </li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  <span className="font-semibold">
                    Erfinder der KLARE-Methode
                  </span>{" "}
                  - Strukturiertes 5-Schritte-System
                </li>
                <li className="text-warm-brown">
                  <span className="font-semibold">Provokative Methode</span> -
                  Schnelle Durchbrüche durch gezielte Intervention
                </li>
              </ul>
            </div>

            {/* Methodenvielfalt */}
            <div className="mb-8">
              <h3 className="font-medium text-dark-brown mb-4">
                🛠️ Bewährte Mentaltechniken
              </h3>
              <ul className="space-y-3">
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  Flow-Training & Peak Performance
                </li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  Atemtechniken & Entspannungsverfahren
                </li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  Monodramatisches Spiel & Rollenarbeit
                </li>
                <li className="text-warm-brown border-b border-soft-beige pb-2">
                  Systemische & tiefenpsychologische Ansätze
                </li>
                <li className="text-warm-brown">
                  Philosophischer Dialog ohne Zeitdruck
                </li>
              </ul>
            </div>

            {/* Upcoming Qualifications - kleiner */}
            <div className="mb-6 p-4 bg-warm-white/50 rounded-lg">
              <h4 className="text-sm font-medium text-dark-brown mb-2">
                📋 Seit September 2025
              </h4>
              <p className="text-sm text-warm-brown">
                Diplomierter Lebens- und Sozialberater
              </p>
            </div>

            <blockquote className="italic text-warm-brown text-lg leading-relaxed border-l-4 border-klare-r pl-4">
              "Als Mentaltrainer schaffe ich den Raum, in dem Sie selbst
              erkennen, was für Ihre mentale Stärke wichtig ist. Ihre Antworten
              liegen bereits in Ihnen - ich helfe Ihnen nur dabei, sie zu
              entdecken."
            </blockquote>
          </div>

          {/* Right Column - Target Groups */}
          <div>
            <h3 className="font-serif text-3xl font-light text-dark-brown mb-8">
              Mentaltraining für...
            </h3>

            {/* Führungskräfte */}
            <div className="bg-warm-white p-6 rounded-xl border border-light-beige mb-6">
              <h4 className="text-dark-brown mb-4 font-medium flex items-center">
                <span className="text-klare-r mr-2">🎯</span> Führungskräfte &
                Unternehmer
              </h4>
              <ul className="space-y-3 text-warm-brown">
                <li className="flex items-start">
                  <span className="text-klare-r mr-3">✓</span>
                  Hohe Verantwortung → Mentale Entlastungstechniken
                </li>
                <li className="flex items-start">
                  <span className="text-klare-r mr-3">✓</span>
                  Zeitdruck → Effiziente 60-Min Online-Sessions
                </li>
                <li className="flex items-start">
                  <span className="text-klare-r mr-3">✓</span>
                  Entscheidungsstress → Klarheitstechniken für bessere
                  Entscheidungen
                </li>
              </ul>
            </div>

            {/* Menschen in Krisen */}
            <div className="bg-warm-white p-6 rounded-xl border border-light-beige mb-6">
              <h4 className="text-dark-brown mb-4 font-medium flex items-center">
                <span className="text-klare-l mr-2">💡</span> Menschen in
                Lebenskrisen
              </h4>
              <ul className="space-y-3 text-warm-brown">
                <li className="flex items-start">
                  <span className="text-klare-l mr-3">✓</span>
                  Orientierungslosigkeit → KLARE 5-Schritte-Methode
                </li>
                <li className="flex items-start">
                  <span className="text-klare-l mr-3">✓</span>
                  Überforderung → Mentale Stabilitätstechniken
                </li>
                <li className="flex items-start">
                  <span className="text-klare-l mr-3">✓</span>
                  Selbstzweifel → Ressourcenaktivierung & Stärkung
                </li>
              </ul>
            </div>

            <div className="bg-light-beige p-6 rounded-xl">
              <h4 className="text-dark-brown mb-4 font-medium flex items-center">
                <span className="text-klare-e mr-2">🚀</span> Beruflich
                Neuorientierende
              </h4>
              <ul className="space-y-3 text-warm-brown">
                <li>• Mentale Vorbereitung auf Veränderung</li>
                <li>• Ängste vor dem Unbekannten überwinden</li>
                <li>• Selbstvertrauen für neue Wege aufbauen</li>
                <li>• Praxiserprobte Entscheidungshilfen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
