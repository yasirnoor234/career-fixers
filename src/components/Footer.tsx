import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Career Fixers Home">
              <div className="brand-emblem" aria-hidden="true">CF</div>
              <span className="brand-name" style={{ color: '#FFFFFF' }}>Career Fixers</span>
            </Link>
            <p className="footer-brand-copy">
              Professional, ATS-friendly career documents engineered by U.S.-based experts to help you pass screening algorithms and win executive interviews.
            </p>
            <div className="footer-trust-badges">
              <div className="footer-trust-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>60-Day Interview Guarantee</span>
              </div>
              <a
                href="https://www.linkedin.com/company/careerfixers/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-linkedin-badge"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>Company on LinkedIn &rarr;</span>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-title">Navigation</div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">All Services</Link></li>
              <li><Link href="/pricing">Packages &amp; Pricing</Link></li>
              <li><Link href="/about">About Career Fixers</Link></li>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
              <li><Link href="/contact">Contact &amp; Inquiries</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/resume-cv">Resume &amp; CV Writing</Link></li>
              <li><Link href="/cover-letter">Cover Letter Writing</Link></li>
              <li><Link href="/linkedin-optimization">LinkedIn Optimization</Link></li>
              <li><Link href="/services#executive">Executive Documents</Link></li>
              <li><Link href="/#free-review">Free Resume Review</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Leadership &amp; Direct Access</div>
            <div className="footer-contact-info">
              <div className="footer-leader-card">
                <div className="footer-leader-header">
                  <strong>Farah Sheikh</strong>
                  <span className="footer-leader-role">Managing Partner</span>
                </div>
                <div className="footer-leader-links">
                  <a href="mailto:farah@careerfixers.com" className="footer-contact-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>farah@careerfixers.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/farahsheikh-careerfixers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-linkedin-link"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="footer-leader-card">
                <div className="footer-leader-header">
                  <strong>Suban Khalid</strong>
                  <span className="footer-leader-role">Managing Partner</span>
                </div>
                <div className="footer-leader-links">
                  <a href="mailto:suban@careerfixers.com" className="footer-contact-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>suban@careerfixers.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suban-khalid-careerfixers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-linkedin-link"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Career Fixers. All rights reserved. U.S. Professional Career Documents. &bull; Copyright by{' '}
            <a
              href="https://codexvetech.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold-accent)', fontWeight: 600, textDecoration: 'underline' }}
            >
              codexvetech.com
            </a>
          </div>
          <div className="footer-legal-links">
            <Link href="/about#privacy">Privacy Policy</Link>
            <Link href="/about#terms">Terms of Service</Link>
            <Link href="/about#guarantee">Guarantee Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
