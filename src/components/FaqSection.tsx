import React, { useState } from 'react';
import { FAQS } from '../data/pricingData';

interface FaqSectionProps {
  onOpenWhatsAppQuestion: (question?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsAppQuestion }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Billing & Scope', 'Infrastructure', 'Integrations', 'Support & Warranty', 'Code Ownership'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      !searchTerm ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20" id="faq-section">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
          Got Questions?
        </span>
        <h2 className="mt-1.5 text-2xl sm:text-4xl font-bold text-[#dae2fd]">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-sm sm:text-base text-[#c7c4d8]">
          Straight answers regarding billing terms, technical dependencies, and handover protocols.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-3xl mx-auto mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-xs rounded-lg font-mono transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#4f46e5] text-white font-semibold'
                  : 'bg-[#171f33] text-[#c7c4d8] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-56 shrink-0">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#171f33] border border-slate-700/80 rounded-lg px-3 py-1.5 pl-8 text-xs text-[#dae2fd] focus:outline-none focus:ring-1 focus:ring-[#4cd7f6] placeholder:text-[#918fa1]"
          />
          <span className="material-symbols-outlined absolute left-2 top-2 text-[16px] text-[#918fa1]">
            search
          </span>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="rounded-xl bg-[#171f33] border border-slate-800/80 overflow-hidden transition duration-150"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#dae2fd] hover:bg-[#222a3d] transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[#4cd7f6]">{faq.category}:</span>
                  <span>{faq.question}</span>
                </div>
                <span
                  className={`material-symbols-outlined text-[#4cd7f6] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 pt-0 text-sm text-[#c7c4d8] leading-relaxed border-t border-slate-800/40 mt-1">
                  <p>{faq.answer}</p>
                  <div className="mt-3 pt-2.5 flex items-center justify-between text-xs font-mono text-[#918fa1]">
                    <span>Need specific guidance on this?</span>
                    <button
                      type="button"
                      onClick={() => onOpenWhatsAppQuestion(faq.question)}
                      className="text-[#4edea3] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ask Lead Architect</span>
                      <span className="material-symbols-outlined text-[13px]">chat</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-[#918fa1] text-sm">
            No questions match "{searchTerm}". Click below to ask our team directly.
          </div>
        )}
      </div>

      {/* Quick query trigger */}
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => onOpenWhatsAppQuestion()}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#4edea3] hover:text-white transition px-4 py-2 rounded-lg bg-[#171f33] border border-[#4edea3]/30 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">help_center</span>
          <span>Don't see your question? Chat directly with Bangalore engineering leads</span>
        </button>
      </div>
    </section>
  );
};
