import React, { useState, useEffect } from 'react';
import { Terminal, Database, Coffee, Globe, GitBranch, Sparkles, Activity, ShieldCheck, Cpu } from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  highlightColor: string;
  summary: string;
  codeSnippet: string;
  metrics: string;
}

const NODES: TechNode[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & AI Core',
    icon: Terminal,
    x: 200,
    y: 70,
    highlightColor: '#38bdf8',
    summary: 'Core language for AI algorithms, automation scripts, and backend data processing pipelines.',
    codeSnippet: 'def compute_risk_score(weights, telemetry):\n    return round(sum(w * v for w, v in zip(weights, telemetry)), 2)',
    metrics: 'Active · Primary Language'
  },
  {
    id: 'ai',
    name: 'AI / ML',
    category: 'Intelligent Systems',
    icon: Sparkles,
    x: 320,
    y: 130,
    highlightColor: '#06b6d4',
    summary: 'Applied intelligent algorithms, OCR document verification pipelines, and audio feature synthesis.',
    codeSnippet: '# Feature extraction & OCR validation\nspectrogram = librosa.feature.melspectrogram(y=audio, sr=22050)\nconfidence = validator.cross_verify(document_hash)',
    metrics: 'Trained Models · Heuristics'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'OOP & Systems',
    icon: Coffee,
    x: 80,
    y: 130,
    highlightColor: '#f59e0b',
    summary: 'Object-Oriented design, strict typing principles, and enterprise algorithmic foundation.',
    codeSnippet: 'public record VerificationResult(\n    UUID certificateId,\n    boolean isValid,\n    Instant timestamp\n) {}',
    metrics: 'Strongly Typed · Core CS'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Relational DB',
    icon: Database,
    x: 120,
    y: 250,
    highlightColor: '#3b82f6',
    summary: 'Structured schema design, relational integrity, complex analytical joins and aggregations.',
    codeSnippet: 'SELECT supplier_id, AVG(reliability_index) AS score\nFROM audit_logs\nGROUP BY supplier_id HAVING COUNT(*) > 5;',
    metrics: 'ACID Compliance · Indexing'
  },
  {
    id: 'web',
    name: 'Web UI',
    category: 'Full-Stack Frontend',
    icon: Globe,
    x: 280,
    y: 250,
    highlightColor: '#10b981',
    summary: 'Clean, accessible responsive interfaces built with semantic HTML, modern styling, and JavaScript.',
    codeSnippet: 'const [filter, setFilter] = useState<RiskLevel>("critical");\nconst risks = useMemo(() => evaluate(suppliers), [suppliers]);',
    metrics: 'Responsive · Component-Based'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Version Control',
    icon: GitBranch,
    x: 200,
    y: 190,
    highlightColor: '#a855f7',
    summary: 'Disciplined version control, clean atomic commits, branching, and automated workflows.',
    codeSnippet: 'git checkout -b feature/risk-scoring\ngit commit -m "feat: calibrate composite trust weights"\ngit push origin main',
    metrics: 'Branching · CI/CD Ready'
  },
];

const CONNECTIONS = [
  { from: 'python', to: 'ai' },
  { from: 'python', to: 'github' },
  { from: 'python', to: 'sql' },
  { from: 'java', to: 'github' },
  { from: 'java', to: 'sql' },
  { from: 'github', to: 'web' },
  { from: 'ai', to: 'web' },
  { from: 'sql', to: 'web' },
];

