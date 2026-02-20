"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function DavoSalesTaxPage({ data }: { data: PageData }) {
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
        <WorkForYouSection />
        <HowItWorksSection />
        <BuiltAcrossSection />
        <ReduceRiskSection />
        <IncludedSection />
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
            Never Miss Another Sales Tax Deadline
          </h1>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-10)",
            }}
          >
            Managing sales tax takes time and attention away from your store. With DAVO integrated into SuperSonic POS, sales tax is handled automatically from collection to payment, so you can stay focused on your business.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
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
              Start Free Trial
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

          <p
            style={{
              fontSize: "13px",
              lineHeight: "20px",
              color: "var(--color-gray-400)",
            }}
          >
            You must cancel your free trial before the end of the month in which you activate to avoid being charged $57.99 on the first of the following month. After that, billing continues at $57.99 per month until canceled
          </p>
        </div>

        {/* Right: SuperSonic + DAVO logo blocks */}
        <div style={{ flex: 1, position: "relative", minHeight: 420 }}>
          {/* SuperSonic block */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "10%",
              width: 180,
              height: 180,
              borderRadius: "24px",
              background: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(10,174,184,0.25)",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 900, color: "white", fontStyle: "italic" }}>SuperSonic</span>
          </div>

          {/* Curly arrow down-right */}
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            style={{ position: "absolute", top: "42%", left: "52%", zIndex: 3 }}
          >
            <path d="M10 5C25 5 40 20 35 40C30 60 45 70 50 75" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M45 68L50 78L55 68" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Curly arrow up-left */}
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            style={{ position: "absolute", top: "50%", left: "25%", zIndex: 3 }}
          >
            <path d="M50 75C35 75 20 60 25 40C30 20 15 10 10 5" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M15 12L10 2L5 12" stroke="var(--color-gray-900)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* DAVO block */}
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "0",
              width: 200,
              height: 180,
              borderRadius: "24px",
              background: "#1B2A4A",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              boxShadow: "0 8px 32px rgba(27,42,74,0.25)",
            }}
          >
            <span style={{ fontSize: "36px", fontWeight: 900, color: "white", letterSpacing: "2px" }}>DAVO</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>by Avalara</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 2. LET YOUR POS DO THE WORK FOR YOU ───── */

function WorkForYouSection() {
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
          }}
        >
          Let Your POS Do The Work For You
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
          Missing a sales tax payment doesn&apos;t just create stress. It creates penalties, interest, and unnecessary risk for your business. Instead of asking your team to remember deadlines or manage spreadsheets, SuperSonic POS removes sales tax from your daily to-do list entirely.
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
          Once DAVO is connected, compliance runs automatically while your staff focuses on customers and daily operations.
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

/* ───── 3. HOW DAVO WORKS WITH SUPERSONIC POS ───── */

function HowItWorksSection() {
  return (
    <section style={{ background: "var(--color-white)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
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
            How DAVO works with SuperSonic POS
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            DAVO connects directly to SuperSonic POS and SuperSonic Cloud, using your actual transaction data to manage sales tax accurately and automatically.
          </p>
        </div>

        {/* 3 Step cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {/* Card 1: Sales tax set aside */}
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid var(--color-gray-200)",
              overflow: "hidden",
            }}
          >
            {/* Illustration area */}
            <div
              style={{
                height: 200,
                background: "var(--color-gray-50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  background: "white",
                  border: "1px solid var(--color-gray-200)",
                }}
              >
                {["Protected", "Separated", "Ready"].map((label) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" fill="#D1FAE5" />
                      <path d="M6 10l3 3 5-5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-gray-700)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Text */}
            <div style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: 1.3, marginBottom: "8px" }}>
                Sales tax is set aside automatically
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)" }}>
                Each day, DAVO reads your sales totals and moves the exact amount of sales tax collected into a secure holding account. That money is no longer mixed with operating funds, so it&apos;s always available when taxes are due.
              </p>
            </div>
          </div>

          {/* Card 2: Keep selling normally */}
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid var(--color-gray-200)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 200,
                background: "var(--color-gray-50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                position: "relative",
              }}
            >
              {/* Shopping icons scattered */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ position: "absolute", top: "15%", left: "20%" }}>
                <path d="M4 8h2l3 12h12l3-9H8" stroke="var(--color-gray-400)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="11" cy="23" r="2" fill="var(--color-gray-400)" />
                <circle cx="19" cy="23" r="2" fill="var(--color-gray-400)" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", top: "20%", right: "25%", opacity: 0.5 }}>
                <rect x="3" y="6" width="18" height="12" rx="2" fill="#F9A8D4" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", bottom: "25%", left: "25%", opacity: 0.5 }}>
                <rect x="2" y="4" width="16" height="12" rx="2" fill="#93C5FD" />
              </svg>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ position: "absolute", bottom: "20%", right: "20%", opacity: 0.5 }}>
                <rect x="3" y="5" width="16" height="12" rx="2" fill="#A7F3D0" />
              </svg>

              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "var(--radius-full)",
                  background: "white",
                  border: "1px solid var(--color-gray-200)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-gray-700)",
                  zIndex: 1,
                }}
              >
                Keep Selling Normally
              </div>
            </div>
            <div style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: 1.3, marginBottom: "8px" }}>
                You keep ringing sales like normal
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)" }}>
                Your team continues to run checkout exactly the same way. There are no new buttons to press, reports to run, or workflows to change.
              </p>
            </div>
          </div>

          {/* Card 3: Filing happens on time */}
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid var(--color-gray-200)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 200,
                background: "var(--color-gray-50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-gray-700)" }}>Handled</span>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-gray-200)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--color-gray-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-gray-800)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-gray-700)" }}>Automatically</span>
                </div>
              </div>
            </div>
            <div style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: 1.3, marginBottom: "8px" }}>
                Filing and payments happen on time
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)" }}>
                When your filing deadline arrives, DAVO files your sales tax return and pays the state on your behalf using the funds already set aside. No reminders. No last-minute scrambles. No surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 4. BUILT TO WORK ACROSS YOUR SUPERSONIC SETUP ───── */

