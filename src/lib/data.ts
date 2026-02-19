export const navLinks = [
  { label: "Platform", hasDropdown: true },
  { label: "Industries we Serve", hasDropdown: true },
  { label: "Payments", hasDropdown: true },
  { label: "Partners", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "About", hasDropdown: true },
];

export const platformCategories = [
  { label: "Sell Anywhere", key: "sell-anywhere" },
  { label: "Run Your Store", key: "run-your-store" },
  { label: "Fuel & Forecourt", key: "fuel-forecourt" },
  { label: "Workforce & Finance", key: "workforce-finance" },
  { label: "Grow & Protect", key: "grow-protect" },
];

export const sellAnywhereGroups = [
  {
    icon: "/images/menu/icon-pos.svg",
    title: "POS Systems & Registers",
    items: [
      { label: "Countertop POS (Mach 2)", href: "/platform/sell-anywhere/countertop-pos-mach-2" },
      { label: "High-Volume Lane POS (Mach Flex)" },
      { label: "Smart Terminal POS (Mach Genius)" },
      { label: "Compare POS Hardware →" },
    ],
  },
  {
    icon: "/images/menu/icon-mobile.svg",
    title: "Mobile & Handheld",
    items: [
      { label: "Mobile POS (Mach Go)" },
      { label: "Tablet POS (Mach Mini)", href: "/platform/sell-anywhere/tablet-pos-mach-mini" },
      { label: "Tap-to-Pay / SoftPOS (BYOD)" },
    ],
  },
  {
    icon: "/images/menu/icon-kiosk.svg",
    title: "Self-Service & Kiosk",
    items: [{ label: "Self-Serve Kiosk (Mach X)" }],
  },
  {
    icon: "/images/menu/icon-fuel.svg",
    title: "Fuel & Forecourt Hardware",
    items: [{ label: "Pay-at-Pump & Fuel Controller" }],
  },
  {
    icon: "/images/menu/icon-peripherals.svg",
    title: "Peripherals & Essentials",
    items: [
      { label: "Label Printers" },
      { label: "Electronic Shelf Labels (ESL)" },
      { label: "Kitchen Display (KDS)" },
      { label: "Scanners & Scales" },
      { label: "Cellular Backup Router & Wi-Fi" },
      { label: "Accessories & Peripherals →" },
    ],
  },
];

export const runYourStoreGroups = [
  {
    icon: "/images/menu/icon-backoffice.svg",
    title: "Core Platform & Back Office",
    items: [
      { label: "SuperSonic Cloud (Back Office)" },
      { label: "Pricebook & Pricing Automation" },
      { label: "Inventory Management & EDI" },
      { label: "Always-On POS (Offline Mode & Cellular)" },
      { label: "AI Insights & Automation" },
    ],
  },
  {
    icon: "/images/menu/icon-operations.svg",
    title: "Store Operations",
    items: [
      { label: "Merchant App (Mobile Management)" },
      { label: "Lottery Management" },
      { label: "Open-Tab & Tip Adjustments" },
      { label: "Permissions & Manager Controls" },
    ],
  },
  {
    icon: "/images/menu/icon-analytics.svg",
    title: "HQ & Analytics",
    items: [
      { label: "Multi-Store HQ", href: "/platform/run-your-store/multi-store-hq" },
      { label: "Reporting & Analytics" },
    ],
  },
];

export const fuelForecourtGroups = [
  {
    icon: "/images/menu/icon-operations.svg",
    title: "Core Fuel Platform (Petro Outlet/SuperSonic Petro)",
    items: [
      { label: "Fuel Back Office" },
      { label: "Forecourt Loyalty" },
      { label: "Tank Monitoring & Fuel Inventory" },
      { label: "Fuel Price Changing & Margin Control" },
      { label: "Site & Multi-Site Fuel Reporting" },
    ],
  },
  {
    icon: "/images/menu/icon-fuel.svg",
    title: "Fuel POS",
    items: [
      { label: "Fleet Card Processing" },
      { label: "In-Door Fuel POS & Pay-At-Pump Functions" },
    ],
  },
];

