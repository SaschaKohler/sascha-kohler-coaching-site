import type { Metadata } from "next";
import WarmNavigation from "@/components/WarmNavigation";
import WarmFooter from "@/components/WarmFooter";
import OnlineServiceHero from "@/components/OnlineServiceHero";
import OnlineAdvantagesSection from "@/components/OnlineAdvantagesSection";
import TechnicalRequirements from "@/components/TechnicalRequirements";
import OnlineBookingSection from "@/components/OnlineBookingSection";
import OnlineFAQ from "@/components/OnlineFAQ";

export const metadata: Metadata = {
  title: "Online Mentaltraining via Video-Call | Flexible Termine",
  description:
    "Professionelles Online-Mentaltraining mit zertifiziertem Mentaltrainer. Video-Coaching von zuhause aus. KLARE-Methode digital. Jetzt Online-Termin buchen!",
  keywords: [
    "Online Mentaltraining",
    "Video Mentaltraining",
    "Mentaler Coach online",
    "Digitales Mentaltraining",
    "Online Coaching Österreich",
    "Video-Call Mentaltrainer",
    "Online Termine Mentaltraining",
    "Virtuelles Mentaltraining",
    "KLARE Methode online",
  ],
  openGraph: {
    title: "Online Mentaltraining via Video-Call | Sascha Kohler",
    description:
      "Professionelles Mentaltraining von zuhause aus. Sichere Video-Calls mit zertifiziertem Mentaltrainer. Flexible Termine verfügbar.",
    images: [
      {
        url: "/images/online-mentaltraining-video-call.jpg",
        width: 1200,
        height: 630,
        alt: "Online Mentaltraining via Video-Call mit Sascha Kohler",
      },
    ],
  },
  alternates: {
    canonical: "https://sascha-kohler.at/online-beratung",
  },
};

export default function OnlineBeratungPage() {
  return (
    <>
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
