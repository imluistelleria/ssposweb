"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useState } from "react";

export default function PosPage() {
  return (
    <>
      <Header />
      <main>
        <PetroHero />
        <DesignedForGasStation />
        <WhySuperSonicPay />
        <ConnectedTools />
        <PricingSection />
        <OurProducts />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ───── 1. HERO: Fuel Smarter Decisions with SuperSonic Petro ───── */

function PetroHero() {
  return (
    <section
      style={{
        background: "var(--color-white)",
        paddingTop: "120px",
      }}
    >
      {/* Animation keyframes */}
      <style>{`
        @keyframes cardTap {
          0%   { transform: translate(100px, -80px) rotate(-15deg); opacity: 0; }
          10%  { transform: translate(100px, -80px) rotate(-15deg); opacity: 1; }
          30%  { transform: translate(0px, 0px) rotate(-6deg); opacity: 1; }
          38%  { transform: translate(-5px, 5px) rotate(-4deg); opacity: 1; }
          42%  { transform: translate(0px, 0px) rotate(-6deg); opacity: 1; }
          60%  { transform: translate(0px, 0px) rotate(-6deg); opacity: 1; }
          75%  { transform: translate(100px, -80px) rotate(-15deg); opacity: 1; }
          85%  { transform: translate(100px, -80px) rotate(-15deg); opacity: 0; }
          100% { transform: translate(100px, -80px) rotate(-15deg); opacity: 0; }
        }
        @keyframes nfcWave1 {
          0%   { transform: scale(0); opacity: 0; }
          32%  { transform: scale(0); opacity: 0; }
          38%  { transform: scale(0.5); opacity: 0.7; }
          50%  { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes nfcWave2 {
          0%   { transform: scale(0); opacity: 0; }
          36%  { transform: scale(0); opacity: 0; }
          42%  { transform: scale(0.5); opacity: 0.6; }
          54%  { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes nfcWave3 {
          0%   { transform: scale(0); opacity: 0; }
          40%  { transform: scale(0); opacity: 0; }
          46%  { transform: scale(0.5); opacity: 0.5; }
          58%  { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes approvedPopup {
          0%   { transform: translateY(20px); opacity: 0; }
          42%  { transform: translateY(20px); opacity: 0; }
          50%  { transform: translateY(0px); opacity: 1; }
          80%  { transform: translateY(0px); opacity: 1; }
          90%  { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes amountFloat {
          0%   { transform: translateY(10px); opacity: 0; }
          48%  { transform: translateY(10px); opacity: 0; }
          55%  { transform: translateY(0px); opacity: 1; }
          78%  { transform: translateY(0px); opacity: 1; }
          88%  { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(-10px); opacity: 0; }
        }
        @keyframes subtlePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10,174,184,0); }
          42%  { box-shadow: 0 0 0 0 rgba(10,174,184,0); }
          48%  { box-shadow: 0 0 0 12px rgba(10,174,184,0.15); }
          55%  { box-shadow: 0 0 0 20px rgba(10,174,184,0); }
        }
        @keyframes deviceFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes cardShadow {
          0%   { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1)); }
          30%  { filter: drop-shadow(0 8px 20px rgba(0,0,0,0.2)); }
          42%  { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.25)); }
          60%  { filter: drop-shadow(0 8px 20px rgba(0,0,0,0.2)); }
          100% { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1)); }
        }
      `}</style>

      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding) 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
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
              color: "var(--color-gray-900)",
              marginBottom: "24px",
            }}
          >
            Fuel Smarter
            <br />
            Decisions with
            <br />
            SuperSonic Petro
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "var(--color-gray-500)",
              maxWidth: "480px",
            }}
          >
            Built for modern gas stations, SuperSonic Petro is the back-office
            software that keeps your fuel business running efficiently. From wet
            stock control to shift-based reporting, we help station owners manage
            operations with confidence.
          </p>
        </div>

        {/* Right: Animated VP550 Scene */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "420px",
          }}
        >
          {/* Cream circle background */}
          <div
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "#f3efe9",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />

          {/* Product photo with float animation */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "520px",
              animation: "deviceFloat 4s ease-in-out infinite",
            }}
          >
            <Image
              src="/images/pos/vp550-side.png"
              alt="SuperSonic VP550 POS Terminal"
              width={800}
              height={306}
              style={{
                width: "100%",
                height: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
              }}
              priority
            />

            {/* ── NFC Waves (appear at tap point on device screen) ── */}
            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "18%",
                width: "80px",
                height: "80px",
                pointerEvents: "none",
              }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2.5px solid var(--color-primary)",
                    animation: `nfcWave${i} 5.5s ease-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* ── Credit Card (animated tap toward device) ── */}
            <div
              style={{
                position: "absolute",
                top: "-45%",
                right: "5%",
                animation: "cardTap 5.5s ease-in-out infinite",
                transformOrigin: "center center",
                pointerEvents: "none",
                zIndex: 3,
              }}
            >
              <svg
                width="160"
                height="100"
                viewBox="0 0 160 100"
                fill="none"
                style={{ animation: "cardShadow 5.5s ease-in-out infinite" }}
              >
                {/* Card body */}
                <rect width="160" height="100" rx="10" fill="#1a1a2e" />
                {/* Subtle gradient overlay */}
                <rect width="160" height="100" rx="10" fill="url(#heroCardGrad)" />
                <defs>
                  <linearGradient id="heroCardGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                {/* EMV Chip */}
                <rect x="14" y="18" width="32" height="24" rx="4" fill="#c9a84c" />
                <rect x="14" y="18" width="32" height="24" rx="4" stroke="#b8963f" strokeWidth="0.8" />
                <line x1="20" y1="24" x2="40" y2="24" stroke="#b8963f" strokeWidth="0.7" />
                <line x1="20" y1="28" x2="40" y2="28" stroke="#b8963f" strokeWidth="0.7" />
                <line x1="20" y1="32" x2="40" y2="32" stroke="#b8963f" strokeWidth="0.7" />
                <line x1="20" y1="36" x2="40" y2="36" stroke="#b8963f" strokeWidth="0.7" />
                <line x1="30" y1="18" x2="30" y2="42" stroke="#b8963f" strokeWidth="0.7" />

                {/* NFC / Contactless symbol */}
                <g transform="translate(58, 20)">
                  <path d="M4 16 Q10 8 16 16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M1 20 Q10 6 19 20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M-2 24 Q10 4 22 24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </g>

                {/* Card number */}
                <g transform="translate(14, 58)">
                  {[0, 1, 2, 3].map((g) => (
                    <g key={g} transform={`translate(${g * 34}, 0)`}>
                      {[0, 1, 2, 3].map((d) => (
                        <circle
                          key={d}
                          cx={d * 7 + 3}
                          cy="3"
                          r="2"
                          fill="rgba(255,255,255,0.45)"
                        />
                      ))}
                    </g>
                  ))}
                </g>

                {/* Cardholder name */}
                <rect x="14" y="74" width="55" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
                <rect x="14" y="82" width="35" height="4" rx="2" fill="rgba(255,255,255,0.15)" />

                {/* Mastercard logo */}
                <circle cx="126" cy="78" r="10" fill="#eb001b" opacity="0.85" />
                <circle cx="140" cy="78" r="10" fill="#f79e1b" opacity="0.85" />
              </svg>
            </div>

            {/* ── Payment Approved popup ── */}
            <div
              style={{
                position: "absolute",
                bottom: "-15%",
                right: "-5%",
                background: "white",
                borderRadius: "16px",
                padding: "14px 20px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                animation: "approvedPopup 5s ease-in-out infinite",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#ecfdf5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "subtlePulse 5s ease-in-out infinite",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", lineHeight: "18px" }}>
                  Payment Approved
                </p>
                <p style={{ fontSize: "12px", color: "var(--color-gray-500)", lineHeight: "16px" }}>
                  Visa •••• 4242
                </p>
              </div>
            </div>

            {/* ── Amount float ── */}
            <div
              style={{
                position: "absolute",
                top: "-20%",
                left: "10%",
                background: "white",
                borderRadius: "12px",
                padding: "10px 18px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                animation: "amountFloat 5s ease-in-out infinite",
                zIndex: 2,
              }}
            >
              <p style={{ fontSize: "11px", color: "var(--color-gray-500)", lineHeight: "14px" }}>
                Total
              </p>
              <p style={{ fontSize: "18px", fontWeight: 800, color: "var(--color-gray-900)", lineHeight: "24px" }}>
                $42.50
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 2. Designed for Gas Station Precision ───── */

function DesignedForGasStation() {
  return (
    <section
      style={{
        background: "#f5f5f5",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left: Isometric Illustration */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background glow */}
            <ellipse cx="200" cy="250" rx="160" ry="30" fill="#e8e8e8" opacity="0.5" />

            {/* Laptop/Monitor */}
            <g transform="translate(80, 40)">
              {/* Screen */}
              <rect x="0" y="0" width="180" height="120" rx="8" fill="#1e2044" />
              <rect x="8" y="8" width="164" height="96" rx="4" fill="#2a2d52" />
              {/* Chart bars */}
              <rect x="20" y="70" width="16" height="28" rx="2" fill="#0aaeb8" opacity="0.7" />
              <rect x="42" y="50" width="16" height="48" rx="2" fill="#0aaeb8" opacity="0.8" />
              <rect x="64" y="60" width="16" height="38" rx="2" fill="#7c5cfc" opacity="0.7" />
              <rect x="86" y="40" width="16" height="58" rx="2" fill="#0aaeb8" />
              <rect x="108" y="55" width="16" height="43" rx="2" fill="#7c5cfc" opacity="0.8" />
              <rect x="130" y="30" width="16" height="68" rx="2" fill="#0aaeb8" opacity="0.9" />
              {/* Line chart overlay */}
              <path d="M28 65 L50 48 L72 55 L94 35 L116 50 L138 25" stroke="#4ade80" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Legend dots */}
              <circle cx="30" cy="18" r="3" fill="#0aaeb8" />
              <rect x="38" y="16" width="24" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
              <circle cx="75" cy="18" r="3" fill="#7c5cfc" />
              <rect x="83" y="16" width="24" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
              {/* Stand */}
              <path d="M70 120 L110 120 L120 140 L60 140 Z" fill="#d1d1d6" />
              <rect x="60" y="138" width="60" height="4" rx="2" fill="#bcbcc4" />
            </g>

            {/* Phone */}
            <g transform="translate(240, 60)">
              <rect x="0" y="0" width="90" height="170" rx="14" fill="#1e2044" />
              <rect x="6" y="6" width="78" height="158" rx="10" fill="#2a2d52" />
              {/* Screen content - wave chart */}
              <path d="M14 100 Q30 70 45 90 T78 60" stroke="#0aaeb8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M14 110 Q30 85 45 100 T78 75" stroke="#7c5cfc" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
              {/* Stats */}
              <rect x="14" y="30" width="30" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
              <rect x="14" y="42" width="50" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
              {/* Play button */}
              <circle cx="45" cy="140" r="10" fill="rgba(255,255,255,0.1)" />
              <polygon points="42,135 42,145 50,140" fill="rgba(255,255,255,0.5)" />
            </g>

            {/* Floating elements */}
            <circle cx="60" cy="100" r="6" fill="#0aaeb8" opacity="0.3" />
            <circle cx="350" cy="80" r="8" fill="#7c5cfc" opacity="0.2" />
            <circle cx="180" cy="20" r="4" fill="#4ade80" opacity="0.4" />

            {/* Dollar sign floating */}
            <g transform="translate(30, 170)">
              <circle cx="15" cy="15" r="15" fill="#0aaeb8" opacity="0.15" />
              <text x="15" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0aaeb8" opacity="0.5">$</text>
            </g>
          </svg>
        </div>

        {/* Right: Text */}
        <div>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-gray-900)",
              marginBottom: "24px",
            }}
          >
            Designed for
            <br />
            Gas Station Precision
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "var(--color-gray-500)",
              marginBottom: "16px",
            }}
          >
            SuperSonic Petro is a powerful back-office system tailor-made for gas
            stations. It helps owners monitor fuel levels, manage cashier shifts,
            and generate compliance-ready reports with ease. Whether you&apos;re
            running a single pump or a high-traffic multi-lane station, Petro
            keeps operations tight and profitable.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "var(--color-gray-500)",
              marginBottom: "32px",
            }}
          >
            From wet stock control to loss prevention, Petro connects every
            corner of your business.
          </p>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              height: "48px",
              padding: "0 28px",
              background: "var(--gradient-primary)",
              border: "none",
              borderRadius: "var(--radius-pill)",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: "15px",
              color: "white",
              cursor: "pointer",
              transition: "transform 0.15s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,174,184,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Talk to a Specialist
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───── 3. Why SuperSonic Pay? ───── */

function WhySuperSonicPay() {
  const features = [
    {
      title: "Real-Time Fuel Tank Tracking",
      desc: "Powered by Veeder Root technology, monitor fuel levels accurately to prevent shortages and overstocking.",
    },
    {
      title: "Comprehensive Fuel Reporting",
      desc: "Generate detailed reports on fuel sales, inventory, and deliveries to make informed purchasing decisions.",
    },
    {
      title: "Inventory Management",
      desc: "Manage tobacco, lottery, and other products through an integrated inventory system.",
    },
    {
      title: "Seamless Integration",
      desc: "Integrates with industry leaders like Verifone and Gilbarco for streamlined operations.",
    },
    {
      title: "Loss Prevention",
      desc: "Integration with cameras to SuperSonic POS enhances security and reduces shrinkage.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "var(--max-width-page)",
        margin: "0 auto",
        padding: "96px var(--page-padding)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left: Text + Features */}
        <div>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-gray-900)",
              marginBottom: "20px",
            }}
          >
            Why SuperSonic Pay?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "var(--color-gray-500)",
              marginBottom: "36px",
            }}
          >
            Built for modern gas stations, SuperSonic Petro is the back-office
            software that keeps your fuel business running efficiently. From wet
            stock control to shift-based reporting, we help station owners manage
            operations with confidence.
          </p>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <TealCheck />
                <div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--color-gray-900)",
                      marginBottom: "4px",
                      lineHeight: "22px",
                    }}
                  >
                    {f.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "var(--color-gray-500)",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Our App */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--color-gray-900)",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Download Our App
            </p>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image
                src="/images/footer/app-store.png"
                alt="Download on the App Store"
                width={100}
                height={33}
              />
              <Image
                src="/images/footer/google-play.png"
                alt="Get it on Google Play"
                width={112}
                height={33}
              />
              <div
                style={{
                  width: "33px",
                  height: "33px",
                  borderRadius: "8px",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L6 9L9 12L12 6L15 10L18 7L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right: iPhone Dashboard Mockup */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "20px",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Cream circle background */}
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "340px",
                borderRadius: "50%",
                background: "#f3efe9",
                right: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            {/* iPhone frame */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "280px",
                background: "#1a1a2e",
                borderRadius: "40px",
                padding: "12px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                {/* Status bar */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 20px 6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  <span>5:04</span>
                  <div
                    style={{
                      width: "80px",
                      height: "24px",
                      background: "#1a1a2e",
                      borderRadius: "12px",
                    }}
                  />
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="#1a1a2e">
                      <rect x="0" y="6" width="3" height="4" rx="0.5" />
                      <rect x="4" y="4" width="3" height="6" rx="0.5" />
                      <rect x="8" y="1" width="3" height="9" rx="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Teal Header */}
                <div
                  style={{
                    background: "var(--color-primary)",
                    padding: "16px 20px 20px",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: 800, color: "white" }}>
                    Dashboard
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>(2 Stores)</span>
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: "4px" }}>
                      Latest Period
                    </span>
                  </div>
                </div>

                {/* Stats Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1px",
                    background: "#eee",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {[
                    { value: "184.33", label: "Gallons Sold" },
                    { value: "$836.60", label: "Inside Sales" },
                    { value: "$1,669.08", label: "Total Sales" },
                    { value: "77", label: "Transact..." },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "white", padding: "8px 6px", textAlign: "center" }}>
                      <p style={{ fontSize: "10px", fontWeight: 800, color: "#1a1a2e" }}>{s.value}</p>
                      <p style={{ fontSize: "6px", color: "#999", marginTop: "2px" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tabs */}
                <div style={{ display: "flex", borderBottom: "2px solid #eee" }}>
                  <div style={{ flex: 1, padding: "8px 0", textAlign: "center", borderBottom: "2px solid var(--color-primary)", marginBottom: "-2px" }}>
                    <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--color-primary)" }}>Data Graphs</span>
                  </div>
                  <div style={{ flex: 1, padding: "8px 0", textAlign: "center" }}>
                    <span style={{ fontSize: "9px", fontWeight: 600, color: "#aaa" }}>Top 10 SKUs</span>
                  </div>
                </div>

                {/* Revenue by Hour Chart */}
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: "7px", color: "#aaa", marginBottom: "2px" }}>Revenue</p>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>
                    Revenue by Hour
                  </p>
                  <svg width="100%" height="80" viewBox="0 0 220 80" fill="none">
                    {/* Y-axis labels */}
                    <text x="0" y="12" fontSize="6" fill="#ccc">600.0</text>
                    <text x="0" y="32" fontSize="6" fill="#ccc">400.0</text>
                    <text x="0" y="52" fontSize="6" fill="#ccc">200.0</text>
                    <text x="0" y="72" fontSize="6" fill="#ccc">0.0</text>
                    {/* Grid lines */}
                    <line x1="28" y1="10" x2="220" y2="10" stroke="#f0f0f0" strokeWidth="0.5" />
                    <line x1="28" y1="30" x2="220" y2="30" stroke="#f0f0f0" strokeWidth="0.5" />
                    <line x1="28" y1="50" x2="220" y2="50" stroke="#f0f0f0" strokeWidth="0.5" />
                    <line x1="28" y1="70" x2="220" y2="70" stroke="#f0f0f0" strokeWidth="0.5" />
                    {/* Chart line - sharp peak */}
                    <path
                      d="M30 68 L50 66 L70 64 L85 60 L95 50 L105 15 L115 55 L130 62 L150 65 L170 67 L190 68 L210 69"
                      stroke="#1a1a2e"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Fill under line */}
                    <path
                      d="M30 68 L50 66 L70 64 L85 60 L95 50 L105 15 L115 55 L130 62 L150 65 L170 67 L190 68 L210 69 L210 72 L30 72 Z"
                      fill="url(#chartGrad)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1a1a2e" />
                        <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Inside Sales by Hour */}
                <div style={{ padding: "0 16px 16px" }}>
                  <p style={{ fontSize: "7px", color: "#aaa", marginBottom: "2px" }}>Inside Sales</p>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>
                    Inside Sales by Hour
                  </p>
                  <svg width="100%" height="60" viewBox="0 0 220 60" fill="none">
                    <text x="0" y="10" fontSize="6" fill="#ccc">400.0</text>
                    <text x="0" y="30" fontSize="6" fill="#ccc">200.0</text>
                    <text x="0" y="50" fontSize="6" fill="#ccc">0.0</text>
                    <line x1="28" y1="8" x2="220" y2="8" stroke="#f0f0f0" strokeWidth="0.5" />
                    <line x1="28" y1="28" x2="220" y2="28" stroke="#f0f0f0" strokeWidth="0.5" />
                    <line x1="28" y1="48" x2="220" y2="48" stroke="#f0f0f0" strokeWidth="0.5" />
                    <path
                      d="M30 46 L50 44 L70 42 L85 38 L95 30 L105 12 L115 35 L130 40 L150 43 L170 45 L190 46 L210 47"
                      stroke="#1a1a2e"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 46 L50 44 L70 42 L85 38 L95 30 L105 12 L115 35 L130 40 L150 43 L170 45 L190 46 L210 47 L210 50 L30 50 Z"
                      fill="#1a1a2e"
                      opacity="0.08"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 4. Connected Tools & Devices ───── */

function ConnectedTools() {
  const devices = [
    {
      name: "Unattended Self-Service",
      desc: "Increase unassisted sales with our range of customizable unattended self-service kiosks and terminals.",
      device: "tablet",
    },
    {
      name: "Countertop",
      desc: "Enhance the customer experience with a seamless payment process while maximizing counter space.",
      device: "countertop",
    },
    {
      name: "Mobile",
      desc: "Take your sales anywhere your business takes you with our quality line of point of sale (POS) products.",
      device: "mobile",
    },
    {
      name: "PIN Pads",
      desc: "Interactive and reliable, our secure PIN pads were built with convenience and security in mind.",
      device: "pinpad",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "var(--max-width-page)",
        margin: "0 auto",
        padding: "96px var(--page-padding)",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "44px",
          fontWeight: 900,
          color: "var(--color-gray-900)",
          textAlign: "center",
          marginBottom: "56px",
        }}
      >
        Connected Tools & Devices
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {devices.map((d) => (
          <div
            key={d.name}
            className="card"
            style={{
              padding: "0",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Device image area */}
            <div
              style={{
                height: "200px",
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <DeviceIllustration type={d.device} />
            </div>
            {/* Text */}
            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--color-gray-900)",
                  marginBottom: "8px",
                  lineHeight: "22px",
                }}
              >
                {d.name}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "var(--color-gray-500)",
                  marginBottom: "20px",
                }}
              >
                {d.desc}
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--color-gray-900)",
                  textDecoration: "none",
                }}
              >
                Start Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── 5. Consulting: Pricebook Creation ───── */

function PricingSection() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  const professionalFeatures = [
    "Company Wide Pricebook Management",
    "Product Scanning & Department Management",
    "Flexible Reporting Dashboard",
    "Advanced Reporting",
    "Mobile App",
    "Company Wide Pricebook Management",
    "Tobacco Scan Data Program",
    "Tobacco Scan Data Loyalty",
    "Promotion Management",
    "Shelving Label Printer Integration",
    "Lottery Inventory Management",
    "LPA Receipt Filtering!",
    "Unlimited User Accounts",
    "24/7 Phone Support",
    "User Permission Management",
  ];

  const businessFeatures = [
    "Everything in Professional",
    "Veeder-Root TLS Integration",
    "Veeder-Root TLS Auto-Ordering & Low Gas Alerting",
    "Veeder-Root TLS Shrinkage & Gas Reconciliation",
    "Store-Specific Pricing",
    "Slow Moving Inventory",
    "Purchase Order Generator",
    "Clock In/Out & Payroll Calculation",
    "Inventory Reporting & Shrinkage Analysis",
    "Vendor Electronic Invoice Receiving (EDI)",
    "Veeder-Root TLS Shrinkage & Gas Reconciliation",
    "Store-Specific Pricing",
    "Store Inventory",
    "Slow Moving Inventory",
    "Purchase Order Generator",
    "Clock In/Out & Payroll Calculation",
    "Inventory Reporting & Shrinkage Analysis",
    "Vendor Electronic Invoice Receiving (EDI)",
    "In Counter Scale Integration",
    "24/7 Phone Support",
    "Check Writing",
  ];

  const enterpriseFeatures = [
    "Custom Onboarding",
    "Custom Development",
    "24/7 Phone Support",
    "Dedicated Account Manager",
  ];

  return (
    <section
      style={{
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 900,
              color: "var(--color-gray-900)",
              marginBottom: "16px",
            }}
          >
            Consulting: Pricebook Creation
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "var(--color-gray-500)",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            Never scanned anything before? We can send somebody out to scan your
            store and get you a pricebook for your store in no time.
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--color-white)",
              borderRadius: "var(--radius-pill)",
              padding: "4px",
              border: "1px solid var(--color-gray-200)",
            }}
          >
            <button
              onClick={() => setBilling("annual")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "inherit",
                background: billing === "annual" ? "var(--color-gray-900)" : "transparent",
                color: billing === "annual" ? "white" : "var(--color-gray-500)",
                transition: "all 0.2s ease",
              }}
            >
              Bill Annually
              <span
                style={{
                  background: billing === "annual" ? "rgba(255,255,255,0.2)" : "var(--color-gray-200)",
                  color: billing === "annual" ? "white" : "var(--color-gray-600)",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                Save 20%
              </span>
            </button>
            <button
              onClick={() => setBilling("monthly")}
              style={{
                padding: "10px 20px",
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "inherit",
                background: billing === "monthly" ? "var(--color-gray-900)" : "transparent",
                color: billing === "monthly" ? "white" : "var(--color-gray-500)",
                transition: "all 0.2s ease",
              }}
            >
              Bill Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Professional */}
          <div
            style={{
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 28px",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-gray-200)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={{ fontSize: "16px" }}>✨</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-gray-900)" }}>
                Professional
              </h3>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "42px", fontWeight: 900, color: "var(--color-gray-900)", lineHeight: 1 }}>
                ${billing === "annual" ? "39" : "49"}
              </span>
              <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--color-gray-500)", marginLeft: "4px" }}>
                / per month
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)", marginBottom: "24px" }}>
              Get everything you need to streamline your business, reduce shrinkage, and eliminate inefficiencies.
            </p>
            <button
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--color-gray-200)",
                background: "var(--color-white)",
                color: "var(--color-gray-900)",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "32px",
              }}
            >
              Contact Us <ArrowRight size={14} />
            </button>

            <PricingFeatureList features={professionalFeatures} />
          </div>

          {/* Business (Most Popular) */}
          <div
            style={{
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 28px",
              boxShadow: "var(--shadow-lg)",
              border: "2px solid var(--color-primary)",
              transform: "scale(1.02)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "16px" }}>✨</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-gray-900)" }}>
                  Business
                </h3>
              </div>
              <span
                style={{
                  background: "var(--color-gray-100)",
                  color: "var(--color-gray-900)",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Most Popular
              </span>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontSize: "42px", fontWeight: 900, color: "var(--color-gray-900)", lineHeight: 1 }}>
                ${billing === "annual" ? "39" : "49"}
              </span>
              <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--color-gray-500)", marginLeft: "4px" }}>
                / per month
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)", marginBottom: "24px" }}>
              Perfect for stations seeking advanced tracking and aiming to reach the next level.
            </p>
            <button
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "var(--radius-pill)",
                border: "none",
                background: "var(--color-primary)",
                color: "white",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "32px",
              }}
            >
              Contact Us <ArrowRight size={14} />
            </button>

            <PricingFeatureList features={businessFeatures} />
          </div>

          {/* Enterprise */}
          <div
            style={{
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 28px",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-gray-200)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={{ fontSize: "16px" }}>✨</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-gray-900)" }}>
                Enterprise
              </h3>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "var(--color-primary)",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Let&apos;s Talk
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "22px", color: "var(--color-gray-500)", marginBottom: "24px" }}>
              Our enterprise plan offers comprehensive solutions to streamline operations, mitigate losses, and enhance overall efficiency.
            </p>
            <button
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--color-gray-200)",
                background: "var(--color-white)",
                color: "var(--color-gray-900)",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "32px",
              }}
            >
              Contact Us <ArrowRight size={14} />
            </button>

            <PricingFeatureList features={enterpriseFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── 6. Our Products ───── */

function OurProducts() {
  const products = [
    {
      name: "SuperSonic",
      sub: "CLOUD",
      color1: "#0aaeb8",
      color2: "#519FFF",
      desc: "Access your back-office data anywhere. Manage inventory, view reports, and control pricing across locations\u2014fully cloud-based.",
    },
    {
      name: "SuperSonic",
      sub: "PETRO",
      color1: "#0aaeb8",
      color2: "#0aaeb8",
      desc: "Access your back-office data anywhere. Manage inventory, view reports, and control pricing across locations\u2014fully cloud-based.",
    },
    {
      name: "SuperSonic",
      sub: "PAY",
      color1: "#0aaeb8",
      color2: "#7c5cfc",
      desc: "Access your back-office data anywhere. Manage inventory, view reports, and control pricing across locations\u2014fully cloud-based.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "var(--max-width-page)",
        margin: "0 auto",
        padding: "96px var(--page-padding)",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "44px",
          fontWeight: 900,
          color: "var(--color-gray-900)",
          textAlign: "center",
          marginBottom: "56px",
        }}
      >
        Our Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.sub}
            className="card"
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Product Logo */}
            <div style={{ marginBottom: "8px" }}>
              <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
                <defs>
                  <linearGradient id={`prodGrad-${p.sub}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={p.color1} />
                    <stop offset="100%" stopColor={p.color2} />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="24"
                  fontFamily="cursive, serif"
                  fontSize="22"
                  fontWeight="bold"
                  fontStyle="italic"
                  fill={`url(#prodGrad-${p.sub})`}
                >
                  SuperSonic
                </text>
                <text
                  x="0"
                  y="44"
                  fontFamily="system-ui, sans-serif"
                  fontSize="16"
                  fontWeight="900"
                  letterSpacing="3"
                  fill={`url(#prodGrad-${p.sub})`}
                >
                  {p.sub}
                </text>
              </svg>
            </div>

            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--color-gray-900)",
              }}
            >
              SuperSonic
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "22px",
                color: "var(--color-gray-500)",
                flex: 1,
              }}
            >
              {p.desc}
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--color-gray-900)",
                textDecoration: "none",
                marginTop: "8px",
                width: "fit-content",
                padding: "10px 20px",
                border: "1px solid var(--color-gray-200)",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Start Now <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── 7. Final CTA ───── */

