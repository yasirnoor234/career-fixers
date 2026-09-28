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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
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
    image: 'https://www.careerfixers.com/images/career-fixers-logo.png',
    description:
      'Professional ATS-friendly resume writing, cover letters, and LinkedIn profile optimization by experienced US-based writers.',
    url: 'https://www.careerfixers.com/',
    logo: 'https://www.careerfixers.com/images/career-fixers-logo.png',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
