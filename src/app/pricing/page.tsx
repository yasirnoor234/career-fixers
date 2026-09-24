import type { Metadata } from 'next';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Career Packages | Career Fixers',
  description:
    'Clear, upfront pricing for professional resume writing, LinkedIn optimization, and cover letters. Packages starting from $150 with unlimited revisions.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Invest In Your Career</div>
          <h1 className="hero-title">Transparent Pricing Without Hidden Upsells</h1>
          <p className="hero-copy">
            Every package includes an ATS-optimized resume, customized cover letter, and complete LinkedIn makeover with unlimited collaborative revisions.
          </p>
        </div>
      </section>

      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
