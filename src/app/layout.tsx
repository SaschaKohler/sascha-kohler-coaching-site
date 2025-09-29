import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "../styles/globals.css";
import { AnalyticsConsentProvider } from "@/components/AnalyticsConsentProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: {
    default:
      "KLARE-Methode Mentaltraining | Sascha Kohler - Mentaltrainer & Dipl. Lebensberater",
    template: "%s | Sascha Kohler - KLARE-Methode Coaching",
  },
  description:
    "KLARE-Methode für mentale Transformation: Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung. Mentaltraining & Lebensberatung in perfekter Symbiose. Online-Coaching für nachhaltige Persönlichkeitsentwicklung und Kongruenz.",
  keywords: [
    "KLARE-Methode Mentaltraining",
    "KLARE-Methode Coaching",
    "Sascha Kohler Mentaltrainer",
    "Mentaltraining Kongruenz",
    "Diplomierter Lebens- und Sozialberater",
    "Symbiose Mentaltraining Lebensberatung",
    "KLARE Coaching System",
    "Mentale Transformation 5 Schritte",
    "Kongruenz Training Mental",
    "Online Mentaltraining KLARE",
    "Persönlichkeitsentwicklung Kongruenz",
    "Mentaltraining",
    "Online Coaching KLARE-Methode",
    "Video Coaching Mentaltrainer",
    "Klarheit Lebendigkeit Ausrichtung Realisierung Entfaltung",
    "KLARE-Methode Erfinder",
    "Mentale Stärke Training Online",
    "Kongruenz Coaching Oberösterreich",
    "Authentische Persönlichkeitsentwicklung",
    "Videocoaching Mental Kongruenz",
    "Schwertberg Mentaltrainer",
    "Mentale Programmierung KLARE",
  ],
  authors: [{ name: "Sascha Kohler" }],
  creator: "Sascha Kohler",
  publisher: "Sascha Kohler",
  metadataBase: new URL("https://sascha-kohler.at"),
  alternates: {
    canonical: "https://sascha-kohler.at",
  },
  icons: {
    icon: "/favicon/favicon.png",
    shortcut: "/favicon/favicon.png",
    apple: "/favicon/favicon.png",
    other: {
      rel: "mask-icon",
      url: "/favicon/favicon.png",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://sascha-kohler.at",
    title:
      "KLARE-Methode Mentaltraining | Sascha Kohler - Mentaltrainer & Dipl. Lebensberater",
    description:
      "Symbiose aus Mentaltraining & Lebensberatung: Die KLARE-Methode (Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung) für nachhaltige Kongruenz und Persönlichkeitsentwicklung.",
    siteName: "Sascha Kohler - KLARE-Methode Coaching",
    images: [
      {
        url: "/images/sascha-kohler-online-coaching.jpg",
        width: 1200,
        height: 630,
        alt: "Sascha Kohler - KLARE-Methode Mentaltraining und Lebensberatung",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
        name: "Sascha Kohler - KLARE-Methode Mentaltraining",
        description:
          "Mentaltrainer und diplomierter Lebens- und Sozialberater bietet die KLARE-Methode für nachhaltige Persönlichkeitsentwicklung und mentale Transformation",
        provider: {
          "@type": "Person",
          "@id": "https://sascha-kohler.at/#person",
        },
        serviceType: [
          "KLARE-Methode Mentaltraining",
          "Mental-Coaching",
          "Online Lebensberatung",
          "Persönlichkeitsentwicklung",
          "Kongruenz-Training",
        ],
        areaServed: {
          "@type": "Country",
          name: "Austria",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceType: "Online",
          availableLanguage: "German",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "KLARE-Methode Coaching",
          itemListElement: [
            {
              "@type": "Offer",
              name: "KLARE-Methode Mentaltraining",
              description:
                "5-Schritte Mentale Transformation: Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung",
            },
            {
              "@type": "Offer",
              name: "Mentaltraining & Lebensberatung Hybrid",
              description:
                "Einzigartige Symbiose aus Mentaltraining und professioneller Lebensberatung",
            },
            {
              "@type": "Offer",
              name: "Online Kongruenz-Coaching",
              description:
                "Mentale Transformation für nachhaltige Kongruenz und authentische Persönlichkeitsentwicklung",
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": "https://sascha-kohler.at/#person",
        name: "Sascha Kohler",
        jobTitle: "Mentaltrainer & Diplomierter Lebens- und Sozialberater",
        description:
          "Erfinder der KLARE-Methode, Mentaltrainer und Diplomierter Lebens- und Sozialberater mit 20+ Jahren Erfahrung in mentaler Transformation",
        url: "https://sascha-kohler.at",
        image: "https://sascha-kohler.at/images/sascha-kohler.jpg",
        sameAs: ["https://linkedin.com/in/sascha-kohler"],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Diplomierter Lebens- und Sozialberater",
            educationalLevel: "Diplom",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "NLP-Trainer",
            educationalLevel: "Zertifikat",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Mentaltrainer",
            educationalLevel: "Zertifikat",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Apotheker",
            educationalLevel: "Aprobation",
          },
        ],
        knowsAbout: [
          "KLARE-Methode",
          "Mentale Transformation",
          "Kongruenz-Training",
          "Mentaltraining",
          "Lebensberatung",
          "Persönlichkeitsentwicklung",
          "NLP",
          "Bachblüten",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Lebens- und Sozialberater",
          occupationLocation: {
            "@type": "Country",
            name: "Austria",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sascha-kohler.at/#website",
        url: "https://sascha-kohler.at",
        name: "Sascha Kohler - KLARE-Methode Mentaltraining",
        description:
          "KLARE-Methode Mentaltraining und Lebensberatung - Symbiose für nachhaltige Persönlichkeitsentwicklung",
        publisher: {
          "@type": "Person",
          "@id": "https://sascha-kohler.at/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://sascha-kohler.at/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="de" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* Favicons für Google & Browser */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.png" />
        {/* SVG als Fallback */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-sans">
        <AnalyticsConsentProvider>{children}</AnalyticsConsentProvider>
      </body>
    </html>
  );
}
