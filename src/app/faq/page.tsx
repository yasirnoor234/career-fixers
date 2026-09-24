import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Career Fixers',
  description:
    'Find answers to common questions about Career Fixers resume writing, ATS optimization, pricing, turnaround times, and 60-day interview guarantees.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Knowledge Base</div>
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-copy">
            Everything you need to know about our resume writing process, ATS optimization standards, turnaround times, and interview guarantees.
          </p>
        </div>
      </section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
