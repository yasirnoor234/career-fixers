'use client';

import { useState } from 'react';
import Image from 'next/image';
import TemplateModal from './TemplateModal';

interface SampleItem {
  id: string;
  category: string;
  title: string;
  roleTitle: string;
  description: string;
  page1Src: string;
  page2Src: string;
  tags: string[];
}

export default function SamplesGallery() {
  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(null);

  const samples: SampleItem[] = [
    {
      id: 'executive-classic',
      category: 'Executive / Leadership',
      title: 'Executive Classic',
      roleTitle: 'Senior Payroll Manager',
      description:
        'A structured, authoritative 2-page leadership design delivering instant visibility to value proposition, core proficiencies, multi-jurisdictional operations, and career progression.',
      page1Src: '/images/executive-classic-page-1.png',
      page2Src: '/images/executive-classic-page-2.png',
      tags: ['2-Page Resume', 'Leadership', 'High Contrast'],
    },
    {
      id: 'executive-branding',
      category: 'Executive / Personal Brand',
      title: 'Executive Branding',
      roleTitle: 'Senior Product Management Professional',
      description:
        'A powerful 2-page branded presentation built around target-role positioning, core proficiencies, enterprise product leadership, and technical competencies.',
      page1Src: '/images/executive-branding-page-1.png',
      page2Src: '/images/executive-branding-page-2.png',
      tags: ['2-Page Resume', 'Personal Brand', 'Strategic Impact'],
    },
    {
      id: 'clean-professional',
      category: 'Professional / Management',
      title: 'Clean Professional',
      roleTitle: 'Sales & Business Development Leader',
      description:
        'A minimal, highly scannable 2-page format highlighting core proficiencies, signature accomplishments, chronological revenue impact, and educational credentials.',
      page1Src: '/images/clean-professional-page-1.png',
      page2Src: '/images/clean-professional-page-2.png',
      tags: ['2-Page Resume', 'ATS-Optimized', 'Universal Fit'],
    },
  ];

  return (
    <section className="samples-section" id="resume-samples">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Proven Visual Architecture</div>
          <h2 className="section-title">Sample 2-Page Resume Designs for Different Career Stories</h2>
          <p className="section-subtitle">
            Exceptional writing comes first, but visual hierarchy commands attention. Explore our complete 2-page presentation styles below—click any resume to open Page 1 and Page 2 side by side.
          </p>
        </div>

        <div className="samples-grid">
          {samples.map((sample) => (
            <article key={sample.id} className="sample-card">
              <div
                className="sample-preview sample-preview-two-page"
                tabIndex={0}
                role="button"
                aria-label={`Open ${sample.title} (${sample.roleTitle}) Page 1 and Page 2 together`}
                onClick={() => setSelectedSample(sample)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSample(sample);
                  }
                }}
              >
                <div className="sample-pages-stack">
                  <div className="sample-page-item">
                    <div className="sample-page-label">
                      <span>Page 1</span>
                      <span>{sample.roleTitle}</span>
                    </div>
                    <Image
                      src={sample.page1Src}
                      alt={`${sample.title} - ${sample.roleTitle} Page 1`}
                      width={850}
                      height={1100}
                      unoptimized
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>

                  <div className="sample-page-item">
                    <div className="sample-page-label">
                      <span>Page 2</span>
                      <span>Continued</span>
                    </div>
                    <Image
                      src={sample.page2Src}
                      alt={`${sample.title} - ${sample.roleTitle} Page 2`}
                      width={850}
                      height={1100}
                      unoptimized
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>

                <div className="sample-enlarge-bar">
                  <span className="sample-overlay-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    Click to Open Page 1 &amp; Page 2 Together
                  </span>
                </div>
              </div>

              <div className="sample-body">
                <span className="sample-category">{sample.category}</span>
                <h3>{sample.title}</h3>
                <div className="sample-role-subtitle">{sample.roleTitle}</div>
                <p>{sample.description}</p>
                <div className="sample-tags">
                  {sample.tags.map((tag) => (
                    <span key={tag} className="sample-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <TemplateModal
        isOpen={!!selectedSample}
        pages={selectedSample ? [selectedSample.page1Src, selectedSample.page2Src] : []}
        title={selectedSample?.title || 'Resume Preview'}
        roleTitle={selectedSample?.roleTitle}
        onClose={() => setSelectedSample(null)}
      />
    </section>
  );
}
