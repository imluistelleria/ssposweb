"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridPattern from "@/components/ui/GridPattern";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function Mach2Page({ data }: { data: PageData }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...data.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
        item: `${SITE_URL}${crumb.href}`,
      })),
      {
        "@type": "ListItem",
        position: data.breadcrumbs.length + 1,
        name: data.title,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <HeroSection />
        <StoreSlowDown />
        <LetYourPosWork />
        <BuiltForRealities />
        <GrowWithoutReworking />
        <BeyondTheCounter />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ───── 1. HERO ───── */

function HeroSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        paddingTop: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern — dark borders on white */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(20, 1fr)",
          gridTemplateRows: "repeat(15, 1fr)",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 300 }).map((_, i) => (
          <div
            key={i}
            style={{
              borderRight: "1px solid rgba(16, 24, 40, 0.06)",
              borderBottom: "1px solid rgba(16, 24, 40, 0.06)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding) var(--space-20)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div>
          <h1
            style={{
              fontSize: "52px",
              lineHeight: "62px",
              letterSpacing: "-1px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            The POS That Keeps
            <br />
            Lines Moving
          </h1>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              maxWidth: "480px",
              marginBottom: "var(--space-8)",
            }}
          >
            When your main register struggles, it creates friction across your
            entire store. Mach 2 is built to keep checkout consistent and
            dependable, even during peak hours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              alignItems: "center",
            }}
          >
            <a
              href="#demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--space-2)",
                height: "56px",
                padding: "12px 32px",
                background: "var(--gradient-primary)",
                borderRadius: "var(--radius-full)",
                fontWeight: 700,
                fontSize: "16px",
                color: "var(--color-white)",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                transition: "box-shadow 0.2s ease, transform 0.15s ease",
              }}
            >
              Book a Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/platform/sell-anywhere/compare-pos-hardware"
              className="btn-secondary"
              style={{ textDecoration: "none" }}
            >
              Compare POS Hardware
            </a>
          </div>
        </div>

        {/* Right: POS device mockup */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "460px",
          }}
        >
          {/* Cream circle */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "#f3efe9",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          />

          {/* Main POS terminal mockup */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: "var(--space-4)",
            }}
          >
            {/* POS Screen */}
            <div
              style={{
                width: "280px",
                height: "240px",
                background: "var(--color-gray-900)",
                borderRadius: "12px 12px 4px 4px",
                padding: "8px",
                position: "relative",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              {/* Screen content — colorful grid */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "var(--color-white)",
                  borderRadius: "6px",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gridTemplateRows: "repeat(4, 1fr)",
                  gap: "3px",
                  padding: "6px",
                  overflow: "hidden",
                }}
              >
                {[
                  "#ef4444", "#8b5cf6", "#f97316", "#22c55e", "#3b82f6",
                  "#ec4899", "#f59e0b", "#06b6d4", "#a855f7", "#ef4444",
                  "#10b981", "#6366f1", "#f97316", "#14b8a6", "#8b5cf6",
                  "#f43f5e", "#3b82f6", "#22c55e", "#0aaeb8", "#f59e0b",
                ].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      background: color,
                      borderRadius: "3px",
                      opacity: 0.85,
                    }}
                  />
                ))}
              </div>
              {/* Stand */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "50px",
                  background: "linear-gradient(180deg, #c0c5ce 0%, #dde1e6 100%)",
                  borderRadius: "0 0 8px 8px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "140px",
                  height: "14px",
                  background: "linear-gradient(180deg, #dde1e6 0%, #e8ebef 100%)",
                  borderRadius: "4px",
                }}
              />
            </div>

            {/* Barcode scanner */}
            <div
              style={{
                width: "60px",
                height: "100px",
                position: "relative",
                marginBottom: "-10px",
              }}
            >
              <svg
                width="60"
                height="100"
                viewBox="0 0 60 100"
                fill="none"
                aria-hidden="true"
              >
                {/* Scanner body */}
                <ellipse cx="30" cy="85" rx="20" ry="10" fill="#8b95a3" />
                <rect x="14" y="30" width="32" height="55" rx="4" fill="#5a6270" />
                {/* Scanner head */}
                <rect x="10" y="10" width="40" height="25" rx="6" fill="#3d4550" />
                <rect x="16" y="15" width="28" height="8" rx="2" fill="#ef4444" opacity="0.6" />
              </svg>
            </div>

            {/* Card terminal */}
            <div
              style={{
                width: "70px",
                height: "50px",
                background: "var(--color-gray-900)",
                borderRadius: "6px",
                padding: "4px",
                marginBottom: "-10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "60%",
                  background: "#22c55e",
                  borderRadius: "3px",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "2px",
                  marginTop: "3px",
                  justifyContent: "center",
                }}
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "8px",
                      height: "6px",
                      background: "var(--color-gray-600)",
                      borderRadius: "1px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 2. LET YOUR POS WORK FOR YOU ───── */

