"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";

export default function MachFlexPage({ data }: { data: PageData }) {
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
        <ModularSection />
        <FeaturesGridSection />
        <HesitationSection />
        <DemandSection />
        <RealitiesSection />
        <ScaleSection />
        <CloudSection />
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
        maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 300 }).map((_, i) => (
        <div key={i} style={{ borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
      ))}
    </div>
  );
}

/* ───── Shared: Bar Chart Icon (green) ───── */

function GreenBars() {
  return (
    <svg width="60" height="36" viewBox="0 0 60 36" fill="none" aria-hidden="true">
      {[0, 8, 16, 24, 32, 40, 48].map((x, i) => {
        const heights = [20, 30, 14, 28, 18, 34, 22];
        return <rect key={i} x={x} y={36 - heights[i]} width="5" height={heights[i]} rx="2" fill="#22c55e" />;
      })}
    </svg>
  );
}

/* ───── Shared: Bar Chart Icon (red) ───── */

function RedBars() {
  return (
    <svg width="60" height="36" viewBox="0 0 60 36" fill="none" aria-hidden="true">
      {[0, 8, 16, 24, 32, 40, 48].map((x, i) => {
        const heights = [18, 28, 12, 32, 16, 26, 20];
        return <rect key={i} x={x} y={36 - heights[i]} width="5" height={heights[i]} rx="2" fill="#ef4444" />;
      })}
    </svg>
  );
}

/* ───── Section 1: Hero ───── */

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
      <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--max-width-page)", margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 800,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "var(--space-8)",
          }}
        >
          The POS Built for Nonstop Lanes
        </h1>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: 740,
            margin: "0 auto var(--space-16)",
          }}
        >
          When your busiest lanes slow down, the impact is immediate. Mach Flex is built to keep high-volume checkout fast, stable, and reliable, even during constant peak traffic.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap", marginBottom: "var(--space-20)" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: "var(--gradient-primary)",
              color: "#fff",
              borderRadius: "var(--radius-full)",
              fontWeight: 600,
              fontSize: "var(--text-body)",
              textDecoration: "none",
              border: "none",
            }}
          >
            Book a Demo <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: "#fff",
              color: "var(--color-text-heading)",
              borderRadius: "var(--radius-full)",
              fontWeight: 600,
              fontSize: "var(--text-body)",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
            }}
          >
            Compare POS Hardware
          </a>
        </div>

        {/* Hardware illustration area */}
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", paddingBottom: 40 }}>
          {/* Beige arc background */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "110%",
              height: "70%",
              background: "rgba(230, 220, 210, 0.3)",
              borderRadius: "50% 50% 0 0",
            }}
            aria-hidden="true"
          />

          {/* POS Hardware Illustration */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <MachFlexIllustration />
          </div>

          {/* Star rating badge */}
          <div
            style={{
              position: "absolute",
              left: "8%",
              top: "40%",
              background: "#fff",
              borderRadius: "var(--radius-full)",
              padding: "8px 16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              display: "flex",
              gap: 2,
              zIndex: 3,
            }}
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="18" height="18" viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
                <path d="M10 1l2.39 4.84L17.82 7l-3.91 3.81.92 5.38L10 13.47l-4.83 2.72.92-5.38L2.18 7l5.43-1.16z" />
              </svg>
            ))}
          </div>

          {/* Stat card: Cut checkout time */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "20%",
              background: "#fff",
              borderRadius: "var(--radius-lg)",
              padding: "16px 20px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 16,
              zIndex: 3,
              border: "1px solid var(--color-border)",
            }}
          >
            <div>
              <div style={{ fontSize: 14, color: "var(--color-text-body)" }}>Cut checkout time</div>
              <div style={{ fontSize: 14, color: "var(--color-text-body)" }}>
                by up to <span style={{ fontSize: 28, fontWeight: 700, color: "var(--color-text-heading)" }}>40–60%</span>
              </div>
            </div>
            <GreenBars />
          </div>

          {/* Stat card: Reduce checkout time */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "12%",
              background: "#fff",
              borderRadius: "var(--radius-lg)",
              padding: "16px 20px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 16,
              zIndex: 3,
              border: "1px solid var(--color-border)",
            }}
          >
            <div>
              <div style={{ fontSize: 14, color: "var(--color-text-body)" }}>Reduce checkout time</div>
              <div style={{ fontSize: 14, color: "var(--color-text-body)" }}>
                by <span style={{ fontSize: 28, fontWeight: 700, color: "var(--color-text-heading)" }}>30–50%</span>
              </div>
            </div>
            <RedBars />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Mach Flex Hardware Illustration ───── */

