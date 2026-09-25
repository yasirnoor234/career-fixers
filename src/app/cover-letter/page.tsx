import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Custom Cover Letter Writing Service | Story-Driven Job Applications',
  description:
    'Persuasive, targeted cover letters tailored to your target job descriptions. Articulate your unique value proposition, leadership story, and fit.',
  keywords: [
    'cover letter writing',
    'custom cover letter',
    'professional cover letter service',
    'executive cover letter',
    'job application letter',
  ],
  alternates: {
    canonical: 'https://www.careerfixers.com/cover-letter',
  },
  openGraph: {
    title: 'Custom Cover Letter Writing Service | Career Fixers',
    description:
      'Story-driven, persuasive cover letters tailored to your target job postings to stand out to hiring managers.',
    url: 'https://www.careerfixers.com/cover-letter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Cover Letter Writing Service | Career Fixers',
    description: 'Story-driven cover letters tailored to target job openings.',
  },
};

export default function CoverLetterPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Targeted Correspondence</div>
          <h1 className="hero-title">Custom Cover Letters That Hook Hiring Managers</h1>
          <p className="hero-copy">
            Generic cover letters get ignored. We craft persuasive, story-driven letters tailored to your target job postings that articulate why you are the stand-out candidate.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-brand" href="/pricing">
              Order Cover Letter ($25)
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
            <div className="kicker">Strategic Messaging</div>
            <h2 className="section-title">Why an Impactful Cover Letter Matters</h2>
            <p className="section-subtitle">
              A resume lists your facts; a cover letter delivers your voice, enthusiasm, and cultural fit.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Direct Role Alignment</h3>
              <p>
                We analyze the target company&apos;s job posting, pain points, and culture, mapping your exact achievements to what they need solved immediately.
              </p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <h3>Career Change Narrative</h3>
              <p>
                Pivoting into a new industry or role? We bridge the gap between past experience and new domain requirements with clear rationale.
              </p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="11" y2="17" />
                </svg>
              </div>
              <h3>Adaptable Modular Design</h3>
              <p>
                You receive both the completed targeted letter and an adaptable framework, enabling you to quickly tailor it for subsequent applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
