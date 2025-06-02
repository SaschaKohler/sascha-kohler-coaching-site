import WarmNavigation from '@/components/WarmNavigation';
import WarmHero from '@/components/WarmHero';
import ApproachSection from '@/components/ApproachSection';
import QualificationsSection from '@/components/QualificationsSection';
import WarmContact from '@/components/WarmContact';
import WarmFooter from '@/components/WarmFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <WarmNavigation />
      <WarmHero />
      <ApproachSection />
      <QualificationsSection />
      <WarmContact />
      <WarmFooter />
    </main>
  );
}
