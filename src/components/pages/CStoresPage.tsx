"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function CStoresPage({ data }: { data: PageData }) {
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
        <SpeedSection />
        <FeatureCarousel />
        <ConnectivitySection />
        <LossPreventionSection />
        <GrowSection />
        <PaymentsSection />
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

/* ───── Shared: Fire Icon SVG ───── */

function FireIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2C14 2 6 10 6 16C6 20.4 9.6 24 14 24C18.4 24 22 20.4 22 16C22 10 14 2 14 2Z" fill="#FF6B35" />
      <path d="M14 8C14 8 10 13 10 16.5C10 18.7 11.8 20.5 14 20.5C16.2 20.5 18 18.7 18 16.5C18 13 14 8 14 8Z" fill="#FFBA08" />
      <path d="M14 13C14 13 12 15.5 12 17C12 18.1 12.9 19 14 19C15.1 19 16 18.1 16 17C16 15.5 14 13 14 13Z" fill="#FAF0CA" />
    </svg>
  );
}

/* ───── 1. HERO ───── */

function HeroSection() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        paddingTop: "100px",
        paddingBottom: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <WhiteGrid />

      {/* Floating decorations */}
      <div style={{ position: "absolute", top: "15%", right: "8%", zIndex: 2, width: 44, height: 44, borderRadius: "50%", background: "var(--color-gray-100)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 14l4-4 3 3 7-9" stroke="var(--color-gray-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ position: "absolute", bottom: "35%", left: "4%", zIndex: 2, width: 44, height: 44, borderRadius: "50%", background: "var(--color-gray-100)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3v14M3 10h14" stroke="var(--color-gray-400)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="10" cy="10" r="7" stroke="var(--color-gray-300)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--color-gray-200)",
            background: "white",
            marginBottom: "var(--space-6)",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-primary)" }} />
          <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-gray-900)" }}>Convenience Store POS</span>
        </div>

        <h1
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            fontWeight: 900,
            color: "var(--color-gray-900)",
            letterSpacing: "var(--tracking-tight)",
            marginBottom: "var(--space-6)",
            maxWidth: 800,
            margin: "0 auto var(--space-6)",
          }}
        >
          Built For Speed, Control, and High-Volume Reality
        </h1>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 760,
            margin: "0 auto var(--space-4)",
          }}
        >
          Running a convenience store means operating at an unbelievable pace: long lines form in minutes, compliance requirements never stop, pricing changes constantly, and mixed payment types are the norm. Your POS shouldn&apos;t just process transactions; it should power your business.
        </p>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 760,
            margin: "0 auto var(--space-10)",
          }}
        >
          SuperSonic POS is built specifically for convenience and mini-mart environments, with tools that keep checkout fast, operations aligned, and margins protected in even the busiest stores.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "var(--space-16)" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 32px",
              borderRadius: "var(--radius-full)",
              background: "var(--color-primary)",
              color: "white",
              fontSize: "var(--text-body-lg)",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Schedule a Demo
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
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1C4.6 1 1 4.6 1 9s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" stroke="var(--color-gray-900)" strokeWidth="1.5" fill="none" />
              <path d="M5.5 9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M4 13l-2 3M14 13l2 3" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Talk to a POS Specialist
          </a>
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
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
        borderRadius: "12px 12px 0 0",
        border: "1px solid var(--color-gray-200)",
        borderBottom: "none",
        boxShadow: "0 -4px 40px rgba(0,0,0,0.08)",
        overflow: "hidden",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid var(--color-gray-200)", gap: "16px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo/sscloud-logo-color.svg" alt="SSCloud" style={{ height: 24, width: "auto" }} />
        <div style={{ fontSize: 12, color: "var(--color-gray-500)" }}>«</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-gray-900)" }}>Welcome back, Michael!</div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 8 }}>
          {["C-Store", "A-Store"].map((t) => (
            <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 12, background: "var(--color-gray-100)", color: "var(--color-gray-500)", fontWeight: 600 }}>{t}</span>
          ))}
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 12, background: "var(--color-gray-100)", color: "var(--color-gray-500)", fontWeight: 600 }}>12/02 - 12/12</span>
        </div>
      </div>

      {/* Content area */}
      <div style={{ display: "flex", minHeight: 160 }}>
        {/* Sidebar */}
        <div style={{ width: 160, borderRight: "1px solid var(--color-gray-200)", padding: "12px" }}>
          <div style={{ fontSize: 11, color: "var(--color-gray-400)", padding: "6px 8px", marginBottom: 4 }}>Search with AI...</div>
          {["Dashboard", "Reports", "Store mgmt"].map((item, i) => (
            <div
              key={item}
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "8px 8px",
                borderRadius: 6,
                color: i === 0 ? "var(--color-primary)" : "var(--color-gray-500)",
                background: i === 0 ? "rgba(10,174,184,0.08)" : "transparent",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "12px 16px", display: "flex", gap: 12 }}>
          {/* Pre-qualified banner */}
          <div style={{ flex: 2, background: "var(--color-gray-50)", borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 11, color: "var(--color-gray-500)", marginBottom: 2 }}>You have been pre-qualified for</p>
            <p style={{ fontSize: 24, fontWeight: 900, color: "var(--color-gray-900)" }}>$120,000!</p>
            <p style={{ fontSize: 11, color: "var(--color-primary)", fontWeight: 600 }}>Complete your application now</p>
          </div>
          {/* Transactions */}
          <div style={{ flex: 1.5, background: "var(--color-gray-50)", borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 10, color: "var(--color-gray-500)", fontWeight: 600, marginBottom: 8 }}>Transactions</p>
            <p style={{ fontSize: 20, fontWeight: 800, color: "var(--color-gray-900)" }}>$7.82</p>
            <div style={{ display: "flex", gap: 2, alignItems: "flex-end", marginTop: 8, height: 32 }}>
              {[40, 60, 30, 70, 50, 80, 45, 65, 55, 75].map((h, i) => (
                <div key={i} style={{ width: 6, height: `${h}%`, background: "var(--color-primary)", borderRadius: 2, opacity: 0.6 + i * 0.04 }} />
              ))}
            </div>
          </div>
          {/* Gauge */}
          <div style={{ flex: 1, background: "var(--color-gray-50)", borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ width: 50, height: 25, borderRadius: "50px 50px 0 0", border: "4px solid var(--color-gray-200)", borderBottom: "none", margin: "8px auto 4px", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "65%", height: "100%", borderRadius: "50px 0 0 0", borderLeft: "4px solid var(--color-primary)", borderTop: "4px solid var(--color-primary)", boxSizing: "border-box" }} />
            </div>
            <p style={{ fontSize: 14, fontWeight: 800, color: "var(--color-gray-900)" }}>18%</p>
            <p style={{ fontSize: 9, color: "var(--color-gray-500)" }}>Target: $12,000</p>
          </div>
          {/* Total Sales */}
          <div style={{ flex: 1.2, background: "var(--color-gray-50)", borderRadius: 8, padding: "14px 12px" }}>
            <p style={{ fontSize: 10, color: "var(--color-gray-500)", fontWeight: 600, marginBottom: 8 }}>Total Sales</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <div style={{ flex: 1, height: 8, borderRadius: 4, background: "var(--color-primary)" }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-gray-900)" }}>$7.82</span>
            </div>
            <p style={{ fontSize: 9, color: "var(--color-primary)" }}>100% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── 2. KEEP LINES MOVING ───── */

function SpeedSection() {
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
            marginBottom: "var(--space-6)",
          }}
        >
          Keep Lines Moving, Even In Rush Hour
        </h2>

        <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)", marginBottom: "var(--space-4)", maxWidth: 700, margin: "0 auto var(--space-4)" }}>
          Convenience stores live and die by speed. Slow checkout doesn&apos;t just frustrate customers; it costs sales.
        </p>

        <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)", marginBottom: "var(--space-6)", maxWidth: 900, margin: "0 auto var(--space-6)" }}>
          SuperSonic POS keeps scanning, pricing, and payment processing responsive and predictable during even peak rushes. Cashiers don&apos;t have to hunt through menus or fight lagging systems. Every scan, price adjustment, and transaction flows through a streamlined checkout experience designed for rapid throughput.
        </p>

        <p style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "var(--space-8)" }}>
          No bottlenecks. No hesitation. Consistent performance every transaction.
        </p>

        {/* Slogan */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 800, fontStyle: "italic", color: "var(--color-gray-900)" }}>
            It&apos;s the Speed
          </span>
          <FireIcon />
          <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 800, fontStyle: "italic", color: "var(--color-gray-900)" }}>
            You Need
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───── 3. FEATURE CAROUSEL ───── */

