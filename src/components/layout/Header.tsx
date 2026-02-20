"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  navLinks,
  platformCategories,
  sellAnywhereGroups,
  runYourStoreGroups,
  fuelForecourtGroups,
  growProtectGroups,
  industriesCategories,
  paymentsCategories,
  partnersCategories,
  aboutCategories,
} from "@/lib/data";

// Which top-level dropdown menus support dropdowns
const DROPDOWN_MENUS = ["Platform", "Industries we Serve", "Payments", "Partners", "About"] as const;

export default function Header() {
  // Which top-level menu is open (null = closed)
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Active sidebar category within the open menu
  const [activeCategory, setActiveCategory] = useState("");
  const [dropdownRect, setDropdownRect] = useState({ left: 0, width: 0 });
  const [triggerCenter, setTriggerCenter] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const logoRef = useRef<HTMLAnchorElement>(null);
  const rightEdgeRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const defaultCategory: Record<string, string> = {
    Platform: "sell-anywhere",
    "Industries we Serve": "convenience-retail",
    Payments: "accept-payments",
    Partners: "partners",
    About: "company",
  };

  const measure = useCallback(() => {
    if (!logoRef.current || !rightEdgeRef.current || !containerRef.current)
      return;
    const containerBox = containerRef.current.getBoundingClientRect();
    const logoBox = logoRef.current.getBoundingClientRect();
    const edgeBox = rightEdgeRef.current.getBoundingClientRect();
    setDropdownRect({
      left: logoBox.left - containerBox.left,
      width: edgeBox.right - logoBox.left,
    });
  }, []);

  const openDropdown = useCallback(
    (menu: string) => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
      measure();
      const trigger = triggerRefs.current[menu];
      if (trigger && containerRef.current) {
        const containerBox = containerRef.current.getBoundingClientRect();
        const triggerBox = trigger.getBoundingClientRect();
        setTriggerCenter(triggerBox.left + triggerBox.width / 2 - containerBox.left);
      }
      setActiveCategory(defaultCategory[menu] || "");
      setOpenMenu(menu);
    },
    [measure],
  );

  const scheduleClose = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openMenu, measure]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        // Check if click was on any trigger
        const clickedTrigger = Object.values(triggerRefs.current).some(
          (ref) => ref && ref.contains(e.target as Node),
        );
        if (!clickedTrigger) {
          setOpenMenu(null);
        }
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openMenu]);

  // Platform data splits
  const sellLeft = sellAnywhereGroups.slice(0, 3);
  const sellRight = sellAnywhereGroups.slice(3);
  const runLeft = runYourStoreGroups.slice(0, 2);
  const runRight = runYourStoreGroups.slice(2);
  const growLeft = growProtectGroups.slice(0, 2);
  const growRight = growProtectGroups.slice(2);

  const platformContent: Record<
    string,
    { label: string; left: GroupData[]; right: GroupData[] }
  > = {
    "sell-anywhere": { label: "Sell Anywhere", left: sellLeft, right: sellRight },
    "run-your-store": { label: "Run Your Store", left: runLeft, right: runRight },
    "fuel-forecourt": {
      label: "Fuel & Forecourt",
      left: fuelForecourtGroups,
      right: [],
    },
    "workforce-finance": { label: "Workforce & Finance", left: [], right: [] },
    "grow-protect": { label: "Grow & Protect", left: growLeft, right: growRight },
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--color-primary)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "var(--header-height)",
          maxWidth: "var(--max-width-page)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Logo */}
        <a
          ref={logoRef}
          href="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/sspos-logo-white.svg"
            alt="SuperSonic POS"
            style={{ height: "56px", width: "auto" }}
          />
        </a>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => {
            const hasMenu = DROPDOWN_MENUS.includes(
              link.label as (typeof DROPDOWN_MENUS)[number],
            );
            const isAbout = link.label === "About";
            const isOpen = openMenu === link.label;

            return (
              <a
                key={link.label}
                ref={(el) => {
                  if (hasMenu) triggerRefs.current[link.label] = el;
                  if (isAbout) rightEdgeRef.current = el;
                }}
                href="#"
                onMouseEnter={hasMenu ? () => openDropdown(link.label) : undefined}
                onMouseLeave={hasMenu ? scheduleClose : undefined}
                onClick={
                  hasMenu
                    ? (e) => {
                        e.preventDefault();
                        if (isOpen) {
                          setOpenMenu(null);
                        } else {
                          openDropdown(link.label);
                        }
                      }
                    : undefined
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textDecoration: "none",
                }}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </nav>

        {/* Auth Buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a href="https://app.petrooutlet.com/login" target="_blank" rel="noopener noreferrer" className="btn-header-outline">
            Log In
          </a>
          <a href="#" className="btn-header-filled">
            Get Demo
          </a>
        </div>

        {/* ===== PLATFORM DROPDOWN ===== */}
        {openMenu === "Platform" && (
          <div
            ref={dropdownRef}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              top: "var(--header-height)",
              left: `${dropdownRect.left}px`,
              minWidth: `${dropdownRect.width}px`,
              background: "var(--color-white)",
              border: "1px solid #eaecf0",
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              zIndex: 49,
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            {/* Sidebar */}
            <SidebarNav
              items={platformCategories}
              activeKey={activeCategory}
              onHover={setActiveCategory}
            />

            {/* Content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px 20px 20px 0",
              }}
            >
              <PlatformPanel
                activeCategory={activeCategory}
                content={platformContent}
              />
            </div>
          </div>
        )}

        {/* ===== INDUSTRIES DROPDOWN ===== */}
        {openMenu === "Industries we Serve" && (
          <div
            ref={dropdownRef}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              top: "var(--header-height)",
              left: `${triggerCenter}px`,
              transform: "translateX(-50%)",
              background: "var(--color-white)",
              border: "1px solid #eaecf0",
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              zIndex: 49,
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            {/* Sidebar */}
            <SidebarNav
              items={industriesCategories}
              activeKey={activeCategory}
              onHover={setActiveCategory}
            />

            {/* Content — simple link list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px 24px 20px 0",
                minWidth: "260px",
              }}
            >
              <IndustriesPanel activeCategory={activeCategory} />
            </div>
          </div>
        )}

        {/* ===== PAYMENTS DROPDOWN ===== */}
        {openMenu === "Payments" && (
          <div
            ref={dropdownRef}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              top: "var(--header-height)",
              left: `${triggerCenter}px`,
              transform: "translateX(-50%)",
              background: "var(--color-white)",
              border: "1px solid #eaecf0",
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              zIndex: 49,
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <SidebarNav
              items={paymentsCategories}
              activeKey={activeCategory}
              onHover={setActiveCategory}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px 24px 20px 0",
                minWidth: "260px",
              }}
            >
              <PaymentsPanel activeCategory={activeCategory} />
            </div>
          </div>
        )}

        {/* ===== PARTNERS DROPDOWN ===== */}
        {openMenu === "Partners" && (
          <div
            ref={dropdownRef}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              top: "var(--header-height)",
              left: `${triggerCenter}px`,
              transform: "translateX(-50%)",
              background: "var(--color-white)",
              border: "1px solid #eaecf0",
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              zIndex: 49,
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <SidebarNav
              items={partnersCategories}
              activeKey={activeCategory}
              onHover={setActiveCategory}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px 24px 20px 0",
                minWidth: "260px",
              }}
            >
              <PartnersPanel activeCategory={activeCategory} />
            </div>
          </div>
        )}

        {/* ===== ABOUT DROPDOWN ===== */}
        {openMenu === "About" && (
          <div
            ref={dropdownRef}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              top: "var(--header-height)",
              left: `${triggerCenter}px`,
              transform: "translateX(-50%)",
              background: "var(--color-white)",
              border: "1px solid #eaecf0",
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              zIndex: 49,
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <SidebarNav
              items={aboutCategories}
              activeKey={activeCategory}
              onHover={setActiveCategory}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px 24px 20px 0",
                minWidth: "260px",
                whiteSpace: "nowrap",
              }}
            >
              <AboutPanel activeCategory={activeCategory} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ───── Shared sidebar ───── */

function SidebarNav({
  items,
  activeKey,
  onHover,
}: {
  items: { label: string; key: string }[];
  activeKey: string;
  onHover: (key: string) => void;
}) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        padding: "20px",
        whiteSpace: "nowrap",
      }}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            key={item.key}
            onMouseEnter={() => onHover(item.key)}
            onClick={() => onHover(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              textAlign: "left",
              padding: "11px 20px",
              fontSize: "17px",
              fontWeight: 600,
              color: isActive ? "var(--color-primary)" : "var(--color-gray-900)",
              background: isActive ? "rgba(10, 174, 184, 0.1)" : "transparent",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.15s ease",
              fontFamily: "inherit",
              lineHeight: "26px",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

/* ───── Platform content panel ───── */

type GroupData = {
  icon: string;
  title: string;
  items: { label: string; href?: string }[];
};

function PlatformPanel({
  activeCategory,
  content,
}: {
  activeCategory: string;
  content: Record<string, { label: string; left: GroupData[]; right: GroupData[] }>;
}) {
  const cat = content[activeCategory];
  if (!cat || (cat.left.length === 0 && cat.right.length === 0)) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--color-gray-500)",
          fontSize: "16px",
        }}
      >
        Coming soon
      </div>
    );
  }

  return (
    <>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.24px",
          textTransform: "uppercase",
          color: "#98a2b3",
        }}
      >
        {cat.label}
      </p>
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "6px 0",
          }}
        >
          {cat.left.map((g) => (
            <ProductGroup key={g.title} group={g} />
          ))}
        </div>
        {cat.right.length > 0 && (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "6px 0",
            }}
          >
            {cat.right.map((g) => (
              <ProductGroup key={g.title} group={g} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function ProductGroup({ group }: { group: GroupData }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ flexShrink: 0 }}>
        <Image src={group.icon} alt="" width={32} height={32} />
      </div>
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "var(--color-gray-900)",
            lineHeight: "26px",
          }}
        >
          {group.title}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            paddingBottom: "12px",
          }}
        >
          {group.items.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "22px",
                color: "var(--color-gray-900)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-gray-900)";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───── Industries content panel ───── */

function IndustriesPanel({ activeCategory }: { activeCategory: string }) {
  const groups = industriesContent[activeCategory];
  if (!groups) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--color-gray-500)",
          fontSize: "16px",
        }}
      >
        Coming soon
      </div>
    );
  }

  return (
    <>
      {groups.map((group, gi) => (
        <div key={group.label} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: gi > 0 ? "16px" : 0 }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.24px",
              textTransform: "uppercase",
              color: "#98a2b3",
              margin: 0,
            }}
          >
            {group.label}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "6px 0",
            }}
          >
            {group.items.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "26px",
                  color: "var(--color-gray-900)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-gray-900)";
                }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  style={{ flexShrink: 0 }}
                />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

