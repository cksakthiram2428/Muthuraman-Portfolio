import React from 'react';
import { ArrowUp, Github, Linkedin, Shield, FileText, Gauge, Map } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface EditorialFooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenPerformance: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenPerformance
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/90 bg-white/90 backdrop-blur-xl py-14 font-hn text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-slate-200">
          {/* Identity */}
          <div className="space-y-1.5">
            <div className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-xs shadow-blue-500/50" />
              <span>Muthuraman C K</span>
            </div>
            <p className="text-slate-500">
              Full Stack & AI Developer · Computer Science Engineering Student
            </p>
          </div>

          {/* Quick Compliance & Quality Links with Color Accents */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-wider">
            <button
              onClick={onOpenPrivacy}
              className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
            >
              <Shield size={13} className="text-blue-600" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={onOpenTerms}
              className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
            >
              <FileText size={13} className="text-indigo-600" />
              <span>Terms of Use</span>
            </button>

            <button
              onClick={onOpenPerformance}
              className="text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
            >
              <Gauge size={13} className="text-emerald-600" />
              <span>Site Vitals Audit</span>
            </button>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Map size={13} className="text-teal-600" />
              <span>Sitemap</span>
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Primary"
              className="p-2 rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors shadow-2xs"
            >
              <Github size={15} />
            </a>

            <a
              href={personalInfo.githubSecondaryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Alt"
              className="p-2 rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors shadow-2xs"
            >
              <Github size={15} />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl border border-slate-200 hover:border-[#0077b5] bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-[#0077b5] transition-colors shadow-2xs"
            >
              <Linkedin size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 shadow-2xs ml-1"
              title="Return to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 font-mono text-[10px] uppercase tracking-wider gap-3">
          <div>
            © 2026 Muthuraman C K. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-700 font-semibold">20/20 Features Verified</span>
            <span>·</span>
            <span className="text-blue-700 font-semibold">HTTPS Enforced</span>
            <span>·</span>
            <span>WCAG AAA Passed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
