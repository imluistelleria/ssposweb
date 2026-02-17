// Central page registry — single source of truth for all 130 white pages
// Generated from page list.csv

export interface PageData {
  slug: string; // full URL path e.g. "/platform/sell-anywhere/countertop-pos-mach-2"
  title: string;
  description: string; // unique SEO meta description (150-160 chars)
  mainMenu: string; // top-level category key
  subMenu1: string; // sub-category
  subMenu2: string; // section grouping
  breadcrumbs: { label: string; href: string }[];
}

// ---------------------------------------------------------------------------
// Slug helper — converts a title to a URL-friendly slug
// ---------------------------------------------------------------------------
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[()\/]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function menuSlug(text: string): string {
  return slugify(text);
}

// ---------------------------------------------------------------------------
// All Pages
// ---------------------------------------------------------------------------
export const allPages: PageData[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PLATFORM — Sell Anywhere
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/platform/sell-anywhere/countertop-pos-mach-2",
    title: "Countertop POS (Mach 2)",
    description: "Discover the SuperSonic Mach 2 countertop POS — a powerful, reliable register built for high-traffic convenience stores, delis, and retail.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "POS Systems & Registers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/high-volume-lane-pos-mach-flex",
    title: "High-Volume Lane POS (Mach Flex)",
    description: "Meet the Mach Flex — SuperSonic's high-volume lane POS designed for supermarkets, busy retailers, and multi-lane checkout environments.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "POS Systems & Registers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/smart-terminal-pos-mach-genius",
    title: "Smart Terminal POS (Mach Genius)",
    description: "The Mach Genius smart terminal combines payment acceptance and POS functionality in one sleek device for fast, flexible checkout.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "POS Systems & Registers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/compare-pos-hardware",
    title: "Compare POS Hardware",
    description: "Compare SuperSonic POS hardware side by side — Mach 2, Mach Flex, Mach Genius, and more. Find the right terminal for your store.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "POS Systems & Registers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/mobile-pos-mach-go",
    title: "Mobile POS (Mach Go)",
    description: "Take payments anywhere with the Mach Go mobile POS. Ideal for line-busting, delivery, curbside pickup, and pop-up retail locations.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Mobile & Handheld",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/tablet-pos-mach-mini",
    title: "Tablet POS (Mach Mini)",
    description: "The Mach Mini tablet POS delivers full POS capability in a compact form factor — perfect for small stores, cafes, and kiosks.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Mobile & Handheld",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/tap-to-pay-softpos-byod",
    title: "Tap-to-Pay / SoftPOS (BYOD)",
    description: "Turn any smartphone into a payment terminal with SuperSonic SoftPOS. Accept tap-to-pay on your own device — no extra hardware needed.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Mobile & Handheld",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/self-service-kiosk-mach-x",
    title: "Self-Service Kiosk (Mach X)",
    description: "Reduce wait times and labor costs with the Mach X self-service kiosk. Let customers order and pay on their own — fast and easy.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Self-Service & Kiosk",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/pay-at-pump-and-fuel-controller",
    title: "Pay-at-Pump & Fuel Controller",
    description: "Manage fuel dispensers and accept payments at the pump with SuperSonic's integrated pay-at-pump and fuel controller solution.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Fuel & Forecourt Hardware",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/label-printers",
    title: "Label Printers",
    description: "Print barcode labels, shelf tags, and product stickers directly from your POS with SuperSonic-compatible label printers.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Peripherals & Essentials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/electronic-shelf-labels-esl",
    title: "Electronic Shelf Labels (ESL)",
    description: "Update prices across your store instantly with electronic shelf labels. Sync pricing from your POS to every shelf — wirelessly.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Peripherals & Essentials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/kitchen-display-system-kds",
    title: "Kitchen Display System (KDS)",
    description: "Streamline food prep with SuperSonic's kitchen display system. Route orders from the POS to the kitchen in real time — no paper tickets.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Peripherals & Essentials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/scanners-and-scales",
    title: "Scanners & Scales",
    description: "Equip your checkout with SuperSonic-compatible barcode scanners and precision scales for fast, accurate product scanning and weighing.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Peripherals & Essentials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/cellular-backup-router-and-wi-fi",
    title: "Cellular Backup Router & Wi-Fi",
    description: "Keep your POS online with SuperSonic's cellular backup router. Automatic failover to 4G/5G ensures you never miss a transaction.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Peripherals & Essentials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },
  {
    slug: "/platform/sell-anywhere/accessories-and-peripherals",
    title: "Accessories & Peripherals",
    description: "Browse the full range of SuperSonic POS accessories — receipt printers, cash drawers, mounts, and more to complete your setup.",
    mainMenu: "Platform",
    subMenu1: "Sell Anywhere",
    subMenu2: "Peripherals & Essentials",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Sell Anywhere", href: "/platform/sell-anywhere" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLATFORM — Run Your Store
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/platform/run-your-store/supersonic-cloud-back-office",
    title: "SuperSonic Cloud (Back Office)",
    description: "Manage your entire business from one cloud dashboard. SuperSonic Cloud gives you real-time control over sales, inventory, and operations.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Core Platform & Back Office",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/pricebook-and-pricing-automation",
    title: "Pricebook & Pricing Automation",
    description: "Automate pricing across categories, locations, and promotions with SuperSonic's smart pricebook engine. Save time, increase margins.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Core Platform & Back Office",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/inventory-management-and-edi",
    title: "Inventory Management & EDI",
    description: "Track stock levels in real time, automate reorders, and connect to suppliers via EDI. SuperSonic keeps your shelves stocked and optimized.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Core Platform & Back Office",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/always-on-pos-offline-and-cellular",
    title: "Always-On POS (Offline & Cellular)",
    description: "Never stop selling. SuperSonic's Always-On POS works offline and over cellular so your store keeps running even when the internet goes down.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Core Platform & Back Office",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/ai-insights-and-automation",
    title: "AI Insights & Automation",
    description: "Leverage AI to uncover sales trends, automate tasks, and get actionable recommendations that help you run a smarter, more profitable store.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Core Platform & Back Office",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/merchant-app-mobile-management",
    title: "Merchant App (Mobile Management)",
    description: "Monitor your store from anywhere with the SuperSonic Merchant App. View sales, manage inventory, and get alerts — all from your phone.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Store Operations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/lottery-management",
    title: "Lottery Management",
    description: "Track lottery ticket inventory, monitor activations, and reconcile payouts with SuperSonic's built-in lottery management tools.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Store Operations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/open-tabs-and-tip-adjustments",
    title: "Open Tabs & Tip Adjustments",
    description: "Keep customer tabs open and adjust tips after the sale. Perfect for bars, restaurants, and food-service environments using SuperSonic POS.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Store Operations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/permissions-and-manager-controls",
    title: "Permissions & Manager Controls",
    description: "Set role-based permissions, require manager overrides for sensitive actions, and control who can access what on your SuperSonic POS.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "Store Operations",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/multi-store-hq",
    title: "Multi-Store HQ",
    description: "Manage multiple locations from a single headquarters dashboard. Push pricing, menu changes, and policies across all your stores at once.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "HQ & Analytics",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },
  {
    slug: "/platform/run-your-store/reporting-and-analytics",
    title: "Reporting & Analytics",
    description: "Get deep visibility into your business with SuperSonic's reporting and analytics. Track sales, margins, trends, and employee performance.",
    mainMenu: "Platform",
    subMenu1: "Run Your Store",
    subMenu2: "HQ & Analytics",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Run Your Store", href: "/platform/run-your-store" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLATFORM — Fuel & Forecourt
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/platform/fuel-and-forecourt/fuel-back-office",
    title: "Fuel Back Office",
    description: "Run your fuel operations from the cloud. SuperSonic's Fuel Back Office manages pricing, inventory, compliance, and reporting in one place.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Core Fuel Platform",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },
  {
    slug: "/platform/fuel-and-forecourt/forecourt-loyalty",
    title: "Forecourt Loyalty",
    description: "Drive repeat visits with forecourt loyalty programs. Reward customers at the pump and inside the store with SuperSonic's loyalty suite.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Core Fuel Platform",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },
  {
    slug: "/platform/fuel-and-forecourt/tank-monitoring-and-fuel-inventory",
    title: "Tank Monitoring & Fuel Inventory",
    description: "Monitor tank levels, track fuel deliveries, and prevent runouts with SuperSonic's real-time tank monitoring and fuel inventory system.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Core Fuel Platform",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },
  {
    slug: "/platform/fuel-and-forecourt/fuel-price-management-and-margin-control",
    title: "Fuel Price Management & Margin Control",
    description: "Set competitive fuel prices and protect margins with automated pricing rules. SuperSonic helps you react to market changes in real time.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Core Fuel Platform",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },
  {
    slug: "/platform/fuel-and-forecourt/site-and-multi-site-fuel-reporting",
    title: "Site & Multi-Site Fuel Reporting",
    description: "Get detailed fuel reporting across one or many sites. Track gallons sold, margins, tank levels, and performance from a single dashboard.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Core Fuel Platform",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },
  {
    slug: "/platform/fuel-and-forecourt/fleet-card-processing",
    title: "Fleet Card Processing",
    description: "Accept and process fleet cards at the pump and register. SuperSonic supports all major fleet card networks for gas stations and truck stops.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Fuel POS",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },
  {
    slug: "/platform/fuel-and-forecourt/indoor-fuel-pos-and-pay-at-pump",
    title: "Indoor Fuel POS & Pay-at-Pump",
    description: "Manage fuel sales from inside the store or at the pump with SuperSonic's integrated indoor fuel POS and pay-at-pump solution.",
    mainMenu: "Platform",
    subMenu1: "Fuel & Forecourt",
    subMenu2: "Fuel POS",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Fuel & Forecourt", href: "/platform/fuel-and-forecourt" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLATFORM — Workforce & Finance
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/platform/workforce-and-finance/payroll-platform",
    title: "Payroll Platform",
    description: "Run payroll directly from your POS platform. SuperSonic's integrated payroll handles taxes, direct deposits, and compliance automatically.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Workforce",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/tip-management",
    title: "Tip Management",
    description: "Automate tip pooling, splitting, and reporting with SuperSonic's tip management. Keep your team happy and stay compliant effortlessly.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Workforce",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/time-clock-and-scheduling",
    title: "Time Clock & Scheduling",
    description: "Track employee hours, build schedules, and manage shifts — all from your SuperSonic POS. Reduce labor costs and improve coverage.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Workforce",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/employee-management",
    title: "Employee Management",
    description: "Onboard, manage, and track employee performance with SuperSonic. Set permissions, monitor activity, and keep your team accountable.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Workforce",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/earned-wage-access",
    title: "Earned Wage Access",
    description: "Give employees access to earned wages before payday. SuperSonic's earned wage access boosts retention and reduces turnover at your store.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Financial Tools",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/supersonic-business-wallet",
    title: "SuperSonic Business Wallet",
    description: "Manage business funds, make payments, and track expenses with the SuperSonic Business Wallet — your all-in-one financial command center.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Financial Tools",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/bill-pay-and-check-writing",
    title: "Bill Pay & Check Writing",
    description: "Pay vendors and write checks directly from your SuperSonic dashboard. Simplify accounts payable and keep your finances organized.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Financial Tools",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },
  {
    slug: "/platform/workforce-and-finance/capital-and-loans",
    title: "Capital & Loans",
    description: "Access working capital and business loans through SuperSonic. Fund growth, equipment, or inventory with flexible financing options.",
    mainMenu: "Platform",
    subMenu1: "Workforce & Finance",
    subMenu2: "Financial Tools",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Workforce & Finance", href: "/platform/workforce-and-finance" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLATFORM — Grow & Protect
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/platform/grow-and-protect/online-ordering",
    title: "Online Ordering",
    description: "Let customers order online for pickup or delivery. SuperSonic's online ordering integrates directly with your POS for seamless fulfillment.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Delivery & Online Growth",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/delivery-integrations-doordash-uber-eats",
    title: "Delivery Integrations (DoorDash/Uber Eats)",
    description: "Connect DoorDash, Uber Eats, and other delivery apps directly to your POS. Orders flow in automatically — no tablet juggling required.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Delivery & Online Growth",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/local-marketplace",
    title: "Local Marketplace",
    description: "Reach more local customers through SuperSonic's marketplace. List your products and get discovered by shoppers in your neighborhood.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Delivery & Online Growth",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/branded-websites",
    title: "Branded Websites",
    description: "Launch a professional branded website for your store with SuperSonic. Showcase your products, accept orders, and build your online presence.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Delivery & Online Growth",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/loyalty-suite",
    title: "Loyalty Suite",
    description: "Build customer loyalty with points, rewards, and personalized offers. SuperSonic's loyalty suite drives repeat visits and higher spend.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Loyalty & Marketing",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/gift-cards-and-digital-passes",
    title: "Gift Cards & Digital Passes",
    description: "Sell physical and digital gift cards through your POS. Drive new customers and revenue with SuperSonic's integrated gift card program.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Loyalty & Marketing",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/scan-data-and-vendor-programs",
    title: "Scan Data & Vendor Programs",
    description: "Earn rebates and vendor incentives by sharing scan data. SuperSonic automates reporting to tobacco, beverage, and snack manufacturers.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Loyalty & Marketing",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/marketing-automation-sms-and-email",
    title: "Marketing Automation (SMS & Email)",
    description: "Send targeted SMS and email campaigns to your customers automatically. SuperSonic's marketing tools help you drive traffic and boost sales.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Loyalty & Marketing",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/review-management",
    title: "Review Management",
    description: "Monitor and respond to customer reviews across Google, Yelp, and more. Protect your reputation and turn feedback into growth opportunities.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Loyalty & Marketing",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/online-presence-management",
    title: "Online Presence Management",
    description: "Keep your business listings accurate across Google, Apple Maps, Yelp, and 60+ directories with SuperSonic's online presence management.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Loyalty & Marketing",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/ebt-ewic-and-snap-compliance",
    title: "EBT, eWIC & SNAP Compliance",
    description: "Stay compliant with EBT, eWIC, and SNAP regulations. SuperSonic automatically enforces eligible items and handles government benefit processing.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Store Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/age-verification",
    title: "Age Verification",
    description: "Enforce age-restricted sales with built-in ID scanning and age prompts. Protect your license and stay compliant with SuperSonic POS.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Store Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/role-based-overrides",
    title: "Role-Based Overrides",
    description: "Control access to sensitive POS functions with role-based overrides. Require manager approval for voids, discounts, and price changes.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Store Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/loss-prevention-and-anti-theft-lpa",
    title: "Loss Prevention & Anti-Theft (LPA)",
    description: "Reduce shrinkage with SuperSonic's loss prevention tools. Detect suspicious transactions, flag exceptions, and protect your bottom line.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Protection & Loss Prevention",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/transaction-intelligence-and-alerts",
    title: "Transaction Intelligence & Alerts",
    description: "Get intelligent alerts on suspicious transactions, unusual patterns, and potential fraud. SuperSonic keeps you informed and in control.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Protection & Loss Prevention",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/real-time-alerts-and-exception-monitoring",
    title: "Real-Time Alerts & Exception Monitoring",
    description: "Monitor your store in real time with automated exception alerts. Catch voids, refunds, and policy violations as they happen with SuperSonic.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Protection & Loss Prevention",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/manager-cards",
    title: "Manager Cards",
    description: "Issue manager cards for secure overrides and approvals at the POS. Track every action and maintain accountability across your team.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Protection & Loss Prevention",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },
  {
    slug: "/platform/grow-and-protect/panic-button-integration",
    title: "Panic Button Integration",
    description: "Keep your team safe with SuperSonic's panic button integration. Trigger silent alerts to authorities directly from the POS in emergencies.",
    mainMenu: "Platform",
    subMenu1: "Grow & Protect",
    subMenu2: "Protection & Loss Prevention",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Platform", href: "/platform" },
      { label: "Grow & Protect", href: "/platform/grow-and-protect" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIES WE SERVE — Convenience Retail
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/industries/convenience-retail/c-stores-and-mini-marts",
    title: "C-Stores & Mini-Marts",
    description: "SuperSonic POS is built for convenience stores and mini-marts. Fast checkout, lottery, tobacco compliance, and inventory — all in one system.",
    mainMenu: "Industries We Serve",
    subMenu1: "Convenience Retail",
    subMenu2: "Convenience Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Convenience Retail", href: "/industries/convenience-retail" },
    ],
  },
  {
    slug: "/industries/convenience-retail/smoke-vape-and-tobacco-shops",
    title: "Smoke, Vape & Tobacco Shops",
    description: "POS designed for smoke shops and vape stores. Age verification, scan data reporting, and compliance built in with SuperSonic POS.",
    mainMenu: "Industries We Serve",
    subMenu1: "Convenience Retail",
    subMenu2: "Convenience Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Convenience Retail", href: "/industries/convenience-retail" },
    ],
  },
  {
    slug: "/industries/convenience-retail/liquor-wine-and-spirits",
    title: "Liquor, Wine & Spirits",
    description: "SuperSonic POS for liquor stores. Age-gating, case-break tracking, mix-and-match pricing, and inventory tools built for beverage retail.",
    mainMenu: "Industries We Serve",
    subMenu1: "Convenience Retail",
    subMenu2: "Convenience Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Convenience Retail", href: "/industries/convenience-retail" },
    ],
  },
  {
    slug: "/industries/convenience-retail/bodegas-and-delis",
    title: "Bodegas & Delis",
    description: "Run your bodega or deli with SuperSonic POS. Handle EBT, deli scales, quick checkout, and inventory management in one easy system.",
    mainMenu: "Industries We Serve",
    subMenu1: "Convenience Retail",
    subMenu2: "Convenience Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Convenience Retail", href: "/industries/convenience-retail" },
    ],
  },
  {
    slug: "/industries/convenience-retail/dollar-and-variety-stores",
    title: "Dollar & Variety Stores",
    description: "POS for dollar stores and variety shops. Fast scanning, simple pricing, EBT acceptance, and inventory tracking with SuperSonic POS.",
    mainMenu: "Industries We Serve",
    subMenu1: "Convenience Retail",
    subMenu2: "Convenience Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Convenience Retail", href: "/industries/convenience-retail" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIES WE SERVE — Specialty Retail
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/industries/specialty-retail/ethnic-grocers",
    title: "Ethnic Grocers",
    description: "SuperSonic POS for ethnic grocery stores. Manage diverse product catalogs, multilingual receipts, EBT, and scale-based pricing with ease.",
    mainMenu: "Industries We Serve",
    subMenu1: "Specialty Retail",
    subMenu2: "Grocery & Specialty Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Specialty Retail", href: "/industries/specialty-retail" },
    ],
  },
  {
    slug: "/industries/specialty-retail/supermarkets-and-regional-chains",
    title: "Supermarkets & Regional Chains",
    description: "Enterprise POS for supermarkets and regional grocery chains. Multi-lane, multi-store, EDI, and advanced inventory at SuperSonic scale.",
    mainMenu: "Industries We Serve",
    subMenu1: "Specialty Retail",
    subMenu2: "Grocery & Specialty Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Specialty Retail", href: "/industries/specialty-retail" },
    ],
  },
  {
    slug: "/industries/specialty-retail/hardware-and-home-stores",
    title: "Hardware & Home Stores",
    description: "POS built for hardware stores and home improvement retailers. Manage large catalogs, special orders, and contractor accounts with SuperSonic.",
    mainMenu: "Industries We Serve",
    subMenu1: "Specialty Retail",
    subMenu2: "Grocery & Specialty Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Specialty Retail", href: "/industries/specialty-retail" },
    ],
  },
  {
    slug: "/industries/specialty-retail/health-and-beauty-shops",
    title: "Health & Beauty Shops",
    description: "SuperSonic POS for health and beauty retailers. Track expiration dates, manage promotions, and offer loyalty rewards to your customers.",
    mainMenu: "Industries We Serve",
    subMenu1: "Specialty Retail",
    subMenu2: "Grocery & Specialty Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Specialty Retail", href: "/industries/specialty-retail" },
    ],
  },
  {
    slug: "/industries/specialty-retail/specialty-food-retail-butcher-seafood-produce",
    title: "Specialty Food Retail (Butcher/Seafood/Produce)",
    description: "POS for butcher shops, seafood markets, and produce stands. Scale integration, custom labels, and perishable inventory management built in.",
    mainMenu: "Industries We Serve",
    subMenu1: "Specialty Retail",
    subMenu2: "Grocery & Specialty Retail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Specialty Retail", href: "/industries/specialty-retail" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIES WE SERVE — Food & Beverage
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/industries/food-and-beverage/qsr-and-fast-casual",
    title: "QSR & Fast Casual",
    description: "SuperSonic POS for quick-service and fast-casual restaurants. Speed up orders with KDS, kiosks, and online ordering integration.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food & Beverage",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },
  {
    slug: "/industries/food-and-beverage/cafes-bakeries-and-dessert",
    title: "Cafes, Bakeries & Dessert",
    description: "POS for cafes, bakeries, and dessert shops. Modifier-based ordering, tip management, and loyalty programs built for food service.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food & Beverage",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },
  {
    slug: "/industries/food-and-beverage/bars-and-nightlife",
    title: "Bars & Nightlife",
    description: "POS for bars, pubs, and nightlife venues. Open tabs, quick pours, age verification, and tip tracking with SuperSonic POS.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food & Beverage",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },
  {
    slug: "/industries/food-and-beverage/food-trucks-and-ghost-kitchens",
    title: "Food Trucks & Ghost Kitchens",
    description: "Mobile-first POS for food trucks and ghost kitchens. Accept payments anywhere with cellular connectivity and online ordering built in.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food & Beverage",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },
  {
    slug: "/industries/food-and-beverage/in-store-food-programs-and-hybrids",
    title: "In-Store Food Programs & Hybrids",
    description: "Run a food program inside your retail store with SuperSonic. Manage deli, hot food, and grab-and-go alongside your retail checkout.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food & Beverage",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },
  {
    slug: "/industries/food-and-beverage/floor-plan-and-table-management",
    title: "Floor Plan & Table Management",
    description: "Design your restaurant floor plan and manage table assignments with SuperSonic. Track covers, turns, and server sections in real time.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food Service Highlights",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },
  {
    slug: "/industries/food-and-beverage/opentable-reservations",
    title: "OpenTable/Reservations",
    description: "Integrate OpenTable and reservation systems with your SuperSonic POS. Sync bookings, walk-ins, and waitlists for seamless front-of-house.",
    mainMenu: "Industries We Serve",
    subMenu1: "Food & Beverage",
    subMenu2: "Food Service Highlights",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIES WE SERVE — Fuel & Travel Centers
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/industries/fuel-and-travel-centers/gas-stations-and-forecourt-retail",
    title: "Gas Stations & Forecourt Retail",
    description: "All-in-one POS for gas stations. Manage fuel, c-store inventory, payments, and loyalty from a single SuperSonic platform.",
    mainMenu: "Industries We Serve",
    subMenu1: "Fuel & Travel Centers",
    subMenu2: "Fuel & Travel Centers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Fuel & Travel Centers", href: "/industries/fuel-and-travel-centers" },
    ],
  },
  {
    slug: "/industries/fuel-and-travel-centers/travel-centers-and-truck-stops",
    title: "Travel Centers & Truck Stops",
    description: "POS for travel centers and truck stops. Fleet cards, fuel management, showers, parking, and c-store operations — all on SuperSonic.",
    mainMenu: "Industries We Serve",
    subMenu1: "Fuel & Travel Centers",
    subMenu2: "Fuel & Travel Centers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Fuel & Travel Centers", href: "/industries/fuel-and-travel-centers" },
    ],
  },
  {
    slug: "/industries/fuel-and-travel-centers/multi-site-fuel-operators",
    title: "Multi-Site Fuel Operators",
    description: "Enterprise POS for multi-site fuel operators. Centralized pricing, fuel reporting, and back-office management across all your locations.",
    mainMenu: "Industries We Serve",
    subMenu1: "Fuel & Travel Centers",
    subMenu2: "Fuel & Travel Centers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Fuel & Travel Centers", href: "/industries/fuel-and-travel-centers" },
    ],
  },
  {
    slug: "/industries/fuel-and-travel-centers/commercial-fuel-and-cardlock",
    title: "Commercial Fuel & Cardlock",
    description: "Manage commercial fueling and cardlock sites with SuperSonic. Fleet card support, unattended operations, and detailed reporting included.",
    mainMenu: "Industries We Serve",
    subMenu1: "Fuel & Travel Centers",
    subMenu2: "Fuel & Travel Centers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Fuel & Travel Centers", href: "/industries/fuel-and-travel-centers" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYMENTS — Accept Payments
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/payments/accept-payments/in-person-payments",
    title: "In-Person Payments",
    description: "Accept every payment type in-store — credit, debit, contactless, mobile wallets, and more. SuperSonic makes checkout fast and reliable.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/online-payments-and-invoicing",
    title: "Online Payments & Invoicing",
    description: "Accept payments online and send professional invoices. SuperSonic's online payment tools help you get paid faster — anywhere, anytime.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/recurring-and-subscriptions",
    title: "Recurring & Subscriptions",
    description: "Set up recurring billing and subscription payments with SuperSonic. Automate charges for memberships, services, and repeat customers.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/bank-payments-ach-a2a",
    title: "Bank Payments (ACH / A2A)",
    description: "Accept bank-to-bank payments with ACH and account-to-account transfers. Lower processing costs with SuperSonic's bank payment options.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/card-vaulting-and-card-on-file",
    title: "Card Vaulting & Card-on-File",
    description: "Securely store customer payment cards for faster repeat purchases. SuperSonic's PCI-compliant card vault keeps data safe and checkout quick.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/platform-payments-isvs",
    title: "Platform Payments (ISVs)",
    description: "Embed payments into your software platform with SuperSonic. Purpose-built for ISVs who need integrated, white-label payment processing.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/ebt-ewic-and-snap-acceptance",
    title: "EBT, eWIC & SNAP Acceptance",
    description: "Accept EBT, eWIC, and SNAP payments at your store. SuperSonic handles benefit card processing with full compliance built into your POS.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },
  {
    slug: "/payments/accept-payments/otc-and-benefit-card-acceptance",
    title: "OTC & Benefit Card Acceptance",
    description: "Accept OTC benefit cards and health benefit payments at your store. SuperSonic supports flexible benefit card processing for eligible items.",
    mainMenu: "Payments",
    subMenu1: "Accept Payments",
    subMenu2: "Accept Payments",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Accept Payments", href: "/payments/accept-payments" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYMENTS — Protect Your Margin
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/payments/protect-your-margin/dual-pricing",
    title: "Dual Pricing",
    description: "Offer cash and card pricing to offset processing fees. SuperSonic's dual pricing is fully transparent, compliant, and easy to implement.",
    mainMenu: "Payments",
    subMenu1: "Protect Your Margin",
    subMenu2: "Protect Your Margin",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Protect Your Margin", href: "/payments/protect-your-margin" },
    ],
  },
  {
    slug: "/payments/protect-your-margin/surcharging",
    title: "Surcharging",
    description: "Pass credit card processing fees to cardholders with compliant surcharging. SuperSonic handles disclosure, signage, and receipt requirements.",
    mainMenu: "Payments",
    subMenu1: "Protect Your Margin",
    subMenu2: "Protect Your Margin",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Protect Your Margin", href: "/payments/protect-your-margin" },
    ],
  },
  {
    slug: "/payments/protect-your-margin/enterprise-and-custom-rates",
    title: "Enterprise & Custom Rates",
    description: "Get custom payment processing rates tailored to your business volume. SuperSonic offers competitive enterprise pricing for high-volume merchants.",
    mainMenu: "Payments",
    subMenu1: "Protect Your Margin",
    subMenu2: "Protect Your Margin",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Protect Your Margin", href: "/payments/protect-your-margin" },
    ],
  },
  {
    slug: "/payments/protect-your-margin/interchange-and-cost-optimization",
    title: "Interchange & Cost Optimization",
    description: "Reduce interchange costs with SuperSonic's optimization tools. Ensure every transaction routes to the lowest possible processing rate.",
    mainMenu: "Payments",
    subMenu1: "Protect Your Margin",
    subMenu2: "Protect Your Margin",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Protect Your Margin", href: "/payments/protect-your-margin" },
    ],
  },
  {
    slug: "/payments/protect-your-margin/statement-review",
    title: "Statement Review",
    description: "Get a free review of your current processing statement. SuperSonic experts will identify savings opportunities and hidden fees.",
    mainMenu: "Payments",
    subMenu1: "Protect Your Margin",
    subMenu2: "Protect Your Margin",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Protect Your Margin", href: "/payments/protect-your-margin" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYMENTS — Move Money Faster
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/payments/move-money-faster/faster-deposits-and-funding",
    title: "Faster Deposits & Funding",
    description: "Get your money faster with SuperSonic's accelerated funding. Next-day and same-day deposit options keep cash flowing to your business.",
    mainMenu: "Payments",
    subMenu1: "Move Money Faster",
    subMenu2: "Move Money Faster",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Move Money Faster", href: "/payments/move-money-faster" },
    ],
  },
  {
    slug: "/payments/move-money-faster/payouts-and-instant-payouts",
    title: "Payouts & Instant Payouts",
    description: "Send instant payouts to vendors, partners, or employees. SuperSonic's payout tools move money in minutes — not days.",
    mainMenu: "Payments",
    subMenu1: "Move Money Faster",
    subMenu2: "Move Money Faster",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Move Money Faster", href: "/payments/move-money-faster" },
    ],
  },
  {
    slug: "/payments/move-money-faster/supersonic-business-wallet",
    title: "SuperSonic Business Wallet",
    description: "Your all-in-one business wallet for managing funds, making payments, and tracking spending. Integrated into your SuperSonic POS ecosystem.",
    mainMenu: "Payments",
    subMenu1: "Move Money Faster",
    subMenu2: "Move Money Faster",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Move Money Faster", href: "/payments/move-money-faster" },
    ],
  },
  {
    slug: "/payments/move-money-faster/consumer-stored-value-store-wallet",
    title: "Consumer Stored Value / Store Wallet",
    description: "Let customers load and spend from a digital store wallet. Increase prepaid revenue and lock in repeat visits with SuperSonic stored value.",
    mainMenu: "Payments",
    subMenu1: "Move Money Faster",
    subMenu2: "Move Money Faster",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Move Money Faster", href: "/payments/move-money-faster" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYMENTS — Risk & Compliance
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/payments/risk-and-compliance/kyc-kyb-and-underwriting",
    title: "KYC/KYB & Underwriting",
    description: "Streamlined merchant onboarding with automated KYC/KYB and underwriting. Get merchants approved and processing payments in record time.",
    mainMenu: "Payments",
    subMenu1: "Risk & Compliance",
    subMenu2: "Risk & Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Risk & Compliance", href: "/payments/risk-and-compliance" },
    ],
  },
  {
    slug: "/payments/risk-and-compliance/pci-and-device-security",
    title: "PCI & Device Security",
    description: "Stay PCI compliant with SuperSonic's certified payment devices and end-to-end encryption. Protect cardholder data at every touchpoint.",
    mainMenu: "Payments",
    subMenu1: "Risk & Compliance",
    subMenu2: "Risk & Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Risk & Compliance", href: "/payments/risk-and-compliance" },
    ],
  },
  {
    slug: "/payments/risk-and-compliance/chargeback-management",
    title: "Chargeback Management",
    description: "Fight and prevent chargebacks with SuperSonic's dispute management tools. Automated alerts, evidence collection, and resolution tracking.",
    mainMenu: "Payments",
    subMenu1: "Risk & Compliance",
    subMenu2: "Risk & Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Risk & Compliance", href: "/payments/risk-and-compliance" },
    ],
  },
  {
    slug: "/payments/risk-and-compliance/fraud-detection-and-monitoring",
    title: "Fraud Detection & Monitoring",
    description: "Detect and prevent payment fraud in real time with SuperSonic's monitoring tools. Machine learning flags suspicious activity before it costs you.",
    mainMenu: "Payments",
    subMenu1: "Risk & Compliance",
    subMenu2: "Risk & Compliance",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Payments", href: "/payments" },
      { label: "Risk & Compliance", href: "/payments/risk-and-compliance" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTNERS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/partners/partners/agents-and-isos",
    title: "Agents & ISOs",
    description: "Partner with SuperSonic as an agent or ISO. Earn residuals, get dedicated support, and offer your merchants a best-in-class POS platform.",
    mainMenu: "Partners",
    subMenu1: "Partners",
    subMenu2: "Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Partners", href: "/partners/partners" },
    ],
  },
  {
    slug: "/partners/partners/fuel-jobbers-and-distributors",
    title: "Fuel Jobbers & Distributors",
    description: "Equip your fuel stations with SuperSonic POS. Fuel jobbers and distributors get dedicated support, bulk pricing, and white-label options.",
    mainMenu: "Partners",
    subMenu1: "Partners",
    subMenu2: "Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Partners", href: "/partners/partners" },
    ],
  },
  {
    slug: "/partners/partners/wholesalers",
    title: "Wholesalers",
    description: "Partner with SuperSonic as a wholesaler. Bundle POS solutions with your product offerings and give your retail customers a competitive edge.",
    mainMenu: "Partners",
    subMenu1: "Partners",
    subMenu2: "Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Partners", href: "/partners/partners" },
    ],
  },
  {
    slug: "/partners/partners/accounting-partners",
    title: "Accounting Partners",
    description: "Integrate your accounting practice with SuperSonic. Offer clients seamless POS-to-books data flow and earn referral commissions.",
    mainMenu: "Partners",
    subMenu1: "Partners",
    subMenu2: "Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Partners", href: "/partners/partners" },
    ],
  },
  {
    slug: "/partners/integrations-and-app-marketplace/view-all-integrations",
    title: "View All Integrations",
    description: "Browse SuperSonic's full integration marketplace. Connect your POS with accounting, delivery, loyalty, and business tools you already use.",
    mainMenu: "Partners",
    subMenu1: "Integrations & App Marketplace",
    subMenu2: "Integrations & App Marketplace",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Integrations & App Marketplace", href: "/partners/integrations-and-app-marketplace" },
    ],
  },
  {
    slug: "/partners/integrations-and-app-marketplace/quickbooks-online",
    title: "QuickBooks Online",
    description: "Sync your SuperSonic POS data with QuickBooks Online automatically. Sales, taxes, and payments flow to your books — no manual entry needed.",
    mainMenu: "Partners",
    subMenu1: "Integrations & App Marketplace",
    subMenu2: "Integrations & App Marketplace",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Integrations & App Marketplace", href: "/partners/integrations-and-app-marketplace" },
    ],
  },
  {
    slug: "/partners/integrations-and-app-marketplace/davo-sales-tax",
    title: "DAVO Sales Tax",
    description: "Automate sales tax filing and payment with DAVO. SuperSonic's integration sets aside tax daily and files returns on time — every time.",
    mainMenu: "Partners",
    subMenu1: "Integrations & App Marketplace",
    subMenu2: "Integrations & App Marketplace",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Integrations & App Marketplace", href: "/partners/integrations-and-app-marketplace" },
    ],
  },
  {
    slug: "/partners/integrations-and-app-marketplace/lottoshield",
    title: "LottoShield",
    description: "Protect your lottery operations with LottoShield integration. Track ticket inventory, detect theft, and reconcile payouts with SuperSonic POS.",
    mainMenu: "Partners",
    subMenu1: "Integrations & App Marketplace",
    subMenu2: "Integrations & App Marketplace",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Integrations & App Marketplace", href: "/partners/integrations-and-app-marketplace" },
    ],
  },
  {
    slug: "/partners/integrations-and-app-marketplace/bottlecaps-cityhive",
    title: "BottleCaps / CityHive",
    description: "Integrate BottleCaps and CityHive with your SuperSonic POS for e-commerce, delivery, and loyalty tailored to wine, beer, and liquor retail.",
    mainMenu: "Partners",
    subMenu1: "Integrations & App Marketplace",
    subMenu2: "Integrations & App Marketplace",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Integrations & App Marketplace", href: "/partners/integrations-and-app-marketplace" },
    ],
  },
  {
    slug: "/partners/integrations-and-app-marketplace/sin-pin-prepaid-bill-pay",
    title: "SIN PIN (Prepaid / Bill Pay)",
    description: "Offer prepaid wireless top-ups and bill pay services at your store with the SIN PIN integration for SuperSonic POS. Add revenue per transaction.",
    mainMenu: "Partners",
    subMenu1: "Integrations & App Marketplace",
    subMenu2: "Integrations & App Marketplace",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Integrations & App Marketplace", href: "/partners/integrations-and-app-marketplace" },
    ],
  },
  {
    slug: "/partners/developers/developer-programs",
    title: "Developer Programs",
    description: "Join SuperSonic's developer program. Build integrations, access APIs, and create solutions on top of the SuperSonic POS platform.",
    mainMenu: "Partners",
    subMenu1: "Developers",
    subMenu2: "Developers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Developers", href: "/partners/developers" },
    ],
  },
  {
    slug: "/partners/developers/developer-docs",
    title: "Developer Docs",
    description: "Access SuperSonic's developer documentation. Guides, tutorials, and references to help you build powerful integrations with our POS platform.",
    mainMenu: "Partners",
    subMenu1: "Developers",
    subMenu2: "Developers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Developers", href: "/partners/developers" },
    ],
  },
  {
    slug: "/partners/developers/api-reference-open-api",
    title: "API Reference (Open API)",
    description: "Explore SuperSonic's Open API reference. RESTful endpoints for POS, payments, inventory, and more — everything you need to integrate.",
    mainMenu: "Partners",
    subMenu1: "Developers",
    subMenu2: "Developers",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Partners", href: "/partners" },
      { label: "Developers", href: "/partners/developers" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ABOUT
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "/about/company/our-story-and-mission",
    title: "Our Story & Mission",
    description: "Learn about SuperSonic POS — our mission to empower independent retailers with enterprise-grade technology at an affordable price.",
    mainMenu: "About",
    subMenu1: "Company",
    subMenu2: "Company",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Company", href: "/about/company" },
    ],
  },
  {
    slug: "/about/company/careers",
    title: "Careers",
    description: "Join the SuperSonic POS team. Explore open positions in engineering, sales, support, and more. Help us transform retail technology.",
    mainMenu: "About",
    subMenu1: "Company",
    subMenu2: "Company",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Company", href: "/about/company" },
    ],
  },
  {
    slug: "/about/company/press-and-media",
    title: "Press & Media",
    description: "SuperSonic POS press room. Find press releases, media assets, brand guidelines, and contact information for media inquiries.",
    mainMenu: "About",
    subMenu1: "Company",
    subMenu2: "Company",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Company", href: "/about/company" },
    ],
  },
  {
    slug: "/about/company/contact-us",
    title: "Contact Us",
    description: "Get in touch with SuperSonic POS. Reach our sales team, support, or corporate office. We're here to help you grow your business.",
    mainMenu: "About",
    subMenu1: "Company",
    subMenu2: "Company",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Company", href: "/about/company" },
    ],
  },
  {
    slug: "/about/resources/customers-and-stories",
    title: "Customers & Stories",
    description: "Read how real merchants grow their businesses with SuperSonic POS. Customer stories, case studies, and success spotlights from every industry.",
    mainMenu: "About",
    subMenu1: "Resources",
    subMenu2: "Resources",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Resources", href: "/about/resources" },
    ],
  },
  {
    slug: "/about/resources/implementation-and-onboarding",
    title: "Implementation & Onboarding",
    description: "Get up and running fast with SuperSonic's guided implementation and onboarding. White-glove setup, data migration, and training included.",
    mainMenu: "About",
    subMenu1: "Resources",
    subMenu2: "Resources",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Resources", href: "/about/resources" },
    ],
  },
  {
    slug: "/about/resources/training-and-academy",
    title: "Training & Academy",
    description: "Master your SuperSonic POS with our training academy. On-demand courses, live sessions, and certifications for you and your team.",
    mainMenu: "About",
    subMenu1: "Resources",
    subMenu2: "Resources",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Resources", href: "/about/resources" },
    ],
  },
  {
    slug: "/about/resources/help-center-and-support",
    title: "Help Center & Support",
    description: "Find answers fast in the SuperSonic Help Center. Browse articles, troubleshoot issues, or connect with 24/7 live support for your POS.",
    mainMenu: "About",
    subMenu1: "Resources",
    subMenu2: "Resources",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Resources", href: "/about/resources" },
    ],
  },
  {
    slug: "/about/security-and-trust/security-and-compliance",
    title: "Security & Compliance",
    description: "SuperSonic POS security and compliance certifications. PCI DSS, SOC 2, encryption standards, and data protection policies explained.",
    mainMenu: "About",
    subMenu1: "Security & Trust",
    subMenu2: "Security & Trust",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Security & Trust", href: "/about/security-and-trust" },
    ],
  },
  {
    slug: "/about/security-and-trust/status-page",
    title: "Status Page",
    description: "Check real-time system status for all SuperSonic POS services. View uptime history, scheduled maintenance, and incident reports.",
    mainMenu: "About",
    subMenu1: "Security & Trust",
    subMenu2: "Security & Trust",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Security & Trust", href: "/about/security-and-trust" },
    ],
  },
  {
    slug: "/about/security-and-trust/legal",
    title: "Legal",
    description: "SuperSonic POS legal information. Terms of service, privacy policy, acceptable use policy, and other legal documents for merchants.",
    mainMenu: "About",
    subMenu1: "Security & Trust",
    subMenu2: "Security & Trust",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Security & Trust", href: "/about/security-and-trust" },
    ],
  },
  {
    slug: "/about/compare/compare-supersonic-vs-competitors",
    title: "Compare SuperSonic vs Competitors",
    description: "See how SuperSonic POS stacks up against the competition. Feature-by-feature comparison with Toast, NCR, Clover, and other POS platforms.",
    mainMenu: "About",
    subMenu1: "Compare",
    subMenu2: "Compare",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Compare", href: "/about/compare" },
    ],
  },
  {
    slug: "/about/compare/supersonic-vs-toast",
    title: "SuperSonic vs Toast",
    description: "SuperSonic POS vs Toast: Compare features, pricing, and capabilities. See why convenience stores and grocers choose SuperSonic over Toast.",
    mainMenu: "About",
    subMenu1: "Compare",
    subMenu2: "Compare",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Compare", href: "/about/compare" },
    ],
  },
  {
    slug: "/about/compare/supersonic-vs-ncr",
    title: "SuperSonic vs NCR",
    description: "SuperSonic POS vs NCR: Modern cloud POS vs legacy systems. Compare cost, features, and support for convenience and fuel retail.",
    mainMenu: "About",
    subMenu1: "Compare",
    subMenu2: "Compare",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Compare", href: "/about/compare" },
    ],
  },
  {
    slug: "/about/compare/supersonic-vs-legacy-fuel-pos",
    title: "SuperSonic vs Legacy Fuel POS",
    description: "Upgrade from legacy fuel POS to SuperSonic. Compare cloud-based fuel management with outdated on-premise systems — see the difference.",
    mainMenu: "About",
    subMenu1: "Compare",
    subMenu2: "Compare",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Compare", href: "/about/compare" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

const SITE_URL = "https://www.supersonicpos.com";

/** Get a page by its full slug path */
export function getPageBySlug(slug: string): PageData | undefined {
  const normalized = slug.startsWith("/") ? slug : `/${slug}`;
  return allPages.find((p) => p.slug === normalized);
}

/** Get all pages for a given main menu category */
export function getPagesByCategory(mainMenu: string): PageData[] {
  return allPages.filter((p) => p.mainMenu === mainMenu);
}

/** Get all pages grouped by mainMenu > subMenu1 > subMenu2 */
export function getPagesGrouped(): Record<string, Record<string, Record<string, PageData[]>>> {
  const grouped: Record<string, Record<string, Record<string, PageData[]>>> = {};
  for (const page of allPages) {
    if (!grouped[page.mainMenu]) grouped[page.mainMenu] = {};
    if (!grouped[page.mainMenu][page.subMenu1]) grouped[page.mainMenu][page.subMenu1] = {};
    if (!grouped[page.mainMenu][page.subMenu1][page.subMenu2])
      grouped[page.mainMenu][page.subMenu1][page.subMenu2] = [];
    grouped[page.mainMenu][page.subMenu1][page.subMenu2].push(page);
  }
  return grouped;
}

/** Get all pages (convenience re-export) */
export function getAllPages(): PageData[] {
  return allPages;
}

/** Category key to route prefix mapping */
export const categoryRouteMap: Record<string, string> = {
  Platform: "platform",
  "Industries We Serve": "industries",
  Payments: "payments",
  Partners: "partners",
  About: "about",
};

/** Get the full canonical URL for a page */
export function getCanonicalUrl(page: PageData): string {
  return `${SITE_URL}${page.slug}`;
}

export { SITE_URL };
