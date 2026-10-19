import React, { useState } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'addons', label: 'Add-ons' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleMobileNav = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0b1326]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
        <div className="h-16 sm:h-20 max-w-[1280px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Zone 1: Brand Wordmark & Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('pricing')}
              className="flex items-center gap-2 text-left group transition cursor-pointer"
            >
              <img
                alt="Code Mitra Logo"
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UweIpUl00mT4cF2IWUDlUX5dSlkGKQ4BgrVnA-i9BsZ-kTFG2dJBdsUQfvhWxovWKePpbUlpAZk8X32m27xLnbXaOmRL7DKa0mmndfAHSGyeG3frwGEyzGD6W6TqwJdvx2bPf-nJf2S_WazvWggeiFWVy4iAg338SAniBIxYjaqI0fG35zCPKHIa6eU22vjKHeqUS0VCHN0a6Iklvvb55z9KDa_AmAoP-N3mq0_EMYhQyc_fdqnSThdFc"
              />
              <span className="font-bold text-base sm:text-xl text-[#dae2fd] tracking-tight whitespace-nowrap">
                Code Mitra
              </span>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Links (hidden on mobile/tablet) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap transition-colors duration-150 py-1 cursor-pointer ${
                  currentTab === item.id
                    ? 'text-[#c3c0ff] font-semibold border-b-2 border-[#4f46e5]'
                    : 'text-[#c7c4d8] hover:text-[#dae2fd]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Controls & Primary Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Currency Switcher */}
            <div className="relative">
              <select
                aria-label="Select Currency"
                value={currency.code}
                onChange={(e) => onSelectCurrency(CURRENCIES[e.target.value])}
                className="appearance-none bg-[#171f33] hover:bg-[#222a3d] border border-slate-700/80 text-[11px] sm:text-xs font-mono text-[#dae2fd] px-2 sm:px-2.5 py-1.5 rounded-lg cursor-pointer transition focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
                <option value="AED">د.إ AED</option>
              </select>
            </div>

            {/* WhatsApp Chat button */}
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-emerald-500/30 text-[#4edea3] transition text-xs font-mono uppercase tracking-wider cursor-pointer"
              title="Chat directly with Lead Systems Architect"
            >
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="hidden md:inline font-semibold">WhatsApp Chat</span>
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
            </button>

            {/* Book Discovery Call CTA */}
            <button
              onClick={() => onOpenDiscoveryCall()}
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#4f46e5] text-[#dad7ff] hover:bg-[#5b52f1] hover:text-white transition shadow-[0_4px_16px_rgba(79,70,229,0.25)] text-xs sm:text-sm font-semibold shrink-0 cursor-pointer"
            >
              <span className="hidden sm:inline">Book Discovery Call</span>
              <span className="sm:hidden">Book Call</span>
              <span className="material-symbols-outlined text-[15px] sm:text-[17px]">arrow_forward</span>
            </button>

            {/* Client Portal Preview Avatar (hidden on tiny screens, available in mobile menu) */}
            <button
              onClick={onOpenPortal}
              title="Client Repository & IP Portal"
              className="hidden sm:flex w-8 h-8 rounded-full bg-[#c3c0ff] hover:bg-white text-[#1d00a5] items-center justify-center shrink-0 transition cursor-pointer shadow"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (visible < xl) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-slate-700/80 text-[#dae2fd] transition cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-16 left-0 right-0 bg-[#0b1326] border-b border-slate-800 shadow-2xl p-5 max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
                Navigation Menu
              </span>
              <button
                onClick={onOpenPortal}
                className="inline-flex items-center gap-1.5 text-xs text-[#c3c0ff] font-mono hover:underline cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">person</span>
                <span>Client Repository Portal</span>
              </button>
            </div>

            {/* Nav links */}
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNav(item.id)}
                  className={`p-3 rounded-xl border text-left text-sm font-semibold transition cursor-pointer flex items-center justify-between ${
                    currentTab === item.id
                      ? 'bg-[#171f33] border-[#4f46e5] text-[#c3c0ff]'
                      : 'bg-[#131b2e] border-slate-800/80 text-[#dae2fd] hover:bg-[#171f33]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[16px] text-[#918fa1]">
                    chevron_right
                  </span>
                </button>
              ))}
            </div>

            {/* Fast Quick Actions inside mobile menu */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#171f33] border border-emerald-500/30 text-[#4edea3] text-xs font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                <span>Chat on WhatsApp Desk (Avg &lt; 15m)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiscoveryCall();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book 15-Min Discovery Call</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
