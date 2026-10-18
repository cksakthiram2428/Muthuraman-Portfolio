import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Send, MessageSquare, ArrowUpRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { trackEvent } from '../utils/analytics';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Feature 18: Spam protection honeypot (bots fill this, humans won't see it)
    hp_website: ''
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

  // Feature 17: Form validation logic
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

    // Feature 18: Spam Protection Check 1 - Honeypot
    if (formData.hp_website) {
      setSpamBlocked(true);
      return;
    }

    // Feature 18: Spam Protection Check 2 - Submission speed (reject bot submissions under 1.5s)
    const elapsed = Date.now() - mountedTime;
    if (elapsed < 1500) {
      setSpamBlocked(true);
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Feature 19: Analytics event
    trackEvent('contact_form_submitted', {
      subject: formData.subject || 'General Inquiry'
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', hp_website: '' });
      setErrors({});
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline and Direct Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
                09. Get In Touch · Feature 20 CTA
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
                Let's Build Something Useful.
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I'm interested in software development, AI, backend systems and opportunities where I can learn, build and contribute.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="rounded-xl border border-slate-800 bg-[#0a101d]/90 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Direct Email Contact</span>
                <span className="text-[11px] font-mono text-cyan-400">Response within 24h</span>
              </div>

              <div className="flex items-center justify-between gap-3 bg-slate-950 p-3 rounded-lg border border-slate-850">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm font-mono text-slate-200 select-all truncate">
                    {personalInfo.email}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                  >
                    Open Mail
                  </a>
                </div>
              </div>
              {copied && (
                <p className="text-xs text-emerald-400 font-mono">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-slate-800 bg-[#0a101d]/90 hover:border-cyan-500/50 hover:bg-[#0d1424] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-sm font-semibold text-white block">GitHub Profile</span>
                    <span className="text-[11px] font-mono text-cyan-300">github.com/{personalInfo.githubUsername}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalInfo.githubSecondaryUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-slate-800 bg-[#0a101d]/90 hover:border-cyan-500/50 hover:bg-[#0d1424] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-sm font-semibold text-white block">GitHub (Alternative)</span>
                    <span className="text-[11px] font-mono text-sky-300">github.com/{personalInfo.githubSecondaryUsername}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-slate-800 bg-[#0a101d]/90 hover:border-slate-700 hover:bg-[#0d1424] transition-all flex items-center justify-between group sm:col-span-2"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                  <div>
                    <span className="text-sm font-semibold text-white block">LinkedIn</span>
                    <span className="text-[11px] font-mono text-cyan-300">{personalInfo.linkedinDisplay}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form with Features 17 & 18 */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl border border-slate-800/90 bg-[#0a101d]/90 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Feature 17 & 18 Protected</span>
                </span>
              </div>

              {spamBlocked ? (
                <div className="p-5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-center space-y-2">
                  <AlertCircle className="w-6 h-6 text-rose-400 mx-auto" />
                  <h4 className="text-sm font-semibold text-white">Bot Activity Flagged</h4>
                  <p className="text-xs text-slate-300">
                    Your submission was blocked by client-side anti-spam verification. Please refresh if you are a human user.
                  </p>
                </div>
              ) : isSubmitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Muthuraman will review your message and reply via email at {formData.email || personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Feature 18: Spam Honeypot Field (invisible to humans) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_website">Leave this field blank</label>
                    <input
                      id="hp_website"
                      type="text"
                      name="hp_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp_website}
                      onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
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
                        className={`w-full bg-slate-950 border rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Work / Personal Email *
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
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full bg-slate-950 border rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer / AI Internship Discussion"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message * (Feature 17 min 10 chars)
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
                      placeholder="Tell me about the role, technical challenge, or project you are building..."
                      className={`w-full bg-slate-950 border rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-950/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Muthuraman</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
