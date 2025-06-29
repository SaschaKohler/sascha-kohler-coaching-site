import { CheckIcon } from 'lucide-react';

const advantages = [
  {
    title: "Entspanntere Mentaltraining-Sessions",
    description: "In vertrauter Umgebung können Sie sich besser auf mentale Techniken einlassen.",
    benefit: "Tiefere Entspannung & bessere Konzentration"
  },
  {
    title: "Sofortige Anwendung zuhause", 
    description: "Gelernte Atemtechniken und Mentaltechniken direkt in Ihrem Alltag anwenden.",
    benefit: "Direkter Transfer in den Alltag"
  },
  {
    title: "Flexible Zeiten für Vielbeschäftigte",
    description: "Auch abends und am Wochenende. Perfekt für Führungskräfte und Unternehmer.",
    benefit: "Passt in jeden Terminkalender"
  },
  {
    title: "Keine Anfahrt = mehr Zeit",
    description: "Gesparte Fahrtzeit können Sie für weitere Mentaltechniken nutzen.",
    benefit: "Effizientere Zeitnutzung"
  },
  {
    title: "Diskrete Mentaltrainer-Beratung",
    description: "Niemand erfährt von Ihrem Mentaltraining. Absolute Privatsphäre gewährleistet.",
    benefit: "Ungestörte Entwicklung"
  },
  {
    title: "Bewährte Mentaltrainer-Qualität",
    description: "Gleiche KLARE-Methode und Expertise wie bei Präsenzterminen.",
    benefit: "Keine Qualitätseinbußen"
  }
];

export default function OnlineAdvantagesSection() {
  return (
    <section className="py-20 px-4 bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-warm-brown mb-6">
            Warum Online-Mentaltraining?
          </h2>
          <p className="text-xl text-warm-brown/80 max-w-3xl mx-auto">
            Entdecken Sie die Vorteile digitalen Mentaltrainings - 
            oft sogar effektiver als Präsenztermine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-warm-brown/10 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-klare-r rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-warm-brown text-lg">{advantage.title}</h3>
              </div>
              <p className="text-warm-brown/70 mb-3 leading-relaxed">
                {advantage.description}
              </p>
              <p className="text-klare-r font-medium text-sm">
                ✓ {advantage.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-klare-r/10 to-klare-l/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-warm-brown mb-4">
              Mentaltrainer-Erfahrung bestätigt
            </h3>
            <p className="text-warm-brown/80 leading-relaxed mb-6">
              "In über 20 Jahren Praxis erlebe ich: Online-Mentaltraining ist oft sogar 
              effektiver. Meine Klienten sind entspannter, können die Techniken sofort 
              in ihrer gewohnten Umgebung anwenden und sind offener für neue Denkmuster."
            </p>
            <p className="text-klare-r font-medium italic mb-6">— Sascha Kohler, Mentaltrainer</p>
            <a 
              href="#booking" 
              className="inline-block bg-klare-r text-white px-6 py-3 rounded-lg font-medium hover:bg-klare-r/90 transition-colors"
            >
              Kostenloses 30-Min Gespräch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
