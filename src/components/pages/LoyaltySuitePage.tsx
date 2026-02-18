"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function LoyaltySuitePage({ data }: { data: PageData }) {
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
        <EffortlessCheckout />
        <RepeatVisits />
        <LoyaltyFits />
        <ExpandLoyalty />
        <FinalCta />
      </main>
      <Footer />
    </>
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

/* ───── Shared: Floating Icon Bubble ───── */

function FloatingIcon({
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
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ───── Shared: Floating Avatar ───── */

function Avatar({
  color,
  initials,
  size = 48,
  style,
}: {
  color: string;
  initials: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.36,
        fontWeight: 700,
        color: "#fff",
        border: "3px solid #fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        ...style,
      }}
    >
      {initials}
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

      {/* Floating avatars — left side */}
      <Avatar
        color="#6366f1"
        initials="JR"
        size={56}
        style={{ position: "absolute", top: "18%", left: "8%", zIndex: 2 }}
      />
      <Avatar
        color="#f59e0b"
        initials="KM"
        size={44}
        style={{ position: "absolute", top: "38%", left: "5%", zIndex: 2 }}
      />
      <Avatar
        color="#10b981"
        initials="DL"
        size={52}
        style={{ position: "absolute", top: "60%", left: "10%", zIndex: 2 }}
      />

      {/* Floating avatars — right side */}
      <Avatar
        color="#ec4899"
        initials="SN"
        size={50}
        style={{ position: "absolute", top: "20%", right: "7%", zIndex: 2 }}
      />
      <Avatar
        color="#0aaeb8"
        initials="AT"
        size={46}
        style={{ position: "absolute", top: "42%", right: "4%", zIndex: 2 }}
      />
      <Avatar
        color="#8b5cf6"
        initials="WP"
        size={54}
        style={{ position: "absolute", top: "64%", right: "9%", zIndex: 2 }}
      />

      {/* Blue arrow decorations */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        style={{
          position: "absolute",
          top: "28%",
          left: "16%",
          zIndex: 2,
          opacity: 0.5,
        }}
        aria-hidden="true"
      >
        <path
          d="M20 60C20 60 30 20 60 20"
          stroke="#519fff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M52 14L60 20L52 26"
          stroke="#519fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          zIndex: 2,
          opacity: 0.5,
          transform: "scaleX(-1)",
        }}
        aria-hidden="true"
      >
        <path
          d="M20 60C20 60 30 20 60 20"
          stroke="#519fff"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M52 14L60 20L52 26"
          stroke="#519fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 3,
          padding: "var(--space-20) var(--page-padding)",
        }}
      >
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-caps)",
            color: "var(--color-primary)",
            marginBottom: "var(--space-4)",
          }}
        >
          Loyalty Suite
        </p>

        <h1
          style={{
            fontSize: "var(--text-display)",
            lineHeight: "var(--leading-display)",
            fontWeight: 900,
            letterSpacing: "var(--tracking-display)",
            color: "var(--color-text-heading)",
            marginBottom: "var(--space-6)",
          }}
        >
          Turn Everyday Visits
          <br />
          Into{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            Repeat
            {/* Teal wavy underline */}
            <svg
              viewBox="0 0 200 12"
              fill="none"
              style={{
                position: "absolute",
                bottom: "-4px",
                left: 0,
                width: "100%",
                height: "12px",
              }}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 6C20 2 40 10 60 6C80 2 100 10 120 6C140 2 160 10 180 6C190 4 195 5 200 6"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          Business
        </h1>

        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-text-body)",
            maxWidth: "560px",
            margin: "0 auto var(--space-10)",
          }}
        >
          Build customer loyalty with points, rewards, and personalized offers
          that keep shoppers coming back &mdash; all built right into your POS.
        </p>

        <div
          style={{
            display: "flex",
            gap: "var(--space-4)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              height: "60px",
              padding: "12px 36px",
              background: "var(--gradient-primary)",
              borderRadius: "var(--radius-full)",
              fontSize: "18px",
              fontWeight: 700,
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
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            style={{ textDecoration: "none", gap: "var(--space-2)" }}
          >
            {/* Headphone icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 18V12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12V18"
                stroke="var(--color-gray-900)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M21 19C21 20.1 20.1 21 19 21H18C16.9 21 16 20.1 16 19V16C16 14.9 16.9 14 18 14H21V19Z"
                fill="var(--color-gray-900)"
              />
              <path
                d="M3 19C3 20.1 3.9 21 5 21H6C7.1 21 8 20.1 8 19V16C8 14.9 7.1 14 6 14H3V19Z"
                fill="var(--color-gray-900)"
              />
            </svg>
            Talk to a POS Specialist
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── 2. LOYALTY SHOULD FEEL EFFORTLESS ───── */

function EffortlessCheckout() {
  return (
    <section
      style={{
        padding: "var(--space-24) 0",
        background: "var(--color-white)",
      }}
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
        {/* Left — Heart illustration with floating icons */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "440px",
          }}
        >
          {/* Concentric circles */}
          {[280, 220, 160].map((size, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                border: `1px solid ${i === 0 ? "rgba(236, 72, 153, 0.08)" : i === 1 ? "rgba(236, 72, 153, 0.12)" : "rgba(236, 72, 153, 0.18)"}`,
              }}
            />
          ))}

          {/* Center heart */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #fda4af 0%, #ec4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              zIndex: 2,
              boxShadow: "0 8px 32px rgba(236, 72, 153, 0.3)",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Floating icons */}
          <FloatingIcon bg="#fef3c7" style={{ position: "absolute", top: "12%", right: "18%" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
            </svg>
          </FloatingIcon>
          <FloatingIcon bg="#dbeafe" style={{ position: "absolute", top: "25%", left: "12%" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            </svg>
          </FloatingIcon>
          <FloatingIcon bg="#d1fae5" style={{ position: "absolute", bottom: "18%", right: "14%" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="#10b981" strokeWidth="1.5" fill="none" />
              <path d="M12 11v6M9 14h6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="8" y="2" width="8" height="4" rx="1" stroke="#10b981" strokeWidth="1.5" fill="none" />
            </svg>
          </FloatingIcon>
          <FloatingIcon bg="#ede9fe" style={{ position: "absolute", bottom: "30%", left: "16%" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#8b5cf6" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="7" r="4" stroke="#8b5cf6" strokeWidth="1.5" fill="none" />
            </svg>
          </FloatingIcon>
        </div>

        {/* Right — Text content */}
        <div>
          <p
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-caps)",
              color: "var(--color-primary)",
              marginBottom: "var(--space-4)",
            }}
          >
            Simple. Fast. Built-In.
          </p>
          <h2
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            Loyalty Should Feel Effortless At Checkout
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-text-body)",
              marginBottom: "var(--space-6)",
            }}
          >
            Customers sign up by phone number &mdash; no app downloads, no
            plastic cards, no friction. Points accrue automatically with every
            transaction, and rewards redeem right at the register.
          </p>
          <p
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
            }}
          >
            It&apos;s{" "}
            <em
              style={{
                fontStyle: "italic",
                textDecoration: "underline",
                textDecorationColor: "var(--color-primary)",
                textUnderlineOffset: "4px",
              }}
            >
              The Speed You
            </em>{" "}
            Need.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 3. BUILT FOR BUSINESSES THAT DEPEND ON REPEAT VISITS ───── */

function RepeatVisits() {
  return (
    <section
      style={{
        padding: "var(--space-24) 0",
        background: "var(--color-white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-caps)",
            color: "var(--color-primary)",
            marginBottom: "var(--space-4)",
          }}
        >
          Trusted Everywhere
        </p>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 900,
            color: "var(--color-text-heading)",
            marginBottom: "var(--space-16)",
            maxWidth: "700px",
            margin: "0 auto var(--space-16)",
          }}
        >
          Built for businesses that depend on repeat visits
        </h2>

        {/* World map dot pattern */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            aspectRatio: "2 / 1",
          }}
        >
          {/* Dot grid representing world map */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "repeat(60, 1fr)",
              gridTemplateRows: "repeat(30, 1fr)",
              gap: "2px",
              opacity: 0.2,
            }}
            aria-hidden="true"
          >
            {Array.from({ length: 1800 }).map((_, i) => {
              // Create a rough world map shape with dot density
              const col = i % 60;
              const row = Math.floor(i / 60);
              const isVisible = getMapDot(col, row);
              return (
                <div
                  key={i}
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: isVisible
                      ? "var(--color-primary)"
                      : "transparent",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                />
              );
            })}
          </div>

          {/* Floating avatars on map */}
          <Avatar
            color="#6366f1"
            initials="MR"
            size={40}
            style={{ position: "absolute", top: "25%", left: "20%" }}
          />
          <Avatar
            color="#ec4899"
            initials="TP"
            size={36}
            style={{ position: "absolute", top: "35%", right: "30%" }}
          />
          <Avatar
            color="#f59e0b"
            initials="AK"
            size={42}
            style={{ position: "absolute", top: "45%", left: "40%" }}
          />

          {/* Testimonial card */}
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6) var(--space-8)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
              maxWidth: "380px",
              textAlign: "left",
              zIndex: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "var(--space-3)",
                marginBottom: "var(--space-3)",
              }}
            >
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#f59e0b"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-text-body)",
                marginBottom: "var(--space-4)",
              }}
            >
              &ldquo;Our regulars love just punching in their phone number.
              Redemptions went up 40% the first month we switched
              on.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c084fc 0%, #8b5cf6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                OM
              </div>
              <div>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                    lineHeight: 1.3,
                  }}
                >
                  Olivia Morenz
                </p>
                <p
                  style={{
                    fontSize: "var(--text-caption)",
                    color: "var(--color-text-body)",
                  }}
                >
                  Store Owner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-3)",
            marginTop: "var(--space-8)",
          }}
        >
          <button
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid var(--color-border)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="var(--color-gray-500)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "none",
              background: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* Helper: approximate world-map dot pattern */
