import type { Metadata } from 'next';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Career Document Packages | Career Fixers',
  description:
    'Upfront, transparent pricing for ATS resume writing, executive CVs, LinkedIn optimization, and cover letters. Packages starting from $150 with unlimited revisions.',
  keywords: [
    'resume writing pricing',
    'resume cost',
    'professional CV prices',
    'career packages',
    'LinkedIn makeover cost',
    'cover letter price',
  ],
  alternates: {
    canonical: 'https://www.careerfixers.com/pricing',
  },
  openGraph: {
    title: 'Transparent Pricing & Career Packages | Career Fixers',
    description:
      'Clear, upfront pricing for professional resume writing, executive CVs, and LinkedIn optimization. 100% human-crafted with a 60-day guarantee.',
    url: 'https://www.careerfixers.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Career Document Pricing | Career Fixers',
    description: 'Upfront pricing for ATS resumes, LinkedIn makeovers, and cover letters.',
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
