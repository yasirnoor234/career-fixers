'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [careerLevel, setCareerLevel] = useState('executive');
  const [notes, setNotes] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !notes.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, and Message).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter a valid business or personal email address.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const message = {
      name,
      email,
      careerLevel,
      notes,
      type: 'contact-inquiry',
    };

    try {
      const stored = JSON.parse(localStorage.getItem('careerFixersMessages') || '[]');
      stored.push({ ...message, submittedAt: new Date().toISOString() });
      localStorage.setItem('careerFixersMessages', JSON.stringify(stored));

      // Send to server API endpoint for Titan Mail delivery to suban@careerfixers.com
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });

      if (!res.ok) {
        console.warn('Contact dispatch response:', await res.text());
      }
    } catch (err) {
      console.warn('Could not complete network submission', err);
    } finally {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: `Thank you, ${name}! Your inquiry has been received. Managing Partners Farah Sheikh or Suban Khalid will respond to ${email} within 2-4 business hours.`,
      });
      setName('');
      setEmail('');
      setCareerLevel('executive');
      setNotes('');
    }
  };

  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Direct Writer Access</div>
          <h1 className="hero-title">Speak With Our Career Strategists</h1>
          <p className="hero-copy">
            Have a question about your specific career transition, executive positioning, or package options? We are here to guide you directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Direct Leadership Cards */}
            <div className="contact-info-col">
              <div className="kicker">Direct Leadership Access</div>
              <h2 className="contact-heading">Personalized Guidance From Real Professionals</h2>
              <p className="contact-lead-text">
                Whether you are an executive repositioning for a board seat or a professional seeking faster interview callbacks, our U.S.-based managing partners respond directly with actionable insights.
              </p>

              <div className="contact-leaders-stack">
                
                {/* Farah Sheikh Card */}
                <div className="contact-leader-card">
                  <div className="contact-card-top">
                    <div className="contact-avatar-emblem">FS</div>
                    <div className="contact-leader-meta">
                      <div className="contact-leader-name-row">
                        <h3>Farah Sheikh</h3>
                        <span className="leader-badge-gold">Managing Partner</span>
                      </div>
                      <div className="contact-role-sub">Executive Strategy &amp; Board Positioning</div>
                    </div>
                  </div>
                  <p className="contact-card-desc">
                    Specializes in C-suite, VP, director-level narratives, medical, and specialized technical career transformations.
                  </p>
                  <div className="contact-card-actions">
                    <a href="mailto:farah@careerfixers.com" className="contact-action-btn email-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>farah@careerfixers.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/farahsheikh-careerfixers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-action-btn linkedin-btn"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>LinkedIn Profile &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Suban Khalid Card */}
                <div className="contact-leader-card">
                  <div className="contact-card-top">
                    <div className="contact-avatar-emblem">SK</div>
                    <div className="contact-leader-meta">
                      <div className="contact-leader-name-row">
                        <h3>Suban Khalid</h3>
                        <span className="leader-badge-gold">Managing Partner</span>
                      </div>
                      <div className="contact-role-sub">Client Operations &amp; Delivery Management</div>
                    </div>
                  </div>
                  <p className="contact-card-desc">
                    Manages expedited delivery schedules, custom multi-document bundles, writer pairing, and quality assurance.
                  </p>
                  <div className="contact-card-actions">
                    <a href="mailto:suban@careerfixers.com" className="contact-action-btn email-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>suban@careerfixers.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/suban-khalid-careerfixers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-action-btn linkedin-btn"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>LinkedIn Profile &rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Company LinkedIn Banner Card */}
                <a
                  href="https://www.linkedin.com/company/careerfixers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-company-banner"
                >
                  <div className="company-banner-left">
                    <div className="company-banner-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </div>
                    <div>
                      <div className="company-banner-title">Career Fixers on LinkedIn</div>
                      <div className="company-banner-sub">Follow for career strategies, resume teardowns &amp; executive hiring trends</div>
                    </div>
                  </div>
                  <span className="company-banner-badge">Visit Page &rarr;</span>
                </a>

              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="contact-form-col">
              <div className="contact-glass-card">
                <div className="contact-form-header">
                  <div className="contact-form-header-top">
                    <span className="card-tag">Direct Inquiry</span>
                    <span className="contact-response-badge">
                      <span className="status-dot"></span> 2–4 Hr Response
                    </span>
                  </div>
                  <h2 className="contact-form-title">Send Us a Direct Message</h2>
                  <p className="contact-form-subtitle">
                    Fill out the form below and our senior career strategists will respond with direct recommendations.
                  </p>
                </div>

                <form className="contact-form-body" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-field-label" htmlFor="contact-name">
                        Your Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="form-control"
                        placeholder="e.g. Alexander Mitchell"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-field-label" htmlFor="contact-email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="form-control"
                        placeholder="e.g. alex@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-field-label" htmlFor="contact-level">
                      Target Career Level / Focus
                    </label>
                    <select
                      id="contact-level"
                      name="careerLevel"
                      className="form-control form-select"
                      value={careerLevel}
                      onChange={(e) => setCareerLevel(e.target.value)}
                    >
                      <option value="executive">Executive / C-Suite / VP ($150k - $400k+)</option>
                      <option value="senior">Senior Professional / Director / Manager</option>
                      <option value="mid">Mid-Level Professional (3-7 Years Experience)</option>
                      <option value="transition">Career Transition / Pivot</option>
                      <option value="cover-letter">Cover Letter / LinkedIn Specific</option>
                      <option value="general">General Question / Custom Bundle</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-field-label" htmlFor="contact-message">
                      How Can We Help You? <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="notes"
                      rows={5}
                      className="form-control"
                      placeholder="Tell us about your current role, target industry, or questions regarding timeline, packages, or federal formats..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-brand btn-block"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ height: '52px', fontSize: '1rem' }}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message Directly'}
                  </button>

                  <div className="contact-privacy-note">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>100% Confidential. Your details are never shared with recruiters or employers.</span>
                  </div>

                  {statusMessage && (
                    <div className={`form-alert is-${statusMessage.type}`} role="status" aria-live="polite">
                      {statusMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