const carouselSlides = [
  {
    title: "Sell Regulated Products Without Risk",
    body1: "C-stores sell a wide variety of age-restricted items: tobacco, vaping products, alcohol, and more. But compliance slip-ups can put your license and reputation at risk.",
    body2: "SuperSonic POS includes built-in age verification prompts that trigger automatically whenever restricted products are scanned. Employees are guided through required ID checks at the register, helping enforce compliance without slowing down sales.",
    illustration: "id-verification",
  },
  {
    title: "Track Every Item Across Every Shift",
    body1: "Convenience stores manage thousands of SKUs across fast-moving categories. Without real-time visibility, shrink grows and reordering becomes guesswork.",
    body2: "SuperSonic POS provides live inventory tracking, automated low-stock alerts, and vendor management tools so you always know what's on the shelf and what needs restocking.",
    illustration: "inventory",
  },
  {
    title: "Handle Any Payment, Any Customer",
    body1: "From EBT and eWIC to contactless cards and mobile wallets, convenience store customers pay in every way possible.",
    body2: "SuperSonic POS supports all major payment types in a single, fast transaction flow — including split tenders, lottery redemption, and bill pay — so no customer gets turned away.",
    illustration: "payments",
  },
];

function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const slide = carouselSlides[active];

  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)" }}>
        {/* Top bar: progress + arrows */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-10)" }}>
          {/* Progress dots */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {carouselSlides.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === active ? 32 : 12,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? "var(--color-primary)" : "var(--color-gray-300)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setActive((p) => (p > 0 ? p - 1 : carouselSlides.length - 1))}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "2px solid var(--color-primary)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => setActive((p) => (p < carouselSlides.length - 1 ? p + 1 : 0))}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "none",
                background: "var(--color-primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide content */}
        <div style={{ display: "flex", gap: "64px", alignItems: "center" }}>
          {/* Left: Illustration */}
          <div style={{ flex: 1 }}>
            <CarouselIllustration type={slide.illustration} />
          </div>

          {/* Right: Text */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)", fontWeight: 900, color: "var(--color-gray-900)", letterSpacing: "var(--tracking-tight)", marginBottom: "var(--space-6)" }}>
              {slide.title}
            </h2>
            <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)", marginBottom: "var(--space-4)" }}>
              {slide.body1}
            </p>
            <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)" }}>
              {slide.body2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselIllustration({ type }: { type: string }) {
  return (
    <div style={{ width: "100%", height: 360, borderRadius: "var(--radius-lg)", background: "var(--color-gray-100)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {type === "id-verification" && (
        <div style={{ position: "relative" }}>
          {/* ID card */}
          <div style={{ width: 180, height: 220, borderRadius: 12, background: "white", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {/* Person silhouette */}
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#B2DFDB", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ width: 40, height: 30, borderRadius: "50% 50% 0 0", background: "#5D4037", marginTop: 20 }} />
              <div style={{ position: "absolute", width: 30, height: 24, borderRadius: "50%", background: "#D7CCC8", marginTop: -5 }} />
            </div>
            {/* Text lines */}
            <div style={{ width: "80%", height: 6, borderRadius: 3, background: "var(--color-gray-200)" }} />
            <div style={{ width: "60%", height: 6, borderRadius: 3, background: "var(--color-gray-200)" }} />
            <div style={{ width: "50%", height: 6, borderRadius: 3, background: "var(--color-gray-200)" }} />
            {/* Green button */}
            <div style={{ width: "60%", height: 16, borderRadius: 8, background: "#4ADE80", marginTop: 8 }} />
          </div>
          {/* Verified badge */}
          <div style={{ position: "absolute", top: -8, right: -8, width: 28, height: 28, borderRadius: "50%", background: "#2196F3", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}
      {type === "inventory" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="12" width="48" height="40" rx="4" stroke="var(--color-gray-400)" strokeWidth="2.5" fill="none" />
            <path d="M8 24h48" stroke="var(--color-gray-400)" strokeWidth="2.5" />
            <rect x="16" y="30" width="12" height="8" rx="2" fill="var(--color-primary)" opacity="0.3" />
            <rect x="34" y="30" width="12" height="8" rx="2" fill="var(--color-primary)" opacity="0.5" />
            <rect x="16" y="42" width="12" height="6" rx="2" fill="var(--color-primary)" opacity="0.4" />
          </svg>
          <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-gray-500)" }}>Real-time inventory tracking</p>
        </div>
      )}
      {type === "payments" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="16" width="48" height="32" rx="4" stroke="var(--color-gray-400)" strokeWidth="2.5" fill="none" />
            <path d="M8 28h48" stroke="var(--color-gray-400)" strokeWidth="2.5" />
            <rect x="14" y="34" width="16" height="6" rx="2" fill="var(--color-primary)" opacity="0.4" />
            <circle cx="44" cy="38" r="5" fill="#FBBF24" opacity="0.5" />
            <circle cx="48" cy="38" r="5" fill="#EF4444" opacity="0.3" />
          </svg>
          <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-gray-500)" }}>All payment types accepted</p>
        </div>
      )}
    </div>
  );
}

/* ───── 4. KEEP SELLING / CONNECTIVITY ───── */

function ConnectivitySection() {
  return (
    <section style={{ background: "var(--color-gray-50)", padding: "var(--space-24) 0" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)" }}>
        <div style={{ background: "var(--color-gray-100)", borderRadius: "var(--radius-lg)", padding: "48px", display: "flex", gap: "48px", alignItems: "center" }}>
          {/* Left: Text */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)", fontWeight: 900, color: "var(--color-gray-900)", letterSpacing: "var(--tracking-tight)", marginBottom: "var(--space-6)" }}>
              Keep Selling, Even When Connectivity Fails
            </h2>
            <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)" }}>
              Internet outages shouldn&apos;t mean lost sales. SuperSonic POS includes offline processing and store-and-forward technology so transactions continue even when connectivity drops. Sales sync automatically once the connection is restored, ensuring you never lose revenue or customer trust.
            </p>
          </div>

          {/* Right: Staggered badges */}
          <div style={{ flex: 0, display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0, alignItems: "flex-start" }}>
            {[
              { text: "Stay open.", offset: 0 },
              { text: "Stay selling.", offset: 32 },
              { text: "Stay connected \u2014 without interruption.", offset: 64 },
            ].map(({ text, offset }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 24px",
                  borderRadius: "var(--radius-full)",
                  background: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  whiteSpace: "nowrap",
                  marginLeft: offset,
                }}
              >
                <TealCheck />
                <span style={{ fontSize: "var(--text-body)", fontWeight: 600, color: "var(--color-gray-900)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 5. SMARTER LOSS PREVENTION ───── */

function LossPreventionSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)", display: "flex", gap: "64px", alignItems: "center" }}>
        {/* Left: Stats card */}
        <div
          style={{
            width: 320,
            flexShrink: 0,
            borderRadius: "var(--radius-lg)",
            background: "var(--color-primary)",
            padding: "48px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <TealGrid />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 48, fontWeight: 900, color: "white", lineHeight: 1 }}>
              65+<span style={{ fontSize: 24, verticalAlign: "super" }}>%</span>
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500, marginTop: 8 }}>of shrink is caused by theft</p>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              up to <span style={{ fontSize: 48, fontWeight: 900, color: "white", lineHeight: 1 }}>30<span style={{ fontSize: 24, verticalAlign: "super" }}>%</span></span>
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500, marginTop: 8 }}>reduction in shrink with SuperSonic</p>
          </div>
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)", fontWeight: 900, color: "var(--color-gray-900)", letterSpacing: "var(--tracking-tight)", marginBottom: "var(--space-6)" }}>
            Smarter Loss Prevention Without the Fortress
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)", marginBottom: "var(--space-4)" }}>
            Shrink and theft are daily concerns in convenience retail, but over-policing the store isn&apos;t the answer.
          </p>
          <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)" }}>
            SuperSonic POS integrates transaction-level loss prevention tools, paired with optional camera connectivity and alerting, so you can monitor unusual activity without disrupting the customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 6. GROW FROM ONE STORE TO MANY ───── */

function GrowSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle topographic pattern */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
          {[80, 120, 160, 200, 240, 280, 320].map((r) => (
            <circle key={r} cx="350" cy="200" r={r} stroke="var(--color-gray-900)" strokeWidth="1" fill="none" />
          ))}
        </svg>
      </div>

      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)", display: "flex", gap: "64px", alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left: Text */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)", fontWeight: 900, color: "var(--color-gray-900)", letterSpacing: "var(--tracking-tight)", marginBottom: "var(--space-6)" }}>
            Grow From One Store to Many
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)", marginBottom: "var(--space-8)" }}>
            Whether you operate a single mini-mart or a network of convenience stores, SuperSonic POS scales with you. Centralized dashboards let you monitor sales, control pricing and promotions, manage employee permissions, and review performance by store. No adding unnecessary complexity.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["One platform", "One unified view", "Greater operational clarity"].map((tag) => (
              <div key={tag} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="#EF4444" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <path d="M5 12l3-4 3 3 3-5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: "var(--text-body)", fontWeight: 600, color: "var(--color-gray-500)" }}>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Storefront illustration */}
        <div style={{ flex: 0, flexShrink: 0 }}>
          <StorefrontIllustration />
        </div>
      </div>
    </section>
  );
}

