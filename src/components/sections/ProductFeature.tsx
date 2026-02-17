import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function ProductFeature() {
  return (
    <section
      style={{
        padding: "96px 0",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left - Illustration Placeholder */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            maxWidth: "520px",
          }}
        >
          <Image
            src="/images/features/card-icon-1.svg"
            alt="Multi-Store Management illustration"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Right - Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: "var(--leading-tight)",
              fontWeight: 700,
              color: "var(--color-gray-900)",
              margin: 0,
            }}
          >
            Multi-Store Store Management
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-gray-500)",
              margin: 0,
              fontWeight: 500,
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
      </div>
    </section>
  );
}
