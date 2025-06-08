import type { Metadata } from 'next';
import WarmNavigation from '@/components/WarmNavigation';
import WarmFooter from '@/components/WarmFooter';
import OnlineServiceHero from '@/components/OnlineServiceHero';
import OnlineAdvantagesSection from '@/components/OnlineAdvantagesSection';
import TechnicalRequirements from '@/components/TechnicalRequirements';
import OnlineBookingSection from '@/components/OnlineBookingSection';
import OnlineFAQ from '@/components/OnlineFAQ';

export const metadata: Metadata = {
  title: 'Online Mentaltraining via Video-Call | Flexible Termine',
  description: 'Professionelles Online-Mentaltraining mit zertifiziertem Mentaltrainer. Video-Coaching von zuhause aus. KLARE-Methode digital. Jetzt Online-Termin buchen!',
  keywords: [
    'Online Mentaltraining',
    'Video Mentaltraining',
    'Mentaler Coach online',
    'Digitales Mentaltraining',
    'Online Coaching Österreich',
    'Video-Call Mentaltrainer',
    'Online Termine Mentaltraining',
    'Virtuelles Mentaltraining',
    'KLARE Methode online'
  ],
  openGraph: {
    title: 'Online Mentaltraining via Video-Call | Sascha Kohler',
    description: 'Professionelles Mentaltraining von zuhause aus. Sichere Video-Calls mit zertifiziertem Mentaltrainer. Flexible Termine verfügbar.',
    images: [
      {
        url: '/images/online-mentaltraining-video-call.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Mentaltraining via Video-Call mit Sascha Kohler',
      },
    ],
  },
  alternates: {
    canonical: 'https://sascha-kohler.at/online-beratung',
  },
};

export default function OnlineBeratungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Online Mentaltraining via Video-Call",
    "description": "Professionelles Mentaltraining über sichere Video-Verbindung von zuhause aus",
    "provider": {
      "@type": "Person",
      "name": "Sascha Kohler",
      "jobTitle": "Zertifizierter Mentaltrainer"
    },
    "serviceType": "Online Mentaltraining",
    "areaServed": {
      "@type": "Country", 
      "name": "Austria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Online Mentaltraining Angebote",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Online Mentaltraining Einzelsitzung",
          "description": "60-minütiges individuelles Mentaltraining via Video-Call"
        },
        {
          "@type": "Offer", 
          "name": "KLARE-Methode Online",
          "description": "Strukturiertes 5-Schritte Mentaltraining-Programm online"
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Menschen die Mentaltraining von zuhause nutzen möchten"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-warm-white">
        <WarmNavigation />
        <OnlineServiceHero />
        <OnlineAdvantagesSection />
        <TechnicalRequirements />
        <OnlineBookingSection />
        <OnlineFAQ />
        <WarmFooter />
      </main>
    </>
  );
}