function LetYourPosWork() {
  const cards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="var(--color-gray-900)" strokeWidth="1.5" />
          <polyline points="12 6 12 12 16 14" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Checkout stays fast, even during rushes.",
      desc: "Mach 2 handles sustained transaction volume without lag. Scanning, pricing, payments, and receipts remain responsive during peak hours, so lines keep moving and staff stay focused.",
      highlighted: false,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "Pricing, tax, and inventory stay consistent.",
      desc: "Every transaction runs through the SuperSonic POS platform, keeping pricing rules, tax settings, and inventory aligned automatically. Errors are reduced at the counter because the system stays consistent behind the scenes.",
      highlighted: true,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Checkout tools work together, without complications.",
      desc: "Mach 2 integrates directly with the peripherals your checkout depends on, including printers, scanners, cash drawers, and payment devices. Everything works through SuperSonic POS, eliminating patchwork setups and unexpected failures.",
      highlighted: false,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="15 3 21 3 21 9" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9 21 3 21 3 15" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="21" y1="3" x2="14" y2="10" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="3" y1="21" x2="10" y2="14" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Growth happens without replacing your register.",
      desc: "Mach 2 is part of the Sell Anywhere platform. As your business expands, you can add mobile POS, self-service kiosks, or additional checkout lanes without changing systems or retraining your team.",
      highlighted: false,
    },
  ];

  return (
    <section
      style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-4)",
            }}
          >
            Let your POS work for you. Not the other way around
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Mach 2 is designed to remove friction from checkout, so you can
            focus on customers instead of managing the register.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-6)",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: card.highlighted
                  ? "var(--color-primary)"
                  : "var(--color-white)",
                border: card.highlighted
                  ? "none"
                  : "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: card.highlighted
                    ? "rgba(255,255,255,0.2)"
                    : "var(--color-surface-muted)",
                  border: card.highlighted
                    ? "none"
                    : "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: card.highlighted ? "white" : "var(--color-gray-900)",
                }}
              >
                {card.icon}
              </div>
              <h4
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  color: card.highlighted
                    ? "var(--color-white)"
                    : "var(--color-text-heading)",
                  lineHeight: "22px",
                }}
              >
                {card.title}
              </h4>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "22px",
                  color: card.highlighted
                    ? "rgba(255,255,255,0.85)"
                    : "var(--color-text-body)",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── 3. YOUR STORE CAN'T AFFORD TO SLOW DOWN ───── */

