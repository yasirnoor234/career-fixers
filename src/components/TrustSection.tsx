export default function TrustSection() {
  return (
    <section className="trust-section" aria-label="Trust and Statistics">
      <div className="container">
        <h2 className="trust-heading-compact">Built for Today&apos;s Competitive Hiring Process</h2>

        <div className="trust-pillars">
          <div className="trust-pillar">
            <div className="trust-pillar-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>ATS-Friendly</h3>
              <p>Clean semantic structure designed to pass recruiter ATS filters seamlessly.</p>
            </div>
          </div>

          <div className="trust-pillar">
            <div className="trust-pillar-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>Professionally Structured</h3>
              <p>Engineered for the critical 6-second initial recruiter scan.</p>
            </div>
          </div>

          <div className="trust-pillar">
            <div className="trust-pillar-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>Recruiter-Focused</h3>
              <p>Quantified achievements and metrics that prove tangible business value.</p>
            </div>
          </div>

          <div className="trust-pillar">
            <div className="trust-pillar-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>Tailored to Your Career</h3>
              <p>Customized positioning aligned with your specific target roles and industry.</p>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">20,000+</div>
            <div className="stat-label">Resumes Written</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">4.9 / 5.0</div>
            <div className="stat-label">Average Client Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100%</div>
            <div className="stat-label">U.S.-Based Writers</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">60-Day</div>
            <div className="stat-label">Interview Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
