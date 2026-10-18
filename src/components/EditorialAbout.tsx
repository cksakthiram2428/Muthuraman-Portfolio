import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Award, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';

export const EditorialAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white/80 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono uppercase tracking-[0.2em] mb-6 sm:mb-8 font-medium">
          <Sparkles size={12} className="text-blue-600" />
          <span>01 &mdash; Profile &amp; Engineering Mindset</span>
        </div>

        {/* Large Statement Headline */}
        <div className="max-w-5xl mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-slate-900">
            Majoring in Computer Science Engineering, building practical software across full-stack web architectures, applied AI, and automated backend data systems.
          </h2>
        </div>

        {/* 3-Column Asymmetrical Layout with Professional Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 border-t border-slate-200/90 items-start">
          {/* Column 1: Executive Circular Floating Badge Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-6">
            <div className="relative group mx-auto lg:mx-0">
              {/* Subtle ambient radial glow behind circle */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-teal-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Circular Floating Badge */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 flex items-end justify-center">
                <img
                  src="/muthuraman.png"
                  alt="Muthuraman C K - Portrait Cutout"
                  className="w-full h-full object-contain object-bottom scale-110 group-hover:scale-115 transition-transform duration-500 drop-shadow-[0_12px_20px_rgba(0,0,0,0.7)]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Online Active Status Dot Badge */}
              <div 
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-slate-800"
                title="Available for Software Engineering Roles & Opportunities"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono font-medium tracking-tight text-slate-700">Available</span>
              </div>
            </div>

            {/* Profile Credentials Meta Card */}
            <div className="w-full max-w-sm p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-slate-900">
              <div className="flex items-center justify-between">
                <div className="font-bold text-base tracking-tight">Muthuraman C K</div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Active</span>
                </div>
              </div>
              <div className="text-xs text-blue-700 font-mono font-medium">
                Full Stack &amp; Applied AI Developer
              </div>
              <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5 pt-0.5">
                <MapPin size={11} className="text-slate-400" />
                <span>Tamil Nadu, India · Class of 2027</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 text-center lg:text-left">
              Original Face Cutout · Background Removed
            </div>
          </div>

          {/* Column 2: Narrative & Background (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              I am a 3rd-year engineering student at <strong className="text-slate-900 font-semibold">Hindusthan Institute of Technology</strong> with an <strong className="text-blue-600 font-semibold">8.5 CGPA</strong>, dedicated to building production-grade software that solves concrete operational bottlenecks. Rather than chasing theoretical hype, my work is grounded in real-world implementations—from architecting multi-tier supply chain risk intelligence platforms to reconstructing high-resolution satellite imagery through deep learning.
            </p>

            <p>
              During my full-stack engineering internship at <strong className="text-slate-900 font-semibold">VirtualWorks Lab</strong>, I developed 5 production modules in Python covering data persistence, automation logic, and API design. My technical repertoire spans modern TypeScript and React ecosystems, asynchronous Python backends (FastAPI), deep learning frameworks (PyTorch), and robust relational &amp; document databases.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <GraduationCap size={15} className="text-blue-600" />
                <span>Academic Record &amp; Timeline:</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Hindusthan Institute of Technology (2024–Present, 8.5 CGPA) &amp; E.B.G Matric Higher Secondary School (2018–2024, Madurai).
              </p>
            </div>
          </div>

          {/* Column 3: Metrics Snapshot (3 cols) */}
          <div className="lg:col-span-3 border border-slate-200/90 bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-lg shadow-slate-900/5 space-y-5">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500 border-b border-slate-200 pb-2.5 flex items-center justify-between font-semibold">
              <span>Metrics</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <span className="text-2xl font-bold text-blue-700 block font-mono">8.5</span>
                <span className="text-[10px] uppercase tracking-wider text-blue-900/70 font-semibold">B.E. CSE CGPA</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
                <span className="text-2xl font-bold text-indigo-700 block font-mono">2027</span>
                <span className="text-[10px] uppercase tracking-wider text-indigo-900/70 font-semibold">Class of 2027</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                <span className="text-2xl font-bold text-teal-700 block font-mono">02</span>
                <span className="text-[10px] uppercase tracking-wider text-teal-900/70 font-semibold">AI Platforms</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <span className="text-2xl font-bold text-amber-700 block font-mono">05</span>
                <span className="text-[10px] uppercase tracking-wider text-amber-900/70 font-semibold">Python Deliverables</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 size={13} />
                <span>Verified Credentials</span>
              </div>
              <p className="text-[11px] text-slate-500">
                MongoDB University, HackerRank SQL Gold, Google Cloud AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
