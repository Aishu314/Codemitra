import React, { useState } from 'react';

interface SourceHandoverSectionProps {
  onOpenNdaModal: () => void;
}

export const SourceHandoverSection: React.FC<SourceHandoverSectionProps> = ({
  onOpenNdaModal,
}) => {
  const [activeTab, setActiveTab] = useState<'manifest' | 'schema' | 'env'>('manifest');
  const [copied, setCopied] = useState(false);

  const manifestCode = `{
  "clientOwnership": {
    "status": "100% UNCONDITIONAL_HANDOVER",
    "gitRepository": "github.com/client-org/production",
    "vendorLockIn": false,
    "deliverables": [
      "full_source_code_react_nextjs",
      "tailwind_design_tokens",
      "postgres_database_migrations",
      "env_production_templates"
    ],
    "freedomIndex": "Self-host anywhere anytime"
  }
}`;

  const schemaCode = `// src/db/schema.ts - Scalable Relational Architecture
import { pgTable, text, timestamp, uuid, integer, boolean } from 'drizzle-orm/pg-core';

export const leads = pgTable('client_leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  scopeRequirements: text('scope_requirements'),
  budgetCurrency: text('budget_currency').default('INR'),
  createdAt: timestamp('created_at').defaultNow(),
  status: text('status').default('new_enquiry'),
});`;

  const envCode = `# .env.production - Direct Ownership Template
# Zero middleman proxies. Keys stay on your Cloudflare/AWS/Vercel.
DATABASE_URL="postgres://client:pass@db.provider.com:5432/main"
RAZORPAY_KEY_ID="rzp_live_client_key_direct"
RAZORPAY_KEY_SECRET="rzp_live_client_secret_direct"
NEXT_PUBLIC_APP_URL="https://yourbrand.com"`;

  const getCurrentCode = () => {
    if (activeTab === 'schema') return schemaCode;
    if (activeTab === 'env') return envCode;
    return manifestCode;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="rounded-2xl bg-[#171f33] border border-slate-800 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Ambient backglow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Ethos & Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-[16px]">key</span>
              SOVEREIGN ENGINEERING ETHOS
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#dae2fd] leading-tight">
              Why 100% Full Source Code Handover Matters
            </h2>

            <p className="text-sm sm:text-base text-[#c7c4d8] leading-relaxed">
              Too many Indian agencies hold your website hostage inside proprietary site-builders or private servers, charging recurring rental fees just to keep your business online. At Code Mitra, our code belongs to you from the first commit.
            </p>

            <div className="flex flex-col gap-4 mt-2 text-sm text-[#dae2fd]">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 flex items-center justify-center text-[#4cd7f6] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <div>
                  <strong className="text-white font-semibold block">Zero Vendor Lock-In:</strong>
                  <p className="text-[#c7c4d8] text-xs sm:text-sm mt-0.5">
                    Host on your own AWS, Vercel, Netlify, or Hostinger account. If you ever hire in-house engineers, they can pick up the code instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                </div>
                <div>
                  <strong className="text-white font-semibold block">
                    Complete IP Rights &amp; Asset Ownership:
                  </strong>
                  <p className="text-[#c7c4d8] text-xs sm:text-sm mt-0.5">
                    You own the copyright, repository files, design schemas, database structures, and assets. We sign formal Mutual NDAs upon request.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 flex items-center justify-center text-[#c3c0ff] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">folder_zip</span>
                </div>
                <div>
                  <strong className="text-white font-semibold block">Clean Repository Organization:</strong>
                  <p className="text-[#c7c4d8] text-xs sm:text-sm mt-0.5">
                    Well-documented Git branches, environment variable blueprints, and deployment readmes included with every project closeout.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenNdaModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] border border-slate-700 text-xs font-mono text-[#4cd7f6] transition cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">description</span>
                <span>Inspect Mutual NDA Guarantee</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Terminal Visual Component */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#060e20] border border-slate-800 p-4 sm:p-5 shadow-2xl font-mono text-xs text-[#c7c4d8] overflow-hidden">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 -mx-4 -mt-4 px-4 pt-3 bg-[#131b2e]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <div className="ml-2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('manifest')}
                      className={`px-2 py-0.5 rounded text-[11px] transition ${
                        activeTab === 'manifest'
                          ? 'bg-[#222a3d] text-white font-semibold'
                          : 'text-[#918fa1] hover:text-white'
                      }`}
                    >
                      repository-manifest.json
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('schema')}
                      className={`px-2 py-0.5 rounded text-[11px] transition ${
                        activeTab === 'schema'
                          ? 'bg-[#222a3d] text-white font-semibold'
                          : 'text-[#918fa1] hover:text-white'
                      }`}
                    >
                      schema.ts
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('env')}
                      className={`px-2 py-0.5 rounded text-[11px] transition ${
                        activeTab === 'env'
                          ? 'bg-[#222a3d] text-white font-semibold'
                          : 'text-[#918fa1] hover:text-white'
                      }`}
                    >
                      .env.production
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#4edea3] flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px]">lock_open</span>
                    UNENCRYPTED IP
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    title="Copy code"
                    className="p-1 text-[#918fa1] hover:text-white transition"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Code block */}
              <pre className="overflow-x-auto text-[11px] sm:text-[12px] leading-relaxed text-[#acedff] py-2 max-h-72">
                <code>
                  {activeTab === 'manifest' ? (
                    <>
                      {`{\n`}
                      {`  "clientOwnership": {\n`}
                      {`    "status": `}<span className="text-[#4edea3]">"100% UNCONDITIONAL_HANDOVER"</span>,{`\n`}
                      {`    "gitRepository": `}<span className="text-[#4cd7f6]">"github.com/client-org/production"</span>,{`\n`}
                      {`    "vendorLockIn": `}<span className="text-red-400">false</span>,{`\n`}
                      {`    "deliverables": [\n`}
                      {`      "full_source_code_react_nextjs",\n`}
                      {`      "tailwind_design_tokens",\n`}
                      {`      "postgres_database_migrations",\n`}
                      {`      "env_production_templates"\n`}
                      {`    ],\n`}
                      {`    "freedomIndex": `}<span className="text-[#4edea3]">"Self-host anywhere anytime"</span>{`\n`}
                      {`  }\n}`}
                    </>
                  ) : activeTab === 'schema' ? (
                    <span className="text-[#c3c0ff]">{schemaCode}</span>
                  ) : (
                    <span className="text-[#4edea3]">{envCode}</span>
                  )}
                </code>
              </pre>

              {/* Footer strip */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-[#918fa1]">
                <span>Code Mitra Delivery Protocol v3.4</span>
                <span className="text-[#4cd7f6] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                  Ready for deploy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
