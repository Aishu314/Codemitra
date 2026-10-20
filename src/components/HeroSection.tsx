import React from 'react';
import { Currency } from '../data/pricingData';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Calculator, Sparkles, Terminal } from 'lucide-react';
import { heroWebDev } from '../assets/images';

interface HeroSectionProps {
  currency: Currency;
  onScrollToAddons: () => void;
  onOpenCalculator: () => void;
  onOpenDiscoveryCall: (preferredTier?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currency,
  onScrollToAddons,
  onOpenCalculator,
  onOpenDiscoveryCall,
}) => {
  const formatRate = (inr: number) => {
    const val = Math.round(inr * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Atmospheric Top Gradient Aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#c3c0ff]/15 via-[#4cd7f6]/10 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-48 right-8 w-[380px] h-[380px] bg-[#4edea3]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-12 sm:pb-16">
        {/* Top Announcement Badge - Swipe Down */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#171f33] text-[#4cd7f6] font-mono text-xs sm:text-sm shadow-md border border-slate-700/80">
            <ShieldCheck className="w-4 h-4 text-[#4edea3]" />
            <span>Code Mitra Transparent Web Engineering Pricing</span>
          </span>
        </motion.div>

        {/* Main Heading & Subheading - Swipe Up */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="mt-5 sm:mt-7 text-center max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#dae2fd] tracking-tight leading-tight sm:leading-[1.15]">
            Launch Your Professional Web Presence with{' '}
            <span className="text-[#c3c0ff] underline decoration-[#4cd7f6] decoration-wavy decoration-2 underline-offset-8">
              Predictable Pricing
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#c7c4d8] max-w-3xl mx-auto leading-relaxed">
            Clear starting rates engineered for ambitious Indian businesses, startups, and institutions. Every package includes clean hand-crafted code, responsive mobile design, SSL deployment, and 100% unconditional source code handover.
          </p>
        </motion.div>

        {/* Hero Interactive Digital Photo & Engineering Studio Showcase - Scale & Fade Up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 max-w-5xl mx-auto rounded-2xl bg-[#171f33] border border-slate-800 shadow-2xl overflow-hidden group"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#060e20]">
            <img
              src={heroWebDev}
              alt="Code Mitra Web Development Engineering Studio"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              onError={(e) => {
                e.currentTarget.src = '/images/hero_web_dev_1792431343087.jpg';
              }}
            />
            {/* Ambient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-[#0b1326]/40 to-transparent"></div>

            {/* Top Bar inside the Studio Screen - Slide from Left & Right */}
            <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b1326]/85 backdrop-blur-md border border-slate-700 text-xs font-mono text-[#dae2fd]"
              >
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                <span className="font-semibold text-white">Bangalore Engineering Studio</span>
                <span className="text-[#918fa1]">| Q2 Build Sprints Active</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b1326]/85 backdrop-blur-md border border-slate-700 text-xs font-mono text-[#4cd7f6]"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>React 19 • Next.js • Tailwind CSS</span>
              </motion.div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-xl"
              >
                <span className="font-mono text-xs text-[#4edea3] font-semibold uppercase tracking-wider block mb-1">
                  100% Unconditional Git Source Handover
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white drop-shadow-md">
                  High-Velocity Engineering with Sovereign Code Ownership
                </h3>
                <p className="text-xs sm:text-sm text-[#c7c4d8] mt-0.5 hidden sm:block">
                  No proprietary lock-in. You own every line of code, database schema, and design token from day one.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 shrink-0"
              >
                <button
                  onClick={() => onOpenDiscoveryCall()}
                  className="px-4 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white font-semibold text-xs sm:text-sm transition shadow-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Quick Overview Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-[#131b2e] text-center font-mono p-1 sm:p-0">
            <motion.div
              whileHover={{ backgroundColor: 'rgba(23, 31, 51, 0.9)' }}
              className="p-3 sm:p-4 transition-colors"
            >
              <span className="text-xs text-[#918fa1] uppercase block font-sans">Static Website</span>
              <span className="text-xl sm:text-2xl font-bold text-white block mt-0.5">{formatRate(10000)}</span>
              <span className="text-[11px] text-[#4cd7f6] block mt-0.5">Portfolio &amp; Profile (5 Pages)</span>
            </motion.div>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
              className="p-3 sm:p-4 bg-[#4f46e5]/10 transition-colors"
            >
              <span className="text-xs text-[#c3c0ff] uppercase block font-semibold font-sans">Dynamic Website</span>
              <span className="text-xl sm:text-2xl font-bold text-white block mt-0.5">{formatRate(20000)}</span>
              <span className="text-[11px] text-[#4edea3] block mt-0.5">Admin &amp; Content CMS (10 Pages)</span>
            </motion.div>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(23, 31, 51, 0.9)' }}
              className="p-3 sm:p-4 transition-colors"
            >
              <span className="text-xs text-[#918fa1] uppercase block font-sans">E-Commerce Website</span>
              <span className="text-xl sm:text-2xl font-bold text-white block mt-0.5">{formatRate(30000)}</span>
              <span className="text-[11px] text-[#4cd7f6] block mt-0.5">Online Store &amp; Orders (15 Pages)</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Bar Metrics - Staggered Swipe Up */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { tag: 'RAPID VELOCITY', icon: 'speed', val: '5–14 Days', desc: 'Turnkey production sprint delivery', color: 'text-[#4cd7f6]' },
            { tag: '100% OWNERSHIP', icon: 'lock_open', val: 'Source Handover', desc: 'Zero vendor lock-in or recurring traps', color: 'text-[#4edea3]' },
            { tag: 'FREE WARRANTY', icon: 'support_agent', val: '30-Day Support', desc: 'Post-launch bug fixes & live checks', color: 'text-[#c3c0ff]' },
            { tag: 'MODERN STACK', icon: 'code_blocks', val: 'Production Grade', desc: 'React, Next.js, Node, PostgreSQL', color: 'text-[#4cd7f6]' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -3, borderColor: 'rgba(76, 215, 246, 0.4)' }}
              className="p-4 sm:p-5 rounded-xl bg-[#171f33] border border-slate-800/80 flex flex-col gap-1 transition duration-200"
            >
              <div className={`flex items-center gap-1.5 ${item.color} font-mono text-xs font-semibold`}>
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span>{item.tag}</span>
              </div>
              <div className="text-lg sm:text-2xl font-extrabold text-[#dae2fd] tabular-nums mt-0.5">{item.val}</div>
              <div className="text-xs text-[#c7c4d8]">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Scope Policy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-4 sm:p-5 rounded-xl bg-[#131b2e] border border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-sm">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[24px] shrink-0">info</span>
            <span className="text-[#dae2fd]">
              <strong className="font-semibold text-[#4cd7f6]">Important Business Policy:</strong> {formatRate(10000)} / {formatRate(20000)} / {formatRate(30000)} are transparent starting baselines. Final investment is tailored transparently based on your exact requirements, operational page count, integrations, and customization.
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto justify-end">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-[#4cd7f6]/40 text-[#4cd7f6] transition cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              Scope Calculator
            </motion.button>
            <motion.button
              whileHover={{ x: 2 }}
              onClick={onScrollToAddons}
              className="inline-flex items-center gap-1 font-mono text-xs text-[#4cd7f6] hover:text-[#acedff] transition cursor-pointer"
            >
              Additional Services <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
