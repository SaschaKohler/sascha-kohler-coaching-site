import WarmNavigation from '@/components/WarmNavigation';
import WarmHero from '@/components/WarmHero';
import ApproachSection from '@/components/ApproachSection';
import OnlineServiceTeaser from '@/components/OnlineServiceTeaser';
import QualificationsSection from '@/components/QualificationsSection';
import WarmContact from '@/components/WarmContact';
import WarmFooter from '@/components/WarmFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <WarmNavigation />
      <WarmHero />
      <ApproachSection />
      <OnlineServiceTeaser />
      <QualificationsSection />
      <WarmContact />
      <WarmFooter />
    </main>
  );
}
