export default function TrustSection() {
  return (
    <section className="trust-section" aria-label="Trust and Statistics">
      <div className="container">
        <div className="trust-head">
          <span className="kicker" style={{ marginBottom: '12px' }}>Proven Track Record</span>
          <h2 className="trust-heading-compact">Built for Today&apos;s Competitive Hiring Process</h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="trust-pillars">
          {/* Pillar 1 */}
          <div className="trust-pillar">
            <div className="trust-pillar-icon icon-blue" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>ATS-Friendly Architecture</h3>
              <p>Clean semantic structure designed to pass recruiter ATS filters without data corruption.</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="trust-pillar">
            <div className="trust-pillar-icon icon-emerald" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>Professionally Structured</h3>
              <p>Engineered for the critical 6-second initial recruiter scan to hook hiring managers.</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="trust-pillar">
            <div className="trust-pillar-icon icon-gold" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>Recruiter-Focused Metrics</h3>
              <p>Quantified achievements, revenue gains, and efficiency metrics that prove business impact.</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="trust-pillar">
            <div className="trust-pillar-icon icon-indigo" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <div className="trust-pillar-content">
              <h3>Tailored to Your Target Role</h3>
              <p>Customized positioning aligned directly with your target seniority level and industry.</p>
            </div>
          </div>
        </div>

        {/* Premium Stats Strip Container */}
        <div className="stats-strip-container">
          <div className="stat-card">
            <div className="stat-badge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="stat-value">20,000+</div>
            <div className="stat-label">Resumes Written &amp; Optimized</div>
          </div>

          <div className="stat-card">
            <div className="stat-stars-row" aria-label="5 out of 5 rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C59B4E" stroke="#C59B4E">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="stat-value">4.9 / 5.0</div>
            <div className="stat-label">Average Client Satisfaction</div>
          </div>

          <div className="stat-card">
            <div className="stat-badge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="stat-value">100%</div>
            <div className="stat-label">U.S.-Based Career Strategists</div>
          </div>

          <div className="stat-card">
            <div className="stat-badge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="stat-value">60-Day</div>
            <div className="stat-label">Interview Callback Guarantee</div>
          </div>
        </div>

      </div>
    </section>
  );
}
