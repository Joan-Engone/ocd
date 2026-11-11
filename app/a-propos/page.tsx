import type { Metadata } from "next";
import AboutHero from "@/components/about/Abouthero";
import Story from "@/components/about/Story";
import Pillars from "@/components/about/Pillars";
import Team from "@/components/about/Team";
import Certifications from "@/components/about/Certifications";
import AboutCta from "@/components/about/Aboutcta";

export const metadata: Metadata = {
  title: "À propos — StudioLive Pro",
  description:
    "Notre mission, nos principes et l'équipe derrière StudioLive Pro : l'exigence broadcast au service du live shopping TikTok.",
};

// Header, <main> and Footer come from the root layout.
export default function AProposPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Pillars />
      <Team />
      <Certifications />
      <AboutCta />
    </>
  );
}