function StorefrontIllustration() {
  return (
    <div style={{ width: 240, height: 200, position: "relative" }}>
      {/* Awning */}
      <div style={{ width: 220, height: 40, background: "#5EEAD4", borderRadius: "8px 8px 0 0", margin: "0 auto", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 0 2px" }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ width: 30, height: 16, borderRadius: "0 0 50% 50%", background: i % 2 === 0 ? "#5EEAD4" : "#2DD4BF", margin: "0 2px" }} />
        ))}
      </div>
      {/* Building */}
      <div style={{ width: 220, height: 130, background: "var(--color-gray-200)", margin: "0 auto", display: "flex", gap: 8, padding: "16px", alignItems: "flex-start", justifyContent: "center" }}>
        {/* Windows */}
        <div style={{ width: 50, height: 50, background: "var(--color-gray-300)", borderRadius: 4 }} />
        {/* Door */}
        <div style={{ width: 40, height: 70, background: "var(--color-gray-400)", borderRadius: "20px 20px 0 0" }} />
        {/* Windows */}
        <div style={{ display: "flex", gap: 6, flexDirection: "column" }}>
          <div style={{ width: 50, height: 24, background: "var(--color-gray-300)", borderRadius: 4 }} />
          <div style={{ width: 50, height: 24, background: "var(--color-gray-300)", borderRadius: 4 }} />
        </div>
      </div>
    </div>
  );
}

