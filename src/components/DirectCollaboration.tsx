import Link from 'next/link';

export default function DirectCollaboration() {
  return (
    <section className="consultant-section">
      <div className="container">
        <div className="consultant-box">
          <div className="consultant-visual">
            <span className="consultant-badge">Human Expertise</span>
            <h3>Direct Writer Collaboration</h3>
            <p>You work directly with dedicated career writers throughout the drafting and revision cycle.</p>
            <div className="consultant-tags">
              <span className="consultant-tag">100% US-Based</span>
              <span className="consultant-tag">ATS Certified</span>
              <span className="consultant-tag">Unlimited Edits</span>
              <span className="consultant-tag">Direct Email Access</span>
            </div>
          </div>

          <div className="consultant-content">
            <div className="kicker">No Anonymous Queues</div>
            <h2>Your Career Isn&apos;t Processed by an Impersonal Algorithm</h2>
            <p>
              Many online services send your details to offshore writing pools or unverified chatbots. At Career Fixers, every engagement is guided directly by our Managing Partners, <strong>Farah Sheikh</strong> and <strong>Suban Khalid</strong>, ensuring your background and target goals are translated into high-impact executive career documents.
            </p>

            <div className="consultant-features">
              <div className="consultant-feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Role-Specific Strategy</strong>
                  <span>Targeted around your exact job postings.</span>
                </div>
              </div>

              <div className="consultant-feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong>Pay Only When Satisfied</strong>
                  <span>Unlimited revisions until you are 100% confident.</span>
                </div>
              </div>
            </div>

            <Link className="btn btn-primary" href="/#free-review">
              Start with a Free Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
