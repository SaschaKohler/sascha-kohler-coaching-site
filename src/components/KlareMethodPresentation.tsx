import React from "react";

export default function KlareMethodPresentation() {
  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6 text-dark-brown">
            Die KLARE-Methode live erleben
          </h2>
          <p className="text-lg text-warm-brown max-w-3xl mx-auto leading-relaxed">
            Statt eines Videos lade ich Sie ein, die KLARE-Methode in einem
            persönlichen Gespräch kennenzulernen. So erhalten Sie eine
            maßgeschneiderte Einführung.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative bg-dark-brown rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src="/images/Kongruenz 23.mp4"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover"
                  controls
                  autoPlay
                >
                  <source src="/images/Kongruenz 23.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">
                      Kongruenz - die zentrale Frage der KLARE-Methode
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-light text-dark-brown">
                Warum ein persönliches Gespräch besser ist als jedes Video
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-klare-k rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    K
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown">
                      Klarheit über Ihre Situation
                    </h4>
                    <p className="text-warm-brown text-sm">
                      Wir besprechen konkret Ihre Herausforderungen
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-klare-l rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    L
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown">
                      Lebendiger Austausch
                    </h4>
                    <p className="text-warm-brown text-sm">
                      Direkte Fragen und Antworten, kein einseitiges Video
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-klare-a rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-brown">
                      Ausrichtung auf Sie
                    </h4>
                    <p className="text-warm-brown text-sm">
                      Maßgeschneiderte Erklärung für Ihre Bedürfnisse
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-klare-r/10 p-6 rounded-lg">
                <h4 className="font-semibold text-dark-brown mb-3">
                  30 Minuten, die Ihr Leben verändern können
                </h4>
                <p className="text-warm-brown mb-4 text-sm">
                  ✅ Kostenlos und unverbindlich
                  <br />
                  ✅ Online oder vor Ort möglich
                  <br />✅ Sofort umsetzbare Impulse
                </p>
                <a
                  href="https://calendar.app.google/6Tp1TGMBSR8cm5tX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-klare-r text-warm-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-klare-r/90 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Jetzt Termin vereinbaren
                </a>
              </div>

              <p className="text-xs text-warm-brown/70 italic">
                Echte Begegnung wirkt stärker als jedes Video - Sascha Kohler
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
