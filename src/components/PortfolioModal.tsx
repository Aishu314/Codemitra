import React, { useState } from 'react';
import { PORTFOLIO_BLUEPRINTS, PortfolioItem } from '../data/pricingData';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedId?: string;
  onBookDiscovery: (tierTitle: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  selectedId = 'cafe-bella',
  onBookDiscovery,
}) => {
  const [activeId, setActiveId] = useState<string>(selectedId);

  if (!isOpen) return null;

  const activeProject =
    PORTFOLIO_BLUEPRINTS.find((p) => p.id === activeId) || PORTFOLIO_BLUEPRINTS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-3xl rounded-2xl bg-[#131b2e] border border-slate-700 shadow-2xl p-5 sm:p-8 my-6 sm:my-8 text-[#dae2fd]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#918fa1] hover:text-white p-2 rounded-lg bg-[#171f33] sm:bg-transparent hover:bg-slate-800 transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px]">domain</span>
          <span>REAL ARCHITECTURAL BLUEPRINTS</span>
        </div>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
          Client Engineering Showcases
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#c7c4d8]">
          Review authentic architectures delivered across static, dynamic CMS, and full e-commerce tiers.
        </p>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 mt-6 border-b border-slate-800 pb-3 overflow-x-auto">
          {PORTFOLIO_BLUEPRINTS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition cursor-pointer ${
                activeId === item.id
                  ? 'bg-[#4f46e5] text-white font-semibold'
                  : 'bg-[#171f33] text-[#c7c4d8] hover:text-white'
              }`}
            >
              {item.name} ({item.category})
            </button>
          ))}
        </div>

        {/* Active Project Body */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-[#171f33] border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#4cd7f6] font-semibold">
                Tier: {activeProject.category}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-[#4edea3] bg-[#006e4b]/20 px-2.5 py-0.5 rounded border border-[#4edea3]/30">
                <span className="material-symbols-outlined text-[14px]">speed</span>
                {activeProject.metrics}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-2">{activeProject.name}</h3>
            <p className="text-xs sm:text-sm text-[#c7c4d8] mt-1">{activeProject.tagline}</p>
            <p className="text-xs sm:text-sm text-[#dae2fd] mt-3 leading-relaxed">
              {activeProject.description}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="p-4 rounded-xl bg-[#060e20] border border-slate-800">
            <span className="text-xs font-mono uppercase tracking-wider text-[#918fa1] font-semibold block mb-2">
              Engineered Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#dae2fd]">
              {activeProject.deliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#4edea3] text-[16px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack badges */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#918fa1] font-semibold block mb-2">
              Underlying Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProject.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-[#171f33] border border-slate-700 text-xs font-mono text-[#4cd7f6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-[#918fa1]">
            100% Source code delivered to client Git
          </span>
          <button
            onClick={() => {
              onClose();
              onBookDiscovery(activeProject.category);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold cursor-pointer shadow-md"
          >
            <span>Build Similar Website</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