function StoreSlowDown() {
  return (
    <section style={{ background: "#f5f5f5", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: 3D chart illustration */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "280px",
            }}
          >
            {/* Blob shape behind */}
            <div
              style={{
                position: "absolute",
                inset: "10px",
                background: "#e8e4de",
                borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
              }}
            />
            {/* 3D Bar chart */}
            <svg
              width="200"
              height="160"
              viewBox="0 0 200 160"
              fill="none"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              aria-hidden="true"
            >
              {/* Bars */}
              <rect x="20" y="100" width="28" height="50" rx="4" fill="#93c5fd" />
              <rect x="56" y="80" width="28" height="70" rx="4" fill="#60a5fa" />
              <rect x="92" y="50" width="28" height="100" rx="4" fill="#3b82f6" />
              <rect x="128" y="30" width="28" height="120" rx="4" fill="#2563eb" />
              {/* Arrow going up */}
              <path
                d="M30 110L70 85L110 55L140 30"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M130 25L145 28L140 42"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Your Store Can&apos;t Afford To Slow Down
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-4)",
            }}
          >
            For store owners, the countertop is the center of the business.
            Customers pay, inventory moves, and performance is measured. When
            this register becomes unreliable, the impact shows up immediately in
            longer lines, frustrated customers, and lost confidence at checkout.
          </p>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-4)",
            }}
          >
            Mach 2 is designed to remove that risk by delivering steady
            performance where your business depends on it most. From scanning
            and pricing to payments and receipts, every interaction is optimized
            for consistent checkout under pressure.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "var(--color-text-heading)",
              fontWeight: 600,
            }}
          >
            Speed is not a feature. It&apos;s the speed you need.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 4. BUILT FOR THE REALITIES OF DAILY RETAIL ───── */

