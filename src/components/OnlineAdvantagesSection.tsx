import { CheckIcon } from 'lucide-react';

const advantages = [
  {
    title: "Keine Anfahrt nötig",
    description: "Sparen Sie Zeit und Fahrtkosten. Coaching bequem von zuhause aus.",
    benefit: "Mehr Zeit für sich selbst"
  },
  {
    title: "Flexible Terminzeiten", 
    description: "Auch abends und am Wochenende verfügbar. Passt sich Ihrem Rhythmus an.",
    benefit: "Work-Life-Balance optimiert"
  },
  {
    title: "Vertraute Umgebung",
    description: "In den eigenen vier Wänden fühlen sich viele entspannter und offener.",
    benefit: "Natürlichere Gespräche"
  },
  {
    title: "Gleiche Qualität",
    description: "Professionelle Beratung mit derselben Methodik wie bei Präsenzterminen.",
    benefit: "Bewährte Wirksamkeit"
  },
  {
    title: "Diskrete Teilnahme",
    description: "Niemand sieht Sie in die Praxis gehen. Absolute Anonymität gewährleistet.",
    benefit: "Ungestörte Privatsphäre"
  },
  {
    title: "Sofortige Verfügbarkeit",
    description: "Kurzfristige Termine möglich. Bei akuten Anliegen schnelle Hilfe.",
    benefit: "Zeitnahe Unterstützung"
  }
];

export default function OnlineAdvantagesSection() {
  return (
    <section className="py-20 px-4 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-warm-brown mb-6">
            Warum Online-Beratung?
          </h2>
          <p className="text-xl text-warm-brown/80 max-w-3xl mx-auto">
            Entdecken Sie die Vorteile digitaler Lebensberatung - 
            ohne Kompromisse bei der professionellen Qualität
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-warm-brown/10 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-klare-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-warm-brown text-lg">{advantage.title}</h3>
              </div>
              <p className="text-warm-brown/70 mb-3 leading-relaxed">
                {advantage.description}
              </p>
              <p className="text-klare-blue font-medium text-sm">
                ✓ {advantage.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-klare-blue/10 to-klare-purple/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-warm-brown mb-4">
              Wissenschaftlich bestätigt
            </h3>
            <p className="text-warm-brown/80 leading-relaxed mb-6">
              Studien zeigen: Online-Coaching erreicht bei den meisten Beratungsanliegen 
              die gleiche Wirksamkeit wie Präsenztermine. Der Schlüssel liegt in der 
              professionellen Durchführung und der vertrauensvollen Beziehung zwischen 
              Berater und Klient.
            </p>
            <a 
              href="#booking" 
              className="inline-block bg-klare-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-klare-blue/90 transition-colors"
            >
              Jetzt kostenfrei testen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
