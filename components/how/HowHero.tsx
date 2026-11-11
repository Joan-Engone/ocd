
import Icon from "@/components/Icon";
import { kpis as defaultKpis } from "@/lib/how-data";

type KPI = {
  value: string;
  label?: string;
  text?: string;
  icon?: string;
  tag?: string;
  accent?: boolean;
};

type HowHeroProps = {
  kpis?: KPI[];
};

const bovannKpis: KPI[] = [
  {
    value: "< 48h",
    label: "Mise en onde ultra-rapide",
    icon: "bolt",
    tag: "Délai",
  },
  {
    value: "100%",
    label: "Présentiel & Régie Cloud",
    icon: "tune",
    tag: "Flexibilité",
  },
  {
    value: "Mondial",
    label: "Latence cloud SRT < 18ms",
    icon: "public",
    tag: "Portée",
  },
  {
    value: "99.8%",
    label: "Satisfaction Broadcast",
    icon: "verified",
    tag: "Qualité",
  },
];

export default function HowHero({
  kpis = defaultKpis,
}: HowHeroProps) {
  const items: KPI[] =
    kpis && kpis.length > 0 ? kpis : bovannKpis;

  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">

      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF6B00]/15 via-[#FF6B00]/5 to-transparent blur-[120px]" />

      {/* Hero Content */}
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center text-center lg:mb-10">

        {/* Eyebrow Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-surface/60 px-4 py-1.5 shadow-sm backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant sm:text-[11px]">
            Workflow opérationnel • 100% cloud ou présentiel sur-mesure
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
          Deux modes d&apos;excellence pour vos directs TikTok LIVE
          <span className="text-[#FF6B00]">.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-on-surface-variant sm:text-base">
          Choisissez la formule calibrée pour vos objectifs : l&apos;agilité
          ultra-scalable de notre{" "}
          <strong className="font-semibold text-on-surface">
            Régie Cloud Déportée
          </strong>{" "}
          ou le prestige immersif de nos{" "}
          <strong className="font-semibold text-on-surface">
            Studios Homologués &amp; Intervention Présentielle
          </strong>{" "}
          avec équipe dédiée à Lomé et à l&apos;international.
        </p>
      </div>

      {/* Metrics Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/5 sm:p-7 lg:p-8">

        <div className="grid grid-cols-1 gap-6 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">

          {items.map((m, idx) => (
            <div
              key={`${m.value}-${idx}`}
              className={`group flex flex-col justify-between ${
                idx !== 0 ? "pt-5 sm:pt-0 lg:pl-6" : ""
              }`}
            >
              {/* Category Tag & Icon */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-tertiary">
                  {m.tag || "Avantage"}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-on-surface/90 transition-colors group-hover:border-[#FF6B00]/20 group-hover:text-[#FF6B00]">
                  <Icon
                    name={m.icon || "star"}
                    className="text-[18px]"
                  />
                </div>
              </div>

              {/* Value & Label */}
              <div className="space-y-1">
                <div className="text-base font-bold tracking-tight text-on-surface transition-transform group-hover:translate-x-0.5 sm:text-lg">
                  {m.value}
                </div>

                <div className="text-xs font-normal leading-relaxed text-on-surface-variant">
                  {m.label || m.text || " "}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
