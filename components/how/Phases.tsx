import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { phases as defaultPhases } from "@/lib/how-data";

const bovannPhases = [
  {
    n: "01",
    title: "Cadrage & Logistique",
    text: "Alignement stratégique sur vos objectifs et réception des échantillons.",
    deliverable: "Planning & Rétroplanning",
    icon: "assignment",
  },
  {
    n: "02",
    title: "Préparation Studio",
    text: "Configuration technique de la régie cloud et calibration du plateau.",
    deliverable: "Signal test & Fiches TikTok Shop",
    icon: "settings_input_hdmi",
  },
  {
    n: "03",
    title: "Diffusion Live & Vente",
    text: "Animation par nos présentateurs certifiés et régie en temps réel.",
    deliverable: "Session Live & Ventes directes",
    icon: "sensors",
  },
  {
    n: "04",
    title: "Analytics & Replays",
    text: "Analyse des conversions et livraison des formats courts de vente.",
    deliverable: "Rapport BI + Clips Spark Ads",
    icon: "analytics",
  },
];

export default function Phases({ phases = defaultPhases || bovannPhases }) {
  const items = phases && phases.length > 0 ? phases : bovannPhases;

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
            Workflow Opérationnel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface">
            Une mécanique millimétrée en 4 étapes
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant font-normal leading-relaxed">
            De la préparation technique jusqu&apos;au rapport d&apos;analyse post-live.
          </p>
        </div>

        {/* Single Streamlined Glass Capsule Container */}
        <Reveal>
          <div className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/10">
              {items.map((p, idx) => (
                <div
                  key={p.n || p.title}
                  className={`flex flex-col justify-between group ${
                    idx !== 0 ? "pt-6 md:pt-0 lg:pl-6" : ""
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Phase Number Badge & Icon Pod */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-on-surface text-[10px] font-extrabold tracking-widest uppercase">
                        PHASE {p.n}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:scale-105 transition-transform">
                        <Icon name={p.icon} className="text-[16px]" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-sm font-bold text-on-surface tracking-tight">{p.title}</h3>
                      <p className="text-xs text-on-surface-variant font-normal mt-1 leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </div>

                  {/* Clean Deliverable Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                    <Icon name="check_circle" className="text-[14px] text-[#FF6B00] shrink-0" /> 
                    <span className="text-xs font-bold text-on-surface leading-tight">{p.deliverable}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}