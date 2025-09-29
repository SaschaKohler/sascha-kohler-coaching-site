import WarmNavigation from "@/components/WarmNavigation";
import WarmHero from "@/components/WarmHero";
import OnlineServiceTeaser from "@/components/OnlineServiceTeaser";
import QualificationsSection from "@/components/QualificationsSection";
import WarmContact from "@/components/WarmContact";
import WarmFooter from "@/components/WarmFooter";
import KlareMethodApproach from "@/components/KlareMethodApproach";
import KlareMethodPresentation from "@/components/KlareMethodPresentation";
import PersonalGallery from "@/components/PersonalGallery";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <WarmNavigation />
      <WarmHero />
      <KlareMethodApproach />
      <KlareMethodPresentation />
      <PersonalGallery />
      <OnlineServiceTeaser />
      <QualificationsSection />
      <WarmContact />
      <WarmFooter />
    </main>
  );
}
