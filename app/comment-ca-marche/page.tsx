import type { Metadata } from "next";
import HowHero from "@/components/how/HowHero";
import Phases from "@/components/how/Phases";
import TechArchitecture from "@/components/how/TechArchitecture";
import ChoiceGuide from "@/components/how/ChoiceGuide";
import HowFaq from "@/components/how/HowFaq";

export const metadata: Metadata = {
  title: "Comment ça marche — StudioLive Pro",
  description:
    "Régie cloud déportée ou studios parisiens : le déroulé en 4 phases de vos directs TikTok Shop, l'architecture technique et le guide de choix.",
};

// Header, <main> and Footer come from the root layout.
export default function CommentCaMarchePage() {
  return (
    <>
      <HowHero />
      <Phases />
      <TechArchitecture />
      <ChoiceGuide />
    </>
  );
}