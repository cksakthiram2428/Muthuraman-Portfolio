import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
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
    <header className="fixed top-3 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Floating Capsule Dock Nav archetype */}
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#070b14]/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl shadow-black/60'
              : 'bg-[#0a101d]/80 backdrop-blur-md border border-slate-800 shadow-lg'
          }`}
        >
          {/* Zone 1: Brand Wordmark with Terminal Status dot */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-sm sm:text-base group select-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="font-display font-bold">Muthuraman C K</span>
          </a>

          {/* Zone 2: Segmented Nav Pills */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-800 text-cyan-300 font-semibold shadow-inner border border-slate-700'
                      : 'text-slate-400 hover:text-white hover:bg-slate-850/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Resume + Primary Call To Action) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                trackEvent('nav_resume_opened');
                onOpenResume();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Feature 20: One Clear Primary Call to Action */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-md shadow-cyan-950/40 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-slate-100 rounded-full border border-slate-800 bg-slate-900/80 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-slate-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto border border-slate-800 bg-[#090e1a]/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl space-y-1.5 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-850/60 rounded-xl transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-slate-600 text-xs">→</span>
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View & Download ATS Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
