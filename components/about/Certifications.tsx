import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { certifications as defaultCertifications } from "@/lib/about-data";

const bovannCertifications = [
  { label: "Partenaire Homologué TikTok LIVE", icon: "verified" },
  { label: "Norme SLA Broadcast < 18ms", icon: "sensors" },
  { label: "Régie Mobile Certifiée Sur Site", icon: "videocam" },
  { label: "Hosts Pro Formés à la Conversion", icon: "groups" },
];

export default function Certifications({
  certifications = defaultCertifications || bovannCertifications,
}) {
  const items =
    certifications && certifications.length > 0
      ? certifications
      : bovannCertifications;

  return (
    <section className="w-full py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-on-surface/[0.08]">
            {items.map((c) => (
              <div key={c.label} className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF6B00]/10 text-[#FF6B00]">
                  <Icon name={c.icon || "verified"} className="text-[16px]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight text-on-surface">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}