type IndustryGroup = { label: string; items: { icon: string; label: string; href?: string }[] };

const industriesContent: Record<string, IndustryGroup[]> = {
  "convenience-retail": [
    {
      label: "Convenience Retail",
      items: [
        { icon: "/images/industries/icon-cstore.svg", label: "C-Stores & Mini-Marts", href: "/industries/convenience-retail/c-stores-and-mini-marts" },
        { icon: "/images/industries/icon-vape.svg", label: "Smoke, Vape & Tobacco Shops" },
        { icon: "/images/industries/icon-liquor.svg", label: "Liquor, Wine & Spirits" },
        { icon: "/images/industries/icon-bodega.svg", label: "Bodegas & Delis" },
        { icon: "/images/industries/icon-dollar.svg", label: "Dollar & Variety Stores" },
      ],
    },
  ],
  "specialty-retail": [
    {
      label: "Grocery & Specialty Retail",
      items: [
        { icon: "/images/industries/icon-ethnic-grocers.svg", label: "Ethnic Grocers" },
        { icon: "/images/industries/icon-supermarket.svg", label: "Supermarkets & Regional Chains" },
        { icon: "/images/industries/icon-hardware.svg", label: "Hardware & Home Stores" },
        { icon: "/images/industries/icon-health-beauty.svg", label: "Health & Beauty Shops" },
        { icon: "/images/industries/icon-specialty-food.svg", label: "Specialty Food Retail (Butcher/Seafood/Produce)" },
      ],
    },
  ],
  "food-beverage": [
    {
      label: "Food & Beverage",
      items: [
        { icon: "/images/industries/icon-qsr.svg", label: "QSR & Fast Casual" },
        { icon: "/images/industries/icon-cafe.svg", label: "Cafés, Bakeries & Dessert" },
        { icon: "/images/industries/icon-bars.svg", label: "Bars & Nightlife" },
        { icon: "/images/industries/icon-food-truck.svg", label: "Food Trucks & Ghost Kitchens" },
        { icon: "/images/industries/icon-hybrid.svg", label: "In-Store Food Programs & Hybrid Concepts" },
      ],
    },
    {
      label: "Food Service Highlights",
      items: [
        { icon: "/images/industries/icon-floor-plan.svg", label: "Floor Plan & Table Management" },
        { icon: "/images/industries/icon-reservations.svg", label: "OpenTable / Reservations" },
      ],
    },
  ],
  "fuel-travel-centers": [
    {
      label: "Fuel & Travel Centers",
      items: [
        { icon: "/images/industries/icon-gas-station.svg", label: "Gas Stations & Forecourt Retail" },
        { icon: "/images/industries/icon-travel-center.svg", label: "Travel Centers & Truck Stops" },
        { icon: "/images/industries/icon-multi-site.svg", label: "Multi-Site Fuel Operators" },
        { icon: "/images/industries/icon-cardlock.svg", label: "Commercial Fuel & Cardlock" },
      ],
    },
  ],
};

