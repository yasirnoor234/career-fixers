import type { Metadata } from 'next';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'About Career Fixers | U.S.-Based Executive Resume Writers & Career Strategists',
  description:
    'Learn about Career Fixers mission, our leadership team led by Farah Sheikh and Suban Khalid, our 6-step writing methodology, and our 60-day interview guarantee.',
  keywords: [
    'about Career Fixers',
    'professional resume writers',
    'executive resume strategists',
    'Farah Sheikh resume',
    'Suban Khalid resume',
    'resume guarantee',
  ],
  alternates: {
    canonical: 'https://www.careerfixers.com/about',
  },
  openGraph: {
    title: 'About Career Fixers | Human-Led Career Documents & Strategy',
    description:
      'Learn about Career Fixers mission, leadership, 6-step collaborative methodology, and interview guarantees.',
    url: 'https://www.careerfixers.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Career Fixers | Human-Led Career Documents',
    description: 'Learn about our mission, methodology, and US-based writing team.',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">About Career Fixers</div>
          <h1 className="hero-title">Professional Career Documents That Get You Noticed</h1>
          <p className="hero-copy">
            We believe high-performing candidates deserve career documents that genuinely reflect their impact. Our mission is to eliminate the friction between your true capability and recruiter screening algorithms.
          </p>
        </div>
      </section>

      {/* Mission & Standards */}
      <section className="services-section">
        <div className="container">
          <div className="consultant-box">
            <div className="consultant-visual">
              <span className="consultant-badge">Our Commitment</span>
              <h3>100% Human-Written, 100% U.S.-Based</h3>
              <p>We pair you with certified career strategists who write every line from scratch.</p>
              <div className="consultant-tags">
                <span className="consultant-tag">20,000+ Resumes Written</span>
                <span className="consultant-tag">4.9 / 5.0 Rating</span>
                <span className="consultant-tag">60-Day Guarantee</span>
              </div>
            </div>

            <div className="consultant-content">
              <div className="kicker">Our Philosophy</div>
              <h2>We don&apos;t sell generic templates. We build career narratives.</h2>
              <p>
                In modern corporate recruiting, over 70% of resumes are disqualified by automated applicant tracking systems before a recruiter reads them. Of those that survive, recruiters spend an average of six seconds scanning the page.
              </p>
              <p>
                Career Fixers was founded to solve this two-sided challenge: engineering flawless ATS formatting so you pass automated filters, while crafting crisp, metric-driven copy that immediately captures hiring managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Managing Partners */}
      <section className="services-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Leadership</div>
            <h2 className="section-title">Meet Our Managing Partners</h2>
            <p className="section-subtitle">
              Experienced career strategists personally overseeing client engagements, executive positioning, and quality standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div className="service-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div className="brand-emblem" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>FS</div>
                <a
                  href="https://www.linkedin.com/in/farahsheikh-careerfixers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ gap: '6px' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>Farah Sheikh</h3>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-gold-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Managing Partner
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                Specializes in executive positioning, career transformations, and ATS alignment for mid-to-senior leadership roles across tech, finance, and healthcare.
              </p>
              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '14px', fontSize: '0.875rem' }}>
                <a href="mailto:farah@careerfixers.com" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                  farah@careerfixers.com &rarr;
                </a>
              </div>
            </div>

            <div className="service-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div className="brand-emblem" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>SK</div>
                <a
                  href="https://www.linkedin.com/in/suban-khalid-careerfixers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ gap: '6px' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>Suban Khalid</h3>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-gold-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Managing Partner
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                Leads client operations, quality assurance, and document delivery workflows, ensuring every candidate receives dedicated human consultation and unlimited revisions.
              </p>
              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '14px', fontSize: '0.875rem' }}>
                <a href="mailto:suban@careerfixers.com" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                  suban@careerfixers.com &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Phase Method */}
      <section className="process-section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Our Methodology</div>
            <h2 className="section-title">The 6-Phase Career Fixers Method</h2>
            <p className="section-subtitle">
              A comprehensive, rigorous process developed across 20,000+ successful career transformations.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span className="step-number">PHASE 01</span>
              <h3>Understand</h3>
              <p>We review your career history, goals, past documents, and the specific roles you are targeting next.</p>
            </div>

            <div className="service-card">
              <span className="step-number">PHASE 02</span>
              <h3>Discover</h3>
              <p>We uncover hidden achievements, leadership scope, and quantitative metrics your current resume omits.</p>
            </div>

            <div className="service-card">
              <span className="step-number">PHASE 03</span>
              <h3>Position</h3>
              <p>We craft a strong executive narrative aligned with your target seniority level and industry expectations.</p>
            </div>

            <div className="service-card">
              <span className="step-number">PHASE 04</span>
              <h3>Optimize</h3>
              <p>We weave role-specific keywords and structure standard headers to ensure 95%+ ATS parse accuracy.</p>
            </div>

            <div className="service-card">
              <span className="step-number">PHASE 05</span>
              <h3>Refine</h3>
              <p>You review the complete draft and collaborate with your writer through unlimited revision rounds.</p>
            </div>

            <div className="service-card">
              <span className="step-number">PHASE 06</span>
              <h3>Deliver</h3>
              <p>You receive final editable Word (.docx) and submission-ready PDF files backed by our interview guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees & Policies */}
      <section className="services-section" id="guarantee">
        <div className="container container-narrow">
          <div className="section-head">
            <div className="kicker">Our Promises</div>
            <h2 className="section-title">Guarantees &amp; Client Policies</h2>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px' }}>
              60-Day Interview Guarantee
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              If you do not receive interview callbacks within 60 days of using your finalized Career Fixers resume, our senior writing team will conduct a complete review and rewrite your resume at no additional cost.
            </p>

            <h3 id="privacy" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px' }}>
              Privacy &amp; Data Security
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Your personal information, work history, target roles, and documents are treated with strict confidentiality. We never sell, rent, or share your data with third parties.
            </p>

            <h3 id="terms" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px' }}>
              Terms of Service
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              All client engagements include unlimited revisions within 30 days of draft delivery. Final deliverables include editable Microsoft Word and PDF files.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
