import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Career Fixers | Professional ATS Resume Writing & Career Services',
  description:
    'Transform your career with ATS-friendly resumes, executive CVs, cover letters, and LinkedIn profile overhauls crafted by senior U.S. writers. Free resume review.',
  alternates: {
    canonical: 'https://www.careerfixers.com/',
  },
  openGraph: {
    title: 'Career Fixers | Professional ATS Resume Writing & Career Services',
    description:
      'Human-written, ATS-optimized resumes, cover letters, and LinkedIn profile overhauls. Pass screening algorithms and win more executive interviews.',
    url: 'https://www.careerfixers.com/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <ServicesGrid />
      <AtsSection />
      <MethodologySection />
      <CareerLevelsSection />
      <PricingSection />
      <SamplesGallery />
      <DirectCollaboration />
      <ClientRecommendations />
      <FaqSection />
      <FinalCta />
    </>
  );
}
