import React from 'react';
import { ADD_ONS_LIST, Currency } from '../data/pricingData';
import { motion } from 'motion/react';
import { Sliders, Calculator, Check, FileCheck } from 'lucide-react';

interface AddOnsSectionProps {
  currency: Currency;
  onOpenCalculatorWithItem?: (addonId: string) => void;
  onOpenCalculator: () => void;
}

export const AddOnsSection: React.FC<AddOnsSectionProps> = ({
  currency,
  onOpenCalculatorWithItem,
  onOpenCalculator,
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20" id="addons-section">
      <div className="p-6 sm:p-10 rounded-2xl bg-[#131b2e] border border-slate-800 shadow-xl">
        {/* Header - Swipe Up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#222a3d] text-[#4cd7f6] font-mono text-xs font-semibold">
              <Sliders className="w-3.5 h-3.5" />
              MODULAR EXPANSIONS
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-[#dae2fd]">
              Add-On Services &amp; Scope Extensions
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#c7c4d8] max-w-2xl leading-relaxed">
              Why an unbundled rate card? We keep core packages accessible so startups only pay for what they truly need today, with predictable flat-rate engineering for scope additions tomorrow.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4edea3] bg-[#006e4b]/20 border border-[#4edea3]/30 px-3.5 py-1.5 rounded-lg">
              <FileCheck className="w-4 h-4 text-[#4edea3]" />
              Pre-agreed scope. No invoice surprises.
            </span>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white bg-[#4f46e5] hover:bg-[#5b52f1] px-3.5 py-1.5 rounded-lg transition shadow-md cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              Launch Custom Estimator
            </motion.button>
          </div>
        </motion.div>

        {/* Add-ons Bento Grid - Staggered Swipe Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8">
          {ADD_ONS_LIST.map((addon, idx) => {
            return (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
                whileHover={{ y: -4, borderColor: 'rgba(76, 215, 246, 0.4)' }}
                className="p-5 rounded-xl bg-[#171f33] border border-slate-800 hover:border-slate-700 hover:bg-[#1d273f] transition duration-150 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-[#dae2fd] group-hover:text-white transition">
                      {addon.title}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold tabular-nums ${
                        addon.isCustomQuote
                          ? 'text-[#c3c0ff]'
                          : addon.id === 'extra-page'
                          ? 'text-[#4edea3]'
                          : addon.id === 'payment-gateway'
                          ? 'text-[#c3c0ff]'
                          : 'text-[#4cd7f6]'
                      }`}
                    >
                      {addon.priceDisplay}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#c7c4d8] leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[#c7c4d8] font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-xs">
                    <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                    {addon.benefit}
                  </span>
                  {onOpenCalculatorWithItem && (
                    <button
                      onClick={() => onOpenCalculatorWithItem(addon.id)}
                      className="text-[#4cd7f6] hover:text-[#acedff] transition text-[11px] underline decoration-slate-600 underline-offset-2 cursor-pointer"
                    >
                      + Add to estimate
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
