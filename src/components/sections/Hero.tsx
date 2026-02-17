import Image from "next/image";
import GridPattern from "@/components/ui/GridPattern";
import { partnerLogos } from "@/lib/data";

const floatingCards = [
  { name: "Martin Leo", amount: "$2,729", top: "12%", right: "2%", avatar: "M" },
  { name: "Lucy Deli", amount: "$5,729", top: "32%", right: "38%", avatar: "L" },
  { name: "Alise Lou", amount: "$6,268", bottom: "28%", right: "4%", avatar: "A" },
  { name: "Rex Bob", amount: "$2,629", bottom: "10%", right: "30%", avatar: "R" },
];

function BagIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--color-primary)",
        overflow: "hidden",
        minHeight: "816px",
      }}
    >
      {/* Grid Pattern Overlay */}
      <GridPattern />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "120px var(--page-padding) 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <h1
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            Shrink Shrinkage. Operate Anywhere. Drive Sales & Earn Money.
          </h1>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "white",
              fontWeight: 500,
              margin: 0,
              maxWidth: "520px",
            }}
          >
            SuperSonic empowers you to manage sales, reduce shrinkage, and
            operate seamlessly—anytime, anywhere.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <button className="btn-primary">
              <span className="btn-icon">
                <BagIcon />
              </span>
              Sign Up Free
            </button>
            <button className="btn-secondary">Speak to Human</button>
          </div>

          {/* Partner Logos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span
              style={{
                fontSize: "var(--text-body-sm)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-caps)",
              }}
            >
              Our Trusted Partners
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
              }}
            >
              {partnerLogos.map((partner) => (
                <span
                  key={partner.name}
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "18px",
                    opacity: 0.8,
                    letterSpacing: "0.5px",
                  }}
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - POS Mockup with Floating Cards */}
        <div style={{ position: "relative", minHeight: "560px" }}>
          {/* POS Terminal Mockup */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/hero/hero-mockup.svg"
              alt="SuperSonic POS terminal"
              width={480}
              height={480}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Floating Customer Cards */}
          {floatingCards.map((card) => (
            <div
              key={card.name}
              style={{
                position: "absolute",
                top: card.top,
                right: card.right,
                bottom: card.bottom,
                background: "white",
                borderRadius: "var(--radius-md)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "var(--shadow-lg)",
                zIndex: 2,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {card.avatar}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--color-gray-900)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {card.name}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--color-gray-500)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {card.amount}
                </p>
              </div>
            </div>
          ))}

          {/* Decorative Sparkles */}
          <SparkleIcon className="absolute top-[8%] right-[22%]" />
          <SparkleIcon className="absolute top-[50%] right-[0%]" />
          <SparkleIcon className="absolute bottom-[18%] right-[42%]" />
          <SparkleIcon className="absolute bottom-[5%] right-[12%]" />
        </div>
      </div>
    </section>
  );
}
