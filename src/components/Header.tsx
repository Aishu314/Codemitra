import React from 'react';
import { Currency, CURRENCIES } from '../data/pricingData';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
  currency: Currency;
  onSelectCurrency: (c: Currency) => void;
  onOpenWhatsApp: () => void;
  onOpenDiscoveryCall: (preferredTier?: string) => void;
  onOpenPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  currency,
  onSelectCurrency,
  onOpenWhatsApp,
  onOpenDiscoveryCall,
  onOpenPortal,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0b1326]/85 backdrop-blur-xl border-b border-slate-800/60 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark & Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('pricing')}
            className="flex items-center gap-2.5 text-left group transition"
          >
            <img
              alt="Code Mitra Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UweIpUl00mT4cF2IWUDlUX5dSlkGKQ4BgrVnA-i9BsZ-kTFG2dJBdsUQfvhWxovWKePpbUlpAZk8X32m27xLnbXaOmRL7DKa0mmndfAHSGyeG3frwGEyzGD6W6TqwJdvx2bPf-nJf2S_WazvWggeiFWVy4iAg338SAniBIxYjaqI0fG35zCPKHIa6eU22vjKHeqUS0VCHN0a6Iklvvb55z9KDa_AmAoP-N3mq0_EMYhQyc_fdqnSThdFc"
            />
            <span className="font-semibold text-lg sm:text-xl text-[#dae2fd] tracking-tight whitespace-nowrap">
              Code Mitra
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {[
            { id: 'services', label: 'Services' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'process', label: 'Process' },
            { id: 'addons', label: 'Add-ons' },
            { id: 'faq', label: 'FAQ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`whitespace-nowrap transition-colors duration-150 py-1 ${
                currentTab === item.id
                  ? 'text-[#c3c0ff] font-semibold border-b-2 border-[#4f46e5]'
                  : 'text-[#c7c4d8] hover:text-[#dae2fd]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Quick Controls & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Currency Switcher */}
          <div className="relative group">
            <select
              aria-label="Select Currency"
              value={currency.code}
              onChange={(e) => onSelectCurrency(CURRENCIES[e.target.value])}
              className="appearance-none bg-[#171f33] hover:bg-[#222a3d] border border-slate-700/80 text-xs font-mono text-[#dae2fd] px-2.5 py-1.5 rounded-lg cursor-pointer transition focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
            >
              <option value="INR">₹ INR</option>
              <option value="USD">$ USD</option>
              <option value="EUR">€ EUR</option>
              <option value="AED">د.إ AED</option>
            </select>
          </div>

          {/* WhatsApp Chat Desk */}
          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-emerald-500/20 text-[#4edea3] transition text-xs font-mono uppercase tracking-wider"
            title="Chat directly with Lead Systems Architect"
          >
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="hidden md:inline font-semibold">WhatsApp Chat</span>
            <span className="material-symbols-outlined text-[17px]">chat</span>
          </button>

          {/* Book Discovery Call CTA */}
          <button
            onClick={() => onOpenDiscoveryCall()}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#4f46e5] text-[#dad7ff] hover:bg-[#5b52f1] hover:text-white transition shadow-[0_4px_16px_rgba(79,70,229,0.25)] text-xs sm:text-sm font-semibold shrink-0 cursor-pointer"
          >
            <span className="hidden sm:inline">Book Discovery Call</span>
            <span className="sm:hidden">Book Call</span>
            <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
          </button>

          {/* Client Portal Preview / IP Repo Avatar */}
          <button
            onClick={onOpenPortal}
            title="Client Repository & IP Portal"
            className="w-8 h-8 rounded-full bg-[#c3c0ff] hover:bg-white text-[#1d00a5] flex items-center justify-center shrink-0 transition cursor-pointer shadow"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
