import Image from "next/image";
import Link from "next/link";

export default function WarmHero() {
  return (
    <section
      className="min-h-screen flex items-center pt-20 bg-hero-gradient relative overflow-hidden"
      id="home"
    >
      {/* Subtle background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-klare-k-soft rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-klare-l-soft rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Hero Text - Takes more space */}
          <div className="lg:col-span-2 animate-fade-in">
            <p className="text-warm-brown text-lg mb-4 font-normal">
              <span className="font-semibold text-klare-r">Mentaltrainer</span> • NLP-Master • 20+ Jahre Menschenerfahrung
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-dark-brown mb-6 leading-tight">
              Entdecken Sie Ihre mentale Stärke wieder
            </h1>
            <p className="text-xl text-warm-brown leading-relaxed mb-8 max-w-3xl">
              Als Mentaltrainer schaffe ich den Raum, in dem Sie selbst erkennen können, 
              was Sie wirklich brauchen. Durch bewährte Mentaltechniken und die{" "}
              <span className="bg-gradient-klare bg-clip-text text-transparent font-medium">
                KLARE-Methode
              </span>{" "}
              entdecken Sie in sich die Antworten, die Sie bereits haben. 
              Ihre mentale Stärke wartet darauf, von Ihnen aktiviert zu werden.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="#kontakt"
                className="inline-block px-8 py-4 bg-deep-brown text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-transparent hover:text-deep-brown border-2 border-deep-brown hover:shadow-lg transform hover:-translate-y-1"
              >
                Kostenloses 30-Min Klarheitsgespräch
              </Link>
              <Link
                href="/online-beratung"
                className="inline-block px-6 py-3 bg-klare-r text-warm-white rounded-lg font-medium transition-all duration-300 hover:bg-klare-r/90 border-2 border-klare-r"
              >
                Online-Termin ⭐
              </Link>
            </div>

            {/* Mentaltraining Highlights */}
            <div className="mt-6 p-4 bg-warm-white/70 backdrop-blur-sm rounded-lg border border-klare-r/20">
              <p className="text-sm text-warm-brown font-medium mb-2">✅ Sofortige Mentaltechniken für den Alltag</p>
              <p className="text-sm text-warm-brown">✅ Bewährte Methoden aus 20+ Jahren Praxis</p>
            </div>
          </div>

          {/* Hero Image - Smaller and more subtle */}
          <div className="relative animate-slide-up lg:col-span-1">
            <div className="relative">
              <Image
                src="/images/sascha-walk.jpg"
                alt="Sascha Kohler - Raum für Selbstentdeckung schaffen"
                width={400}
                height={500}
                className="rounded-xl shadow-lg opacity-90"
                priority
              />

              {/* Floating KLARE dots - smaller and more subtle */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-klare-k rounded-full animate-float opacity-50"></div>
              <div
                className="absolute top-1/4 -right-3 w-2 h-2 bg-klare-l rounded-full animate-float opacity-40"
                style={{ animationDelay: "1.2s" }}
              ></div>
              <div
                className="absolute bottom-1/3 -left-3 w-2 h-2 bg-klare-a rounded-full animate-float opacity-40"
                style={{ animationDelay: "2.4s" }}
              ></div>
              <div
                className="absolute bottom-8 -right-2 w-3 h-3 bg-klare-r rounded-full animate-float opacity-50"
                style={{ animationDelay: "3.6s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-4 w-2 h-2 bg-klare-e rounded-full animate-float opacity-40"
                style={{ animationDelay: "4.8s" }}
              ></div>
            </div>

            {/* Space visualization circle - smaller */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-klare-r/20 rounded-full bg-warm-white/70 backdrop-blur-sm flex items-center justify-center animate-pulse-gentle">
              <span className="text-xs text-deep-brown text-center font-serif leading-tight">
                Mental
                <br />
                Training
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
