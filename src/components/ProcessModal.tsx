import React from 'react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDiscoveryCall: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({
  isOpen,
  onClose,
  onOpenDiscoveryCall,
}) => {
  if (!isOpen) return null;

  const steps = [
    {
      days: 'Days 1–3',
      phase: 'Sprint 01: Scope & Architectural Blueprint',
      details:
        'Technical discovery call, sitemap confirmation, database schema design, and selection of design tokens. Formal Mutual NDA executed.',
      icon: 'architecture',
    },
    {
      days: 'Days 4–7',
      phase: 'Sprint 02: Responsive UI & Handcrafted Frontend',
      details:
        'Development of clean React/Next.js components, Tailwind styling, mobile-first responsiveness, and WhatsApp CTA integration.',
      icon: 'devices',
    },
    {
      days: 'Days 8–11',
      phase: 'Sprint 03: Database, CMS & Payment Gateways',
      details:
        'Supabase/PostgreSQL schema migrations, custom admin CMS dashboard, Razorpay/Cashfree webhooks, and transactional alert automation.',
      icon: 'database',
    },
    {
      days: 'Days 12–14',
      phase: 'Sprint 04: Lighthouse 95+ QA & Full Handover',
      details:
        'Performance optimization, DNS/SSL setup on Cloudflare, staging review round, followed by unconditional 100% Git repository handover.',
      icon: 'verified',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-2xl rounded-2xl bg-[#131b2e] border border-slate-700 shadow-2xl p-5 sm:p-8 my-6 sm:my-8 text-[#dae2fd]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#918fa1] hover:text-white p-2 rounded-lg bg-[#171f33] sm:bg-transparent hover:bg-slate-800 transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px]">timeline</span>
          <span>14-DAY RAPID ENGINEERING PROCESS</span>
        </div>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
          Turnkey Delivery Sprints
        </h2>
        <p className="mt-1 text-xs text-[#c7c4d8]">
          How our Bangalore team delivers production-ready web platforms with zero time wasted.
        </p>

        {/* Timeline Steps */}
        <div className="mt-6 space-y-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#171f33] border border-slate-800 flex items-start gap-4 transition hover:bg-[#1d273f]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4f46e5]/20 border border-[#4f46e5]/40 flex items-center justify-center text-[#c3c0ff] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#4edea3] font-bold">{step.days}</span>
                  <span className="text-[#918fa1]">·</span>
                  <h3 className="font-bold text-sm text-white">{step.phase}</h3>
                </div>
                <p className="text-xs text-[#c7c4d8] mt-1 leading-relaxed">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-[#4edea3] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">security</span>
            Includes 30-Day Post-Launch Warranty
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenDiscoveryCall();
            }}
            className="px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold cursor-pointer shadow-md transition"
          >
            Start Your 14-Day Sprint
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
