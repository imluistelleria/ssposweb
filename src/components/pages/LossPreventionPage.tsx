"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function LossPreventionPage({ data }: { data: PageData }) {
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
        <DetectionSection />
        <UncoverSection />
        <ReduceTheftSection />
        <ScalesSection />
        <HighVolumeSection />
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
            Stop Shrink Before It Starts
          </h1>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Retail loss doesn&apos;t always look dramatic. It often hides in small mistakes, repeated voids, improper refunds, and unnoticed patterns.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-10)",
            }}
          >
            SuperSonic POS combines transaction intelligence with integrated video visibility, giving you real-time insight into what&apos;s happening at the register: before losses add up.
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

        {/* Right: POS monitor with orbit */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <OrbitMonitorIllustration />
        </div>
      </div>
    </section>
  );
}

/* ───── Orbit Monitor Illustration ───── */

function OrbitMonitorIllustration() {
  return (
    <div style={{ width: 420, height: 420, position: "relative" }}>
      {/* Dashed orbit circle */}
      <svg
        width="420"
        height="420"
        viewBox="0 0 420 420"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        <circle cx="210" cy="210" r="185" stroke="var(--color-gray-300)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
      </svg>

      {/* POS Monitor in center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 180,
          height: 160,
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: 180,
            height: 120,
            borderRadius: "8px",
            background: "var(--color-gray-800)",
            border: "3px solid var(--color-gray-700)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* POS grid buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "2px", padding: "6px" }}>
            {Array.from({ length: 30 }).map((_, i) => {
              const colors = ["#0aaeb8", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6", "#10B981", "#EC4899", "#6366F1"];
              return (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "2px",
                    background: colors[i % colors.length],
                    opacity: 0.9,
                  }}
                />
              );
            })}
          </div>
          {/* Bottom bar */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 16, background: "var(--color-gray-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.5px" }}>SuperSonic POS</span>
          </div>
        </div>
        {/* Stand */}
        <div style={{ width: 60, height: 20, margin: "0 auto", background: "var(--color-gray-400)", borderRadius: "0 0 4px 4px" }} />
        <div style={{ width: 100, height: 8, margin: "0 auto", background: "var(--color-gray-300)", borderRadius: "0 0 8px 8px" }} />
      </div>

      {/* Orbit labels with arrows */}
      {[
        { label: "Video", angle: 180, x: "5%", y: "40%" },
        { label: "Operations", angle: 315, x: "72%", y: "8%" },
        { label: "Insights", angle: 0, x: "75%", y: "68%" },
        { label: "Transactions", angle: 225, x: "30%", y: "85%" },
      ].map((item) => (
        <div
          key={item.label}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l4-4 4 4" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform={`rotate(${item.angle}, 6, 6)`} />
          </svg>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "var(--color-gray-900)",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ───── 2. SHRINK HAPPENS IN SECONDS ───── */

function DetectionSection() {
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
        {/* Left: Warning illustration */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <WarningIllustration />
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
            Shrink Happens In Seconds. Detection Shouldn&apos;t Take Days
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Missed scans. Refund abuse. Drawer discrepancies. Age verification bypasses.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Most systems only show you numbers after the damage is done. SuperSonic POS connects transaction data directly to video footage and intelligent alerts, so you can verify transactions instantly and act before issues escalate.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
            }}
          >
            No digging through hours of footage. No guessing what triggered a loss. No blind spots at the register.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Warning Illustration ───── */

function WarningIllustration() {
  return (
    <div style={{ width: 320, height: 280, position: "relative" }}>
      {/* Organic blob */}
      <svg width="280" height="250" viewBox="0 0 280 250" style={{ position: "absolute", top: 10, left: 0 }}>
        <path
          d="M140 20C200 10 270 50 260 120C250 190 210 240 140 235C70 230 10 190 20 120C30 50 80 30 140 20Z"
          fill="var(--color-gray-200)"
          opacity="0.6"
        />
      </svg>

      {/* Warning triangle */}
      <svg width="160" height="160" viewBox="0 0 160 160" style={{ position: "absolute", top: 40, left: 30, zIndex: 1 }}>
        {/* Triangle outline */}
        <path
          d="M80 15L145 135H15Z"
          fill="none"
          stroke="var(--color-gray-800)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Red circle */}
        <circle cx="80" cy="90" r="28" fill="#EF4444" />
        {/* Exclamation */}
        <rect x="77" y="72" width="6" height="22" rx="3" fill="white" />
        <circle cx="80" cy="102" r="4" fill="white" />
      </svg>

      {/* Floating document icons */}
      <div
        style={{
          position: "absolute",
          top: 35,
          right: 40,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Document 1 */}
        <div
          style={{
            width: 48,
            height: 56,
            borderRadius: "6px",
            background: "white",
            border: "1px solid var(--color-gray-200)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div style={{ height: 3, borderRadius: 2, background: "var(--color-primary)", width: "80%" }} />
          <div style={{ height: 3, borderRadius: 2, background: "var(--color-gray-200)", width: "60%" }} />
          <div style={{ height: 3, borderRadius: 2, background: "var(--color-gray-200)", width: "70%" }} />
        </div>

        {/* Document 2 - ID card */}
        <div
          style={{
            width: 48,
            height: 44,
            borderRadius: "6px",
            background: "white",
            border: "1px solid var(--color-gray-200)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="10" r="5" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
            <path d="M5 21C5 17.5 8 15 12 15C16 15 19 17.5 19 21" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ───── 3. LET YOUR POS UNCOVER WHAT OTHERS MISS ───── */

function UncoverSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
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
          Let your POS uncover what others miss
        </h2>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 700,
            margin: "0 auto var(--space-12)",
          }}
        >
          SuperSonic POS integrates loss prevention directly into your checkout and back-office workflows.
        </p>

        {/* 4 Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "var(--space-12)" }}>
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="8" width="24" height="16" rx="3" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="16" r="4" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="16" r="1.5" fill="var(--color-gray-800)" />
                </svg>
              ),
              title: "Video linked to transactions",
              desc: "Every ring, void, return, no-sale, age verification, and discount can be synced with camera footage for instant review.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="4" width="20" height="24" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <line x1="10" y1="10" x2="22" y2="10" stroke="var(--color-gray-800)" strokeWidth="1.5" />
                  <line x1="10" y1="14" x2="22" y2="14" stroke="var(--color-gray-800)" strokeWidth="1.5" />
                  <line x1="10" y1="18" x2="18" y2="18" stroke="var(--color-gray-800)" strokeWidth="1.5" />
                </svg>
              ),
              title: "Receipt-to-video matching",
              desc: "Click any receipt in your back office and immediately view the exact moment it was processed.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6C10 6 5 10 5 16C5 22 10 26 16 26C22 26 27 22 27 16" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="4" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M22 6L27 6L27 11" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Cloud-stored evidence",
              desc: "Access footage anytime without manually scanning DVR timelines. Ideal for internal review, HR documentation, or law enforcement requests.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="6" width="20" height="20" rx="4" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M12 16L15 19L21 13" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="24" cy="8" r="4" fill="var(--color-gray-800)" />
                  <path d="M23 8h2M24 7v2" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>
              ),
              title: "AI-powered alerts",
              desc: "Automatically flag suspicious behavior patterns like repeated voids, excessive no-sales, drawer opens, or refund anomalies.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "var(--color-gray-50)",
                borderRadius: "16px",
                border: "1px solid var(--color-gray-200)",
                padding: "32px 24px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>{card.icon}</div>
              <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: 1.3 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom taglines */}
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-gray-500)",
            marginBottom: "var(--space-4)",
          }}
        >
          This is not just surveillance. It&apos;s transaction-level accountability.
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

/* ───── 4. REDUCE THEFT WITHOUT DISRUPTION ───── */

function ReduceTheftSection() {
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
              Reduce theft without disruption
            </h2>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-2)",
              }}
            >
              Shrink can come from customer theft, employee error, or internal abuse.
            </p>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-500)",
                marginBottom: "var(--space-6)",
              }}
            >
              The risk grows when patterns go unnoticed.
            </p>

            <p
              style={{
                fontSize: "var(--text-body-lg)",
                fontWeight: 600,
                color: "var(--color-gray-900)",
                marginBottom: "var(--space-6)",
              }}
            >
              SuperSonic POS helps you:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Identify suspicious activity early",
                "Detect refund and void abuse",
                "Monitor age-restricted sales",
                "Reduce untracked drawer activity",
                "Maintain documentation for audits or investigations",
              ].map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <TealCheck />
                  <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 500, color: "var(--color-gray-700)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: User profile mockup */}
          <div style={{ flex: 0.8, display: "flex", justifyContent: "center" }}>
            <ProfileCardsMockup />
          </div>
        </div>

        {/* Bottom centered text */}
        <p
          style={{
            textAlign: "center",
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--color-gray-500)",
            fontStyle: "italic",
          }}
        >
          The goal isn&apos;t constant monitoring. It&apos;s smarter oversight with less manual effort.
        </p>
      </div>
    </section>
  );
}

