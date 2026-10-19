import React, { useState } from 'react';
import { COMPARISON_MATRIX, Currency } from '../data/pricingData';

interface ComparisonTableProps {
  currency: Currency;
  onSelectTier: (tierId: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  currency,
  onSelectTier,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyDifferences, setOnlyDifferences] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const formatPrice = (inr: number) => {
    const converted = Math.round(inr * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const renderCellContent = (val: string | boolean, isHighlighted = false) => {
    if (val === true) {
      return (
        <span className="material-symbols-outlined text-[20px] text-[#4edea3]">check</span>
      );
    }
    if (val === false) {
      return <span className="text-[#918fa1] text-base">—</span>;
    }
    return (
      <span
        className={`font-mono text-xs font-semibold ${
          isHighlighted ? 'text-[#4cd7f6]' : 'text-[#dae2fd]'
        }`}
      >
        {val}
      </span>
    );
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20" id="comparison-section">
      {/* Title & Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
            Granular Matrix
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-bold text-[#dae2fd]">
            Detailed Package Comparison
          </h2>
          <p className="mt-1 text-sm sm:text-base text-[#c7c4d8]">
            Compare architectural capabilities, inclusions, and engineering deliverables side by side.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#171f33] border border-slate-700/80 rounded-lg px-3 py-1.5 pl-8 text-xs text-[#dae2fd] focus:outline-none focus:ring-1 focus:ring-[#4cd7f6] w-40 sm:w-48 placeholder:text-[#918fa1]"
            />
            <span className="material-symbols-outlined absolute left-2 top-2 text-[16px] text-[#918fa1]">
              search
            </span>
          </div>

          {/* Differences only toggle */}
          <button
            onClick={() => setOnlyDifferences(!onlyDifferences)}
            className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border transition cursor-pointer ${
              onlyDifferences
                ? 'bg-[#4f46e5]/30 border-[#4f46e5] text-white'
                : 'bg-[#171f33] border-slate-700/80 text-[#c7c4d8] hover:text-[#dae2fd]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">
              {onlyDifferences ? 'check_box' : 'check_box_outline_blank'}
            </span>
            Show Differences Only
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171f33] border border-slate-800 text-[#dae2fd] font-mono text-xs">
            <span className="material-symbols-outlined text-[#4edea3] text-[18px]">verified_user</span>
            <span>Zero hidden charges.</span>
          </div>
        </div>
      </div>

      {/* Comparison Table Box */}
      <div className="overflow-x-auto rounded-xl shadow-xl bg-[#171f33] border border-slate-800">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#222a3d] text-[#dae2fd] border-b border-slate-700/80">
              <th className="py-4 px-6 font-semibold w-2/5">Feature Specification</th>
              <th className="py-4 px-4 font-semibold text-center w-1/5">
                <button
                  onClick={() => onSelectTier('static')}
                  className="hover:text-white transition group inline-flex flex-col items-center"
                >
                  <span className="group-hover:underline">Static</span>
                  <span className="block font-mono text-xs text-[#c7c4d8] font-normal">
                    {formatPrice(10000)}
                  </span>
                </button>
              </th>
              <th className="py-4 px-4 font-semibold text-center w-1/5 bg-[#4f46e5]/15 border-x border-[#4f46e5]/30 text-[#c3c0ff]">
                <button
                  onClick={() => onSelectTier('dynamic')}
                  className="hover:text-white transition group inline-flex flex-col items-center"
                >
                  <span className="group-hover:underline font-bold">Dynamic</span>
                  <span className="block font-mono text-xs text-[#4cd7f6] font-normal">
                    {formatPrice(20000)} (Popular)
                  </span>
                </button>
              </th>
              <th className="py-4 px-4 font-semibold text-center w-1/5">
                <button
                  onClick={() => onSelectTier('ecommerce')}
                  className="hover:text-white transition group inline-flex flex-col items-center"
                >
                  <span className="group-hover:underline">E-Commerce</span>
                  <span className="block font-mono text-xs text-[#c7c4d8] font-normal">
                    {formatPrice(30000)}
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {COMPARISON_MATRIX.map((group, groupIdx) => {
              const filteredItems = group.items.filter((item) => {
                if (
                  searchTerm &&
                  !item.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return false;
                }
                if (onlyDifferences) {
                  return !(
                    item.staticVal === item.dynamicVal &&
                    item.dynamicVal === item.ecommerceVal
                  );
                }
                return true;
              });

              if (filteredItems.length === 0) return null;

              return (
                <React.Fragment key={groupIdx}>
                  <tr className="bg-[#131b2e] font-semibold text-xs uppercase tracking-wider text-[#4cd7f6]">
                    <td className="py-2.5 px-6" colSpan={4}>
                      {group.category}
                    </td>
                  </tr>

                  {filteredItems.map((item, rowIdx) => {
                    const isDiff =
                      item.staticVal !== item.dynamicVal ||
                      item.dynamicVal !== item.ecommerceVal;

                    return (
                      <tr
                        key={rowIdx}
                        className={`hover:bg-[#222a3d]/60 transition ${
                          isDiff && onlyDifferences ? 'bg-[#1b253b]/40' : ''
                        }`}
                      >
                        <td className="py-3.5 px-6 text-[#dae2fd] font-medium">
                          <div className="flex items-center gap-2">
                            <span>{item.name}</span>
                            {item.tooltip && (
                              <div className="relative inline-block">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setActiveTooltip(
                                      activeTooltip === item.name ? null : item.name
                                    )
                                  }
                                  className="text-[#918fa1] hover:text-[#4cd7f6] transition cursor-pointer"
                                >
                                  <span className="material-symbols-outlined text-[15px]">
                                    help_outline
                                  </span>
                                </button>
                                {activeTooltip === item.name && (
                                  <div className="absolute left-6 top-0 z-30 w-64 p-2.5 rounded bg-[#0b1326] border border-slate-700 text-xs text-[#c7c4d8] shadow-2xl">
                                    {item.tooltip}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(item.staticVal)}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-[#4f46e5]/5 border-x border-[#4f46e5]/20">
                          {renderCellContent(item.dynamicVal, true)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(item.ecommerceVal)}
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
