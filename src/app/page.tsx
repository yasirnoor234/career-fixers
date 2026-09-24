import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ProblemSection from '@/components/ProblemSection';
import ServicesGrid from '@/components/ServicesGrid';
import AtsSection from '@/components/AtsSection';
import ClientRecommendations from '@/components/ClientRecommendations';
import MethodologySection from '@/components/MethodologySection';
import CareerLevelsSection from '@/components/CareerLevelsSection';
import PricingSection from '@/components/PricingSection';
import SamplesGallery from '@/components/SamplesGallery';
import DirectCollaboration from '@/components/DirectCollaboration';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <ServicesGrid />
      <AtsSection />
      <ClientRecommendations />
      <MethodologySection />
      <CareerLevelsSection />
      <PricingSection />
      <SamplesGallery />
      <DirectCollaboration />
      <FaqSection />
      <FinalCta />
    </>
  );
}
