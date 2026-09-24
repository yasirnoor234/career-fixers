'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'entry' | 'mid' | 'exec'>('mid');

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Transparent Pricing</div>
          <h2 className="section-title">Simple Packages, No Hidden Fees</h2>
          <p className="section-subtitle">
            Choose the package matching your experience level. Every full package includes your ATS resume, LinkedIn profile makeover, and customized cover letter.
          </p>
        </div>

        <div className="pricing-tabs-wrapper">
          <div className="pricing-nav-tabs" role="tablist" aria-label="Career Level Pricing Tabs">
            <button
              type="button"
              className={`pricing-nav-tab ${activeTab === 'entry' ? 'is-active' : ''}`}
              role="tab"
              id="tab-entry"
              aria-selected={activeTab === 'entry'}
              onClick={() => setActiveTab('entry')}
            >
              Entry Level
            </button>
            <button
              type="button"
              className={`pricing-nav-tab ${activeTab === 'mid' ? 'is-active' : ''}`}
              role="tab"
              id="tab-mid"
              aria-selected={activeTab === 'mid'}
              onClick={() => setActiveTab('mid')}
            >
              Mid Career
            </button>
            <button
              type="button"
              className={`pricing-nav-tab ${activeTab === 'exec' ? 'is-active' : ''}`}
              role="tab"
              id="tab-exec"
              aria-selected={activeTab === 'exec'}
              onClick={() => setActiveTab('exec')}
            >
              Executive Level
            </button>
          </div>

          <div className="pricing-cards-container">
            {/* Entry Card */}
            {activeTab === 'entry' && (
              <article className="pricing-card" data-price-tab="entry" style={{ gridColumn: '1 / -1', maxWidth: '520px', margin: '0 auto', width: '100%' }}>
                <div className="pricing-tier-name">Entry Level Package</div>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">150</span>
                  <span className="price-period">/ total bundle</span>
                </div>
                <p className="pricing-description">
                  Ideal for recent graduates and early-career professionals with up to 3 years of experience.
                </p>

                <div className="pricing-breakdown">
                  <div className="breakdown-row"><span>Resume Rewrite</span><strong>$75</strong></div>
                  <div className="breakdown-row"><span>LinkedIn Profile</span><strong>$50</strong></div>
                  <div className="breakdown-row"><span>Custom Cover Letter</span><strong>$25</strong></div>
                </div>

                <div className="pricing-includes">
                  <div className="pricing-includes-title">What is included:</div>
                  <ul>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      ATS-optimized resume
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Targeted cover letter
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      LinkedIn optimization guide
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Unlimited revisions
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Word &amp; PDF delivery
                    </li>
                  </ul>
                </div>

                <Link className="btn btn-primary btn-block" href="/#free-review">
                  Get Started
                </Link>
              </article>
            )}

            {/* Mid Career Card */}
            {activeTab === 'mid' && (
              <article className="pricing-card is-popular" data-price-tab="mid" style={{ gridColumn: '1 / -1', maxWidth: '520px', margin: '0 auto', width: '100%' }}>
                <span className="popular-badge">Most Popular</span>
                <div className="pricing-tier-name">Mid-Career Package</div>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">200</span>
                  <span className="price-period">/ total bundle</span>
                </div>
                <p className="pricing-description">
                  Engineered for experienced specialists and managers aiming to accelerate their career and salary.
                </p>

                <div className="pricing-breakdown">
                  <div className="breakdown-row"><span>Resume Rewrite</span><strong>$100</strong></div>
                  <div className="breakdown-row"><span>LinkedIn Profile</span><strong>$70</strong></div>
                  <div className="breakdown-row"><span>Custom Cover Letter</span><strong>$30</strong></div>
                </div>

                <div className="pricing-includes">
                  <div className="pricing-includes-title">What is included:</div>
                  <ul>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Achievement-focused ATS resume
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Tailored strategic cover letter
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Full LinkedIn profile overhaul
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Unlimited revisions
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      60-day interview guarantee
                    </li>
                  </ul>
                </div>

                <Link className="btn btn-brand btn-block" href="/#free-review">
                  Get Started
                </Link>
              </article>
            )}

            {/* Executive Card */}
            {activeTab === 'exec' && (
              <article className="pricing-card" data-price-tab="exec" style={{ gridColumn: '1 / -1', maxWidth: '520px', margin: '0 auto', width: '100%' }}>
                <div className="pricing-tier-name">Executive Package</div>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">250</span>
                  <span className="price-period">/ total bundle</span>
                </div>
                <p className="pricing-description">
                  Tailored for senior directors, VPs, and C-Suite executives requiring board-ready presentation.
                </p>

                <div className="pricing-breakdown">
                  <div className="breakdown-row"><span>Resume / CV</span><strong>$150</strong></div>
                  <div className="breakdown-row"><span>LinkedIn Branding</span><strong>$70</strong></div>
                  <div className="breakdown-row"><span>Executive Letter</span><strong>$30</strong></div>
                </div>

                <div className="pricing-includes">
                  <div className="pricing-includes-title">What is included:</div>
                  <ul>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Executive narrative &amp; P&amp;L branding
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Board &amp; recruiter-targeted letter
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Executive LinkedIn makeover
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Direct senior consultant pairing
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      6-month job offer guarantee
                    </li>
                  </ul>
                </div>

                <Link className="btn btn-primary btn-block" href="/#free-review">
                  Get Started
                </Link>
              </article>
            )}
          </div>

          <p className="pricing-guarantee-note">
            Unsure which package fits your career history?{' '}
            <Link href="/#free-review" style={{ color: 'var(--color-brand)', fontWeight: 700 }}>
              Start with a Free Resume Review
            </Link>{' '}
            and we will advise you honestly.
          </p>
        </div>
      </div>
    </section>
  );
}
