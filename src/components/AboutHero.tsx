import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-20 bg-light-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bild-Bereich */}
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Kreis mit Initialen als Platzhalter */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-klare-r to-deep-brown rounded-full opacity-10"></div>
                  <Image
  src="/images/sascha-kohler-portrait.jpg"
  alt="Sascha Kohler - Mentaltrainer und Coach"
  fill
  className="object-cover rounded-full shadow-xl bg-white"
  priority
/>
                </div>
                {/* Dekorative Elemente */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-klare-r-soft rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soft-beige rounded-full -z-10"></div>
              </div>
            </div>

            {/* Text-Bereich */}
            <div className="order-1 md:order-2">
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-6 text-dark-brown">
                Über mich
              </h1>
              <p className="text-xl text-warm-brown italic mb-8 font-light">
                "Authentisch sein heißt auch, die eigenen Brüche zu zeigen"
              </p>
              
              <div className="space-y-6 text-warm-brown leading-relaxed">
                <h2 className="font-serif text-2xl font-light text-dark-brown">
                  Warum ich Ihnen meine Geschichte erzähle
                </h2>
                <p>
                  Mein Name ist Sascha Kohler, und ich begleite Menschen dabei, 
                  ihre mentale Stärke zu entdecken und zu entwickeln. Doch der 
                  Weg hierher war alles andere als geradlinig.
                </p>
                <p>
                  Nach über 20 Jahren in der Finanzbranche, davon 12 Jahre in 
                  Führungspositionen, stand ich selbst vor der Herausforderung 
                  einer kompletten Neuorientierung. Diese Erfahrung hat mich 
                  geprägt und mir gezeigt, dass wahre Stärke darin liegt, 
                  Veränderungen anzunehmen und daraus zu wachsen.
                </p>
                <div className="pt-4">
                  <a
                    href="#meine-geschichte"
                    className="inline-flex items-center text-klare-r hover:text-klare-r/80 font-medium transition-colors"
                  >
                    Mehr über meinen Weg erfahren
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}