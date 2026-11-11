import type { Metadata } from "next";
import StudioHero from "@/components/studio/StudioHero";
import PricingSection from "@/components/studio/PricingSection";
import Architecture from "@/components/studio/Architecture";
import Addons from "@/components/studio/Addons";
import FinalCta from "@/components/studio/FinalCta";

export const metadata: Metadata = {
  title: "Studio & Formules — StudioLive Pro",
  description:
    "Formules TikTok LIVE 100% déportées : animateurs certifiés, régie cloud SRT, sans studio physique.",
};

export default function StudioFormulesPage() {
  return (
    <>
        <StudioHero />
        <PricingSection />
        <Architecture />
        <Addons />
        <FinalCta />
    </>
  );
}