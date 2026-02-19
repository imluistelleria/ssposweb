"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function EbtSnapPage({ data }: { data: PageData }) {
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
        <ComplianceSection />
        <WorkForYouSection />
        <ReduceRiskSection />
        <IntegratedPaySection />
        <GrowsSection />
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
            Accept EBT, eWIC &amp; SNAP Without the Complexity
          </h1>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            SNAP and EBT transactions require accuracy, not extra work.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-10)",
            }}
          >
            SuperSonic POS supports EBT, eWIC, and SNAP transactions with built-in rule enforcement, accurate reporting, and seamless checkout integration.
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

        {/* Right: Grocery / EBT illustration collage */}
        <div style={{ flex: 1, position: "relative", minHeight: 460 }}>
          {/* Grocery store card */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "5%",
              width: 280,
              height: 240,
              borderRadius: "16px",
              overflow: "hidden",
              background: "#87CEEB",
            }}
          >
            <GroceryStoreIllustration />
          </div>

          {/* Calendar card */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 160,
              height: 180,
              borderRadius: "16px",
              background: "var(--color-gray-100)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ width: 80, height: 80, borderRadius: "12px", background: "#EF9A60", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="6" y="10" width="28" height="22" rx="3" stroke="white" strokeWidth="2" fill="none" />
                <line x1="6" y1="16" x2="34" y2="16" stroke="white" strokeWidth="2" />
                <line x1="14" y1="6" x2="14" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="26" y1="6" x2="26" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <rect x="12" y="20" width="4" height="4" rx="1" fill="white" />
                <rect x="18" y="20" width="4" height="4" rx="1" fill="white" />
                <rect x="24" y="20" width="4" height="4" rx="1" fill="white" />
                <rect x="12" y="26" width="4" height="4" rx="1" fill="white" />
              </svg>
            </div>
          </div>

          {/* Application form card */}
          <div
            style={{
              position: "absolute",
              top: 220,
              left: "10%",
              width: 240,
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid var(--color-gray-200)",
              overflow: "hidden",
            }}
          >
            {/* Red header */}
            <div style={{ height: 36, background: "#E88B76", display: "flex", alignItems: "center", padding: "0 12px" }}>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M2 6C5 2 8 10 11 6C14 2 17 10 18 6" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "80%" }} />
              <div style={{ height: 6, borderRadius: 3, background: "var(--color-gray-200)", width: "60%" }} />
              <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                <div style={{ height: 24, borderRadius: 4, background: "var(--color-gray-100)", flex: 1 }} />
                <div style={{ height: 24, borderRadius: 4, background: "var(--color-primary)", width: 60 }} />
              </div>
            </div>
          </div>

          {/* EBT / SNAP badges */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: "5%",
              display: "flex",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "8px",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              border: "1px solid var(--color-gray-200)",
            }}
          >
            <div style={{ padding: "4px 8px", borderRadius: "4px", background: "#1E40AF", color: "white", fontSize: "10px", fontWeight: 700 }}>EBT</div>
            <div style={{ padding: "4px 8px", borderRadius: "4px", background: "#F59E0B", color: "white", fontSize: "10px", fontWeight: 700 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: "inline", verticalAlign: "middle" }}>
                <circle cx="7" cy="7" r="6" fill="white" opacity="0.3" />
              </svg>
            </div>
            <div style={{ padding: "4px 8px", borderRadius: "4px", background: "#16A34A", color: "white", fontSize: "10px", fontWeight: 700 }}>SNAP</div>
          </div>

          {/* eWIC badge */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 10,
              padding: "10px 16px",
              borderRadius: "12px",
              background: "var(--color-gray-100)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" fill="#6B21A8" opacity="0.2" />
              <path d="M7 10C7 7.5 8.5 6 10 6C11.5 6 13 7.5 13 10" stroke="#6B21A8" strokeWidth="1.5" fill="none" />
              <circle cx="10" cy="13" r="2" fill="#16A34A" />
            </svg>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#6B21A8" }}>eWIC</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Grocery Store Illustration ───── */

function GroceryStoreIllustration() {
  return (
    <svg width="280" height="240" viewBox="0 0 280 240" fill="none">
      {/* Sky */}
      <rect width="280" height="240" fill="#87CEEB" />

      {/* Shelves */}
      <rect x="20" y="30" width="240" height="120" rx="4" fill="#1B4332" opacity="0.9" />
      {/* Shelf rows */}
      <line x1="20" y1="70" x2="260" y2="70" stroke="#2D6A4F" strokeWidth="2" />
      <line x1="20" y1="110" x2="260" y2="110" stroke="#2D6A4F" strokeWidth="2" />

      {/* Bottles on shelves */}
      {[40, 60, 80, 100, 120, 140, 160, 180, 200, 220].map((x, i) => (
        <rect key={`top-${i}`} x={x} y={35} width={12} height={30} rx={2} fill={i % 2 === 0 ? "#3B82F6" : "#10B981"} opacity="0.8" />
      ))}
      {[40, 60, 80, 100, 120, 140, 160, 180, 200, 220].map((x, i) => (
        <rect key={`mid-${i}`} x={x} y={75} width={12} height={30} rx={2} fill={i % 3 === 0 ? "#F59E0B" : i % 3 === 1 ? "#EF4444" : "#8B5CF6"} opacity="0.8" />
      ))}

      {/* Counter */}
      <rect x="20" y="160" width="240" height="30" rx="2" fill="#0D9488" />

      {/* Produce display */}
      <ellipse cx="80" cy="175" rx="30" ry="12" fill="#EF4444" opacity="0.7" />
      <ellipse cx="140" cy="175" rx="30" ry="12" fill="#F59E0B" opacity="0.7" />
      <ellipse cx="200" cy="175" rx="30" ry="12" fill="#16A34A" opacity="0.7" />

      {/* Cashier */}
      <circle cx="60" cy="140" r="12" fill="#FBBF24" />
      <rect x="50" y="152" width="20" height="20" rx="4" fill="#EF4444" opacity="0.7" />

      {/* Shopping basket */}
      <rect x="100" y="148" width="30" height="20" rx="3" fill="#F59E0B" opacity="0.6" />
    </svg>
  );
}

/* ───── 2. COMPLIANCE SHOULD NOT SLOW DOWN ───── */

function ComplianceSection() {
  return (
    <section style={{ background: "var(--color-gray-50)", padding: "var(--space-24) 0" }}>
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
            maxWidth: 800,
            margin: "0 auto var(--space-6)",
          }}
        >
          Compliance Should Not Slow Down Your Store
        </h2>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 800,
            margin: "0 auto var(--space-4)",
          }}
        >
          For many grocery stores, convenience stores, and markets, SNAP and EBT transactions are a core part of daily business. But eligibility rules, reporting requirements, and transaction restrictions can create confusion at checkout if your POS isn&apos;t built to handle them properly.
        </p>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 800,
            margin: "0 auto var(--space-4)",
          }}
        >
          SuperSonic POS automates SNAP, EBT, and eWIC transaction rules directly at the register, so your team can process benefits confidently and accurately.
        </p>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 800,
            margin: "0 auto var(--space-8)",
          }}
        >
          No manual overrides. No guessing what qualifies. No unnecessary friction at checkout.
        </p>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            fontStyle: "italic",
            color: "var(--color-gray-900)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span>It&apos;s the Speed</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C12 2 6 8 6 13C6 17 8.7 20 12 20C15.3 20 18 17 18 13C18 8 12 2 12 2Z" fill="#FF6B35" />
            <path d="M12 7C12 7 9 11 9 14C9 15.7 10.3 17 12 17C13.7 17 15 15.7 15 14C15 11 12 7 12 7Z" fill="#FFBA08" />
          </svg>
          <span>You Need</span>
        </p>
      </div>
    </section>
  );
}

