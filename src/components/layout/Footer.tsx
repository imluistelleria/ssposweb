"use client";

import Image from "next/image";
import { footerColumns, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-white)",
        padding: "64px var(--page-padding) 48px",
        maxWidth: "var(--max-width-page)",
        margin: "0 auto",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          display: "flex",
          gap: "64px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column — Brand Info */}
        <div
          style={{
            width: "280px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "420px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/sspos-logo-color.svg"
              alt="SuperSonic POS"
              style={{ height: "80px", width: "auto", alignSelf: "flex-start" }}
            />
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "var(--color-gray-900)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              The speed you need...
            </p>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "18px",
                color: "var(--color-gray-500)",
                fontWeight: 500,
              }}
            >
              SuperSonic Pay is a product of MSYM Investments LLC. MSYM
              Investments LLC is a registered MSP/ISO of Elavon, Inc., Georgia, a
              wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
              <a
                href="tel:18007918324"
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "var(--color-gray-500)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Toll-Free: 800-791-TECH (8324)
              </a>
              <a
                href="mailto:sales@supersonicpos.com"
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Email: sales@supersonicpos.com
              </a>
            </div>

            {/* Address */}
            <div style={{ marginTop: "8px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--color-gray-900)",
                  lineHeight: "20px",
                  marginBottom: "4px",
                }}
              >
                Headquarters
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "var(--color-gray-500)",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                5850 W Cypress St, Suite A
                <br />
                Tampa, FL 33607
              </p>
            </div>
          </div>

          {/* Download App */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--color-gray-900)",
                letterSpacing: "0.24px",
                textTransform: "uppercase",
                lineHeight: "20px",
              }}
            >
              Download Our App
            </p>
            <div style={{ display: "flex", gap: "10px", alignItems: "start" }}>
              <Image
                src="/images/footer/app-store.png"
                alt="Download on the App Store"
                width={120}
                height={40}
              />
              <Image
                src="/images/footer/google-play.png"
                alt="Get it on Google Play"
                width={135}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Right Side — Link Columns */}
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: "40px",
            justifyContent: "space-between",
          }}
        >
          {footerColumns.map((col, ci) => (
            <div
              key={ci}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                minWidth: 0,
              }}
            >
              {col.map((section) => (
                <div
                  key={section.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.4,
                      fontWeight: 700,
                      color: "var(--color-gray-900)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {section.title}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {section.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "var(--color-gray-500)",
                          fontWeight: 500,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "var(--color-primary)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "var(--color-gray-500)";
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            height: "1px",
            background: "var(--color-gray-200)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "var(--color-gray-500)",
              fontWeight: 500,
            }}
          >
            &copy; {new Date().getFullYear()} SuperSonic POS. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                style={{ opacity: 0.6, transition: "opacity 0.15s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6";
                }}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={22}
                  height={22}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
