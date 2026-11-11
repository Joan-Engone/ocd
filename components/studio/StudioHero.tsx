
import Icon from "@/components/Icon";
import { studioMetrics as defaultMetrics } from "@/lib/studio-data";

type StudioMetric = {
  value: string;
  label: string;
  icon?: string;
  tag?: string;
  accent?: boolean;
};

type StudioHeroProps = {
  metrics?: StudioMetric[];
};

const bovannStudioMetrics: StudioMetric[] = [
  {
    value: "Présentiel & Ligne",
    label: "Flexibilité Totale",
    icon: "storefront",
    tag: "Mode",
  },
  {
    value: "Mondial",
    label: "Déploiement Global",
    icon: "public",
    tag: "Portée",
  },
  {
    value: "100% Sur-Mesure",
    label: "Packages Entreprises",
    icon: "inventory_2",
    tag: "Offres",
  },
  {
    value: "Sous 48h",
    label: "Mise en Onde Rapide",
    icon: "bolt",
    tag: "Délai",
  },
];

export default function StudioHero({
  metrics = defaultMetrics,
}: StudioHeroProps) {
  const items: StudioMetric[] =
    metrics && metrics.length > 0
      ? metrics
      : bovannStudioMetrics;

  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">

      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF6B00]/15 via-[#FF6B00]/5 to-transparent blur-[120px]" />

      {/* Main Text Content */}
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center space-y-4 text-center lg:mb-10">

        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-3.5 py-1 shadow-sm backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
          </span>

          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant sm:text-xs">
            Formules B2B • En Présentiel ou en Ligne • Partout dans le Monde
          </span>
        </div>

        {/* Main Title */}
        <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
          Des packages taillés pour booster vos ventes sur{" "}
          <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8526] bg-clip-text text-transparent">
            TikTok LIVE
          </span>.
        </h1>

        {/* Subtitle Description */}
        <p className="max-w-2xl text-sm font-normal leading-relaxed text-on-surface-variant sm:text-base">
          Que ce soit en présentiel dans vos locaux/showroom ou entièrement en
          ligne depuis nos studios homologués, nos équipes d&apos;animateurs et
          de régisseurs qualifiés promeuvent et vendent vos produits en direct.
        </p>
      </div>

      {/* Unified Glass Metrics Container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/5 sm:p-7 lg:p-8">

        <div className="grid grid-cols-1 divide-y divide-white/10 gap-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">

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
                  {m.label}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
