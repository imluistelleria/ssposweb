import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPagesByCategory, getPageBySlug, getCanonicalUrl } from "@/lib/pages";
import WhitePage from "@/components/templates/WhitePage";

const CATEGORY = "Platform";
const PREFIX = "/platform";

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

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const fullSlug = `${PREFIX}/${slug.join("/")}`;
  const page = getPageBySlug(fullSlug);
  if (!page) notFound();

  return <WhitePage data={page} />;
}
