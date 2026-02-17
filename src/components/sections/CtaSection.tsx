import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function CtaSection() {
  return (
    <section
      style={{
        padding: "0 var(--page-padding)",
        maxWidth: "var(--max-width-page)",
        margin: "0 auto",
      }}
    >
      <div
        className="section-primary"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          padding: "80px",
          overflow: "hidden",
          borderRadius: "30px",
          position: "relative",
          alignItems: "center",
        }}
      >
        {/* Left - Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            Multi-Store Store Management
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "white",
              fontWeight: 500,
              margin: 0,
            }}
          >
            From your smartphone or any computer, change merchandise or fuel
            prices once and have them updated instantly across all your stores
            and pumps.
          </p>

          <div>
            <button
              className="btn-cta"
              style={{ width: "190px" }}
            >
              Get Demo
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* Right - Device Image */}
        <div
          style={{
            position: "relative",
            width: "400px",
            height: "400px",
            justifySelf: "center",
          }}
        >
          {/* Background circle */}
          <Image
            src="/images/cta/bg-circle.svg"
            alt=""
            fill
            style={{ objectFit: "contain" }}
            aria-hidden="true"
          />
          {/* Device */}
          <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
            <Image
              src="/images/cta/device.png"
              alt="SuperSonic POS device"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
