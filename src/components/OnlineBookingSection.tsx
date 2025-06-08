'use client';

import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';

export default function OnlineBookingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-klare-blue/10 to-klare-purple/10" id="booking">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-warm-brown mb-6">
            Online-Mentaltraining in 3 einfachen Schritten
          </h2>
          <p className="text-xl text-warm-brown/80 max-w-2xl mx-auto">
            Starten Sie noch heute Ihr mentales Training - bequem von zuhause aus
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-klare-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              1
            </div>
            <div className="mb-4">
              <CalendarIcon className="w-12 h-12 text-klare-blue mx-auto mb-2" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">Termin wählen</h3>
            <p className="text-warm-brown/70">
              Wählen Sie einen passenden Termin aus meinem Online-Kalender. 
              Auch Abend- und Wochenendtermine verfügbar.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-klare-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              2
            </div>
            <div className="mb-4">
              <VideoIcon className="w-12 h-12 text-klare-purple mx-auto mb-2" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">Video-Link erhalten</h3>
            <p className="text-warm-brown/70">
              Sie erhalten automatisch einen sicheren Video-Link per E-Mail. 
              Kein Download erforderlich - funktioniert im Browser.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-klare-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              3
            </div>
            <div className="mb-4">
              <ClockIcon className="w-12 h-12 text-klare-green mx-auto mb-2" />
            </div>
            <h3 className="text-xl font-semibold text-warm-brown mb-3">Coaching starten</h3>
            <p className="text-warm-brown/70">
              Pünktlich zum Termin loggen wir uns ein und starten Ihre 
              persönliche Beratungssitzung.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-warm-brown mb-6 text-center">
            Jetzt Online-Termin buchen
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-warm-beige/30 p-6 rounded-lg">
              <h4 className="font-semibold text-warm-brown mb-3">Erstberatung</h4>
              <p className="text-2xl font-bold text-klare-orange mb-2">Kostenfrei</p>
              <p className="text-sm text-warm-brown/70 mb-4">30 Minuten Kennenlernen</p>
              <button className="w-full bg-klare-orange text-white py-3 rounded-lg font-medium hover:bg-klare-orange/90 transition-colors">
                Ersttermin buchen
              </button>
            </div>
            
            <div className="bg-warm-beige/30 p-6 rounded-lg">
              <h4 className="font-semibold text-warm-brown mb-3">Einzelsitzung</h4>
              <p className="text-2xl font-bold text-klare-blue mb-2">€80</p>
              <p className="text-sm text-warm-brown/70 mb-4">60 Minuten intensive Beratung</p>
              <button className="w-full bg-klare-blue text-white py-3 rounded-lg font-medium hover:bg-klare-blue/90 transition-colors">
                Termin vereinbaren
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-warm-brown/70 mb-4">
              📞 Oder rufen Sie direkt an: <a href="tel:+4366488123456" className="text-klare-blue hover:underline">+43 664 88 123 456</a>
            </p>
            <p className="text-xs text-warm-brown/60">
              Alle Preise verstehen sich inkl. USt. Absage bis 24h vorher kostenfrei möglich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