function getMapDot(col: number, row: number): boolean {
  // Simplified continental shapes on a 60x30 grid
  // North America
  if (row >= 4 && row <= 14 && col >= 5 && col <= 20) {
    if (row <= 7 && col >= 8 && col <= 18) return true;
    if (row >= 8 && row <= 11 && col >= 5 && col <= 16) return true;
    if (row >= 12 && row <= 14 && col >= 8 && col <= 13) return true;
  }
  // South America
  if (row >= 16 && row <= 26 && col >= 13 && col <= 21) {
    if (row <= 19 && col >= 14 && col <= 20) return true;
    if (row >= 20 && row <= 24 && col >= 13 && col <= 19) return true;
    if (row >= 25 && col >= 14 && col <= 17) return true;
  }
  // Europe
  if (row >= 4 && row <= 12 && col >= 25 && col <= 35) {
    if (row <= 8 && col >= 26 && col <= 33) return true;
    if (row >= 9 && row <= 12 && col >= 25 && col <= 32) return true;
  }
  // Africa
  if (row >= 10 && row <= 24 && col >= 26 && col <= 37) {
    if (row <= 14 && col >= 27 && col <= 36) return true;
    if (row >= 15 && row <= 20 && col >= 26 && col <= 35) return true;
    if (row >= 21 && col >= 28 && col <= 33) return true;
  }
  // Asia
  if (row >= 3 && row <= 16 && col >= 34 && col <= 55) {
    if (row <= 8 && col >= 36 && col <= 54) return true;
    if (row >= 9 && row <= 13 && col >= 34 && col <= 52) return true;
    if (row >= 14 && row <= 16 && col >= 38 && col <= 50) return true;
  }
  // Australia
  if (row >= 19 && row <= 25 && col >= 46 && col <= 55) {
    if (row <= 22 && col >= 47 && col <= 54) return true;
    if (row >= 23 && col >= 48 && col <= 53) return true;
  }
  return false;
}

