import GridPattern from "@/components/ui/GridPattern";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function FinalCta() {
  return (
    <section
      style={{
        padding: "80px var(--page-padding) 0",
        maxWidth: "var(--max-width-page)",
        margin: "0 auto",
      }}
    >
      <div
        className="section-primary"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "30px",
          padding: "60px",
        }}
      >
        {/* Grid Pattern Overlay */}
        <GridPattern />

        {/* Centered Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              fontWeight: 700,
              color: "white",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Join The Petro Outlet Family Today!
          </h2>

          <p
            style={{
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-relaxed)",
              color: "white",
              fontWeight: 500,
              margin: 0,
              maxWidth: "1008px",
            }}
          >
            Joining Petro means more than joining a company; it&apos;s joining a
            community dedicated to elevating your business. Take the first step
            towards greatness today.
          </p>

          <div style={{ marginTop: "12px" }}>
            <button className="btn-glass">
              Request Demo
              <ArrowIcon color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