export const HeroVisual: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('python');
  const [pulseIndex, setPulseIndex] = useState<number>(0);

  // Auto-pulse connections gently
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % CONNECTIONS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[0];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient background glow */}
      <div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl opacity-70 -z-10 transition-all duration-700" 
        aria-hidden="true" 
      />

      {/* Main Glassmorphism Card */}
      <div className="rounded-2xl border border-slate-800/80 bg-[#0a101d]/90 backdrop-blur-xl shadow-2xl p-5 md:p-6 overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            </div>
            <span className="text-slate-400 font-mono tracking-wide ml-1">system_architecture.graph</span>
          </div>

          <div className="flex items-center gap-1.5 text-cyan-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Interactive Node Topology</span>
          </div>
        </div>

        {/* SVG Interactive Topology Visualization */}
        <div className="relative w-full h-[300px] flex items-center justify-center my-2 select-none">
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full"
            role="img"
            aria-label="Interactive developer architecture graph linking Python, Java, SQL, AI, Web, and GitHub"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
              </linearGradient>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Central Glow Field */}
            <circle cx="200" cy="170" r="140" fill="url(#centerGlow)" />

            {/* Connection Lines */}
            {CONNECTIONS.map((conn, idx) => {
              const fromNode = NODES.find((n) => n.id === conn.from)!;
              const toNode = NODES.find((n) => n.id === conn.to)!;
              const isPulsing = idx === pulseIndex;
              const isDirectlyConnected =
                activeNodeId === conn.from || activeNodeId === conn.to;

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isDirectlyConnected ? 'url(#activeLineGrad)' : 'url(#lineGrad)'}
                    strokeWidth={isDirectlyConnected ? 2 : 1.2}
                    strokeDasharray={isPulsing ? '4,4' : undefined}
                    className="transition-all duration-300"
                  />
                  {isPulsing && (
                    <circle r="3.5" fill="#38bdf8" className="animate-pulse">
                      <animateMotion
                        path={`M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}`}
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Interactive Nodes */}
            {NODES.map((node) => {
              const isSelected = node.id === activeNodeId;
              const Icon = node.icon;

              return (
                <g
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className="cursor-pointer group"
                  transform={`translate(${node.x}, ${node.y})`}
                >
                  {/* Subtle outer halo on selected */}
                  {isSelected && (
                    <circle
                      r="32"
                      fill={node.highlightColor}
                      fillOpacity="0.15"
                      className="animate-pulse"
                    />
                  )}

                  {/* Node Circle Background */}
                  <circle
                    r="24"
                    fill={isSelected ? '#0f172a' : '#090d16'}
                    stroke={isSelected ? node.highlightColor : '#1e293b'}
                    strokeWidth={isSelected ? 2 : 1.2}
                    className="transition-all duration-200 group-hover:stroke-slate-400 group-hover:scale-105"
                  />

                  {/* Icon representation rendered via foreignObject for crisp SVG styling */}
                  <foreignObject x="-12" y="-12" width="24" height="24">
                    <div className="w-full h-full flex items-center justify-center text-slate-200 group-hover:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </foreignObject>

                  {/* Node Label below */}
                  <text
                    y="36"
                    textAnchor="middle"
                    className={`text-[11px] font-mono font-medium transition-colors ${
                      isSelected ? 'fill-cyan-300 font-semibold' : 'fill-slate-400 group-hover:fill-slate-200'
                    }`}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Node Detail Inspector Box */}
        <div className="mt-2 rounded-xl bg-slate-950/80 border border-slate-800/80 p-3.5 transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeNode.highlightColor }}
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-slate-100">{activeNode.name}</span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400">{activeNode.category}</span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400/90">{activeNode.metrics}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
            {activeNode.summary}
          </p>

          {/* Micro Code Snippet */}
          <div className="bg-[#05070d] rounded-lg p-2.5 border border-slate-800/60 font-mono text-[11px] text-slate-300 overflow-x-auto">
            <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-900 mb-1.5">
              <span>snippet.preview</span>
              <span>click node to inspect</span>
            </div>
            <pre className="whitespace-pre text-cyan-200/90 leading-tight">
              <code>{activeNode.codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Quick Node Switcher Bar */}
        <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-1 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 shrink-0 text-[10px]">INSPECT:</span>
          <div className="flex items-center gap-1.5">
            {NODES.map((n) => (
              <button
                key={n.id}
                onClick={() => setActiveNodeId(n.id)}
                className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                  activeNodeId === n.id
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {n.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
