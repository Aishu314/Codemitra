import React from 'react';

interface HeroSectionProps {
  onScrollToAddons: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToAddons,
  onOpenCalculator,
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Atmospheric Gradient Aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#c3c0ff]/15 via-[#4cd7f6]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-48 right-12 w-[380px] h-[380px] bg-[#4edea3]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16">
        {/* Badge */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#222a3d] text-[#4cd7f6] font-mono text-xs sm:text-sm shadow-sm border border-slate-700/60">
            <span className="material-symbols-outlined text-[17px] text-[#4cd7f6]">verified</span>
            Transparent &amp; Value-Driven Web Development Pricing
          </span>
        </div>

        {/* Main Heading & Subheading */}
        <div className="mt-6 text-center max-w-4xl mx-auto flex flex-col gap-4">
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#dae2fd] tracking-tight leading-tight sm:leading-[1.15]">
            Launch Your Professional Web Presence with{' '}
            <span className="text-[#c3c0ff] underline decoration-[#4cd7f6] decoration-wavy decoration-2 underline-offset-8">
              Predictable Pricing
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#c7c4d8] max-w-3xl mx-auto leading-relaxed">
            Clear starting rates designed for ambitious Indian businesses, startups, and institutions. Every package includes clean hand-crafted code, mobile responsiveness, SSL deployment, and 100% source code handover.
          </p>
        </div>

        {/* Trust Bar Metrics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-[#171f33] border border-slate-800/80 flex flex-col gap-1 transition duration-200 hover:bg-[#222a3d] hover:border-slate-700">
            <div className="flex items-center gap-1.5 text-[#4cd7f6] font-mono text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">speed</span>
              <span>VELOCITY</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#dae2fd] tabular-nums mt-0.5">5–14 Days</div>
            <div className="text-xs text-[#c7c4d8]">Rapid turnkey delivery cycles</div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#171f33] border border-slate-800/80 flex flex-col gap-1 transition duration-200 hover:bg-[#222a3d] hover:border-slate-700">
            <div className="flex items-center gap-1.5 text-[#4edea3] font-mono text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">lock_open</span>
              <span>OWNERSHIP</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#dae2fd] tabular-nums mt-0.5">100% IP Handover</div>
            <div className="text-xs text-[#c7c4d8]">Zero vendor lock-in or licensing trap</div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#171f33] border border-slate-800/80 flex flex-col gap-1 transition duration-200 hover:bg-[#222a3d] hover:border-slate-700">
            <div className="flex items-center gap-1.5 text-[#c3c0ff] font-mono text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>WARRANTY</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#dae2fd] tabular-nums mt-0.5">Free 30-Day Support</div>
            <div className="text-xs text-[#c7c4d8]">Post-launch bug fixes &amp; live checks</div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#171f33] border border-slate-800/80 flex flex-col gap-1 transition duration-200 hover:bg-[#222a3d] hover:border-slate-700">
            <div className="flex items-center gap-1.5 text-[#4cd7f6] font-mono text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">code_blocks</span>
              <span>STACK QUALITY</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#dae2fd] tabular-nums mt-0.5">Modern Architecture</div>
            <div className="text-xs text-[#c7c4d8]">Next.js, Tailwind, Node, TypeScript</div>
          </div>
        </div>

        {/* Scope Notice Banner with interactive Calculator trigger */}
        <div className="mt-6 p-4 sm:p-4 rounded-xl bg-[#131b2e] border border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-sm text-[#dae2fd]">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[22px] shrink-0">info</span>
            <span>
              <strong className="font-semibold text-[#4cd7f6]">Important Scope Policy:</strong> Prices listed below represent starting baselines. Final investment is tailored transparently to your exact custom integrations, operational page count, and system scope.
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-[#171f33] hover:bg-[#222a3d] border border-[#4cd7f6]/40 text-[#4cd7f6] transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">calculate</span>
              Scope Calculator
            </button>
            <button
              onClick={onScrollToAddons}
              className="inline-flex items-center gap-1 font-mono text-xs text-[#4cd7f6] hover:text-[#acedff] transition cursor-pointer"
            >
              View Scope Add-ons <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
