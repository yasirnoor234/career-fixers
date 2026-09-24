export default function ProblemSection() {
  return (
    <section className="problem-section" id="why-it-matters">
      <div className="container">
        <div className="section-head">
          <div className="kicker">The Reality of Job Searching</div>
          <h2 className="section-title">A Strong Career Can Still Be Hidden Behind a Weak Resume</h2>
          <p className="section-subtitle">
            The obstacle is rarely your capability or past experience. It is almost always how that experience is structured, worded, and presented to decision makers.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-card-icon" style={{ marginBottom: '16px', background: 'rgba(220, 38, 38, 0.08)', color: '#DC2626', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p>&ldquo;I am fully qualified for the positions I want, but I am barely getting callbacks or screening calls.&rdquo;</p>
          </div>

          <div className="problem-card">
            <div className="problem-card-icon" style={{ marginBottom: '16px', background: 'rgba(234, 88, 12, 0.08)', color: '#EA580C', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <p>&ldquo;My resume reads like an exhausting list of daily tasks rather than showcasing what I actually achieved.&rdquo;</p>
          </div>

          <div className="problem-card">
            <div className="problem-card-icon" style={{ marginBottom: '16px', background: 'rgba(37, 99, 235, 0.08)', color: '#2563EB', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <p>&ldquo;I have grown into senior leadership responsibilities, but my resume still looks like an entry-level layout.&rdquo;</p>
          </div>

          <div className="problem-card">
            <div className="problem-card-icon" style={{ marginBottom: '16px', background: 'rgba(197, 155, 78, 0.12)', color: '#B58A3E', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p>&ldquo;I am switching industries or targeting executive roles and do not know how to reposition my transferable skills.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
