'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/resume-cv', label: 'Resume & CV' },
    { href: '/cover-letter', label: 'Cover Letter' },
    { href: '/linkedin-optimization', label: 'LinkedIn' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`site-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link className="brand" href="/" aria-label="Career Fixers Home" onClick={closeMobile}>
          <div className="brand-emblem" aria-hidden="true">CF</div>
          <span className="brand-name">Career Fixers</span>
        </Link>

        <nav className={`nav-menu ${isMobileOpen ? 'is-open' : ''}`} id="navMenu" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                href={link.href}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-primary btn-sm" href="/#free-review" onClick={closeMobile}>
            Get Started
          </Link>
          <button
            className="mobile-toggle"
            type="button"
            aria-expanded={isMobileOpen}
            aria-controls="navMenu"
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span className="hamburger" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