export const growProtectGroups = [
  {
    icon: "/images/menu/icon-operations.svg",
    title: "Delivery & Online Growth",
    items: [
      { label: "Online Ordering" },
      { label: "Delivery Integrations (DoorDash / Uber Eats / Grubhub)" },
      { label: "Local Marketplace" },
      { label: "Branded Websites" },
    ],
  },
  {
    icon: "/images/menu/icon-operations.svg",
    title: "Loyalty & Marketing",
    items: [
      { label: "Loyalty Suite (Points, Punch Cards & Rewards)", href: "/platform/grow-and-protect/loyalty-suite" },
      { label: "Gift Cards & Digital Passes" },
      { label: "Scan Data & Vendor Programs" },
      { label: "Marketing Automation (SMS & Email)" },
      { label: "Review Management" },
      { label: "Online Presence Management" },
    ],
  },
  {
    icon: "/images/menu/icon-operations.svg",
    title: "Store Compliance",
    items: [
      { label: "EBT, eWIC & SNAP Compliance" },
      { label: "Age Verification" },
      { label: "Role-Based Overrides" },
    ],
  },
  {
    icon: "/images/menu/icon-operations.svg",
    title: "Protection & Loss-Prevention",
    items: [
      { label: "Loss Prevention & Anti-Theft Alerts (LPA)", href: "/platform/grow-and-protect/loss-prevention-and-anti-theft-lpa" },
      { label: "Transaction-Linked Video Intelligence" },
      { label: "Real-Time Alerts & Exception Monitoring" },
      { label: "Manager Cards" },
      { label: "Panic Button Integration" },
    ],
  },
];

export const industriesCategories = [
  { label: "Convenience Retail", key: "convenience-retail" },
  { label: "Specialty Retail", key: "specialty-retail" },
  { label: "Food & Beverage", key: "food-beverage" },
  { label: "Fuel & Travel Centers", key: "fuel-travel-centers" },
];

export const paymentsCategories = [
  { label: "Accept Payments", key: "accept-payments" },
  { label: "Protect Your Margin", key: "protect-margin" },
  { label: "Move Money Faster", key: "move-money" },
  { label: "Risk & Compliance", key: "risk-compliance" },
];

export const partnersCategories = [
  { label: "Partners", key: "partners" },
  { label: "App Marketplace", key: "app-marketplace" },
  { label: "Developers", key: "developers" },
];

export const aboutCategories = [
  { label: "Company", key: "company" },
  { label: "Resources", key: "resources" },
  { label: "Security & Trust", key: "security-trust" },
  { label: "Compare", key: "compare" },
];

export const partnerLogos = [
  { name: "Walmart", width: 120 },
  { name: "Cisco", width: 80 },
  { name: "Volvo", width: 60 },
  { name: "Deloitte", width: 90 },
  { name: "Okta", width: 60 },
];

export const featureCards = [
  {
    icon: "/images/features/card-icon-1.svg",
    title: "Multi-Store Store Management",
    description:
      "Increase cigarette sales on average by 10%, drive store foot traffic, and have the cost of our software partially reimbursed by tobacco companies.",
  },
  {
    icon: "/images/features/card-icon-2.svg",
    title: "Camera to POS Integration",
    description:
      "Stop internal theft by filtering and finding risky transactions (Discounts, Void Lines, No Sales) and instantly access HD video footage with sound at the click of a button",
  },
  {
    icon: "/images/features/card-icon-3.png",
    title: "Complete Inventory Control",
    description:
      "Never sell products below cost again. Know your store's real gross margin with complete lottery, cigarette, and product inventory control.",
  },
];

export const serviceCards = [
  {
    icon: "/images/services/camera-icon.svg",
    title: "Camera to POS Integration",
    description:
      "Stop internal theft by filtering and finding risky transactions (Discounts, Void Lines, No Sales) and instantly access HD video footage with sound at the click of a button",
  },
  {
    icon: "/images/services/inventory-icon.svg",
    title: "Complete Inventory Control",
    description:
      "Never sell products below cost again. Know your store's real gross margin with complete lottery, cigarette, and product inventory control.",
  },
  {
    icon: "/images/services/scan-data-icon.svg",
    title: "Scan Data Reporting & Loyalty Programs",
    description:
      "Increase cigarette sales on average by 10%, drive store foot traffic, and have the cost of our software partially reimbursed by tobacco companies.",
  },
  {
    icon: "/images/services/inventory-icon.svg",
    title: "Complete Inventory Control",
    description:
      "Never sell products below cost again. Know your store's real gross margin with complete lottery, cigarette, and product inventory control.",
  },
];

export const featureTabs = [
  {
    title: "Inventory Management",
    description:
      "Gain full visibility into your stock with our advanced inventory system. Automate invoice entry, prevent underpriced sales, and track every product\u2014from lottery to cigarettes\u2014in real-time",
  },
  {
    title: "Scan Data Reports",
    description:
      "Leverage scan data reporting to maximize tobacco rebates and drive additional revenue with detailed transaction analytics.",
  },
  {
    title: "Multi-store Control",
    description:
      "Manage all your locations from a single dashboard. Update prices, monitor inventory, and track performance across every store.",
  },
  {
    title: "Loss Prevention",
    description:
      "Reduce shrinkage with integrated camera-to-POS monitoring. Flag risky transactions and access video footage instantly.",
  },
  {
    title: "Cloud Access",
    description:
      "Access your business data anytime, anywhere. Monitor sales, manage inventory, and make decisions from any device.",
  },
  {
    title: "Payment Integrations",
    description:
      "Accept every payment type with seamless integrations. From chip and tap to mobile wallets, process transactions quickly and securely.",
  },
];