/* ───── Payments content panel ───── */

function PaymentsPanel({ activeCategory }: { activeCategory: string }) {
  const groups = paymentsContent[activeCategory];
  if (!groups) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--color-gray-500)",
          fontSize: "16px",
        }}
      >
        Coming soon
      </div>
    );
  }

  return (
    <>
      {groups.map((group, gi) => (
        <div key={group.label} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: gi > 0 ? "16px" : 0 }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.24px",
              textTransform: "uppercase",
              color: "#98a2b3",
              margin: 0,
            }}
          >
            {group.label}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "6px 0",
            }}
          >
            {group.items.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "26px",
                  color: "var(--color-gray-900)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-gray-900)";
                }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  style={{ flexShrink: 0 }}
                />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const paymentsContent: Record<string, IndustryGroup[]> = {
  "accept-payments": [
    {
      label: "Accept Payments",
      items: [
        { icon: "/images/payments/icon-in-person.svg", label: "In-Person Payments" },
        { icon: "/images/payments/icon-online.svg", label: "Online Payments & Invoicing" },
        { icon: "/images/payments/icon-recurring.svg", label: "Recurring & Subscriptions" },
        { icon: "/images/payments/icon-bank.svg", label: "Bank Payments (ACH / A2A)" },
        { icon: "/images/payments/icon-vault.svg", label: "Card Vaulting & Card-on-File" },
        { icon: "/images/payments/icon-platform.svg", label: "Platform Payments (ISVs)" },
        { icon: "/images/payments/icon-ebt.svg", label: "EBT, eWIC & SNAP Acceptance" },
        { icon: "/images/payments/icon-otc.svg", label: "OTC / Benefit Card Acceptance" },
      ],
    },
  ],
  "protect-margin": [
    {
      label: "Protect Your Margin",
      items: [
        { icon: "/images/payments/icon-dual-pricing.svg", label: "Dual Pricing", href: "/payments/protect-your-margin/dual-pricing" },
        { icon: "/images/payments/icon-surcharge.svg", label: "Surcharging" },
        { icon: "/images/payments/icon-enterprise.svg", label: "Enterprise & Custom Rates" },
        { icon: "/images/payments/icon-interchange.svg", label: "Interchange & Cost Optimization" },
        { icon: "/images/payments/icon-statement.svg", label: "Statement Review" },
      ],
    },
  ],
  "move-money": [
    {
      label: "Move Money Faster",
      items: [
        { icon: "/images/payments/icon-deposits.svg", label: "Faster Deposits & Funding" },
        { icon: "/images/payments/icon-payouts.svg", label: "Payouts & Instant Payouts" },
        { icon: "/images/payments/icon-wallet.svg", label: "SuperSonic Business Wallet" },
        { icon: "/images/payments/icon-stored-value.svg", label: "Consumer Stored Value / Store Wallet" },
      ],
    },
  ],
  "risk-compliance": [
    {
      label: "Risk & Compliance",
      items: [
        { icon: "/images/payments/icon-kyc.svg", label: "KYC/KYB & Underwriting" },
        { icon: "/images/payments/icon-pci.svg", label: "PCI & Device Security" },
        { icon: "/images/payments/icon-chargeback.svg", label: "Chargeback Management" },
        { icon: "/images/payments/icon-fraud.svg", label: "Fraud Detection & Monitoring" },
      ],
    },
  ],
};

