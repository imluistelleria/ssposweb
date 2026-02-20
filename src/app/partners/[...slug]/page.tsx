import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPagesByCategory, getPageBySlug, getCanonicalUrl } from "@/lib/pages";
import WhitePage from "@/components/templates/WhitePage";
import DavoSalesTaxPage from "@/components/pages/DavoSalesTaxPage";

const CATEGORY = "Partners";
const PREFIX = "/partners";

export function generateStaticParams() {
  return getPagesByCategory(CATEGORY).map((page) => ({
    slug: page.slug.replace(`${PREFIX}/`, "").split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = `${PREFIX}/${slug.join("/")}`;
  const page = getPageBySlug(fullSlug);
  if (!page) return {};

  const title = `${page.title} | ${page.subMenu1} | SuperSonic POS`;
  const canonicalUrl = getCanonicalUrl(page);

  return {
    title,
    description: page.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description: page.description,
      type: "website",
      url: canonicalUrl,
      siteName: "SuperSonic POS",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
    },
  };
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = `${PREFIX}/${slug.join("/")}`;
  const page = getPageBySlug(fullSlug);
  if (!page) notFound();

  // Dedicated pages
  if (fullSlug === "/partners/integrations-and-app-marketplace/davo-sales-tax") {
    return <DavoSalesTaxPage data={page} />;
  }

  return <WhitePage data={page} />;
}
