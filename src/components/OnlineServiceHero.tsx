import { VideoIcon, CalendarIcon, ShieldCheckIcon, HeartIcon } from 'lucide-react';

export default function OnlineServiceHero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-warm-beige to-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-warm-brown mb-6">
            Online Lebensberatung
            <span className="block text-3xl md:text-4xl mt-2 text-klare-orange">
              Professionell. Flexibel. Von zuhause aus.
            </span>
          </h1>
          <p className="text-xl text-warm-brown/80 max-w-3xl mx-auto leading-relaxed">
            Erleben Sie professionelle Lebensberatung bequem von zuhause aus. 
            Sichere Video-Calls mit diplomiertem Lebens- und Sozialberater für 
            Ihre persönliche Entwicklung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <VideoIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Sichere Video-Calls</h3>
            <p className="text-warm-brown/70 text-sm">
              Verschlüsselte Verbindung für maximale Vertraulichkeit
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Flexible Termine</h3>
            <p className="text-warm-brown/70 text-sm">
              Abend- und Wochenendtermine nach Vereinbarung
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Vollste Diskretion</h3>
            <p className="text-warm-brown/70 text-sm">
              Professionelle Schweigepflicht wie bei Präsenzterminen
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-green rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Persönliche Betreuung</h3>
            <p className="text-warm-brown/70 text-sm">
              Individuelle 1:1 Beratung trotz räumlicher Distanz
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#booking" 
            className="inline-block bg-klare-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-klare-orange/90 transition-colors"
          >
            Jetzt Online-Termin buchen
          </a>
          <p className="text-sm text-warm-brown/60 mt-4">
            Erstberatung 30 Minuten kostenfrei
          </p>
        </div>
      </div>
    </section>
  );
}
