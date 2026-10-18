import React from 'react';
import { Github, Linkedin, ArrowUp, Shield, FileText, Gauge, Map } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenPerformance: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenPerformance
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05080f] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850/80">
          {/* Brand info */}
          <div className="space-y-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
              <span className="text-base font-bold text-white tracking-tight font-display">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400">
              {personalInfo.title} · Hindusthan Institute of Technology
            </p>
          </div>

          {/* Feature 1, 2, 9, 12 Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={onOpenTerms}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Use</span>
            </button>

            <button
              onClick={onOpenPerformance}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer text-emerald-400/90"
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>Site Vitals Audit</span>
            </button>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Map className="w-3.5 h-3.5" />
              <span>Sitemap</span>
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile 1"
              title="GitHub (cksakthiram2428)"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.githubSecondaryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile 2"
              title="GitHub (ckmr27)"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4 text-sky-400" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice & 20 Features Tag */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-2 font-mono text-[11px]">
          <div>
            © 2026 Muthuraman C K. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>20/20 Technical Features Integrated</span>
            <span aria-hidden="true">·</span>
            <span>HTTPS Enforced</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
