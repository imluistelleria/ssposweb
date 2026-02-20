"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function OurStoryPage({ data }: { data: PageData }) {
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
        <FoundersSection />
        <EcosystemSection />
        <MissionSection />
        <TeamSection />
        <IndustriesSection />
        <TampaSection />
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
        <div key={i} style={{ borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
      ))}
    </div>
  );
}

/* ───── Shared: Teal Check ───── */

function TealCheck() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "var(--color-primary)",
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ───── Section 1: Hero + Where It Started ───── */

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "var(--space-24) var(--page-padding) 0",
        background: "#fff",
      }}
    >
      <WhiteGrid />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--max-width-content)", margin: "0 auto" }}>
        {/* Hero heading */}
        <h1
          style={{
            fontSize: 52,
            lineHeight: "62px",
            fontWeight: 900,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            marginBottom: "var(--space-6)",
            maxWidth: 700,
          }}
        >
          Retail Technology, Built From The Counter Up
        </h1>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: 800,
            marginBottom: "var(--space-4)",
          }}
        >
          Before it was software, it was a solution to real store problems. SuperSonic POS is shaped by hands-on retail experience and built to solve the operational challenges independent businesses face every day.
        </p>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: 800,
            marginBottom: "var(--space-20)",
          }}
        >
          We did not start with software. We started with a store.
        </p>

        {/* Where It Started — two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-16)",
            paddingBottom: "var(--space-24)",
          }}
        >
          {/* Left column: text */}
          <div>
            <div
              style={{
                display: "inline-block",
                background: "var(--color-primary)",
                color: "#fff",
                borderRadius: "var(--radius-sm)",
                padding: "8px 20px",
                fontSize: "var(--text-body)",
                fontWeight: 700,
                marginBottom: "var(--space-8)",
              }}
            >
              Where It Started
            </div>

            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
              SuperSonic POS traces its roots back to 2015, when the company launched as Petro Outlet: a back-office platform built specifically for convenience stores and fuel retailers.
            </p>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
              At the time, independent retailers were competing against chains with better systems, better data, and better visibility. The gap was not effort. It was technology.
            </p>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-2)" }}>
              What began as a cloud-based inventory and reporting tool quickly evolved as store owners asked for more:
            </p>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", paddingLeft: "var(--space-2)" }}>
              Better checkout performance.<br />
              Integrated payments.
            </p>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
              Smarter compliance tools.<br />
              Real-time visibility across operations.
            </p>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)" }}>
              The mission became clear: close the technology gap for independent retailers.
            </p>
          </div>

          {/* Right column: photo placeholder + italic quote */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {/* Photo placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                background: "linear-gradient(135deg, #667085 0%, #3d5a80 50%, #1a1a2e 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Whiteboard text overlay */}
              <div style={{ position: "absolute", left: "10%", top: "15%", color: "rgba(255,255,255,0.85)", textAlign: "center" }}>
                <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>The Right Questions Before Boarding</p>
                <p style={{ fontSize: 12, marginBottom: 6, textTransform: "uppercase" }}>Funding Types</p>
                <p style={{ fontSize: 11, marginBottom: 4 }}>Documentation</p>
                <p style={{ fontSize: 11 }}>More Info We Gather, The<br />Quicker The Approval</p>
              </div>
              {/* Person silhouette */}
              <svg width="120" height="180" viewBox="0 0 120 180" style={{ position: "absolute", right: "10%", bottom: 0 }}>
                <ellipse cx="60" cy="30" rx="20" ry="22" fill="rgba(255,255,255,0.2)" />
                <path d="M30 180 Q30 90 60 70 Q90 90 90 180Z" fill="rgba(255,255,255,0.15)" />
              </svg>
            </div>

            {/* Italic quote */}
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                fontStyle: "italic",
                color: "var(--color-text-heading)",
                lineHeight: "var(--leading-relaxed)",
                maxWidth: 400,
                marginLeft: "auto",
              }}
            >
              The mission became clear: close the technology gap for independent retailers.
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none" style={{ display: "block", marginTop: 4 }}>
                <path d="M2 15 Q15 2 30 10 Q45 18 58 5" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 2: Built for Store Owners ───── */

