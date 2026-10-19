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
    { id: 'services', label: 'Services', icon: 'settings_suggest' },
    { id: 'pricing', label: 'Pricing', icon: 'payments' },
    { id: 'portfolio', label: 'Portfolio', icon: 'folder_open' },
    { id: 'process', label: 'Process', icon: 'timeline' },
    { id: 'addons', label: 'Add-ons', icon: 'extension' },
    { id: 'faq', label: 'FAQ', icon: 'quiz' },
  ];

  const handleMobileNav = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0b1326]/95 backdrop-blur-xl border-b border-slate-800/90 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
        <div className="h-16 sm:h-20 max-w-[1280px] mx-auto px-2.5 sm:px-6 flex items-center justify-between gap-1 sm:gap-4">
          {/* Zone 1: Brand Wordmark & Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('pricing')}
              className="flex items-center gap-1.5 sm:gap-2 text-left group transition cursor-pointer"
            >
              <img
                alt="Code Mitra Logo"
                className="h-6 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UweIpUl00mT4cF2IWUDlUX5dSlkGKQ4BgrVnA-i9BsZ-kTFG2dJBdsUQfvhWxovWKePpbUlpAZk8X32m27xLnbXaOmRL7DKa0mmndfAHSGyeG3frwGEyzGD6W6TqwJdvx2bPf-nJf2S_WazvWggeiFWVy4iAg338SAniBIxYjaqI0fG35zCPKHIa6eU22vjKHeqUS0VCHN0a6Iklvvb55z9KDa_AmAoP-N3mq0_EMYhQyc_fdqnSThdFc"
              />
              <span className="font-bold text-sm sm:text-xl text-[#dae2fd] tracking-tight whitespace-nowrap">
                Code Mitra
              </span>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Links (hidden < xl) */}
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

          {/* Zone 3: Controls & Primary Actions (Designed to fit on mobile down to 320px) */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            {/* Currency Switcher */}
            <div className="relative shrink-0">
              <select
                aria-label="Select Currency"
                value={currency.code}
                onChange={(e) => onSelectCurrency(CURRENCIES[e.target.value])}
                className="appearance-none bg-[#171f33] hover:bg-[#222a3d] border border-slate-700/80 text-[11px] sm:text-xs font-mono text-[#dae2fd] px-1.5 sm:px-2.5 py-1.5 rounded-lg cursor-pointer transition focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
                <option value="AED">د.إ AED</option>
              </select>
            </div>

            {/* WhatsApp Chat button (compact on mobile) */}
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center justify-center gap-1 p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-emerald-500/30 text-[#4edea3] transition text-xs font-mono uppercase tracking-wider cursor-pointer shrink-0"
              title="Chat directly on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="hidden md:inline font-semibold">WhatsApp Chat</span>
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
            </button>

            {/* Client Portal & Repository Button (ALWAYS VISIBLE on Mobile & Desktop) */}
            <button
              onClick={onOpenPortal}
              title="Client Repository & IP Handover Portal"
              className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] border border-[#4cd7f6]/40 text-[#4cd7f6] transition text-[11px] sm:text-xs font-mono shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[15px] sm:text-[17px]">terminal</span>
              <span className="font-semibold">Repo</span>
            </button>

            {/* Book Discovery Call CTA (responsive text) */}
            <button
              onClick={() => onOpenDiscoveryCall()}
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#4f46e5] text-[#dad7ff] hover:bg-[#5b52f1] hover:text-white transition shadow-[0_4px_16px_rgba(79,70,229,0.25)] text-xs sm:text-sm font-semibold shrink-0 cursor-pointer active:scale-95"
            >
              <span className="hidden sm:inline">Book Discovery Call</span>
              <span className="sm:hidden">Book</span>
              <span className="material-symbols-outlined text-[14px] sm:text-[17px]">arrow_forward</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (visible < xl) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-slate-700/80 text-[#dae2fd] transition cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <span className="material-symbols-outlined text-[19px]">
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
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-16 left-0 right-0 bg-[#0b1326] border-b border-slate-800 shadow-2xl p-4 sm:p-5 max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            {/* Featured Client Portal & Repository Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#171f33] via-[#1a233a] to-[#222a3d] border border-cyan-500/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#4cd7f6] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">terminal</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Client Repository &amp; IP Portal</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                  </div>
                  <div className="text-[11px] font-mono text-[#918fa1]">
                    100% Unconditional Git Source Handover
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-[#4cd7f6] hover:bg-[#acedff] text-[#003640] text-xs font-mono font-bold transition cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Inspect Repository</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>

            {/* Navigation links grid */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#918fa1] font-semibold block mb-2 px-1">
                Explore Platform
              </span>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNav(item.id)}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-between ${
                      currentTab === item.id
                        ? 'bg-[#171f33] border-[#4f46e5] text-[#c3c0ff] shadow-sm'
                        : 'bg-[#131b2e] border-slate-800 text-[#dae2fd] hover:bg-[#171f33]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-[15px] text-[#918fa1]">
                      chevron_right
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fast Quick Actions inside mobile menu */}
            <div className="pt-2 flex flex-col gap-2.5 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#171f33] hover:bg-[#222a3d] border border-emerald-500/30 text-[#4edea3] text-xs font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer"
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
