import React from 'react';

interface BottomCtaProps {
  onOpenWhatsApp: () => void;
  onOpenDiscoveryCall: () => void;
}

export const BottomCta: React.FC<BottomCtaProps> = ({
  onOpenWhatsApp,
  onOpenDiscoveryCall,
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
      <div className="rounded-2xl bg-gradient-to-br from-[#222a3d] via-[#171f33] to-[#131b2e] border border-slate-700/80 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
        {/* Glow Auras */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#4cd7f6]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#4f46e5]/15 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006e4b]/30 border border-[#4edea3]/30 text-[#4edea3] font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
            FAST-TRACK PROPOSALS WITHIN 6 HOURS
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#dae2fd] tracking-tight">
            Ready to Build Your High-Performance Website?
          </h2>

          <p className="text-sm sm:text-base text-[#c7c4d8] leading-relaxed">
            Schedule a direct 15-minute technical discovery call with our Bangalore engineering architects or message us directly on WhatsApp for immediate scope evaluation.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#171f33] border border-slate-700 text-[#4edea3] hover:bg-[#222a3d] transition font-semibold text-sm shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat with Us on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={onOpenDiscoveryCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4f46e5] text-white hover:bg-[#5b52f1] transition font-semibold text-sm shadow-[0_4px_20px_rgba(79,70,229,0.35)] cursor-pointer"
            >
              <span>Request Custom Proposal</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="mt-6 pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-[#918fa1]">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#4edea3]">support</span>
              Direct Lead Engineer Support
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">flash_on</span>
              Quick Turnaround Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#c3c0ff]">verified</span>
              GST Compliant Invoicing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