/* ───── 4. LOYALTY THAT FITS YOUR BUSINESS ───── */

/* SVG Icon components for feature cards (24×24, gray-900 stroke, 1.5 weight) */

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <line x1="9" y1="18" x2="15" y2="18" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconCustomerId() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="3" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M6.5 19.5C7.5 16.5 9.5 15 12 15C14.5 15 16.5 16.5 17.5 19.5" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17,6 23,6 23,12" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGiftCalendar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="13" rx="2" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M12 8V21" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M3 12H21" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M7.5 8C7.5 8 7.5 4 10 4C12.5 4 12 8 12 8" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.5 8C16.5 8 16.5 4 14 4C11.5 4 12 8 12 8" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconNfcCard() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M9 12C9 10.34 10.34 9 12 9" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12C7 9.24 9.24 7 12 7" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 12C5 8.13 8.13 5 12 5" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1" fill="var(--color-gray-900)" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="4" y1="6" x2="20" y2="6" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="18" x2="20" y2="18" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="6" r="2" fill="var(--color-white)" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="2" fill="var(--color-white)" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <circle cx="10" cy="18" r="2" fill="var(--color-white)" stroke="var(--color-gray-900)" strokeWidth="1.5" />
    </svg>
  );
}

/* Advanced plan icons */

function IconTarget() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke="var(--color-gray-900)" strokeWidth="1.5" />
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="12" width="4" height="9" rx="1" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <rect x="10" y="7" width="4" height="14" rx="1" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <rect x="17" y="3" width="4" height="18" rx="1" stroke="var(--color-gray-900)" strokeWidth="1.5" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 21H16" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17V21" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M7 4H17V8C17 11.31 14.76 14 12 14C9.24 14 7 11.31 7 8V4Z" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M7 7H4C4 10 5.5 11 7 11" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 7H20C20 10 18.5 11 17 11" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8A6 6 0 1 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M13.73 21A2 2 0 0 1 10.27 21" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconABTest() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const loyaltyBasicFeatures = [
  {
    icon: <IconPhone />,
    title: "One-tap phone number enrollment",
    description:
      "Customers enter their phone number once and begin earning rewards immediately. No apps, cards, or accounts required.",
  },
  {
    icon: <IconCustomerId />,
    title: "Built-in customer identification",
    description:
      "Returning customers are automatically recognized at checkout, allowing participation to happen naturally during transactions.",
  },
  {
    icon: <IconTrendingUp />,
    title: "Automatic points and rewards",
    description:
      "Points calculate and rewards apply in the background. No extra steps, no training, no slowdown at the counter.",
  },
  {
    icon: <IconGiftCalendar />,
    title: "Flexible reward structures",
    description:
      'Run points-per-dollar programs, punch-style rewards, time-based promotions, or "Buy X, Get 1 Free" offers.',
  },
  {
    icon: <IconNfcCard />,
    title: "Virtual and NFC-enabled gift cards",
    description:
      "Support digital gift cards printed on receipts, with NFC compatibility built in.",
  },
  {
    icon: <IconSettings />,
    title: "Simple setup and management",
    description:
      "Configure rewards and rules directly through the POS or back office. No third-party systems required.",
  },
];

