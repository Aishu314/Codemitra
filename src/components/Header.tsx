import React, { useState } from 'react';
import { Currency, CURRENCIES } from '../data/pricingData';
import {
  Tag,
  FolderGit2,
  Workflow,
  Boxes,
  HelpCircle,
  Terminal,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  // Distinct navigation items without duplicate Services/Pricing icon:
  // Pricing, Portfolio, Process, Add-ons, FAQ
  const navItems = [
    { id: 'pricing', label: 'Pricing', Icon: Tag, color: 'text-[#c3c0ff]' },
    { id: 'portfolio', label: 'Portfolio', Icon: FolderGit2, color: 'text-[#4edea3]' },
    { id: 'process', label: 'Process', Icon: Workflow, color: 'text-[#acedff]' },
    { id: 'addons', label: 'Add-ons', Icon: Boxes, color: 'text-[#67f4b7]' },
    { id: 'faq', label: 'FAQ', Icon: HelpCircle, color: 'text-[#e2dfff]' },
  ];

  const handleMobileNav = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0b1326]/95 backdrop-blur-xl border-b border-slate-800/90 shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
      >
        <div className="h-16 sm:h-20 max-w-[1360px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 lg:gap-4 overflow-hidden">
          {/* Zone 1: Brand Wordmark & Digital Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-2.5 text-left group transition cursor-pointer"
            >
              {/* Digital Cyber Logo Emblem */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-cyan-400/50 shadow-[0_0_14px_rgba(76,215,246,0.4)] flex items-center justify-center shrink-0 bg-[#060e20] transition-colors"
              >
                <img
                  alt="Code Mitra Digital Logo"
                  className="w-full h-full object-cover"
                  src="/src/assets/images/codemitra_icon_1792431879490.jpg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Brand Typography with Cyber Pulse */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6] hidden sm:inline-block"></span>
                <span className="w-2 h-0.5 bg-[#4cd7f6] rounded hidden sm:inline-block"></span>
                <span className="font-extrabold text-base sm:text-xl text-white tracking-tight leading-tight group-hover:text-[#acedff] transition-colors whitespace-nowrap">
                  Code Mitra
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links with Icons (Pricing, Portfolio, Process, Add-ons, FAQ) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 xl:gap-4 text-xs lg:text-sm">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const { Icon } = item;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                  className={`relative inline-flex items-center gap-1.5 whitespace-nowrap transition-all duration-200 py-1.5 px-2.5 rounded-lg cursor-pointer group ${
                    isActive
                      ? 'text-[#c3c0ff] font-semibold bg-[#171f33]/90 shadow-sm border border-indigo-500/30'
                      : 'text-[#c7c4d8] hover:text-white hover:bg-[#171f33]/50'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                      isActive ? item.color : 'text-[#918fa1] group-hover:text-white'
                    }`}
                  />
                  <span className="font-medium tracking-tight">{item.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-[#4f46e5] via-[#4cd7f6] to-[#4edea3] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Zone 3: Controls & Primary Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Currency Switcher */}
            <div className="relative shrink-0">
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
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenWhatsApp}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-emerald-500/30 text-[#4edea3] transition text-xs font-mono tracking-wider cursor-pointer shrink-0 shadow-sm"
              title="Chat directly on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse shrink-0"></span>
              <span className="hidden xl:inline font-semibold">WHATSAPP CHAT</span>
              <MessageSquare className="w-4 h-4 text-[#4edea3]" />
            </motion.button>

            {/* Client Portal & Repository Button (ALWAYS VISIBLE on Mobile & Desktop) */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenPortal}
              title="Client Repository & 100% IP Handover Portal"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1a253c] hover:bg-[#22304e] border border-[#4cd7f6]/50 text-[#4cd7f6] transition text-xs font-mono shrink-0 cursor-pointer shadow-sm"
            >
              <Terminal className="w-4 h-4 text-[#4cd7f6]" />
              <span className="font-semibold">Repo</span>
            </motion.button>

            {/* Book Discovery Call CTA */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(79,70,229,0.4)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenDiscoveryCall()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#4f46e5] text-white hover:bg-[#5b52f1] transition text-xs sm:text-sm font-semibold shrink-0 cursor-pointer shadow-[0_4px_16px_rgba(79,70,229,0.3)]"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.button>

            {/* Mobile Hamburger Menu Toggle (visible < md) */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-slate-700/80 text-[#dae2fd] transition cursor-pointer shrink-0 flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-Down Drawer / Overlay with Swipe Transitions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Swipe Down from Top */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-16 left-0 right-0 bg-[#0b1326] border-b border-slate-800 shadow-2xl p-4 sm:p-5 max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4"
            >
              {/* Prominent Client Portal & Repository Option */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#171f33] via-[#1c2742] to-[#222a3d] border border-cyan-500/50 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#4cd7f6] shrink-0">
                    <Terminal className="w-5 h-5 text-[#4cd7f6]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Client Repository &amp; IP Portal</span>
                      <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
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
                  className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-[#4cd7f6] hover:bg-[#acedff] text-[#003640] text-xs font-mono font-bold transition cursor-pointer flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Inspect Repository</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation links grid with Icons */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#918fa1] font-semibold block mb-2 px-1">
                  Explore Platform
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {navItems.map((item, idx) => {
                    const { Icon } = item;
                    const isActive = currentTab === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleMobileNav(item.id)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-between ${
                          isActive
                            ? 'bg-[#171f33] border-[#4f46e5] text-[#c3c0ff] shadow-sm'
                            : 'bg-[#131b2e] border-slate-800 text-[#dae2fd] hover:bg-[#171f33]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-[#4cd7f6]'}`} />
                          <span>{item.label}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#918fa1]" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions in mobile menu */}
              <div className="pt-2 flex flex-col gap-2.5 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDiscoveryCall();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Book 15-Min Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
