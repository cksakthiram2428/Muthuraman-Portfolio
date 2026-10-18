import React, { useEffect } from 'react';
import { X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-hn select-text"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col z-10 max-h-[90vh] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <FileText size={16} />
            </div>
            <div>
              <h2 id="terms-title" className="text-base font-bold text-slate-900">
                Terms & Conditions
              </h2>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                Feature 02 · Usage & Code Attribution
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Terms"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">1. Acceptance of Terms</h3>
            <p className="text-slate-600 text-xs">
              By accessing and reviewing this personal developer portfolio website, you agree to comply with these terms, applicable copyright regulations, and ethical guidelines.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">2. Intellectual Property & Code Samples</h3>
            <p className="text-slate-600 text-xs">
              The project architectures, design compositions, case study analyses, and software code presented on this website are the intellectual work of Muthuraman C K (or open-source libraries acknowledged under their respective MIT/Apache licenses). Code repositories on GitHub are licensed per their respective LICENSE files.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">3. Accurate & Unexaggerated Profile</h3>
            <p className="text-slate-600 text-xs">
              All academic credentials (8.5 CGPA, 3rd Year B.E. Computer Science at Hindusthan Institute of Technology), certifications, and internship experiences at VirtualWorks Lab reflect genuine, verified records.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">4. Disclaimer & Links</h3>
            <p className="text-slate-600 text-xs">
              Links to external websites (GitHub, LinkedIn) are provided for professional verification. Muthuraman C K is not responsible for the contents or availability of external third-party services.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between text-xs text-slate-500 shrink-0 font-mono text-[11px]">
          <span>© 2026 Muthuraman C K</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer uppercase tracking-wider text-[11px] font-semibold"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
