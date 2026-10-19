import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Zap, Headphones, CheckCircle2 } from 'lucide-react';

interface BottomCtaProps {
  onOpenWhatsApp: () => void;
  onOpenDiscoveryCall: () => void;
}

export const BottomCta: React.FC<BottomCtaProps> = ({
  onOpenWhatsApp,
  onOpenDiscoveryCall,
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-2xl bg-gradient-to-br from-[#222a3d] via-[#171f33] to-[#131b2e] border border-slate-700/80 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Glow Auras */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#4cd7f6]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#4f46e5]/15 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006e4b]/30 border border-[#4edea3]/30 text-[#4edea3] font-mono text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
            FAST-TRACK PROPOSALS WITHIN 6 HOURS
          </motion.span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#dae2fd] tracking-tight">
            Ready to Build Your High-Performance Website?
          </h2>

          <p className="text-sm sm:text-base text-[#c7c4d8] leading-relaxed">
            Schedule a direct 15-minute technical discovery call with our Bangalore engineering architects or message us directly on WhatsApp for immediate scope evaluation.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#171f33] border border-slate-700 text-[#4edea3] hover:bg-[#222a3d] transition font-semibold text-sm shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-[#4edea3]" />
              <span>Chat with Us on WhatsApp</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(79,70,229,0.45)' }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={onOpenDiscoveryCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4f46e5] text-white hover:bg-[#5b52f1] transition font-semibold text-sm shadow-[0_4px_20px_rgba(79,70,229,0.35)] cursor-pointer"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.button>
          </div>

          <div className="mt-6 pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-[#918fa1]">
            <span className="flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-[#4edea3]" />
              Direct Lead Engineer Support
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#4cd7f6]" />
              Quick Turnaround Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c3c0ff]" />
              GST Compliant Invoicing
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