function BuiltForRealities() {
  return (
    <section
      style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Top text */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-4)",
            }}
          >
            Built for the realities of daily retail
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            Retail environments demand equipment that holds up over time, not
            just during demos. Mach 2 is designed to withstand long hours, heavy
            use, and the day-to-day wear that comes with running a busy store.
          </p>
        </div>

        {/* Highlight quote */}
        <p
          style={{
            fontSize: "28px",
            lineHeight: "38px",
            fontWeight: 700,
            color: "var(--color-text-heading)",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto var(--space-12)",
          }}
        >
          This is a POS built to{" "}
          <span
            style={{
              borderBottom: "2px dashed var(--color-primary)",
              paddingBottom: "2px",
            }}
          >
            stay dependable
          </span>{" "}
          through full shifts and high traffic without requiring constant
          attention or resets.
        </p>

        {/* Dashboard mockup */}
        <div
          style={{
            position: "relative",
            background: "#f3efe9",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-8) var(--space-8) 0",
            overflow: "hidden",
          }}
        >
          {/* Floating name tags */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "40px",
              background: "var(--color-primary)",
              borderRadius: "var(--radius-full)",
              padding: "6px 16px",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--color-white)",
              }}
            >
              Jim Kelly
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: "40px",
              background: "var(--color-primary)",
              borderRadius: "var(--radius-full)",
              padding: "6px 16px",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--color-white)",
              }}
            >
              Lucy Smith
            </span>
          </div>

          {/* Dashboard UI */}
          <div
            style={{
              background: "var(--color-white)",
              borderRadius: "12px 12px 0 0",
              boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                padding: "12px 20px",
                borderBottom: "1px solid var(--color-border)",
                background: "var(--color-surface-muted)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "var(--gradient-primary)",
                    borderRadius: "6px",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                  }}
                >
                  SuperSonic Cloud
                </span>
              </div>
              <span style={{ fontSize: "12px", color: "var(--color-text-body)" }}>
                Welcome back, Michael! ☀️
              </span>
              <div style={{ flex: 1 }} />
              {["C-Store", "A-Store"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    padding: "3px 10px",
                    background: "var(--color-primary)",
                    color: "white",
                    borderRadius: "var(--radius-full)",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content area */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 240px",
                minHeight: "360px",
              }}
            >
              {/* Sidebar */}
              <div
                style={{
                  borderRight: "1px solid var(--color-border)",
                  padding: "var(--space-4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                {[
                  { label: "Dashboard", active: true },
                  { label: "Reports", active: false },
                  { label: "Store management", active: false },
                  { label: "Inventory & Financials", active: false },
                  { label: "Online Ordering", active: false },
                  { label: "Fuel & Lotto", active: false },
                  { label: "Loss Prevention", active: false },
                  { label: "Loyalty Platform", active: false },
                  { label: "User Management", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: item.active
                        ? "var(--color-primary)"
                        : "var(--color-text-body)",
                      background: item.active
                        ? "rgba(10,174,184,0.08)"
                        : "transparent",
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {/* Pre-qualified banner */}
                <div
                  style={{
                    background: "rgba(10,174,184,0.06)",
                    borderRadius: "var(--radius-sm)",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-3)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--color-text-heading)" }}>
                    You have been pre-qualified for{" "}
                    <strong>$120,000!</strong>
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                    }}
                  >
                    Complete your application now ↗
                  </span>
                </div>

                {/* Transactions card */}
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--color-text-body)",
                      marginBottom: "4px",
                    }}
                  >
                    Transactions
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: 900,
                      color: "var(--color-text-heading)",
                    }}
                  >
                    $7.82
                  </p>
                  <p style={{ fontSize: "10px", color: "#22c55e", fontWeight: 600 }}>
                    ↗ 100% from last month
                  </p>
                </div>

                {/* Chart placeholder */}
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "16px",
                    height: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "2px",
                      alignItems: "flex-end",
                      height: "100px",
                    }}
                  >
                    {[40, 60, 35, 80, 50, 90, 45, 70, 55, 85, 60, 95].map(
                      (h, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${h}%`,
                            background:
                              i % 3 === 0
                                ? "var(--color-primary)"
                                : i % 3 === 1
                                  ? "#a855f7"
                                  : "#3b82f6",
                            borderRadius: "2px 2px 0 0",
                            opacity: 0.7,
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Right stats sidebar */}
              <div
                style={{
                  borderLeft: "1px solid var(--color-border)",
                  padding: "var(--space-4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                {/* Donut chart */}
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
                    <circle cx="30" cy="30" r="24" fill="none" stroke="var(--color-gray-200)" strokeWidth="8" />
                    <circle
                      cx="30"
                      cy="30"
                      r="24"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="8"
                      strokeDasharray="27 124"
                      strokeLinecap="round"
                      transform="rotate(-90 30 30)"
                    />
                  </svg>
                  <p style={{ fontSize: "16px", fontWeight: 900, color: "var(--color-text-heading)", marginTop: "4px" }}>
                    18%
                  </p>
                  <p style={{ fontSize: "10px", color: "var(--color-text-body)" }}>
                    Target: $12,000
                  </p>
                </div>

                {/* Gallons sold */}
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "12px",
                  }}
                >
                  <p style={{ fontSize: "10px", color: "var(--color-text-body)", marginBottom: "2px" }}>
                    Gallons Sold
                  </p>
                  <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--color-text-heading)" }}>
                    0.00
                  </p>
                </div>

                {/* Inside sales */}
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "12px",
                  }}
                >
                  <p style={{ fontSize: "10px", color: "var(--color-text-body)", marginBottom: "2px" }}>
                    Inside Sales
                  </p>
                  <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--color-text-heading)" }}>
                    $7.82
                  </p>
                  <p style={{ fontSize: "10px", color: "#22c55e", fontWeight: 600 }}>
                    ↗ 100% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 5. GROW WITHOUT REWORKING ───── */

function GrowWithoutReworking() {
  return (
    <section
      style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <div>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Grow without reworking your entire operation
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-4)",
            }}
          >
            Mach 2 supports growth without forcing change before you need it. As
            your operation evolves, you can introduce additional checkout lanes,
            mobile POS, or self-service options while keeping the same core
            system and workflows in place.
          </p>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-heading)",
              fontWeight: 600,
            }}
          >
            Your team does not need to relearn processes, and your data remains
            unified as you grow.
          </p>
        </div>

        {/* Right: Device evolution illustration */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-4)",
          }}
        >
          {/* Store checkout */}
          <div
            style={{
              width: "240px",
              height: "140px",
              background: "var(--color-surface-muted)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" aria-hidden="true">
              <rect x="10" y="5" width="40" height="30" rx="3" fill="var(--color-gray-900)" />
              <rect x="12" y="7" width="36" height="24" rx="2" fill="#60a5fa" opacity="0.3" />
              <rect x="20" y="35" width="24" height="6" rx="2" fill="var(--color-gray-200)" />
              <rect x="55" y="15" width="18" height="25" rx="2" fill="var(--color-gray-600)" />
            </svg>
          </div>

          {/* Arrow down */}
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" aria-hidden="true">
            <path d="M12 2V32M12 32C8 28 6 26 4 24M12 32C16 28 18 26 20 24" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Mobile payment */}
          <div
            style={{
              width: "240px",
              height: "140px",
              background: "var(--color-surface-muted)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" aria-hidden="true">
              {/* Phone */}
              <rect x="10" y="5" width="28" height="50" rx="4" fill="var(--color-gray-900)" />
              <rect x="13" y="10" width="22" height="36" rx="2" fill="#60a5fa" opacity="0.3" />
              <circle cx="24" cy="50" r="2" fill="var(--color-gray-600)" />
              {/* Card terminal */}
              <rect x="45" y="15" width="30" height="35" rx="4" fill="var(--color-gray-600)" />
              <rect x="48" y="18" width="24" height="14" rx="2" fill="#22c55e" opacity="0.4" />
              {/* Contactless waves */}
              <path d="M38 30C40 28 40 24 38 22" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M41 32C44 29 44 23 41 20" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 6. YOUR POS GOES BEYOND THE COUNTER ───── */

function BeyondTheCounter() {
  return (
    <section style={{ background: "#f5f5f5", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: Image placeholder */}
        <div
          style={{
            background: "#f3efe9",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "320px",
          }}
        >
          {/* POS + phone illustration */}
          <svg width="200" height="180" viewBox="0 0 200 180" fill="none" aria-hidden="true">
            {/* POS terminal */}
            <rect x="20" y="20" width="100" height="80" rx="8" fill="var(--color-gray-900)" />
            <rect x="26" y="26" width="88" height="62" rx="4" fill="#4b5563" />
            <text x="45" y="62" fontSize="12" fill="white" fontWeight="600">Pay $25.02</text>
            <rect x="50" y="100" width="40" height="12" rx="3" fill="var(--color-gray-200)" />
            <rect x="35" y="112" width="70" height="8" rx="2" fill="var(--color-gray-100)" />
            {/* Phone */}
            <rect x="130" y="60" width="50" height="90" rx="8" fill="var(--color-gray-900)" />
            <rect x="134" y="68" width="42" height="70" rx="4" fill="#3b82f6" opacity="0.3" />
            <circle cx="155" cy="145" r="3" fill="var(--color-gray-600)" />
            {/* Hand holding phone */}
            <path d="M125 130C130 135 135 140 145 145" stroke="#d4a574" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right: Text */}
        <div>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Your POS goes beyond the counter
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-4)",
            }}
          >
            Mach 2 does more than process transactions. Every sale feeds into
            the SuperSonic POS cloud platform, giving you real-time visibility
            into inventory, performance, and activity across your business.
          </p>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-heading)",
              fontWeight: 600,
              marginBottom: "var(--space-8)",
            }}
          >
            This is where you manage your operation, not just your register.
          </p>
          <a
            href="/platform"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              height: "52px",
              padding: "12px 28px",
              background: "var(--gradient-primary)",
              borderRadius: "var(--radius-full)",
              fontSize: "15px",
              fontWeight: 700,
              color: "var(--color-white)",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "box-shadow 0.2s ease, transform 0.15s ease",
            }}
          >
            Explore the SuperSonic POS Cloud
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── 7. FINAL CTA ───── */

function FinalCta() {
  return (
    <section style={{ padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div
          style={{
            background: "var(--color-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-16) var(--space-20)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid pattern overlay — evenly spread, subtle */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "repeat(20, 1fr)",
              gridTemplateRows: "repeat(15, 1fr)",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              />
            ))}
          </div>

          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-on-primary)",
              marginBottom: "var(--space-4)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready To Elevate Your Business With SuperSonic?
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "var(--leading-relaxed)",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "640px",
              margin: "0 auto var(--space-8)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Schedule a time with an onboarding specialist to get a demo and
            discuss the next steps.
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="#demo"
              className="btn-cta"
              style={{ textDecoration: "none" }}
            >
              Join Our Partner Network
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
                padding: "12px 48px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "var(--radius-full)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--color-white)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
