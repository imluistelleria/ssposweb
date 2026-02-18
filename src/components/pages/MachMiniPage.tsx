"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridPattern from "@/components/ui/GridPattern";
import Image from "next/image";
import { useState } from "react";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function MachMiniPage({ data }: { data: PageData }) {
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
        <ProductIntro />
        <BuiltForFlexible />
        <CheckoutNeverLimited />
        <AdaptToHowYouSell />
        <CheckoutStaysFastAndPricing />
        <BuiltForBusinesses />
        <MobilePosConnects />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ───── Sparkle decoration SVG ───── */
function Sparkle({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M8 0L9.6 6.4L16 8L9.6 9.6L8 16L6.4 9.6L0 8L6.4 6.4L8 0Z"
        fill="var(--color-primary)"
        opacity="0.3"
      />
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes deviceFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Grid pattern overlay on white hero — uses dark borders instead of white */}
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
            The POS That
            <br />
            Moves With Your
            <br />
            Business
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
            Not every sale happens at the counter. Mach Mini is built for
            businesses that need flexibility without sacrificing performance,
            letting you run checkout wherever it makes sense.
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
              href="/platform/sell-anywhere"
              className="btn-secondary"
              style={{ textDecoration: "none" }}
            >
              Compare POS Hardware
            </a>
          </div>
        </div>

        {/* Right: Device photo + floating cards */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "520px",
          }}
        >
          {/* Sparkle decorations */}
          <Sparkle size={20} style={{ position: "absolute", top: "20px", left: "40px", zIndex: 3 }} />
          <Sparkle size={14} style={{ position: "absolute", top: "80px", left: "10px", zIndex: 3 }} />
          <Sparkle size={18} style={{ position: "absolute", bottom: "120px", left: "20px", zIndex: 3 }} />
          <Sparkle size={12} style={{ position: "absolute", top: "40px", right: "30px", zIndex: 3 }} />
          <Sparkle size={16} style={{ position: "absolute", bottom: "80px", right: "40px", zIndex: 3 }} />

          {/* Cream circle behind product */}
          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "#f3efe9",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          />

          {/* Product photo */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              animation: "deviceFloat 4s ease-in-out infinite",
            }}
          >
            <Image
              src="/images/pos/mach-mini/mach-mini-0.png"
              alt="Mach Mini Tablet POS on stands"
              width={800}
              height={600}
              style={{
                width: "100%",
                maxWidth: "440px",
                height: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
              }}
              priority
            />
          </div>

          {/* Floating stat: Reduce operational costs - with red bar chart */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "0px",
              background: "var(--color-white)",
              borderRadius: "var(--radius-md)",
              padding: "12px 16px",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              zIndex: 2,
            }}
          >
            {/* Red bar chart SVG */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-sm)",
                background: "#fff5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="10" width="4" height="8" rx="1" fill="#ef4444" opacity="0.6" />
                <rect x="8" y="6" width="4" height="12" rx="1" fill="#ef4444" opacity="0.8" />
                <rect x="14" y="2" width="4" height="16" rx="1" fill="#ef4444" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--color-text-body)",
                  lineHeight: "14px",
                }}
              >
                Reduce operational costs
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  color: "var(--color-text-heading)",
                }}
              >
                by up to{" "}
                <span style={{ color: "var(--color-primary)" }}>50%</span>
              </p>
            </div>
          </div>

          {/* Floating: 45% gauge */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "20px",
              background: "var(--color-white)",
              borderRadius: "var(--radius-md)",
              padding: "12px 16px",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              zIndex: 2,
              minWidth: "80px",
            }}
          >
            {/* Semi-circular gauge */}
            <svg width="52" height="30" viewBox="0 0 52 30" fill="none">
              <path
                d="M4 28 A22 22 0 0 1 48 28"
                stroke="var(--color-gray-200)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M4 28 A22 22 0 0 1 28.5 6"
                stroke="var(--color-primary)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 900,
                color: "var(--color-primary)",
                lineHeight: 1,
                marginTop: "-4px",
              }}
            >
              45%
            </p>
            <p
              style={{
                fontSize: "9px",
                color: "var(--color-text-body)",
                lineHeight: "12px",
                textAlign: "center",
              }}
            >
              Faster checkout times
            </p>
          </div>

          {/* Operate Anywhere pill */}
          <div
            style={{
              position: "absolute",
              bottom: "120px",
              right: "10px",
              background: "var(--color-primary)",
              borderRadius: "var(--radius-full)",
              padding: "6px 14px",
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--color-text-on-primary)",
              }}
            >
              Operate Anywhere
            </p>
          </div>

          {/* Testimonial cards */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "-10px",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              zIndex: 2,
            }}
          >
            {[
              {
                name: "Alise Lou",
                emoji: "\u{1F680}",
                quote: "Fast, flexible, and reliable",
                img: "/images/pos/mach-mini/mach-mini-1.jpg",
              },
              {
                name: "Rex Bob",
                emoji: "\u{1F4BB}",
                quote: "Compact, powerful, and easy...",
                img: "/images/pos/mach-mini/mach-mini-3.jpg",
              },
              {
                name: "Lucy Deli",
                emoji: "\u{1F525}",
                quote: "Runs anywhere, handles everything,...",
                img: "/images/pos/mach-mini/mach-mini-2.jpg",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--color-white)",
                  borderRadius: "10px",
                  padding: "var(--space-2) var(--space-3)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  maxWidth: "250px",
                }}
              >
                <Image
                  src={t.img}
                  alt={t.name}
                  width={28}
                  height={28}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "var(--color-text-heading)",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "var(--color-text-body)",
                      lineHeight: "13px",
                    }}
                  >
                    {t.emoji} &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 2. PRODUCT INTRO ───── */

