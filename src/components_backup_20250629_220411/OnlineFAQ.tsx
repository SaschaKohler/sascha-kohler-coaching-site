'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const faqs = [
  {
    question: "Ist Online-Beratung genauso effektiv wie persönliche Termine?",
    answer: "Ja, Studien zeigen dass Online-Coaching bei den meisten Themen genauso wirksam ist wie Präsenztermine. Der persönliche Kontakt über Video-Call ermöglicht die gleiche vertrauensvolle Atmosphäre. Viele Klienten empfinden die gewohnte Umgebung zuhause sogar als entspannender."
  },
  {
    question: "Welche Technik brauche ich für Video-Coaching?",
    answer: "Sie benötigen lediglich einen Computer, Tablet oder Smartphone mit Kamera, Mikrofon und stabiler Internetverbindung. Wir nutzen sichere, browserbasierte Video-Tools - keine Software-Installation nötig. Ein ruhiger Raum für ungestörte Gespräche ist empfehlenswert."
  },
  {
    question: "Wie läuft eine Online-Sitzung genau ab?",
    answer: "Nach der Terminbuchung erhalten Sie einen sicheren Video-Link. 5 Minuten vor Termin loggen wir uns ein und starten wie gewohnt mit einem persönlichen Check-in. Die Sitzung läuft strukturiert wie ein Präsenztermin - nur dass Sie bequem zuhause bleiben können."
  },
  {
    question: "Ist die Vertraulichkeit bei Online-Beratung gewährleistet?",
    answer: "Absolut. Wir verwenden verschlüsselte Video-Plattformen nach EU-Datenschutz-Standards. Es gelten dieselben professionellen Schweigepflicht-Regeln wie bei Präsenzterminen. Aufzeichnungen werden grundsätzlich nicht erstellt."
  },
  {
    question: "Kann ich auch kurzfristig Online-Termine buchen?",
    answer: "Ja, Online-Termine sind oft flexibler verfügbar als Präsenztermine. Auch Abend- und Wochenendtermine sind nach Vereinbarung möglich. Bei akuten Anliegen versuche ich, binnen 24-48h einen Termin anzubieten."
  },
  {
    question: "Was kostet Online-Coaching im Vergleich zu Präsenzterminen?",
    answer: "Online-Coaching hat dieselben Preise wie Präsenzberatung, da der professionelle Aufwand identisch ist. Die Erstberatung (30 Min) ist kostenfrei, reguläre Sitzungen (60 Min) nach den üblichen Sätzen für Lebens- und Sozialberatung."
  }
];

export default function OnlineFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-warm-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-warm-brown mb-16">
          Häufige Fragen zur Online-Beratung
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-warm-brown/20 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-warm-beige/30 hover:bg-warm-beige/50 transition-colors flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-warm-brown pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-warm-brown flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-warm-brown flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-warm-brown/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-warm-brown/70 mb-6">
            Weitere Fragen? Gerne besprechen wir diese in einem unverbindlichen Vorgespräch.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-klare-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-klare-blue/90 transition-colors"
          >
            Kostenloses Erstgespräch vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
