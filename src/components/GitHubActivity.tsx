import React, { useState } from 'react';
import { Github, ExternalLink, GitFork, Star, Search, Terminal } from 'lucide-react';
import { publicRepositories, personalInfo } from '../data/portfolioData';

export const GitHubActivity: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRepos = publicRepositories.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.topics.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
              07. Open Source & Version Control
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              GitHub Repositories
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Clean version-controlled codebases with documented setups, modular structures, and clear commit histories.
            </p>
          </div>

          {/* Direct Profile Links to both accounts */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-100 bg-slate-900 border border-cyan-800/60 hover:border-cyan-500/60 hover:bg-slate-850 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>github.com/{personalInfo.githubUsername}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={personalInfo.githubSecondaryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-850 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4 text-sky-400" />
              <span>github.com/{personalInfo.githubSecondaryUsername}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Filter input */}
        <div className="mb-6 relative max-w-md">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search repositories by topic or name..."
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-800/80 bg-[#0a101d]/90 p-5 flex flex-col justify-between transition-all duration-200 hover:border-cyan-500/40 hover:bg-[#0d1424] hover:shadow-lg group block"
            >
              <div>
                {/* Repo Title & Link */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-850"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Language & Stats */}
              <div className="pt-3 border-t border-slate-850 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                    aria-hidden="true"
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400/80" />
                    <span className="tabular-nums">{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
