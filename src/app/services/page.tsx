import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '@/components/ServicesGrid';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Career Services & Document Packages | ATS Resumes, CVs, LinkedIn & Cover Letters',
  description:
    'Explore Career Fixers comprehensive suite of career document services: ATS resume rewrites, executive CVs, LinkedIn optimization, cover letters, and career transition packages.',
  keywords: [
    'career services',
    'resume packages',
    'ATS resume services',
    'executive CV writing',
    'LinkedIn makeover',
    'cover letter writing',
    'career transition documents',
  ],
  alternates: {
    canonical: 'https://www.careerfixers.com/services',
  },
  openGraph: {
    title: 'Career Services & Document Packages | Career Fixers',
    description:
      'Explore Career Fixers full catalog of ATS-friendly career services, executive resumes, LinkedIn optimization, and cover letters.',
    url: 'https://www.careerfixers.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Document Services & Packages | Career Fixers',
    description: 'Human-crafted ATS resumes, LinkedIn makeovers, and executive documents.',
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
