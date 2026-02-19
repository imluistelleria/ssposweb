"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function DualPricingPage({ data }: { data: PageData }) {
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
        <CardFeesSection />
        <ProtectMarginsSection />
        <ComplianceSection />
        <TransparentPricingSection />
        <RightForYouSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

/* ───── Shared: White Grid (hero backgrounds) ───── */

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
  );
}

/* ───── Shared: Teal Grid (for CTA boxes on teal bg) ───── */

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
        <div
          key={i}
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        />
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

/* ───── SVG Icons for Section 2 ───── */

function IconCoins() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="20" cy="28" r="10" fill="#FBBF24" opacity="0.3" />
      <circle cx="20" cy="28" r="7" fill="#FBBF24" opacity="0.5" />
      <circle cx="20" cy="28" r="4" fill="#FBBF24" />
      <circle cx="28" cy="20" r="8" fill="#FCD34D" opacity="0.3" />
      <circle cx="28" cy="20" r="5" fill="#FCD34D" opacity="0.5" />
      <circle cx="28" cy="20" r="3" fill="#FCD34D" />
      <circle cx="34" cy="14" r="5" fill="#FDE68A" opacity="0.4" />
      <circle cx="34" cy="14" r="3" fill="#FDE68A" />
      <path d="M15 12l1-3M36 10l2-2M38 18l3-1" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="14" width="28" height="22" rx="3" fill="#78716C" />
      <rect x="10" y="16" width="24" height="18" rx="2" fill="#57534E" />
      <rect x="24" y="22" width="14" height="8" rx="2" fill="#78716C" />
      <circle cx="30" cy="26" r="2" fill="#A8A29E" />
      <rect x="14" y="10" width="16" height="6" rx="2" fill="#22C55E" opacity="0.8" />
      <rect x="16" y="8" width="10" height="4" rx="1" fill="#22C55E" />
    </svg>
  );
}

/* ───── SVG Icons for Section 4 (Compliance) ───── */

function IconPriceTag() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M18 6h14a2 2 0 012 2v14L20 36 6 22 18 6z" stroke="var(--color-gray-900)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="27" cy="13" r="2" fill="var(--color-gray-900)" />
      <path d="M14 22l4-4M12 26l8-8" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconNotice() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="4" width="24" height="32" rx="2" stroke="var(--color-gray-900)" strokeWidth="2.5" fill="none" />
      <path d="M14 12h12M14 18h12M14 24h8" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 28l4 4M28 32l4-4" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconSticker() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="8" width="16" height="24" rx="2" stroke="var(--color-gray-900)" strokeWidth="2.5" fill="none" />
      <circle cx="14" cy="16" r="3" stroke="var(--color-gray-900)" strokeWidth="2" fill="none" />
      <path d="M10 26h8M10 30h6" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 12v20M30 16v12" stroke="var(--color-gray-900)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 10v2" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCalculator() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="var(--color-gray-900)" strokeWidth="2.5" fill="none" />
      <rect x="10" y="8" width="20" height="8" rx="1" stroke="var(--color-gray-900)" strokeWidth="2" fill="none" />
      <circle cx="14" cy="22" r="2" fill="var(--color-gray-900)" />
      <circle cx="20" cy="22" r="2" fill="var(--color-gray-900)" />
      <circle cx="26" cy="22" r="2" fill="var(--color-gray-900)" />
      <circle cx="14" cy="30" r="2" fill="var(--color-gray-900)" />
      <circle cx="20" cy="30" r="2" fill="var(--color-gray-900)" />
      <rect x="24" y="28" width="4" height="4" rx="1" fill="var(--color-gray-900)" />
    </svg>
  );
}

/* ───── SVG Illustrations ───── */

