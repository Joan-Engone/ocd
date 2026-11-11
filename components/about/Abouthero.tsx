
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { stats as defaultStats } from "@/lib/about-data";

type Stat = {
  value: string;
  label: string;
  icon?: string;
  tag?: string;
  accent?: boolean;
};

type AboutHeroProps = {
  stats?: Stat[];
};

const bovannStats: Stat[] = [
  {
    value: "99.8%",
    label: "Taux de satisfaction client",
    icon: "verified",
    tag: "Excellence",
  },
  {
    value: "+150k",
    label: "Ventes générées en direct",
    icon: "trending_up",
    tag: "Impact",
  },
  {
    value: "100%",
    label: "Missions en présentiel sur site",
    icon: "groups",
    tag: "Présence",
  },
];

export default function AboutHero({
  stats = defaultStats,
}: AboutHeroProps) {
  const items: Stat[] =
    stats && stats.length > 0 ? stats : bovannStats;

  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">

      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF6B00]/15 via-[#FF6B00]/5 to-transparent blur-[120px]" />

      {/* Hero Content */}
      <Reveal>
        <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center text-center lg:mb-10">

          {/* Eyebrow Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-surface/60 px-4 py-1.5 shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant sm:text-[11px]">
              Notre Vision &amp; Mission • Excellence B2B
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
            Allier l&apos;exigence broadcast à l&apos;agilité de{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8526] bg-clip-text text-transparent">
              TikTok
            </span>
            <span className="text-[#FF6B00]">.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-on-surface-variant sm:text-base">
            Nous transformons chaque diffusion en direct en une expérience
            d&apos;achat haut de gamme, fluide et conçue pour la conversion à
            grande échelle depuis vos locaux ou nos studios.
          </p>
        </div>
      </Reveal>

      {/* Metrics Card */}
      <Reveal delay={0.1}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/5 sm:p-7 lg:p-8">

          <div className="grid grid-cols-1 gap-6 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            {items.map((s, idx) => (
              <div
                key={`${s.label}-${idx}`}
                className={`group flex flex-col justify-between ${
                  idx !== 0 ? "pt-5 sm:pl-6 sm:pt-0" : ""
                }`}
              >
                {/* Category Tag & Icon */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-tertiary">
                    {s.tag || "Métrique clé"}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-on-surface/90 transition-colors group-hover:border-[#FF6B00]/20 group-hover:text-[#FF6B00]">
                    <Icon
                      name={s.icon || "verified"}
                      className="text-[18px]"
                    />
                  </div>
                </div>

                {/* Value & Label */}
                <div className="space-y-1">
                  <div className="text-base font-bold tracking-tight text-on-surface transition-transform group-hover:translate-x-0.5 sm:text-lg">
                    {s.value}
                  </div>

                  <div className="text-xs font-normal leading-relaxed text-on-surface-variant">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </Reveal>
    </section>
  );
}
