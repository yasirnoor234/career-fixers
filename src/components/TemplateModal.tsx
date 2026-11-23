'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface TemplateModalProps {
  isOpen: boolean;
  pages: string[];
  title: string;
  roleTitle?: string;
  onClose: () => void;
}

export default function TemplateModal({
  isOpen,
  pages,
  title,
  roleTitle,
  onClose,
}: TemplateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || pages.length === 0) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-two-page">
        <div className="modal-header">
          <div>
            <h3 className="modal-title" id="modalTitle">
              {title} {roleTitle ? `— ${roleTitle}` : ''}
            </h3>
            <span className="modal-subtitle">Full 2-Page Resume View (Page 1 &amp; Page 2)</span>
          </div>
          <button
            className="modal-close-btn"
            type="button"
            aria-label="Close modal preview"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-image-wrap modal-two-pages-wrap">
          <div className="modal-pages-grid">
            {pages.map((src, idx) => (
              <div key={src} className="modal-page-sheet">
                <div className="modal-page-badge">Page {idx + 1} of {pages.length}</div>
                <Image
                  src={src}
                  alt={`${title} - Page ${idx + 1}`}
                  width={850}
                  height={1100}
                  unoptimized
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
