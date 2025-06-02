import Link from "next/link";

export default function ApproachSection() {
  const klareSteps = [
    {
      letter: "K",
      title: "Klarheit",
      subtitle: "Was ist wirklich wichtig?",
      description: "Erkenne, was wirklich wichtig ist",
      process:
        "Gemeinsam schaffen wir Raum für die grundlegenden Fragen: Was bewegt Sie wirklich? Welche Werte leiten Sie? Durch strukturierte Reflexion finden Sie zu Ihrer inneren Klarheit über Ihre wahren Bedürfnisse und Ziele.",
      color: "bg-klare-k",
      borderColor: "border-klare-k",
      textColor: "text-klare-k",
    },
    {
      letter: "L",
      title: "Lebendigkeit",
      subtitle: "Ihre natürliche Energie",
      description: "Spüre deine natürliche Energie",
      process:
        "Entdecken Sie Ihre natürlichen Energiequellen wieder. Wo fühlen Sie sich lebendig? Was bringt Sie zum Strahlen? Wir erkunden gemeinsam, was Ihnen Kraft gibt und wie Sie diese Lebendigkeit in Ihren Alltag integrieren können.",
      color: "bg-klare-l",
      borderColor: "border-klare-l",
      textColor: "text-klare-l",
    },
    {
      letter: "A",
      title: "Ausrichtung",
      subtitle: "Ihr authentischer Weg",
      description: "Finde deinen authentischen Weg",
      process:
        "Basierend auf Ihrer Klarheit und Lebendigkeit entwickeln Sie eine authentische Ausrichtung. Wie möchten Sie leben? Welcher Weg entspricht wirklich Ihrem Wesen? Hier entsteht Ihr persönlicher Kompass für Entscheidungen.",
      color: "bg-klare-a",
      borderColor: "border-klare-a",
      textColor: "text-klare-a",
    },
    {
      letter: "R",
      title: "Realisierung",
      subtitle: "Erkenntnisse umsetzen",
      description: "Setze deine Erkenntnisse um",
      process:
        "Jetzt geht es ans Umsetzen. Welche konkreten Schritte führen Sie zu Ihrem authentischen Leben? Wir entwickeln gemeinsam realistische Strategien und Pläne, die zu Ihnen und Ihrer Lebenssituation passen.",
      color: "bg-klare-r",
      borderColor: "border-klare-r",
      textColor: "text-klare-r",
    },
    {
      letter: "E",
      title: "Entfaltung",
      subtitle: "Volles Potenzial leben",
      description: "Lebe dein volles Potenzial",
      process:
        "Der kontinuierliche Prozess der Selbstentfaltung beginnt. Wie können Sie dauerhaft in Ihrer Authentizität bleiben? Wir schaffen Strukturen für nachhaltiges Wachstum und die Integration neuer Erkenntnisse in Ihr Leben.",
      color: "bg-klare-e",
      borderColor: "border-klare-e",
      textColor: "text-klare-e",
    },
  ];

  return (
    <section className="py-24 bg-cream" id="methode">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-warm-brown text-lg mb-4">Mein Ansatz</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-dark-brown mb-8">
            Raum für Selbstentdeckung schaffen
          </h2>
          <p className="text-xl text-warm-brown leading-relaxed">
            Als NLP-Trainer und Mentaltrainer verstehe ich mich nicht als
            Ratgeber, sondern als Raumschaffer. Durch philosophischen Dialog und
            bewährte Methoden schaffe ich einen geschützten Denkraum, in dem Sie
            Ihre eigenen Fähigkeiten wieder bewusst wahrnehmen und integrieren
            können.
          </p>
        </div>

        {/* KLARE Steps Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {klareSteps.map((step, index) => (
            <div
              key={step.letter}
              className="bg-warm-white p-6 rounded-xl border border-light-beige hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-white font-serif text-xl font-bold">
                  {step.letter}
                </span>
              </div>
              <h3 className="font-serif text-lg text-dark-brown mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-warm-brown leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed KLARE Process */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl font-light text-dark-brown text-center mb-12">
            So funktioniert die KLARE-Methode
          </h3>

          <div className="space-y-12">
            {klareSteps.map((step, index) => (
              <div
                key={step.letter}
                className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Step Icon & Title */}
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div
                    className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4`}
                  >
                    <span className="text-white font-serif text-2xl font-bold">
                      {step.letter}
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl text-dark-brown mb-2">
                    {step.title}
                  </h4>
                  <p className={`font-medium ${step.textColor} text-lg`}>
                    {step.subtitle}
                  </p>
                </div>

                {/* Process Description */}
                <div className="lg:w-2/3">
                  <div
                    className={`bg-warm-white p-6 rounded-xl border-l-4 ${step.borderColor} shadow-sm`}
                  >
                    <p className="text-warm-brown leading-relaxed text-lg">
                      {step.process}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kongruenz Erklärung */}
          <div className="mt-20 text-center">
            <h3 className="font-serif text-3xl font-light text-dark-brown mb-8">
              Das Ziel: Kongruenz
            </h3>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-klare-k-soft via-klare-l-soft to-klare-e-soft p-8 rounded-2xl border border-light-beige">
              <div className="bg-warm-white/90 p-6 rounded-xl">
                <p className="text-xl text-warm-brown leading-relaxed mb-6">
                  Kongruenz bedeutet die bewusste Neuausrichtung Ihrer oft
                  unbewussten Persönlichkeitsanteile in eine lebensbejahende
                  Richtung. Wenn alle Teile Ihrer Persönlichkeit in dieselbe
                  Richtung wirken, entwickeln Sie das Momentum, um Ihre Ziele
                  tatsächlich zu verwirklichen.
                </p>
                <div className="border-l-4 border-klare-k pl-6">
                  <p className="text-lg text-dark-brown font-medium italic">
                    "Wirklichkeit ist das, was wirkt."
                  </p>
                  <p className="text-warm-brown mt-3">
                    Wenn Sie kongruent leben, wirken Sie authentisch und
                    kraftvoll. Ihre Gedanken, Gefühle und Handlungen arbeiten
                    zusammen, statt gegeneinander. Das ist der Moment, in dem
                    sich Träume in Wirklichkeit verwandeln.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-warm-white rounded-2xl border border-light-beige">
            <h3 className="font-serif text-2xl text-dark-brown mb-4">
              Bereit für Ihren Weg zur Kongruenz?
            </h3>
            <p className="text-warm-brown mb-6 max-w-2xl mx-auto">
              Die KLARE-Methode ist kein starres System, sondern ein flexibler
              Rahmen, der sich an Ihre individuellen Bedürfnisse anpasst. Jeder
              Mensch ist einzigartig, und so ist auch sein Weg zur
              Selbstentdeckung.
            </p>
            <Link
              href="#kontakt"
              className="inline-block px-8 py-4 bg-deep-brown text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-transparent hover:text-deep-brown border-2 border-deep-brown hover:shadow-lg transform hover:-translate-y-1"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
