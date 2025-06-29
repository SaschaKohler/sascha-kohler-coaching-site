import WarmNavigation from "@/components/WarmNavigation";
import WarmHero from "@/components/WarmHero";
import ApproachSection from "@/components/ApproachSection";
import OnlineServiceTeaser from "@/components/OnlineServiceTeaser";
import QualificationsSection from "@/components/QualificationsSection";
import WarmContact from "@/components/WarmContact";
import WarmFooter from "@/components/WarmFooter";
import ModernKlareMethod from "@/components/ModernKlareMethod";
import KlareMethodApproach from "@/components/KlareMethodApproach";
import KlareMethodPresentation from "@/components/KlareMethodPresentation";
import PersonalGallery from "@/components/PersonalGallery";
import MethodVideo from "@/components/MethodVideo";

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
