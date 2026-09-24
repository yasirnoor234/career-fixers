'use client';

import { useState, useRef, DragEvent, ChangeEvent, FormEvent } from 'react';

interface FreeReviewFormProps {
  idPrefix?: string;
  isCompact?: boolean;
}

export default function FreeReviewForm({ idPrefix = 'hero', isCompact = false }: FreeReviewFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [target, setTarget] = useState('');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      if (fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please provide both your name and a valid email address.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter a valid email address (e.g., name@example.com).',
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const submission = {
      name,
      email,
      target,
      notes: notes ? `${notes} (Uploaded: ${fileName || 'None'})` : `Uploaded File: ${fileName || 'None'}`,
      type: 'free-review',
    };

    try {
      // Local backup
      const stored = JSON.parse(localStorage.getItem('careerFixersSubmissions') || '[]');
      stored.push({ ...submission, submittedAt: new Date().toISOString() });
      localStorage.setItem('careerFixersSubmissions', JSON.stringify(stored));

      // Send to server API endpoint for email delivery to ceo.careerfixers@gmail.com
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });

      if (!res.ok) {
        console.warn('Email dispatch warning:', await res.text());
      }
    } catch (err) {
      console.warn('Submission network notice:', err);
    } finally {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: `Thank you, ${name}! Your resume review request has been received. Our senior writing team will review your details and follow up via ${email}.`,
      });

      setName('');
      setEmail('');
      setTarget('');
      setNotes('');
      setFileName('');
    }
  };

  return (
    <form className="resume-review-form" onSubmit={handleSubmit} aria-label="Free Resume Review Form">
      <label
        className="upload-dropzone"
        htmlFor={`${idPrefix}ResumeFile`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          borderColor: isDragging ? 'var(--color-brand)' : undefined,
          background: isDragging ? '#E0E7FF' : undefined,
        }}
      >
        <div className="upload-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        <strong className="upload-title">
          {fileName ? `Selected: ${fileName}` : 'Upload your current resume'}
        </strong>
        <span className="upload-subtitle">Accepts PDF, DOCX, or DOC</span>
      </label>
      <input
        id={`${idPrefix}ResumeFile`}
        name="resume"
        type="file"
        accept=".pdf,.doc,.docx"
        className="sr-only"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <div className="form-grid">
        <div className="form-group">
          <label className="sr-only" htmlFor={`${idPrefix}Name`}>Your Full Name</label>
          <input
            id={`${idPrefix}Name`}
            name="name"
            type="text"
            autoComplete="name"
            className="form-control"
            placeholder="Your full name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor={`${idPrefix}Email`}>Email Address</label>
          <input
            id={`${idPrefix}Email`}
            name="email"
            type="email"
            autoComplete="email"
            className="form-control"
            placeholder="Email address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor={`${idPrefix}Target`}>Target Role or Job Title</label>
        <input
          id={`${idPrefix}Target`}
          name="target"
          type="text"
          className="form-control"
          placeholder="Target role or desired job title"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
      </div>

      {!isCompact && (
        <div className="form-group">
          <label className="sr-only" htmlFor={`${idPrefix}Notes`}>Career Notes &amp; Target Links</label>
          <textarea
            id={`${idPrefix}Notes`}
            name="notes"
            className="form-control"
            placeholder="Optional: paste target job links or career challenges you want to solve"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
      )}

      <button className="btn btn-brand btn-block" type="submit">
        <span>Request My Free Review</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {statusMessage && (
        <div className={`form-alert is-${statusMessage.type}`} role="status" aria-live="polite">
          {statusMessage.text}
        </div>
      )}

      <p className="form-disclaimer">
        No payment required. Your information remains completely confidential and is reviewed solely by our writing staff.
      </p>
    </form>
  );
}
