import Link from 'next/link';

export default function ServicesGrid() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Our Core Services</div>
          <h2 className="section-title">Career Documents Built to Make an Impact</h2>
          <p className="section-subtitle">
            From entry-level professionals to executive leaders, our specialized career documents position you for the opportunities you deserve.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
          <article className="service-card">
            <div className="service-card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3>Resume &amp; CV Writing</h3>
            <p>
              ATS-friendly resumes tailored to your experience, target roles, and industry standards. Built to highlight measurable career achievements.
            </p>
            <ul className="service-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Keyword-optimized for ATS filters
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Editable Word &amp; PDF versions
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Unlimited collaborative revisions
              </li>
            </ul>
            <div className="service-card-footer">
              <Link className="service-link" href="/resume-cv">
                Learn More &rarr;
              </Link>
            </div>
          </article>

          {/* Service 2 */}
          <article className="service-card">
            <div className="service-card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Cover Letter Writing</h3>
            <p>
              Personalized, persuasive cover letters designed around specific target roles to establish your narrative and explain why you&apos;re the ideal candidate.
            </p>
            <ul className="service-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Role-tailored narrative
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Connects background to job requirements
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Includes editable template for future roles
              </li>
            </ul>
            <div className="service-card-footer">
              <Link className="service-link" href="/cover-letter">
                Learn More &rarr;
              </Link>
            </div>
          </article>

          {/* Service 3 */}
          <article className="service-card">
            <div className="service-card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <h3>LinkedIn Optimization</h3>
            <p>
              Comprehensive makeover of your headline, About summary, experience entries, and searchable skills to attract recruiter inbound inquiries.
            </p>
            <ul className="service-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                High-ranking search keywords
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Compelling storytelling narrative
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Step-by-step update guide
              </li>
            </ul>
            <div className="service-card-footer">
              <Link className="service-link" href="/linkedin-optimization">
                Learn More &rarr;
              </Link>
            </div>
          </article>

          {/* Service 4 */}
          <article className="service-card">
            <div className="service-card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3>Professional Resume Review</h3>
            <p>
              Honest, expert evaluation of your current resume structure, ATS parse-rate, wording quality, and overall recruiter presentation before you buy.
            </p>
            <ul className="service-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                100% Free initial consultation
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Identifies weak bullet points
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Clear actionable recommendations
              </li>
            </ul>
            <div className="service-card-footer">
              <Link className="service-link" href="/#free-review">
                Request Free Review &rarr;
              </Link>
            </div>
          </article>

          {/* Service 5 */}
          <article className="service-card">
            <div className="service-card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Executive &amp; Leadership Packages</h3>
            <p>
              Strategic career dossiers for Directors, VPs, and C-Suite executives including executive resumes, board bios, and leadership summaries.
            </p>
            <ul className="service-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                P&amp;L and revenue impact positioning
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Executive board biography option
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Direct senior consultant pairing
              </li>
            </ul>
            <div className="service-card-footer">
              <Link className="service-link" href="/services#executive">
                Learn More &rarr;
              </Link>
            </div>
          </article>

          {/* Service 6 */}
          <article className="service-card">
            <div className="service-card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3>Complete Career Package</h3>
            <p>
              The total career toolkit combining an ATS resume, tailored cover letter, and complete LinkedIn overhaul at a discounted bundle rate.
            </p>
            <ul className="service-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Unified professional narrative
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Maximum bundle savings ($150 - $250)
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Interview preparation guide included
              </li>
            </ul>
            <div className="service-card-footer">
              <Link className="service-link" href="/pricing">
                View Packages &rarr;
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
