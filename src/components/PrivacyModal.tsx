import React, { useEffect } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="privacy-policy-title"
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
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Shield size={16} />
            </div>
            <div>
              <h2 id="privacy-policy-title" className="text-base font-bold text-slate-900">
                Privacy Policy
              </h2>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                Feature 01 · Zero Ad Trackers · Direct Dispatches Only
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Privacy Policy"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/80 text-blue-900 text-xs">
            <strong>Commitment to Privacy:</strong> This portfolio website is operated by Muthuraman C K. We do not sell, rent, or trade your personal data. We operate with zero invasive advertising trackers.
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">1. Information We Collect</h3>
            <p className="text-slate-600 text-xs">
              When you submit a message via the Contact Form, we collect your name, email address, subject, and message content. This data is utilized solely to respond to your professional inquiries or employment opportunities.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">2. Secrets Off The Frontend (Feature 03)</h3>
            <p className="text-slate-600 text-xs">
              No private keys, database credentials, or server secrets are stored or exposed within client-side code bundles. All interactions comply with strict client-server security isolation.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">3. Cookies & Local Storage (Feature 05)</h3>
            <p className="text-slate-600 text-xs">
              This website does not deploy third-party advertising cookies. We use browser LocalStorage strictly to remember your cookie consent preferences and local interaction telemetry.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-bold">4. Data Retention & Contact</h3>
            <p className="text-slate-600 text-xs">
              Inquiry messages are retained only as long as necessary to communicate regarding developer opportunities. For privacy questions or data deletion requests, contact:
            </p>
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-blue-700 font-semibold">
              Email: {personalInfo.email}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between text-xs text-slate-500 shrink-0 font-mono text-[11px]">
          <span className="text-emerald-700 font-semibold">GDPR & CCPA Compliant</span>
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
