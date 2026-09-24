export default function CareerLevelsSection() {
  return (
    <section className="levels-section" id="career-levels">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Tailored Positioning</div>
          <h2 className="section-title">Different Career Levels Require Different Strategies</h2>
          <p className="section-subtitle">
            An executive leadership dossier requires a completely different narrative than an entry-level resume. We calibrate tone, scope, and metrics for your exact tier.
          </p>
        </div>

        <div className="levels-grid">
          <div className="level-card">
            <div className="level-badge-emblem" aria-hidden="true">P</div>
            <h3>Entry &amp; Early Career</h3>
            <p>
              For graduates and emerging professionals establishing authority, highlighting academic honors, internships, and rapid adaptability.
            </p>
            <ul className="level-bullets">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Clean foundational ATS architecture</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Transferable skills &amp; project impact</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Package starts at just $150</span>
              </li>
            </ul>
          </div>

          <div className="level-card">
            <div className="level-badge-emblem" aria-hidden="true">M</div>
            <h3>Mid-Career &amp; Management</h3>
            <p>
              For senior specialists, managers, and team leads who need their operational impact, team leadership, and revenue growth to stand out.
            </p>
            <ul className="level-bullets">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Leadership scope &amp; team management</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Quantified efficiency &amp; revenue metrics</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Complete package at $175</span>
              </li>
            </ul>
          </div>

          <div className="level-card">
            <div className="level-badge-emblem" aria-hidden="true">E</div>
            <h3>Executive &amp; C-Suite</h3>
            <p>
              For Directors, VPs, and C-Level executives requiring high-level strategic branding, organizational transformation, and P&amp;L narratives.
            </p>
            <ul className="level-bullets">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Board-level executive presentation</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>P&amp;L, M&amp;A, and organizational scope</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Full executive dossier at $225</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
