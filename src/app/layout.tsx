import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700'],
  variable: '--font-merriweather' 
});

export const metadata: Metadata = {
  title: {
    default: 'Sascha Kohler - NLP-Trainer & Mentaltrainer | KLARE-Methode',
    template: '%s | Sascha Kohler',
  },
  description: 'NLP-Trainer und Mentaltrainer mit 20+ Jahren Erfahrung. Erfinder der KLARE-Methode. Schaffe Raum für Ihre Selbstentdeckung durch Dialog-zentrierte Beratung. LSB-Diplom ab September 2025.',
  keywords: [
    'KLARE Methode',
    'NLP-Trainer',
    'Mentaltrainer', 
    'Lebensberatung',
    'Sozialberatung',
    'Selbstentdeckung',
    'Philosophischer Dialog',
    'Kongruenz',
    'Authentizität',
    'Coaching',
    'Apotheker',
    'Österreich'
  ],
  authors: [{ name: 'Sascha Kohler' }],
  creator: 'Sascha Kohler',
  publisher: 'Sascha Kohler',
  metadataBase: new URL('https://sascha-kohler.at'),
  alternates: {
    canonical: 'https://sascha-kohler.at',
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://sascha-kohler.at',
    title: 'Sascha Kohler - Raum für Ihre Selbstentdeckung',
    description: 'NLP-Trainer und Mentaltrainer. Schaffe Raum für Ihre Selbstentdeckung durch Dialog-zentrierte Beratung. KLARE-Methode für bewusste Ressourcen-Aktivierung.',
    siteName: 'Sascha Kohler',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