export const blogPosts = [
  {
    image: "/images/blog/blog-1.png",
    excerpt:
      "In today\u2019s fast-paced retail world, the right POS system can mean all the difference.",
  },
  {
    image: "/images/blog/blog-2.png",
    excerpt:
      "In today\u2019s fast-paced retail world, the right POS system can mean all the difference.",
  },
  {
    image: "/images/blog/blog-3.png",
    excerpt:
      "In today\u2019s fast-paced retail world, the right POS system can mean all the difference.",
  },
  {
    image: "/images/blog/blog-4.png",
    excerpt:
      "In today\u2019s fast-paced retail world, the right POS system can mean all the difference.",
  },
  {
    image: "/images/blog/blog-5.png",
    excerpt:
      "In today\u2019s fast-paced retail world, the right POS system can mean all the difference.",
  },
  {
    image: "/images/blog/blog-6.png",
    excerpt:
      "In today\u2019s fast-paced retail world, the right POS system can mean all the difference.",
  },
];

export type FooterSection = { title: string; links: { label: string; href: string }[] };
export type FooterColumn = FooterSection[];

export const footerColumns: FooterColumn[] = [
  // Column 1
  [
    {
      title: "Pricing For Your Business",
      links: [
        { label: "Our Pricing", href: "#" },
        { label: "Understanding Interchange Plus", href: "#" },
        { label: "Free Credit Card Processing", href: "#" },
        { label: "Level 2 & 3 Interchange Optimization", href: "#" },
      ],
    },
    {
      title: "Accepting Payments",
      links: [
        { label: "Point-of-Sale", href: "#" },
        { label: "Virtual Terminal", href: "#" },
        { label: "Invoicing", href: "#" },
        { label: "Online Checkout", href: "#" },
        { label: "Recurring Payments", href: "#" },
        { label: "Payment Pages", href: "#" },
        { label: "Online Payments", href: "#" },
        { label: "Payment Processing", href: "#" },
      ],
    },
    {
      title: "Payment Hardware",
      links: [
        { label: "SuperSonic Smart Terminal", href: "#" },
        { label: "SuperSonic Card Reader", href: "#" },
        { label: "Tap to Pay on iPhone", href: "#" },
      ],
    },
    {
      title: "Payment Methods",
      links: [
        { label: "Debit & Credit Cards", href: "#" },
        { label: "ACH Payments", href: "#" },
        { label: "International Credit Card Processing", href: "#" },
      ],
    },
  ],
  // Column 2
  [
    {
      title: "Switch to SuperSonic",
      links: [
        { label: "Merchant Statement Comparison", href: "#" },
        { label: "Contract Buyout Program", href: "#" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "C-Stores & Mini-Marts", href: "#" },
        { label: "Liquor, Wine & Spirits", href: "#" },
        { label: "Smoke & Vape Shops", href: "#" },
        { label: "Supermarkets & Grocery", href: "#" },
        { label: "QSR & Fast Casual", href: "#" },
        { label: "Gas Stations & Fuel", href: "#" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { label: "Third-Party Integrations", href: "#" },
        { label: "QuickBooks Online", href: "#" },
        { label: "DAVO Sales Tax", href: "#" },
      ],
    },
    {
      title: "Developer Tools",
      links: [
        { label: "APIs", href: "#" },
        { label: "Developer Docs", href: "#" },
      ],
    },
    {
      title: "Our Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "SuperSonic Reviews", href: "#" },
        { label: "The SuperSonic Blog", href: "#" },
      ],
    },
  ],
  // Column 3
  [
    {
      title: "Working With Us",
      links: [
        { label: "Integrated Partners", href: "#" },
        { label: "Affiliate Partners", href: "#" },
        { label: "Media & Press", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Free Small Business Tools",
      links: [
        { label: "Merchant Statement Comparison", href: "#" },
        { label: "Free Invoice Generator", href: "#" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Help & Support", href: "#" },
        { label: "Developers & API Docs", href: "#" },
        { label: "Security & Compliance", href: "#" },
      ],
    },
    {
      title: "Get Started",
      links: [
        { label: "Sign Up", href: "#" },
        { label: "Log In", href: "#" },
      ],
    },
    {
      title: "Terms & Policies",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Acceptable Use", href: "#" },
      ],
    },
  ],
];

export const socialLinks = [
  { icon: "/images/footer/social-x.svg", label: "X", href: "#" },
  { icon: "/images/footer/social-fb.svg", label: "Facebook", href: "#" },
  { icon: "/images/footer/linkedin.svg", label: "LinkedIn", href: "#" },
  { icon: "/images/footer/social-ig.svg", label: "Instagram", href: "#" },
  { icon: "/images/footer/social-yt.svg", label: "YouTube", href: "#" },
];
