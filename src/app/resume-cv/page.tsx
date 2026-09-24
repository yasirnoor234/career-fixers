import type { Metadata } from 'next';
import Link from 'next/link';
import FreeReviewForm from '@/components/FreeReviewForm';
import SamplesGallery from '@/components/SamplesGallery';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Professional Resume & CV Writing Service | Career Fixers',
  description:
    'Custom, ATS-friendly resume writing by experienced US writers. Highlight measurable achievements, pass automated screening, and land more interviews.',
  alternates: {
    canonical: '/resume-cv',
  },
};

export default function ResumeCvPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Core Professional Service</div>
          <h1 className="hero-title">Professional ATS-Friendly Resume &amp; CV Writing</h1>
          <p className="hero-copy">
            Transform your career history into an authentic, achievement-focused resume engineered to score in the top tier of ATS parsers and grab executive hiring managers in seconds.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-brand" href="#resume-form">
              Request Free Resume Review
            </a>
            <Link className="btn btn-outline-white" href="/pricing">
              View Pricing Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us for Resumes */}
      <section className="problem-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The Difference</div>
            <h2 className="section-title">What Makes a Career Fixers Resume Stand Out?</h2>
            <p className="section-subtitle">
              We focus on four foundational pillars to ensure your resume generates actual interview requests.
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="service-card-icon" style={{ marginBottom: '16px', background: 'rgba(37, 99, 235, 0.08)', color: '#2563EB' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                1. Quantified Metrics &amp; ROI
              </h3>
              <p style={{ fontStyle: 'normal', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                We transform daily duty descriptions into clear, measurable business achievements highlighting revenue, cost reductions, team growth, and efficiency gains.
              </p>
            </div>

            <div className="problem-card">
              <div className="service-card-icon" style={{ marginBottom: '16px', background: 'rgba(22, 163, 74, 0.08)', color: '#16A34A' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                2. 99% ATS Parse Precision
              </h3>
              <p style={{ fontStyle: 'normal', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Standardized semantic headers and structural hierarchy guaranteed to pass Workday, Taleo, Greenhouse, and Lever without character corruption or missing sections.
              </p>
            </div>

            <div className="problem-card">
              <div className="service-card-icon" style={{ marginBottom: '16px', background: 'rgba(197, 155, 78, 0.12)', color: '#B58A3E' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                3. Executive Storytelling
              </h3>
              <p style={{ fontStyle: 'normal', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                A commanding executive summary that immediately establishes your leadership scope, core competencies, and unique value proposition in under six seconds.
              </p>
            </div>

            <div className="problem-card">
              <div className="service-card-icon" style={{ marginBottom: '16px', background: 'rgba(99, 102, 241, 0.08)', color: '#4F46E5' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                4. Keyword Density Optimization
              </h3>
              <p style={{ fontStyle: 'normal', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Seamlessly integrated industry and seniority keywords derived from live market requisitions so your profile ranks in top recruiter search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samples */}
      <SamplesGallery />

      {/* Interactive Form */}
      <section className="services-section" id="resume-form" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container container-narrow">
          <div className="hero-card">
            <div className="hero-card-header">
              <div>
                <h2>Send Us Your Current Resume</h2>
                <p>Upload your document and our senior writers will evaluate your ATS parseability and positioning.</p>
              </div>
              <span className="hero-chip-free">100% Free</span>
            </div>
            <FreeReviewForm idPrefix="resumePage" />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
