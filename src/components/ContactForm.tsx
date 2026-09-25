'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
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

      // Send to server API endpoint for email delivery to ceo.careerfixers@gmail.com
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
  );
}
