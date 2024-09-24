import AboutSection from "@/components/AboutSection";
import BrandSection from "@/components/BrandSection";
import FloatingButton from "@/components/FloatingButton";
import HeroSection from "@/components/HeroSection";
import NetworkSection from "@/components/NetworkSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ProductSection from "@/components/ProductSection";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <NetworkSection />
      <BrandSection />
      <ProductSection />
      <PartnershipsSection />
      <SubscribeSection />
      <FloatingButton />
    </div>
  );
}
