import React from 'react';
import { ArrowDown, Download, Github, Sparkles, ArrowRight, Code2, Database, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onDownloadResume }) => {
  const scrollToProjects = () => {
    trackEvent('hero_cta_clicked', { action: 'view_projects' });
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden">
      {/* Hallmark: Tinted neutral background without rainbow gradient washes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetrical Biased Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Strong Hook */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Domain Pills (inspired by reference layout) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                Full Stack Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                AI & Computer Vision
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            {/* Oversized High-Impact Headline (3-Line Punchy Rhythm) */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.05]">
                <span className="text-slate-100">Think Rigorous.</span>{' '}
                <span className="text-cyan-400">Code Modular.</span>{' '}
                <span className="text-slate-300">Build Useful.</span>
              </h1>

              <div className="pt-2">
                <div className="text-xl sm:text-2xl font-bold text-white font-display">
                  {personalInfo.name}
                </div>
                <p className="text-sm sm:text-base font-medium text-cyan-300">
                  Computer Science Engineering Student · Hindusthan Institute of Technology
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl pt-2">
                {personalInfo.heroDescription}
              </p>
            </div>

            {/* Primary Action Button with Adjacent Candidate Indicator */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-950/40 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  trackEvent('hero_download_resume');
                  onOpenResume();
                }}
                className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-750 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors py-2 px-1 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Candidate quick metrics (unboxed metadata with separators) */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400 border-t border-slate-850/80">
              <span className="text-slate-300 font-semibold">8.5 CGPA</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Class of 2027</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-cyan-400">VirtualWorks Lab Intern</span>
            </div>
          </div>

          {/* Right Column: Interactive Developer Architecture Topology */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