/* ───── Partners content panel ───── */

function PartnersPanel({ activeCategory }: { activeCategory: string }) {
  const groups = partnersContent[activeCategory];
  if (!groups) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--color-gray-500)",
          fontSize: "16px",
        }}
      >
        Coming soon
      </div>
    );
  }

  return (
    <>
      {groups.map((group, gi) => (
        <div key={group.label} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: gi > 0 ? "16px" : 0 }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.24px",
              textTransform: "uppercase",
              color: "#98a2b3",
              margin: 0,
            }}
          >
            {group.label}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "6px 0",
            }}
          >
            {group.items.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "26px",
                  color: "var(--color-gray-900)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-gray-900)";
                }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  style={{ flexShrink: 0 }}
                />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const partnersContent: Record<string, IndustryGroup[]> = {
  partners: [
    {
      label: "Partners",
      items: [
        { icon: "/images/partners/icon-agents.svg", label: "Agents & ISOs" },
        { icon: "/images/partners/icon-fuel-jobbers.svg", label: "Fuel Jobbers & Distributors" },
        { icon: "/images/partners/icon-wholesalers.svg", label: "Wholesalers" },
        { icon: "/images/partners/icon-accounting.svg", label: "Accounting Partners" },
      ],
    },
  ],
  "app-marketplace": [
    {
      label: "Integrations & App Marketplace",
      items: [
        { icon: "/images/partners/icon-integrations.svg", label: "View All Integrations \u2192" },
        { icon: "/images/partners/icon-quickbooks.svg", label: "QuickBooks Online" },
        { icon: "/images/partners/icon-tax.svg", label: "DAVO Sales Tax", href: "/partners/integrations-and-app-marketplace/davo-sales-tax" },
        { icon: "/images/partners/icon-lottery.svg", label: "LottoShield" },
        { icon: "/images/partners/icon-bottlecapps.svg", label: "BottleCapps / CityHive" },
        { icon: "/images/partners/icon-sinpin.svg", label: "SIN PIN (Prepaid / Bill Pay)" },
      ],
    },
  ],
  developers: [
    {
      label: "Developers",
      items: [
        { icon: "/images/partners/icon-dev-programs.svg", label: "Developer Programs" },
        { icon: "/images/partners/icon-dev-docs.svg", label: "Developer Docs" },
        { icon: "/images/partners/icon-api.svg", label: "API Reference (Open API)" },
      ],
    },
  ],
};

