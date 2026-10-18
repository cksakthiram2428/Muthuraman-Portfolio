import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Send, ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { trackEvent } from '../utils/analytics';

export const EditorialContact: React.FC = () => {
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
  }, []);

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
      errs.name = 'Please provide your name (min 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
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
    <section id="contact" className="relative py-24 sm:py-32 bg-white/80 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-medium">
            <MessageSquare size={12} className="text-blue-600" />
            <span>07 &mdash; Direct Dialogue · Feature 20 CTA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Initiate Dialogue.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Interested in software engineering roles, internship opportunities, AI workflows, or architectural discussions. Response standard within 24 hours.
          </p>
        </div>

        {/* Asymmetrical Form & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-4 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-800 font-bold block">
                Direct Email Dispatch
              </span>

              <div className="p-3.5 bg-white rounded-2xl border border-blue-200/90 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={17} className="text-blue-600 shrink-0" />
                  <span className="text-sm font-mono text-slate-900 font-semibold select-all truncate">
                    {personalInfo.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-xs border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-mono font-medium"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium font-mono"
                  >
                    Mail
                  </a>
                </div>
              </div>

              {copied && (
                <p className="text-xs font-mono text-emerald-700 font-semibold">
                  ✓ Address copied to clipboard!
                </p>
              )}
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/90 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">GitHub (Primary)</div>
                    <div className="text-[11px] text-blue-600 font-mono">cksakthiram2428</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              <a
                href={personalInfo.githubSecondaryUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/90 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">GitHub (Alt)</div>
                    <div className="text-[11px] text-indigo-600 font-mono">ckmr27</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/90 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group sm:col-span-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0077b5] text-white flex items-center justify-center shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">LinkedIn Profile</div>
                    <div className="text-[11px] text-blue-700 font-mono">{personalInfo.linkedinDisplay}</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form with Light Theme */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5">
            {spamBlocked ? (
              <div className="p-6 rounded-2xl border border-rose-300 bg-rose-50 text-xs text-rose-800 space-y-2">
                <div className="text-sm font-bold">Spam Verification Flagged</div>
                <p>Automated submission blocked by client-side bot detection. Please refresh if you are a human reviewer.</p>
              </div>
            ) : isSubmitted ? (
              <div className="p-8 rounded-2xl border border-emerald-300 bg-emerald-50 text-center space-y-3">
                <Check size={32} className="mx-auto text-emerald-600" />
                <h4 className="text-lg font-bold text-emerald-950">Dispatch Transmitted!</h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you for reaching out. Muthuraman will review your communication and respond to {formData.email || personalInfo.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Feature 18 Honeypot */}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-600 uppercase tracking-wider block font-semibold">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
                    />
                    {errors.name && <p className="text-[10px] font-mono text-rose-600 font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-600 uppercase tracking-wider block font-semibold">
                      Work / Personal Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="recruiter@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
                    />
                    {errors.email && <p className="text-[10px] font-mono text-rose-600 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-slate-600 uppercase tracking-wider block font-semibold">
                    Topic / Role Title
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack / AI Developer Opportunity"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-slate-600 uppercase tracking-wider block font-semibold">
                    Message * (min 10 characters)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe the opportunity, engineering challenge, or project..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none shadow-2xs"
                  />
                  {errors.message && <p className="text-[10px] font-mono text-rose-600 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer font-mono uppercase tracking-[0.15em]"
                >
                  <Send size={14} />
                  <span>Transmit Dispatch to Muthuraman</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
