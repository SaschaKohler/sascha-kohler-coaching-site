import Link from 'next/link';
import type { Metadata } from 'next';
import WarmNavigation from '@/components/WarmNavigation';
import WarmFooter from '@/components/WarmFooter';

export const metadata: Metadata = {
  title: 'Ja zum Leben | Ganzheitliches Gesundheitsprojekt von Gerda Ahorner & Sascha Kohler',
  description:
    'Erhalte einen Überblick über das gemeinsame Projekt "Ja zum Leben" von Gerda Ahorner und Sascha Kohler. Mentale Klarheit, ganzheitliche Gesundheit und sanfte Transformation mit Workshops, Werkstatt-Terminen und einem inspirierenden Magazin.',
  alternates: {
    canonical: 'https://sascha-kohler.at/ja-zum-leben',
  },
  openGraph: {
    title: 'Ja zum Leben | Ganzheitliches Gesundheitsprojekt von Gerda Ahorner & Sascha Kohler',
    description:
      'Erkunde die Kooperation "Ja zum Leben" von Gerda Ahorner und Sascha Kohler. Mentale Klarheit, ganzheitliche Gesundheit und sanft wirksame Begleitung mit Workshops, Werkstatt-Terminen und Magazin.',
    type: 'website',
    url: 'https://sascha-kohler.at/ja-zum-leben',
  },
};

const featureCards = [
  {
    title: 'Mentale Klarheit & Energie',
    description:
      'Im Fokus stehen mental stärkende Routinen, achtsame Selbstreflexion und individuelle Begleitung hin zu mehr Lebendigkeit.',
  },
  {
    title: 'Ganzheitliche Gesundheitsimpulse',
    description:
      'Gerda Ahorner bringt ihr pharmazeutisches Wissen, Bachblüten-Expertise und energetische Methoden sanft und wirksam ein.',
  },
  {
    title: 'Werkstatt & Termine',
    description:
      'Regelmäßige Veranstaltungen, Workshops und Meditationen laden dazu ein, die Zustimmung zum eigenen Leben spürbar werden zu lassen.',
  },
];

const magazineHighlights = [
  {
    title: 'Inspiration aus Psychologie & Achtsamkeit',
    description:
      'Im Magazin werden fundierte Artikel, praktische Übungen und persönliche Einblicke veröffentlicht – ideal, um neue Perspektiven zu gewinnen.',
  },
  {
    title: 'Resilienz im Alltag stärken',
    description:
      'Leserinnen und Leser finden Impulse, die sie unmittelbar im Alltag nutzen können, um bewusster, gelassener und handlungsfähiger zu werden.',
  },
];

export default function JaZumLebenPage() {
  return (
    <>
      <WarmNavigation />
      <main className="bg-warm-white pt-28 pb-20">
        <section className="container mx-auto px-6 max-w-4xl text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-klare-r">Partnerschaftsprojekt</p>
          <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold text-deep-brown">
            Ja zum Leben
          </h1>
          <p className="mt-4 text-lg md:text-xl text-warm-brown/80">
            Mentale Klarheit. Ganzheitliche Gesundheit. Einfach. Sanft. Wirksam. – Die gemeinsame
            Initiative von Gerda Ahorner und Sascha Kohler verknüpft Mentaltraining, energetische
            Begleitung und Alltagstauglichkeit zu einem liebevollen Ja zum Leben.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://ja-zum-leben.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-klare-k px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-klare-k/90"
            >
              Projekt-Website besuchen
            </Link>
            <Link
              href="https://magazin.ja-zum-leben.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-klare-k px-8 py-3 text-sm font-semibold text-klare-k transition-transform hover:-translate-y-0.5 hover:bg-klare-k/10"
            >
              Magazin entdecken
            </Link>
          </div>
        </section>

        <section className="mt-20 bg-cream/60 py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold text-deep-brown">Gemeinsam für Gesundheit</h2>
                <p className="mt-4 text-warm-brown/80 leading-relaxed">
                  Gerda Ahorner und Sascha Kohler vereinen ihre Kompetenzen, um Menschen sanft in
                  Veränderungsprozessen zu begleiten. Während Sascha mentale Klarheit, Struktur und
                  die KLARE-Methode einbringt, unterstützt Gerda mit ihrer langjährigen pharmazeutischen
                  Expertise, Bachblütenwissen und energetischen Arbeit. Das Projekt lädt dazu ein,
                  die Zustimmung zum Leben zu kultivieren – im eigenen Tempo und mit viel Achtsamkeit.
                </p>
              </div>
              <div className="rounded-3xl border border-light-beige bg-white/60 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-deep-brown">Schwerpunkte</h3>
                <ul className="mt-4 space-y-3 text-sm text-warm-brown/80">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-klare-k" />
                    Mentale Transformation mit der KLARE-Methode
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-klare-k" />
                    Sanfte gesundheitsfördernde Impulse von Bachblüten bis Ritualarbeit
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-klare-k" />
                    Werkstatt-Termine, Meditationen und Raum für Austausch
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-5xl mt-20">
          <h2 className="text-3xl font-semibold text-deep-brown text-center">Was dich erwartet</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-light-beige bg-white/70 p-8 shadow-sm transition-transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-deep-brown">{card.title}</h3>
                <p className="mt-3 text-sm text-warm-brown/80 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-white/80 py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="md:flex md:items-start md:justify-between md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-deep-brown">Ja zum Leben Magazin</h2>
                <p className="mt-4 text-warm-brown/80 leading-relaxed">
                  Das begleitende Online-Magazin erweitert das Projekt um kontinuierliche Inspiration.
                  Artikel, Interviews und Übungen greifen aktuelle Themen rund um Resilienz,
                  Lebensfreude und Selbstwirksamkeit auf und bieten praktische Umsetzungsideen.
                </p>
                <Link
                  href="https://magazin.ja-zum-leben.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-klare-k hover:text-klare-k/80"
                >
                  Magazin jetzt lesen
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-10 md:mt-0 md:w-1/2">
                <div className="space-y-6 rounded-3xl border border-light-beige bg-cream/70 p-8">
                  {magazineHighlights.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-lg font-semibold text-deep-brown">{item.title}</h3>
                      <p className="mt-2 text-sm text-warm-brown/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mt-20 text-center">
          <h2 className="text-3xl font-semibold text-deep-brown">Bereit für dein Ja?</h2>
          <p className="mt-4 text-warm-brown/80">
            Wenn dich das Projekt anspricht, kannst du dich über die offizielle Website zu den
            nächsten Werkstatt-Terminen anmelden oder direkt mit uns in Kontakt treten.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://ja-zum-leben.tucalendi.com/ja-zum-leben-werkstatt/just-talk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-klare-r px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-klare-r/90"
            >
              Erstgespräch buchen
            </Link>
            <Link
              href="/kontakt"
              className="inline-block rounded-full border border-klare-r px-8 py-3 text-sm font-semibold text-klare-r transition-transform hover:-translate-y-0.5 hover:bg-klare-r/10"
            >
              Kontakt auf sascha-kohler.at
            </Link>
          </div>
        </section>
      </main>
      <WarmFooter />
    </>
  );
}
