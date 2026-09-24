'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface TemplateModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export default function TemplateModal({ isOpen, imageSrc, title, onClose }: TemplateModalProps) {
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

  if (!isOpen) return null;

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
      <div className="modal-dialog">
        <div className="modal-header">
          <h3 className="modal-title" id="modalTitle">{title}</h3>
          <button className="modal-close-btn" type="button" aria-label="Close modal preview" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-image-wrap">
          <Image
            id="modalImage"
            src={imageSrc}
            alt={title}
            width={800}
            height={1130}
            style={{ width: 'auto', height: 'auto', maxHeight: '75vh' }}
          />
        </div>
      </div>
    </div>
  );
}
