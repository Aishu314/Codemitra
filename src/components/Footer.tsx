import React from 'react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenWhatsApp: () => void;
  onOpenDiscoveryCall: () => void;
  onOpenNdaModal: () => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWhatsApp,
  onOpenDiscoveryCall,
  onOpenNdaModal,
  onOpenLegalModal,
}) => {
  return (
    <footer className="w-full bg-[#060e20] border-t border-slate-800/80 mt-16 sm:mt-24">
      {/* 3-Pillar Highlight Strip */}
      <div className="bg-[#131b2e]/60 border-b border-slate-800/60 py-6 sm:py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171f33]/50 border border-slate-800/60">
              <div className="w-10 h-10 rounded-lg bg-[#03b5d3]/20 flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[24px]">bolt</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#dae2fd]">Fast Delivery</p>
                <p className="text-xs text-[#c7c4d8] mt-0.5">Sprints engineered in 14-day production cycles</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171f33]/50 border border-slate-800/60">
              <div className="w-10 h-10 rounded-lg bg-[#006e4b]/30 flex items-center justify-center text-[#4edea3] shrink-0">
                <span className="material-symbols-outlined text-[24px]">code</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#dae2fd]">100% Source Handover</p>
                <p className="text-xs text-[#c7c4d8] mt-0.5">Full IP ownership, zero lock-in, automated CI/CD</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#171f33]/50 border border-slate-800/60">
              <div className="w-10 h-10 rounded-lg bg-[#4f46e5]/20 flex items-center justify-center text-[#c3c0ff] shrink-0">
                <span className="material-symbols-outlined text-[24px]">forum</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#dae2fd]">Direct WhatsApp Support</p>
                <p className="text-xs text-[#c7c4d8] mt-0.5">Unfiltered access to lead technical architects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-cyan-400/50 shadow-[0_0_12px_rgba(76,215,246,0.3)] flex items-center justify-center shrink-0 bg-[#060e20]">
                <img
                  alt="Code Mitra Digital Logo"
                  className="w-full h-full object-cover"
                  src="/src/assets/images/codemitra_icon_1792431879490.jpg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Code Mitra</span>
            </div>
            <p className="text-xs sm:text-sm text-[#c7c4d8] max-w-sm leading-relaxed">
              High-velocity engineering studio specializing in mission-critical web platforms, AI integration, and scalable digital architectures for ambitious founders worldwide.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#171f33] border border-emerald-500/30 text-[#4edea3] font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping"></span>
                ACCEPTING Q2 PROJECTS
              </span>
            </div>
          </div>

          {/* Agency Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dae2fd] font-semibold">
              Agency
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#c7c4d8]">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="text-left hover:text-white transition"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('pricing')}
                className="text-left hover:text-white transition"
              >
                Pricing Plans
              </button>
              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="text-left hover:text-white transition"
              >
                Client Work
              </button>
              <button
                type="button"
                onClick={() => onNavigate('process')}
                className="text-left hover:text-white transition"
              >
                Our Process
              </button>
            </div>
          </div>

          {/* Offerings */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dae2fd] font-semibold">
              Offerings
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#c7c4d8]">
              <button
                type="button"
                onClick={() => onNavigate('addons')}
                className="text-left hover:text-white transition"
              >
                Add-on Services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('faq')}
                className="text-left hover:text-white transition"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="text-left hover:text-white transition"
              >
                WhatsApp Desk
              </button>
              <button
                type="button"
                onClick={onOpenDiscoveryCall}
                className="text-left hover:text-white transition"
              >
                Consultation
              </button>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dae2fd] font-semibold">
              Direct Contact
            </h3>
            <p className="text-xs sm:text-sm text-[#c7c4d8] leading-relaxed">
              Ready to engineer your next release? Connect with our technical leads instantly.
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs text-[#4cd7f6] mt-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>Average response time: &lt; 30 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Bangalore &amp; Remote Global Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-[#c3c0ff]">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>build@codemitra.tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#918fa1]">
          <p>© 2025 Code Mitra Engineering LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white transition"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white transition"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={onOpenNdaModal}
              className="hover:text-white transition text-[#4cd7f6]"
            >
              Mutual NDA Guarantee
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