function MachFlexIllustration() {
  return (
    <svg width="520" height="360" viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", margin: "0 auto" }}>
      {/* Base platform */}
      <rect x="100" y="320" width="320" height="20" rx="4" fill="#1a1a2e" />

      {/* Main stand pole */}
      <rect x="248" y="180" width="24" height="150" rx="4" fill="#2d2d44" />

      {/* Monitor arm */}
      <rect x="160" y="170" width="200" height="14" rx="4" fill="#2d2d44" />

      {/* Main 16-inch monitor */}
      <rect x="150" y="40" width="220" height="140" rx="10" fill="#1a1a2e" />
      <rect x="158" y="48" width="204" height="120" rx="6" fill="#3d5a80" />
      {/* Screen grid pattern */}
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={164 + col * 25}
            y={54 + row * 18}
            width="20"
            height="14"
            rx="2"
            fill={`hsl(${190 + col * 10}, ${50 + row * 5}%, ${45 + (row + col) * 3}%)`}
            opacity="0.8"
          />
        ))
      )}

      {/* Payment terminal (left) */}
      <rect x="90" y="210" width="50" height="80" rx="6" fill="#1a1a2e" />
      <rect x="96" y="218" width="38" height="30" rx="3" fill="#3d5a80" />
      {/* Terminal keypad dots */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`k${r}${c}`} cx={106 + c * 10} cy={260 + r * 8} r="2.5" fill="#4a4a6a" />
        ))
      )}

      {/* Receipt printer (right side) */}
      <rect x="380" y="210" width="60" height="50" rx="6" fill="#2d2d44" />
      <rect x="388" y="200" width="44" height="18" rx="2" fill="#e8e8e8" />
      {/* Receipt lines */}
      <rect x="392" y="204" width="36" height="2" rx="1" fill="#ccc" />
      <rect x="392" y="209" width="28" height="2" rx="1" fill="#ccc" />

      {/* Scanner (far right) */}
      <rect x="450" y="240" width="30" height="60" rx="6" fill="#2d2d44" />
      <rect x="447" y="230" width="36" height="16" rx="4" fill="#1a1a2e" />

      {/* SuperSonic POS label on monitor */}
      <text x="260" y="175" textAnchor="middle" fill="#8899aa" fontSize="8" fontFamily="sans-serif">
        SuperSonic POS
      </text>
    </svg>
  );
}

/* ───── Section 2: Modular ───── */

function ModularSection() {
  return (
    <section
      style={{
        padding: "var(--space-24) var(--page-padding)",
        background: "#f5f7fa",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 800,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: "var(--space-8)",
          }}
        >
          Mach Flex: Ultimate Modular Retail POS
        </h2>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: 860,
            margin: "0 auto var(--space-6)",
          }}
        >
          Mach Flex delivers the adaptability and performance required for modern, high-volume retail lanes. With a large 16-inch touchscreen and a stable, professional retail stand, it is built to command the lane while supporting fast, uninterrupted checkout.
        </p>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          This is a modular POS designed to handle continuous demand today and scale cleanly as your operation grows.
        </p>
      </div>
    </section>
  );
}

/* ───── Section 3: Features Grid ───── */

const featureCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="22" height="16" rx="2" />
        <path d="M8 25h12M14 21v4" />
      </svg>
    ),
    title: "Large 16-inch FHD touchscreen",
    desc: "A bright, responsive display built for fast interaction, clear visibility, and efficient checkout in high-traffic environments.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="4" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.1 5.1l2.83 2.83M20.07 20.07l2.83 2.83M5.1 22.9l2.83-2.83M20.07 7.93l2.83-2.83" />
      </svg>
    ),
    title: "Modular, rugged design",
    desc: "Supports essential lane add-ons including NFC readers, scanners, printers, and payment devices, allowing you to configure each lane exactly how your operation requires.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14h4l3-9 6 18 3-9h4" />
      </svg>
    ),
    title: "High-performance hardware",
    desc: "Powered by Android 13 with an octa-core CPU and up to 8 GB RAM and 128 GB storage, Mach Flex is built to handle sustained transaction volume without slowdown.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <path d="M14 7v7l4 4" />
      </svg>
    ),
    title: "All-day reliability",
    desc: "Designed for continuous operation in demanding retail settings, Mach Flex stays stable through long shifts and peak traffic without constant resets or attention.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 14.5a7 7 0 0 1 14 0" />
        <circle cx="14" cy="14.5" r="2.5" />
        <path d="M14 4v3M4 14.5H7M21 14.5h3" />
      </svg>
    ),
    title: "Seamless connectivity",
    desc: "Built-in Wi-Fi, Bluetooth, Ethernet, and a full port selection ensure reliable connections to your network and peripherals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="8" height="8" rx="2" />
        <rect x="16" y="4" width="8" height="8" rx="2" />
        <rect x="4" y="16" width="8" height="8" rx="2" />
        <rect x="16" y="16" width="8" height="8" rx="2" />
      </svg>
    ),
    title: "Versatile retail stand",
    desc: "A stable, modern stand designed to integrate cleanly into your lane layout while supporting heavy daily use.",
  },
];

function FeaturesGridSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: 800,
            color: "var(--color-text-heading)",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "var(--space-16)",
          }}
        >
          Built to perform under constant demand
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-8)",
          }}
        >
          {featureCards.map((card) => (
            <div
              key={card.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                background: "#fff",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--space-6)",
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: 8 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Payment Terminal Illustration ───── */

function PaymentTerminalIllustration() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        aspectRatio: "1 / 1.1",
        background: "rgba(230, 220, 210, 0.25)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Receipt */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 30,
          width: 140,
          background: "#fff",
          borderRadius: 8,
          padding: "12px 14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          fontSize: 10,
          fontFamily: "monospace",
          color: "#666",
          zIndex: 2,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 8, fontSize: 9 }}>22-10-2021</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 8, textTransform: "uppercase" }}>
          <span>Description</span><span>Subtotal</span>
        </div>
        <div style={{ borderBottom: "1px solid #eee", marginBottom: 4 }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
          <span>LOREM IPSUM</span><span>$100</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
          <span>LOREM IPSUM</span><span>$50</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span>LOREM IPSUM</span><span>$150</span>
        </div>
        <div style={{ borderBottom: "1px solid #eee", marginBottom: 6 }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 11 }}>
          <span>TOTAL</span><span>$552</span>
        </div>
      </div>

      {/* Terminal body */}
      <svg width="180" height="260" viewBox="0 0 180 260" fill="none" style={{ position: "relative", zIndex: 1 }}>
        {/* Terminal body */}
        <rect x="30" y="20" width="120" height="220" rx="16" fill="#3d3d5c" />
        {/* Screen */}
        <rect x="42" y="40" width="96" height="100" rx="8" fill="#1a1a2e" />
        {/* Payment approved text */}
        <text x="90" y="85" textAnchor="middle" fill="#4ade80" fontSize="12" fontFamily="sans-serif" fontWeight="600">Payment</text>
        <text x="90" y="102" textAnchor="middle" fill="#4ade80" fontSize="12" fontFamily="sans-serif" fontWeight="600">Approved</text>
        {/* Keypad */}
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <rect key={`p${r}${c}`} x={50 + c * 24} y={155 + r * 20} width="18" height="14" rx="3" fill="#4a4a6a" />
          ))
        )}
      </svg>
    </div>
  );
}

/* ───── Section 4: Hesitation ───── */

function HesitationSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: illustration */}
        <PaymentTerminalIllustration />

        {/* Right: text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "var(--space-8)",
            }}
          >
            Your busiest lanes can&rsquo;t afford hesitation
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-6)",
            }}
          >
            High-volume lanes operate under nonstop pressure. Large baskets, back-to-back transactions, and constant scanning leave no room for delay or inconsistency. When a lane slows down, lines build immediately and throughput suffers.
          </p>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-6)",
            }}
          >
            Mach Flex is designed to remove that risk by delivering sustained performance in environments where checkout never pauses. From scanning and pricing to payments and receipts, every interaction is optimized for continuous, high-throughput lane operation.
          </p>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              fontStyle: "italic",
              color: "var(--color-text-heading)",
              fontWeight: 600,
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Speed is not a feature. It&rsquo;s the speed you need.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Demand Card Visual ───── */

function DemandCardVisual({ badges }: { badges: { label: string; accent?: boolean; icon?: React.ReactNode }[] }) {
  return (
    <div
      style={{
        background: "#f9fafb",
        borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
        padding: "var(--space-8)",
        minHeight: 180,
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      {badges.map((b, i) => (
        <div
          key={i}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: "var(--radius-full)",
            background: b.accent ? "var(--color-primary)" : "#fff",
            color: b.accent ? "#fff" : "var(--color-text-heading)",
            fontSize: 13,
            fontWeight: 500,
            border: b.accent ? "none" : "1px solid var(--color-border)",
            boxShadow: b.accent ? "none" : "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          {b.icon}
          {b.label}
        </div>
      ))}
    </div>
  );
}

/* ───── Section 5: Demand ───── */

const demandCards = [
  {
    badges: [
      { label: "Peak traffic" },
      { label: "Stable checkout", icon: <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--color-primary)"><circle cx="10" cy="10" r="8" /></svg> },
      { label: "No slowdowns" },
      { label: "+$54.21", accent: true },
      { label: "+$128.21$", accent: true },
    ],
    title: "Checkout performance that holds up under constant volume",
    desc: "Mach Flex is engineered for sustained demand. Scanning, pricing, payments, and receipts remain responsive transaction after transaction, helping your busiest lanes maintain consistent speed throughout the day.",
    footer: "High volume does not mean sacrificing reliability.",
  },
  {
    badges: [
      { label: "Set once" },
      {
        label: "",
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" fill="var(--color-primary)" />
            <path d="M9 14h10M14 10v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      { label: "Apply everywhere", icon: <svg width="10" height="10" viewBox="0 0 10 10" fill="var(--color-text-heading)"><polygon points="5,0 10,10 0,10" /></svg> },
      { label: "Stay aligned" },
    ],
    title: "Pricing, tax, and inventory stay aligned across every lane",
    desc: "Every transaction runs through the SuperSonic POS platform, keeping pricing rules, tax settings, and inventory synchronized automatically across all lanes.",
    footer: "As volume increases, accuracy stays intact.",
  },
  {
    badges: [
      { label: "Unified hardware", icon: <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--color-text-heading)"><path d="M10 2a5 5 0 00-5 5v6a5 5 0 0010 0V7a5 5 0 00-5-5z" /></svg> },
      { label: "One system", icon: <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--color-primary)"><circle cx="10" cy="10" r="7" /></svg> },
      { label: "Fewer failures", icon: <RedBars /> },
    ],
    title: "Lane checkout hardware that works as one system",
    desc: "Mach Flex integrates directly with the peripherals your high-volume lanes depend on, including scanners, receipt printers, cash drawers, and payment devices.",
    footer: "Everything operates through SuperSonic POS, eliminating patchwork setups and reducing unexpected failures in your most critical checkout areas.",
  },
  {
    badges: [
      { label: "More volume", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-text-heading)" strokeWidth="1.5"><path d="M2 10l4-4 3 3 3-5" /></svg> },
      {
        label: "",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="8" width="4" height="10" rx="1" fill="var(--color-primary)" />
            <rect x="8" y="4" width="4" height="14" rx="1" fill="var(--color-primary)" opacity="0.7" />
            <rect x="14" y="1" width="4" height="17" rx="1" fill="var(--color-primary)" opacity="0.5" />
          </svg>
        ),
      },
      { label: "Smooth growth", icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-primary)" strokeWidth="1.5"><path d="M2 12l4-5 3 3 3-6" /></svg> },
    ],
    title: "Add lanes without rebuilding your operation",
    desc: "Mach Flex is part of the broader SuperSonic POS platform. As traffic grows, you can add lanes, devices, or locations without changing systems or retraining your team.",
    footer: "Your workflows stay familiar. Your data stays unified. Your operation scales cleanly.",
  },
];

function DemandSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div style={{ maxWidth: "var(--max-width-page)", margin: "0 auto" }}>
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
          Let your POS keep up with the demand
        </h2>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto var(--space-3)",
          }}
        >
          Mach Flex is built to remove friction from high-volume lanes, so your team can focus on moving customers through checkout instead of managing system slowdowns.
        </p>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--leading-relaxed)",
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto var(--space-16)",
          }}
        >
          This is a lane POS designed to keep pace with nonstop retail traffic.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }}>
          {demandCards.map((card) => (
            <div
              key={card.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <DemandCardVisual badges={card.badges} />
              <div style={{ padding: "var(--space-8)" }}>
                <h3 style={{ fontSize: "var(--text-body-lg)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: 8 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)", marginBottom: 8 }}>
                  {card.desc}
                </p>
                <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-body)", lineHeight: "var(--leading-relaxed)" }}>
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Mobile Payment Illustration ───── */

function MobilePaymentIllustration() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 380,
        aspectRatio: "1 / 1.1",
        background: "rgba(230, 220, 210, 0.25)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <svg width="200" height="280" viewBox="0 0 200 280" fill="none">
        {/* Phone body */}
        <rect x="50" y="20" width="100" height="200" rx="14" fill="#2d2d44" />
        {/* Screen */}
        <rect x="58" y="34" width="84" height="170" rx="8" fill="#f0f4f8" />
        {/* Status bar */}
        <text x="72" y="48" fill="#888" fontSize="7" fontFamily="sans-serif">12:45</text>
        <text x="128" y="48" fill="#888" fontSize="7" fontFamily="sans-serif">4G</text>
        {/* Card number dots */}
        <text x="100" y="68" textAnchor="middle" fill="#666" fontSize="10" fontFamily="sans-serif">* * * *</text>
        {/* Keypad */}
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect key={`mk${r}${c}`} x={72 + c * 22} y={80 + r * 28} width="16" height="20" rx="4" fill="#e2e8f0" />
          ))
        )}
        <text x="80" y="94" fill="#4a5568" fontSize="10" fontFamily="sans-serif">1</text>
        <text x="102" y="94" fill="#4a5568" fontSize="10" fontFamily="sans-serif">2</text>
        <text x="124" y="94" fill="#4a5568" fontSize="10" fontFamily="sans-serif">3</text>
        <text x="80" y="122" fill="#4a5568" fontSize="10" fontFamily="sans-serif">4</text>
        <text x="102" y="122" fill="#4a5568" fontSize="10" fontFamily="sans-serif">5</text>
        <text x="124" y="122" fill="#4a5568" fontSize="10" fontFamily="sans-serif">6</text>
        <text x="80" y="150" fill="#4a5568" fontSize="10" fontFamily="sans-serif">7</text>
        <text x="102" y="150" fill="#4a5568" fontSize="10" fontFamily="sans-serif">8</text>
        <text x="124" y="150" fill="#4a5568" fontSize="10" fontFamily="sans-serif">9</text>
        {/* Pay button */}
        <rect x="68" y="170" width="64" height="22" rx="6" fill="var(--color-primary)" />
        <text x="100" y="185" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="sans-serif" fontWeight="600">Pay $48 1,231.2</text>
        {/* Cancel button */}
        <rect x="68" y="195" width="64" height="16" rx="4" fill="#a78bfa" opacity="0.6" />

        {/* Credit card at angle */}
        <g transform="translate(10, 100) rotate(-15)">
          <rect width="70" height="44" rx="6" fill="#4ade80" opacity="0.8" />
          <rect x="6" y="14" width="16" height="12" rx="2" fill="#fff" opacity="0.5" />
          <circle cx="56" cy="34" r="6" fill="#fff" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

