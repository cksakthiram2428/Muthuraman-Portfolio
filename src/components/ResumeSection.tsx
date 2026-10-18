import React from 'react';
import { FileText, Download, CheckCircle2, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume, onDownloadResume }) => {
  return (
    <section className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#0a1426] to-[#070b14] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and description */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider block">
                08. Complete Candidate Profile
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Want the complete picture?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                View or download my resume for a quick overview of my education, skills, projects and experience.
              </p>

              {/* Quick Resume Feature list */}
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ATS-Optimized Formatting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified 8.5 CGPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VirtualWorks Lab Internship Details</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenResume}
                className="w-full py-3 px-5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-950/40 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-slate-950" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onDownloadResume}
                className="w-full py-3 px-5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
