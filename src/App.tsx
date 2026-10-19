/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CURRENCIES, Currency } from './data/pricingData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PricingCards } from './components/PricingCards';
import { ComparisonTable } from './components/ComparisonTable';
import { AddOnsSection } from './components/AddOnsSection';
import { ScopeCalculatorModal } from './components/ScopeCalculatorModal';
import { SourceHandoverSection } from './components/SourceHandoverSection';
import { FaqSection } from './components/FaqSection';
import { BottomCta } from './components/BottomCta';
import { Footer } from './components/Footer';
import { DiscoveryCallModal } from './components/DiscoveryCallModal';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { PortfolioModal } from './components/PortfolioModal';
import { NdaModal } from './components/NdaModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { ProcessModal } from './components/ProcessModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('pricing');
  const [currency, setCurrency] = useState<Currency>(CURRENCIES.INR);

  // Modals state
  const [discoveryModalOpen, setDiscoveryModalOpen] = useState(false);
  const [selectedTierForBooking, setSelectedTierForBooking] = useState('dynamic');
  const [scopeNoteForBooking, setScopeNoteForBooking] = useState('');

  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState('');

  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [selectedPortfolioId, setSelectedPortfolioId] = useState('cafe-bella');

  const [ndaOpen, setNdaOpen] = useState(false);
  const [clientPortalOpen, setClientPortalOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calculatorInitialTier, setCalculatorInitialTier] = useState('dynamic');
  const [calculatorInitialAddon, setCalculatorInitialAddon] = useState<string | undefined>(undefined);

  // Navigation router
  const handleNavigate = (tabId: string) => {
    setCurrentTab(tabId);
    if (tabId === 'pricing') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'addons') {
      const el = document.getElementById('addons-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'faq') {
      const el = document.getElementById('faq-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'portfolio') {
      setSelectedPortfolioId('cafe-bella');
      setPortfolioOpen(true);
    } else if (tabId === 'process') {
      setProcessOpen(true);
    } else if (tabId === 'services') {
      const el = document.getElementById('comparison-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDiscoveryCall = (tierId = 'dynamic', note = '') => {
    setSelectedTierForBooking(tierId);
    setScopeNoteForBooking(note);
    setDiscoveryModalOpen(true);
  };

  const handleOpenWhatsApp = (message = '') => {
    setWhatsAppMessage(message);
    setWhatsAppOpen(true);
  };

  const handleViewBlueprint = (blueprintId: string) => {
    setSelectedPortfolioId(blueprintId);
    setPortfolioOpen(true);
  };

  const handleOpenCalculatorWithItem = (addonId: string) => {
    setCalculatorInitialAddon(addonId);
    setCalculatorOpen(true);
  };

  const handleBookCallWithScope = (scopeSummary: string) => {
    setCalculatorOpen(false);
    handleOpenDiscoveryCall('dynamic', scopeSummary);
  };

  const handleSendScopeToWhatsApp = (text: string) => {
    setCalculatorOpen(false);
    handleOpenWhatsApp(text);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-sans selection:bg-[#4f46e5] selection:text-white flex flex-col">
      {/* 1. Sticky Navigation Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        currency={currency}
        onSelectCurrency={setCurrency}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenDiscoveryCall={(tier) => handleOpenDiscoveryCall(tier || 'dynamic')}
        onOpenPortal={() => setClientPortalOpen(true)}
      />

      {/* Main Content Body */}
      <main className="w-full pt-16 sm:pt-20 pb-16 md:pb-0 flex-1">
        {/* Hero Section with Trust Metrics */}
        <HeroSection
          onScrollToAddons={() => handleNavigate('addons')}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* 3 Main Pricing Packages (Bento Stack) */}
        <PricingCards
          currency={currency}
          onSelectTier={(tierId) => handleOpenDiscoveryCall(tierId)}
          onViewBlueprint={handleViewBlueprint}
        />

        {/* Detailed Package Comparison Table */}
        <ComparisonTable
          currency={currency}
          onSelectTier={(tierId) => handleOpenDiscoveryCall(tierId)}
        />

        {/* Add-on Services & Scope Extensions */}
        <AddOnsSection
          currency={currency}
          onOpenCalculatorWithItem={handleOpenCalculatorWithItem}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* Why 100% Full Source Code Handover Matters */}
        <SourceHandoverSection
          onOpenNdaModal={() => setNdaOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection
          onOpenWhatsAppQuestion={(q) =>
            handleOpenWhatsApp(q ? `I have a question about: "${q}"` : '')
          }
        />

        {/* Bottom Fast-Track Conversion CTA */}
        <BottomCta
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          onOpenDiscoveryCall={() => handleOpenDiscoveryCall('dynamic')}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenDiscoveryCall={() => handleOpenDiscoveryCall('dynamic')}
        onOpenNdaModal={() => setNdaOpen(true)}
        onOpenLegalModal={(type) => setLegalType(type)}
      />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0b1326]/95 backdrop-blur-xl border-t border-slate-800 shadow-[0_-4px_16px_rgba(0,0,0,0.5)]">
        <div className="h-14 max-w-lg mx-auto px-2 flex items-center justify-around">
          <button
            onClick={() => handleNavigate('pricing')}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-mono cursor-pointer transition ${
              currentTab === 'pricing' ? 'text-[#c3c0ff] font-bold' : 'text-[#918fa1] hover:text-[#dae2fd]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">payments</span>
            <span>Pricing</span>
          </button>

          <button
            onClick={() => setCalculatorOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-mono text-[#4cd7f6] cursor-pointer hover:text-white transition"
          >
            <span className="material-symbols-outlined text-[20px]">calculate</span>
            <span>Estimator</span>
          </button>

          {/* Prominent Repo & Client Portal Button on Mobile */}
          <button
            onClick={() => setClientPortalOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-mono text-[#4edea3] cursor-pointer hover:text-white transition group"
          >
            <div className="relative">
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">terminal</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#4edea3]"></span>
            </div>
            <span className="font-bold">Repo Portal</span>
          </button>

          <button
            onClick={() => handleOpenWhatsApp()}
            className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-mono text-[#918fa1] hover:text-[#4edea3] cursor-pointer transition"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => handleOpenDiscoveryCall('dynamic')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#4f46e5] text-white text-[11px] font-semibold cursor-pointer shadow-md active:scale-95 transition"
          >
            <span>Book</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Modals & Drawers */}
      <DiscoveryCallModal
        isOpen={discoveryModalOpen}
        onClose={() => setDiscoveryModalOpen(false)}
        currency={currency}
        initialTier={selectedTierForBooking}
        initialScopeNote={scopeNoteForBooking}
      />

      <WhatsAppDrawer
        isOpen={whatsAppOpen}
        onClose={() => setWhatsAppOpen(false)}
        initialMessage={whatsAppMessage}
      />

      <PortfolioModal
        isOpen={portfolioOpen}
        onClose={() => setPortfolioOpen(false)}
        selectedId={selectedPortfolioId}
        onBookDiscovery={(tier) => handleOpenDiscoveryCall(tier.toLowerCase().includes('static') ? 'static' : tier.toLowerCase().includes('dynamic') ? 'dynamic' : 'ecommerce')}
      />

      <NdaModal
        isOpen={ndaOpen}
        onClose={() => setNdaOpen(false)}
      />

      <ClientPortalModal
        isOpen={clientPortalOpen}
        onClose={() => setClientPortalOpen(false)}
        onOpenDiscoveryCall={() => handleOpenDiscoveryCall('dynamic')}
      />

      <ProcessModal
        isOpen={processOpen}
        onClose={() => setProcessOpen(false)}
        onOpenDiscoveryCall={() => handleOpenDiscoveryCall('dynamic')}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      <ScopeCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        currency={currency}
        initialTier={calculatorInitialTier}
        initialAddon={calculatorInitialAddon}
        onBookCallWithScope={handleBookCallWithScope}
        onSendToWhatsApp={handleSendScopeToWhatsApp}
      />
    </div>
  );
}