function ProductIntro() {
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
        {/* Left: Product image with cream circle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background: "#f3efe9",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Image
            src="/images/pos/mach-mini/mach-mini-4.png"
            alt="Mach Mini POS station with receipt printer and card reader"
            width={1196}
            height={1691}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))",
            }}
          />
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
            Mach Mini: The Dynamic Modular Tablet POS
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-3)",
            }}
          >
            Mach Mini is a high-performance POS tablet designed to adapt to how
            you sell. Whether docked at the counter or used on the move, it
            delivers seamless transactions, powerful Android performance, and the
            flexibility to fit any business environment.
          </p>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
            }}
          >
            This is a modular tablet POS built to transform any space into a
            fully connected checkout.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 3. BUILT FOR FLEXIBLE, MODERN RETAIL ───── */

function BuiltForFlexible() {
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
        <h2
          style={{
            fontSize: "40px",
            lineHeight: "48px",
            fontWeight: 900,
            color: "var(--color-text-heading)",
            textAlign: "center",
            marginBottom: "var(--space-12)",
          }}
        >
          Built for flexible, modern retail
        </h2>

        {/* Top 3 visual cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "var(--space-6)",
            marginBottom: "var(--space-6)",
          }}
        >
          {/* Card 1: Display - 2.5K clarity */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            {/* Visual top area */}
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
                minHeight: "180px",
                justifyContent: "center",
              }}
            >
              {/* Badge + dark icon */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <span
                  className="badge"
                  style={{ background: "var(--color-text-heading)", fontSize: "11px" }}
                >
                  2.5K clarity
                </span>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--color-gray-900)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 18" fill="none">
                    <rect x="1" y="1" width="22" height="14" rx="2" stroke="white" strokeWidth="1.5" />
                    <line x1="8" y1="17" x2="16" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              {/* Green checkmarks */}
              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#22c55e", fontSize: "14px" }}>&#x2705;</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-heading)" }}>
                    Easy touch
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: "#22c55e", fontSize: "14px" }}>&#x2705;</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-heading)" }}>
                    Better experience
                  </span>
                </div>
              </div>
            </div>
            {/* Text bottom */}
            <div style={{ padding: "var(--space-5) var(--space-6)" }}>
              <h4
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Vibrant 12.6-inch 2.5K touchscreen
              </h4>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "22px",
                  color: "var(--color-text-body)",
                }}
              >
                A crisp, responsive display designed to engage customers and
                support fast, intuitive interactions anywhere you sell.
              </p>
            </div>
          </div>

          {/* Card 2: Design - Figma + tool icons */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-4)",
                minHeight: "180px",
                justifyContent: "center",
              }}
            >
              {/* Figma label + logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-heading)" }}>
                  Figma
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E" />
                  <path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" fill="#FF7262" />
                  <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#1ABCFE" />
                  <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83" />
                  <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF" />
                </svg>
              </div>
              {/* Design tool icons row */}
              <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                {[
                  { bg: "var(--gradient-primary)", icon: "camera" },
                  { bg: "var(--gradient-primary)", icon: "layers" },
                  { bg: "#f3f4f6", icon: "pen", dark: true },
                  { bg: "#f3f4f6", icon: "grid", dark: true },
                ].map((tool, i) => (
                  <div
                    key={i}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: tool.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: tool.dark ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <ToolIcon name={tool.icon} dark={tool.dark} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-heading)" }}>
                User-Friendly Design
              </p>
            </div>
            <div style={{ padding: "var(--space-5) var(--space-6)" }}>
              <h4
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Rugged and reliable design
              </h4>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "22px",
                  color: "var(--color-text-body)",
                }}
              >
                Built to withstand daily use and drop rated for durability, Mach
                Mini is designed for real-world retail environments.
              </p>
            </div>
          </div>

          {/* Card 3: Battery - Work longer / Keep selling */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-4)",
                minHeight: "180px",
                justifyContent: "center",
              }}
            >
              {/* Work longer + Keep selling labels */}
              <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="6" width="18" height="12" rx="2" stroke="var(--color-primary)" strokeWidth="1.5" />
                    <line x1="23" y1="10" x2="23" y2="14" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="4" y="8" width="14" height="8" rx="1" fill="rgba(10,174,184,0.2)" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-heading)" }}>
                    Work longer
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="12" r="3" fill="rgba(10,174,184,0.3)" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-heading)" }}>
                    Keep selling
                  </span>
                </div>
              </div>
              {/* Battery bar visualization */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "12px",
                  background: "var(--color-gray-200)",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "100%",
                    background: "linear-gradient(90deg, #22c55e 0%, var(--color-primary) 100%)",
                    borderRadius: "6px",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "var(--space-5) var(--space-6)" }}>
              <h4
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  marginBottom: "var(--space-2)",
                }}
              >
                All-day battery power
              </h4>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "22px",
                  color: "var(--color-text-body)",
                }}
              >
                A smart 10,000 mAh battery supports extended use with real-time
                battery health monitoring, so your device stays reliable
                throughout the day.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom 4 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-6)",
          }}
        >
          {/* Card: Android */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
                minHeight: "120px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-heading)" }}>
                  Android
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="13" width="10" height="8" rx="1" stroke="#3ddc84" strokeWidth="1.5" />
                  <path d="M5 14v4M19 14v4" stroke="#3ddc84" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M9 13V9a3 3 0 016 0v4" stroke="#3ddc84" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="0.8" fill="#3ddc84" />
                  <circle cx="14" cy="10" r="0.8" fill="#3ddc84" />
                </svg>
              </div>
              {/* Red/orange dot pattern */}
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", maxWidth: "80px", justifyContent: "center" }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#f97316" : "#fbbf24",
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ padding: "var(--space-4) var(--space-5)" }}>
              <h4 style={{ fontSize: "var(--text-body-sm)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "4px" }}>
                Powered by Android 13
              </h4>
              <p style={{ fontSize: "var(--text-caption)", lineHeight: "18px", color: "var(--color-text-body)" }}>
                Octa-core processing, up to 8 GB RAM and 128 GB storage for smooth, reliable performance.
              </p>
            </div>
          </div>

          {/* Card: NFC */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
                minHeight: "120px",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-heading)" }}>
                Contactless pay
              </span>
              {/* NFC icon */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="var(--color-primary)" strokeWidth="1" opacity="0.2" />
                <circle cx="24" cy="24" r="14" stroke="var(--color-primary)" strokeWidth="1" opacity="0.3" />
                <circle cx="24" cy="24" r="8" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.5" />
                <circle cx="24" cy="24" r="3" fill="var(--color-primary)" />
              </svg>
            </div>
            <div style={{ padding: "var(--space-4) var(--space-5)" }}>
              <h4 style={{ fontSize: "var(--text-body-sm)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "4px" }}>
                Built-in NFC
              </h4>
              <p style={{ fontSize: "var(--text-caption)", lineHeight: "18px", color: "var(--color-text-body)" }}>
                In-screen NFC enables quick, contactless payments with optional rotating scanner support.
              </p>
            </div>
          </div>

          {/* Card: Magnetic modules */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
                minHeight: "120px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-heading)" }}>
                  Magnetic modules
                </span>
              </div>
              <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-body)" }}>
                  Instant setup
                </span>
              </div>
              {/* Module grid icon */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "4px",
                      background: i === 0 ? "var(--color-primary)" : "var(--color-gray-200)",
                      opacity: i === 0 ? 1 : 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ padding: "var(--space-4) var(--space-5)" }}>
              <h4 style={{ fontSize: "var(--text-body-sm)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "4px" }}>
                Modular magnetic design
              </h4>
              <p style={{ fontSize: "var(--text-caption)", lineHeight: "18px", color: "var(--color-text-body)" }}>
                Snap on printer docks or stands in seconds, switching between mounted and mobile configurations.
              </p>
            </div>
          </div>

          {/* Card: Connectivity */}
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "var(--color-surface-muted)",
                padding: "var(--space-5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
                minHeight: "120px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8.56 3.69a9 9 0 00-2.92 1.95M15.44 3.69a9 9 0 012.92 1.95M6.34 7.34a6 6 0 00-1.78 4.28M17.66 7.34a6 6 0 011.78 4.28" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-text-body)" }}>Connect</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--color-primary)" strokeWidth="1.5" />
                    <line x1="12" y1="18" x2="12" y2="18" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-text-body)" }}>Operate</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6M7 10h6" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "9px", fontWeight: 600, color: "var(--color-text-body)" }}>Scale</span>
                </div>
              </div>
            </div>
            <div style={{ padding: "var(--space-4) var(--space-5)" }}>
              <h4 style={{ fontSize: "var(--text-body-sm)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "4px" }}>
                Complete connectivity
              </h4>
              <p style={{ fontSize: "var(--text-caption)", lineHeight: "18px", color: "var(--color-text-body)" }}>
                Wi-Fi, Bluetooth, GPS, LTE, eSIM, and NFC keep Mach Mini connected wherever your business operates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 4. YOUR CHECKOUT SHOULD NEVER BE LIMITED ───── */

function CheckoutNeverLimited() {
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
        {/* Top text + stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-20)",
            alignItems: "start",
            marginBottom: "var(--space-16)",
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
              Your checkout should never be limited
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "26px",
                color: "var(--color-text-body)",
                marginBottom: "var(--space-4)",
              }}
            >
              Modern retail happens across the floor, at events, and wherever
              customers are ready to buy. Relying only on fixed registers can slow
              service and limit flexibility.
            </p>
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "26px",
                color: "var(--color-text-body)",
                marginBottom: "var(--space-4)",
              }}
            >
              Mach Mini removes these constraints by giving you a full POS system
              that moves with your operation, without compromising speed or
              control.
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

          {/* Right: Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-6)",
            }}
          >
            {[
              { number: "1,000+", label: "Stores worldwide" },
              { number: "50+", label: "Payment types" },
              { number: "3\u00D7", label: "Faster" },
              { number: "99 %", label: "Uptime for checkout" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--color-surface-muted)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-8) var(--space-6)",
                  textAlign: "center",
                  border: "1px solid var(--color-gray-100)",
                }}
              >
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 900,
                    color: "var(--color-text-heading)",
                    lineHeight: 1,
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {s.number}
                </p>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    color: "var(--color-text-body)",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Device illustration below */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-8)",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            src="/images/pos/mach-mini/mach-mini-6.png"
            alt="Mach Mini in cafe setting"
            width={300}
            height={300}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "var(--radius-lg)",
              objectFit: "cover",
            }}
          />
          {/* Arrows connecting devices */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <path d="M10 30H50M50 30L40 20M50 30L40 40" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Image
            src="/images/pos/mach-mini/mach-mini-0.png"
            alt="Mach Mini dual setup"
            width={300}
            height={225}
            style={{
              width: "220px",
              height: "auto",
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
            }}
          />
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <path d="M10 30H50M50 30L40 20M50 30L40 40" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Image
            src="/images/pos/mach-mini/mach-mini-7.png"
            alt="Mach Mini showing product catalog"
            width={300}
            height={300}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "var(--radius-lg)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ───── 5. LET YOUR POS ADAPT ───── */

function AdaptToHowYouSell() {
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
        {/* Left: Device illustration */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "#f3efe9",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Image
            src="/images/pos/mach-mini/mach-mini-4.png"
            alt="Mach Mini POS setup with accessories"
            width={1196}
            height={1691}
            style={{
              width: "100%",
              maxWidth: "340px",
              height: "auto",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.12))",
            }}
          />
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
            Let your POS adapt to how you sell
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-4)",
            }}
          >
            Mach Mini is built to support multiple selling scenarios without
            forcing separate systems. Use it as a mobile POS, dock it at the
            counter, or redeploy it as your layout changes.
          </p>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-heading)",
              fontWeight: 600,
            }}
          >
            One device. Multiple ways to sell.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 6. CHECKOUT STAYS FAST + PRICING (MERGED) ───── */

