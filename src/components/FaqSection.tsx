'use client';

import { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is the initial resume review really 100% free?',
    answer:
      'Yes, absolutely. Our initial review is completely free with no obligation to purchase. We review your document\'s formatting, ATS compatibility, bullet strength, and recruiter readability, and share honest feedback before you decide whether you need our writing service.',
  },
  {
    id: 'faq-2',
    question: 'Will my resume be written by artificial intelligence?',
    answer:
      'No. Career Fixers provides a 100% human-written, personalized service. While we test ATS compatibility using modern parsing software, every sentence, headline, and bullet is crafted by seasoned professional writers based in the United States.',
  },
  {
    id: 'faq-3',
    question: 'Can you customize my resume for a specific job opening?',
    answer:
      'Yes. You are welcome to submit links or job descriptions for 1–3 target roles. We analyze the job requirements to weave in the exact keywords, competencies, and achievements recruiters in that domain prioritize.',
  },
  {
    id: 'faq-4',
    question: 'What happens if I need changes after receiving my draft?',
    answer:
      'Every package includes unlimited revisions. You can share your notes, request adjustments, and refine the document until you are 100% satisfied with the outcome.',
  },
  {
    id: 'faq-5',
    question: 'What guarantees do you offer?',
    answer:
      'We provide a 60-day interview guarantee and a 6-month job offer guarantee. If you are not receiving interview callbacks within 60 days of using your finalized documents, our senior writing team will rewrite your resume completely free of charge.',
  },
  {
    id: 'faq-6',
    question: 'What file formats will I receive?',
    answer:
      'You receive fully editable Microsoft Word (.docx) files for future customization, along with cleanly formatted, ATS-compliant PDF versions ready for submission.',
  },
  {
    id: 'faq-7',
    question: 'How long does the entire writing process take?',
    answer:
      'Our standard turnaround for your first polished draft is 3 to 5 business days. Expedited rush delivery options are also available upon request.',
  },
  {
    id: 'faq-8',
    question: 'Can you help with career changes and industry transitions?',
    answer:
      'Yes, career transitions are one of our core specialties. We emphasize your transferable competencies, leadership capabilities, and strategic achievements so hiring managers in your new target industry see your immediate value.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Clear, straightforward answers about our writing process, ATS optimization, turnaround time, and guarantees.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                {isOpen && <div className="faq-body">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
