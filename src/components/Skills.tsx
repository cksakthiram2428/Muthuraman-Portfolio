import React, { useState } from 'react';
import { 
  Search, ShieldCheck, CheckCircle2, Award, Briefcase, 
  Layers, Code2, Sparkles, Database, Terminal, Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem, SkillProficiency, SkillCategory } from '../types';
import { TechLogo } from './TechLogos';

const CATEGORIES = [
  'All Competencies',
  'Programming Languages',
  'Frontend & UI/UX',
  'Backend & Architecture',
  'Databases & Cloud Stores',
  'AI, ML & Vision',
  'Dev Tools & Platforms',
] as const;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Competencies');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      selectedCategory === 'All Competencies' || skill.category === selectedCategory;
    const matchesSearch =
      searchTerm === '' ||
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.appliedIn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.coreCapabilities.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      skill.focusArea.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelBadge = (level: SkillProficiency) => {
    switch (level) {
      case 'Experienced':
        return (
          <span className="text-[11px] font-mono font-medium text-cyan-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Experienced
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="text-[11px] font-mono font-medium text-sky-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Working Knowledge
          </span>
        );
      case 'Familiar':
        return (
          <span className="text-[11px] font-mono font-medium text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            Familiar
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
              02. Technical Competencies & Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Engineering Profile
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Production-oriented developer stack evaluated by practical project execution, verified certifications, and software architecture fundamentals.
            </p>
          </div>

          {/* Proficiency legend (unboxed text with separators) */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Experienced (Primary Stack)</span>
            </div>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Working Knowledge</span>
            </div>
          </div>
        </div>

        {/* Recruiter Quick Snapshot Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#0a101d] via-[#0d1628] to-[#0a101d] border border-cyan-500/20 text-xs">
          <div className="space-y-0.5">
            <span className="text-slate-500 font-mono text-[10px] uppercase">Core Focus</span>
            <div className="text-sm font-bold text-white">AI & Full Stack</div>
            <span className="text-slate-400 text-[11px]">Python, JS, React, Node</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-slate-500 font-mono text-[10px] uppercase">Practical Evidence</span>
            <div className="text-sm font-bold text-cyan-300">2 Core AI Platforms</div>
            <span className="text-slate-400 text-[11px]">D3.js Graph & CNN-Transformer</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-slate-500 font-mono text-[10px] uppercase">Internship Proof</span>
            <div className="text-sm font-bold text-white">5 Python Systems</div>
            <span className="text-slate-400 text-[11px]">VirtualWorks Lab</span>
          </div>

          <div className="space-y-0.5">
            <span className="text-slate-500 font-mono text-[10px] uppercase">Verified Credentials</span>
            <div className="text-sm font-bold text-emerald-400">3 Certifications</div>
            <span className="text-slate-400 text-[11px]">MongoDB, SQL Gold, Google AI</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs (Segmented interactive buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-cyan-300 shadow-sm border border-cyan-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Keyword Search for Recruiters */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill, tool or project..."
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid: enriched for recruiters with brand images, project proof, and hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              tabIndex={0}
              className="group relative rounded-2xl border border-slate-800/85 bg-[#0a101d]/90 p-5 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {/* Subtle hover soft glow backdrop */}
              <div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.03] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="relative z-10 space-y-3.5">
                {/* Top Row: Technology Brand Image / Logo, Name & Level */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Brand Image / Logo Container */}
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-center p-2 group-hover:border-cyan-500/40 group-hover:bg-slate-900 transition-colors shadow-inner">
                      <TechLogo name={skill.name} className="w-7 h-7 object-contain" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 block">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    {getLevelBadge(skill.level)}
                    {skill.experienceDuration && (
                      <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                        {skill.experienceDuration}
                      </span>
                    )}
                  </div>
                </div>

                {/* Recruiter Detail 1: Focus Area & Architecture */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {skill.focusArea}
                </p>

                {/* Recruiter Detail 2: Applied In / Real Project Proof */}
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-850 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                    <Briefcase className="w-3 h-3" />
                    <span>Project Evidence / Applied In:</span>
                  </div>
                  <div className="text-xs text-slate-200 font-medium">
                    {skill.appliedIn}
                  </div>
                </div>

                {/* Recruiter Detail 3: Specific Core Capabilities */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    Core Technical Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.coreCapabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Certification Badge */}
                {skill.certificationBadge && (
                  <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{skill.certificationBadge}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
            <p className="text-slate-300 font-medium text-sm">No skills found matching "{searchTerm}"</p>
            <p className="text-slate-500 text-xs">Try searching for Python, React, MongoDB, FastAPI, or PyTorch</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Competencies');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 rounded-lg border border-cyan-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
