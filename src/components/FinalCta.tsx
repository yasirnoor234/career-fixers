import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-content">
          <h2>Ready to Present Your Best Professional Self?</h2>
          <p>
            Give your career documents the professional structure, clarity, and ATS precision they deserve. Start with our complimentary review today.
          </p>
          <div className="final-cta-actions">
            <Link className="btn btn-white btn-lg" href="/#free-review">
              Request Free Resume Review
            </Link>
            <Link className="btn btn-outline-white btn-lg" href="/pricing">
              View Packages &amp; Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