/* ───── 7. GET MORE CONTROL OVER PAYMENTS & FEES ───── */

function PaymentsSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)", display: "flex", gap: "64px", alignItems: "center" }}>
        {/* Left: Numbered list */}
        <div style={{ width: 340, flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { icon: "chart", label: "Streamline payments", num: "01" },
            { icon: "shield", label: "Protect margins", num: "02" },
            { icon: "arrow", label: "Reduce surprises", num: "03" },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-gray-200)",
                background: "white",
              }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--color-gray-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {item.icon === "chart" && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 12l4-4 3 3 5-7" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                  </svg>
                )}
                {item.icon === "shield" && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" fill="#FBBF24" opacity="0.5" />
                  </svg>
                )}
                {item.icon === "arrow" && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12l8-8M12 4v8H4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                )}
              </div>
              <span style={{ flex: 1, fontSize: "var(--text-body)", fontWeight: 600, color: "var(--color-gray-900)" }}>{item.label}</span>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-gray-400)" }}>/{item.num}</span>
            </div>
          ))}
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)", fontWeight: 900, color: "var(--color-gray-900)", letterSpacing: "var(--tracking-tight)", marginBottom: "var(--space-6)" }}>
            Get More Control Over Payments &amp; Fees
          </h2>
          <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--color-gray-500)" }}>
            Processing fees add up fast in high-volume environments. SuperSonic Pay integrates directly with SuperSonic POS to simplify deposits, improve visibility into fee structures, and support pricing strategies like dual pricing, giving you more control over how payments impact your bottom line.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 8. FINAL CTA ───── */

function FinalCtaSection() {
  return (
    <section style={{ padding: "var(--space-20) 0 var(--space-24)", background: "var(--color-white)" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto", padding: "0 var(--page-padding)" }}>
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
            <h2 style={{ fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)", fontWeight: 900, color: "white", marginBottom: "var(--space-4)" }}>
              Ready To See It In Action?
            </h2>
            <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,0.85)", maxWidth: 700, margin: "0 auto var(--space-10)" }}>
              If you&apos;re looking for a POS platform that handles speed, compliance, payments, inventory, and reporting with one connected system, let&apos;s talk.
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
                Schedule a Demo
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
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "white",
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Talk to a POS Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
