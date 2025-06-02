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
    default: 'Online Lebensberatung & KLARE-Methode | Sascha Kohler - Diplomierter Lebens- und Sozialberater',
    template: '%s | Sascha Kohler - Online Coaching',
  },
  description: 'Online Lebensberatung mit diplomiertem Lebens- und Sozialberater. KLARE-Methode, NLP-Training & Video-Coaching. Flexible Online-Termine für Persönlichkeitsentwicklung. Jetzt Beratung buchen!',
  keywords: [
    'Online Lebensberatung',
    'Digitale Persönlichkeitsentwicklung',
    'KLARE Methode Online',
    'Video Coaching',
    'Online Coaching Österreich',
    'Fernberatung Lebenshilfe',
    'Virtuelle Beratung',
    'Online NLP Training',
    'Diplomierter Lebensberater',
    'Sozialberater Online',
    'NLP-Trainer',
    'Mentaltrainer', 
    'Lebensberatung',
    'Selbstentdeckung',
    'Philosophischer Dialog',
    'Kongruenz',
    'Authentizität',
    'Bachblüten Online',
    'Videocall Coaching',
    'Digitale Beratung',
    'Österreich',
    'Oberösterreich',
    'Frohnleiten'
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
    title: 'Online Lebensberatung & KLARE-Methode | Sascha Kohler',
    description: 'Diplomierter Lebens- und Sozialberater bietet Online-Coaching via Video-Call. KLARE-Methode für bewusste Persönlichkeitsentwicklung. Flexible Online-Termine verfügbar.',
    siteName: 'Sascha Kohler - Online Coaching',
    images: [
      {
        url: '/images/sascha-kohler-online-coaching.jpg',
        width: 1200,
        height: 630,
        alt: 'Sascha Kohler - Online Lebensberatung und KLARE-Methode Coaching',
      },
    ],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://sascha-kohler.at/#service",
        "name": "Sascha Kohler - Online Lebensberatung",
        "description": "Diplomierter Lebens- und Sozialberater bietet Online-Coaching, KLARE-Methode und NLP-Training via Video-Call",
        "provider": {
          "@type": "Person",
          "@id": "https://sascha-kohler.at/#person"
        },
        "serviceType": ["Online Lebensberatung", "Video Coaching", "KLARE-Methode Training", "NLP Training"],
        "areaServed": {
          "@type": "Country",
          "name": "Austria"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceType": "Online",
          "availableLanguage": "German"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Online Coaching Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Online Einzelcoaching",
              "description": "Individuelle Online-Beratung via Video-Call"
            },
            {
              "@type": "Offer", 
              "name": "KLARE-Methode Online",
              "description": "5-Schritte Persönlichkeitsentwicklung online lernen"
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://sascha-kohler.at/#person",
        "name": "Sascha Kohler",
        "jobTitle": "Diplomierter Lebens- und Sozialberater",
        "description": "NLP-Trainer, Mentaltrainer und Erfinder der KLARE-Methode mit 20+ Jahren Erfahrung",
        "url": "https://sascha-kohler.at",
        "image": "https://sascha-kohler.at/images/sascha-kohler.jpg",
        "sameAs": [
          "https://linkedin.com/in/sascha-kohler"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Diplomierter Lebens- und Sozialberater",
            "educationalLevel": "Diplom"
          },
          {
            "@type": "EducationalOccupationalCredential", 
            "name": "NLP-Trainer",
            "educationalLevel": "Zertifikat"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Mentaltrainer", 
            "educationalLevel": "Zertifikat"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Apotheker",
            "educationalLevel": "Diplom"
          }
        ],
        "knowsAbout": ["KLARE-Methode", "NLP", "Lebensberatung", "Persönlichkeitsentwicklung", "Bachblüten"],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Lebens- und Sozialberater",
          "occupationLocation": {
            "@type": "Country",
            "name": "Austria"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sascha-kohler.at/#website",
        "url": "https://sascha-kohler.at",
        "name": "Sascha Kohler - Online Lebensberatung",
        "description": "Online Coaching und KLARE-Methode Training",
        "publisher": {
          "@type": "Person",
          "@id": "https://sascha-kohler.at/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sascha-kohler.at/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="de" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
