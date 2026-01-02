import { HeroParallax} from "@/components/accternity/hero-parallax";
import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import { FeatureSection } from "@/components/landing/feature-section";
import HeroSection from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { TestimonialSection } from "@/components/magicui/testimonial-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <HeroParallax />
      <ClientSection />
      <SphereMask />
      <FeatureSection />
      <TestimonialSection />
      <SphereMask reverse />
      <PricingSection />
      <CallToActionSection />
      <Particles 
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={300}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
