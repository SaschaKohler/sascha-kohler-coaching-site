import Link from 'next/link';

export default function WarmContact() {
  return (
    <section className="py-24 bg-cream text-center" id="kontakt">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-light text-dark-brown mb-6">
          Bereit für Ihr Mentaltraining-Gespräch?
        </h2>
        <p className="text-xl text-warm-brown leading-relaxed mb-8 max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam erkunden, wie Mentaltraining Ihnen helfen kann. 
          Im kostenlosen Erstgespräch schaffen wir Raum für Ihre Fragen und Sie 
          spüren, ob mein Ansatz zu Ihnen passt. Keine Verpflichtung, nur Klarheit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="mailto:office@sascha-kohler.at"
            className="inline-block px-8 py-4 bg-deep-brown text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-transparent hover:text-deep-brown border-2 border-deep-brown hover:shadow-lg transform hover:-translate-y-1"
          >
            Kostenloses 30-Min Klarheitsgespräch
          </Link>
          <Link 
            href="/online-beratung"
            className="inline-block px-6 py-3 bg-klare-r text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-klare-r/90 border-2 border-klare-r"
          >
            Sofort Online-Termin ⭐
          </Link>
        </div>
        
        {/* Vertrauenssignale */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-warm-brown">
          <span className="flex items-center">✅ 20+ Jahre Praxiserfahrung</span>
          <span className="flex items-center">✅ Über 1000 erfolgreiche Gespräche</span>
          <span className="flex items-center">✅ Mentaltrainer-Zertifizierung</span>
        </div>
      </div>
    </section>
  );
}
