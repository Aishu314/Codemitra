export interface PricingTier {
  id: 'static' | 'dynamic' | 'ecommerce';
  tierNumber: string;
  badge: string;
  badgeIcon: string;
  title: string;
  description: string;
  popular?: boolean;
  basePriceInr: number;
  deliveryDays: string;
  idealFor: string;
  includedListTitle: string;
  features: string[];
  highlightBox: {
    icon: string;
    title: string;
    content: string;
    tags?: string[];
  };
  limitations: string;
  ctaText: string;
}

export interface Currency {
  code: 'INR' | 'USD' | 'EUR' | 'AED';
  symbol: string;
  rate: number; // multiply INR by rate
}

export const CURRENCIES: Record<string, Currency> = {
  INR: { code: 'INR', symbol: '₹', rate: 1 },
  USD: { code: 'USD', symbol: '$', rate: 0.012 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.011 },
  AED: { code: 'AED', symbol: 'د.إ', rate: 0.044 },
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'static',
    tierNumber: 'Tier 01',
    badge: 'STATIC ENGINE',
    badgeIcon: 'rocket_launch',
    title: 'Static Website',
    description: 'A professional, ultra-fast and responsive website for establishing your undeniable online presence.',
    basePriceInr: 10000,
    deliveryDays: '5–7 Business Days',
    idealFor: 'Portfolios, local businesses, consultancies, boutique agencies & independent professionals.',
    includedListTitle: "What's Included",
    features: [
      'Up to 5 Handcrafted Pages (Home, About, Services, Gallery, Contact)',
      'Contact Form + Instant WhatsApp Lead CTA',
      'Interactive Google Maps & Geolocation Pin',
      'Lighthouse 95+ Performance & Basic SEO Meta',
      'Free SSL HTTPS & Cloudflare CDN Deployment',
      '1 Round of Iterative Design Revisions',
      '100% Full Git Source Code Handover',
    ],
    highlightBox: {
      icon: 'lightbulb',
      title: 'Real Blueprint',
      content: 'Specialty café with seasonal menu tabs, interactive interior gallery, reservation enquiry form & 1-click WhatsApp order redirect.',
    },
    limitations: 'No dynamic database, admin panel CMS, user authentication, or online payment gateways included in baseline.',
    ctaText: 'Get Started with Static',
  },
  {
    id: 'dynamic',
    tierNumber: 'Tier 02',
    badge: 'MOST POPULAR CHOICE',
    badgeIcon: 'bolt',
    popular: true,
    title: 'Dynamic Website',
    description: 'A powerful database-driven website with an intuitive admin dashboard to manage your content effortlessly without technical dependencies.',
    basePriceInr: 20000,
    deliveryDays: '8–12 Business Days',
    idealFor: 'Growing businesses, coaching institutes, schools, clinics, B2B service agencies & organizations needing frequent updates.',
    includedListTitle: 'Everything in Static, plus',
    features: [
      'Up to 8–10 Dynamic Content Pages',
      'Full Custom Admin CMS Dashboard (Tailored UI)',
      'Self-managed Blog, Notice Board & Media Gallery',
      'Relational Database Setup (PostgreSQL / Supabase)',
      'Automated Enquiry Capture & Instant Email Alerts',
      'Dynamic Client Testimonials & Services CMS',
      'Google Analytics 4 & Dynamic XML Sitemap generation',
      '2 Comprehensive Rounds of Revisions + Admin Training',
    ],
    highlightBox: {
      icon: 'account_tree',
      title: 'CMS Architecture Sample (Institute)',
      content: '',
      tags: ['Courses & Batches', 'Faculty Roster', 'Notice PDF Alerts', 'Lead Inbox'],
    },
    limitations: 'Checkout e-commerce engines, advanced CRM integrations, and multi-tenant portals quoted separately.',
    ctaText: 'Build My Dynamic Website',
  },
  {
    id: 'ecommerce',
    tierNumber: 'Tier 03',
    badge: 'DIGITAL COMMERCE',
    badgeIcon: 'shopping_cart',
    title: 'E-Commerce Website',
    description: 'A complete online store with comprehensive product catalogs, shopping cart, checkout, customer accounts, and order dispatch workflows.',
    basePriceInr: 30000,
    deliveryDays: '10–14 Business Days',
    idealFor: 'Retail brands, apparel & fashion labels, electronics stores, artisan shops & D2C brands.',
    includedListTitle: 'Everything in Dynamic, plus',
    features: [
      'Up to 15 Structured Pages / Product System',
      'Multi-variation Products (Size, Color, Inventory Tracking)',
      'Persistent Cart, Wishlist, & Fast Checkout Funnel',
      'Customer Authentication & Order History Dashboard',
      'Indian Payment Gateway Integration (Razorpay/Cashfree/PayU)',
      'Coupon & Percentage Promotional Discount Engine',
      'Automated Transactional Emails & Invoices',
      'Comprehensive Admin Inventory & Order Manager',
    ],
    highlightBox: {
      icon: 'linear_scale',
      title: 'Order Lifecycle Workflow',
      content: 'Order → Pay → Confirm → Dispatch → Delivered',
    },
    limitations: 'Client provides active KYC-verified gateway credentials. Standard payment gateway processing fee applies.',
    ctaText: 'Start Selling Online',
  },
];