function BuiltAcrossSection() {
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
        {/* Left: Terminal + DAVO illustration */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 320,
              height: 260,
              borderRadius: "var(--radius-lg)",
              background: "var(--color-gray-100)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Terminal */}
            <svg width="160" height="180" viewBox="0 0 160 180" fill="none">
              {/* Body */}
              <rect x="30" y="20" width="100" height="140" rx="8" fill="#B0B8C4" />
              {/* Screen */}
              <rect x="40" y="30" width="80" height="40" rx="4" fill="#E2E8F0" />
              {/* Card slot */}
              <rect x="35" y="10" width="30" height="20" rx="3" fill="#94A3B8" />
              <line x1="45" y1="15" x2="45" y2="25" stroke="#60A5FA" strokeWidth="2" />
              <line x1="50" y1="15" x2="50" y2="25" stroke="#60A5FA" strokeWidth="2" />
              <line x1="55" y1="15" x2="55" y2="25" stroke="#60A5FA" strokeWidth="2" />
              {/* Keypad */}
              {[0, 1, 2].map((row) =>
                [0, 1, 2].map((col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={48 + col * 22}
                    y={80 + row * 22}
                    width={16}
                    height={16}
                    rx={3}
                    fill="#94A3B8"
                  />
                ))
              )}
              {/* Bottom buttons */}
              <rect x="48" y="146" width="16" height="10" rx="2" fill="#FBBF24" />
              <rect x="70" y="146" width="16" height="10" rx="2" fill="#10B981" />
              <rect x="92" y="146" width="16" height="10" rx="2" fill="#EF4444" />
            </svg>

            {/* DAVO badge */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 30,
                padding: "8px 14px",
                borderRadius: "8px",
                background: "#1B2A4A",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                boxShadow: "0 2px 8px rgba(27,42,74,0.2)",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 900, color: "white", letterSpacing: "1px" }}>DAVO</span>
              <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}>by Avalara</span>
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
              marginBottom: "var(--space-6)",
            }}
          >
            Built to work across your SuperSonic setup
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Whether you&apos;re selling at the counter, on the floor, or through self-service, DAVO works across your SuperSonic POS environment.
          </p>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
            }}
          >
            Because the integration runs through SuperSonic Cloud, your sales data flows automatically into DAVO: keeping tax calculations accurate regardless of where transactions happen.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── 5. DESIGNED TO REDUCE RISK ───── */