/* ───── Section 6: Realities ───── */

function RealitiesSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: illustration */}
        <MobilePaymentIllustration />

        {/* Right: text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "var(--space-8)",
            }}
          >
            Built for the realities of retail traffic
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-6)",
            }}
          >
            High-volume lanes demand hardware that holds up under continuous use. Mach Flex is designed for durability, stability, and long shifts in fast-moving retail environments.
          </p>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            This is a lane POS built to perform consistently from open to close, even under constant load.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Sphere Illustration ───── */

function SphereIllustration() {
  return (
    <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
        <defs>
          <radialGradient id="sphere-grad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#0aaeb8" />
          </radialGradient>
        </defs>
        <circle cx="110" cy="110" r="90" fill="url(#sphere-grad)" opacity="0.8" />
        <ellipse cx="110" cy="110" rx="88" ry="40" stroke="#fff" strokeWidth="1" opacity="0.3" />
        <ellipse cx="110" cy="110" rx="40" ry="88" stroke="#fff" strokeWidth="1" opacity="0.3" />
      </svg>

      {/* Floating labels */}
      {[
        { label: "Mobile POS", top: "5%", right: "5%" },
        { label: "Kiosks", top: "25%", right: "-5%" },
        { label: "Lanes", top: "55%", right: "-2%" },
        { label: "Mobile POS", top: "82%", right: "10%" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: item.top,
            right: item.right,
            background: "#fff",
            borderRadius: "var(--radius-full)",
            padding: "8px 18px",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-text-heading)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            whiteSpace: "nowrap",
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

/* ───── Section 7: Scale ───── */

function ScaleSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "var(--space-8)",
            }}
          >
            Scale high-volume checkout without disruption
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-6)",
            }}
          >
            Mach Flex supports growth without forcing change before you need it. As your business evolves, you can expand lanes, introduce mobile POS, or add self-service options while keeping the same core system and workflows.
          </p>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Your team does not need to relearn processes, and your data remains connected as you scale.
          </p>
        </div>

        {/* Right: sphere illustration */}
        <SphereIllustration />
      </div>
    </section>
  );
}

