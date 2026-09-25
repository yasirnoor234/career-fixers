import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Career Fixers | Speak With Senior Resume Consultants & Writers',
  description:
    'Speak directly with Career Fixers managing partners and senior resume writers. Get guidance on executive resumes, ATS optimization, turnaround times, and packages.',
  keywords: [
    'contact Career Fixers',
    'resume consultation',
    'speak with resume writer',
    'executive resume inquiry',
  ],
  alternates: {
    canonical: 'https://www.careerfixers.com/contact',
  },
  openGraph: {
    title: 'Contact Career Fixers | Speak With Our Career Strategists',
    description:
      'Connect directly with our U.S.-based resume writers and managing partners for personal guidance on your career documents.',
    url: 'https://www.careerfixers.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Career Fixers | Direct Resume Consultant Access',
    description: 'Connect directly with our senior resume writers and partners.',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Direct Writer Access</div>
          <h1 className="hero-title">Speak With Our Career Strategists</h1>
          <p className="hero-copy">
            Have a question about your specific career transition, executive positioning, or package options? We are here to guide you directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Direct Leadership Cards */}
            <div className="contact-info-col">
              <div className="kicker">Direct Leadership Access</div>
              <h2 className="contact-heading">Personalized Guidance From Real Professionals</h2>
              <p className="contact-lead-text">
                Whether you are an executive repositioning for a board seat or a professional seeking faster interview callbacks, our U.S.-based managing partners respond directly with actionable insights.
              </p>

              <div className="contact-leaders-stack">
                
                {/* Farah Sheikh Card */}
                <div className="contact-leader-card">
                  <div className="contact-card-top">
                    <div className="contact-avatar-emblem">FS</div>
                    <div className="contact-leader-meta">
                      <div className="contact-leader-name-row">
                        <h3>Farah Sheikh</h3>
                        <span className="leader-badge-gold">Managing Partner</span>
                      </div>
                      <div className="contact-role-sub">Executive Strategy &amp; Board Positioning</div>
                    </div>
                  </div>
                  <p className="contact-card-desc">
                    Specializes in C-suite, VP, director-level narratives, medical, and specialized technical career transformations.
                  </p>
                  <div className="contact-card-actions">
                    <a href="mailto:farah@careerfixers.com" className="contact-action-btn email-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>farah@careerfixers.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/farahsheikh-careerfixers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-action-btn linkedin-btn"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>LinkedIn Profile &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Suban Khalid Card */}
                <div className="contact-leader-card">
                  <div className="contact-card-top">
                    <div className="contact-avatar-emblem">SK</div>
                    <div className="contact-leader-meta">
                      <div className="contact-leader-name-row">
                        <h3>Suban Khalid</h3>
                        <span className="leader-badge-gold">Managing Partner</span>
                      </div>
                      <div className="contact-role-sub">Client Operations &amp; Delivery Management</div>
                    </div>
                  </div>
                  <p className="contact-card-desc">
                    Manages expedited delivery schedules, custom multi-document bundles, writer pairing, and quality assurance.
                  </p>
                  <div className="contact-card-actions">
                    <a href="mailto:suban@careerfixers.com" className="contact-action-btn email-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>suban@careerfixers.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/suban-khalid-careerfixers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-action-btn linkedin-btn"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>LinkedIn Profile &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Company LinkedIn Banner Card */}
                <a
                  href="https://www.linkedin.com/company/careerfixers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-company-banner"
                >
                  <div className="company-banner-left">
                    <div className="company-banner-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </div>
                    <div>
                      <div className="company-banner-title">Career Fixers on LinkedIn</div>
                      <div className="company-banner-sub">Follow for career strategies, resume teardowns &amp; executive hiring trends</div>
                    </div>
                  </div>
                  <span className="company-banner-badge">Visit Page &rarr;</span>
                </a>

              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="contact-form-col">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