/* ───── About content panel ───── */

function AboutPanel({ activeCategory }: { activeCategory: string }) {
  const groups = aboutContent[activeCategory];
  if (!groups) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--color-gray-500)",
          fontSize: "16px",
        }}
      >
        Coming soon
      </div>
    );
  }

  return (
    <>
      {groups.map((group, gi) => (
        <div key={group.label} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: gi > 0 ? "16px" : 0 }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.24px",
              textTransform: "uppercase",
              color: "#98a2b3",
              margin: 0,
            }}
          >
            {group.label}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "6px 0",
            }}
          >
            {group.items.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "26px",
                  color: "var(--color-gray-900)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-gray-900)";
                }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  style={{ flexShrink: 0 }}
                />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const aboutContent: Record<string, IndustryGroup[]> = {
  company: [
    {
      label: "Company",
      items: [
        { icon: "/images/about/icon-story.svg", label: "Our Story & Mission", href: "/about/company/our-story-and-mission" },
        { icon: "/images/about/icon-careers.svg", label: "Careers" },
        { icon: "/images/about/icon-press.svg", label: "Press & Media" },
        { icon: "/images/about/icon-contact.svg", label: "Contact Us" },
      ],
    },
  ],
  resources: [
    {
      label: "Resources",
      items: [
        { icon: "/images/about/icon-customers.svg", label: "Customers & Stories" },
        { icon: "/images/about/icon-onboarding.svg", label: "Implementation & Onboarding" },
        { icon: "/images/about/icon-training.svg", label: "Training & Academy" },
        { icon: "/images/about/icon-help.svg", label: "Help Center & Support" },
      ],
    },
  ],
  "security-trust": [
    {
      label: "Security & Trust",
      items: [
        { icon: "/images/about/icon-security.svg", label: "Security & Compliance" },
        { icon: "/images/about/icon-status.svg", label: "Status Page" },
        { icon: "/images/about/icon-legal.svg", label: "Legal" },
      ],
    },
  ],
  compare: [
    {
      label: "Compare",
      items: [
        { icon: "/images/about/icon-compare.svg", label: "Compare SuperSonic vs Competitors \u2192" },
        { icon: "/images/about/icon-vs-toast.svg", label: "SuperSonic vs Toast" },
        { icon: "/images/about/icon-vs-ncr.svg", label: "SuperSonic vs NCR" },
        { icon: "/images/about/icon-vs-legacy.svg", label: "SuperSonic vs Legacy Fuel POS" },
      ],
    },
  ],
};
