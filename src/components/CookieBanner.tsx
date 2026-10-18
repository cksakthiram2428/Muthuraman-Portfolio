import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

const CONSENT_KEY = 'mck_cookie_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'all');
      trackEvent('cookie_consent_accepted_all');
    } catch {}
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'essential');
      trackEvent('cookie_consent_essential_only');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white/95 border border-slate-200 shadow-2xl rounded-2xl p-5 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 font-hn text-slate-900"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cookie size={16} className="text-blue-600" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-mono font-bold block">
              Privacy Preference · Feature 05
            </span>
          </div>
          <button
            onClick={handleEssentialOnly}
            className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
            aria-label="Dismiss cookie banner"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          This portfolio respects your digital privacy. Minimal LocalStorage is used solely for functional session preferences with zero third-party telemetry.{' '}
          <button
            onClick={onOpenPrivacy}
            className="text-blue-600 font-semibold underline hover:text-blue-800 cursor-pointer"
          >
            Review Policy
          </button>
        </p>

        <div className="pt-1 flex items-center gap-2.5">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all cursor-pointer font-semibold uppercase tracking-wider text-center shadow-xs"
          >
            Accept
          </button>
          <button
            onClick={handleEssentialOnly}
            className="py-2 px-3 text-xs border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl transition-colors cursor-pointer uppercase tracking-wider text-center font-medium"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
};
