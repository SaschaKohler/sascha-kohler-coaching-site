import React from 'react';
import Image from 'next/image';

export default function PersonalGalleryAlternative() {
  const sections = [
    {
      icon: (
        <svg className="w-16 h-16 text-klare-r mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Persönliche Begleitung',
      description: 'Individuelles Coaching auf Augenhöhe'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-klare-r mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Vortragstätigkeit',
      description: 'Inspirierende Impulse für Teams und Gruppen'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-klare-r mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Authentische Begegnung',
      description: 'Vertrauensvoller Raum für Ihre Entwicklung'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-klare-r mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Ganzheitlicher Ansatz',
      description: 'Körper, Geist und Seele im Einklang'
    }
  ];

  return (
    <section className="py-16 bg-light-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-dark-brown">
            Meine Arbeitsweise
          </h2>
          <p className="text-lg text-warm-brown max-w-2xl mx-auto leading-relaxed">
            Als Ihr Begleiter auf dem Weg zu mehr Klarheit und mentaler Stärke arbeite ich 
            mit bewährten Methoden und individueller Betreuung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {section.icon}
                <h3 className="font-medium text-dark-brown text-center mb-3">
                  {section.title}
                </h3>
                <p className="text-warm-brown text-sm text-center leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-warm-brown mb-6 leading-relaxed max-w-3xl mx-auto">
            Jeder Mensch ist einzigartig - und so ist auch meine Begleitung. 
            Lassen Sie uns gemeinsam herausfinden, wie ich Sie am besten unterstützen kann.
          </p>
          <a
            href="https://calendar.app.google/6Tp1TGMBSR8cm5tX6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-klare-r text-warm-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-klare-r/90"
          >
            Lernen Sie mich persönlich kennen
          </a>
        </div>
      </div>
    </section>
  );
}