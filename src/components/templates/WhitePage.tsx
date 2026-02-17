"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import { SITE_URL } from "@/lib/pages";
import Link from "next/link";

export default function WhitePage({ data }: { data: PageData }) {
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
      <main
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          style={{
            padding: "24px var(--page-padding) 0",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
          }}
        >
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              lineHeight: "20px",
              flexWrap: "wrap",
            }}
          >
            {data.breadcrumbs.map((crumb, i) => (
              <li
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Link
                  href={crumb.href}
                  style={{
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {crumb.label}
                </Link>
                <span
                  style={{ color: "var(--color-gray-200)", userSelect: "none" }}
                  aria-hidden="true"
                >
                  /
                </span>
              </li>
            ))}
            <li
              style={{
                color: "var(--color-gray-500)",
                fontWeight: 500,
              }}
              aria-current="page"
            >
              {data.title}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section
          style={{
            padding: "64px var(--page-padding) 48px",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Icon circle */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--color-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.28px",
              marginBottom: "12px",
            }}
          >
            {data.subMenu1}
          </p>

          <h1
            style={{
              fontSize: "48px",
              lineHeight: 1.2,
              fontWeight: 900,
              color: "var(--color-gray-900)",
              marginBottom: "20px",
              letterSpacing: "-0.5px",
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: "var(--color-gray-500)",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            {data.description}
          </p>
        </section>

        {/* Coming Soon Content */}
        <section
          style={{
            padding: "0 var(--page-padding) 64px",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "var(--color-gray-50)",
              borderRadius: "var(--radius-lg)",
              padding: "64px 48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--color-gray-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="var(--color-gray-500)"
                  strokeWidth="2"
                />
                <polyline
                  points="12 6 12 12 16 14"
                  stroke="var(--color-gray-500)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2
              style={{
                fontSize: "28px",
                lineHeight: 1.4,
                fontWeight: 700,
                color: "var(--color-gray-900)",
                marginBottom: "12px",
              }}
            >
              This Page Is Coming Soon
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.5,
                color: "var(--color-gray-500)",
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              We&apos;re building out the full details for{" "}
              <strong style={{ color: "var(--color-gray-900)" }}>
                {data.title}
              </strong>
              . In the meantime, here&apos;s what you can expect:
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 auto 0",
                maxWidth: "480px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: "left",
              }}
            >
              {[
                "Detailed product information & feature breakdown",
                "Use cases and industry-specific benefits",
                "Pricing and plan comparison",
                "Customer testimonials and success stories",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "15px",
                    lineHeight: 1.5,
                    color: "var(--color-gray-600)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "0 var(--page-padding) 96px",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "var(--color-primary)",
              borderRadius: "var(--radius-lg)",
              padding: "64px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                lineHeight: 1.2,
                fontWeight: 900,
                color: "var(--color-white)",
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Ready to See SuperSonic in Action?
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "520px",
                margin: "0 auto 32px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Schedule a personalized demo or contact our team to learn how
              SuperSonic POS can transform your business.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1,
              }}
            >
              <a
                href="#demo"
                className="btn-cta"
                style={{ minWidth: "160px" }}
              >
                Get a Demo
              </a>
              <a
                href="/about/company/contact-us"
                className="btn-glass"
                style={{ minWidth: "160px" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
