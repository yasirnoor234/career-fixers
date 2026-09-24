import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Career Fixers | Professional ATS-Friendly Resumes & Career Documents',
  description:
    'Create a professional, ATS-friendly resume, CV, cover letter, and LinkedIn profile designed to help you present your experience with confidence.',
  keywords: [
    'resume writing',
    'ATS resume',
    'executive CV',
    'LinkedIn makeover',
    'cover letter writing',
    'professional resume service',
    'career fixers',
  ],
  authors: [{ name: 'Career Fixers' }],
  metadataBase: new URL('https://career-fixers.web.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://career-fixers.web.app/',
    title: 'Career Fixers | Professional ATS-Friendly Resumes & Career Documents',
    description:
      'Professional, ATS-optimized resumes and career documents designed to help you stand out, pass applicant tracking systems, and present your experience with confidence.',
    siteName: 'Career Fixers',
    images: [
      {
        url: '/images/executive-classic.png',
        width: 800,
        height: 1130,
        alt: 'Career Fixers ATS Resume Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Fixers | Professional ATS-Friendly Resumes',
    description:
      'Human-written, ATS-optimized resumes, cover letters, and LinkedIn profiles designed around your target roles.',
    images: ['/images/executive-classic.png'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230F172A'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='22' font-family='sans-serif' font-weight='800' fill='%23FFFFFF'%3ECF%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Career Fixers',
    description:
      'Professional ATS-friendly resume writing, cover letters, and LinkedIn profile optimization by experienced US-based writers.',
    url: 'https://career-fixers.web.app/',
    logo: 'https://career-fixers.web.app/images/executive-classic.png',
    priceRange: '$25 - $225',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'farah@careerfixers.com',
        contactType: 'Senior Resume Consultant',
      },
      {
        '@type': 'ContactPoint',
        email: 'suban@careerfixers.com',
        contactType: 'Customer Support',
      },
    ],
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
