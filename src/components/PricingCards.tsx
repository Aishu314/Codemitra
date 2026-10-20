import React from 'react';
import { Currency } from '../data/pricingData';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, ShoppingCart, Rocket, Info } from 'lucide-react';
import { staticWebPreview, dynamicCmsPreview, ecommercePreview } from '../assets/images';

interface PricingCardsProps {
  currency: Currency;
  onSelectTier: (tierId: string) => void;
  onViewBlueprint: (tierId: string) => void;
  onOpenDiscoveryCall: (preferredTier?: string) => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({
  currency,
  onViewBlueprint,
  onOpenDiscoveryCall,
}) => {
  const formatRate = (inr: number) => {
    const val = Math.round(inr * currency.rate);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-16 sm:pb-24" id="packages">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {/* PACKAGE 1: Static Website - Swipe in from Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          whileHover={{ y: -4 }}
          className="rounded-xl bg-[#171f33] p-6 sm:p-8 flex flex-col justify-between transition duration-200 hover:bg-[#1c263d] shadow-lg border border-slate-800"
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2d3449] text-[#c7c4d8] font-mono text-xs font-semibold">
                <Rocket className="w-3.5 h-3.5 text-[#4cd7f6]" /> 🚀 STATIC WEBSITE
              </span>
              <span className="font-mono text-xs text-[#c7c4d8]">Tier 01</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#dae2fd]">Static Website</h3>
            <p className="mt-1.5 text-sm text-[#c7c4d8] min-h-[42px] leading-relaxed">
              A professional, fast and responsive website for establishing your undeniable online presence.
            </p>

            {/* Digital Photo Preview */}
            <div className="mt-4 rounded-lg overflow-hidden border border-slate-700/80 aspect-[4/3] relative group bg-[#060e20]">
              <img
                src={staticWebPreview}
                alt="Static Portfolio & Restaurant Website Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/static_web_preview_1792431342756.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="bg-[#0b1326]/85 px-2 py-0.5 rounded border border-slate-700/60">Portfolio &amp; Restaurant UI</span>
                <span className="bg-[#4cd7f6]/20 text-[#4cd7f6] px-2 py-0.5 rounded border border-[#4cd7f6]/40">98+ Lighthouse</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-5 p-4 rounded-lg bg-[#131b2e] border border-slate-800">
              <span className="text-xs uppercase tracking-wider text-[#c7c4d8] block font-medium">Starting At</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tabular-nums">{formatRate(10000)}</span>
                <span className="font-mono text-xs text-[#c7c4d8]">/ one-time</span>
              </div>
              <p className="text-xs text-[#4cd7f6] mt-1.5 flex items-center gap-1 font-medium font-mono">
                <span className="material-symbols-outlined text-[14px]">schedule</span> Turnaround: 5–7 Business Days
              </p>
            </div>

            {/* Ideal For */}
            <div className="mt-4">
              <span className="text-xs font-semibold text-[#4cd7f6] uppercase tracking-wider">Ideal For</span>
              <p className="mt-1 text-sm text-[#dae2fd]">
                Small businesses, startups, portfolios, professionals, restaurants, agencies &amp; local businesses.
              </p>
            </div>

            {/* What's Included */}
            <div className="mt-6 flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-[#c7c4d8] uppercase tracking-wider">What You Can Include</span>
              <ul className="flex flex-col gap-2 text-sm text-[#dae2fd]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span><strong>Up to 5 Pages:</strong> Home, About Us, Services, Contact Us, Gallery / Portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Responsive website with modern UI/UX design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Mobile, tablet and desktop compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Contact form + WhatsApp integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Google Maps integration &amp; Social media links</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Basic animations, Favicon, Meta title &amp; description</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Basic SEO setup &amp; SEO-friendly clean URLs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Image optimization &amp; Fast-loading frontend</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>SSL/HTTPS deployment &amp; Domain connection support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Hosting deployment support &amp; Basic security hardening</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>1 round of design revisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>100% Full Source Code Handover</strong></span>
                </li>
              </ul>
            </div>

            {/* Real Example Box */}
            <div className="mt-6 p-3 rounded-lg bg-[#060e20] text-[#c7c4d8] text-xs flex flex-col gap-1 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[#c3c0ff] font-semibold flex items-center gap-1 font-mono text-[11px] uppercase">
                  <span className="material-symbols-outlined text-[15px]">restaurant</span> Real Example (Local Restaurant)
                </span>
                <button
                  onClick={() => onViewBlueprint('static')}
                  className="text-[#4cd7f6] hover:underline text-[11px] font-mono cursor-pointer"
                >
                  View Case Study →
                </button>
              </div>
              <p className="text-[#dae2fd] mt-1">
                Home → About → Menu → Gallery → Contact with WhatsApp order redirect, Google Maps pin, enquiry form &amp; social media links.
              </p>
            </div>

            {/* Package Limitation */}
            <div className="mt-3 p-3 rounded-lg bg-[#2d3449]/60 text-[#ffb4ab] text-xs flex items-start gap-2 border border-red-500/20">
              <span className="material-symbols-outlined text-red-400 text-[16px] shrink-0 mt-0.5">block</span>
              <span><strong>Package Limitation:</strong> No database, admin panel, user login or online payment functionality included.</span>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenDiscoveryCall('Static Website')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#2d3449] text-[#dae2fd] hover:bg-[#38415c] hover:text-white transition text-sm font-semibold shadow-sm cursor-pointer border border-slate-700/60"
            >
              <span>Get Started with Static</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* PACKAGE 2: Dynamic Website (HIGHLIGHTED) - Swipe up from Bottom with Scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          whileHover={{ y: -6 }}
          className="relative rounded-xl bg-[#222a3d] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition duration-200 hover:bg-[#28324a] -mt-0 lg:-mt-3 mb-0 lg:mb-3 border border-indigo-500/60"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4f46e5] via-[#4cd7f6] to-[#c3c0ff] rounded-2xl blur-xl opacity-25 -z-10 pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4f46e5] text-[#dad7ff] font-mono text-xs font-semibold shadow">
                <Zap className="w-3.5 h-3.5 animate-pulse text-[#4cd7f6]" /> ⚡ DYNAMIC WEBSITE
              </span>
              <span className="font-mono text-xs text-[#4cd7f6] font-bold">RECOMMENDED</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#dae2fd] flex items-center gap-2">
              <span>Dynamic Website</span>
              <ShieldCheck className="w-5 h-5 text-[#4cd7f6]" />
            </h3>
            <p className="mt-1.5 text-sm text-[#c7c4d8] min-h-[42px] leading-relaxed">
              A powerful database-driven website with an admin dashboard to manage content effortlessly without developer dependencies.
            </p>

            {/* Digital Photo Preview */}
            <div className="mt-4 rounded-lg overflow-hidden border border-indigo-500/40 aspect-[4/3] relative group bg-[#060e20]">
              <img
                src={dynamicCmsPreview}
                alt="Dynamic Website Admin CMS Dashboard Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/dynamic_cms_preview_1792431344267.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="bg-[#0b1326]/85 px-2 py-0.5 rounded border border-slate-700/60">Admin CMS Dashboard</span>
                <span className="bg-[#4edea3]/20 text-[#4edea3] px-2 py-0.5 rounded border border-[#4edea3]/40">PostgreSQL DB</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-5 p-4 rounded-lg bg-[#171f33] border border-slate-700/80">
              <span className="text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold block">Starting At</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tabular-nums">{formatRate(20000)}</span>
                <span className="font-mono text-xs text-[#c7c4d8]">/ one-time</span>
              </div>
              <p className="text-xs text-[#4edea3] mt-1.5 flex items-center gap-1 font-medium font-mono">
                <span className="material-symbols-outlined text-[14px]">bolt</span> Turnaround: 8–12 Business Days
              </p>
            </div>

            {/* Ideal For */}
            <div className="mt-4">
              <span className="text-xs font-semibold text-[#4cd7f6] uppercase tracking-wider">Ideal For</span>
              <p className="mt-1 text-sm text-[#dae2fd]">
                Growing businesses, schools, coaching institutes, service companies, agencies &amp; organizations needing regular updates.
              </p>
            </div>

            {/* What's Included */}
            <div className="mt-6 flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-[#c7c4d8] uppercase tracking-wider">Everything in Static, plus:</span>
              <ul className="flex flex-col gap-2 text-sm text-[#dae2fd]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span><strong>Up to 8–10 Pages</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span><strong>Dynamic database-driven website</strong> (PostgreSQL / Supabase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span><strong>Admin dashboard:</strong> Add, edit, and delete website content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Blog / news management &amp; Image / gallery manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Contact / enquiry management &amp; Form submissions stored in DB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Admin authentication &amp; User authentication if required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Dynamic services/products, testimonials &amp; portfolio showcase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Search functionality &amp; Automated email notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Sitemap, Robots.txt &amp; Google Analytics integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <span>Database setup, Domain/Hosting configuration &amp; Basic backup</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Basic documentation, 2 rounds of revisions &amp; Full source handover</span>
                </li>
              </ul>
            </div>

            {/* Real Example Tree (Coaching Institute) */}
            <div className="mt-6 p-3.5 rounded-lg bg-[#171f33] text-xs font-mono border border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#4cd7f6] uppercase tracking-wider font-semibold block">
                  Admin Dashboard Example (Coaching Institute)
                </span>
                <button
                  onClick={() => onViewBlueprint('dynamic')}
                  className="text-[#4cd7f6] hover:underline text-[11px] font-mono cursor-pointer"
                >
                  Blueprint →
                </button>
              </div>
              <pre className="text-[11px] text-[#c7c4d8] leading-tight overflow-x-auto">
{`Admin Dashboard
│
├── Students      ├── Faculty      ├── Gallery
├── Courses       ├── Notices      ├── Testimonials
└── Blog          └── Enquiries    └── Website Settings`}
              </pre>
              <p className="text-[11px] font-sans text-[#dae2fd] mt-2 border-t border-slate-800/80 pt-1.5">
                The owner doesn’t need a developer every time they want to update courses, announcements, or photos.
              </p>
            </div>

            {/* Package Limitation */}
            <div className="mt-3 p-3 rounded-lg bg-[#171f33]/70 text-[#918fa1] text-xs flex items-start gap-2 border border-slate-700/60">
              <Info className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
              <span><strong>Package Limitation:</strong> Payment gateway, advanced CRM, complex third-party integrations, and custom enterprise features are charged separately.</span>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(79,70,229,0.45)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenDiscoveryCall('Dynamic Website')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#4f46e5] text-white hover:bg-[#5b52f1] transition text-sm font-semibold shadow-[0_4px_20px_rgba(79,70,229,0.4)] cursor-pointer"
            >
              <span>Build My Dynamic Website</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* PACKAGE 3: E-Commerce Website - Swipe in from Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="rounded-xl bg-[#171f33] p-6 sm:p-8 flex flex-col justify-between transition duration-200 hover:bg-[#1c263d] shadow-lg border border-slate-800"
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2d3449] text-[#4edea3] font-mono text-xs font-semibold">
                <ShoppingCart className="w-3.5 h-3.5 text-[#4edea3]" /> 🛒 E-COMMERCE WEBSITE
              </span>
              <span className="font-mono text-xs text-[#c7c4d8]">Tier 03</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#dae2fd]">E-Commerce Website</h3>
            <p className="mt-1.5 text-sm text-[#c7c4d8] min-h-[42px] leading-relaxed">
              A complete online store with product management, shopping cart, checkout, customer accounts, and order management.
            </p>

            {/* Digital Photo Preview */}
            <div className="mt-4 rounded-lg overflow-hidden border border-emerald-500/30 aspect-[4/3] relative group bg-[#060e20]">
              <img
                src={ecommercePreview}
                alt="E-Commerce Store Dual Screen Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/ecommerce_preview_1792431344885.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="bg-[#0b1326]/85 px-2 py-0.5 rounded border border-slate-700/60">Cart, Checkout &amp; Orders</span>
                <span className="bg-[#4edea3]/20 text-[#4edea3] px-2 py-0.5 rounded border border-[#4edea3]/40">Razorpay / Stripe</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-5 p-4 rounded-lg bg-[#131b2e] border border-slate-800">
              <span className="text-xs uppercase tracking-wider text-[#c7c4d8] block font-medium">Starting At</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tabular-nums">{formatRate(30000)}</span>
                <span className="font-mono text-xs text-[#c7c4d8]">/ one-time</span>
              </div>
              <p className="text-xs text-[#4edea3] mt-1.5 flex items-center gap-1 font-medium font-mono">
                <span className="material-symbols-outlined text-[14px]">local_shipping</span> Turnaround: 10–14 Business Days
              </p>
            </div>

            {/* Ideal For */}
            <div className="mt-4">
              <span className="text-xs font-semibold text-[#4edea3] uppercase tracking-wider">Ideal For</span>
              <p className="mt-1 text-sm text-[#dae2fd]">
                Retail businesses, clothing stores, electronics, boutiques, home businesses, wholesalers &amp; brands selling online.
              </p>
            </div>

            {/* What's Included */}
            <div className="mt-6 flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-[#c7c4d8] uppercase tracking-wider">Everything from Dynamic, plus:</span>
              <ul className="flex flex-col gap-2 text-sm text-[#dae2fd]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>Product Management:</strong> Listings, categories, search, filters, variations (sizes/colors), images, descriptions, pricing &amp; SKU inventory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>Shopping Features:</strong> Cart, Add to cart, Buy now, Wishlist, Checkout &amp; Guest checkout</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Customer registration, login &amp; order confirmation dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>Order Management:</strong> View orders, update status, manage customers, inventory &amp; discounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>Payment Provider Integration:</strong> Razorpay, Cashfree, PayU, or Stripe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Coupon codes &amp; Promotional discount system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Shipping &amp; Tax configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Automated order &amp; customer email alerts + WhatsApp alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Product reviews, related products &amp; SEO-friendly product pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>Google Analytics, Google Search Console, Sitemap &amp; SSL</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>2 rounds of design revisions + Full source code handover</span>
                </li>
              </ul>
            </div>

            {/* Order Workflow Box */}
            <div className="mt-6 p-3.5 rounded-lg bg-[#060e20] text-xs font-mono border border-slate-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#4edea3] uppercase tracking-wider font-semibold block">
                  Order Lifecycle Workflow
                </span>
                <button
                  onClick={() => onViewBlueprint('ecommerce')}
                  className="text-[#4edea3] hover:underline text-[11px] font-mono cursor-pointer"
                >
                  Blueprint →
                </button>
              </div>
              <div className="text-[11px] text-[#c7c4d8] leading-relaxed flex flex-wrap items-center gap-1">
                <span>Order</span> → <span>Payment</span> → <span>Confirmation</span> → <span>Admin</span> → <span>Processing</span> → <span>Shipped</span> → <span className="text-[#4edea3] font-bold">Delivered</span>
              </div>
            </div>

            {/* Package Limitation */}
            <div className="mt-3 p-3 rounded-lg bg-[#2d3449]/60 text-[#918fa1] text-xs flex items-start gap-2 border border-slate-700/60">
              <span className="material-symbols-outlined text-[#918fa1] text-[16px] shrink-0 mt-0.5">account_balance_wallet</span>
              <span><strong>Payment Gateway Policy:</strong> Gateway integration included. Client provides active KYC account; gateway transaction fees are client’s responsibility.</span>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenDiscoveryCall('E-Commerce Website')}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#2d3449] text-[#dae2fd] hover:bg-[#38415c] hover:text-white transition text-sm font-semibold shadow-sm cursor-pointer border border-slate-700/60"
            >
              <span>Start Selling Online</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
