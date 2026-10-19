import React from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#131b2e] border border-slate-700 shadow-2xl p-6 sm:p-8 my-8 text-[#dae2fd]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#918fa1] hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px]">policy</span>
          <span>{isPrivacy ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}</span>
        </div>
        <h2 className="mt-1 text-2xl font-bold text-white">
          {isPrivacy ? 'Client Data & Privacy Commitments' : 'Engineering Terms of Engagement'}
        </h2>
        <p className="mt-1 text-xs text-[#c7c4d8]">
          Code Mitra Engineering LLP · Bangalore, India
        </p>

        <div className="mt-5 p-4 rounded-xl bg-[#060e20] border border-slate-800 text-xs font-mono space-y-3 max-h-72 overflow-y-auto text-[#c7c4d8] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                1. Data Confidentiality: All credentials, business metrics, and codebases provided to Code Mitra are protected under strict encryption. We never sell or share client information with third-party advertisers.
              </p>
              <p>
                2. Direct Infrastructure: When provisioning databases, domains, or payment gateways, we guide you to register accounts directly under your corporate entity, ensuring you retain total custody of your credentials.
              </p>
              <p>
                3. Secure Destruction: Upon 100% project completion and sign-off, local copies of client staging credentials are safely purged in compliance with standard IT security guidelines.
              </p>
            </>
          ) : (
            <>
              <p>
                1. Milestone Commitments: Project timelines commence once design tokens, content copy, and base tier scopes are mutually verified.
              </p>
              <p>
                2. Source Code Ownership: Ownership passes unconditionally to the client upon milestone payment settlement. No recurring royalties or vendor lock-in fees apply.
              </p>
              <p>
                3. Scope Changes: Requirements outside the agreed package baseline are priced transparently using our unbundled modular rate card.
              </p>
              <p>
                4. Warranty: All deployments include 30 calendar days of post-launch bug fixing and support for issues within the original scope.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
