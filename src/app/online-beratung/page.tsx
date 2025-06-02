import type { Metadata } from 'next';
import WarmNavigation from '@/components/WarmNavigation';
import WarmFooter from '@/components/WarmFooter';
import OnlineServiceHero from '@/components/OnlineServiceHero';
import OnlineAdvantagesSection from '@/components/OnlineAdvantagesSection';
import TechnicalRequirements from '@/components/TechnicalRequirements';
import OnlineBookingSection from '@/components/OnlineBookingSection';
import OnlineFAQ from '@/components/OnlineFAQ';

export const metadata: Metadata = {
  title: 'Online Lebensberatung via Video-Call | Flexible Termine',
  description: 'Professionelle Online-Beratung mit diplomiertem Lebens- und Sozialberater. Video-Coaching von zuhause aus. Sichere, vertrauliche Sitzungen. Jetzt Online-Termin buchen!',
  keywords: [
    'Online Lebensberatung',
    'Video Coaching',
    'Fernberatung',
    'Digitale Beratung',
    'Online Coaching Österreich',
    'Video-Call Coaching',
    'Online Termine Lebensberatung',
    'Virtuelle Beratung',
    'Home Office Coaching'
  ],
  openGraph: {
    title: 'Online Lebensberatung via Video-Call | Sascha Kohler',
    description: 'Professionelle Online-Beratung von zuhause aus. Sichere Video-Calls mit diplomiertem Lebensberater. Flexible Termine verfügbar.',
    images: [
      {
        url: '/images/online-coaching-video-call.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Lebensberatung via Video-Call mit Sascha Kohler',
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
    "name": "Online Lebensberatung via Video-Call",
    "description": "Professionelle Lebensberatung über sichere Video-Verbindung von zuhause aus",
    "provider": {
      "@type": "Person",
      "name": "Sascha Kohler",
      "jobTitle": "Diplomierter Lebens- und Sozialberater"
    },
    "serviceType": "Online Lebensberatung",
    "areaServed": {
      "@type": "Country", 
      "name": "Austria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Online Coaching Angebote",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Online Einzelsitzung",
          "description": "60-minütige individuelle Beratung via Video-Call"
        },
        {
          "@type": "Offer", 
          "name": "KLARE-Methode Online",
          "description": "Strukturiertes 5-Schritte Coaching-Programm online"
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Menschen die Lebensberatung von zuhause nutzen möchten"
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
