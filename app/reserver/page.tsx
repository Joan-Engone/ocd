import type { Metadata } from "next";
import BookingHero from "@/components/booking/BookingHero";
import BookingWizard from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Réserver un LIVE — StudioLive Pro",
  description:
    "Planifiez votre direct TikTok LIVE : choisissez votre mode de tournage, votre formule et votre créneau. Cadrage par nos directeurs de production sous 24h ouvrées.",
};

export default function ReserverPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[540px] w-[540px] rounded-full bg-primary-fixed/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-80 -z-10 h-[420px] w-[420px] rounded-full bg-secondary-fixed/15 blur-3xl" />

      <BookingHero />
      <BookingWizard />
    </div>
  );
}