"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function MultiStoreHQPage({ data }: { data: PageData }) {
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
        <BlindSpotsSection />
        <RealTimeSection />
        <StandardizeSection />
        <ScaleSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

/* ───── Shared: White Grid ───── */

function WhiteGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(20, 1fr)",
        gridTemplateRows: "repeat(15, 1fr)",
        pointerEvents: "none",
        maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 300 }).map((_, i) => (
        <div key={i} style={{ borderRight: "1px solid rgba(16, 24, 40, 0.06)", borderBottom: "1px solid rgba(16, 24, 40, 0.06)" }} />
      ))}
    </div>
  );
}

/* ───── Shared: Teal Grid ───── */

function TealGrid() {
  return (
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
        <div key={i} style={{ borderRight: "1px solid rgba(255, 255, 255, 0.08)", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }} />
      ))}
    </div>
  );
}

/* ───── Shared: Teal Checkmark ───── */

function TealCheck() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
      <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───── 1. HERO ───── */

function HeroSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <WhiteGrid />

      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "flex",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: 1, maxWidth: 640 }}>
          <h1
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: 1.1,
              fontWeight: 900,
              color: "var(--color-gray-900)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-8)",
            }}
          >
            Scale Your Business Without Losing Control
          </h1>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Managing one store is operational. Managing multiple stores is strategic.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-10)",
            }}
          >
            SuperSonic POS gives you centralized visibility, standardized control, and real-time oversight across every location: all from one connected platform.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "var(--radius-full)",
                background: "var(--gradient-primary)",
                color: "white",
                fontSize: "var(--text-body-lg)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Talk to a POS Specialist
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "var(--radius-full)",
                background: "transparent",
                border: "2px solid var(--color-gray-300)",
                color: "var(--color-gray-900)",
                fontSize: "var(--text-body-lg)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Right: Illustration area */}
        <div style={{ flex: 1, position: "relative", minHeight: 480 }}>
          {/* Curly arrow doodle */}
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            style={{ position: "absolute", top: -20, left: 0, zIndex: 3 }}
          >
            <path d="M30 5C15 5 10 20 20 30C30 40 15 55 25 65" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M20 60L25 68L30 60" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Person illustration */}
          <PersonIllustration />

          {/* Floating icon bubbles */}
          <div style={{ position: "absolute", top: "5%", right: "15%", width: 48, height: 48, borderRadius: "50%", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="8" cy="8" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="8" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none" />
              <circle cx="8" cy="14" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div style={{ position: "absolute", top: "25%", right: "0%", width: 40, height: 40, borderRadius: "50%", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="6" cy="9" r="2" fill="var(--color-primary)" />
              <circle cx="12" cy="9" r="2" fill="var(--color-primary)" />
              <circle cx="9" cy="5" r="2" fill="var(--color-primary)" />
            </svg>
          </div>
          <div style={{ position: "absolute", top: "35%", right: "5%", width: 44, height: 44, borderRadius: "50%", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 16L10 4L16 16" stroke="var(--color-gray-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div style={{ position: "absolute", top: "50%", left: "15%", width: 40, height: 40, borderRadius: "50%", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="3" y="3" width="5" height="5" rx="1" fill="#60A5FA" />
              <rect x="10" y="10" width="5" height="5" rx="1" fill="#60A5FA" />
            </svg>
          </div>

          {/* Floating review cards */}
          <div style={{ position: "absolute", bottom: "28%", right: "-5%", display: "flex", flexDirection: "column", gap: "8px", zIndex: 4 }}>
            {[
              { name: "Jack Reed", text: "Great team and support!", color: "#4A90D9" },
              { name: "Michael Donovan", text: "Super useful for multi-store cont...", color: "#D4A040" },
              { name: "Sophie Carter", text: "The camera + POS integration helped...", color: "#D94A6B" },
            ].map((review) => (
              <div
                key={review.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 16px",
                  borderRadius: "var(--radius-full)",
                  background: "white",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: review.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: 1.3 }}>{review.name}</p>
                  <p style={{ fontSize: "12px", color: "var(--color-gray-400)", lineHeight: 1.3 }}>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Person Illustration ───── */

function PersonIllustration() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        height: 460,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, var(--color-gray-100) 0%, var(--color-gray-200) 100%)",
          borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
        }}
      />

      {/* Person silhouette */}
      <svg
        viewBox="0 0 420 460"
        fill="none"
        style={{ position: "relative", width: "100%", height: "100%", zIndex: 1 }}
      >
        {/* Head */}
        <ellipse cx="210" cy="120" rx="55" ry="65" fill="var(--color-gray-300)" />
        {/* Hair */}
        <path d="M155 110C155 75 180 55 210 55C240 55 265 75 265 110C265 100 250 85 210 85C170 85 155 100 155 110Z" fill="var(--color-gray-400)" />
        {/* Neck */}
        <rect x="195" y="180" width="30" height="25" rx="4" fill="var(--color-gray-300)" />
        {/* Shirt */}
        <path d="M140 210C140 200 170 195 210 195C250 195 280 200 280 210L290 350H130L140 210Z" fill="var(--color-gray-800)" />
        {/* Apron */}
        <path d="M160 230C160 225 180 220 210 220C240 220 260 225 260 230L265 380H155L160 230Z" fill="var(--color-gray-200)" />
        <rect x="190" y="225" width="40" height="3" rx="1.5" fill="var(--color-gray-300)" />
        {/* Arms */}
        <path d="M140 220C120 240 115 290 130 320" stroke="var(--color-gray-800)" strokeWidth="30" strokeLinecap="round" fill="none" />
        <path d="M280 220C300 240 305 290 290 320" stroke="var(--color-gray-800)" strokeWidth="30" strokeLinecap="round" fill="none" />
        {/* Hands */}
        <circle cx="130" cy="325" r="16" fill="var(--color-gray-300)" />
        <circle cx="290" cy="325" r="16" fill="var(--color-gray-300)" />
        {/* Tablet */}
        <rect x="145" y="310" width="130" height="90" rx="8" fill="var(--color-gray-700)" />
        <rect x="152" y="317" width="116" height="76" rx="4" fill="#B0E0E3" />
      </svg>
    </div>
  );
}

/* ───── 2. GROWTH SHOULDN'T CREATE BLIND SPOTS ───── */

function BlindSpotsSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "flex",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left: Dashboard mockup */}
        <div style={{ flex: 1, flexShrink: 0 }}>
          <DashboardMockup />
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 900,
              color: "var(--color-gray-900)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-8)",
            }}
          >
            Growth Shouldn&apos;t Create Blind Spots
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            As you add locations, complexity increases. Pricing can drift between stores, promotions get applied inconsistently, and inventory numbers stop aligning. Without centralized oversight, expansion turns into operational noise.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            SuperSonic POS keeps every store connected through one cloud-based system. Sales, pricing, inventory, compliance rules, and reporting stay aligned across your entire organization.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-6)",
            }}
          >
            You don&apos;t manage stores individually. You manage one operation.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-900)",
              fontStyle: "italic",
            }}
          >
            It&apos;s{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "var(--color-gray-900)" }}>
              The Speed You
            </span>{" "}
            Need.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Dashboard Mockup ───── */

