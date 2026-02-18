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

          {/* Floating emoji icons */}
          <div
            style={{
              position: "absolute",
              top: "12%",
              right: "18%",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#fef3c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            ⭐
          </div>
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "12%",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#dbeafe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            💬
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "18%",
              right: "14%",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#d1fae5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            🤝
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "30%",
              left: "16%",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#ede9fe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            👤
          </div>
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

const loyaltyBasicFeatures = [
  {
    icon: "📱",
    title: "Phone Number Enrollment",
    description:
      "Customers sign up with their phone number — no apps, no cards, no hassle.",
  },
  {
    icon: "🆔",
    title: "Customer Identification",
    description:
      "Instantly recognize returning customers at checkout for a personalized experience.",
  },
  {
    icon: "⭐",
    title: "Automatic Points Accrual",
    description:
      "Points accumulate automatically with every purchase — nothing extra to scan or swipe.",
  },
  {
    icon: "🎁",
    title: "Flexible Reward Redemption",
    description:
      "Let customers redeem points for discounts, free items, or custom rewards you define.",
  },
  {
    icon: "💳",
    title: "NFC Gift Cards",
    description:
      "Sell and reload branded gift cards that tap to pay — a revenue stream that markets itself.",
  },
  {
    icon: "⚙️",
    title: "Quick Setup & Management",
    description:
      "Configure loyalty rules from your back office in minutes. No IT team needed.",
  },
];

const loyaltyAdvancedFeatures = [
  {
    icon: "🎯",
    title: "Targeted Promotions",
    description:
      "Send personalized offers based on purchase history, visit frequency, and spend patterns.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description:
      "Track loyalty program ROI, redemption rates, and customer lifetime value in real time.",
  },
  {
    icon: "🏆",
    title: "Tiered Rewards",
    description:
      "Create Bronze, Silver, and Gold tiers that reward your most loyal customers with bigger perks.",
  },
  {
    icon: "🔔",
    title: "Automated Engagement",
    description:
      "Trigger messages when customers hit milestones, haven't visited in a while, or have a birthday.",
  },
  {
    icon: "🔗",
    title: "Multi-Store Sync",
    description:
      "Customers earn and redeem across all your locations with a single unified loyalty account.",
  },
  {
    icon: "📈",
    title: "A/B Campaign Testing",
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
          Two Plans. One Goal.
        </p>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 900,
            color: "var(--color-text-heading)",
            marginBottom: "var(--space-8)",
            maxWidth: "700px",
            margin: "0 auto var(--space-8)",
          }}
        >
          Loyalty that fits your business, not the other way around
        </h2>

        {/* Toggle tabs */}
        <div
          style={{
            display: "inline-flex",
            background: "var(--color-white)",
            borderRadius: "var(--radius-full)",
            padding: "4px",
            marginBottom: "var(--space-12)",
            border: "1px solid var(--color-border)",
          }}
        >
          <button
            onClick={() => setActiveTab("basic")}
            style={{
              padding: "12px 28px",
              borderRadius: "var(--radius-full)",
              border: "none",
              fontSize: "var(--text-body)",
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
              padding: "12px 28px",
              borderRadius: "var(--radius-full)",
              border: "none",
              fontSize: "var(--text-body)",
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

        {/* Section subheading */}
        <h3
          style={{
            fontSize: "var(--text-h3)",
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
            fontSize: "var(--text-body)",
            color: "var(--color-text-body)",
            marginBottom: "var(--space-10)",
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
            marginBottom: "var(--space-10)",
          }}
        >
          {features.map((feat, i) => (
            <div
              key={`${activeTab}-${i}`}
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                textAlign: "left",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-gray-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "var(--space-4)",
                }}
              >
                {feat.icon}
              </div>
              <h4
                style={{
                  fontSize: "var(--text-h4)",
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

const addOnCards = [
  {
    emoji: "🎁",
    title: "Branded Gift Cards",
    description:
      "Sell and reload branded gift cards in-store and online. Turn your happiest customers into your best marketers.",
    note: null,
  },
  {
    emoji: "📣",
    title: "SMS Campaigns",
    description:
      "Send targeted text promotions, flash sales, and loyalty milestones straight to customers' phones.",
    note: "*Requires Advanced Rewards.",
  },
  {
    emoji: "✉️",
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

              {/* Emoji illustration area */}
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
                    fontSize: "40px",
                  }}
                >
                  {card.emoji}
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
