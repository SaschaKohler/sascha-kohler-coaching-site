import { MonitorIcon, WifiIcon, MicIcon, ShieldIcon } from 'lucide-react';

export default function TechnicalRequirements() {
  return (
    <section className="py-20 px-4 bg-warm-beige/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-warm-brown mb-16">
          Technische Voraussetzungen
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-klare-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <MonitorIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-3">Computer/Tablet/Handy</h3>
            <p className="text-warm-brown/70 text-sm">
              Jedes moderne Gerät mit Kamera funktioniert. 
              Empfehlung: Laptop oder Tablet für optimale Sicht.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-klare-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <WifiIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-3">Stabile Internetverbindung</h3>
            <p className="text-warm-brown/70 text-sm">
              Mindestens 2 Mbit/s für störungsfreie Video-Calls. 
              WLAN oder mobiles Internet.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-klare-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <MicIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-3">Kamera & Mikrofon</h3>
            <p className="text-warm-brown/70 text-sm">
              Bereits in jedem Smartphone/Laptop integriert. 
              Kopfhörer verbessern die Audioqualität.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-klare-green rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-warm-brown mb-3">Ruhige Umgebung</h3>
            <p className="text-warm-brown/70 text-sm">
              Ungestörter Raum für vertrauliche Gespräche. 
              Ruhiger Hintergrund bevorzugt.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-warm-brown mb-6 text-center">
            Keine Software-Installation nötig!
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-warm-brown mb-4">So einfach geht's:</h4>
              <ul className="space-y-3 text-warm-brown/80">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-klare-blue rounded-full text-white text-sm flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Link in E-Mail anklicken</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-klare-purple rounded-full text-white text-sm flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Browser-Berechtigung für Kamera/Mikro erteilen</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-klare-green rounded-full text-white text-sm flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Sofort gesprächsbereit - fertig!</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-warm-beige/30 p-6 rounded-lg">
                <p className="text-warm-brown font-medium mb-2">🔒 Sicher & verschlüsselt</p>
                <p className="text-sm text-warm-brown/70">
                  DSGVO-konforme Video-Plattform mit End-zu-End-Verschlüsselung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
