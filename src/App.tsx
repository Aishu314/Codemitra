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
import { SourceHandoverSection } from './components/SourceHandoverSection';
import { FaqSection } from './components/FaqSection';
import { BottomCta } from './components/BottomCta';
import { Footer } from './components/Footer';
import { ScopeCalculatorModal } from './components/ScopeCalculatorModal';
import { DiscoveryCallModal } from './components/DiscoveryCallModal';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { PortfolioModal } from './components/PortfolioModal';
import { NdaModal } from './components/NdaModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { ProcessModal } from './components/ProcessModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('packages');
  const [currency, setCurrency] = useState<Currency>(CURRENCIES.INR);

  // Modals & Drawers state
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorInitialTier, setCalculatorInitialTier] = useState<string>('static');

  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryInitialTier, setDiscoveryInitialTier] = useState<string>('Dynamic Website');

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppInitialMessage, setWhatsAppInitialMessage] = useState<string | undefined>(undefined);

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [portfolioSelectedId, setPortfolioSelectedId] = useState<string | undefined>(undefined);

  const [isNdaOpen, setIsNdaOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavigate = (tabId: string) => {
    setCurrentTab(tabId);
    if (tabId === 'portfolio') {
      setIsPortfolioOpen(true);
      return;
    }
    if (tabId === 'process') {
      setIsProcessOpen(true);
      return;
    }
    if (tabId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (tabId === 'services' || tabId === 'pricing' || tabId === 'packages') {
      const el = document.getElementById('packages') || document.getElementById('pricing');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    if (tabId === 'addons') {
      const el = document.getElementById('addons-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    if (tabId === 'faq') {
      const el = document.getElementById('faq-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const element = document.getElementById(tabId) || document.getElementById(`${tabId}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenDiscovery = (preferredTier?: string) => {
    if (preferredTier) {
      setDiscoveryInitialTier(preferredTier);
    }
    setIsDiscoveryOpen(true);
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    setWhatsAppInitialMessage(customMessage);
    setIsWhatsAppOpen(true);
  };

  const handleViewBlueprint = (tierId: string) => {
    setPortfolioSelectedId(tierId);
    setIsPortfolioOpen(true);
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans antialiased min-h-screen selection:bg-[#4f46e5] selection:text-white">
      {/* 1. TOP HEADER (Responsive with Repo & Currency) */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        currency={currency}
        onSelectCurrency={setCurrency}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenDiscoveryCall={handleOpenDiscovery}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* 2. MAIN CONTENT - Generous top padding (pt-20 sm:pt-24 md:pt-28) solves upper lines overlapping bug */}
      <main className="w-full pt-20 sm:pt-24 md:pt-28 bg-[#0b1326] min-h-screen">
        {/* HERO SECTION with digital workspace photo & quick overview */}
        <HeroSection
          currency={currency}
          onScrollToAddons={() => handleNavigate('addons')}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenDiscoveryCall={handleOpenDiscovery}
        />

        {/* 3 PRICING TIERS (Static ₹10K, Dynamic ₹20K, E-Commerce ₹30K) with digital preview photos */}
        <PricingCards
          currency={currency}
          onSelectTier={handleOpenDiscovery}
          onViewBlueprint={handleViewBlueprint}
          onOpenDiscoveryCall={handleOpenDiscovery}
        />

        {/* FULL 27-ROW GRANULAR COMPARISON TABLE */}
        <ComparisonTable
          currency={currency}
          onSelectTier={handleOpenDiscovery}
        />

        {/* ADDITIONAL SERVICES & MODULAR RATE CARD */}
        <AddOnsSection
          currency={currency}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* 100% UNCONDITIONAL FULL SOURCE CODE HANDOVER with digital Git console photo */}
        <SourceHandoverSection
          onOpenNdaModal={() => setIsNdaOpen(true)}
        />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FaqSection
          onOpenWhatsAppQuestion={(q) =>
            handleOpenWhatsApp(
              q
                ? `Hi Code Mitra, I have a specific question about: "${q}"`
                : 'Hi Code Mitra, I have a technical question regarding website development scope.'
            )
          }
        />

        {/* BOTTOM CALL-TO-ACTION */}
        <BottomCta
          onOpenWhatsApp={() =>
            handleOpenWhatsApp('Hi Code Mitra, I would like to fast-track a proposal for my website.')
          }
          onOpenDiscoveryCall={() => handleOpenDiscovery()}
        />
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenDiscoveryCall={() => handleOpenDiscovery()}
        onOpenNdaModal={() => setIsNdaOpen(true)}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* MODALS & DRAWERS */}
      {/* Client Repository & IP Handover Portal */}
      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        onOpenDiscoveryCall={() => {
          setIsPortalOpen(false);
          handleOpenDiscovery();
        }}
      />

      {/* Interactive Scope Calculator */}
      <ScopeCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        currency={currency}
        initialTier={calculatorInitialTier}
        onBookCallWithScope={(_summary: string) => {
          setIsCalculatorOpen(false);
          setIsDiscoveryOpen(true);
        }}
        onSendToWhatsApp={(summaryText: string) => {
          setIsCalculatorOpen(false);
          handleOpenWhatsApp(
            `Hi Code Mitra, here is my calculated project scope estimate:\n\n${summaryText}\n\nCould we discuss delivery timeline and kicking off?`
          );
        }}
      />

      {/* Discovery Call Consultation Modal */}
      <DiscoveryCallModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        currency={currency}
        initialTier={discoveryInitialTier}
      />

      {/* Technical WhatsApp Chat Desk */}
      <WhatsAppDrawer
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        initialMessage={whatsAppInitialMessage}
      />

      {/* Case Study Portfolio Modal */}
      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        selectedId={portfolioSelectedId}
        onBookDiscovery={(tierTitle) => {
          setIsPortfolioOpen(false);
          handleOpenDiscovery(tierTitle);
        }}
      />

      {/* Mutual NDA & IP Rights Modal */}
      <NdaModal
        isOpen={isNdaOpen}
        onClose={() => setIsNdaOpen(false)}
      />

      {/* 14-Day Delivery Sprint Process Modal */}
      <ProcessModal
        isOpen={isProcessOpen}
        onClose={() => setIsProcessOpen(false)}
        onOpenDiscoveryCall={() => {
          setIsProcessOpen(false);
          handleOpenDiscovery();
        }}
      />

      {/* Legal & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
