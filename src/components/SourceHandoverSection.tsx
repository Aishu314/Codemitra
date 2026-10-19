import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Key, Check, Copy, ExternalLink, ShieldCheck, Terminal as TerminalIcon, FileCode, CheckCircle2 } from 'lucide-react';

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
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20" id="ethos">
      <div className="rounded-2xl bg-[#171f33] border border-slate-800 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Ambient backglow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Ethos & Pillars - Swipe In from Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <span className="font-mono text-xs text-[#4edea3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
              <Key className="w-4 h-4 text-[#4edea3]" />
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
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6]" />
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
                  <ShieldCheck className="w-4 h-4 text-[#4edea3]" />
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
                  <FileCode className="w-4 h-4 text-[#c3c0ff]" />
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
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={onOpenNdaModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] border border-slate-700 text-xs font-mono text-[#4cd7f6] transition cursor-pointer"
              >
                <TerminalIcon className="w-4 h-4 text-[#4cd7f6]" />
                <span>Inspect Mutual NDA Guarantee</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Digital Photo + Code Terminal Visual Component - Swipe In from Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {/* Digital Photo Preview */}
            <div className="rounded-xl overflow-hidden border border-slate-700/80 aspect-[16/9] relative group bg-[#060e20] shadow-xl">
              <img
                src="/src/assets/images/git_handover_preview_1792431346200.jpg"
                alt="Git Source Code Repository Handover Terminal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-75"></div>
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="bg-[#0b1326]/90 px-2 py-0.5 rounded border border-slate-700">100% IP Handover Console</span>
                <span className="bg-[#4edea3]/20 text-[#4edea3] px-2 py-0.5 rounded border border-[#4edea3]/40">Deploy Ready v3.4</span>
              </div>
            </div>

            {/* Terminal Inspector with Animated Tab Switching */}
            <div className="rounded-xl bg-[#060e20] border border-slate-800 p-4 sm:p-5 shadow-2xl font-mono text-xs text-[#c7c4d8] overflow-hidden">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 -mx-4 -mt-4 px-4 pt-3 bg-[#131b2e]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <div className="ml-2 flex items-center gap-1">
                    {[
                      { id: 'manifest', label: 'manifest.json' },
                      { id: 'schema', label: 'schema.ts' },
                      { id: 'env', label: '.env.production' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-2 py-0.5 rounded text-[11px] transition cursor-pointer ${
                          activeTab === tab.id
                            ? 'bg-[#222a3d] text-white font-semibold'
                            : 'text-[#918fa1] hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1 text-[11px] text-[#4cd7f6] hover:text-[#acedff] transition cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </motion.button>
                </div>
              </div>

              {/* Code display with digital swipe transition */}
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-x-auto text-[11px] sm:text-[12px] leading-relaxed text-[#acedff] py-1 max-h-52"
                >
                  <code>{getCurrentCode()}</code>
                </motion.pre>
              </AnimatePresence>

              <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] text-[#918fa1] border-t border-slate-800">
                <span>Code Mitra Delivery Protocol</span>
                <span className="text-[#4edea3] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">lock_open</span>
                  Unencrypted Git IP
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
