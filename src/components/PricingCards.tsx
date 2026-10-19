import React from 'react';
import { PRICING_TIERS, PricingTier, Currency } from '../data/pricingData';

interface PricingCardsProps {
  currency: Currency;
  onSelectTier: (tierId: string) => void;
  onViewBlueprint: (tierId: string) => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({
  currency,
  onSelectTier,
  onViewBlueprint,
}) => {
  const formatPrice = (inr: number) => {
    const converted = Math.round(inr * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {PRICING_TIERS.map((tier: PricingTier) => {
          const isPopular = tier.popular;

          return (
            <div
              key={tier.id}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition duration-200 relative border ${
                isPopular
                  ? 'bg-[#222a3d] border-indigo-500/50 shadow-2xl hover:bg-[#28324a] -mt-0 lg:-mt-3 mb-0 lg:mb-3'
                  : 'bg-[#171f33] border-slate-800 hover:bg-[#1d273f] hover:border-slate-700 shadow-lg'
              }`}
            >
              {/* Ambient Glow for Popular Tier */}
              {isPopular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4f46e5] via-[#4cd7f6] to-[#c3c0ff] rounded-2xl blur-xl opacity-20 -z-10 pointer-events-none"></div>
              )}

              <div>
                {/* Header row: Badge & Tier number */}
                <div className="flex items-center justify-between gap-2">
                  {isPopular ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4f46e5] text-[#dad7ff] font-mono text-xs font-semibold shadow">
                      <span className="material-symbols-outlined text-[15px] animate-spin">bolt</span>
                      {tier.badge}
                    </span>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#2d3449] font-mono text-xs font-semibold ${
                        tier.id === 'ecommerce' ? 'text-[#4edea3]' : 'text-[#c7c4d8]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">{tier.badgeIcon}</span>
                      {tier.badge}
                    </span>
                  )}
                  <span
                    className={`font-mono text-xs ${
                      isPopular ? 'text-[#4cd7f6] font-bold' : 'text-[#c7c4d8]'
                    }`}
                  >
                    {isPopular ? 'RECOMMENDED' : tier.tierNumber}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-2xl font-bold text-[#dae2fd] flex items-center gap-2">
                  <span>{tier.title}</span>
                  {isPopular && (
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">verified</span>
                  )}
                </h3>
                <p className="mt-1.5 text-sm text-[#c7c4d8] min-h-[44px] leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Box */}
                <div
                  className={`mt-6 p-4 rounded-lg border ${
                    isPopular
                      ? 'bg-[#171f33] border-slate-700/80'
                      : 'bg-[#131b2e] border-slate-800'
                  }`}
                >
                  <span
                    className={`text-xs uppercase tracking-wider block font-medium ${
                      isPopular ? 'text-[#4cd7f6]' : 'text-[#c7c4d8]'
                    }`}
                  >
                    Starting At
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tabular-nums">
                      {formatPrice(tier.basePriceInr)}
                    </span>
                    <span className="font-mono text-xs text-[#c7c4d8]">/ one-time</span>
                  </div>
                  <p
                    className={`text-xs mt-1.5 flex items-center gap-1 font-medium ${
                      isPopular
                        ? 'text-[#4edea3]'
                        : tier.id === 'ecommerce'
                        ? 'text-[#4edea3]'
                        : 'text-[#4cd7f6]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      {isPopular ? 'bolt' : tier.id === 'ecommerce' ? 'local_shipping' : 'schedule'}
                    </span>
                    Delivery: {tier.deliveryDays}
                  </p>
                </div>

                {/* Ideal For */}
                <div className="mt-4">
                  <span
                    className={`text-xs uppercase tracking-wider font-semibold block ${
                      isPopular ? 'text-[#4cd7f6]' : 'text-[#918fa1]'
                    }`}
                  >
                    Ideal For
                  </span>
                  <p className="mt-1 text-sm text-[#dae2fd] leading-relaxed">{tier.idealFor}</p>
                </div>

                {/* What's Included */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#918fa1]">
                    {tier.includedListTitle}
                  </span>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#dae2fd]">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-snug">
                        <span
                          className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
                            isPopular
                              ? 'text-[#4cd7f6]'
                              : tier.id === 'ecommerce'
                              ? 'text-[#4edea3]'
                              : 'text-[#4cd7f6]'
                          }`}
                        >
                          {isPopular ? 'task_alt' : tier.id === 'ecommerce' && idx === 0 ? 'shopping_bag' : 'check_circle'}
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: feat.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-white font-semibold">$1</strong>'
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture / Blueprint Box */}
                {tier.id === 'static' && (
                  <button
                    onClick={() => onViewBlueprint('cafe-bella')}
                    className="w-full mt-6 p-3 rounded-lg bg-[#060e20] hover:bg-[#0b1326] border border-slate-800 text-[#c7c4d8] text-xs flex items-start gap-2.5 text-left transition group cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[#c3c0ff] text-[18px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      lightbulb
                    </span>
                    <div>
                      <strong className="text-[#dae2fd] font-semibold block group-hover:text-white">
                        Real Blueprint (Click to View):
                      </strong>
                      <span>{tier.highlightBox.content}</span>
                    </div>
                  </button>
                )}

                {tier.id === 'dynamic' && (
                  <div className="mt-6 p-3 rounded-lg bg-[#171f33] border border-slate-800 text-xs flex flex-col gap-2">
                    <span className="text-[#4cd7f6] font-mono text-[11px] uppercase tracking-wider flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[15px]">account_tree</span>
                      {tier.highlightBox.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.highlightBox.tags?.map((tag, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() => onViewBlueprint('vidya-lms')}
                          className="px-2 py-0.5 rounded bg-[#2d3449] hover:bg-[#38415c] text-[#dae2fd] text-[11px] font-mono transition cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {tier.id === 'ecommerce' && (
                  <button
                    onClick={() => onViewBlueprint('vanya-organics')}
                    className="w-full mt-6 p-3 rounded-lg bg-[#060e20] hover:bg-[#0b1326] border border-slate-800 text-xs flex flex-col gap-2 text-left transition group cursor-pointer"
                  >
                    <span className="text-[#4edea3] font-mono text-[11px] uppercase tracking-wider flex items-center gap-1 font-semibold group-hover:text-white">
                      <span className="material-symbols-outlined text-[15px]">linear_scale</span>
                      {tier.highlightBox.title}
                    </span>
                    <div className="font-mono text-[11px] text-[#c7c4d8] flex items-center justify-between">
                      <span>Order</span> → <span>Pay</span> → <span>Confirm</span> → <span>Dispatch</span> →{' '}
                      <span className="text-[#4edea3] font-bold">Delivered</span>
                    </div>
                  </button>
                )}

                {/* Safeguard Limitation */}
                <div
                  className={`mt-3 p-3 rounded-lg text-[#918fa1] text-xs flex items-start gap-2 border ${
                    isPopular
                      ? 'bg-[#171f33]/60 border-slate-700/40'
                      : 'bg-[#2d3449]/40 border-slate-800/60'
                  }`}
                >
                  <span className="material-symbols-outlined text-[#918fa1] text-[16px] shrink-0 mt-0.5">
                    {tier.id === 'ecommerce' ? 'account_balance_wallet' : tier.id === 'dynamic' ? 'info' : 'block'}
                  </span>
                  <span className="leading-relaxed">{tier.limitations}</span>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-8">
                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition duration-150 cursor-pointer shadow-md ${
                    isPopular
                      ? 'bg-[#4f46e5] text-white hover:bg-[#5b52f1] shadow-[0_4px_20px_rgba(79,70,229,0.4)]'
                      : 'bg-[#2d3449] text-[#dae2fd] hover:bg-[#38415c] hover:text-white border border-slate-700/60'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