/* ───── 3. LET YOUR POS DO THE WORK FOR YOU ───── */

function WorkForYouSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
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
            Let your POS do the work for you
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            SuperSonic POS integrates EBT functionality directly into the checkout workflow.
          </p>
        </div>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            fontStyle: "italic",
            color: "var(--color-gray-500)",
            marginBottom: "var(--space-6)",
          }}
        >
          What that means for your store:
        </p>

        {/* 4 Feature cards — 2nd one highlighted teal */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "var(--space-12)" }}>
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="6" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <rect x="14" y="6" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <rect x="4" y="14" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <rect x="14" y="14" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              ),
              title: "Automatic eligible item recognition",
              desc: "SNAP-eligible products are identified at the register based on your pricebook configuration.",
              highlighted: false,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="8" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <line x1="8" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Seamless split payments",
              desc: "Customers can easily split transactions between EBT, cash, and other payment methods without slowing down the line.",
              highlighted: true,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="10" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Real-time benefit balance prompts",
              desc: "Clear transaction feedback helps customers understand what is covered and what is not.",
              highlighted: false,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M8 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Accurate reporting and transaction logs",
              desc: "All EBT transactions are recorded and accessible through your back-office reporting tools.",
              highlighted: false,
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: card.highlighted ? "var(--color-primary)" : "var(--color-gray-50)",
                borderRadius: "16px",
                border: card.highlighted ? "none" : "1px solid var(--color-gray-200)",
                padding: "28px 24px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                color: card.highlighted ? "white" : "var(--color-gray-800)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  background: card.highlighted ? "rgba(255,255,255,0.2)" : "white",
                  border: card.highlighted ? "none" : "1px solid var(--color-gray-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: card.highlighted ? "white" : "var(--color-gray-800)",
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, lineHeight: 1.3, color: card.highlighted ? "white" : "var(--color-gray-900)" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: card.highlighted ? "rgba(255,255,255,0.85)" : "var(--color-gray-500)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--color-gray-500)",
            fontStyle: "italic",
          }}
        >
          Everything happens inside the POS system, not through separate workarounds.
        </p>
      </div>
    </section>
  );
}