const loyaltyAdvancedFeatures = [
  {
    icon: <IconTarget />,
    title: "Targeted promotions",
    description:
      "Send personalized offers based on purchase history, visit frequency, and spend patterns.",
  },
  {
    icon: <IconBarChart />,
    title: "Advanced analytics",
    description:
      "Track loyalty program ROI, redemption rates, and customer lifetime value in real time.",
  },
  {
    icon: <IconTrophy />,
    title: "Tiered rewards",
    description:
      "Create Bronze, Silver, and Gold tiers that reward your most loyal customers with bigger perks.",
  },
  {
    icon: <IconBell />,
    title: "Automated engagement",
    description:
      "Trigger messages when customers hit milestones, haven't visited in a while, or have a birthday.",
  },
  {
    icon: <IconLink />,
    title: "Multi-store sync",
    description:
      "Customers earn and redeem across all your locations with a single unified loyalty account.",
  },
  {
    icon: <IconABTest />,
    title: "A/B campaign testing",
    description:
      "Test different reward structures and promotions to find what drives the most repeat visits.",
  },
];

function LoyaltyFits() {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");
  const features =
    activeTab === "basic" ? loyaltyBasicFeatures : loyaltyAdvancedFeatures;

  return (
    <section
      style={{
        padding: "var(--space-24) 0",
        background: "var(--color-gray-50)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Centered heading + subtitle */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h2
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 900,
              color: "var(--color-text-heading)",
              marginBottom: "var(--space-4)",
            }}
          >
            Loyalty that fits your business, not the other way around
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-text-body)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            The SuperSonic Loyalty Suite gives you flexible options based on how
            much control and insight you want, without forcing third-party
            systems or complicated workflows.
          </p>
        </div>

        {/* Split row: left text, right toggle */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "var(--space-8)",
            flexWrap: "wrap",
            gap: "var(--space-6)",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <h3
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: 800,
                color: "var(--color-text-heading)",
                marginBottom: "var(--space-2)",
              }}
            >
              {activeTab === "basic"
                ? "Simple loyalty. Built for everyday checkout."
                : "Advanced loyalty. Built for growth-focused retailers."}
            </h3>
            <p
              style={{
                fontSize: "var(--text-body-sm)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-text-body)",
              }}
            >
              {activeTab === "basic"
                ? "For retailers who want repeat visits without added complexity, SuperSonic Loyalty delivers a built-in experience that works seamlessly at the register from day one."
                : "For retailers ready to build deeper relationships, SuperSonic Advanced Loyalty adds segmentation, automation, and multi-store sync on top of the standard feature set."}
            </p>
          </div>

          {/* Toggle tabs */}
          <div
            style={{
              display: "inline-flex",
              background: "var(--color-white)",
              borderRadius: "var(--radius-full)",
              padding: "4px",
              border: "1px solid var(--color-border)",
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setActiveTab("basic")}
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-full)",
                border: "none",
                fontSize: "var(--text-body-sm)",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                background:
                  activeTab === "basic"
                    ? "var(--color-primary)"
                    : "transparent",
                color:
                  activeTab === "basic"
                    ? "var(--color-white)"
                    : "var(--color-text-body)",
              }}
            >
              SuperSonic Loyalty
            </button>
            <button
              onClick={() => setActiveTab("advanced")}
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-full)",
                border: "none",
                fontSize: "var(--text-body-sm)",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                background:
                  activeTab === "advanced"
                    ? "var(--color-primary)"
                    : "transparent",
                color:
                  activeTab === "advanced"
                    ? "var(--color-white)"
                    : "var(--color-text-body)",
              }}
            >
              SuperSonic Advanced Loyalty
            </button>
          </div>
        </div>

        {/* Italic subheading */}
        <p
          style={{
            fontSize: "var(--text-body)",
            fontStyle: "italic",
            fontWeight: 600,
            color: "var(--color-text-heading)",
            marginBottom: "var(--space-8)",
          }}
        >
          What it does for your store:
        </p>

        {/* 2×3 feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-6)",
            marginBottom: "var(--space-12)",
          }}
        >
          {features.map((feat, i) => (
            <div
              key={`${activeTab}-${i}`}
              style={{
                background: "var(--color-white)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                textAlign: "left",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-gray-50)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--space-6)",
                }}
              >
                {feat.icon}
              </div>
              <h4
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 700,
                  color: "var(--color-text-heading)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {feat.title}
              </h4>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-text-body)",
                }}
              >
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "var(--text-body)",
            color: "var(--color-text-body)",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {activeTab === "basic"
            ? "No external apps. No additional hardware. No friction at checkout."
            : "Everything in Standard, plus powerful tools to segment, engage, and grow."}
        </p>
      </div>
    </section>
  );
}

/* ───── 5. EXPAND LOYALTY + FINAL CTA ───── */

/* Add-on SVG icons */

function IconGiftBox() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <rect x="5" y="7" width="14" height="4" rx="1" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M12 7V21" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M7.5 7C7.5 7 8 4 10 4C12 4 12 7 12 7" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.5 7C16.5 7 16 4 14 4C12 4 12 7 12 7" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMegaphone() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8C19.1 8 20 6.66 20 5C20 3.34 19.1 2 18 2" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 11V7C3 5.9 3.9 5 5 5H9L18 2V20L9 17H5C3.9 17 3 16.1 3 15V11Z" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 17V21C9 21.55 9.45 22 10 22H11C11.55 22 12 21.55 12 21V17" stroke="var(--color-gray-900)" strokeWidth="1.5" />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--color-gray-900)" strokeWidth="1.5" />
      <path d="M22 7L13.03 12.7C12.71 12.9 12.36 13 12 13C11.64 13 11.29 12.9 10.97 12.7L2 7" stroke="var(--color-gray-900)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const addOnCards = [
  {
    icon: <IconGiftBox />,
    title: "Branded Gift Cards",
    description:
      "Sell and reload branded gift cards in-store and online. Turn your happiest customers into your best marketers.",
    note: null,
  },
  {
    icon: <IconMegaphone />,
    title: "SMS Campaigns",
    description:
      "Send targeted text promotions, flash sales, and loyalty milestones straight to customers' phones.",
    note: "*Requires Advanced Rewards.",
  },
  {
    icon: <IconEnvelope />,
    title: "SMS Receipts",
    description:
      "Replace paper receipts with branded SMS receipts that include loyalty balance, offers, and re-engagement links.",
    note: null,
  },
];

