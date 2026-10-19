import React, { useState } from 'react';

interface NdaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NdaModal: React.FC<NdaModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadDraft = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

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
        <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px]">gavel</span>
          <span>SOVEREIGN IP PROTECTION PROTOCOL</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-white">
          Mutual Non-Disclosure &amp; IP Handover Warranty
        </h2>
        <p className="mt-1 text-xs text-[#c7c4d8]">
          Executed bilaterally between Code Mitra Engineering LLP and Client Entities prior to kickoff.
        </p>

        {/* NDA Terms View */}
        <div className="mt-5 p-4 rounded-xl bg-[#060e20] border border-slate-800 text-xs font-mono space-y-3 max-h-80 overflow-y-auto text-[#c7c4d8]">
          <div>
            <span className="text-[#4cd7f6] font-semibold block">SECTION 1. WORK-FOR-HIRE &amp; UNCONDITIONAL ASSIGNMENT</span>
            <p className="mt-1 text-[#dae2fd]">
              All software code, database schemas, Tailwind token configurations, API endpoints, design assets, and compiled binaries developed during the project are explicitly deemed 'Work Made for Hire'. Code Mitra Engineering LLP hereby unconditionally assigns 100% of all worldwide copyright, patents, and proprietary rights exclusively to the Client upon milestone completion.
            </p>
          </div>

          <div>
            <span className="text-[#4cd7f6] font-semibold block">SECTION 2. ZERO VENDOR LOCK-IN &amp; HOSTING SOVEREIGNTY</span>
            <p className="mt-1 text-[#dae2fd]">
              Code Mitra undertakes that no proprietary proprietary-licensed binaries, closed-source middleware, or encrypted code shall be deployed without explicit prior consent. The software can be hosted on any standard cloud infrastructure (AWS, Cloudflare, Vercel, VPS) of the Client's choosing without recurring licensing royalties.
            </p>
          </div>

          <div>
            <span className="text-[#4cd7f6] font-semibold block">SECTION 3. CONFIDENTIALITY &amp; TRADE SECRETS</span>
            <p className="mt-1 text-[#dae2fd]">
              All client business models, customer records, database credentials, API secrets, and proprietary operational workflows disclosed shall be held in strictest confidence under mutual penalty terms for a minimum period of three (3) years post closeout.
            </p>
          </div>

          <div>
            <span className="text-[#4cd7f6] font-semibold block">SECTION 4. 30-DAY RUNTIME WARRANTY</span>
            <p className="mt-1 text-[#dae2fd]">
              Every deployed codebase includes a thirty (30) day post-launch operational warranty covering defects, layout regressions, and deployment inconsistencies at zero additional cost.
            </p>
          </div>
        </div>

        {/* Footer controls */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-[#4edea3] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Standard Indian Contract Act Compliant
          </span>
          <button
            onClick={handleDownloadDraft}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold cursor-pointer shadow-md transition"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>{downloaded ? 'Draft Template Downloaded!' : 'Download NDA Template'}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