/* ───── 4. REDUCE COMPLIANCE RISK ───── */

function ReduceRiskSection() {
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
          {/* Left: Text + checks */}
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
              Reduce compliance risk without adding complexity
            </h2>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-4)",
              }}
            >
              SNAP violations can result in fines, suspension, or removal from the program. That risk should not rest on manual cashier decisions.
            </p>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                fontWeight: 600,
                color: "var(--color-gray-900)",
                marginBottom: "var(--space-6)",
              }}
            >
              SuperSonic POS helps protect your business by:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Enforcing SNAP-eligible item rules at checkout",
                "Preventing ineligible item purchases through EBT",
                "Maintaining detailed transaction history",
                "Supporting audit readiness with accessible reporting",
              ].map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <TealCheck />
                  <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 500, color: "var(--color-gray-700)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Checklist + calculator mockup */}
          <div style={{ flex: 0.8, display: "flex", justifyContent: "center" }}>
            <ChecklistMockup />
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--color-gray-500)",
            fontStyle: "italic",
          }}
        >
          Compliance is built into the system logic, so it doesn&apos;t depend on memory or training alone.
        </p>
      </div>
    </section>
  );
}

/* ───── Checklist Mockup ───── */

function ChecklistMockup() {
  return (
    <div
      style={{
        width: 300,
        height: 280,
        borderRadius: "var(--radius-lg)",
        background: "var(--color-gray-100)",
        position: "relative",
        overflow: "hidden",
        padding: "24px",
      }}
    >
      {/* Document card */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          width: 180,
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Dark header */}
        <div style={{ height: 32, background: "#1B4332", display: "flex", alignItems: "center", padding: "0 12px" }}>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M2 5C5 2 8 8 11 5C14 2 16 8 16 5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
          </svg>
        </div>
        <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ height: 5, borderRadius: 3, background: "var(--color-gray-200)", flex: 1 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Calculator */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 120,
          height: 160,
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          border: "1px solid var(--color-gray-200)",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Display */}
        <div style={{ height: 24, borderRadius: 4, background: "var(--color-gray-100)", marginBottom: "4px" }} />
        {/* Buttons grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px", flex: 1 }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              style={{
                borderRadius: "4px",
                background: i === 8 ? "#D1FAE5" : "#1B4332",
                opacity: i === 8 ? 1 : 0.85,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───── 5. INTEGRATED PAYMENTS THROUGH SUPERSONIC PAY ───── */

function IntegratedPaySection() {
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
        {/* Left: Connected devices mockup */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <ConnectedDevicesMockup />
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
              marginBottom: "var(--space-6)",
            }}
          >
            Integrated payments through SuperSonic Pay
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            EBT and SNAP processing work seamlessly alongside traditional payment methods through SuperSonic Pay.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-8)",
            }}
          >
            Card, cash, EBT, and dual pricing logic all operate within the same connected system: keeping reporting unified and transactions consistent.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "var(--space-8)" }}>
            {[
              "No separate devices",
              "No disconnected terminals",
              "No manual reconciliation",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <TealCheck />
                <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 500, color: "var(--color-gray-700)" }}>{text}</span>
              </div>
            ))}
          </div>

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
            Learn more about SuperSonic Pay
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── Connected Devices Mockup ───── */