function ExpandLoyalty() {
  return (
    <section style={{ padding: "var(--space-24) 0", background: "var(--color-white)" }}>
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-caps)",
            color: "var(--color-primary)",
            marginBottom: "var(--space-4)",
          }}
        >
          Add-Ons
        </p>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 900,
            color: "var(--color-text-heading)",
            marginBottom: "var(--space-4)",
          }}
        >
          Expand loyalty when it makes sense
        </h2>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--color-text-body)",
            maxWidth: "600px",
            margin: "0 auto var(--space-12)",
          }}
        >
          Add capabilities as your loyalty program grows. Each module plugs
          right into your existing SuperSonic setup.
        </p>

        {/* Add-on cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-6)",
            marginBottom: "var(--space-20)",
          }}
        >
          {addOnCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              {/* Scalloped/dotted top border decoration */}
              <div
                style={{
                  height: "4px",
                  background:
                    "repeating-linear-gradient(90deg, var(--color-primary) 0px, var(--color-primary) 8px, transparent 8px, transparent 16px)",
                }}
              />

              {/* Icon illustration area */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "var(--space-8) var(--space-6) var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "var(--color-gray-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
              </div>

              <div style={{ padding: "0 var(--space-6) var(--space-8)" }}>
                <h3
                  style={{
                    fontSize: "var(--text-h4)",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    lineHeight: "var(--leading-relaxed)",
                    color: "var(--color-text-body)",
                    marginBottom: card.note ? "var(--space-3)" : 0,
                  }}
                >
                  {card.description}
                </p>
                {card.note && (
                  <p
                    style={{
                      fontSize: "var(--text-caption)",
                      color: "var(--color-text-body)",
                      fontStyle: "italic",
                    }}
                  >
                    {card.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── 6. FINAL CTA ───── */

function FinalCta() {
  return (
    <section style={{ padding: "0 0 var(--space-24)" }}>
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
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-text-on-primary)",
              marginBottom: "var(--space-4)",
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready To Build Loyalty That Lasts?
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
            See how SuperSonic&apos;s loyalty suite turns one-time shoppers into
            lifetime customers.
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
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