function CreditCardPhoneIllustration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Credit card */}
      <div
        style={{
          width: 200,
          height: 126,
          borderRadius: 12,
          background: "var(--color-gray-900)",
          position: "absolute",
          left: "10%",
          top: "30%",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 24, height: 18, borderRadius: 3, background: "#4ADE80" }} />
          <div style={{ width: 24, height: 18, borderRadius: 3, background: "#4ADE80", opacity: 0.5 }} />
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[1, 2, 3, 4].map((g) => (
            <div key={g} style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4].map((d) => (
                <div key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ width: 60, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.3)" }} />
          <div style={{ width: 30, height: 20, borderRadius: 4, background: "#EF4444", opacity: 0.7 }} />
        </div>
      </div>

      {/* Phone */}
      <div
        style={{
          width: 100,
          height: 170,
          borderRadius: 14,
          border: "3px solid var(--color-gray-900)",
          background: "white",
          position: "absolute",
          right: "15%",
          top: "15%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 8px 12px",
          gap: 8,
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
        <div style={{ width: "80%", height: 8, borderRadius: 4, background: "#EF4444", opacity: 0.6 }} />
        <div style={{ width: "80%", height: 6, borderRadius: 3, background: "var(--color-gray-200)" }} />
        <div style={{ width: "80%", height: 6, borderRadius: 3, background: "var(--color-gray-200)" }} />
        <div style={{ width: "60%", height: 14, borderRadius: 4, background: "#4ADE80", marginTop: 8 }} />
      </div>

      {/* WiFi icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", right: "20%", top: "8%" }}>
        <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PaymentTerminalIllustration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Browser / terminal window */}
      <div
        style={{
          width: 220,
          borderRadius: 12,
          background: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Header bar */}
        <div style={{ background: "#EF8B6E", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <path d="M4 8c4-6 8-6 12 0s8 6 12 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Content */}
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, height: 28, borderRadius: 4, background: "#3B82F6", opacity: 0.3 }} />
            <div style={{ flex: 1, height: 28, borderRadius: 4, background: "#3B82F6", opacity: 0.15 }} />
          </div>
          <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "70%" }} />
          <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "90%" }} />
          <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "50%" }} />
        </div>
      </div>

      {/* Floating card badges */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          background: "white",
          borderRadius: 10,
          padding: "8px 16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        {/* Visa */}
        <div style={{ width: 44, height: 28, borderRadius: 4, background: "#1A1F71", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 11, fontWeight: 900, letterSpacing: 1 }}>VISA</span>
        </div>
        {/* Mastercard */}
        <div style={{ width: 44, height: 28, borderRadius: 4, background: "#EB001B", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EB001B", position: "absolute", left: 6 }} />
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#F79E1B", position: "absolute", right: 6 }} />
        </div>
      </div>

      {/* Green bar */}
      <div style={{ position: "absolute", bottom: "12%", right: "10%", width: 50, height: 12, borderRadius: 6, background: "#4ADE80" }} />
    </div>
  );
}

function OrbitIllustration() {
  return (
    <div
      style={{
        width: 360,
        height: 360,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer orbit ring */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px dashed var(--color-gray-300)",
        }}
      />
      {/* Inner orbit ring */}
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "1px dashed var(--color-gray-300)",
        }}
      />

      {/* Center logo */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo/sspos-logo-color.svg"
          alt="SuperSonic POS"
          style={{ height: 40, width: "auto" }}
        />
      </div>

      {/* Floating icons on orbit */}
      <FloatingDot bg="#FEF3C7" style={{ top: "5%", right: "25%" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="4" width="12" height="10" rx="1.5" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
          <path d="M2 7h12" stroke="#F59E0B" strokeWidth="1.5" />
        </svg>
      </FloatingDot>
      <FloatingDot bg="#FCE7F3" style={{ top: "35%", right: "0%" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#EC4899" />
        </svg>
      </FloatingDot>
      <FloatingDot bg="#DBEAFE" style={{ bottom: "5%", right: "20%" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="5" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          <path d="M6 8h4M8 6v4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </FloatingDot>
      <FloatingDot bg="#FEE2E2" style={{ bottom: "15%", left: "5%" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12l4-8 4 8H4z" stroke="#EF4444" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatingDot>
      <FloatingDot bg="#D1FAE5" style={{ top: "15%", left: "5%" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8l4 4 6-8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatingDot>
    </div>
  );
}

function FloatingDot({
  bg,
  style,
  children,
}: {
  bg: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 2,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ───── 1. HERO ───── */

function HeroSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        paddingTop: "120px",
        paddingBottom: "var(--space-20)",
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
          alignItems: "center",
          gap: "64px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left — Text */}
        <div style={{ flex: 1, maxWidth: 600 }}>
          <h1
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: 1.1,
              fontWeight: 900,
              color: "var(--color-gray-900)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-6)",
            }}
          >
            Offset card fees without hurting your margins
          </h1>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Card processing fees quietly eat into profit on every transaction.
            Raising prices risks customer pushback. Absorbing the cost adds up
            fast.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-10)",
            }}
          >
            Dual pricing with SuperSonic POS gives you a compliant, transparent
            way to recover processing costs: automatically, at checkout, without
            the manual math or guesswork.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "var(--radius-full)",
                background: "var(--color-primary)",
                color: "white",
                fontSize: "var(--text-body)",
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
                padding: "14px 28px",
                borderRadius: "var(--radius-full)",
                background: "transparent",
                border: "2px solid var(--color-gray-300)",
                color: "var(--color-gray-900)",
                fontSize: "var(--text-body)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Right — Curved arrow + image placeholder */}
        <div style={{ flex: 1, position: "relative", minHeight: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Curved arrow decoration */}
          <svg
            width="120"
            height="140"
            viewBox="0 0 120 140"
            fill="none"
            style={{ position: "absolute", top: "0%", left: "10%", zIndex: 2 }}
          >
            <path
              d="M60 10 C60 10, 90 20, 80 60 C70 100, 60 120, 60 120"
              stroke="var(--color-gray-900)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M50 110 L60 125 L70 110"
              stroke="var(--color-gray-900)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Photo placeholder — woman with phone and card */}
          <div
            style={{
              width: "100%",
              maxWidth: 460,
              height: 480,
              borderRadius: "var(--radius-lg)",
              background: "var(--color-gray-100)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ textAlign: "center", color: "var(--color-gray-400)", fontSize: 14, fontWeight: 600 }}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ margin: "0 auto 12px" }}>
                <rect x="8" y="8" width="48" height="48" rx="8" stroke="var(--color-gray-300)" strokeWidth="2" fill="none" />
                <circle cx="24" cy="24" r="6" stroke="var(--color-gray-300)" strokeWidth="2" fill="none" />
                <path d="M8 44l16-12 8 6 12-10 12 10V52a4 4 0 01-4 4H12a4 4 0 01-4-4V44z" fill="var(--color-gray-200)" />
              </svg>
              Hero image placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 2. CARD FEES DON'T HAVE TO COME OUT OF YOUR POCKET ───── */

function CardFeesSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        padding: "var(--space-24) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 900,
            color: "var(--color-gray-900)",
            letterSpacing: "var(--tracking-tight)",
            marginBottom: "var(--space-4)",
          }}
        >
          Card fees don&apos;t have to come out of your pocket
        </h2>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            marginBottom: "var(--space-12)",
          }}
        >
          Dual pricing allows you to offer two clearly displayed prices:
        </p>

        {/* Two cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            maxWidth: 800,
            margin: "0 auto var(--space-12)",
          }}
        >
          {/* Cash price card */}
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-gray-200)",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div style={{ padding: "40px 24px 24px" }}>
              <IconCoins />
            </div>
            <div
              style={{
                background: "var(--color-gray-50)",
                padding: "20px 24px",
                borderTop: "1px solid var(--color-gray-200)",
              }}
            >
              <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 800, color: "var(--color-gray-900)", marginBottom: 4 }}>
                Cash price
              </p>
              <p style={{ fontSize: "var(--text-body)", color: "var(--color-gray-500)", fontWeight: 500 }}>
                Lower
              </p>
            </div>
          </div>

          {/* Card price card */}
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-gray-200)",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div style={{ padding: "40px 24px 24px" }}>
              <IconWallet />
            </div>
            <div
              style={{
                background: "var(--color-gray-50)",
                padding: "20px 24px",
                borderTop: "1px solid var(--color-gray-200)",
              }}
            >
              <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 800, color: "var(--color-gray-900)", marginBottom: 4 }}>
                Card price
              </p>
              <p style={{ fontSize: "var(--text-body)", color: "var(--color-gray-500)", fontWeight: 500 }}>
                Includes processing cost
              </p>
            </div>
          </div>
        </div>

        {/* Closing text */}
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            fontStyle: "italic",
            maxWidth: 720,
            margin: "0 auto var(--space-4)",
          }}
        >
          Instead of cutting into your margins, card fees are transparently passed to card-paying customers; while cash customers benefit from lower pricing.
        </p>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            fontStyle: "italic",
            fontWeight: 600,
          }}
        >
          With SuperSonic POS, this happens automatically and compliantly across your store.
        </p>
      </div>
    </section>
  );
}

