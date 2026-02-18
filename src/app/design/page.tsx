"use client";

export default function DesignSystem() {
  return (
    <div style={{ background: "#f8f9fb", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "var(--color-primary)",
          padding: "48px 80px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "var(--text-display)",
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-display)",
            fontWeight: 900,
            color: "white",
          }}
        >
          Brand Guidelines
        </h1>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            opacity: 0.8,
            marginTop: "8px",
          }}
        >
          SuperSonic POS — Brand identity, visual standards &amp; web design system
        </p>
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            lineHeight: "var(--leading-relaxed)",
            opacity: 0.6,
            marginTop: "4px",
          }}
        >
          For designers, marketers, partners, and AI agents
        </p>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 80px" }}>
        {/* TABLE OF CONTENTS */}
        <Section title="Table of Contents">
          <h3 style={{ fontSize: "16px", fontWeight: 900, color: "var(--color-gray-900)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Brand Identity</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 48px", marginBottom: "32px" }}>
            {[
              "1. Brand Overview",
              "2. Logo Usage",
              "3. Brand Voice & Messaging",
              "4. Photography & Imagery",
              "5. Social Media",
              "6. Physical Products & Packaging",
              "7. Event & Trade Shows",
              "8. Billboards & Outdoor",
              "9. Print Materials",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.split(". ")[1]?.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  padding: "4px 0",
                }}
              >
                {item}
              </a>
            ))}
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: 900, color: "var(--color-gray-900)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Web Design System</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 48px" }}>
            {[
              "10. Architecture & Conventions",
              "11. Colors",
              "12. Typography",
              "13. Spacing",
              "14. Layout",
              "15. Border Radius",
              "16. Shadows",
              "17. Glass Effect",
              "18. Buttons",
              "19. Cards",
              "20. Badge",
              "21. Feature Tabs",
              "22. Grid Pattern Overlay",
              "23. Icon System",
              "24. Section Patterns",
              "25. Navigation & Dropdowns",
              "26. Animation & Interaction",
              "27. Data Architecture",
              "28. File Structure",
              "29. Utility Classes",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.split(". ")[1]?.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  padding: "4px 0",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════ */}
        {/* ═══════════ BRAND IDENTITY (Sections 1–9) ═══════ */}
        {/* ═══════════════════════════════════════════════════ */}

        {/* ===== 1. BRAND OVERVIEW ===== */}
        <Section title="1. Brand Overview" id="brand-overview">
          <SubSection title="Mission Statement">
            <div style={{ background: "var(--color-primary)", borderRadius: "16px", padding: "32px 40px", color: "white", fontSize: "20px", fontWeight: 700, lineHeight: "1.5", textAlign: "center" }}>
              &ldquo;Empowering independent retailers with enterprise-grade technology.&rdquo;
            </div>
          </SubSection>

          <SubSection title="Brand Values">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {[
                { name: "Reliability", desc: "Built for 24/7 retail operations. Our systems never let merchants down." },
                { name: "Speed", desc: "Faster checkout, faster onboarding, faster support — speed is in our DNA." },
                { name: "Simplicity", desc: "Enterprise power without enterprise complexity. Intuitive for every user." },
                { name: "Empowerment", desc: "Giving independent retailers the tools that were once only available to big chains." },
              ].map((v) => (
                <div key={v.name} style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1px solid var(--color-gray-200)" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                    <span style={{ color: "white", fontWeight: 900, fontSize: "18px" }}>{v.name[0]}</span>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "6px" }}>{v.name}</p>
                  <p style={{ fontSize: "13px", color: "var(--color-gray-500)", lineHeight: "20px" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Brand Personality">
            <TokenTable items={[
              { name: "Confident", value: "We know our product is best-in-class — but we never talk down to others" },
              { name: "Approachable", value: "Technical excellence communicated in clear, human language" },
              { name: "Modern", value: "Cutting-edge technology, clean aesthetics, forward-looking" },
              { name: "Technical but Human", value: "We respect the intelligence of our merchants while keeping things simple" },
            ]} />
          </SubSection>

          <SubSection title="Taglines">
            <div style={{ marginBottom: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-gray-500)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>Primary Tagline</p>
              <p style={{ fontSize: "24px", fontWeight: 900, color: "var(--color-gray-900)" }}>Shrink Shrinkage. Operate Anywhere. Drive Sales.</p>
            </div>
            <TokenTable items={[
              { name: "C-Stores", value: "The All-in-One POS for Convenience Stores" },
              { name: "Grocery", value: "Modern POS Built for Grocery" },
              { name: "Liquor", value: "Smarter POS for Liquor Stores" },
              { name: "Vape & Smoke", value: "POS Built for Vape & Smoke Shops" },
              { name: "Petro / Fuel", value: "Fuel & Forecourt, Fully Integrated" },
              { name: "Payments", value: "Fast, Secure, Integrated Payments" },
            ]} />
          </SubSection>
        </Section>

        {/* ===== 2. LOGO USAGE ===== */}
        <Section title="2. Logo Usage" id="logo-usage">
          <SubSection title="Logo Files">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {[
                { file: "logo-dark.svg", bg: "#ffffff", border: true, label: "Dark on White (SVG)" },
                { file: "logo-white.svg", bg: "var(--color-primary)", border: false, label: "White on Teal (SVG)" },
                { file: "logo-dark.png", bg: "#ffffff", border: true, label: "Dark on White (PNG)" },
                { file: "logo-white.png", bg: "var(--color-gray-900)", border: false, label: "White on Dark (PNG)" },
              ].map((l) => (
                <div key={l.file} style={{ textAlign: "center" }}>
                  <div style={{ background: l.bg, borderRadius: "12px", padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", border: l.border ? "1px solid var(--color-gray-200)" : "none", minHeight: "100px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/logo/${l.file}`} alt={l.label} style={{ height: "46px", width: "auto" }} />
                  </div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-500)", marginTop: "8px" }}>{l.label}</p>
                  <code style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{l.file}</code>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Logo on Backgrounds">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
              {[
                { bg: "#ffffff", logo: "logo-dark.svg", label: "White background", border: true },
                { bg: "var(--color-primary)", logo: "logo-white.svg", label: "Teal background", border: false },
                { bg: "var(--color-gray-900)", logo: "logo-white.svg", label: "Dark background", border: false },
                { bg: "linear-gradient(103.17deg, #0DDED1 5.2%, #519FFF 95.19%)", logo: "logo-white.svg", label: "Gradient background", border: false },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: "center" }}>
                  <div style={{ background: item.bg, borderRadius: "12px", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px", border: item.border ? "1px solid var(--color-gray-200)" : "none" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/logo/${item.logo}`} alt="" style={{ height: "40px", width: "auto" }} />
                  </div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-500)", marginTop: "8px" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Clear Space">
            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
              <div style={{ border: "2px dashed var(--color-primary)", borderRadius: "12px", padding: "32px 48px", position: "relative", background: "white" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo/logo-dark.svg" alt="Logo with clear space" style={{ height: "46px", width: "auto", display: "block" }} />
                <SpecCallout label="1x height" />
                <div style={{ position: "absolute", top: "8px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "var(--color-primary)", fontWeight: 700 }}>1x</div>
                <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "var(--color-primary)", fontWeight: 700 }}>1x</div>
                <div style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "10px", color: "var(--color-primary)", fontWeight: 700 }}>1x</div>
                <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", fontSize: "10px", color: "var(--color-primary)", fontWeight: 700 }}>1x</div>
              </div>
              <div style={{ fontSize: "14px", color: "var(--color-gray-500)", lineHeight: "22px" }}>
                <p style={{ marginBottom: "8px" }}>Maintain a minimum clear space of <strong style={{ color: "var(--color-gray-900)" }}>1x the logo height</strong> on all sides.</p>
                <p>No text, graphics, or other logos should appear within this zone.</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Minimum Sizes">
            <TokenTable items={[
              { name: "Digital (screen)", value: "40px height minimum" },
              { name: "Print", value: '0.75" (19mm) height minimum' },
              { name: "Favicon", value: "16×16px — use simplified mark only" },
              { name: "Social avatar", value: "Logo mark on teal circle, minimum 32×32px" },
            ]} />
          </SubSection>

          <SubSection title="Logo Misuse">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {[
                { title: "Stretched or distorted", desc: "Never change the logo proportions" },
                { title: "Wrong colors", desc: "Never use colors outside the brand palette" },
                { title: "Too small", desc: "Never display below minimum size (40px digital)" },
                { title: "On busy backgrounds", desc: "Never place on cluttered images without contrast" },
                { title: "Rotated or skewed", desc: "Always keep the logo level and straight" },
                { title: "Added effects", desc: "No drop shadows, glows, outlines, or 3D effects" },
              ].map((m) => (
                <DontExample key={m.title} title={m.title}>
                  <p>{m.desc}</p>
                </DontExample>
              ))}
            </div>
          </SubSection>
        </Section>

        {/* ===== 3. BRAND VOICE & MESSAGING ===== */}
        <Section title="3. Brand Voice & Messaging" id="brand-voice-messaging">
          <SubSection title="Tone Attributes">
            <TokenTable items={[
              { name: "Confident", value: "Not arrogant — we lead with product strength, not competitor bashing" },
              { name: "Technical", value: "Not jargon-heavy — explain complex features in accessible language" },
              { name: "Empowering", value: "Not patronizing — respect the merchant's expertise and intelligence" },
              { name: "Urgent", value: "Not pushy — create momentum through value, not pressure" },
              { name: "Friendly", value: "Not casual — professional warmth, not slang or informality" },
            ]} />
          </SubSection>

          <SubSection title="Word Choice">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <DoExample title="Use these words">
                <p>Empower, streamline, enterprise-grade, intuitive, integrated, real-time, all-in-one, shrink shrinkage, drive sales, modern, fast, reliable, secure</p>
              </DoExample>
              <DontExample title="Avoid these words">
                <p>Cheap, basic, simple (as a selling point), just, only, honestly, revolutionary, disruptive, game-changing, synergy, leverage (as verb)</p>
              </DontExample>
            </div>
          </SubSection>

          <SubSection title="Boilerplate Text">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid var(--color-gray-200)" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-gray-500)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>Short (25 words)</p>
                <p style={{ fontSize: "14px", color: "var(--color-gray-900)", lineHeight: "22px" }}>SuperSonic POS is an enterprise-grade point-of-sale platform built for independent retailers, offering integrated payments, inventory management, and real-time analytics.</p>
              </div>
              <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid var(--color-gray-200)" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-gray-500)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>Medium (50 words)</p>
                <p style={{ fontSize: "14px", color: "var(--color-gray-900)", lineHeight: "22px" }}>SuperSonic POS empowers convenience stores, grocery markets, liquor stores, and petro retailers with an all-in-one point-of-sale solution. From integrated payments and age verification to real-time inventory tracking and loss prevention, our platform helps independent retailers shrink shrinkage, operate anywhere, and drive sales.</p>
              </div>
              <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid var(--color-gray-200)" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-gray-500)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>Long (100 words)</p>
                <p style={{ fontSize: "14px", color: "var(--color-gray-900)", lineHeight: "22px" }}>SuperSonic POS is a comprehensive, cloud-based point-of-sale platform purpose-built for independent retailers. Serving convenience stores, grocery markets, liquor retailers, vape and smoke shops, and petro and fuel stations, SuperSonic delivers enterprise-grade tools at a price point that makes sense for independent operators. Our integrated ecosystem includes fast and secure payment processing, smart inventory management with real-time tracking, advanced loss prevention and shrink analytics, age verification and compliance tools, and multi-location management from a single dashboard. With SuperSonic POS, independent retailers get the technology they need to compete with national chains while keeping the personal touch their customers love.</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="CTA Language Patterns">
            <TokenTable items={[
              { name: "Primary CTA", value: "Sign Up Free, Get Started Free, Start Your Free Trial" },
              { name: "Secondary CTA", value: "Get a Demo, Speak to Sales, Talk to a Human" },
              { name: "Learn more", value: "Learn More, See How It Works, Explore Features" },
              { name: "Urgency CTA", value: "Start Saving Today, Switch to SuperSonic, Upgrade Your POS" },
            ]} />
          </SubSection>
        </Section>

        {/* ===== 4. PHOTOGRAPHY & IMAGERY ===== */}
        <Section title="4. Photography & Imagery" id="photography-imagery">
          <SubSection title="Style Attributes">
            <TokenTable items={[
              { name: "Lighting", value: "Bright, natural, well-lit — avoid harsh shadows or moody tones" },
              { name: "Environments", value: "Clean, modern retail spaces — real stores, not generic stock" },
              { name: "Subjects", value: "Real merchants, real employees, devices in actual use" },
              { name: "Color tone", value: "Warm and inviting, natural skin tones, no heavy filters" },
              { name: "Composition", value: "Clean and uncluttered, focus on the subject, ample negative space" },
            ]} />
          </SubSection>

          <SubSection title="Color Treatment">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              <MockupFrame label="Natural — no overlay" bg="white">
                <div style={{ width: "100%", height: "120px", background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "var(--color-gray-500)" }}>Photo — natural colors</div>
              </MockupFrame>
              <MockupFrame label="Teal accent overlay" bg="white">
                <div style={{ width: "100%", height: "120px", background: "linear-gradient(135deg, rgba(10,174,184,0.15) 0%, rgba(10,174,184,0.05) 100%)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "var(--color-primary)" }}>Photo — teal tint 15%</div>
              </MockupFrame>
              <MockupFrame label="Gradient overlay (hero)" bg="white">
                <div style={{ width: "100%", height: "120px", background: "linear-gradient(103.17deg, rgba(13,222,209,0.3) 5.2%, rgba(81,159,255,0.3) 95.19%)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "var(--color-primary)" }}>Photo — gradient overlay</div>
              </MockupFrame>
            </div>
          </SubSection>

          <SubSection title="Photography Guidelines">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <DoExample title="Photography best practices">
                <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Real retail environments and actual merchants</li>
                  <li>Devices shown in active use (scanning, checkout)</li>
                  <li>Diverse representation of store types</li>
                  <li>Clean, well-organized store backgrounds</li>
                </ul>
              </DoExample>
              <DontExample title="Photography mistakes">
                <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Generic stock photos of smiling business people</li>
                  <li>Overly staged or artificial poses</li>
                  <li>Cluttered, messy, or dark environments</li>
                  <li>Competitor devices or logos visible</li>
                </ul>
              </DontExample>
            </div>
          </SubSection>

          <SubSection title="Product Photography">
            <TokenTable items={[
              { name: "Background", value: "White or neutral (#fafafa), seamless — no props or distractions" },
              { name: "Lighting", value: "Even, studio-quality, consistent across all product shots" },
              { name: "Angles", value: "Front, 3/4 view, side profile, with dock (if applicable)" },
              { name: "Resolution", value: "Minimum 800px on longest edge, background-removed PNG" },
              { name: "Shadow", value: "Soft drop shadow added via CSS: drop-shadow(0 20px 40px rgba(0,0,0,0.15))" },
            ]} />
          </SubSection>
        </Section>

        {/* ===== 5. SOCIAL MEDIA ===== */}
        <Section title="5. Social Media" id="social-media">
          <SubSection title="Platform Dimensions">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", fontWeight: 700, color: "var(--color-gray-900)" }}>Platform</th>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", fontWeight: 700, color: "var(--color-gray-900)" }}>Profile</th>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", fontWeight: 700, color: "var(--color-gray-900)" }}>Cover / Banner</th>
                  <th style={{ textAlign: "left", padding: "8px 16px 8px 0", fontWeight: 700, color: "var(--color-gray-900)" }}>Post</th>
                  <th style={{ textAlign: "left", padding: "8px 0", fontWeight: 700, color: "var(--color-gray-900)" }}>Story / Reel</th>
                </tr>
              </thead>
              <tbody>
                <PlatformSpec platform="X (Twitter)" profile="400×400" cover="1500×500" post="1200×675" />
                <PlatformSpec platform="Facebook" profile="170×170" cover="820×312" post="1200×630" story="1080×1920" />
                <PlatformSpec platform="Instagram" profile="320×320" cover="—" post="1080×1080" story="1080×1920" />
                <PlatformSpec platform="LinkedIn" profile="400×400" cover="1128×191" post="1200×627" />
                <PlatformSpec platform="YouTube" profile="800×800" cover="2560×1440" post="1280×720" />
              </tbody>
            </table>
          </SubSection>

          <SubSection title="Profile Picture">
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo/logo-white.svg" alt="Profile picture" style={{ height: "50px", width: "auto" }} />
              </div>
              <div>
                <p style={{ fontSize: "14px", color: "var(--color-gray-900)", fontWeight: 700, marginBottom: "4px" }}>Logo mark on teal circle</p>
                <p style={{ fontSize: "13px", color: "var(--color-gray-500)", lineHeight: "20px" }}>Use the white logo centered on a solid teal (#0aaeb8) circle. Ensure the logo has adequate padding (20% margin on all sides). Use the same image across all platforms for brand consistency.</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Cover Photo Template">
            <MockupFrame label="Cover photo — teal gradient with tagline" height="160px" bg="linear-gradient(103.17deg, #0DDED1 5.2%, #519FFF 95.19%)">
              <div style={{ textAlign: "center", color: "white" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo/logo-white.svg" alt="" style={{ height: "36px", width: "auto", marginBottom: "12px" }} />
                <p style={{ fontSize: "16px", fontWeight: 900, letterSpacing: "-0.3px" }}>Shrink Shrinkage. Operate Anywhere. Drive Sales.</p>
              </div>
            </MockupFrame>
          </SubSection>

          <SubSection title="Post Templates">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <MockupFrame label="Product Feature Post" height="280px" bg="white">
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: 1, background: "var(--color-primary)", borderRadius: "8px 8px 0 0", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
                    <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px 24px", color: "white", fontWeight: 700, fontSize: "14px" }}>Product Screenshot</div>
                  </div>
                  <div style={{ padding: "16px", background: "white", borderRadius: "0 0 8px 8px" }}>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "4px" }}>Feature Headline</p>
                    <p style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>Brief description of the feature and its benefit to retailers.</p>
                  </div>
                </div>
              </MockupFrame>
              <MockupFrame label="Customer Testimonial" height="280px" bg="var(--color-primary)">
                <div style={{ padding: "24px", color: "white", textAlign: "center" }}>
                  <p style={{ fontSize: "28px", fontWeight: 300, opacity: 0.5, marginBottom: "8px" }}>&ldquo;</p>
                  <p style={{ fontSize: "13px", fontWeight: 500, lineHeight: "20px", marginBottom: "16px" }}>Quote from a real merchant about their experience with SuperSonic POS.</p>
                  <p style={{ fontSize: "11px", opacity: 0.7 }}>— Merchant Name, Store Name</p>
                </div>
              </MockupFrame>
              <MockupFrame label="Announcement Post" height="280px" bg="var(--color-gray-900)">
                <div style={{ padding: "24px", color: "white", textAlign: "center" }}>
                  <div style={{ display: "inline-block", background: "var(--color-primary)", borderRadius: "20px", padding: "4px 12px", fontSize: "10px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>New</div>
                  <p style={{ fontSize: "18px", fontWeight: 900, marginBottom: "8px" }}>Announcement Headline</p>
                  <p style={{ fontSize: "12px", opacity: 0.7, lineHeight: "18px" }}>Supporting text that explains the news and why it matters.</p>
                </div>
              </MockupFrame>
            </div>
          </SubSection>

          <SubSection title="Content Pillars">
            <TokenTable items={[
              { name: "Product", value: "Feature highlights, product updates, how-to tips, demo clips (40%)" },
              { name: "Industry Tips", value: "Retail best practices, loss prevention tips, seasonal advice (25%)" },
              { name: "Customer Stories", value: "Merchant spotlights, testimonials, case studies (20%)" },
              { name: "Company Culture", value: "Team highlights, events, behind-the-scenes, milestones (15%)" },
            ]} />
          </SubSection>

          <SubSection title="Hashtag Strategy">
            <TokenTable items={[
              { name: "Brand", value: "#SuperSonicPOS #ShrinkShrinkage #OperateAnywhere" },
              { name: "Industry", value: "#RetailTech #POSSystem #ConvenienceStore #IndependentRetail" },
              { name: "Engagement", value: "#SmallBusiness #RetailTips #StoreOwner #MerchantLife" },
              { name: "Usage", value: "3–5 hashtags per post. Brand tag on every post. Mix industry + engagement." },
            ]} />
          </SubSection>
        </Section>

        {/* ===== 6. PHYSICAL PRODUCTS & PACKAGING ===== */}
        <Section title="6. Physical Products & Packaging" id="physical-products-packaging">
          <SubSection title="Device Branding Zones">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <MockupFrame label="POS Terminal — Front face" height="240px">
                <div style={{ width: "140px", height: "200px", background: "var(--color-gray-900)", borderRadius: "12px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "12px" }}>
                  <div style={{ width: "110px", height: "90px", background: "#2a2d52", borderRadius: "6px", marginBottom: "8px" }} />
                  <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo/logo-white.svg" alt="" style={{ height: "16px", width: "auto" }} />
                  </div>
                  <div style={{ position: "absolute", top: "115px", right: "-60px", fontSize: "10px", color: "var(--color-primary)", fontWeight: 700 }}>
                    <SpecCallout label="Logo zone" />
                  </div>
                </div>
              </MockupFrame>
              <MockupFrame label="POS Terminal — Side / Back" height="240px">
                <div style={{ width: "60px", height: "200px", background: "var(--color-gray-900)", borderRadius: "8px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo/logo-white.svg" alt="" style={{ height: "12px", width: "auto" }} />
                  </div>
                </div>
              </MockupFrame>
            </div>
          </SubSection>

          <SubSection title="Box Design Specification">
            <div style={{ display: "flex", gap: "24px", alignItems: "start" }}>
              <MockupFrame label="Product box — front panel" width="200px" height="260px" bg="var(--color-primary)">
                <div style={{ color: "white", textAlign: "center", padding: "16px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo/logo-white.svg" alt="" style={{ height: "28px", width: "auto", marginBottom: "20px" }} />
                  <div style={{ width: "80px", height: "100px", background: "rgba(255,255,255,0.15)", borderRadius: "8px", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", opacity: 0.7 }}>Product Photo</div>
                  <p style={{ fontSize: "14px", fontWeight: 900 }}>VP550</p>
                  <p style={{ fontSize: "10px", opacity: 0.7 }}>Smart POS Terminal</p>
                </div>
              </MockupFrame>
              <TokenTable items={[
                { name: "Box color", value: "Teal (#0aaeb8) — matte finish" },
                { name: "Logo", value: "White, centered top, 20% margin from top edge" },
                { name: "Product photo", value: "Centered, background-removed, 50% of front area" },
                { name: "Model name", value: "White, 16px equivalent, bold, below photo" },
                { name: "Subtitle", value: "White, 10px equivalent, light weight" },
                { name: "Back panel", value: "White background, dark logo, specs table, regulatory marks" },
                { name: "Side panels", value: "Teal, white logo rotated 90°, model name" },
              ]} />
            </div>
          </SubSection>

          <SubSection title="Unboxing Experience">
            <TokenTable items={[
              { name: "Insert card", value: 'Welcome card — teal front with "Welcome to SuperSonic" + white logo, back with QR code to setup guide' },
              { name: "Quick-start guide", value: "Tri-fold, white stock, teal headings, step-by-step with device illustrations" },
              { name: "Branded sticker", value: "Die-cut logo, teal on white circle, 2\" diameter" },
              { name: "Cable/accessory bags", value: "Clear bags with small teal SuperSonic label" },
            ]} />
          </SubSection>

          <SubSection title="Print Color Reference">
            <TokenTable items={[
              { name: "Teal (primary)", value: "Pantone 7711 C | CMYK: 75 0 25 0 | Hex: #0aaeb8" },
              { name: "Dark (headings)", value: "Pantone 7547 C | CMYK: 0 0 0 95 | Hex: #101828" },
              { name: "Gray (body text)", value: "Pantone 7545 C | CMYK: 0 0 0 60 | Hex: #667085" },
              { name: "White", value: "Uncoated white stock, no ink" },
              { name: "Gradient", value: "For print: use solid teal or request gradient swatch from brand team" },
            ]} />
          </SubSection>
        </Section>

        {/* ===== 7. EVENT & TRADE SHOWS ===== */}
        <Section title="7. Event & Trade Shows" id="event-trade-shows">
          <SubSection title="Booth Layout">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <MockupFrame label="10×10 Booth" height="220px">
                <div style={{ width: "180px", height: "180px", border: "2px solid var(--color-gray-300)", borderRadius: "4px", position: "relative", display: "grid", gridTemplateRows: "1fr auto", padding: "8px" }}>
                  <div style={{ background: "var(--color-primary)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                    <span style={{ color: "white", fontSize: "10px", fontWeight: 700 }}>Backdrop 10&apos;</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    <div style={{ background: "var(--color-gray-100)", borderRadius: "3px", padding: "4px", textAlign: "center", fontSize: "8px", color: "var(--color-gray-500)" }}>Demo Station</div>
                    <div style={{ background: "var(--color-gray-100)", borderRadius: "3px", padding: "4px", textAlign: "center", fontSize: "8px", color: "var(--color-gray-500)" }}>Table</div>
                  </div>
                  <div style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50)", fontSize: "10px", color: "var(--color-gray-500)" }}>10 ft</div>
                </div>
              </MockupFrame>
              <MockupFrame label="10×20 Booth" height="220px">
                <div style={{ width: "180px", height: "100px", border: "2px solid var(--color-gray-300)", borderRadius: "4px", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "8px", gap: "6px" }}>
                  <div style={{ background: "var(--color-primary)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gridColumn: "1 / -1" }}>
                    <span style={{ color: "white", fontSize: "9px", fontWeight: 700 }}>Backdrop 20&apos;</span>
                  </div>
                  <div style={{ background: "var(--color-gray-100)", borderRadius: "3px", padding: "3px", textAlign: "center", fontSize: "7px", color: "var(--color-gray-500)" }}>Demo 1</div>
                  <div style={{ background: "var(--color-gray-100)", borderRadius: "3px", padding: "3px", textAlign: "center", fontSize: "7px", color: "var(--color-gray-500)" }}>Lounge</div>
                  <div style={{ background: "var(--color-gray-100)", borderRadius: "3px", padding: "3px", textAlign: "center", fontSize: "7px", color: "var(--color-gray-500)" }}>Demo 2</div>
                </div>
              </MockupFrame>
            </div>
          </SubSection>

          <SubSection title="Backdrop & Banners">
            <TokenTable items={[
              { name: "Backdrop", value: "Teal background with gradient overlay. Logo centered, white, large. Tagline below logo." },
              { name: "Retractable banner", value: '33"×80" — teal bg, white logo top, product photo center, tagline + URL bottom' },
              { name: "Table-top banner", value: '6 ft wide — same design language as retractable, horizontal layout' },
              { name: "Typography", value: "All text in Lato. Headlines weight 900, body weight 400." },
            ]} />
          </SubSection>

          <SubSection title="Booth Materials">
            <TokenTable items={[
              { name: "Tablecloth", value: "6 ft fitted, teal fabric, white logo centered on front panel" },
              { name: "Screen displays", value: "Demo loop — product walkthrough video, 16:9, branded lower third with logo" },
              { name: "Badge / lanyard", value: "Teal lanyard with white SuperSonic text, badge holder clear" },
              { name: "Literature rack", value: "Sell sheets, business cards, branded USB drives with demo content" },
            ]} />
          </SubSection>

          <SubSection title="Swag Guidelines">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <DoExample title="Approved swag items">
                <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>T-shirts: Teal shirt, white logo on chest, tagline on back</li>
                  <li>Pens: White body, teal logo, teal clip</li>
                  <li>Stickers: Die-cut logo, 2&quot; diameter</li>
                  <li>Tote bags: White bag, teal logo centered</li>
                </ul>
              </DoExample>
              <DontExample title="Swag to avoid">
                <ul style={{ margin: 0, paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Cheap or low-quality items that reflect poorly on brand</li>
                  <li>Items with competitor colors or confusing branding</li>
                  <li>Overloaded designs with too much text or multiple logos</li>
                  <li>Generic items without any brand customization</li>
                </ul>
              </DontExample>
            </div>
          </SubSection>
        </Section>

        {/* ===== 8. BILLBOARDS & OUTDOOR ===== */}
        <Section title="8. Billboards & Outdoor" id="billboards-outdoor">
          <SubSection title="Format Specifications">
            <TokenTable items={[
              { name: "Billboard", value: "14\'×48\' (168\"×576\") — standard bulletins, highway visible" },
              { name: "Junior Poster", value: "6\'×12\' (72\"×144\") — urban streets, eye-level" },
              { name: "Bus Shelter", value: "46\"×67\" — transit stops, pedestrian areas" },
              { name: "Digital Billboard", value: "1400×400px (varies) — 8-second rotation" },
            ]} />
          </SubSection>

          <SubSection title="Layout Rules">
            <div style={{ display: "flex", gap: "24px", alignItems: "start" }}>
              <MockupFrame label="Billboard layout template" width="480px" height="160px" bg="var(--color-primary)">
                <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "2fr 1fr", padding: "20px", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "20px", fontWeight: 900, color: "white", lineHeight: "1.2", marginBottom: "8px" }}>Max 7 Words Here</p>
                    <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)" }}>supersonic-pos.com</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo/logo-white.svg" alt="" style={{ height: "24px", width: "auto" }} />
                  </div>
                </div>
              </MockupFrame>
              <TokenTable items={[
                { name: "Max words", value: "7 words (5 ideal) — must be readable at 60mph" },
                { name: "Logo position", value: "Always bottom-right or right-center" },
                { name: "URL", value: "Below logo, small, optional" },
                { name: "CTA", value: "One action only — phone or URL, never both" },
              ]} />
            </div>
          </SubSection>

          <SubSection title="Readability Requirements">
            <TokenTable items={[
              { name: "Headline font size", value: "Minimum 18\" letter height for highway billboards" },
              { name: "Contrast", value: "Minimum 4.5:1 ratio — white on teal passes at 4.6:1" },
              { name: "Approved combos", value: "White text on teal bg | Dark text on white bg | White text on dark bg" },
              { name: "Avoid", value: "No thin fonts, no ALL lowercase, no more than 2 font sizes" },
            ]} />
          </SubSection>

          <SubSection title="Template Options">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              <MockupFrame label="Hero image + CTA" height="100px" bg="white">
                <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", borderRadius: "6px" }}>
                  <div style={{ background: "var(--color-gray-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "var(--color-gray-400)" }}>Photo</div>
                  <div style={{ background: "var(--color-primary)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px" }}>
                    <p style={{ color: "white", fontSize: "10px", fontWeight: 900 }}>Headline</p>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "7px" }}>URL</p>
                  </div>
                </div>
              </MockupFrame>
              <MockupFrame label="Bold text + gradient" height="100px" bg="linear-gradient(103.17deg, #0DDED1 5.2%, #519FFF 95.19%)">
                <div style={{ textAlign: "center", color: "white" }}>
                  <p style={{ fontSize: "12px", fontWeight: 900, marginBottom: "4px" }}>Bold Statement</p>
                  <p style={{ fontSize: "7px", opacity: 0.7 }}>supersonic-pos.com</p>
                </div>
              </MockupFrame>
              <MockupFrame label="Product focus" height="100px" bg="white">
                <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", borderRadius: "6px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "8px" }}>
                    <p style={{ fontSize: "9px", fontWeight: 900, color: "var(--color-gray-900)", marginBottom: "2px" }}>Product Name</p>
                    <p style={{ fontSize: "7px", color: "var(--color-gray-500)" }}>Tagline here</p>
                  </div>
                  <div style={{ background: "var(--color-gray-50)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "var(--color-gray-400)" }}>Device</div>
                </div>
              </MockupFrame>
            </div>
          </SubSection>
        </Section>

        {/* ===== 9. PRINT MATERIALS ===== */}
        <Section title="9. Print Materials" id="print-materials">
          <SubSection title="Business Cards">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <MockupFrame label='Front — 3.5"×2"' height="180px">
                <div style={{ width: "240px", height: "140px", background: "white", borderRadius: "8px", border: "1px solid var(--color-gray-200)", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo/logo-dark.svg" alt="" style={{ height: "20px", width: "auto", marginBottom: "12px" }} />
                    <p style={{ fontSize: "13px", fontWeight: 900, color: "var(--color-gray-900)" }}>John Smith</p>
                    <p style={{ fontSize: "10px", color: "var(--color-gray-500)" }}>Regional Sales Manager</p>
                  </div>
                  <div style={{ fontSize: "9px", color: "var(--color-gray-500)", lineHeight: "14px" }}>
                    <p>john@supersonic-pos.com</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
              </MockupFrame>
              <MockupFrame label='Back — 3.5"×2"' height="180px">
                <div style={{ width: "240px", height: "140px", background: "var(--color-primary)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo/logo-white.svg" alt="" style={{ height: "28px", width: "auto" }} />
                  <p style={{ fontSize: "8px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.5px" }}>supersonic-pos.com</p>
                </div>
              </MockupFrame>
            </div>
            <div style={{ marginTop: "16px" }}>
              <TokenTable items={[
                { name: "Size", value: '3.5"×2" (standard US business card)' },
                { name: "Stock", value: "16pt matte or soft-touch laminate" },
                { name: "Front", value: "White bg, dark logo top-left, name + title, contact info bottom-left" },
                { name: "Back", value: "Solid teal, white logo centered, URL below" },
                { name: "Font", value: "Lato — name 10pt bold, title 8pt regular, contact 7pt regular" },
              ]} />
            </div>
          </SubSection>

          <SubSection title="Letterhead">
            <div style={{ display: "flex", gap: "24px", alignItems: "start" }}>
              <MockupFrame label='Letterhead — 8.5"×11"' width="200px" height="280px">
                <div style={{ width: "170px", height: "240px", background: "white", borderRadius: "4px", border: "1px solid var(--color-gray-200)", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo/logo-dark.svg" alt="" style={{ height: "16px", width: "auto", marginBottom: "24px" }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} style={{ height: "3px", background: "var(--color-gray-100)", borderRadius: "2px", width: i === 5 ? "60%" : "100%" }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid var(--color-gray-200)", paddingTop: "8px", fontSize: "6px", color: "var(--color-gray-400)", lineHeight: "10px" }}>
                    <p>SuperSonic POS, Inc.</p>
                    <p>123 Main St, Suite 100</p>
                    <p>supersonic-pos.com</p>
                  </div>
                </div>
              </MockupFrame>
              <TokenTable items={[
                { name: "Logo", value: "Top-left corner, dark variant, 1\" from edges" },
                { name: "Body area", value: 'Starts 2.5" from top, 1" margins all sides' },
                { name: "Footer", value: "Company address, phone, URL — centered, 7pt, gray-500" },
                { name: "Stock", value: "24lb premium white, uncoated" },
                { name: "Accent", value: "Optional 2px teal line under logo or at page bottom" },
              ]} />
            </div>
          </SubSection>

          <SubSection title="Brochure (Tri-fold)">
            <TokenTable items={[
              { name: "Flat size", value: '11"×8.5" (landscape)' },
              { name: "Panel sizes", value: '3.67"×8.5" per panel (3 panels)' },
              { name: "Cover panel", value: "Teal bg, white logo large, tagline below, product photo" },
              { name: "Inside panels", value: "White bg, feature sections with teal headings, checkmark lists" },
              { name: "Back panel", value: "Contact info, QR code to demo, social handles" },
              { name: "Stock", value: "100lb gloss text, full bleed" },
            ]} />
          </SubSection>

          <SubSection title="Sell Sheet (One-Pager)">
            <div style={{ display: "flex", gap: "24px", alignItems: "start" }}>
              <MockupFrame label='Sell sheet — 8.5"×11"' width="200px" height="280px">
                <div style={{ width: "170px", height: "240px", background: "white", borderRadius: "4px", border: "1px solid var(--color-gray-200)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "var(--color-primary)", padding: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo/logo-white.svg" alt="" style={{ height: "12px", width: "auto" }} />
                    <span style={{ color: "white", fontSize: "8px", fontWeight: 900 }}>Product Name</span>
                  </div>
                  <div style={{ flex: 1, padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ height: "40px", background: "var(--color-gray-50)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "7px", color: "var(--color-gray-400)" }}>Hero Image</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} style={{ height: "24px", background: "var(--color-gray-50)", borderRadius: "3px" }} />
                      ))}
                    </div>
                    <div style={{ marginTop: "auto", background: "var(--color-primary)", borderRadius: "10px", padding: "4px", textAlign: "center", fontSize: "7px", color: "white", fontWeight: 700 }}>Get a Demo</div>
                  </div>
                </div>
              </MockupFrame>
              <TokenTable items={[
                { name: "Header", value: "Teal bar with white logo + product name" },
                { name: "Hero area", value: "Product photo or key visual, top 30%" },
                { name: "Features", value: "2-column grid, teal checkmarks, 4–6 features" },
                { name: "CTA", value: "Teal pill button at bottom: Get a Demo / Sign Up Free" },
                { name: "Footer", value: "Contact info, URL, QR code" },
                { name: "Stock", value: "80lb gloss cover, single-sided or double-sided" },
              ]} />
            </div>
          </SubSection>
        </Section>

        {/* ═══════════════════════════════════════════════════ */}
        {/* ═══════════ WEB DESIGN SYSTEM (Sections 10–29) ═══ */}
        {/* ═══════════════════════════════════════════════════ */}

        {/* ===== 10. ARCHITECTURE & CONVENTIONS ===== */}
        <Section title="10. Architecture & Conventions" id="architecture-conventions">
          <SubSection title="Tech Stack">
            <TokenTable
              items={[
                { name: "Framework", value: "Next.js 16.1.6 (App Router, Turbopack)" },
                { name: "Styling", value: "Inline styles (React CSSProperties) — NO CSS modules" },
                { name: "CSS Tokens", value: "globals.css with CSS custom properties (:root)" },
                { name: "Component CSS", value: "globals.css component classes (.btn-primary, .card, etc.)" },
                { name: "Font", value: "Lato (Google Fonts via next/font/google)" },
                { name: "Images", value: "next/image component (always use <Image>, never <img>)" },
                { name: "Client Directive", value: '"use client" on all interactive pages/components' },
              ]}
            />
          </SubSection>

          <SubSection title="Coding Conventions">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <ConventionRule
                title="Inline Styles Only"
                desc='All component styling uses React inline styles. No CSS modules, no Tailwind utility classes on elements. CSS classes in globals.css are only for reusable components (.btn-primary, .card, etc.).'
              />
              <ConventionRule
                title="CSS Variables for Tokens"
                desc='Always reference design tokens via var(--token-name). Example: color: "var(--color-gray-500)" — never hardcode hex values that have a token equivalent.'
              />
              <ConventionRule
                title="Hover States via onMouseEnter/onMouseLeave"
                desc="Since we use inline styles, hover effects are handled with onMouseEnter/onMouseLeave event handlers that mutate e.currentTarget.style."
              />
              <ConventionRule
                title="Section Components"
                desc="Each page section is its own function component in the same file. Page component composes them: <PetroHero /> <DesignedForGasStation /> etc."
              />
              <ConventionRule
                title="Data Separation"
                desc="Static data (nav links, footer links, feature lists, dropdown content) lives in /src/lib/data.ts. Components import and map over it."
              />
              <ConventionRule
                title="SVG Illustrations"
                desc="Complex illustrations are inline SVGs within components. Icons use the gradient circle pattern (see Icon System)."
              />
              <ConventionRule
                title="Animations"
                desc="CSS @keyframes defined in <style> tags within components. No external animation libraries."
              />
            </div>
          </SubSection>
        </Section>

        {/* ===== 11. COLORS ===== */}
        <Section title="11. Colors" id="colors">
          <SubSection title="Brand Colors">
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <ColorSwatch name="Primary (Teal)" value="#0aaeb8" variable="--color-primary" />
              <ColorSwatch name="Primary Dark" value="#089aa3" variable="--color-primary-dark" />
              <GradientSwatch
                name="Gradient Primary"
                value="linear-gradient(103.17deg, #0DDED1 5.2%, #519FFF 95.19%)"
                variable="--gradient-primary"
                desc="Teal → Blue. Used on icon circles, accent buttons, CTA gradients."
              />
            </div>
          </SubSection>

          <SubSection title="Neutral Palette">
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <ColorSwatch name="Gray 900" value="#101828" variable="--color-gray-900" usage="Headings, primary text" />
              <ColorSwatch name="Gray 600" value="#475467" variable="--color-gray-600" usage="Subtle text, feature descriptions" />
              <ColorSwatch name="Gray 500" value="#667085" variable="--color-gray-500" usage="Body text, descriptions" />
              <ColorSwatch name="Gray 200" value="#eaecf0" variable="--color-gray-200" usage="Borders, dividers" />
              <ColorSwatch name="Gray 100" value="#f2f4f7" variable="--color-gray-100" usage="Subtle backgrounds, inactive tabs" />
              <ColorSwatch name="Gray 50" value="#fafafa" variable="--color-gray-50" usage="Button backgrounds, card bg" />
              <ColorSwatch name="White" value="#ffffff" variable="--color-white" border usage="Surface, card backgrounds" />
            </div>
          </SubSection>

          <SubSection title="Semantic Aliases">
            <TokenTable
              items={[
                { name: "--color-text-heading", value: "→ --color-gray-900 (#101828)" },
                { name: "--color-text-body", value: "→ --color-gray-500 (#667085)" },
                { name: "--color-text-subtle", value: "→ --color-gray-600 (#475467)" },
                { name: "--color-text-on-primary", value: "→ --color-white (#ffffff)" },
                { name: "--color-text-link", value: "→ --color-primary (#0aaeb8)" },
                { name: "--color-border", value: "→ --color-gray-200 (#eaecf0)" },
                { name: "--color-surface", value: "→ --color-white (#ffffff)" },
                { name: "--color-surface-muted", value: "→ --color-gray-50 (#fafafa)" },
              ]}
            />
          </SubSection>

          <SubSection title="Contextual / Hardcoded Colors">
            <TokenTable
              items={[
                { name: "#f5f5f5", value: "Light gray section backgrounds (alternate sections)" },
                { name: "#f3efe9", value: "Warm cream — decorative circles behind product photos" },
                { name: "#1e2044 / #2a2d52", value: "Dark navy — device screen backgrounds in mockups" },
                { name: "#1a1a2e", value: "Dark card body (credit card SVG, iPhone bezels)" },
                { name: "#7c5cfc", value: "Purple accent — secondary chart color, product gradients" },
                { name: "#4ade80 / #10b981", value: "Green — success states, chart accent, checkmarks" },
                { name: "#c9a84c / #b8963f", value: "Gold — EMV chip on credit card SVG" },
                { name: "#98a2b3", value: "Muted label — dropdown section headers (uppercase)" },
                { name: "#eb001b / #f79e1b", value: "Mastercard logo colors (red/orange)" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 12. TYPOGRAPHY ===== */}
        <Section title="12. Typography" id="typography">
          <SubSection title="Font Family">
            <p style={{ fontSize: "16px", color: "var(--color-gray-500)", marginBottom: "16px" }}>
              <strong style={{ color: "var(--color-gray-900)" }}>Lato</strong> — Weights: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
            </p>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              <span style={{ fontWeight: 300, fontSize: "24px", color: "var(--color-gray-900)" }}>Light 300</span>
              <span style={{ fontWeight: 400, fontSize: "24px", color: "var(--color-gray-900)" }}>Regular 400</span>
              <span style={{ fontWeight: 700, fontSize: "24px", color: "var(--color-gray-900)" }}>Bold 700</span>
              <span style={{ fontWeight: 900, fontSize: "24px", color: "var(--color-gray-900)" }}>Black 900</span>
            </div>
          </SubSection>

          <SubSection title="Type Scale">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <TypeSample name="Display" size="60px" lineHeight="70px" tracking="-1.2px" variable="--text-display" weight={900} usage="Hero headlines only" />
              <TypeSample name="H1" size="48px" lineHeight="1.2" variable="--text-h1" weight={900} usage="Major section titles (sometimes 52px inline)" />
              <TypeSample name="H2" size="36px" lineHeight="1.2" variable="--text-h2" weight={900} usage="Section headings (often 36–40px inline)" />
              <TypeSample name="H3" size="28px" lineHeight="1.4" variable="--text-h3" weight={700} usage="Sub-section headings" />
              <TypeSample name="H4" size="20px" lineHeight="1.4" variable="--text-h4" weight={700} usage="Card titles, feature titles" />
              <TypeSample name="Body Large" size="20px" lineHeight="1.5" variable="--text-body-lg" weight={400} usage="Hero subtitles, lead paragraphs" />
              <TypeSample name="Body" size="16px" lineHeight="1.5" variable="--text-body" weight={400} usage="Default body text, descriptions" />
              <TypeSample name="Body Small" size="14px" lineHeight="1.5" variable="--text-body-sm" weight={400} usage="Feature descriptions, card copy" />
              <TypeSample name="Caption" size="12px" lineHeight="1.5" variable="--text-caption" weight={400} usage="Labels, legal text, timestamps" />
            </div>
          </SubSection>

          <SubSection title="Common Inline Overrides">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "12px" }}>
              Pages frequently use inline sizes that slightly deviate from the scale:
            </p>
            <TokenTable
              items={[
                { name: "Hero H1", value: "52px / 62px / -1px tracking / weight 900" },
                { name: "Section H2", value: "40px / 48px / weight 900" },
                { name: "Section H2 (smaller)", value: "36px / 44px / weight 900" },
                { name: "Feature title", value: "15–16px / 22px / weight 700" },
                { name: "Feature desc", value: "14px / 22px / weight 400–500" },
                { name: "Button text", value: "14–18px / 26px / weight 700" },
                { name: "Dropdown sidebar", value: "17px / 26px / weight 600" },
                { name: "Dropdown title", value: "18px / 26px / weight 600" },
                { name: "Dropdown items", value: "16–17px / 22–26px / weight 600" },
                { name: "Dropdown label (uppercase)", value: "12–13px / weight 700 / tracking 0.24px" },
                { name: "Footer links", value: "14px / 20px / weight 500" },
                { name: "Footer section titles", value: "16px / 1.4 / weight 700" },
                { name: "Legal text", value: "12px / 18px / weight 500" },
              ]}
            />
          </SubSection>

          <SubSection title="Line Heights & Letter Spacing">
            <TokenTable
              items={[
                { name: "--leading-display", value: "70px" },
                { name: "--leading-tight", value: "1.2" },
                { name: "--leading-normal", value: "1.4" },
                { name: "--leading-relaxed", value: "1.5" },
                { name: "--tracking-display", value: "-1.2px (display headlines)" },
                { name: "--tracking-normal", value: "0" },
                { name: "--tracking-caps", value: "0.28px (uppercase labels)" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 13. SPACING ===== */}
        <Section title="13. Spacing" id="spacing">
          <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "24px" }}>
            8-point base unit system. Use these tokens for consistent padding, margins, and gaps.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { name: "--space-1", value: "4px", use: "Tight inline gaps" },
              { name: "--space-2", value: "8px", use: "Button icon gap, tight spacing" },
              { name: "--space-3", value: "12px", use: "Link gaps, small sections" },
              { name: "--space-4", value: "16px", use: "Card internal, paragraph spacing" },
              { name: "--space-5", value: "20px", use: "Dropdown padding" },
              { name: "--space-6", value: "24px", use: "Card padding, feature list gap" },
              { name: "--space-8", value: "32px", use: "Section sub-spacing, nav gap" },
              { name: "--space-9", value: "36px", use: "Feature list margin" },
              { name: "--space-10", value: "40px", use: "Footer column gap" },
              { name: "--space-12", value: "48px", use: "Section title to content, footer padding" },
              { name: "--space-16", value: "64px", use: "Section top/bottom alt, hero grid gap" },
              { name: "--space-20", value: "80px", use: "Page horizontal padding, grid gap" },
              { name: "--space-24", value: "96px", use: "Section vertical padding" },
            ].map((s) => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <code style={{ width: "120px", fontSize: "13px", color: "var(--color-gray-500)", flexShrink: 0 }}>
                  {s.name}
                </code>
                <span style={{ width: "40px", fontSize: "13px", fontWeight: 600, color: "var(--color-gray-900)", flexShrink: 0 }}>
                  {s.value}
                </span>
                <div
                  style={{
                    width: parseInt(s.value),
                    height: "16px",
                    background: "var(--color-primary)",
                    borderRadius: "4px",
                    opacity: 0.7,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{s.use}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== 14. LAYOUT ===== */}
        <Section title="14. Layout" id="layout">
          <SubSection title="Page Constraints">
            <TokenTable
              items={[
                { name: "--max-width-page", value: "1440px — outermost page container" },
                { name: "--max-width-content", value: "1280px — content area (CTA cards, etc.)" },
                { name: "--page-padding", value: "80px — horizontal padding" },
                { name: "--header-height", value: "80px — sticky header" },
              ]}
            />
          </SubSection>

          <SubSection title="Common Layout Patterns">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <CodeExample
                title="Full-width Section Container"
                code={`maxWidth: "var(--max-width-page)",\nmargin: "0 auto",\npadding: "0 var(--page-padding)",`}
              />
              <CodeExample
                title="Two-Column Grid (Hero, Content)"
                code={`display: "grid",\ngridTemplateColumns: "1fr 1fr",\ngap: "64px", // or "80px"\nalignItems: "center",`}
              />
              <CodeExample
                title="Three-Column Card Grid"
                code={`display: "grid",\ngridTemplateColumns: "repeat(3, 1fr)",\ngap: "24px",`}
              />
              <CodeExample
                title="Four-Column Card Grid"
                code={`display: "grid",\ngridTemplateColumns: "repeat(4, 1fr)",\ngap: "24px",`}
              />
              <CodeExample
                title="Section Vertical Padding"
                code={`padding: "96px 0",\n// or padding: "96px var(--page-padding)",`}
              />
            </div>
          </SubSection>
        </Section>

        {/* ===== 15. BORDER RADIUS ===== */}
        <Section title="15. Border Radius" id="border-radius">
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "end" }}>
            {[
              { name: "Small", value: "8px", variable: "--radius-sm", usage: "Sidebar buttons, tags" },
              { name: "Medium", value: "16px", variable: "--radius-md", usage: "Badges, inner panels" },
              { name: "Large", value: "30px", variable: "--radius-lg", usage: "Cards, CTA sections" },
              { name: "Pill", value: "50px", variable: "--radius-pill", usage: "Buttons, toggles" },
              { name: "Full", value: "100px", variable: "--radius-full", usage: "Icon circles, .btn-primary" },
            ].map((r) => (
              <div key={r.name} style={{ textAlign: "center", width: "120px" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--color-primary)",
                    borderRadius: r.value,
                    opacity: 0.8,
                    margin: "0 auto",
                  }}
                />
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginTop: "8px" }}>
                  {r.name}
                </p>
                <code style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{r.variable}</code>
                <p style={{ fontSize: "11px", color: "var(--color-gray-500)", marginTop: "4px" }}>{r.usage}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ===== 16. SHADOWS ===== */}
        <Section title="16. Shadows" id="shadows">
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              {
                name: "Card",
                variable: "--shadow-card",
                value: "0px 1px 3px rgba(16,24,40,0.1), 0px 1px 2px rgba(16,24,40,0.06)",
                usage: "Default card, resting state",
              },
              {
                name: "Card Hover",
                variable: "--shadow-card-hover",
                value: "0px 4px 8px -2px rgba(16,24,40,0.1), 0px 2px 4px -2px rgba(16,24,40,0.06)",
                usage: "Cards on hover, button hover",
              },
              {
                name: "Large",
                variable: "--shadow-lg",
                value: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
                usage: "Dropdown menus, elevated pricing card",
              },
            ].map((s) => (
              <div key={s.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "160px",
                    height: "100px",
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: s.value,
                  }}
                />
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginTop: "12px" }}>
                  {s.name}
                </p>
                <code style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{s.variable}</code>
                <p style={{ fontSize: "11px", color: "var(--color-gray-500)", marginTop: "4px", maxWidth: "160px" }}>{s.usage}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "8px" }}>
              Additional inline shadows used:
            </p>
            <TokenTable
              items={[
                { name: "Product photo", value: "filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15))" },
                { name: "iPhone mockup", value: "boxShadow: 0 30px 60px rgba(0,0,0,0.15)" },
                { name: "Popup cards", value: "boxShadow: 0 8px 30px rgba(0,0,0,0.12)" },
                { name: "Floating chips", value: "boxShadow: 0 4px 20px rgba(0,0,0,0.08)" },
              ]}
            />
          </div>
        </Section>

        {/* ===== 17. GLASS EFFECT ===== */}
        <Section title="17. Glass Effect" id="glass-effect">
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <div
              style={{
                width: "200px",
                height: "80px",
                background: "var(--color-primary)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(var(--glass-blur))",
                  WebkitBackdropFilter: "blur(var(--glass-blur))",
                  border: "1px solid white",
                  borderRadius: "var(--radius-pill)",
                  padding: "8px 24px",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Glass Effect
              </div>
            </div>
            <TokenTable
              items={[
                { name: "--glass-bg", value: "rgba(255, 255, 255, 0.2)" },
                { name: "--glass-blur", value: "14.85px" },
                { name: "Hover", value: "background → rgba(255, 255, 255, 0.3)" },
                { name: "Border", value: "1px solid white" },
              ]}
            />
          </div>
        </Section>

        {/* ===== 18. BUTTONS ===== */}
        <Section title="18. Buttons" id="buttons">
          <SubSection title=".btn-primary — Primary Pill (with icon circle)">
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ textDecoration: "none" }}>
                <span className="btn-icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Sign Up Free
              </button>
            </div>
            <TokenTable
              items={[
                { name: "Height", value: "60px" },
                { name: "Padding", value: "12px 28px 12px 4px" },
                { name: "Background", value: "var(--color-surface-muted) #fafafa" },
                { name: "Radius", value: "var(--radius-full) 100px" },
                { name: "Font", value: "18px / 26px / weight 700" },
                { name: "Icon circle", value: "52px, background: var(--gradient-primary)" },
                { name: "Hover", value: "shadow-card-hover + translateY(-1px)" },
              ]}
            />
          </SubSection>

          <SubSection title=".btn-secondary — Secondary Pill (no icon)">
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn-secondary">Speak to Human</button>
            </div>
            <TokenTable
              items={[
                { name: "Height", value: "60px" },
                { name: "Padding", value: "12px 28px" },
                { name: "Background", value: "var(--color-surface-muted) #fafafa" },
                { name: "Same as .btn-primary", value: "but without the icon circle" },
              ]}
            />
          </SubSection>

          <SubSection title=".btn-cta — CTA Button (white, for colored sections)">
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn-cta">Learn More</button>
            </div>
            <TokenTable
              items={[
                { name: "Background", value: "var(--color-white)" },
                { name: "Border", value: "1px solid #eeeff4" },
                { name: "Radius", value: "var(--radius-pill) 50px" },
              ]}
            />
          </SubSection>

          <SubSection title=".btn-glass — Glass Button (frosted, on teal bg)">
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <div
                style={{
                  background: "var(--color-primary)",
                  padding: "24px 32px",
                  borderRadius: "16px",
                }}
              >
                <button className="btn-glass">Get a Demo</button>
              </div>
            </div>
            <TokenTable
              items={[
                { name: "Background", value: "rgba(255, 255, 255, 0.2) + backdrop blur 14.85px" },
                { name: "Border", value: "1px solid white" },
                { name: "Radius", value: "var(--radius-full) 100px" },
                { name: "Text color", value: "white" },
              ]}
            />
          </SubSection>

          <SubSection title="Header Buttons">
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <div
                style={{
                  background: "var(--color-primary)",
                  padding: "20px 24px",
                  borderRadius: "12px",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <a href="#" className="btn-header-outline" style={{ textDecoration: "none" }}>
                  Log In
                </a>
                <a href="#" className="btn-header-filled" style={{ textDecoration: "none" }}>
                  Get Demo
                </a>
              </div>
            </div>
            <TokenTable
              items={[
                { name: ".btn-header-outline", value: "Transparent bg, 1px white border, white text, 40px height, 100px width" },
                { name: ".btn-header-filled", value: "White bg, no border, dark text, 40px height, 100px width" },
                { name: "Font", value: "14px / 20px / weight 700" },
                { name: "Radius", value: "var(--radius-pill)" },
              ]}
            />
          </SubSection>

          <SubSection title="Inline Button Variants (not in globals.css)">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "12px" }}>
              These button styles are defined inline in page components:
            </p>
            <TokenTable
              items={[
                { name: "Gradient CTA", value: "background: var(--gradient-primary), white text, radius-pill, 48px height" },
                { name: "Outline Card Button", value: "1px solid gray-200 border, radius-pill, gray-900 text, 14px font" },
                { name: "Teal Solid", value: "background: var(--color-primary), white text, radius-pill" },
                { name: "CTA Outline (on teal)", value: "2px solid white border, transparent bg, white text" },
                { name: "Pricing Toggle", value: "Pill container with 4px padding, inner buttons switch bg gray-900/transparent" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 19. CARDS ===== */}
        <Section title="19. Cards" id="cards">
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div className="card" style={{ width: "300px" }}>
              <h4 style={{ fontSize: "var(--text-h4)", marginBottom: "8px" }}>Base Card</h4>
              <p style={{ fontSize: "var(--text-body-sm)", color: "var(--color-gray-500)" }}>
                .card class — white bg, border-radius-lg, shadow-card, hover lift
              </p>
            </div>
            <div
              className="section-primary"
              style={{ width: "300px", padding: "32px" }}
            >
              <h4 style={{ fontSize: "var(--text-h4)", color: "white", marginBottom: "8px" }}>
                Primary Section
              </h4>
              <p style={{ fontSize: "var(--text-body-sm)", opacity: 0.8 }}>
                .section-primary — teal bg, white text
              </p>
            </div>
          </div>

          <SubSection title="Card Specs">
            <TokenTable
              items={[
                { name: ".card background", value: "var(--color-white)" },
                { name: ".card border-radius", value: "var(--radius-lg) 30px" },
                { name: ".card padding", value: "var(--space-8) 32px" },
                { name: ".card shadow", value: "var(--shadow-card)" },
                { name: ".card:hover shadow", value: "var(--shadow-card-hover)" },
                { name: ".card:hover transform", value: "translateY(-2px)" },
                { name: ".card transition", value: "box-shadow 0.2s ease, transform 0.2s ease" },
              ]}
            />
          </SubSection>

          <SubSection title="Card Variants (inline)">
            <TokenTable
              items={[
                { name: "Device Card", value: "card class + padding:0, overflow:hidden. Image area 200px height, #fafafa bg. Text area 24px padding." },
                { name: "Product Card", value: "card class + padding:32px. Contains SVG logo, description, outline button." },
                { name: "Pricing Card (default)", value: "White bg, radius-lg, 36px/28px padding, shadow-card, 1px border gray-200" },
                { name: "Pricing Card (featured)", value: "Same + 2px border primary, shadow-lg, transform:scale(1.02), z-index:1" },
                { name: "CTA Card", value: "Teal bg, radius-lg, 64px/80px padding, with grid pattern overlay" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 20. BADGE ===== */}
        <Section title="20. Badge" id="badge">
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
            <span className="badge">New</span>
            <span className="badge">Beta</span>
            <span className="badge">Popular</span>
          </div>
          <TokenTable
            items={[
              { name: "Class", value: ".badge" },
              { name: "Background", value: "var(--color-primary)" },
              { name: "Text", value: "white, 12px, weight 500" },
              { name: "Padding", value: "2px 8px" },
              { name: "Radius", value: "var(--radius-md) 16px" },
            ]}
          />
          <p style={{ fontSize: "13px", color: "var(--color-gray-500)", marginTop: "12px" }}>
            <strong>Pricing &quot;Most Popular&quot; badge:</strong> Inline variant — gray-100 bg, gray-900 text, 4px/12px padding, radius-pill, 12px font, weight 700.
          </p>
        </Section>

        {/* ===== 21. FEATURE TABS ===== */}
        <Section title="21. Feature Tabs" id="feature-tabs">
          <div style={{ display: "flex", gap: "32px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", width: "300px" }}>
              <div className="feature-tab active">
                <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-gray-900)" }}>Active Tab</p>
                <p style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>This tab is selected</p>
              </div>
              <div className="feature-tab">
                <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-gray-900)" }}>Inactive Tab</p>
                <p style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>Click to select</p>
              </div>
            </div>
            <TokenTable
              items={[
                { name: ".feature-tab", value: "border-left: 4px solid gray-100, padding: 12px 0 12px 24px" },
                { name: ".feature-tab.active", value: "border-left-color: primary" },
                { name: "Transition", value: "border-color 0.2s ease" },
                { name: "Cursor", value: "pointer" },
              ]}
            />
          </div>
        </Section>

        {/* ===== 22. GRID PATTERN ===== */}
        <Section title="22. Grid Pattern Overlay" id="grid-pattern-overlay">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              background: "var(--color-primary)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
            }}
          >
            <div className="grid-pattern">
              {Array.from({ length: 300 }).map((_, i) => (
                <div key={i} className="grid-cell" />
              ))}
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "white",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Grid Pattern Overlay
            </div>
          </div>
          <TokenTable
            items={[
              { name: ".grid-pattern", value: "position: absolute, inset: 0, grid 20×15" },
              { name: ".grid-cell", value: "border-right + border-bottom: 1px solid rgba(255,255,255,0.2)" },
              { name: "Mask", value: "radial-gradient(ellipse at center, black 0%, transparent 70%)" },
              { name: "Cell count", value: "300 divs (20 cols × 15 rows)" },
              { name: "Usage", value: "CTA sections on teal backgrounds, typically opacity: 0.3" },
            ]}
          />
        </Section>

        {/* ===== 23. ICON SYSTEM ===== */}
        <Section title="23. Icon System" id="icon-system">
          <SubSection title="Gradient Circle Icons (40×40)">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "16px" }}>
              Used in dropdown menus for industries, payments, partners, about. Each is a 40×40 SVG with gradient circle background and white stroke icons.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
              {[
                "/images/industries/icon-cstore.svg",
                "/images/industries/icon-vape.svg",
                "/images/industries/icon-liquor.svg",
                "/images/payments/icon-in-person.svg",
                "/images/payments/icon-vault.svg",
                "/images/partners/icon-agents.svg",
                "/images/about/icon-story.svg",
                "/images/about/icon-careers.svg",
              ].map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" width={40} height={40} />
              ))}
            </div>
            <TokenTable
              items={[
                { name: "Size", value: "40×40px (rendered at 36×36 in dropdowns)" },
                { name: "Circle background", value: "var(--gradient-primary) — teal to blue" },
                { name: "Icon stroke", value: "White, 1.2–1.5px stroke weight" },
                { name: "Format", value: "SVG files in /public/images/{section}/" },
              ]}
            />
          </SubSection>

          <SubSection title="Menu Icons (32×32)">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>
              Used in Platform dropdown for product groups. Located at <code>/images/menu/</code>. Rendered at 32×32 with the Image component.
            </p>
          </SubSection>

          <SubSection title="Inline SVG Icons">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "12px" }}>
              Common icons created as inline SVGs or helper components:
            </p>
            <TokenTable
              items={[
                { name: "ArrowRight", value: "24×24 viewBox, currentColor stroke, strokeWidth 2. Takes size prop." },
                { name: "TealCheck", value: "24×24 teal circle + white checkmark SVG (12×12 inner)" },
                { name: "Chevron Down", value: "16×16 viewBox, white stroke, 1.5 strokeWidth (nav arrows)" },
                { name: "Checkmark (pricing)", value: "18×18, teal circle bg at 0.15 opacity + teal stroke check" },
              ]}
            />
          </SubSection>

          <SubSection title="Social Icons (footer)">
            <TokenTable
              items={[
                { name: "Location", value: "/images/footer/social-x.svg, social-fb.svg, linkedin.svg, social-ig.svg, social-yt.svg" },
                { name: "Size", value: "22×22px" },
                { name: "Opacity", value: "0.6 → 1.0 on hover, 0.15s ease" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 24. SECTION PATTERNS ===== */}
        <Section title="24. Section Patterns" id="section-patterns">
          <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "24px" }}>
            Pages are built from composable section patterns. Each section is a function component.
          </p>

          <SubSection title="Hero Section">
            <TokenTable
              items={[
                { name: "Background", value: "white" },
                { name: "Layout", value: "Two-column grid (1fr 1fr), gap 64px, center aligned" },
                { name: "Top padding", value: "120px (accounts for sticky header)" },
                { name: "Bottom padding", value: "80px" },
                { name: "Left column", value: "H1 (52px/62px/900) + body text (16px/26px)" },
                { name: "Right column", value: "Product photo with decorative elements + animations" },
                { name: "Decorative circle", value: "420px cream circle (#f3efe9) behind product" },
              ]}
            />
          </SubSection>

          <SubSection title="Alternating Content Section">
            <TokenTable
              items={[
                { name: "Background", value: "Alternates between white and #f5f5f5" },
                { name: "Layout", value: "Two-column grid (1fr 1fr), gap 80px" },
                { name: "Padding", value: "96px 0" },
                { name: "Left column", value: "Illustration (inline SVG) or product mockup" },
                { name: "Right column", value: "H2 (40px/48px/900) + body text + CTA button" },
              ]}
            />
          </SubSection>

          <SubSection title="Feature List Section (Why SuperSonic Pay)">
            <TokenTable
              items={[
                { name: "Layout", value: "Two-column grid. Left: text+features, Right: phone mockup" },
                { name: "Feature list", value: "TealCheck icon (24px) + title (15px/700) + desc (14px/400)" },
                { name: "Feature gap", value: "24px between items" },
                { name: "Decorative", value: "340px cream circle behind phone mockup" },
              ]}
            />
          </SubSection>

          <SubSection title="Card Grid Section (Connected Tools / Our Products)">
            <TokenTable
              items={[
                { name: "Header", value: "Centered H2 (36px/44px/900), marginBottom 56px" },
                { name: "Grid", value: "3 or 4 columns, gap 24px" },
                { name: "Section padding", value: "96px top/bottom" },
              ]}
            />
          </SubSection>

          <SubSection title="Pricing Section">
            <TokenTable
              items={[
                { name: "Header", value: "Centered H2 + subtitle + billing toggle" },
                { name: "Toggle", value: "Pill container with Annual/Monthly buttons" },
                { name: "Cards", value: "3 columns, middle card scaled 1.02 with teal border" },
                { name: "Price display", value: "42px/900 weight, /per month suffix 15px/500" },
                { name: "Feature list", value: "Checkmark icon + feature text, 12px gap" },
              ]}
            />
          </SubSection>

          <SubSection title="Final CTA Section">
            <TokenTable
              items={[
                { name: "Container", value: "max-width-content (1280px)" },
                { name: "Card", value: "Teal bg, radius-lg, 64px 80px padding" },
                { name: "Grid overlay", value: ".grid-pattern with 300 cells at 0.3 opacity" },
                { name: "Content", value: "Centered H2 (white) + subtitle + 2 buttons" },
                { name: "Buttons", value: "Outline (2px white border) + Solid (white bg)" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 25. NAVIGATION & DROPDOWNS ===== */}
        <Section title="25. Navigation & Dropdowns" id="navigation-dropdowns">
          <SubSection title="Header">
            <TokenTable
              items={[
                { name: "Position", value: "sticky, top: 0, z-index: 50" },
                { name: "Background", value: "var(--color-primary)" },
                { name: "Height", value: "var(--header-height) 80px" },
                { name: "Border", value: "1px solid rgba(255,255,255,0.1)" },
                { name: "Layout", value: "Flex, space-between, centered items" },
                { name: "Nav links", value: "16px / 24px / weight 700, white, gap 32px" },
                { name: "Logo", value: "46×46px, /images/logo/logo-white.svg" },
              ]}
            />
          </SubSection>

          <SubSection title="Dropdown Menus">
            <TokenTable
              items={[
                { name: "Position", value: "Absolute, below header (top: var(--header-height))" },
                { name: "Platform dropdown", value: 'Left-aligned to logo, full nav width. Uses logo→About edge measurement.' },
                { name: "Other dropdowns", value: "Centered under trigger: left: triggerCenter, transform: translateX(-50%)" },
                { name: "Background", value: "var(--color-white)" },
                { name: "Border", value: "1px solid #eaecf0" },
                { name: "Shadow", value: "var(--shadow-lg)" },
                { name: "Border radius", value: "12px" },
                { name: "Close behavior", value: "150ms delay timeout on mouseLeave (cancelable)" },
              ]}
            />
          </SubSection>

          <SubSection title="Sidebar Navigation (inside dropdowns)">
            <TokenTable
              items={[
                { name: "Component", value: "SidebarNav — shared across all dropdown menus" },
                { name: "Item font", value: "17px / 26px / weight 600" },
                { name: "Item padding", value: "11px 20px" },
                { name: "Active state", value: "color: primary, background: rgba(10, 174, 184, 0.1)" },
                { name: "Inactive state", value: "color: gray-900, background: transparent" },
                { name: "Radius", value: "8px" },
                { name: "Interaction", value: "Hover to switch category (onMouseEnter)" },
                { name: "Gap", value: "4px between items, 20px container padding" },
              ]}
            />
          </SubSection>

          <SubSection title="Dropdown Content Panels">
            <TokenTable
              items={[
                { name: "Section label", value: "12–13px, weight 700, tracking 0.24px, uppercase, color #98a2b3" },
                { name: "Group title (Platform)", value: "18px / 26px / weight 600, with 32px icon" },
                { name: "Item link", value: "16–17px / 22–26px / weight 600, hover → primary color" },
                { name: "Icon+label items", value: "36×36 icon, 14px gap, 20px vertical gap between items" },
                { name: "Content padding", value: "20px 24px 20px 0 (no left pad, sidebar provides it)" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 26. ANIMATION & INTERACTION ===== */}
        <Section title="26. Animation & Interaction" id="animation-interaction">
          <SubSection title="CSS Keyframe Animations (Hero)">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "12px" }}>
              Defined in a &lt;style&gt; tag inside the PetroHero component. All loop on 5–5.5s infinite cycles.
            </p>
            <TokenTable
              items={[
                { name: "deviceFloat", value: "4s ease-in-out infinite. translateY(0) → translateY(-8px)" },
                { name: "cardTap", value: "5.5s. Card enters from upper-right, swoops to device, taps, retreats" },
                { name: "cardShadow", value: "5.5s. Shadow deepens as card approaches, lightens as it retreats" },
                { name: "nfcWave1/2/3", value: "5.5s. Concentric circles pulse outward at tap moment (staggered)" },
                { name: "approvedPopup", value: "5s. Slides up from below with 'Payment Approved' text" },
                { name: "amountFloat", value: "5s. '$42.50' chip fades in from below, floats, fades out" },
                { name: "subtlePulse", value: "5s. Green circle pulses box-shadow at approval moment" },
              ]}
            />
          </SubSection>

          <SubSection title="Hover Transitions (global CSS)">
            <TokenTable
              items={[
                { name: "Button hover", value: "box-shadow elevate + translateY(-1px), transition 0.2s ease" },
                { name: "Card hover", value: "shadow-card → shadow-card-hover + translateY(-2px), 0.2s ease" },
                { name: "Glass hover", value: "bg opacity 0.2 → 0.3 + translateY(-1px)" },
                { name: "Tab active", value: "border-left color: gray-100 → primary, 0.2s ease" },
              ]}
            />
          </SubSection>

          <SubSection title="Hover Transitions (inline event handlers)">
            <TokenTable
              items={[
                { name: "Link hover", value: "color: gray-500 → primary (onMouseEnter/Leave)" },
                { name: "Dropdown item hover", value: "color: gray-900 → primary" },
                { name: "Social icon hover", value: "opacity: 0.6 → 1.0, transition: opacity 0.15s ease" },
                { name: "Gradient button hover", value: "translateY(-1px) + boxShadow: 0 8px 20px rgba(10,174,184,0.3)" },
                { name: "Nav arrow open", value: "transform: rotate(180deg), transition 0.2s ease" },
                { name: "Sidebar nav", value: "all 0.15s ease (color + background)" },
              ]}
            />
          </SubSection>
        </Section>

        {/* ===== 27. DATA ARCHITECTURE ===== */}
        <Section title="27. Data Architecture" id="data-architecture">
          <SubSection title="/src/lib/data.ts — Central Data Store">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)", marginBottom: "12px" }}>
              All static content lives in this file. Import and map over arrays to render UI.
            </p>
            <TokenTable
              items={[
                { name: "navLinks", value: "{ label: string, hasDropdown: boolean }[] — 6 items" },
                { name: "platformCategories", value: "{ label: string, key: string }[] — sidebar nav for Platform dropdown" },
                { name: "sellAnywhereGroups", value: "{ icon, title, items: {label}[] }[] — 5 groups" },
                { name: "runYourStoreGroups", value: "Same structure — 3 groups" },
                { name: "fuelForecourtGroups", value: "Same structure — 2 groups" },
                { name: "growProtectGroups", value: "Same structure — 4 groups" },
                { name: "industriesCategories", value: "Sidebar nav items for Industries dropdown" },
                { name: "paymentsCategories", value: "Sidebar nav items for Payments dropdown" },
                { name: "partnersCategories", value: "Sidebar nav items for Partners dropdown" },
                { name: "aboutCategories", value: "Sidebar nav items for About dropdown" },
                { name: "featureCards", value: "{ icon, title, description }[] — homepage cards" },
                { name: "serviceCards", value: "{ icon, title, description }[] — service carousel" },
                { name: "featureTabs", value: "{ title, description }[] — feature tab content" },
                { name: "blogPosts", value: "{ image, excerpt }[] — blog section" },
                { name: "footerColumns", value: "FooterColumn[] — 3 columns of FooterSection[]" },
                { name: "socialLinks", value: "{ icon, label, href }[] — 5 social icons" },
              ]}
            />
          </SubSection>

          <SubSection title="Types">
            <CodeExample
              title="Exported Types (from data.ts)"
              code={`type FooterSection = { title: string; links: { label: string; href: string }[] };
type FooterColumn = FooterSection[];`}
            />
            <div style={{ marginTop: "12px" }}>
              <CodeExample
                title="Internal Types (in Header.tsx)"
                code={`type GroupData = { icon: string; title: string; items: { label: string }[] };
type IndustryGroup = { label: string; items: { icon: string; label: string }[] };`}
              />
            </div>
          </SubSection>

          <SubSection title="Dropdown Content (in Header.tsx)">
            <p style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>
              Each dropdown&apos;s content is defined as a <code>Record&lt;string, IndustryGroup[]&gt;</code> inside Header.tsx:
              <code> industriesContent</code>, <code>paymentsContent</code>, <code>partnersContent</code>, <code>aboutContent</code>.
              Platform uses a separate structure mapping category keys to left/right column GroupData arrays.
            </p>
          </SubSection>
        </Section>

        {/* ===== 28. FILE STRUCTURE ===== */}
        <Section title="28. File Structure" id="file-structure">
          <CodeExample
            title="Project Structure"
            code={`ssposweb/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens + component classes
│   │   ├── layout.tsx           # Root layout (Lato font, Header/Footer wrapper)
│   │   ├── page.tsx             # Homepage
│   │   ├── pos/page.tsx         # POS/Petro page (7 sections + animations)
│   │   └── design/page.tsx      # This design system page
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx       # Sticky header + 5 dropdown menus
│   │       └── Footer.tsx       # Multi-column footer
│   └── lib/
│       └── data.ts              # All static data arrays + types
├── public/
│   └── images/
│       ├── logo/                # logo-white.svg, logo-dark.svg
│       ├── menu/                # Platform dropdown icons (32px)
│       ├── industries/          # Industry dropdown icons (40px gradient)
│       ├── payments/            # Payment dropdown icons (40px gradient)
│       ├── partners/            # Partner dropdown icons (40px gradient)
│       ├── about/               # About dropdown icons (40px gradient)
│       ├── features/            # Homepage feature card icons
│       ├── services/            # Service section icons
│       ├── blog/                # Blog post images
│       ├── footer/              # Social icons, app store badges
│       └── pos/                 # POS product photos (bg-removed PNGs)
│           ├── vp550-side.png   # 800×306 — hero image
│           ├── vp550-profile.png # 800×300
│           ├── vp550-dock.png   # 800×676
│           └── vp550-front.png  # 800×1724
└── next.config.ts`}
          />
        </Section>

        {/* ===== 29. UTILITY CLASSES ===== */}
        <Section title="29. Utility Classes" id="utility-classes">
          <TokenTable
            items={[
              { name: ".container-main", value: "max-width: 1280px, centered, 80px horizontal padding" },
              { name: ".section-padding", value: "padding-top & bottom: var(--space-24) 96px" },
              { name: ".scrollbar-hide", value: "Hides scrollbars on all browsers (carousel usage)" },
              { name: ".service-card", value: "flex: 0 0 400px, scroll-snap-align: start" },
              { name: ".section-primary", value: "Teal background, white text, radius-lg" },
            ]}
          />
        </Section>

        {/* ===== 30. AI AGENT QUICK REFERENCE ===== */}
        <Section title="30. Quick Reference for AI Agents" id="ai-quick-reference">
          <div style={{ background: "var(--color-gray-100)", borderRadius: "16px", padding: "32px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "16px" }}>
              When building a new page:
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "var(--color-gray-600)" }}>
              <p>1. Add <code>&quot;use client&quot;</code> at top. Import <code>Header</code> and <code>Footer</code> from <code>@/components/layout</code>.</p>
              <p>2. Wrap page in <code>&lt;Header /&gt; &lt;main&gt;...&lt;/main&gt; &lt;Footer /&gt;</code>.</p>
              <p>3. Create each section as a separate function component in the same file.</p>
              <p>4. Use inline styles with CSS variable references: <code>color: &quot;var(--color-gray-500)&quot;</code>.</p>
              <p>5. Section container: <code>maxWidth: &quot;var(--max-width-page)&quot;, margin: &quot;0 auto&quot;, padding: &quot;96px var(--page-padding)&quot;</code>.</p>
              <p>6. For headings: weight 900, gray-900. For body: weight 400–500, gray-500. For links/hover: primary.</p>
              <p>7. Use <code>.card</code> class for interactive cards. Use <code>.btn-primary</code>/<code>.btn-secondary</code> for CTAs.</p>
              <p>8. Hover effects via <code>onMouseEnter</code>/<code>onMouseLeave</code> on <code>e.currentTarget.style</code>.</p>
              <p>9. Move static data to <code>/src/lib/data.ts</code> if it will be reused.</p>
              <p>10. Images via <code>next/image</code> &lt;Image&gt; component, never raw &lt;img&gt;. Product photos in <code>/public/images/</code>.</p>
              <p>11. Grid pattern for CTA sections: <code>.grid-pattern</code> + 300 <code>.grid-cell</code> divs.</p>
              <p>12. Animations: Define <code>@keyframes</code> in a <code>&lt;style&gt;</code> tag inside the component.</p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

/* ───── Helper Components ───── */

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} style={{ marginBottom: "64px" }}>
      <h2
        style={{
          fontSize: "var(--text-h2)",
          fontWeight: 900,
          color: "var(--color-gray-900)",
          marginBottom: "32px",
          paddingBottom: "12px",
          borderBottom: "2px solid var(--color-gray-200)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h3
        style={{
          fontSize: "var(--text-h4)",
          fontWeight: 700,
          color: "var(--color-gray-900)",
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function ColorSwatch({
  name,
  value,
  variable,
  border,
  usage,
}: {
  name: string;
  value: string;
  variable: string;
  border?: boolean;
  usage?: string;
}) {
  return (
    <div style={{ width: "140px" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          background: value,
          borderRadius: "12px",
          border: border ? "1px solid var(--color-gray-200)" : "none",
        }}
      />
      <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginTop: "8px" }}>
        {name}
      </p>
      <p style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{value}</p>
      <code style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{variable}</code>
      {usage && (
        <p style={{ fontSize: "10px", color: "var(--color-gray-500)", marginTop: "4px" }}>{usage}</p>
      )}
    </div>
  );
}

function GradientSwatch({
  name,
  value,
  variable,
  desc,
}: {
  name: string;
  value: string;
  variable: string;
  desc?: string;
}) {
  return (
    <div style={{ width: "200px" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          background: value,
          borderRadius: "12px",
        }}
      />
      <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginTop: "8px" }}>
        {name}
      </p>
      <p style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{desc || "Teal → Blue"}</p>
      <code style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{variable}</code>
    </div>
  );
}

function TypeSample({
  name,
  size,
  lineHeight,
  tracking,
  variable,
  weight = 700,
  usage,
}: {
  name: string;
  size: string;
  lineHeight: string;
  tracking?: string;
  variable: string;
  weight?: number;
  usage?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "24px",
        borderBottom: "1px solid var(--color-gray-100)",
        paddingBottom: "12px",
      }}
    >
      <div style={{ width: "200px", flexShrink: 0 }}>
        <code style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{variable}</code>
        <br />
        <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>
          {size} / {lineHeight} / w{weight}
          {tracking ? ` / ${tracking}` : ""}
        </span>
        {usage && (
          <>
            <br />
            <span style={{ fontSize: "11px", color: "var(--color-primary)" }}>{usage}</span>
          </>
        )}
      </div>
      <p
        style={{
          fontSize: size,
          lineHeight,
          letterSpacing: tracking || "0",
          fontWeight: weight,
          color: "var(--color-gray-900)",
        }}
      >
        {name}
      </p>
    </div>
  );
}

function TokenTable({ items }: { items: { name: string; value: string }[] }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "14px",
      }}
    >
      <thead>
        <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
          <th
            style={{
              textAlign: "left",
              padding: "8px 16px 8px 0",
              fontWeight: 700,
              color: "var(--color-gray-900)",
            }}
          >
            Token / Property
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "8px 0",
              fontWeight: 700,
              color: "var(--color-gray-900)",
            }}
          >
            Value / Usage
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={`${item.name}-${i}`} style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "8px 16px 8px 0", verticalAlign: "top" }}>
              <code style={{ color: "var(--color-gray-600)" }}>{item.name}</code>
            </td>
            <td style={{ padding: "8px 0", color: "var(--color-gray-500)" }}>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ConventionRule({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--color-primary)",
          flexShrink: 0,
          marginTop: "7px",
        }}
      />
      <div>
        <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "2px" }}>
          {title}
        </p>
        <p style={{ fontSize: "13px", color: "var(--color-gray-500)", lineHeight: "20px" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

function CodeExample({ title, code }: { title: string; code: string }) {
  return (
    <div>
      <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "6px" }}>
        {title}
      </p>
      <pre
        style={{
          background: "#1e2044",
          color: "#e0e0e0",
          padding: "16px 20px",
          borderRadius: "12px",
          fontSize: "13px",
          lineHeight: "20px",
          overflow: "auto",
          whiteSpace: "pre-wrap",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        {code}
      </pre>
    </div>
  );
}

function DoExample({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid #10b981", borderRadius: "12px", padding: "20px", position: "relative" }}>
      <span style={{ position: "absolute", top: "-10px", left: "12px", background: "#10b981", color: "white", fontSize: "11px", fontWeight: 700, padding: "2px 10px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Do</span>
      <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "8px" }}>{title}</p>
      <div style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>{children}</div>
    </div>
  );
}

function DontExample({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid #ef4444", borderRadius: "12px", padding: "20px", position: "relative" }}>
      <span style={{ position: "absolute", top: "-10px", left: "12px", background: "#ef4444", color: "white", fontSize: "11px", fontWeight: 700, padding: "2px 10px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Don&apos;t</span>
      <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "8px" }}>{title}</p>
      <div style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>{children}</div>
    </div>
  );
}

function MockupFrame({ label, width, height, children, bg }: { label: string; width?: string; height?: string; children: React.ReactNode; bg?: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: width || "100%", height: height || "auto", background: bg || "var(--color-gray-50)", border: "2px dashed var(--color-gray-200)", borderRadius: "12px", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {children}
      </div>
      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-500)", marginTop: "8px" }}>{label}</p>
    </div>
  );
}

function SpecCallout({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-block", background: "var(--color-primary)", color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", letterSpacing: "0.3px" }}>{label}</span>
  );
}

function PlatformSpec({ platform, profile, cover, post, story }: { platform: string; profile: string; cover: string; post: string; story?: string }) {
  return (
    <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
      <td style={{ padding: "8px 16px 8px 0", fontWeight: 700, color: "var(--color-gray-900)", fontSize: "14px" }}>{platform}</td>
      <td style={{ padding: "8px 16px 8px 0", color: "var(--color-gray-500)", fontSize: "13px" }}>{profile}</td>
      <td style={{ padding: "8px 16px 8px 0", color: "var(--color-gray-500)", fontSize: "13px" }}>{cover}</td>
      <td style={{ padding: "8px 16px 8px 0", color: "var(--color-gray-500)", fontSize: "13px" }}>{post}</td>
      <td style={{ padding: "8px 0", color: "var(--color-gray-500)", fontSize: "13px" }}>{story || "—"}</td>
    </tr>
  );
}
