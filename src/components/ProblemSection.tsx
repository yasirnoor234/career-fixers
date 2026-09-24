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
          {/* Card 1 */}
          <div className="problem-card">
            <div className="problem-card-header">
              <span className="problem-tag tag-rose">ATS Filter Black Hole</span>
              <div className="problem-card-icon icon-rose" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            </div>
            <div className="problem-quote-box">
              <span className="quote-mark">&ldquo;</span>
              <p>I am fully qualified for the positions I apply to, but I am barely getting callbacks or recruiter screening calls.</p>
            </div>
            <div className="problem-solution-pill">
              <span className="solution-check">&check;</span>
              <span>99% ATS Keyword &amp; Header Mapping</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="problem-card">
            <div className="problem-card-header">
              <span className="problem-tag tag-amber">Duty-Heavy, Metric-Light</span>
              <div className="problem-card-icon icon-amber" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
            </div>
            <div className="problem-quote-box">
              <span className="quote-mark">&ldquo;</span>
              <p>My resume reads like an exhausting list of daily tasks rather than showcasing what I actually achieved for the company.</p>
            </div>
            <div className="problem-solution-pill">
              <span className="solution-check">&check;</span>
              <span>Quantified Revenue &amp; Efficiency ROI</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="problem-card">
            <div className="problem-card-header">
              <span className="problem-tag tag-blue">Seniority Under-Positioned</span>
              <div className="problem-card-icon icon-blue" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="problem-quote-box">
              <span className="quote-mark">&ldquo;</span>
              <p>I have grown into senior leadership responsibilities, but my resume still looks like an entry-level layout.</p>
            </div>
            <div className="problem-solution-pill">
              <span className="solution-check">&check;</span>
              <span>Executive Scope &amp; Strategic Narrative</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="problem-card">
            <div className="problem-card-header">
              <span className="problem-tag tag-gold">Career Pivot &amp; Transition Gap</span>
              <div className="problem-card-icon icon-gold" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
            <div className="problem-quote-box">
              <span className="quote-mark">&ldquo;</span>
              <p>I am switching industries or targeting new domains and do not know how to reposition my transferable competencies.</p>
            </div>
            <div className="problem-solution-pill">
              <span className="solution-check">&check;</span>
              <span>Transferable Skill &amp; Domain Alignment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
