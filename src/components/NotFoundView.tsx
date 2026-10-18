import React from 'react';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

interface NotFoundViewProps {
  onBackHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-[#0a101d] border border-cyan-500/20 shadow-2xl space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mx-auto">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
            HTTP 404 · Resource Not Found (Feature 15)
          </span>
          <h1 className="text-3xl font-extrabold text-white font-display">
            Lost in the Topology?
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The requested route or document could not be located on Muthuraman's developer portfolio server.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onBackHome}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-950/40"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
