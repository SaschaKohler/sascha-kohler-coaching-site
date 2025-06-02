import Link from 'next/link';

export default function WarmContact() {
  return (
    <section className="py-24 bg-cream text-center" id="kontakt">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-light text-dark-brown mb-6">
          Bereit für Ihr Erstgespräch?
        </h2>
        <p className="text-xl text-warm-brown leading-relaxed mb-8 max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam erkunden, ob und wie ich Ihnen einen Raum 
          für Ihre Selbstentdeckung schaffen kann. Das Erstgespräch ist unverbindlich 
          und gibt uns beiden die Möglichkeit zu spüren, ob die Chemie stimmt.
        </p>
        <Link 
          href="mailto:office@sascha-kohler.at"
          className="inline-block px-8 py-4 bg-deep-brown text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-transparent hover:text-deep-brown border-2 border-deep-brown hover:shadow-lg transform hover:-translate-y-1"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