export interface ComparisonCategory {
  category: string;
  items: {
    name: string;
    staticVal: string | boolean;
    dynamicVal: string | boolean;
    ecommerceVal: string | boolean;
    tooltip?: string;
  }[];
}

export const COMPARISON_MATRIX: ComparisonCategory[] = [
  {
    category: '1. Core Architecture & Design Quality',
    items: [
      {
        name: 'Responsive Layout (Mobile, Tablet & Desktop)',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Fluid design that dynamically re-lays for iPhone, Android, iPads, and 4K displays.',
      },
      {
        name: 'Modern Tailwind & Clean Frontend Code',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Handcrafted semantic HTML5 and atomic CSS tokens without bloated templates.',
      },
      {
        name: 'Included Custom Formatted Pages',
        staticVal: 'Up to 5 Pages',
        dynamicVal: 'Up to 10 Pages',
        ecommerceVal: 'Up to 15 Pages',
      },
      {
        name: 'Speed Optimized (Lighthouse Score 90+)',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Pre-rendered assets, modern image formats (WebP/AVIF), and zero layout shifts.',
      },
    ],
  },
  {
    category: '2. Integrations & Discovery',
    items: [
      {
        name: 'Contact Form & Validation',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Client-side verification preventing spam and malformed email/phone numbers.',
      },
      {
        name: 'Instant WhatsApp Floating CTA',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: '1-click mobile click-to-chat with custom pre-filled message generator.',
      },
      {
        name: 'Google Maps Location Integration',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Embedded responsive map pinpointing your showroom, clinic, or office location.',
      },
      {
        name: 'Google Analytics 4 & Dynamic XML Sitemap',
        staticVal: false,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Real-time visitor telemetry and automated sitemap re-generation for Google Search Console.',
      },
    ],
  },
  {
    category: '3. Backend, Database & CMS Controls',
    items: [
      {
        name: 'Cloud Database Integration (PostgreSQL/Supabase)',
        staticVal: false,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Industrial-grade relational database with automatic backups and row-level security.',
      },
      {
        name: 'Bespoke CMS Admin Panel (Add/Edit Content)',
        staticVal: false,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'No coding needed: update hero banners, publish blogs, edit team members directly.',
      },
      {
        name: 'Dynamic Blog / Articles / Notice Manager',
        staticVal: false,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Rich markdown or WYSIWYG editor with image uploads and tag taxonomies.',
      },
      {
        name: 'In-Database Enquiry & Lead Manager',
        staticVal: false,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'All form submissions safely stored in an admin inbox with CSV export.',
      },
      {
        name: 'Customer / User Authentication & Logins',
        staticVal: false,
        dynamicVal: false,
        ecommerceVal: true,
        tooltip: 'Secure hashed password authentication, session tokens, and password reset flows.',
      },
    ],
  },
  {
    category: '4. E-Commerce Engine & Checkout',
    items: [
      {
        name: 'Product Catalog with Filters & Variants',
        staticVal: false,
        dynamicVal: 'Optional Add-on',
        ecommerceVal: true,
        tooltip: 'Category filtering, search, pricing sliders, and variants (sizes, shades, bundles).',
      },
      {
        name: 'Shopping Cart & Wishlist Workflows',
        staticVal: false,
        dynamicVal: false,
        ecommerceVal: true,
        tooltip: 'LocalStorage & synced database cart with real-time tax and shipping math.',
      },
      {
        name: 'Payment Gateway (Razorpay/PayU/Cashfree)',
        staticVal: false,
        dynamicVal: 'Add-on (₹2,000+)',
        ecommerceVal: true,
        tooltip: 'Zero-drop checkout accepting UPI, Cards, NetBanking, EMI, and Wallets.',
      },
      {
        name: 'Order Lifecycle & Inventory Management',
        staticVal: false,
        dynamicVal: false,
        ecommerceVal: true,
        tooltip: 'Auto stock decrementing on payment success, tracking codes, and dispatch statuses.',
      },
      {
        name: 'Coupon Engine & Order Notifications',
        staticVal: false,
        dynamicVal: false,
        ecommerceVal: true,
        tooltip: 'Flat/percentage discount codes with expiry limits and email order receipts.',
      },
    ],
  },
  {
    category: '5. Delivery, Security & Ownership',
    items: [
      {
        name: 'Free SSL HTTPS Certificate Setup',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'End-to-end TLS encryption with A+ SSL rating and auto-renewals.',
      },
      {
        name: 'Domain & DNS Setup Support',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'We configure A records, CNAME, SPF, DKIM, and MX records without hassle.',
      },
      {
        name: 'Included Iteration Rounds',
        staticVal: '1 Round',
        dynamicVal: '2 Rounds',
        ecommerceVal: '2 Rounds',
      },
      {
        name: '100% Full Git Source Code Handover',
        staticVal: true,
        dynamicVal: true,
        ecommerceVal: true,
        tooltip: 'Complete GitHub/GitLab repository ownership. We never hold your code hostage.',
      },
    ],
  },
];

