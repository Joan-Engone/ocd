import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import StepsTeaser from "@/components/home/StepsTeaser";
import PricingTeaser from "@/components/home/PricingTeaser";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      
      <Hero />
      <Metrics />
      <StepsTeaser />
      <PricingTeaser />
      <CTA />
    </>
  );
}