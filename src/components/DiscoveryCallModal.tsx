import React, { useState } from 'react';
import { PRICING_TIERS, Currency } from '../data/pricingData';

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialTier?: string;
  initialScopeNote?: string;
}

export const DiscoveryCallModal: React.FC<DiscoveryCallModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialTier = 'dynamic',
  initialScopeNote = '',
}) => {
  const [selectedTier, setSelectedTier] = useState<string>(initialTier);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 3:00 PM IST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState(initialScopeNote);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setIsSubmitted(true);
  };

  const timeSlots = [
    'Today, 5:30 PM IST',
    'Tomorrow, 11:00 AM IST',
    'Tomorrow, 3:00 PM IST',
    'Tomorrow, 6:00 PM IST',
    'In 2 Days, 4:00 PM IST',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-xl rounded-2xl bg-[#131b2e] border border-slate-700 shadow-2xl p-5 sm:p-8 my-6 sm:my-8 text-[#dae2fd]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#918fa1] hover:text-white p-2 rounded-lg bg-[#171f33] sm:bg-transparent hover:bg-slate-800 transition cursor-pointer z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                TECHNICAL DISCOVERY CALL
              </span>
              <h2 className="mt-1 text-2xl font-bold text-white">
                Book 15-Min Engineering Discovery
              </h2>
              <p className="mt-0.5 text-xs text-[#c7c4d8]">
                Speak directly with a lead technical architect in Bengaluru. No sales pressure, pure technical evaluation.
              </p>
            </div>

            {/* Architecture Tier Select */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#918fa1] mb-1.5 font-semibold">
                Target Architecture Package
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PRICING_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-2.5 rounded-lg border text-xs text-left transition cursor-pointer ${
                      selectedTier === tier.id
                        ? 'bg-[#222a3d] border-[#4f46e5] text-white font-semibold'
                        : 'bg-[#171f33] border-slate-800 text-[#c7c4d8]'
                    }`}
                  >
                    <div>{tier.title}</div>
                    <div className="font-mono text-[11px] text-[#4cd7f6] mt-0.5">
                      {tier.tierNumber}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Available Time Slot */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#918fa1] mb-1.5 font-semibold">
                Select Convenient Slot
              </label>
              <select
                aria-label="Select Slot"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-[#171f33] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#918fa1] mb-1">Your Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#171f33] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#918fa1] mb-1">Work Email *</label>
                <input
                  required
                  type="email"
                  placeholder="rahul@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#171f33] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#918fa1] mb-1">WhatsApp / Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#171f33] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#918fa1] mb-1">Company / Project Name</label>
                <input
                  type="text"
                  placeholder="Acme Technologies"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#171f33] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
                />
              </div>
            </div>

            {/* Scope Notes */}
            <div>
              <label className="block text-xs text-[#918fa1] mb-1">Project Scope &amp; Target Launch</label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you're building, target pages, or existing URLs to revamp..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#171f33] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]"
              />
            </div>

            {/* Submit CTA */}
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                100% Confidential · Mutual NDA Protected
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#4f46e5] hover:bg-[#5b52f1] text-white text-xs font-semibold transition cursor-pointer shadow-lg"
              >
                Confirm Discovery Call
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#006e4b]/30 border border-[#4edea3] text-[#4edea3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Discovery Call Scheduled!</h2>
            <p className="text-xs text-[#c7c4d8] max-w-md">
              Thank you, <strong className="text-white">{name}</strong>. Our Lead Systems Architect has reserved <span className="text-[#4cd7f6] font-semibold">{selectedDate}</span> for your project discovery.
            </p>

            <div className="mt-4 p-4 rounded-xl bg-[#171f33] border border-slate-800 text-left w-full text-xs font-mono space-y-1.5">
              <div className="text-[#918fa1]">Selected Tier: <span className="text-white">{selectedTier.toUpperCase()}</span></div>
              <div className="text-[#918fa1]">Meeting Link: <span className="text-[#4cd7f6]">Google Meet (sent to {email})</span></div>
              <div className="text-[#918fa1]">WhatsApp Confirmation: <span className="text-[#4edea3]">Dispatched to {phone}</span></div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-[#4f46e5] text-white text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};