/* ───── 3. PROTECT MARGINS WITHOUT RAISING PRICES ───── */

function ProtectMarginsSection() {
  return (
    <section
      style={{
        background: "var(--color-gray-50)",
        padding: "var(--space-24) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "64px",
          }}
        >
          {/* Left — Text */}
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
              Protect margins without raising prices
            </h2>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-4)",
              }}
            >
              Processing fees are unavoidable, but how you handle them is a choice.
            </p>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-8)",
              }}
            >
              Businesses use dual pricing to:
            </p>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Offset card processing costs",
                "Protect margins without raising base prices",
                "Stay competitive with clear cash pricing",
                "Eliminate manual fee calculations at checkout",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <TealCheck />
                  <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-gray-500)", fontWeight: 500, lineHeight: "var(--leading-relaxed)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 360,
                height: 300,
                borderRadius: "var(--radius-lg)",
                background: "var(--color-gray-200)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CreditCardPhoneIllustration />
            </div>
          </div>
        </div>

        {/* Bottom closing text */}
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: 800,
            margin: "var(--space-12) auto 0",
          }}
        >
          Everything is handled through the POS, so staff don&apos;t have to explain pricing differences or perform extra steps. The register automatically applies the correct price based on payment type, keeping checkout fast and consistent.
        </p>
      </div>
    </section>
  );
}

