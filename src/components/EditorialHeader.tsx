import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { trackEvent } from '../utils/analytics';

interface EditorialHeaderProps {
  onOpenResume: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    trackEvent('nav_click', { target: href });
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 font-hn ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 sm:py-3.5 shadow-sm text-slate-900'
          : 'bg-transparent py-6 sm:py-8 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-start justify-between">
        {/* Brand Top Left: MUTHURAMAN */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className={`flex items-center gap-2.5 text-lg sm:text-xl font-normal tracking-wide transition-opacity hover:opacity-80 ${
            isScrolled ? 'text-slate-900 font-medium' : 'text-white font-normal'
          }`}
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/40 shadow-sm bg-slate-900 flex-shrink-0">
            <img
              src="/muthuraman_face.png"
              alt="Muthuraman C K"
              className="w-full h-full object-contain object-bottom scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <span>Muthuraman</span>
        </a>

        {/* Right Desktop Cluster matching reference image */}
        <div className="hidden sm:flex items-start gap-12 lg:gap-16 text-xs font-normal">
          {/* Year */}
          <div className={isScrolled ? 'text-slate-500 font-mono' : 'text-white/80 font-mono'}>
            2026
          </div>

          {/* Navigation Column */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left transition-opacity cursor-pointer ${
                    isScrolled
                      ? isActive
                        ? 'text-blue-600 font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                      : 'text-white hover:opacity-60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={onOpenResume}
              className={`text-left transition-opacity cursor-pointer ${
                isScrolled ? 'text-blue-600 hover:underline font-medium' : 'text-white hover:opacity-60'
              }`}
            >
              Resume (ATS)
            </button>
          </nav>

          {/* Socials Column */}
          <div className="flex flex-col gap-1">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`transition-opacity ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:opacity-60'}`}
            >
              GitHub (Primary)
            </a>
            <a
              href={personalInfo.githubSecondaryUrl}
              target="_blank"
              rel="noreferrer"
              className={`transition-opacity ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:opacity-60'}`}
            >
              GitHub (Alt)
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={`transition-opacity ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:opacity-60'}`}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`sm:hidden p-1.5 transition-colors cursor-pointer ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl text-slate-900">
          <div className="flex flex-col gap-3 font-hn text-base">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-slate-800 hover:text-blue-600 transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-blue-600 font-semibold underline"
            >
              View ATS Resume
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 hover:text-slate-900"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
