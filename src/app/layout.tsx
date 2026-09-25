import type { Metadata } from 'next';
import Script from 'next/script';
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
  metadataBase: new URL('https://www.careerfixers.com'),
  title: {
    default: 'Career Fixers | Professional ATS-Friendly Resumes & Career Services',
    template: '%s | Career Fixers',
  },
  description:
    'Human-written, ATS-optimized resumes, CVs, cover letters, and LinkedIn profile overhauls by senior US-based writers. 60-day interview guarantee.',
  keywords: [
    'resume writing service',
    'ATS resume',
    'professional resume writer',
    'executive CV writing',
    'LinkedIn profile optimization',
    'cover letter writing',
    'ATS-friendly resume',
    'career fixers',
    'executive resume service',
    'resume rewrite',
  ],
  authors: [{ name: 'Career Fixers', url: 'https://www.careerfixers.com' }],
  creator: 'Career Fixers',
  publisher: 'Career Fixers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.careerfixers.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.careerfixers.com/',
    siteName: 'Career Fixers',
    title: 'Career Fixers | Professional ATS-Friendly Resumes & Career Documents',
    description:
      'Professional, ATS-optimized resumes and career documents engineered to pass automated screeners and win executive interviews. 100% human-crafted with a 60-day guarantee.',
    images: [
      {
        url: 'https://www.careerfixers.com/images/executive-classic.png',
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
    images: ['https://www.careerfixers.com/images/executive-classic.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230F172A'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='22' font-family='sans-serif' font-weight='800' fill='%23FFFFFF'%3ECF%3C/text%3E%3C/svg%3E",
  },
  verification: {
    google: '-kl6pFmIV6N057pXMIVLPZsJ4PA7B--ibJaPzgcCGM8',
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
    image: 'https://www.careerfixers.com/images/executive-classic.png',
    description:
      'Professional ATS-friendly resume writing, cover letters, and LinkedIn profile optimization by experienced US-based writers.',
    url: 'https://www.careerfixers.com/',
    logo: 'https://www.careerfixers.com/images/executive-classic.png',
    priceRange: '$25 - $225',
    telephone: '+1-800-CAREER-FIX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.linkedin.com/company/careerfixers/',
      'https://www.linkedin.com/in/farahsheikh-careerfixers',
      'https://www.linkedin.com/in/suban-khalid-careerfixers',
    ],
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
      {
        '@type': 'ContactPoint',
        email: 'ceo.careerfixers@gmail.com',
        contactType: 'Executive Inquiries',
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
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LE9Z3T4R50"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LE9Z3T4R50', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