function ConnectedDevicesMockup() {
  return (
    <div
      style={{
        width: 320,
        height: 300,
        borderRadius: "var(--radius-lg)",
        background: "var(--color-gray-100)",
        position: "relative",
        overflow: "hidden",
        padding: "32px",
      }}
    >
      {/* ID card */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 100,
          height: 120,
          borderRadius: "8px",
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid var(--color-gray-200)",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F59E0B" }}>
          <div style={{ width: 36, height: 18, borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", background: "#92400E", marginTop: "18px" }} />
        </div>
        <div style={{ height: 4, borderRadius: 2, background: "#60A5FA", width: "80%" }} />
        <div style={{ height: 4, borderRadius: 2, background: "var(--color-gray-200)", width: "60%" }} />
        <div style={{ height: 4, borderRadius: 2, background: "var(--color-gray-200)", width: "70%" }} />
      </div>

      {/* Receipt/document */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 130,
          width: 80,
          height: 100,
          borderRadius: "6px",
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid var(--color-gray-200)",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div style={{ height: 3, borderRadius: 2, background: "var(--color-gray-200)", width: "90%" }} />
        <div style={{ height: 3, borderRadius: 2, background: "var(--color-gray-200)", width: "70%" }} />
        <div style={{ height: 3, borderRadius: 2, background: "var(--color-gray-200)", width: "80%" }} />
        <div style={{ height: 3, borderRadius: 2, background: "var(--color-primary)", width: "50%", marginTop: "auto" }} />
      </div>

      {/* Card/terminal */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          right: 40,
          width: 100,
          height: 70,
          borderRadius: "8px",
          background: "#D1FAE5",
          border: "1px solid #A7F3D0",
          padding: "10px",
        }}
      >
        <div style={{ width: 20, height: 14, borderRadius: "3px", background: "#1B4332", marginBottom: "8px" }} />
        <div style={{ height: 3, borderRadius: 2, background: "#6EE7B7", width: "70%" }} />
      </div>

      {/* Connection lines */}
      <svg
        width="320"
        height="300"
        viewBox="0 0 320 300"
        fill="none"
        style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
      >
        {/* Curved connection from ID to document */}
        <path d="M140 100C160 80 160 90 170 90" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <circle cx="140" cy="100" r="4" fill="var(--color-primary)" />
        {/* Curved connection from document to card */}
        <path d="M190 140C200 180 220 190 230 190" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
        <circle cx="230" cy="190" r="4" fill="var(--color-primary)" />
      </svg>
    </div>
  );
}

/* ───── 6. COMPLIANCE THAT GROWS ───── */

function GrowsSection() {
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
          {/* Left: Text + checks */}
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
              Compliance that grows with your business
            </h2>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-6)",
              }}
            >
              As your store expands, adds locations, or updates inventory, SuperSonic POS ensures your SNAP and EBT configurations stay aligned.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Centralized pricebook management",
                "Consistent rule enforcement across locations",
                "Cloud-based reporting and oversight",
                "Real-time visibility into transaction activity",
              ].map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <TealCheck />
                  <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 500, color: "var(--color-gray-700)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: EBT/SNAP cards with teal cradle */}
          <div style={{ flex: 0.8, display: "flex", justifyContent: "center" }}>
            <EbtCardsMockup />
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--color-gray-500)",
            fontStyle: "italic",
          }}
        >
          Your compliance scales with your operation.
        </p>
      </div>
    </section>
  );
}

/* ───── EBT Cards Mockup ───── */

function EbtCardsMockup() {
  return (
    <div
      style={{
        width: 280,
        height: 300,
        borderRadius: "var(--radius-lg)",
        background: "var(--color-gray-100)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* EBT card */}
      <div
        style={{
          width: 160,
          height: 100,
          borderRadius: "10px",
          background: "white",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          border: "1px solid var(--color-gray-200)",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          zIndex: 2,
          marginBottom: "-12px",
        }}
      >
        <div style={{ height: 5, borderRadius: 3, background: "#1E40AF", width: "40%" }} />
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1E40AF", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "10px", fontWeight: 900, color: "white" }}>EBT</span>
        </div>
        <div style={{ height: 4, borderRadius: 2, background: "var(--color-gray-200)", width: "80%" }} />
      </div>

      {/* SNAP card */}
      <div
        style={{
          width: 140,
          height: 90,
          borderRadius: "10px",
          background: "white",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          border: "1px solid var(--color-gray-200)",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          zIndex: 1,
          marginBottom: "-16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="5" cy="8" r="3" fill="#F59E0B" />
            <circle cx="11" cy="8" r="3" fill="#16A34A" />
          </svg>
          <span style={{ fontSize: "9px", fontWeight: 700, color: "#16A34A" }}>SNAP</span>
        </div>
        <div style={{ height: 4, borderRadius: 2, background: "var(--color-gray-200)", width: "70%" }} />
        <div style={{ height: 4, borderRadius: 2, background: "var(--color-gray-200)", width: "50%" }} />
      </div>

      {/* Teal cradle/arc at bottom */}
      <div
        style={{
          width: 120,
          height: 60,
          borderRadius: "0 0 60px 60px",
          background: "var(--color-primary)",
          marginTop: "-8px",
        }}
      />
    </div>
  );
}

/* ───── 7. FINAL CTA ───── */

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
            Ready To Process EBT With Confidence?
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
            See how SuperSonic POS supports SNAP, EBT, and eWIC transactions while keeping checkout fast and compliant.
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