export interface AddOnItem {
  id: string;
  title: string;
  priceDisplay: string;
  priceInr: number;
  description: string;
  benefit: string;
  isCustomQuote?: boolean;
  category: 'design' | 'feature' | 'integration' | 'maintenance';
}

export const ADD_ONS_LIST: AddOnItem[] = [
  {
    id: 'extra-page',
    title: 'Extra Tailored Page',
    priceDisplay: '₹500 – ₹1,000 / page',
    priceInr: 800,
    description: 'Custom coded layout, responsive styling, and copy integration beyond base tier pages.',
    benefit: 'Turnaround: +1 day/page',
    category: 'design',
  },
  {
    id: 'animations',
    title: 'Advanced Animations',
    priceDisplay: '₹1,000+',
    priceInr: 1500,
    description: 'Framer Motion micro-interactions, scroll-driven interactive cards, and rich product reveals.',
    benefit: 'Lightweight & GPU accelerated',
    category: 'design',
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Setup',
    priceDisplay: '₹2,000+',
    priceInr: 2500,
    description: 'Razorpay, Cashfree, PayU, or Stripe checkout webhooks with real-time status triggers.',
    benefit: 'Test & Live environment handoff',
    category: 'feature',
  },
  {
    id: 'api-hookup',
    title: 'Third-Party API Hookup',
    priceDisplay: '₹1,000+',
    priceInr: 1500,
    description: 'Shiprocket shipping calculator, SMS OTP verification, WhatsApp Bot alerts, or Mailchimp sync.',
    benefit: 'Error handling & fallback logic',
    category: 'integration',
  },
  {
    id: 'crm',
    title: 'CRM Integrations',
    priceDisplay: 'Custom Quote',
    priceInr: 3500,
    isCustomQuote: true,
    description: 'Instant lead ingestion into Zoho CRM, HubSpot, LeadSquared, or Notion Team databases.',
    benefit: 'Zero dropped leads guarantee',
    category: 'integration',
  },
  {
    id: 'bespoke-cms',
    title: 'Bespoke CMS Modules',
    priceDisplay: 'Custom Quote',
    priceInr: 5000,
    isCustomQuote: true,
    description: 'Multi-role permissions, student result lookup systems, event booking engines, or invoice generators.',
    benefit: 'Scalable relational schema',
    category: 'feature',
  },
  {
    id: 'hosting',
    title: 'Cloud Hosting & Domain',
    priceDisplay: 'At Actuals / Choice',
    priceInr: 1000,
    description: 'We guide you to buy direct on Hostinger, Cloudflare, AWS, or Vercel so you own billing permanently.',
    benefit: 'Complete DNS configuration',
    category: 'maintenance',
  },
  {
    id: 'retainer',
    title: 'Monthly Retainer & Care',
    priceDisplay: 'Affordable Retainer',
    priceInr: 3000,
    description: 'Security patches, database backups, uptime monitoring, minor copy revisions, and technical audit.',
    benefit: 'Cancel anytime flexibility',
    category: 'maintenance',
  },
  {
    id: 'seo-schema',
    title: 'Advanced SEO & Schema',
    priceDisplay: 'Custom Quote',
    priceInr: 2500,
    isCustomQuote: true,
    description: 'JSON-LD LocalBusiness schema, OpenGraph sharing cards, rich snippet indexing, and search console.',
    benefit: 'Google Rich Result verified',
    category: 'integration',
  },
];

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Billing & Scope',
    question: 'Are these fees fixed or starting estimates?',
    answer: 'They are transparent starting baselines. If your requirements align with the package specifications (e.g., a 5-page static site with standard forms), the fee is exactly what is listed. If you need bespoke APIs, custom authentication, or 20 additional pages, we provide a transparent, itemized quote based on our unbundled rate card before any work begins.',
  },
  {
    id: 'faq-2',
    category: 'Infrastructure',
    question: 'How does domain and cloud hosting work?',
    answer: 'To ensure complete independence, we recommend clients purchase domains (e.g., from Namecheap, Cloudflare, or GoDaddy) and hosting directly with their own payment card. We assist you step-by-step through configuration and deployment for free. If you prefer us to handle hosting end-to-end, we bill hosting charges at actual cost with zero markup.',
  },
  {
    id: 'faq-3',
    category: 'Integrations',
    question: 'Which payment gateways can you integrate?',
    answer: 'We natively integrate Razorpay, Cashfree, PayU, and PhonePe for Indian UPI/Netbanking/Credit Card transactions, as well as Stripe and PayPal for international currencies. Client must possess an active merchant account; we handle the secure server-side verification and webhook integration.',
  },
  {
    id: 'faq-4',
    category: 'Support & Warranty',
    question: 'What happens after the project is deployed?',
    answer: 'Every package comes with a 30-day post-launch warranty period where our engineers resolve any runtime bugs, alignment issues, or performance hitches at zero extra cost. After 30 days, you can manage the platform independently or subscribe to our low-cost monthly maintenance retainer.',
  },
  {
    id: 'faq-5',
    category: 'Upgrades',
    question: 'Can I upgrade from a Static website to a Dynamic CMS later?',
    answer: 'Yes, seamlessly. Because we write clean component-driven React and Next.js code from day one, your static site can be connected to a headless CMS or relational database later on. You simply pay the difference in engineering scope when your business is ready to expand.',
  },
  {
    id: 'faq-6',
    category: 'Code Ownership',
    question: 'How do you transfer the Git repository to our team?',
    answer: 'Upon final settlement, we initiate a full GitHub or GitLab repository ownership transfer directly to your organization account, alongside a documented production deployment README, environment variable template, and signed IP transfer confirmation.',
  },
];