/* ───── Profile Cards Mockup ───── */

function ProfileCardsMockup() {
  return (
    <div
      style={{
        width: 300,
        height: 280,
        borderRadius: "var(--radius-lg)",
        background: "var(--color-gray-100)",
        position: "relative",
        overflow: "hidden",
        padding: "32px",
      }}
    >
      {/* Receipt/report card */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: 100,
          height: 200,
          borderRadius: "12px",
          background: "#2D6A4F",
          padding: "16px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
          <path d="M2 8C8 4 14 12 20 6C22 4 26 6 26 8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />
        </svg>
        {/* User avatar */}
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#F59E0B", margin: "8px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 20, height: 12, borderRadius: "50%", background: "#92400E" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.3)", width: "80%" }} />
          <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.2)", width: "60%" }} />
        </div>
      </div>

      {/* Data card overlay */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 16,
          width: 180,
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {/* Lock icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="3" y="6" width="8" height="6" rx="1" stroke="#2D6A4F" strokeWidth="1.5" fill="none" />
              <path d="M5 6V4C5 2.9 5.9 2 7 2C8.1 2 9 2.9 9 4V6" stroke="#2D6A4F" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          {/* Alert icon */}
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#EF4444" strokeWidth="1.5" fill="none" />
              <path d="M7 5v3" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="7" cy="10" r="0.5" fill="#EF4444" />
            </svg>
          </div>
        </div>

        {/* Data lines */}
        {[0.9, 0.7, 0.5, 0.8].map((w, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ height: 5, borderRadius: 3, background: "var(--color-gray-200)", flex: 1, maxWidth: `${w * 100}%` }} />
            {i === 2 && <div style={{ height: 5, width: 24, borderRadius: 3, background: "#EF4444", opacity: 0.6 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───── 5. PROTECTION THAT SCALES ───── */

function ScalesSection() {
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
        {/* Left: Chart illustration */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <ChartIllustration />
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
            Protection that scales with your business
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            As you expand locations or add checkout lanes, SuperSonic POS keeps transaction monitoring consistent across your entire operation.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Centralized oversight, standardized alert thresholds, cloud-based access to footage, and unified reporting ensure shrink prevention grows with you.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              fontStyle: "italic",
            }}
          >
            Shrink prevention should scale with your growth, not require more manual work.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Chart Illustration ───── */

function ChartIllustration() {
  return (
    <div
      style={{
        width: 340,
        height: 260,
        position: "relative",
      }}
    >
      {/* Background card */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 260,
          height: 220,
          borderRadius: "var(--radius-lg)",
          background: "linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 50%, #818CF8 100%)",
          opacity: 0.4,
        }}
      />

      {/* Chart bars */}
      <svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      >
        {/* Area chart */}
        <path
          d="M10 160L40 120L80 140L120 80L160 100L200 40L200 160Z"
          fill="rgba(96, 165, 250, 0.2)"
        />
        <path
          d="M10 160L40 120L80 140L120 80L160 100L200 40"
          stroke="#60A5FA"
          strokeWidth="2"
          fill="none"
        />

        {/* Vertical bars */}
        {[
          { x: 30, h: 80, color: "rgba(96, 165, 250, 0.5)" },
          { x: 70, h: 100, color: "rgba(96, 165, 250, 0.6)" },
          { x: 110, h: 60, color: "#60A5FA" },
          { x: 150, h: 120, color: "#3B82F6" },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={160 - bar.h}
            width="20"
            height={bar.h}
            rx="4"
            fill={bar.color}
          />
        ))}
      </svg>

      {/* Floating labels */}
      {[
        { label: "Protection", top: "15%", right: "0" },
        { label: "Unified Reporting", top: "42%", right: "-5%" },
        { label: "Cloud-Based Access", top: "68%", right: "-10%" },
      ].map((item) => (
        <div
          key={item.label}
          style={{
            position: "absolute",
            top: item.top,
            right: item.right,
            padding: "8px 16px",
            borderRadius: "var(--radius-full)",
            background: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid var(--color-gray-200)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-gray-700)",
            whiteSpace: "nowrap",
            zIndex: 2,
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

/* ───── 6. BUILT FOR HIGH-VOLUME RETAIL ───── */

function HighVolumeSection() {
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
            marginBottom: "var(--space-4)",
          }}
        >
          Built for high-volume retail environments
        </h2>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-gray-500)",
            maxWidth: 700,
            margin: "0 auto var(--space-12)",
          }}
        >
          In high-volume retail, monitoring must happen in real time without disrupting checkout speed. SuperSonic POS is designed for environments where:
        </p>

        {/* 4 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "var(--space-12)" }}>
          {[
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="10" width="14" height="20" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <circle cx="15" cy="24" r="3" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <rect x="24" y="6" width="10" height="10" rx="2" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <circle cx="29" cy="11" r="1.5" fill="var(--color-gray-800)" />
                  <rect x="24" y="20" width="10" height="10" rx="2" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <path d="M27 25h4" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              label: "Transaction volume is high",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 8C16 8 13 11 13 15C13 19 16 22 20 22C24 22 27 19 27 15C27 11 24 8 20 8Z" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M10 32C10 27 14 24 20 24C26 24 30 27 30 32" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M26 18L28 20L32 16" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              label: "Staff turnover is common",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M14 12L20 6L26 12" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <rect x="12" y="12" width="16" height="18" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="22" r="4" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <path d="M20 20v2l1.5 1" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              label: "Compliance matters",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M8 14H32L30 30H10L8 14Z" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                  <path d="M8 14L12 8H28L32 14" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                  <line x1="14" y1="20" x2="14" y2="26" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="20" y1="20" x2="20" y2="26" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="26" y1="20" x2="26" y2="26" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              label: "Margins are tight",
            },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid var(--color-gray-200)",
                padding: "40px 24px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {card.icon}
              <p style={{ fontSize: "var(--text-body)", fontWeight: 500, color: "var(--color-gray-700)" }}>
                {card.label}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--color-gray-500)",
            fontStyle: "italic",
          }}
        >
          Everything runs inside the same unified ecosystem, not through disconnected software.
        </p>
      </div>
    </section>
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
            Ready To Stop Theft?
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
            See how SuperSonic POS connects transactions, video, and intelligent alerts to reduce shrink and improve accountability.
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