/* ───── Cloud Illustration ───── */

function CloudIllustration() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        aspectRatio: "1 / 1",
        background: "rgba(230, 220, 210, 0.2)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Scattered emoji icons */}
      {[
        { emoji: "\uD83D\uDCC8", top: "12%", left: "8%" },
        { emoji: "\uD83D\uDED2", top: "18%", right: "15%" },
        { emoji: "\uD83C\uDFE0", top: "45%", right: "8%" },
        { emoji: "\uD83D\uDCB3", bottom: "20%", right: "18%" },
        { emoji: "\uD83D\uDECD\uFE0F", bottom: "15%", left: "10%" },
        { emoji: "\uD83C\uDF08", top: "55%", left: "15%" },
      ].map((item, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            ...item,
            fontSize: 20,
            opacity: 0.5,
          }}
          aria-hidden="true"
        >
          {item.emoji}
        </span>
      ))}

      {/* Floating category badges */}
      {[
        { label: "Inventory", top: "20%", left: "5%" },
        { label: "Sales", top: "15%", right: "20%" },
        { label: "Operations", top: "45%", left: "10%" },
        { label: "Payments", top: "60%", right: "15%" },
        { label: "Performance", top: "75%", left: "15%" },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...b,
            background: "#fff",
            borderRadius: "var(--radius-full)",
            padding: "8px 18px",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-text-heading)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            whiteSpace: "nowrap",
          }}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}

/* ───── Section 8: Cloud ───── */

function CloudSection() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-padding)", background: "#fff" }}>
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* Left: illustration */}
        <CloudIllustration />

        {/* Right: text */}
        <div>
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: 800,
              color: "var(--color-text-heading)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "var(--space-8)",
            }}
          >
            Your POS connects to the rest of your business
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-6)",
            }}
          >
            Mach Flex does more than process high-volume transactions. Every sale feeds into the SuperSonic POS cloud platform, giving you real-time visibility into inventory, performance, and activity across your entire operation.
          </p>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-text-body)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-8)",
            }}
          >
            This is where you manage your business, not just your lanes.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              background: "var(--color-primary)",
              color: "#fff",
              borderRadius: "var(--radius-full)",
              fontWeight: 600,
              fontSize: "var(--text-body)",
              textDecoration: "none",
              border: "none",
            }}
          >
            Explore the SuperSonic POS Cloud <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── Section 9: Final CTA ───── */

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
            Ready to Upgrade Your Busiest Lanes?
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
            If your high-volume checkout lanes demand speed, stability, and endurance, Mach Flex delivers a POS built for nonstop performance and confidence at scale.
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