function ReduceRiskSection() {
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
            Designed to reduce risk, not add complexity
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-2)",
            }}
          >
            Sales tax automation only works if your data and funds are protected.
          </p>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              marginBottom: "var(--space-6)",
            }}
          >
            DAVO follows industry best practices to protect your business throughout the entire process, including:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Encryption of sensitive financial and tax",
              "A secure holding account separate from your operating funds",
              "Modern SSL/TLS protection for all online activity",
              "Cloud backups and recovery safeguards",
              "Daily visibility into activity so nothing happens without your knowledge",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <TealCheck />
                <span style={{ fontSize: "var(--text-body-lg)", fontWeight: 500, color: "var(--color-gray-700)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stat cards */}
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { value: "99.99", label: "Data protection reliability" },
            { value: "95", prefix: "up to ", label: "Reduce sales tax risk" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                borderRadius: "16px",
                border: "1px solid var(--color-gray-200)",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 48, fontWeight: 900, color: "var(--color-gray-900)", lineHeight: 1 }}>
                {stat.prefix && <span style={{ fontSize: 16, fontWeight: 500, color: "var(--color-gray-500)" }}>{stat.prefix}</span>}
                {stat.value}
                <span style={{ fontSize: 20, verticalAlign: "super" }}>%</span>
              </p>
              <p style={{ fontSize: "14px", color: "var(--color-gray-500)", fontWeight: 500, marginTop: "8px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── 6. WHAT'S INCLUDED ───── */

function IncludedSection() {
  return (
    <section style={{ background: "var(--color-gray-50)", padding: "var(--space-24) 0" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        <h2
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 900,
            color: "var(--color-gray-900)",
            letterSpacing: "var(--tracking-tight)",
            textAlign: "center",
            marginBottom: "var(--space-12)",
          }}
        >
          What&apos;s included with DAVO for SuperSonic POS:
        </h2>

        {/* Row 1: 4 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {[
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="6" y="8" width="14" height="18" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <circle cx="13" cy="20" r="3" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <rect x="22" y="6" width="10" height="10" rx="2" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <circle cx="27" cy="11" r="1.5" fill="var(--color-gray-800)" />
                  <rect x="22" y="20" width="10" height="10" rx="2" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                </svg>
              ),
              label: "Automatic daily set-aside of collected sales tax",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="6" y="8" width="18" height="22" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M12 16l3 3 7-7" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="22" y="6" width="10" height="8" rx="2" fill="var(--color-gray-800)" />
                </svg>
              ),
              label: "Hands-off filing and payment of state sales tax",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M12 10L18 4L24 10" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <rect x="10" y="10" width="16" height="20" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <circle cx="18" cy="20" r="4" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                  <path d="M18 18v2l1.5 1" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              label: "Application of eligible state discounts where available",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="10" width="22" height="16" rx="2" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M4 16h22" stroke="var(--color-gray-800)" strokeWidth="1.5" />
                  <path d="M26 14l6-4v16l-6-4V14z" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                </svg>
              ),
              label: "Daily email summaries of sales and tax activity",
            },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid var(--color-gray-200)",
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {card.icon}
              <p style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 500, color: "var(--color-gray-700)" }}>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {[
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="12" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M12 18C12 14 14 12 18 12" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <rect x="6" y="22" width="8" height="6" rx="2" fill="var(--color-gray-800)" />
                  <rect x="22" y="22" width="8" height="6" rx="2" fill="var(--color-gray-800)" />
                </svg>
              ),
              label: "Guided onboarding and live support from the DAVO team",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="14" cy="14" r="8" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" />
                  <path d="M20 20l8 8" stroke="var(--color-gray-800)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 14h6M14 11v6" stroke="var(--color-gray-800)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              label: "Online dashboard access for reporting and payment confirmations",
            },
            {
              icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 8C12 8 8 12 8 16C8 18 9 20 12 21L12 28L18 24L24 28L24 21C27 20 28 18 28 16C28 12 24 8 18 8Z" stroke="var(--color-gray-800)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                  <circle cx="18" cy="15" r="3" stroke="var(--color-gray-800)" strokeWidth="1.5" fill="none" />
                </svg>
              ),
              label: "Long-term storage of filings, reports, and records",
            },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid var(--color-gray-200)",
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {card.icon}
              <p style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 500, color: "var(--color-gray-700)" }}>{card.label}</p>
            </div>
          ))}
        </div>
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
            padding: "80px 48px 48px",
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
            Ready To Have Peace Of Mind?
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 750,
              margin: "0 auto var(--space-10)",
              position: "relative",
              zIndex: 1,
            }}
          >
            DAVO is ideal for retailers who want sales tax handled correctly, automatically, and on time without adding more work to their day. If sales tax has ever disrupted your business or created unnecessary risk, this integration is built to fix that.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              flexWrap: "wrap",
              marginBottom: "var(--space-8)",
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
              Start Free Trial
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
              Talk to a POS Specialist
            </a>
          </div>

          <p
            style={{
              fontSize: "12px",
              lineHeight: "18px",
              color: "rgba(255,255,255,0.6)",
              position: "relative",
              zIndex: 1,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            1. You must cancel your free trial before the end of the month in which you activate to avoid being charged $57.99 on the first of the following month. After that, billing continues at $57.99 per month until canceled.
          </p>
        </div>
      </div>
    </section>
  );
}
