"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { serviceCards } from "@/lib/data";

function NavArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform: direction === "left" ? "rotate(180deg)" : undefined,
      }}
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="var(--color-gray-900)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 424; // card width (400) + gap (24)
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
          }}
        >
          {/* Left - Title & Description */}
          <div style={{ maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "var(--text-h1)",
                lineHeight: "var(--leading-tight)",
                fontWeight: 700,
                color: "var(--color-gray-900)",
                margin: "0 0 16px 0",
              }}
            >
              Join The Petro Outlet Family Today!
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-gray-600)",
                margin: 0,
                fontWeight: 500,
              }}
            >
              Joining Petro means more than joining a company; it&apos;s joining a
              community dedicated to elevating your business. Take the first step
              towards greatness today.
            </p>
          </div>

          {/* Right - Navigation Arrows */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              style={{
                width: "100px",
                height: "60px",
                borderRadius: "var(--radius-pill)",
                background: "#f9f9fb",
                border: "1px solid #eeeff4",
                cursor: canScrollLeft ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: canScrollLeft ? 1 : 0.4,
                transition: "opacity 0.2s",
              }}
              aria-label="Scroll left"
            >
              <NavArrow direction="left" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              style={{
                width: "100px",
                height: "60px",
                borderRadius: "var(--radius-pill)",
                background: "#f9f9fb",
                border: "1px solid #eeeff4",
                cursor: canScrollRight ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: canScrollRight ? 1 : 0.4,
                transition: "opacity 0.2s",
              }}
              aria-label="Scroll right"
            >
              <NavArrow direction="right" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="scrollbar-hide"
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(var(--page-padding), calc((100% - var(--max-width-content)) / 2 + var(--page-padding)))",
          paddingRight: "var(--page-padding)",
          paddingBottom: "8px",
        }}
      >
        {serviceCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="service-card"
            style={{
              background: "#f9f9fb",
              borderRadius: "32px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              scrollSnapAlign: "start",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "77px",
                height: "77px",
                marginBottom: "24px",
                position: "relative",
              }}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={77}
                height={77}
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
    </section>
  );
}
