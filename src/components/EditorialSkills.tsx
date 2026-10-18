import React, { useState } from 'react';
import { Award, Briefcase, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData, certificationsList } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

export const EditorialSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    'All',
    'Programming Languages',
    'Frontend & UI/UX',
    'Backend & Architecture',
    'Databases & Cloud Stores',
    'AI, ML & Vision',
    'Dev Tools & Platforms'
  ];

  const filtered = skillsData.filter((skill) => {
    const matchCat = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchSearch =
      searchTerm === '' ||
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.appliedIn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.coreCapabilities.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-white/80 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-medium">
              <Sparkles size={12} className="text-teal-600" />
              <span>03 &mdash; Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Skills & Technical Stack
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-mono">
            Practical competency verified through university coursework, engineering deliverables, and industry internship.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap border transition-all cursor-pointer font-mono text-[11px] uppercase tracking-wider font-semibold ${
                  selectedCategory === cat
                    ? 'border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                    : 'border-slate-200 bg-white/80 text-slate-600 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill, project or tool..."
              className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono shadow-xs"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="p-5 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Top line */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 p-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <TechLogo name={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{skill.name}</h3>
                      <span className="text-[10px] font-mono text-blue-600 font-medium uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.focusArea}
                </p>

                {/* Recruiter Proof */}
                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-blue-800/70 font-semibold">
                    <Briefcase size={11} className="text-blue-600" />
                    <span>Project Evidence:</span>
                  </div>
                  <div className="text-blue-950 font-semibold text-[11px]">{skill.appliedIn}</div>
                </div>

                {/* Core Capabilities */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Core Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {skill.coreCapabilities.map((cap) => (
                      <span key={cap} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certification Badge */}
              {skill.certificationBadge && (
                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <Award size={13} className="text-emerald-600" />
                  <span>{skill.certificationBadge}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Verified Credentials Strip with distinct brand colors */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-teal-50/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-700 font-bold block">
              Official Industry Credentials
            </span>
            <div className="text-base font-bold text-slate-900 mt-0.5">
              Verified Technical Certifications Completed by Muthuraman C K
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-emerald-300 text-emerald-800 shadow-xs font-semibold">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span>MongoDB Basics (Certified)</span>
            </span>

            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-900 shadow-xs font-semibold">
              <CheckCircle2 size={13} className="text-amber-600" />
              <span>HackerRank SQL (Gold)</span>
            </span>

            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-indigo-300 text-indigo-900 shadow-xs font-semibold">
              <CheckCircle2 size={13} className="text-indigo-600" />
              <span>Google Generative AI (Basic)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