function FinalCta() {
  return (
    <section
      style={{
        maxWidth: "var(--max-width-content)",
        margin: "0 auto",
        padding: "0 var(--page-padding) 96px",
      }}
    >
      <div
        style={{
          background: "var(--color-primary)",
          borderRadius: "var(--radius-lg)",
          padding: "64px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="grid-pattern" style={{ opacity: 0.3 }}>
          {Array.from({ length: 300 }).map((_, i) => (
            <div key={i} className="grid-cell" />
          ))}
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "36px",
              lineHeight: "44px",
              fontWeight: 900,
              color: "white",
              marginBottom: "16px",
            }}
          >
            Get SuperSonic POS Now
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "520px",
              margin: "0 auto 32px",
            }}
          >
            Schedule a time with an onboarding specialist to get a demo and
            discuss the next steps.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "48px",
                padding: "0 28px",
                background: "transparent",
                border: "2px solid white",
                borderRadius: "var(--radius-pill)",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "15px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Get Demo <ArrowRight size={16} />
            </button>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 28px",
                background: "white",
                border: "none",
                borderRadius: "var(--radius-pill)",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "15px",
                color: "var(--color-gray-900)",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Shared Components ───── */

function ArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TealCheck() {
  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        background: "var(--color-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "1px",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PricingFeatureList({ features }: { features: string[] }) {
  return (
    <div>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "var(--color-gray-900)",
          marginBottom: "16px",
        }}
      >
        What&apos;s Included:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {features.map((f, i) => (
          <div
            key={`${f}-${i}`}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              style={{ flexShrink: 0, marginTop: "1px" }}
            >
              <circle cx="12" cy="12" r="10" fill="var(--color-primary)" opacity="0.15" />
              <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "var(--color-gray-600)",
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeviceIllustration({ type }: { type: string }) {
  if (type === "tablet") {
    // Unattended Self-Service - Ruggedized tablet
    return (
      <svg width="100" height="140" viewBox="0 0 100 140" fill="none">
        <rect x="10" y="5" width="80" height="130" rx="8" fill="#2d2d2d" />
        <rect x="15" y="15" width="70" height="100" rx="4" fill="#3a3a3a" />
        <rect x="18" y="18" width="64" height="94" rx="2" fill="#4a90d9" opacity="0.8" />
        {/* Screen content */}
        <rect x="24" y="28" width="52" height="4" rx="2" fill="white" opacity="0.6" />
        <rect x="24" y="38" width="36" height="3" rx="1.5" fill="white" opacity="0.4" />
        <rect x="24" y="50" width="52" height="24" rx="3" fill="white" opacity="0.2" />
        <rect x="24" y="80" width="24" height="20" rx="3" fill="white" opacity="0.2" />
        <rect x="52" y="80" width="24" height="20" rx="3" fill="white" opacity="0.2" />
        {/* Home button */}
        <circle cx="50" cy="125" r="5" fill="#444" />
      </svg>
    );
  }
  if (type === "countertop") {
    // PAX-style countertop terminal
    return (
      <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
        {/* Base */}
        <path d="M20 100 Q70 115 120 100 L115 105 Q70 120 25 105 Z" fill="#e0e0e0" />
        {/* Body */}
        <rect x="30" y="20" width="80" height="80" rx="10" fill="#f0f0f0" />
        <rect x="25" y="15" width="90" height="70" rx="10" fill="white" stroke="#ddd" strokeWidth="1" />
        {/* Screen */}
        <rect x="32" y="22" width="76" height="50" rx="6" fill="#1e2044" />
        {/* Screen content */}
        <rect x="40" y="30" width="40" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
        <rect x="40" y="38" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
        <rect x="40" y="48" width="52" height="16" rx="2" fill="#0aaeb8" opacity="0.5" />
        {/* Card slot */}
        <rect x="110" y="40" width="8" height="25" rx="2" fill="#ccc" />
        <rect x="112" y="45" width="4" height="15" rx="1" fill="#aaa" />
        {/* Contactless symbol */}
        <g transform="translate(92, 78)">
          <path d="M4 8 Q8 4 12 8" stroke="#aaa" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M2 12 Q8 4 14 12" stroke="#aaa" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
  if (type === "mobile") {
    // Mobile handheld terminal
    return (
      <svg width="80" height="140" viewBox="0 0 80 140" fill="none">
        {/* Device body */}
        <rect x="10" y="0" width="60" height="120" rx="12" fill="white" stroke="#e0e0e0" strokeWidth="1" />
        {/* Screen */}
        <rect x="15" y="10" width="50" height="80" rx="6" fill="#1e2044" />
        {/* Screen content */}
        <rect x="20" y="18" width="30" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
        <rect x="20" y="26" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="40" cy="50" r="12" fill="#0aaeb8" opacity="0.4" />
        <path d="M36 50 L38.5 52.5 L44 47" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="22" y="68" width="36" height="8" rx="4" fill="#0aaeb8" opacity="0.6" />
        <text x="40" y="74" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">PAY</text>
        {/* Camera */}
        <circle cx="40" cy="5" r="2" fill="#e0e0e0" />
        {/* Chin area */}
        <rect x="15" y="96" width="50" height="18" rx="3" fill="#f5f5f5" />
        {/* NFC symbol */}
        <g transform="translate(32, 99)">
          <path d="M4 10 Q8 5 12 10" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M2 13 Q8 5 14 13" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
  if (type === "pinpad") {
    // PIN Pad device
    return (
      <svg width="80" height="140" viewBox="0 0 80 140" fill="none">
        {/* Device body */}
        <rect x="5" y="0" width="70" height="135" rx="10" fill="#2d2d2d" />
        {/* Screen */}
        <rect x="12" y="8" width="56" height="40" rx="4" fill="#3a3a3a" />
        <rect x="15" y="11" width="50" height="34" rx="2" fill="#0aaeb8" opacity="0.3" />
        {/* Screen content */}
        <rect x="20" y="16" width="30" height="4" rx="2" fill="white" opacity="0.5" />
        <text x="40" y="36" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" opacity="0.8">$42.50</text>
        {/* Keypad */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={15 + col * 19}
              y={56 + row * 18}
              width="14"
              height="12"
              rx="3"
              fill="#444"
            />
          ))
        )}
        {/* Bottom row */}
        <rect x="15" y={56 + 3 * 18} width="14" height="12" rx="3" fill="#c0392b" />
        <rect x={15 + 19} y={56 + 3 * 18} width="14" height="12" rx="3" fill="#444" />
        <rect x={15 + 38} y={56 + 3 * 18} width="14" height="12" rx="3" fill="#27ae60" />
        {/* NFC area */}
        <g transform="translate(28, 128)">
          <path d="M4 4 Q12 0 20 4" stroke="#555" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M7 7 Q12 3 17 7" stroke="#555" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
  return null;
}