function FoundersSection() {
  const checks = [
    "What happens when checkout lags during a rush",
    "What shrink looks like in daily reports",
    "How pricing errors impact margins",
    "How disconnected systems create blind spots",
  ];

  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: team photo placeholder */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
            background: "linear-gradient(135deg, #0aaeb8 0%, #3d5a80 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Booth background */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,174,184,0.9) 0%, rgba(10,174,184,0.6) 100%)" }} />
          {/* SuperSonic POS banner */}
          <div style={{ position: "absolute", top: 16, left: 16, zIndex: 2 }}>
            <div style={{ color: "#fff", fontSize: 18, fontWeight: 800, fontStyle: "italic" }}>SuperSonic</div>
            <div style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>POS</div>
          </div>
          {/* People silhouettes */}
          <svg width="100%" height="70%" viewBox="0 0 400 200" style={{ position: "relative", zIndex: 1 }}>
            {[80, 150, 220, 290].map((x, i) => (
              <g key={i}>
                <ellipse cx={x} cy={60} rx={22} ry={24} fill="rgba(255,255,255,0.25)" />
                <path d={`M${x - 30} 200 Q${x - 30} 110 ${x} 90 Q${x + 30} 110 ${x + 30} 200Z`} fill="rgba(255,255,255,0.2)" />
              </g>
            ))}
          </svg>
        </div>

        {/* Right: text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "var(--space-6)",
            }}
          >
            Built for Store Owners, by Store Owners
          </h2>
          <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
            SuperSonic POS was co-founded by Mahdi Hussein (CEO), who saw firsthand how disconnected systems slowed down operations and limited growth. Working alongside his father, Mohammad &ldquo;Mike&rdquo; Hussein, who brought decades of retail experience, the vision was simple:
          </p>
          <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
            Give independent retailers access to enterprise-grade tools without enterprise-level complexity or cost.
          </p>
          <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-6)" }}>
            Every feature inside SuperSonic POS reflects that operator perspective:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {checks.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <TealCheck />
                <span style={{ fontSize: "var(--text-body)", color: "var(--color-text-heading)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom centered italic */}
      <p
        style={{
          fontSize: "var(--text-body)",
          fontStyle: "italic",
          color: "var(--color-text-body)",
          textAlign: "center",
          marginTop: "var(--space-12)",
          maxWidth: "var(--max-width-content)",
          margin: "var(--space-12) auto 0",
        }}
      >
        This is retail technology built by people who understand what happens when lines get long.
      </p>
    </section>
  );
}

/* ───── Section 3: Ecosystem ───── */

const ecosystemCards = [
  {
    logo: "/images/logo/sspos-logo-color.svg",
    logoAlt: "SuperSonic POS",
    title: "SuperSonic POS Hardware",
    desc: "Purpose-built devices engineered for speed, reliability, and flexibility:",
    bullets: ["Mach2", "Mach Mini", "Mach Flex", "Mach X Kiosk"],
  },
  {
    logo: "/images/logo/sscloud-logo-color.svg",
    logoAlt: "SuperSonic Cloud",
    title: "SuperSonic Cloud",
    desc: "A real-time back-office platform for inventory management, reporting, AI-driven pricebook automation, and predictive insights.",
    bullets: [],
  },
  {
    logo: "/images/logo/sspay-logo-color.svg",
    logoAlt: "SuperSonic Pay",
    title: "SuperSonic Pay",
    desc: "Integrated payment processing with dual-pricing compliance, tap-to-pay support, EBT acceptance, and transparent pricing.",
    bullets: [],
  },
];

function EcosystemSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#f5f7fa" }}>
      <div style={{ maxWidth: "var(--max-width-content)", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 800,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "var(--space-6)",
          }}
        >
          From Back Office Tool to Full Retail Ecosystem
        </h2>
        <p
          style={{
            fontSize: "var(--text-body)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto var(--space-12)",
          }}
        >
          As demand expanded beyond fuel retail, the company rebranded to SuperSonic POS in 2022, reflecting a broader mission to serve high-volume retail across industries. The platform grew into a unified ecosystem that now includes:
        </p>

        {/* 3 product cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {ecosystemCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "var(--space-8)" }}>
                {/* Brand logo */}
                <div style={{ marginBottom: "var(--space-6)" }}>
                  <img
                    src={card.logo}
                    alt={card.logoAlt}
                    style={{ height: 56 }}
                  />
                </div>

                <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: card.bullets.length ? "var(--space-3)" : 0 }}>
                  {card.desc}
                </p>
                {card.bullets.length > 0 && (
                  <ul style={{ margin: 0, paddingLeft: 20, listStyleType: "disc" }}>
                    {card.bullets.map((b) => (
                      <li key={b} style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)" }}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Start Now link */}
              <div
                style={{
                  marginTop: "auto",
                  borderTop: "1px solid var(--color-border)",
                  padding: "var(--space-4) var(--space-8)",
                }}
              >
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "var(--text-body)",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                    textDecoration: "none",
                  }}
                >
                  Start Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-4)",
            marginTop: "var(--space-12)",
            background: "#fff",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-8)",
          }}
        >
          <span style={{ fontSize: 36, flexShrink: 0 }} aria-hidden="true">&#x1F4A1;</span>
          <div>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-3)" }}>
              Independent retailers deserve the same intelligence and operational control as national chains. SuperSonic POS was built to close that gap.
            </p>
            <p style={{ fontSize: "var(--text-body)", fontWeight: 700, color: "var(--color-text-heading)" }}>
              Not stacked. Not patched together. Unified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 4: Our Mission (Bento Grid) ───── */

function MissionSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div style={{ maxWidth: "var(--max-width-content)", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 800,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "var(--space-4)",
          }}
        >
          Our Mission
        </h2>
        <p
          style={{
            fontSize: "var(--text-body)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto var(--space-12)",
          }}
        >
          SuperSonic POS exists to give independent retailers the speed, intelligence, and control they need to compete at a higher level.
        </p>

        {/* Bento grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: "var(--space-4)" }}>
          {/* Row 1 - Card 1: Users stat */}
          <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
            {/* Avatar row */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "var(--space-4)" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: ["#e11d48", "#f59e0b", "#8b5cf6", "#3b82f6", "#64748b"][i],
                    border: "2px solid #fff",
                    marginLeft: i > 0 ? -8 : 0,
                  }}
                />
              ))}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "var(--color-text-heading)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  marginLeft: -8,
                  border: "2px solid #fff",
                }}
              >
                +20
              </div>
            </div>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)" }}>
              <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>53% users</span> leave if a page loads longer than 3 seconds.
            </p>
          </div>

          {/* Row 1 - Card 2: Insight */}
          <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", alignItems: "flex-start" }}>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-heading)", fontWeight: 500 }}>
              The speed you need in insight.
            </p>
          </div>

          {/* Row 1 - Card 3: Adapt & Grow */}
          <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-heading)", fontWeight: 500, marginBottom: "var(--space-6)" }}>
              The speed you need to adapt and grow.
            </p>
            <p style={{ fontSize: 48, fontWeight: 800, color: "var(--color-text-heading)", lineHeight: 1 }}>75%</p>
            <p style={{ fontSize: "var(--text-body-sm)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-2)" }}>
              of active traders adjust their strategy weekly.
            </p>
          </div>

          {/* Row 2 - Card 4: Checkout */}
          <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-heading)", fontWeight: 500, marginBottom: "var(--space-8)" }}>
              The speed you need at checkout.
            </p>
            <div>
              <p style={{ fontSize: 48, fontWeight: 800, color: "var(--color-text-heading)", lineHeight: 1 }}>100ms</p>
              <p style={{ fontSize: "var(--text-body-sm)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-2)" }}>
                delay can impact transaction completion rates.
              </p>
            </div>
          </div>

          {/* Row 2 - Card 5: Real-time data */}
          <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }} />
            <div>
              <p style={{ fontSize: 48, fontWeight: 800, color: "var(--color-text-heading)", lineHeight: 1 }}>60%</p>
              <p style={{ fontSize: "var(--text-body-sm)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-2)", marginBottom: "var(--space-6)" }}>
                of active traders say real-time data access directly affects profitability.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", background: "var(--color-surface-muted)", borderRadius: "var(--radius-sm)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" fill="#dbeafe" />
                  <path d="M7 14l3-4 3 3 4-5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: "var(--text-body-sm)", color: "var(--color-text-body)" }}>
                  Delayed data can reduce reaction speed by up to 3x.
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 - Card 6: That means (Teal) */}
          <div
            style={{
              background: "var(--color-primary)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
              color: "#fff",
            }}
          >
            <p style={{ fontSize: "var(--text-body)", fontStyle: "italic", fontWeight: 600, marginBottom: "var(--space-4)" }}>That means:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {["Faster checkout", "Smarter decisions", "Protected margins", "Simplified compliance", "Connected operations"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.25)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "var(--text-body)", fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 5: Team Photos ───── */

function TeamSection() {
  const photos = [
    { bg: "linear-gradient(135deg, #0aaeb8, #3b82f6)", label: "Team awards" },
    { bg: "linear-gradient(135deg, #64748b, #475467)", label: "Warehouse tour" },
    { bg: "linear-gradient(135deg, #0aaeb8, #22c55e)", label: "Holiday party" },
    { bg: "linear-gradient(135deg, #3b82f6, #8b5cf6)", label: "Product launch" },
    { bg: "linear-gradient(135deg, #f59e0b, #ef4444)", label: "Team outing" },
  ];

  const CARD_WIDTH = 420;
  const GAP = 24;
  const [offset, setOffset] = useState(0);
  const total = photos.length;

  // Build tripled array for seamless infinite loop
  const tripled = [...photos, ...photos, ...photos];

  const slide = (dir: number) => {
    setOffset((prev) => {
      let next = prev + dir;
      if (next < 0) next += total;
      if (next >= total) next -= total;
      return next;
    });
  };

  // Translate so the "middle" copy is the default view
  const translateX = -((offset + total) * (CARD_WIDTH + GAP));

  return (
    <section style={{ padding: "var(--space-12) 0 var(--space-24)", background: "#fff", overflow: "hidden" }}>
      {/* Infinite slider track */}
      <div style={{ overflow: "hidden", marginBottom: "var(--space-8)" }}>
        <div
          style={{
            display: "flex",
            gap: GAP,
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            paddingLeft: 80,
          }}
        >
          {tripled.map((photo, i) => (
            <div
              key={`${photo.label}-${i}`}
              style={{
                flex: `0 0 ${CARD_WIDTH}px`,
                aspectRatio: "4 / 3",
                borderRadius: "var(--radius-sm)",
                background: photo.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <svg width="100%" height="80%" viewBox="0 0 300 180">
                {[60, 120, 180, 240].map((x, j) => (
                  <g key={j}>
                    <ellipse cx={x} cy={50} rx={18} ry={20} fill="rgba(255,255,255,0.2)" />
                    <path d={`M${x - 22} 180 Q${x - 22} 100 ${x} 80 Q${x + 22} 100 ${x + 22} 180Z`} fill="rgba(255,255,255,0.15)" />
                  </g>
                ))}
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "var(--max-width-content)", margin: "0 auto", padding: "0 var(--page-padding)" }}>
        {/* Nav arrows + text */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <button
            onClick={() => slide(-1)}
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border)",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="var(--color-text-heading)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => slide(1)}
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--radius-full)",
              border: "none",
              background: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", flex: 1 }}>
            We believe independent retailers deserve the same level of technology as national chains: without losing control of their business.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 6: Built for High-Volume Retail ───── */

const industries = [
  { label: "Convenience\nstores", color: "#f59e0b" },
  { label: "Liquor\nstores", color: "#8b5cf6" },
  { label: "Grocery and\nmarkets", color: "#0aaeb8" },
  { label: "Restaurants and\nQSR", color: "#3b82f6" },
  { label: "Specialty\nretailers", color: "#ec4899" },
  { label: "Smoke and vape\nshops", color: "#64748b" },
];

function IndustriesSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div style={{ maxWidth: "var(--max-width-content)", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 800,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: "var(--space-4)",
          }}
        >
          Built for High-Volume Retail
        </h2>
        <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-12)" }}>
          SuperSonic POS supports high-volume retail environments including:
        </p>

        {/* Industry cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
          {industries.map((ind) => (
            <div
              key={ind.label}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4)",
                textAlign: "center",
              }}
            >
              {/* Illustration placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "var(--radius-sm)",
                  background: `linear-gradient(135deg, ${ind.color}22, ${ind.color}44)`,
                  marginBottom: "var(--space-3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="12" width="32" height="28" rx="4" fill={ind.color} opacity="0.3" />
                  <rect x="14" y="18" width="8" height="10" rx="2" fill={ind.color} opacity="0.5" />
                  <rect x="26" y="18" width="8" height="10" rx="2" fill={ind.color} opacity="0.5" />
                  <rect x="18" y="32" width="12" height="8" rx="2" fill={ind.color} opacity="0.4" />
                </svg>
              </div>
              <p style={{ fontSize: "var(--text-body-sm)", color: "var(--color-text-heading)", fontWeight: 500, whiteSpace: "pre-line", lineHeight: 1.4 }}>
                {ind.label}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "var(--text-body)", fontStyle: "italic", color: "var(--color-text-body)" }}>
          Each business runs differently. Our platform adapts accordingly.
        </p>
      </div>
    </section>
  );
}

/* ───── Section 7: Headquartered in Tampa ───── */

function TampaSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: Map illustration */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: "var(--radius-lg)",
            background: "rgba(230, 220, 210, 0.2)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Dotted map pattern */}
          <svg width="90%" height="80%" viewBox="0 0 400 300" fill="none">
            {/* Simplified US outline with dots */}
            {Array.from({ length: 30 }).map((_, row) =>
              Array.from({ length: 40 }).map((_, col) => {
                const x = col * 10 + 5;
                const y = row * 10 + 5;
                // Rough US landmass shape
                const inUS = x > 40 && x < 300 && y > 60 && y < 220 && !(x > 250 && y < 100) && !(x < 80 && y < 100);
                if (!inUS) return null;
                return <circle key={`${row}-${col}`} cx={x} cy={y} r="2" fill="#d1d5db" />;
              })
            )}
            {/* Tampa pin */}
            <g transform="translate(220, 180)">
              <circle cx="0" cy="0" r="8" fill="#ef4444" />
              <circle cx="0" cy="0" r="4" fill="#fff" />
            </g>
          </svg>

          {/* Tampa label */}
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "20%",
              background: "#fff",
              borderRadius: "var(--radius-sm)",
              padding: "6px 14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--color-text-heading)",
            }}
          >
            <span style={{ fontSize: 16 }}>&#x1F1FA;&#x1F1F8;</span>
            Tampa, Florida
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "var(--space-6)",
            }}
          >
            Headquartered in Tampa. Built for Everywhere
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Based in Tampa, Florida, SuperSonic POS continues to expand nationally and internationally, bringing enterprise-grade retail technology to independent businesses across the U.S. and Canada.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 8: Final CTA ───── */

function FinalCtaSection() {
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
          <TealGrid />

          <h2
            style={{
              fontSize: 40,
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-on-primary)",
              marginBottom: "var(--space-4)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready To See How SuperSonic POS Works For You?
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: "var(--leading-relaxed)",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 640,
              margin: "0 auto var(--space-8)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Experience a platform built from real store experience and designed for high-volume performance.
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
              Book a Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                padding: "12px 48px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "var(--radius-full)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--color-white)",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Talk to a POS Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
