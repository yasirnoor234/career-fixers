import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | ATS Resume Writing & Pricing Answers',
  description:
    'Find answers to common questions about Career Fixers resume writing process, ATS optimization, pricing packages, turnaround times, and 60-day interview guarantees.',
  keywords: [
    'resume FAQ',
    'ATS questions',
    'career fixers questions',
    'resume turnaround time',
    'resume rewrite guarantee',
  ],
  alternates: {
    canonical: 'https://www.careerfixers.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Career Fixers',
    description:
      'Answers to common questions regarding our human-written resume service, ATS scoring, turnaround times, and guarantees.',
    url: 'https://www.careerfixers.com/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Career Fixers',
    description: 'Find answers to common questions about our resume writing process.',
  },
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the initial resume review really 100% free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, absolutely. Our initial review is completely free with no obligation to purchase. We review your document formatting, ATS compatibility, bullet strength, and recruiter readability, and share honest feedback before you decide whether you need our writing service.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my resume be written by artificial intelligence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Career Fixers provides a 100% human-written, personalized service. While we test ATS compatibility using modern parsing software, every sentence, headline, and bullet is crafted by seasoned professional writers based in the United States.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you customize my resume for a specific job opening?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You are welcome to submit links or job descriptions for 1–3 target roles. We analyze the job requirements to weave in the exact keywords, competencies, and achievements recruiters in that domain prioritize.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I need changes after receiving my draft?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every package includes unlimited revisions. You can share your notes, request adjustments, and refine the document until you are 100% satisfied with the outcome.',
        },
      },
      {
        '@type': 'Question',
        name: 'What guarantees do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide a 60-day interview guarantee and a 6-month job offer guarantee. If you are not receiving interview callbacks within 60 days of using your finalized documents, our senior writing team will rewrite your resume completely free of charge.',
        },
      },
      {
        '@type': 'Question',
        name: 'What file formats will I receive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You receive fully editable Microsoft Word (.docx) files for future customization, along with cleanly formatted, ATS-compliant PDF versions ready for submission.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the entire writing process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our standard turnaround for your first polished draft is 3 to 5 business days. Expedited rush delivery options are also available upon request.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with career changes and industry transitions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, career transitions are one of our core specialties. We emphasize your transferable competencies, leadership capabilities, and strategic achievements so hiring managers in your new target industry see your immediate value.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="subpage-hero">
        <div className="container">
          <div className="kicker">Knowledge Base</div>
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-copy">
            Everything you need to know about our resume writing process, ATS optimization standards, turnaround times, and interview guarantees.
          </p>
        </div>
      </section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
