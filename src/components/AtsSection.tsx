export default function AtsSection() {
  return (
    <section className="ats-section" id="ats-optimization">
      <div className="container">
        <div className="section-head">
          <div className="kicker">ATS &amp; Recruiter Science</div>
          <h2 className="section-title">Designed for Both Recruiters and Applicant Tracking Systems</h2>
          <p className="section-subtitle">
            Over 95% of Fortune 500 companies use Applicant Tracking Systems (ATS) to parse and screen candidates before a human recruiter ever sees a resume. We format your documents to pass algorithms while instantly engaging human hiring managers.
          </p>
        </div>

        <div className="ats-comparison-grid">
          {/* Poor Resume Card */}
          <div className="comparison-card card-bad">
            <div className="comparison-header">
              <div className="comparison-status">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <span>Typical Weak Resume</span>
              </div>
              <span className="comparison-badge">High Rejection Risk</span>
            </div>

            <div className="comparison-preview">
              <p style={{ color: '#64748B', marginBottom: '8px' }}>
                <strong>SUMMARY:</strong> Hardworking team player with excellent communication skills looking for a position to grow.
              </p>
              <p style={{ color: '#64748B', marginBottom: '8px' }}>
                <strong>EXPERIENCE:</strong>
              </p>
              <p style={{ color: '#94A3B8', fontSize: '0.75rem' }}>
                • Responsible for managing customer accounts and handling emails.<br />
                • Worked on several sales campaigns and helped teammates.<br />
                • Attended daily meetings and filed weekly reports.
              </p>
            </div>

            <div className="comparison-points">
              <div className="comparison-point">
                <span className="point-icon">&times;</span>
                <span><strong>Dense text walls:</strong> Unfriendly to automated parsers and quickly skipped by human recruiters.</span>
              </div>
              <div className="comparison-point">
                <span className="point-icon">&times;</span>
                <span><strong>Vague responsibilities:</strong> Explains what you were assigned, not what you actually accomplished.</span>
              </div>
              <div className="comparison-point">
                <span className="point-icon">&times;</span>
                <span><strong>Missing role keywords:</strong> Fails automated keyword matching algorithms and screening filters.</span>
              </div>
            </div>
          </div>

          {/* ATS-Optimized Resume Card */}
          <div className="comparison-card card-good">
            <div className="comparison-header">
              <div className="comparison-status">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span>Career Fixers ATS-Optimized</span>
              </div>
              <span className="comparison-badge">Recruiter &amp; ATS Verified</span>
            </div>

            <div className="comparison-preview">
              <p style={{ color: '#0F172A', marginBottom: '8px' }}>
                <strong>PROFESSIONAL SUMMARY:</strong> Senior Account Executive with 7+ years directing B2B enterprise sales, driving $4.2M in annual recurring revenue across SaaS portfolios.
              </p>
              <p style={{ color: '#0F172A', marginBottom: '8px' }}>
                <strong>KEY ACHIEVEMENTS:</strong>
              </p>
              <p style={{ color: '#2563EB', fontSize: '0.75rem' }}>
                • Scaled account retention from 81% to 96% YoY across 45 key accounts.<br />
                • Spearheaded pipeline development generating $1.8M in net-new pipeline.<br />
                • Awarded Top Sales Performer (2024 &amp; 2025) out of 85 global reps.
              </p>
            </div>

            <div className="comparison-points">
              <div className="comparison-point">
                <span className="point-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Quantified metrics:</strong> Highlights dollar amounts, percentages, and leadership scale immediately.</span>
              </div>
              <div className="comparison-point">
                <span className="point-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Standard semantic headers:</strong> Guaranteed compatibility with Taleo, Workday, Greenhouse, and Lever.</span>
              </div>
              <div className="comparison-point">
                <span className="point-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Targeted keyword density:</strong> Perfectly matched to your target industry and job requisitions.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
