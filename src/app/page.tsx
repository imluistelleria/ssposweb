import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProductFeature from "@/components/sections/ProductFeature";
import FeatureCards from "@/components/sections/FeatureCards";
import CtaSection from "@/components/sections/CtaSection";
import Services from "@/components/sections/Services";
import FeaturesTabs from "@/components/sections/FeaturesTabs";
import Blog from "@/components/sections/Blog";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductFeature />
        <FeatureCards />
        <CtaSection />
        <Services />
        <FeaturesTabs />
        <Blog />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