function DashboardMockup() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        border: "1px solid var(--color-gray-200)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 16px",
          borderBottom: "1px solid var(--color-gray-200)",
          fontSize: "11px",
          color: "var(--color-gray-500)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "var(--radius-full)", background: "var(--color-gray-100)", fontWeight: 600 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-primary)" }} />
          A-Store
        </div>
        <div style={{ padding: "4px 10px", borderRadius: "var(--radius-full)", background: "var(--color-gray-100)" }}>
          12/02/2025 - 12/12/2025
        </div>
        <div style={{ padding: "4px 10px", borderRadius: "var(--radius-full)", background: "var(--color-gray-100)" }}>
          Store Group
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "10px", fontWeight: 700 }}>M</span>
          </div>
          <span style={{ fontWeight: 600 }}>Michael Doe</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div style={{ padding: "16px", display: "flex", gap: "16px" }}>
        {/* Left column — charts */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Transactions card */}
          <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="var(--color-gray-400)" strokeWidth="1" fill="none" /></svg>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-gray-900)" }}>Transactions</span>
            </div>
            <p style={{ fontSize: "18px", fontWeight: 900, color: "var(--color-gray-900)" }}>$7.82</p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px" }}>
              <span style={{ fontSize: "9px", color: "var(--color-primary)", fontWeight: 600 }}>↗ 100%</span>
              <span style={{ fontSize: "9px", color: "var(--color-gray-400)" }}>from last month</span>
            </div>
            {/* Mini chart line */}
            <svg width="100%" height="32" viewBox="0 0 200 32" style={{ marginTop: "8px" }}>
              <polyline points="0,28 30,20 60,22 90,15 120,18 150,10 180,12 200,8" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
              <polyline points="0,28 30,20 60,22 90,15 120,18 150,10 180,12 200,8 200,32 0,32" fill="rgba(10,174,184,0.1)" stroke="none" />
            </svg>
          </div>

          {/* Mini stats row */}
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "8px" }}>
              <span style={{ fontSize: "9px", color: "var(--color-gray-400)" }}>Revenue/hr</span>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>$74.92</p>
            </div>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "8px" }}>
              <span style={{ fontSize: "9px", color: "var(--color-gray-400)" }}>Trans/hr</span>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>2</p>
            </div>
          </div>
        </div>

        {/* Right column — KPI grid */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Donut + Total Sales */}
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
              <p style={{ fontSize: "16px", fontWeight: 900, color: "var(--color-gray-900)" }}>18%</p>
              <p style={{ fontSize: "8px", color: "var(--color-gray-400)" }}>Target: $12,000</p>
              {/* Simple donut */}
              <svg width="40" height="40" viewBox="0 0 40 40" style={{ margin: "4px auto", display: "block" }}>
                <circle cx="20" cy="20" r="16" fill="none" stroke="var(--color-gray-200)" strokeWidth="4" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeDasharray="18 82" strokeDashoffset="25" />
              </svg>
            </div>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-primary)" }} />
                <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-gray-900)" }}>Total Sales</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", marginBottom: "6px" }}>
                <div style={{ height: 6, borderRadius: 3, background: "var(--color-primary)", width: "65%" }} />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>$7.82</p>
              <span style={{ fontSize: "9px", color: "var(--color-primary)" }}>↗ 100%</span>
            </div>
          </div>

          {/* Gallons / No Sales */}
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-gray-400)" }} />
                <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-gray-900)" }}>Gallons Sold</span>
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>0.00</p>
              <span style={{ fontSize: "9px", color: "var(--color-primary)" }}>↗ 100%</span>
            </div>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-gray-900)" }} />
                <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-gray-900)" }}>No Sales</span>
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>0.00</p>
              <span style={{ fontSize: "9px", color: "var(--color-primary)" }}>↗ 100%</span>
            </div>
          </div>

          {/* Inside Sales / Voids */}
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-primary)" }} />
                <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-gray-900)" }}>Inside Sales</span>
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>$7.82</p>
              <span style={{ fontSize: "9px", color: "var(--color-primary)" }}>↗ 100%</span>
            </div>
            <div style={{ flex: 1, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35" }} />
                <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-gray-900)" }}>Voids</span>
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)" }}>0.00</p>
              <span style={{ fontSize: "9px", color: "#EF4444" }}>↘ -20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 10 Products */}
      <div style={{ padding: "0 16px 16px" }}>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="4" height="4" rx="1" fill="var(--color-gray-400)" /><rect x="7" y="1" width="4" height="4" rx="1" fill="var(--color-gray-400)" /><rect x="1" y="7" width="4" height="4" rx="1" fill="var(--color-gray-400)" /><rect x="7" y="7" width="4" height="4" rx="1" fill="var(--color-gray-400)" /></svg>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-gray-900)" }}>Top 10 Products</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
            {[
              { name: "Fanta", count: 23, color: "#FF6B35" },
              { name: "Coca-Cola", count: 20, color: "#DC2626" },
              { name: "Pepsi", count: 19, color: "#1D4ED8" },
              { name: "Sprite", count: 16, color: "#16A34A" },
              { name: "7Up", count: 15, color: "#16A34A" },
            ].map((p) => (
              <div key={p.name} style={{ textAlign: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: "8px", background: "var(--color-gray-100)", margin: "0 auto 4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: p.color }} />
                </div>
                <p style={{ fontSize: "8px", color: "var(--color-gray-500)" }}>{p.name}</p>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-gray-900)" }}>{p.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── 3. SEE EVERY LOCATION IN REAL TIME ───── */

function RealTimeSection() {
  return (
    <section style={{ background: "var(--color-gray-50)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "flex",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left: Capability grid */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              fontStyle: "italic",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-6)",
            }}
          >
            With SuperSonic Cloud, you can:
          </p>

          <div style={{ position: "relative" }}>
            {/* 2x2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                "Track sales trends by location",
                "Compare store-level performance",
                "Review refund and void activity",
                "Identify shrink patterns across your footprint",
              ].map((text) => (
                <div
                  key={text}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "24px 20px",
                    border: "1px solid var(--color-gray-200)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--color-gray-700)",
                    lineHeight: 1.4,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Center teal circle icon */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(10,174,184,0.3)",
                zIndex: 2,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 7C11.24 7 9 9.24 9 12C9 14.76 11.24 17 14 17C16.76 17 19 14.76 19 12C19 9.24 16.76 7 14 7Z" fill="white" />
                <path d="M14 3C8.48 3 4 5.69 4 9C4 11.06 5.8 12.87 8.5 13.9V17L12 14H14C19.52 14 24 11.31 24 8C24 4.69 19.52 3 14 3Z" fill="none" stroke="white" strokeWidth="1.5" />
                <circle cx="8" cy="22" r="3" fill="white" opacity="0.8" />
                <circle cx="20" cy="22" r="3" fill="white" opacity="0.8" />
                <circle cx="14" cy="24" r="2" fill="white" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 900,
              color: "var(--color-gray-900)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-8)",
            }}
          >
            See every location in real time
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-6)",
            }}
          >
            From a single login, you can monitor performance across all stores without waiting for end-of-day summaries or manually consolidating reports.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
            }}
          >
            When something changes in one store, you see it{" "}
            <em style={{ fontStyle: "italic", textDecoration: "underline", color: "var(--color-primary)", fontWeight: 600 }}>
              immediately
            </em>
            ; not after it has already affected your margins.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 4. STANDARDIZE ONCE. APPLY EVERYWHERE ───── */

function StandardizeSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div style={{ display: "flex", gap: "64px", alignItems: "center", marginBottom: "var(--space-10)" }}>
          {/* Left: Text */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--leading-tight)",
                fontWeight: 900,
                color: "var(--color-gray-900)",
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-6)",
              }}
            >
              Standardize once. Apply everywhere
            </h2>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-8)",
              }}
            >
              SuperSonic POS allows you to manage pricing, promotions, tax settings, and compliance logic centrally. When updates are made at headquarters, they apply across every connected location.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "No emailing instructions.",
                "No store-by-store edits.",
                "No inconsistencies at checkout.",
              ].map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <TealCheck />
                  <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 600, color: "var(--color-gray-900)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Layered cards mockup */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <LayeredCardsMockup />
          </div>
        </div>

        {/* Bottom centered text */}
        <p
          style={{
            textAlign: "center",
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--color-gray-500)",
            borderTop: "1px solid var(--color-gray-200)",
            paddingTop: "var(--space-8)",
          }}
        >
          Your standards stay intact as you scale.
        </p>
      </div>
    </section>
  );
}

/* ───── Layered Cards Mockup ───── */

function LayeredCardsMockup() {
  return (
    <div
      style={{
        width: 340,
        height: 280,
        position: "relative",
        background: "var(--color-gray-100)",
        borderRadius: "var(--radius-lg)",
        padding: "32px",
      }}
    >
      {/* Back card */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: 200,
          height: 140,
          borderRadius: "12px",
          background: "var(--color-primary)",
          opacity: 0.15,
          transform: "rotate(-4deg)",
        }}
      />

      {/* Middle card */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 60,
          width: 200,
          height: 140,
          borderRadius: "12px",
          background: "white",
          border: "1px solid var(--color-gray-200)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "70%" }} />
        <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "50%" }} />
        <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "60%" }} />
      </div>

      {/* Front card with globe */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 32,
          width: 180,
          height: 130,
          borderRadius: "12px",
          background: "white",
          border: "1px solid var(--color-gray-200)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Globe icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "12px",
            background: "var(--color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1.5" fill="none" />
            <ellipse cx="14" cy="14" rx="5" ry="11" stroke="white" strokeWidth="1.5" fill="none" />
            <line x1="3" y1="14" x2="25" y2="14" stroke="white" strokeWidth="1.5" />
            <line x1="14" y1="3" x2="14" y2="25" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ───── 5. BUILT FOR OPERATORS WHO PLAN TO SCALE ───── */

function ScaleSection() {
  return (
    <section style={{ background: "var(--color-gray-50)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "flex",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left: Globe illustration */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <GlobeIllustration />
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 900,
              color: "var(--color-gray-900)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-8)",
            }}
          >
            Built for operators who plan to scale
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Whether you operate two stores or twenty, your infrastructure should simplify expansion: not complicate it. SuperSonic POS keeps reporting, permissions, payments, and hardware deployment unified inside one system, so growth strengthens your operation instead of fragmenting it.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
            }}
          >
            Everything works inside the same ecosystem, not through disconnected tools.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Globe Illustration ───── */

function GlobeIllustration() {
  return (
    <div
      style={{
        width: 320,
        height: 300,
        position: "relative",
        background: "var(--color-gray-100)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Cross-hatch grid behind globe */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} style={{ borderRight: "1px solid var(--color-gray-300)", borderBottom: "1px solid var(--color-gray-300)" }} />
        ))}
      </div>

      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" style={{ position: "relative", zIndex: 1 }}>
        {/* Globe */}
        <defs>
          <linearGradient id="globeGrad" x1="60" y1="40" x2="180" y2="200">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="60" y1="80" x2="180" y2="200">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Globe base shadow */}
        <ellipse cx="120" cy="210" rx="80" ry="12" fill="rgba(0,0,0,0.06)" />

        {/* Globe sphere */}
        <circle cx="120" cy="120" r="80" fill="url(#waterGrad)" />

        {/* Continents (simplified) */}
        <ellipse cx="100" cy="90" rx="25" ry="20" fill="white" opacity="0.9" />
        <ellipse cx="140" cy="100" rx="30" ry="25" fill="white" opacity="0.9" />
        <ellipse cx="90" cy="130" rx="15" ry="20" fill="white" opacity="0.85" />
        <ellipse cx="150" cy="140" rx="12" ry="15" fill="white" opacity="0.85" />

        {/* Globe highlight */}
        <circle cx="95" cy="85" r="40" fill="white" opacity="0.15" />

        {/* Connection arcs */}
        <path d="M70 80C90 40 150 40 170 80" stroke="#EF4444" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <path d="M60 120C80 60 160 60 180 120" stroke="#EF4444" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <path d="M80 150C100 100 160 110 170 90" stroke="#EF4444" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />

        {/* Pin markers */}
        {[
          { cx: 70, cy: 80 },
          { cx: 170, cy: 80 },
          { cx: 60, cy: 120 },
          { cx: 180, cy: 120 },
          { cx: 80, cy: 150 },
          { cx: 120, cy: 60 },
        ].map((pin, i) => (
          <g key={i}>
            <circle cx={pin.cx} cy={pin.cy} r="6" fill="#EF4444" />
            <circle cx={pin.cx} cy={pin.cy} r="3" fill="white" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ───── 6. FINAL CTA ───── */

function FinalCtaSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-16) 0 var(--space-24)" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)" }}>
        <div
          style={{
            background: "var(--color-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "80px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <TealGrid />

          <h2
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: 1.1,
              fontWeight: 900,
              color: "white",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-6)",
              position: "relative",
              zIndex: 1,
              maxWidth: 700,
              margin: "0 auto var(--space-6)",
            }}
          >
            Ready To Operate Every Store With Confidence?
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 700,
              margin: "0 auto var(--space-10)",
              position: "relative",
              zIndex: 1,
            }}
          >
            See how SuperSonic POS centralizes visibility, standardizes operations, and supports scalable retail growth.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "var(--radius-full)",
                background: "white",
                color: "var(--color-primary)",
                fontSize: "var(--text-body-lg)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Talk to a POS Specialist
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                borderRadius: "var(--radius-full)",
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.5)",
                color: "white",
                fontSize: "var(--text-body-lg)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
