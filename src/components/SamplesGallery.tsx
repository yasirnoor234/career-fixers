'use client';

import { useState } from 'react';
import Image from 'next/image';
import TemplateModal from './TemplateModal';

interface SampleItem {
  id: string;
  category: string;
  title: string;
  description: string;
  src: string;
  tags: string[];
}

export default function SamplesGallery() {
  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(null);

  const samples: SampleItem[] = [
    {
      id: 'executive-classic',
      category: 'Executive / Leadership',
      title: 'Executive Classic',
      description: 'A structured, authoritative leadership design delivering instant visibility to value proposition, core proficiencies, and career progression.',
      src: '/images/executive-classic.png',
      tags: ['Leadership', 'P&L Scope', 'High Contrast'],
    },
    {
      id: 'executive-branding',
      category: 'Executive / Personal Brand',
      title: 'Executive Branding',
      description: 'A powerful branded presentation built around target-role keywords, signature career wins, competencies, and senior management milestones.',
      src: '/images/executive-branding.png',
      tags: ['Personal Brand', 'Competencies', 'Strategic Impact'],
    },
    {
      id: 'clean-professional',
      category: 'Professional / Management',
      title: 'Clean Professional',
      description: 'A minimal, highly scannable format highlighting core proficiencies, chronological impact, technical skills, and educational credentials.',
      src: '/images/clean-professional.png',
      tags: ['Minimalist', 'ATS-Optimized', 'Universal Fit'],
    },
  ];

  return (
    <section className="samples-section" id="resume-samples">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Proven Visual Architecture</div>
          <h2 className="section-title">Sample Resume Designs for Different Career Stories</h2>
          <p className="section-subtitle">
            Exceptional writing comes first, but visual hierarchy commands attention. Explore our battle-tested presentation styles tailored to modern hiring expectations.
          </p>
        </div>

        <div className="samples-grid">
          {samples.map((sample) => (
            <article key={sample.id} className="sample-card">
              <div
                className="sample-preview"
                tabIndex={0}
                role="button"
                aria-label={`Preview ${sample.title} resume sample`}
                onClick={() => setSelectedSample(sample)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSample(sample);
                  }
                }}
              >
                <Image
                  src={sample.src}
                  alt={`${sample.title} preview`}
                  width={600}
                  height={850}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="sample-overlay">
                  <span className="sample-overlay-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    Click to Enlarge
                  </span>
                </div>
              </div>
              <div className="sample-body">
                <span className="sample-category">{sample.category}</span>
                <h3>{sample.title}</h3>
                <p>{sample.description}</p>
                <div className="sample-tags">
                  {sample.tags.map((tag) => (
                    <span key={tag} className="sample-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <TemplateModal
        isOpen={!!selectedSample}
        imageSrc={selectedSample?.src || ''}
        title={selectedSample?.title || 'Resume Preview'}
        onClose={() => setSelectedSample(null)}
      />
    </section>
  );
}
