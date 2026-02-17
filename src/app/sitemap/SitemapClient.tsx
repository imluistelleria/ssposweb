"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { PageData } from "@/lib/pages";
import Link from "next/link";

const categoryLabels: Record<string, string> = {
  Platform: "Platform",
  "Industries We Serve": "Industries We Serve",
  Payments: "Payments",
  Partners: "Partners",
  About: "About",
};

const categoryOrder = [
  "Platform",
  "Industries We Serve",
  "Payments",
  "Partners",
  "About",
];

export default function SitemapClient({
  grouped,
}: {
  grouped: Record<string, Record<string, Record<string, PageData[]>>>;
}) {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        {/* Hero */}
        <section
          style={{
            padding: "64px var(--page-padding) 48px",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              lineHeight: 1.2,
              fontWeight: 900,
              color: "var(--color-gray-900)",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}
          >
            Sitemap
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: "var(--color-gray-500)",
              maxWidth: "640px",
            }}
          >
            Browse every page on the SuperSonic POS website, organized by
            category.
          </p>
        </section>

        {/* Quick Links */}
        <section
          style={{
            padding: "0 var(--page-padding) 24px",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              borderBottom: "1px solid var(--color-gray-200)",
              paddingBottom: "16px",
              marginBottom: "32px",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              Homepage
            </Link>
            <Link
              href="/pos"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              POS
            </Link>
          </div>
        </section>

        {/* Sitemap Content */}
        <section
          style={{
            padding: "0 var(--page-padding) 96px",
            maxWidth: "var(--max-width-content)",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "64px",
            }}
          >
            {categoryOrder.map((mainMenu) => {
              const subMenus = grouped[mainMenu];
              if (!subMenus) return null;

              return (
                <div key={mainMenu}>
                  {/* Category Header */}
                  <h2
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.4,
                      fontWeight: 900,
                      color: "var(--color-gray-900)",
                      marginBottom: "32px",
                      paddingBottom: "12px",
                      borderBottom: "3px solid var(--color-primary)",
                      display: "inline-block",
                    }}
                  >
                    {categoryLabels[mainMenu] || mainMenu}
                  </h2>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                      gap: "32px",
                    }}
                  >
                    {Object.entries(subMenus).map(
                      ([subMenu1, subMenu2Groups]) => (
                        <div key={subMenu1}>
                          <h3
                            style={{
                              fontSize: "18px",
                              lineHeight: 1.4,
                              fontWeight: 700,
                              color: "var(--color-gray-900)",
                              marginBottom: "16px",
                            }}
                          >
                            {subMenu1}
                          </h3>

                          {Object.entries(subMenu2Groups).map(
                            ([subMenu2, pages]) => (
                              <div key={subMenu2} style={{ marginBottom: "16px" }}>
                                {subMenu2 !== subMenu1 && (
                                  <h4
                                    style={{
                                      fontSize: "13px",
                                      fontWeight: 700,
                                      color: "var(--color-gray-500)",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.26px",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    {subMenu2}
                                  </h4>
                                )}
                                <ul
                                  style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                  }}
                                >
                                  {pages.map((page) => (
                                    <li key={page.slug}>
                                      <Link
                                        href={page.slug}
                                        style={{
                                          fontSize: "14px",
                                          lineHeight: "20px",
                                          color: "var(--color-gray-600)",
                                          textDecoration: "none",
                                          fontWeight: 500,
                                        }}
                                      >
                                        {page.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
