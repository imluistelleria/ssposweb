import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { featureCards } from "@/lib/data";

export default function FeatureCards() {
  return (
    <section
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Section Heading */}
        <h2
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 700,
            color: "var(--color-gray-900)",
            textAlign: "center",
            margin: "0 0 64px 0",
          }}
        >
          Operate Smarter. Sell More. Stay Secure.
        </h2>

        {/* Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {featureCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#f9f9fb",
                borderRadius: "32px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon Area */}
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom: "24px",
                  position: "relative",
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "30px",
                  lineHeight: "var(--leading-tight)",
                  fontWeight: 700,
                  color: "var(--color-gray-900)",
                  margin: "0 0 12px 0",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-gray-600)",
                  fontWeight: 500,
                  margin: "0 0 24px 0",
                  flex: 1,
                }}
              >
                {card.description}
              </p>

              {/* Button */}
              <button
                className="btn-cta"
                style={{
                  width: "100%",
                  height: "60px",
                  borderRadius: "var(--radius-pill)",
                  background: "white",
                  border: "1px solid #eeeff4",
                }}
              >
                Start Now
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