function CheckoutStaysFastAndPricing() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Pricing, tax, and inventory stay consistent everywhere",
      desc: "Sync transactions live through the SuperSonic POS platform, keeping pricing rules, tax settings, and inventory synchronized automatically across all locations.",
    },
    {
      title: "A tablet POS that works with your essential tools",
      desc: "Whether sales happen at the counter or on the floor, your data stays accurate and unified with all your business tools.",
    },
    {
      title: "Scale flexibility without adding complexity",
      desc: "Add new selling points, redeploy devices, and expand your operations without complex setup or duplicate systems.",
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
        {/* Top heading */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Checkout stays fast, wherever transactions happen
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              maxWidth: "720px",
              margin: "0 auto var(--space-4)",
            }}
          >
            Mach Mini delivers responsive performance whether it&apos;s used on
            the floor, at the counter, or on the move. Scanning, pricing,
            payments, and receipts remain smooth so your team can serve customers
            without interruption.
          </p>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-heading)",
              fontWeight: 600,
            }}
          >
            Mobility does not mean sacrificing reliability.
          </p>
        </div>

        {/* 3-column layout: Accordion | 2 stacked images | 1 large image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          {/* Left: Feature tabs / accordion */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {features.map((feat, i) => (
              <div
                key={i}
                className={`feature-tab${activeTab === i ? " active" : ""}`}
                onClick={() => setActiveTab(i)}
                style={{ cursor: "pointer" }}
              >
                <h4
                  style={{
                    fontSize: "var(--text-body)",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                    marginBottom: activeTab === i ? "var(--space-2)" : "0",
                  }}
                >
                  {feat.title}
                </h4>
                {activeTab === i && (
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "22px",
                      color: "var(--color-text-body)",
                    }}
                  >
                    {feat.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Middle: 2 stacked images */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
            }}
          >
            <Image
              src="/images/pos/mach-mini/mach-mini-7.png"
              alt="Mach Mini product catalog view"
              width={1429}
              height={1436}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--radius-md)",
                objectFit: "cover",
              }}
            />
            <Image
              src="/images/pos/mach-mini/mach-mini-6.png"
              alt="Mach Mini in store"
              width={1437}
              height={1445}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--radius-md)",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right: 1 large image */}
          <div>
            <Image
              src="/images/pos/mach-mini/mach-mini-8.jpg"
              alt="Hands using Mach Mini tablet in restaurant"
              width={2569}
              height={1941}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-md)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 7. BUILT FOR BUSINESSES ───── */

