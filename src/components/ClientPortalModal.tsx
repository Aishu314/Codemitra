import React, { useState } from 'react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDiscoveryCall: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenDiscoveryCall,
}) => {
  const [copiedClone, setCopiedClone] = useState(false);

  if (!isOpen) return null;

  const cloneCmd = 'git clone https://github.com/client-org/production.git';

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#131b2e] border border-slate-700 shadow-2xl p-6 sm:p-8 my-8 text-[#dae2fd]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#918fa1] hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px]">terminal</span>
          <span>CLIENT REPOSITORY &amp; IP HANDOVER PORTAL</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-white">
          Client Ownership Portal
        </h2>
        <p className="mt-1 text-xs text-[#c7c4d8]">
          Sample preview of how deliverables and Git assets are handed over unconditionally upon deployment.
        </p>

        {/* Project Manifest Overview */}
        <div className="mt-6 p-4 rounded-xl bg-[#171f33] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-[#918fa1] block">Production Repository</span>
              <span className="text-sm font-bold text-white font-mono">github.com/client-org/production</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#006e4b]/20 border border-[#4edea3]/30 text-[#4edea3] font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
              LIVE &amp; READY
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs font-mono">
            <div>
              <span className="text-[#918fa1] block text-[10px] uppercase">Lighthouse</span>
              <span className="text-[#4edea3] font-bold">98 / 100</span>
            </div>
            <div>
              <span className="text-[#918fa1] block text-[10px] uppercase">Framework</span>
              <span className="text-[#4cd7f6] font-bold">Next.js 15</span>
            </div>
            <div>
              <span className="text-[#918fa1] block text-[10px] uppercase">Database</span>
              <span className="text-[#c3c0ff] font-bold">PostgreSQL</span>
            </div>
            <div>
              <span className="text-[#918fa1] block text-[10px] uppercase">Ownership</span>
              <span className="text-[#4edea3] font-bold">100% Client</span>
            </div>
          </div>
        </div>

        {/* Quick Clone Terminal */}
        <div className="mt-4 p-3 rounded-lg bg-[#060e20] border border-slate-800 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2 overflow-x-auto text-[#4cd7f6]">
            <span className="text-[#918fa1]">$</span>
            <span>{cloneCmd}</span>
          </div>
          <button
            onClick={handleCopyClone}
            className="shrink-0 ml-3 p-1 text-[#918fa1] hover:text-white transition"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copiedClone ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>

        {/* Handover Checklist */}
        <div className="mt-4 p-4 rounded-xl bg-[#171f33] border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-wider text-[#918fa1] font-semibold block mb-2">
            Verified Handover Checkpoints
          </span>
          <div className="space-y-2 text-xs text-[#dae2fd]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check_circle</span>
              <span>Full GitHub Administrator Invite sent to client team</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check_circle</span>
              <span>Cloudflare SSL &amp; Custom DNS propagation completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check_circle</span>
              <span>PostgreSQL migrations and schema blueprints verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check_circle</span>
              <span>Bilateral Mutual NDA countersigned and archived</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-[#918fa1]">
            Ready to commission your own build?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenDiscoveryCall();
            }}
            className="px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold cursor-pointer shadow-md transition"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};
