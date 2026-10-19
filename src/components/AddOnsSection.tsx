import React from 'react';
import { ADD_ONS_LIST, Currency } from '../data/pricingData';

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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#222a3d] text-[#4cd7f6] font-mono text-xs font-semibold">
              <span className="material-symbols-outlined text-[15px]">tune</span>
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
              <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              Pre-agreed scope. No invoice surprises.
            </span>
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white bg-[#4f46e5] hover:bg-[#5b52f1] px-3.5 py-1.5 rounded-lg transition shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">calculate</span>
              Launch Custom Estimator
            </button>
          </div>
        </div>

        {/* Add-ons Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8">
          {ADD_ONS_LIST.map((addon) => {
            return (
              <div
                key={addon.id}
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
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#4edea3] text-[15px]">done</span>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
