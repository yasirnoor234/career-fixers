import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'LinkedIn Profile Optimization & Makeover | Career Fixers',
  description:
    'Transform your LinkedIn profile into a 24/7 recruiter magnet. Search-optimized headlines, compelling About summaries, and high-impact experience positioning.',
  alternates: {
    canonical: '/linkedin-optimization',
  },
};

export default function LinkedInOptimizationPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Digital Personal Brand</div>
          <h1 className="hero-title">LinkedIn Profile Optimization for Inbound Recruiter Searches</h1>
          <p className="hero-copy">
            Over 87% of recruiters actively search LinkedIn to source top candidates. We optimize your headline, About section, experience entries, and core skills to rank higher in recruiter searches.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-brand" href="/pricing">
              Order LinkedIn Optimization ($50 - $70)
            </Link>
            <Link className="btn btn-outline-white" href="/#free-review">
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Profile Architecture</div>
            <h2 className="section-title">What We Overhaul in Your LinkedIn Profile</h2>
            <p className="section-subtitle">
              A comprehensive, field-by-field optimization delivered in an easy copy-and-paste document.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>1. Search-Engine Keyword Headline</h3>
              <p>
                We replace generic job titles with high-intent industry keywords, value propositions, and specialization markers that recruiters use in LinkedIn Recruiter searches.
              </p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>2. Engaging &ldquo;About&rdquo; Summary</h3>
              <p>
                A narrative that hooks readers in the first 3 lines, outlines your career milestones, core philosophy, and provides a clear call-to-action for networking.
              </p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3>3. Skills &amp; Algorithm Endorsements</h3>
              <p>
                Curated list of the top 50 industry competencies to trigger LinkedIn&apos;s matching algorithm for your desired seniority tier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
