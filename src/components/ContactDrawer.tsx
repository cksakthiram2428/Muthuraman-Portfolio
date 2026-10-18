import React, { useState, useEffect } from 'react';
import { X, Mail, Copy, Check, Github, Linkedin, Send, ArrowUpRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { trackEvent } from '../utils/analytics';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    hp_website: '' // Feature 18: Spam honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [spamBlocked, setSpamBlocked] = useState(false);
  const [mountedTime, setMountedTime] = useState<number>(Date.now());

  useEffect(() => {
    setMountedTime(Date.now());
  }, [isOpen]);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    trackEvent('email_copied_to_clipboard');
    setTimeout(() => setCopied(false), 2500);
  };

  // Feature 17: Form validation
  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (min 2 chars).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message (min 10 chars).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Feature 18: Honeypot check
    if (formData.hp_website) {
      setSpamBlocked(true);
      return;
    }

    // Feature 18: Submission speed bot check
    if (Date.now() - mountedTime < 1500) {
      setSpamBlocked(true);
      return;
    }

    if (!validateForm()) return;

    trackEvent('contact_form_submitted', { subject: formData.subject });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', hp_website: '' });
      setErrors({});
    }, 4500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden font-hn select-text"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-drawer-title"
    >
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-[#111111] border-l border-cream/20 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-cream/15 bg-black/40 shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/50 block">
              Inquiries & Opportunities
            </span>
            <h2 id="contact-drawer-title" className="text-2xl font-normal text-cream tracking-tight mt-1">
              Initiate Dialogue
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-cream hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close Contact Drawer"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
          {/* Direct channels */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50 block">
              Direct Contact
            </span>

            {/* Email Card */}
            <div className="p-4 bg-black/60 border border-cream/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 truncate">
                <Mail size={16} className="text-cream shrink-0" />
                <span className="text-sm font-mono text-cream select-all truncate">
                  {personalInfo.email}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs border border-cream/30 hover:border-cream text-cream transition-colors cursor-pointer flex items-center gap-1"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-2.5 py-1 text-xs bg-cream text-black hover:bg-cream/90 transition-colors font-medium"
                >
                  Mail
                </a>
              </div>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-black/40 border border-cream/15 hover:border-cream/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={16} className="text-cream" />
                  <div>
                    <div className="text-xs font-medium text-cream">GitHub</div>
                    <div className="text-[10px] text-cream/50 font-mono">cksakthiram2428</div>
                  </div>
                </div>
                <ArrowUpRight size={12} className="text-cream/50 group-hover:text-cream" />
              </a>

              <a
                href={personalInfo.githubSecondaryUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-black/40 border border-cream/15 hover:border-cream/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={16} className="text-cream" />
                  <div>
                    <div className="text-xs font-medium text-cream">GitHub (Alt)</div>
                    <div className="text-[10px] text-cream/50 font-mono">ckmr27</div>
                  </div>
                </div>
                <ArrowUpRight size={12} className="text-cream/50 group-hover:text-cream" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-black/40 border border-cream/15 hover:border-cream/40 transition-colors flex items-center justify-between group sm:col-span-2"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin size={16} className="text-cream" />
                  <div>
                    <div className="text-xs font-medium text-cream">LinkedIn</div>
                    <div className="text-[10px] text-cream/50 font-mono">{personalInfo.linkedinDisplay}</div>
                  </div>
                </div>
                <ArrowUpRight size={12} className="text-cream/50 group-hover:text-cream" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4 pt-2">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50 block">
              Transmit Direct Dispatch
            </span>

            {spamBlocked ? (
              <div className="p-4 border border-rose-500/40 bg-rose-950/20 text-xs text-rose-300 space-y-1">
                <div className="font-medium">Verification Interrupted</div>
                <p>Automated submission blocked by spam protection. Please refresh if you are a human user.</p>
              </div>
            ) : isSubmitted ? (
              <div className="p-6 border border-cream/30 bg-black/60 text-center space-y-2">
                <Check size={24} className="mx-auto text-cream" />
                <h4 className="text-base font-normal text-cream">Dispatch Received</h4>
                <p className="text-xs text-cream/70">
                  Thank you for reaching out. Muthuraman will review your message and reply via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="hp_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.hp_website}
                    onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="drawer-name" className="text-xs text-cream/60 block font-mono">
                    Name *
                  </label>
                  <input
                    id="drawer-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Your name"
                    className="w-full bg-black/70 border border-cream/20 px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-cream transition-colors"
                  />
                  {errors.name && <p className="text-[10px] text-rose-400 font-mono">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="drawer-email" className="text-xs text-cream/60 block font-mono">
                    Email *
                  </label>
                  <input
                    id="drawer-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="your.email@domain.com"
                    className="w-full bg-black/70 border border-cream/20 px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-cream transition-colors"
                  />
                  {errors.email && <p className="text-[10px] text-rose-400 font-mono">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="drawer-subject" className="text-xs text-cream/60 block font-mono">
                    Subject / Topic
                  </label>
                  <input
                    id="drawer-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Discussion"
                    className="w-full bg-black/70 border border-cream/20 px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-cream transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="drawer-message" className="text-xs text-cream/60 block font-mono">
                    Message * (min 10 characters)
                  </label>
                  <textarea
                    id="drawer-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Detail the technical opportunity or collaboration..."
                    className="w-full bg-black/70 border border-cream/20 px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-cream transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[10px] text-rose-400 font-mono">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-cream text-black font-medium text-xs hover:bg-cream/90 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Send size={14} />
                  <span>Transmit Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-cream/15 bg-black/40 flex items-center justify-between text-xs text-cream/50 shrink-0 font-mono text-[10px]">
          <span>Spam protected · 24h response standard</span>
          <button
            onClick={onClose}
            className="text-cream hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-wider text-[11px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