export interface PortfolioItem {
  id: string;
  name: string;
  tagline: string;
  category: 'Static' | 'Dynamic CMS' | 'E-Commerce' | 'SaaS';
  metrics: string;
  deliverables: string[];
  techStack: string[];
  description: string;
}

export const PORTFOLIO_BLUEPRINTS: PortfolioItem[] = [
  {
    id: 'cafe-bella',
    name: 'Artisan Roastery & Café',
    tagline: 'High-speed culinary showcase with menu tabs & WhatsApp booking',
    category: 'Static',
    metrics: '99/100 Lighthouse · 0.4s LCP',
    deliverables: ['Custom Hero with coffee bean micro-animations', 'Interactive Seasonal Menu with dietary filters', 'Interior Ambient photo gallery', '1-click WhatsApp order redirect'],
    techStack: ['Next.js 15', 'Tailwind CSS', 'Cloudflare CDN', 'Google Maps API'],
    description: 'Designed for a Bengaluru specialty roastery needing an undeniable visual showcase without recurring CMS overhead. Achieved sub-second page loads globally.',
  },
  {
    id: 'vidya-lms',
    name: 'Vidya STEM Coaching Institute',
    tagline: 'Multi-course portal with faculty roster & secure lead inbox',
    category: 'Dynamic CMS',
    metrics: '3.4x Inbound Admissions in 45 Days',
    deliverables: ['Custom Admin CMS for faculty & batch schedule edits', 'Student Exam Syllabus PDF auto-fetch', 'In-database leads tracking with SMS alert', 'SEO Structured Schema for Education'],
    techStack: ['React', 'Supabase PostgreSQL', 'Tailwind', 'Resend Email API'],
    description: 'Replaced a slow WordPress installation with a bespoke React & PostgreSQL stack. Administrative staff update timetables and courses without calling a developer.',
  },
  {
    id: 'vanya-organics',
    name: 'Vanya Herbal & Botanical D2C',
    tagline: 'Clean skincare store with Razorpay UPI & automated invoicing',
    category: 'E-Commerce',
    metrics: '₹4.8L+ Monthly GMV processed',
    deliverables: ['Product catalog with size/skin-type variation filters', 'Cart with Indian PIN Code delivery estimation', 'Razorpay Checkout with Instant UPI intent', 'Automatic GST Invoicing & WhatsApp shipping updates'],
    techStack: ['Next.js App Router', 'PostgreSQL', 'Razorpay Webhooks', 'Shiprocket API'],
    description: 'Engineered an authentic luxury D2C storefront with zero template bloat. Seamless checkout with instant payment webhook reconciliation.',
  },
];
