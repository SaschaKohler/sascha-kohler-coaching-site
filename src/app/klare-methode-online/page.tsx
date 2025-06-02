import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KLARE Methode Online lernen | Digitales Coaching Programm',
  description: 'Die KLARE-Methode online erleben: 5-Schritte System für Persönlichkeitsentwicklung. Strukturiertes Online-Coaching mit Videos, Übungen und persönlicher Betreuung.',
  keywords: [
    'KLARE Methode Online',
    'Digitales Coaching Programm',
    'Online Persönlichkeitsentwicklung',
    'KLARE Methode lernen',
    'Strukturiertes Online Coaching',
    'Digitale Selbstfindung',
    'Online Coaching Kurs',
    'KLARE Methode Training'
  ],
  alternates: {
    canonical: 'https://sascha-kohler.at/klare-methode-online',
  },
};

export default function KlareMethodeOnlinePage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-warm-brown">
          KLARE-Methode Online erleben
        </h1>
        <p className="text-xl text-center text-warm-brown/80 mb-16">
          Das strukturierte 5-Schritte System für bewusste Persönlichkeitsentwicklung - 
          jetzt auch digital verfügbar
        </p>
        
        {/* Weitere Inhalte werden in separaten Komponenten implementiert */}
      </div>
    </main>
  );
}
