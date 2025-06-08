import Link from 'next/link';
import { VideoIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';

export default function OnlineServiceTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-klare-r-soft to-warm-white" id="online-service">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-light text-dark-brown mb-4">
              Mentaltraining bequem von zuhause
            </h2>
            <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed">
              Professionelle Online-Beratung via Video-Call. Gleiche Qualität, 
              maximale Flexibilität. Perfekt für Menschen mit wenig Zeit oder weiter Anreise.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-warm-white/80 backdrop-blur-sm rounded-xl">
              <div className="w-16 h-16 bg-klare-r rounded-full flex items-center justify-center mx-auto mb-4">
                <VideoIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-dark-brown mb-3">Sichere Video-Calls</h3>
              <p className="text-warm-brown text-sm leading-relaxed">
                Verschlüsselte Verbindung für maximale Vertraulichkeit. 
                Gleiche Schweigepflicht wie bei Präsenzterminen.
              </p>
            </div>

            <div className="text-center p-6 bg-warm-white/80 backdrop-blur-sm rounded-xl">
              <div className="w-16 h-16 bg-klare-l rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-dark-brown mb-3">Flexible Termine</h3>
              <p className="text-warm-brown text-sm leading-relaxed">
                Abend- und Wochenendtermine möglich. 
                Keine Anfahrt = mehr Zeit für das, was wichtig ist.
              </p>
            </div>

            <div className="text-center p-6 bg-warm-white/80 backdrop-blur-sm rounded-xl">
              <div className="w-16 h-16 bg-klare-e rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-dark-brown mb-3">Bewährte Qualität</h3>
              <p className="text-warm-brown text-sm leading-relaxed">
                Gleiche Mentaltrainer-Expertise wie vor Ort. 
                Viele Klienten bevorzugen Online-Sessions.
              </p>
            </div>
          </div>

          {/* Success Quote */}
          <div className="bg-warm-white p-8 rounded-2xl border border-klare-r/20 mb-8">
            <blockquote className="text-center">
              <p className="text-lg text-warm-brown italic mb-4">
                "Online-Mentaltraining ist oft sogar effektiver - Sie sind in Ihrer 
                gewohnten Umgebung entspannter und können die gelernten Techniken 
                sofort in Ihrem Alltag anwenden."
              </p>
              <cite className="text-klare-r font-medium">— Sascha Kohler, Mentaltrainer</cite>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/online-beratung"
              className="inline-block px-8 py-4 bg-klare-r text-warm-white rounded-lg font-medium text-lg transition-all duration-300 hover:bg-klare-r/90 hover:shadow-lg transform hover:-translate-y-1 mr-4"
            >
              Online-Termin buchen
            </Link>
            <Link
              href="mailto:office@sascha-kohler.at"
              className="inline-block px-6 py-3 bg-transparent text-klare-r rounded-lg font-medium border-2 border-klare-r transition-all duration-300 hover:bg-klare-r hover:text-white"
            >
              Fragen per E-Mail
            </Link>
            
            <p className="text-sm text-warm-brown mt-4">
              ✅ Erstberatung 30 Minuten kostenfrei • ✅ Sofort verfügbare Termine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
