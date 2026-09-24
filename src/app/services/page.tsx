import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '@/components/ServicesGrid';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Career Services & Packages | Career Fixers',
  description:
    'Explore Career Fixers full range of career document services: ATS resumes, CV writing, executive biographies, custom cover letters, and LinkedIn optimization.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Full Service Catalog</div>
          <h1 className="hero-title">Career Documents Built for Every Career Stage</h1>
          <p className="hero-copy">
            From ATS-compliant resumes to executive dossiers, cover letters, and LinkedIn profile overhauls, our US-based writing team crafts documents designed to win callbacks.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-brand" href="/pricing">
              View Package Pricing
            </Link>
            <Link className="btn btn-outline-white" href="/#free-review">
              Get Free Resume Review
            </Link>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <FinalCta />
    </>
  );
}
