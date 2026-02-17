import type { Metadata } from "next";
import { getPagesGrouped, SITE_URL } from "@/lib/pages";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap | SuperSonic POS",
  description:
    "Browse the complete SuperSonic POS sitemap. Find every page across our platform, industries, payments, partners, and company sections.",
  alternates: { canonical: `${SITE_URL}/sitemap` },
};

export default function SitemapPage() {
  const grouped = getPagesGrouped();
  return <SitemapClient grouped={grouped} />;
}