function BuiltForBusinesses() {
  const useCases = [
    {
      label: "Retail stores with assisted selling",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9 22 9 12 15 12 15 22" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Line-busting and peak traffic environments",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="var(--color-primary)" strokeWidth="1.5" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Events and pop-ups",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Table-side or on-the-floor checkout",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--color-primary)" strokeWidth="1.5" />
          <line x1="12" y1="18" x2="12" y2="18" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
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
        <div
          style={{
            background: "#f5f5f5",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-12)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-12)",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "44px",
                fontWeight: 900,
                color: "var(--color-text-heading)",
                marginBottom: "var(--space-4)",
              }}
            >
              Built for businesses that need mobility and control
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "26px",
                color: "var(--color-text-body)",
                marginBottom: "var(--space-2)",
              }}
            >
              Anywhere flexibility improves the customer experience.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                color: "var(--color-text-body)",
              }}
            >
              Mach Mini is commonly used in:
            </p>
          </div>

          {/* Right: 2x2 grid of white cards with teal icons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-4)",
            }}
          >
            {useCases.map((uc, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(10,174,184,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {uc.icon}
                </div>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    fontWeight: 600,
                    color: "var(--color-text-heading)",
                    lineHeight: "20px",
                  }}
                >
                  {uc.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 8. YOUR MOBILE POS CONNECTS ───── */

function MobilePosConnects() {
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
          gap: "var(--space-20)",
          alignItems: "center",
        }}
      >
        {/* Left: Venn diagram */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "280px",
            }}
          >
            {/* Circle 1: Connect (top-left) */}
            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(10,174,184,0.1)",
                border: "1.5px solid rgba(10,174,184,0.3)",
                top: "0",
                left: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "-20px",
                  marginLeft: "-20px",
                }}
              >
                <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-primary)" }}>/01</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-heading)" }}>Connect</span>
              </div>
            </div>

            {/* Circle 2: Analyze (top-right) */}
            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(10,174,184,0.06)",
                border: "1.5px solid rgba(10,174,184,0.2)",
                top: "0",
                right: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "-20px",
                  marginRight: "-20px",
                }}
              >
                <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-primary)" }}>/02</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-heading)" }}>Analyze</span>
              </div>
            </div>

            {/* Circle 3: Optimize (bottom-center) */}
            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(10,174,184,0.04)",
                border: "1.5px solid rgba(10,174,184,0.15)",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "30px",
                }}
              >
                <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-primary)" }}>/03</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-heading)" }}>Optimize</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "44px",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Your mobile POS connects to the rest of your business
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "26px",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-4)",
            }}
          >
            Mach Mini does more than process transactions. Every sale feeds into
            the SuperSonic POS cloud platform, giving you real-time visibility
            into inventory, performance, and activity across your operations.
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
            This is where you manage your business, not just your devices.
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

/* ───── 9. FINAL CTA ───── */

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
            Ready For Flexibility?
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
            If your business needs a POS that adapts to where and how you sell,
            Mach Mini delivers mobility, performance, and control in one
            powerful tablet.
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
              href="#contact"
              className="btn-glass"
              style={{ textDecoration: "none" }}
            >
              Talk to a POS Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Helper: Design tool icons for Built for Flexible section ───── */

function ToolIcon({ name, dark }: { name: string; dark?: boolean }) {
  const color = dark ? "var(--color-gray-500)" : "white";
  switch (name) {
    case "camera":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="4" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    case "layers":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pen":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "grid":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" stroke={color} strokeWidth="1.5" />
          <rect x="14" y="3" width="7" height="7" stroke={color} strokeWidth="1.5" />
          <rect x="3" y="14" width="7" height="7" stroke={color} strokeWidth="1.5" />
          <rect x="14" y="14" width="7" height="7" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
