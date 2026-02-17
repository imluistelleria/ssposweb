"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { featureTabs } from "@/lib/data";

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(0);

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
            margin: "0 0 64px 0",
            textTransform: "capitalize",
          }}
        >
          Built For The Way You Work
        </h2>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left - Tab List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
          >
            {featureTabs.map((tab, index) => (
              <div
                key={tab.title}
                className={`feature-tab${index === activeTab ? " active" : ""}`}
                onClick={() => setActiveTab(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveTab(index);
                  }
                }}
              >
                <h3
                  style={{
                    fontSize: "var(--text-h4)",
                    lineHeight: "var(--leading-tight)",
                    fontWeight: 700,
                    color: "var(--color-gray-900)",
                    margin: 0,
                  }}
                >
                  {tab.title}
                </h3>

                {/* Show description only for active tab */}
                {index === activeTab && (
                  <div
                    style={{
                      marginTop: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "var(--text-body)",
                        lineHeight: "var(--leading-relaxed)",
                        color: "var(--color-gray-500)",
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {tab.description}
                    </p>
                    <a
                      href="#"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "var(--color-primary)",
                        fontWeight: 700,
                        fontSize: "var(--text-body)",
                        textDecoration: "none",
                      }}
                    >
                      Learn More
                      <ArrowIcon color="var(--color-primary)" size={20} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Illustration */}
          <div
            style={{
              position: "relative",
              minHeight: "460px",
            }}
          >
            {/* Blob background */}
            <Image
              src="/images/tabs/tab-bg.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              aria-hidden="true"
            />

            {/* Illustration images */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/images/tabs/tab-1a.png"
                alt="Feature illustration - main"
                width={300}
                height={220}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  top: "10%",
                  left: "10%",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
              <Image
                src="/images/tabs/tab-1b.png"
                alt="Feature illustration - detail"
                width={240}
                height={180}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  top: "35%",
                  right: "5%",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
              <Image
                src="/images/tabs/tab-1c.png"
                alt="Feature illustration - accent"
                width={200}
                height={150}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  bottom: "8%",
                  left: "20%",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-lg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
