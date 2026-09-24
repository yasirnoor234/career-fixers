'use client';

import React from 'react';

interface Recommendation {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  quote: React.ReactNode;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    name: 'Bree Oleson',
    role: 'Experienced Sr. HR Generalist',
    initials: 'BO',
    avatarColor: '#4F46E5',
    quote: (
      <>
        &ldquo;Suban was very helpful with the latest version of my resume. I{' '}
        <strong>highly recommend</strong> doing a consultation with him.&rdquo;
      </>
    ),
  },
  {
    id: 2,
    name: 'Jason Sloan',
    role: 'General Superintendent at EHCP',
    initials: 'JS',
    avatarColor: '#0D9488',
    quote: (
      <>
        &ldquo;He took the time to understand my experience and career direction, then translated that into a{' '}
        <strong>clear, well-structured, and highly professional resume</strong>.&rdquo;
      </>
    ),
  },
  {
    id: 3,
    name: 'LaCrisha Davis',
    role: 'Mortgage Operations, Sales & Compliance Leader',
    initials: 'LD',
    avatarColor: '#B45309',
    quote: (
      <>
        &ldquo;Suban was <strong>professional, attentive</strong>, and did more than simply reformats my resume—he helped me identify my strengths and present my experience in a way that better positions me.&rdquo;
      </>
    ),
  },
  {
    id: 4,
    name: 'Emma Anderson-White',
    role: 'Operations & Talent Development Manager',
    initials: 'EA',
    avatarColor: '#2563EB',
    quote: (
      <>
        &ldquo;Suban has been <strong>outstanding with his continued support</strong> with my CV, cover letters and LinkedIn profile during my transition out of the military and entering the civilian world.&rdquo;
      </>
    ),
  },
  {
    id: 5,
    name: 'Shaun McFarland',
    role: 'Recruitment & Community Specialist @ BackStretch',
    initials: 'SM',
    avatarColor: '#059669',
    quote: (
      <>
        &ldquo;I would <strong>highly recommend Suban!</strong> He was incredibly professional, kind and approachable, and provided great suggestions to polish my resume and LinkedIn profile.&rdquo;
      </>
    ),
  },
  {
    id: 6,
    name: 'Shiren Mathai',
    role: 'Director of Product Management',
    initials: 'SM',
    avatarColor: '#7C3AED',
    quote: (
      <>
        &ldquo;Suban brought my resume up to the most current standards. His insights were very helpful and led me to a <strong>more modern, ATS-ready resume</strong>.&rdquo;
      </>
    ),
  },
  {
    id: 7,
    name: 'Chaz Allen',
    role: 'Executive Director, Customer Operations & Experience',
    initials: 'CA',
    avatarColor: '#D97706',
    quote: (
      <>
        &ldquo;Suban did an <strong>amazing job</strong> rewriting my resume, cover letter and updating my profile. He was very professional, had great attention to detail and asked the right questions to understand my goals.&rdquo;
      </>
    ),
  },
  {
    id: 8,
    name: 'Christopher DeGenova',
    role: 'General Manager | Revenue-Driven Hospitality Leader',
    initials: 'CD',
    avatarColor: '#475569',
    quote: (
      <>
        &ldquo;I had a <strong>very positive experience</strong>. He communicated clearly, delivered everything on time, and provided quality work throughout the process. I would definitely recommend him to anyone looking to update their resume.&rdquo;
      </>
    ),
  },
  {
    id: 9,
    name: 'Maurice Cook',
    role: 'Enterprise Operations & Service Transformation Leader',
    initials: 'MC',
    avatarColor: '#1E293B',
    quote: (
      <>
        &ldquo;I couldn&apos;t be more impressed with the outcome. His ability to translate years of experience into a <strong>compelling, polished, and strategically positioned narrative</strong> was exceptional.&rdquo;
      </>
    ),
  },
  {
    id: 10,
    name: 'Ronnie McLaughlin, M.Ed.',
    role: 'Chief Operations Officer | Executive Director',
    initials: 'RM',
    avatarColor: '#0284C7',
    quote: (
      <>
        &ldquo;Without any reservation I <strong>highly recommend Suban one thousand times over</strong>. He is professional, insightful, integral and extremely efficient. Suban treats every client with outstanding customer service.&rdquo;
      </>
    ),
  },
  {
    id: 11,
    name: 'Danai Malianga-Torrence CF APMP',
    role: 'Customer Experience Officer',
    initials: 'DM',
    avatarColor: '#9333EA',
    quote: (
      <>
        &ldquo;If you need more than a cosmetic update, Suban is the person to call. I received a <strong>complete strategic repositioning</strong> of my experience. He understood my industry and translated 15+ years of complex work into a powerful narrative.&rdquo;
      </>
    ),
  },
  {
    id: 12,
    name: 'Karen Buckley',
    role: 'Business Development Leader',
    initials: 'KB',
    avatarColor: '#0D9488',
    quote: (
      <>
        &ldquo;Suban helped me update my resume and include key information across my career. A few months later, he helped me update my LinkedIn page. I&apos;m <strong>very happy with the results</strong> and would recommend him for anyone looking for similar services.&rdquo;
      </>
    ),
  },
];

export default function ClientRecommendations() {
  return (
    <section className="client-recommendations-section" id="recommendations">
      <div className="container">
        {/* Header matching design layout */}
        <div className="recommendations-header-row">
          <div className="recommendations-brand-kicker">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Stronger Professionals &bull; Brighter Futures</span>
          </div>

          <div className="recommendations-main-header">
            <h2 className="recommendations-title">Client Recommendations</h2>
            <p className="recommendations-subtitle">
              LinkedIn feedback on resume writing, LinkedIn optimization, and career support
            </p>
          </div>

          <div className="recommendations-tagline-badge">
            <span className="recommendations-script-accent">Real People &bull; Real Progress</span>
            <div className="recommendations-linkedin-verified">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>Verified LinkedIn Reviews</span>
            </div>
          </div>
        </div>

        {/* Recommendations 4-column Grid */}
        <div className="recommendations-grid">
          {recommendations.map((item) => (
            <article key={item.id} className="recommendation-card">
              <div className="recommendation-top">
                <div className="recommendation-person">
                  <div
                    className="recommendation-avatar"
                    style={{
                      background: `linear-gradient(135deg, ${item.avatarColor}, #0F172A)`,
                    }}
                    aria-hidden="true"
                  >
                    {item.initials}
                  </div>
                  <div className="recommendation-meta">
                    <h3 className="recommendation-name">{item.name}</h3>
                    <p className="recommendation-role">{item.role}</p>
                  </div>
                </div>
                <div className="recommendation-quote-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <p className="recommendation-text">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
