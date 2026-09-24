import Link from 'next/link';
import FreeReviewForm from './FreeReviewForm';

export default function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Human-written resume &amp; career positioning</span>
          </div>
          <h1 className="hero-title">
            Your experience is strong.
            <span className="title-accent">Your resume should prove it.</span>
          </h1>
          <p className="hero-copy">
            We turn your experience, achievements, and career goals into a professionally written resume built around the roles you actually want.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-hero-light btn-lg" href="#free-review">
              Get My Free Resume Review
            </Link>
            <Link className="btn btn-outline-white btn-lg" href="/#resume-samples">
              See Resume Samples
            </Link>
          </div>

          <div className="hero-trust-statement">
            <div className="hero-trust-bullet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% human-written</span>
            </div>
            <div className="hero-trust-bullet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>ATS-conscious</span>
            </div>
            <div className="hero-trust-bullet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Unlimited revisions</span>
            </div>
            <div className="hero-trust-bullet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Word + PDF delivery</span>
            </div>
          </div>
        </div>

        {/* Hero Form Card */}
        <div className="hero-card" id="free-review">
          <div className="hero-card-header">
            <div>
              <h2>Start with your current resume.</h2>
              <p>Upload it and tell us where you want to go next.</p>
            </div>
            <span className="hero-chip-free">FREE</span>
          </div>

          <FreeReviewForm idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}