/* ───── 4. BUILT-IN COMPLIANCE ───── */

function ComplianceSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        padding: "var(--space-24) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 900,
            color: "var(--color-gray-900)",
            letterSpacing: "var(--tracking-tight)",
            marginBottom: "var(--space-4)",
          }}
        >
          Built-in compliance, handled for you
        </h2>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 700,
            margin: "0 auto var(--space-10)",
          }}
        >
          Dual pricing only works if it&apos;s done correctly. SuperSonic POS is designed to help merchants stay compliant without managing the details themselves.
        </p>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-900)",
            fontStyle: "italic",
            fontWeight: 600,
            textAlign: "left",
            maxWidth: 900,
            margin: "0 auto var(--space-8)",
          }}
        >
          Compliance made simple:
        </p>

        {/* 4 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            maxWidth: 900,
            margin: "0 auto var(--space-10)",
          }}
        >
          {[
            { icon: <IconPriceTag />, text: "Clear pricing displayed on shelves and at checkout" },
            { icon: <IconNotice />, text: "Customer notices supported at the counter and store entrance" },
            { icon: <IconSticker />, text: "Dual pricing stickers provided for required signage" },
            { icon: <IconCalculator />, text: "POS-driven calculations ensure accuracy every time" },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-gray-200)",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              <div style={{ padding: "32px 20px 24px", display: "flex", justifyContent: "center" }}>
                {card.icon}
              </div>
              <div
                style={{
                  background: "var(--color-gray-50)",
                  padding: "16px 20px",
                  borderTop: "1px solid var(--color-gray-200)",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: "20px" }}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            fontStyle: "italic",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Pricing rules are applied consistently so there&apos;s no confusion for customers and no risk for your business.
        </p>
      </div>
    </section>
  );
}

/* ───── 5. TRANSPARENT PRICING WITH SUPERSONIC PAY ───── */

function TransparentPricingSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        padding: "var(--space-24) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "flex",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* Left — Text */}
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
            Transparent pricing with SuperSonic Pay
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Dual pricing works best when payments and POS are fully connected.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-10)",
            }}
          >
            SuperSonic Pay offers flexible processing options designed to fit how your business operates. No hidden fees. No surprise charges. Just straightforward pricing built into your POS.
          </p>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              borderRadius: "var(--radius-full)",
              background: "var(--gradient-primary)",
              color: "white",
              fontSize: "var(--text-body)",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Learn more about SuperSonic Pay
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right — Illustration */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 360,
              height: 300,
              borderRadius: "var(--radius-lg)",
              background: "var(--color-gray-100)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <PaymentTerminalIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 6. IS DUAL PRICING RIGHT FOR YOUR BUSINESS? ───── */

function RightForYouSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        padding: "var(--space-24) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "flex",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* Left — Orbit illustration */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <OrbitIllustration />
        </div>

        {/* Right — Text */}
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
            Is dual pricing right for your business?
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Dual pricing works best for high-volume, card-heavy retail environments where margins matter and transparency is key.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
            }}
          >
            If card fees are cutting into your profit and you want a compliant way to offset them without complexity, SuperSonic POS is designed to help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 7. FINAL CTA ───── */

function FinalCtaSection() {
  return (
    <section
      style={{
        padding: "var(--space-20) 0 var(--space-24)",
        background: "var(--color-white)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-lg)",
            background: "var(--color-primary)",
            padding: "64px 48px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <TealGrid />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--leading-tight)",
                fontWeight: 900,
                color: "white",
                marginBottom: "var(--space-4)",
              }}
            >
              Ready To Stop Absorbing Card Fees?
            </h2>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: 600,
                margin: "0 auto var(--space-10)",
              }}
            >
              See how dual pricing works in real checkout scenarios and whether it&apos;s the right fit for your store.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-full)",
                  background: "white",
                  color: "var(--color-primary)",
                  fontSize: "var(--text-body)",
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
                  padding: "14px 28px",
                  borderRadius: "var(--radius-full)",
                  background: "transparent",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  color: "white",
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
