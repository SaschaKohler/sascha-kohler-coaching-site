import { VideoIcon, CalendarIcon, ShieldCheckIcon, HeartIcon } from 'lucide-react';

export default function OnlineServiceHero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-warm-beige to-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-warm-brown mb-6">
            Online Mentaltraining
            <span className="block text-3xl md:text-4xl mt-2 text-klare-r">
              Mentale Stärke per Video-Call entwickeln
            </span>
          </h1>
          <p className="text-xl text-warm-brown/80 max-w-3xl mx-auto leading-relaxed">
            Professionelles Mentaltraining bequem von zuhause aus. Als zertifizierter 
            Mentaltrainer schaffe ich auch online den Raum, in dem Sie Ihre mentale 
            Stärke selbst entdecken können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-r rounded-full flex items-center justify-center mx-auto mb-4">
              <VideoIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Sichere Video-Calls</h3>
            <p className="text-warm-brown/70 text-sm">
              Verschlüsselte Verbindung für maximale Vertraulichkeit
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-l rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Flexible Termine</h3>
            <p className="text-warm-brown/70 text-sm">
              Abend- und Wochenendtermine nach Vereinbarung
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-a rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Bewährte Mentaltrainer-Qualität</h3>
            <p className="text-warm-brown/70 text-sm">
              Gleiche Expertise wie vor Ort - oft sogar effektiver
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-e rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-2">Raum für Selbstentdeckung</h3>
            <p className="text-warm-brown/70 text-sm">
              Vertraute Umgebung = entspanntere Selbstreflexion
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#booking" 
            className="inline-block bg-klare-r text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-klare-r/90 transition-colors mr-4"
          >
            Online-Mentaltraining buchen
          </a>
          <a 
            href="mailto:office@sascha-kohler.at" 
            className="inline-block bg-transparent text-klare-r px-6 py-3 rounded-lg font-medium border-2 border-klare-r hover:bg-klare-r hover:text-white transition-colors"
          >
            Fragen per E-Mail
          </a>
          <p className="text-sm text-warm-brown/60 mt-4">
            Erstberatung 30 Minuten kostenfrei • Sofort verfügbare Termine
          </p>
        </div>
      </div>
    </section>
  );
}
