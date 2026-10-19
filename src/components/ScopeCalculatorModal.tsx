import React, { useState } from 'react';
import { PRICING_TIERS, ADD_ONS_LIST, Currency } from '../data/pricingData';

interface ScopeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialTier?: string;
  initialAddon?: string;
  onBookCallWithScope: (scopeSummary: string) => void;
  onSendToWhatsApp: (text: string) => void;
}

export const ScopeCalculatorModal: React.FC<ScopeCalculatorModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialTier = 'dynamic',
  initialAddon,
  onBookCallWithScope,
  onSendToWhatsApp,
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(initialTier);
  const [extraPagesCount, setExtraPagesCount] = useState<number>(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    initialAddon ? [initialAddon] : []
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS.find((t) => t.id === selectedTierId) || PRICING_TIERS[1];

  const formatPrice = (inr: number) => {
    const converted = Math.round(inr * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Base calculation
  const baseCostInr = currentTier.basePriceInr;
  const extraPagesCostInr = extraPagesCount * 800;
  const addonsCostInr = selectedAddons.reduce((sum, addonId) => {
    const addon = ADD_ONS_LIST.find((a) => a.id === addonId);
    return sum + (addon ? addon.priceInr : 0);
  }, 0);

  const totalCostInr = baseCostInr + extraPagesCostInr + addonsCostInr;

  // Turnaround days calculation
  const baseDays = selectedTierId === 'static' ? 6 : selectedTierId === 'dynamic' ? 10 : 12;
  const totalDays = baseDays + Math.ceil(extraPagesCount * 0.8) + (selectedAddons.length > 2 ? 3 : selectedAddons.length > 0 ? 1 : 0);

  const scopeSummaryText = `*Code Mitra Engineering Proposal Estimate*
- Architecture: ${currentTier.title} (${currentTier.tierNumber})
- Extra Custom Pages: +${extraPagesCount} pages
- Selected Add-ons: ${selectedAddons.length > 0 ? selectedAddons.map((id) => ADD_ONS_LIST.find((a) => a.id === id)?.title).join(', ') : 'None'}
- Estimated Investment: ${formatPrice(totalCostInr)}
- Turnaround Target: ~${totalDays} Business Days
- Deliverables: 100% Full Source Code, SSL, Mobile Responsive, Free 30-Day Support`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scopeSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-3xl rounded-2xl bg-[#131b2e] border border-slate-700 shadow-2xl p-5 sm:p-8 my-6 sm:my-8 text-[#dae2fd]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#918fa1] hover:text-white p-2 rounded-lg bg-[#171f33] sm:bg-transparent hover:bg-slate-800 transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs font-semibold">
          <span className="material-symbols-outlined text-[18px]">calculate</span>
          <span>INTERACTIVE SCOPE &amp; INVESTMENT ESTIMATOR</span>
        </div>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
          Configure Your Custom Build Scope
        </h2>
        <p className="mt-1 text-sm text-[#c7c4d8]">
          Adjust baseline tier, page extensions, and third-party integrations to receive an instant transparent itemization.
        </p>

        {/* Step 1: Select Baseline Tier */}
        <div className="mt-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#918fa1] mb-2 font-semibold">
            1. Select Engineering Architecture Tier
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRICING_TIERS.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                  selectedTierId === tier.id
                    ? 'bg-[#222a3d] border-[#4f46e5] shadow-lg ring-1 ring-[#4f46e5]'
                    : 'bg-[#171f33] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#4cd7f6]">{tier.tierNumber}</span>
                  {selectedTierId === tier.id && (
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check_circle</span>
                  )}
                </div>
                <div className="font-bold text-sm text-white mt-1">{tier.title}</div>
                <div className="text-xs font-mono text-[#c3c0ff] mt-0.5">{formatPrice(tier.basePriceInr)}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Extra Custom Formatted Pages */}
        <div className="mt-6 p-4 rounded-xl bg-[#171f33] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-sm text-white">Extra Custom Pages</div>
            <div className="text-xs text-[#c7c4d8] mt-0.5">
              Base tier includes {selectedTierId === 'static' ? '5' : selectedTierId === 'dynamic' ? '10' : '15'} pages. Add more bespoke layouts (+{formatPrice(800)}/page).
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setExtraPagesCount(Math.max(0, extraPagesCount - 1))}
              className="w-8 h-8 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] border border-slate-700 text-white flex items-center justify-center font-bold text-base cursor-pointer"
            >
              -
            </button>
            <span className="font-mono text-base font-bold w-6 text-center tabular-nums text-white">
              {extraPagesCount}
            </span>
            <button
              type="button"
              onClick={() => setExtraPagesCount(extraPagesCount + 1)}
              className="w-8 h-8 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] border border-slate-700 text-white flex items-center justify-center font-bold text-base cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        {/* Step 3: Add-on Modules */}
        <div className="mt-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#918fa1] mb-2 font-semibold">
            2. Modular Add-ons &amp; Integrations
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
            {ADD_ONS_LIST.filter((a) => a.id !== 'extra-page').map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-lg border text-left transition flex items-start gap-2.5 cursor-pointer ${
                    isChecked
                      ? 'bg-[#1e2840] border-[#4cd7f6] text-white'
                      : 'bg-[#171f33] border-slate-800 text-[#c7c4d8] hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
                      isChecked ? 'text-[#4cd7f6]' : 'text-slate-600'
                    }`}
                  >
                    {isChecked ? 'check_box' : 'check_box_outline_blank'}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className={isChecked ? 'text-white' : 'text-[#dae2fd]'}>{addon.title}</span>
                      <span className="font-mono text-[#4cd7f6]">{formatPrice(addon.priceInr)}</span>
                    </div>
                    <p className="text-[11px] text-[#918fa1] mt-0.5 line-clamp-1">{addon.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Calculation Output Strip */}
        <div className="mt-6 p-4 rounded-xl bg-[#060e20] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#918fa1] uppercase tracking-wider">
              Calculated Turnaround &amp; Scope
            </div>
            <div className="text-sm font-semibold text-white mt-0.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3] text-[18px]">verified</span>
              <span>Estimated Delivery: ~{totalDays} Business Days</span>
            </div>
          </div>
          <div className="text-right sm:text-right">
            <span className="text-xs font-mono text-[#918fa1] uppercase tracking-wider">Total Investment</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#dae2fd] tabular-nums">
              {formatPrice(totalCostInr)}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-slate-700 text-xs font-mono text-[#dae2fd] transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Proposal Copied!' : 'Copy Itemized Scope'}</span>
          </button>

          <button
            type="button"
            onClick={() => onSendToWhatsApp(scopeSummaryText)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#006e4b] hover:bg-[#008f62] text-white text-xs font-mono font-semibold transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Discuss on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => onBookCallWithScope(scopeSummaryText)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold transition shadow-[0_4px_16px_rgba(79,70,229,0.3)] cursor-pointer"
          >
            <span>Lock Scope &amp; Book Discovery</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
