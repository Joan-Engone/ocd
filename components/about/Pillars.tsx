import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { pillars as defaultPillars } from "@/lib/about-data";

const bovannPillars = [
  {
    title: "Exigence Broadcast",
    text: "Une qualité d'image 4K HDR, un traitement audio studio et une latence ultra-faible (<18ms) pour une expérience d'achat immersive irréprochable.",
    icon: "sensors",
  },
  {
    title: "Immersion Présentielle",
    text: "Animateurs certifiés et régisseurs professionnels déployés directement dans vos locaux, showroom ou bureau à Lomé et en sous-région.",
    icon: "groups",
  },
  {
    title: "Conversion E-Commerce",
    text: "Scénarisation orientée vente, intégration TikTok Shop native et gestion dynamique des offres flash pour maximiser votre chiffre d'affaires.",
    icon: "shopping_bag",
  },
];

export default function Pillars({ pillars = defaultPillars || bovannPillars }) {
  const items = pillars && pillars.length > 0 ? pillars : bovannPillars;

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
            Nos Piliers • Bovann Group
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
            Trois principes d&apos;excellence
            <span className="text-[#FF6B00]">.</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Notre framework opérationnel garantit une exécution sans faille pour chaque session TikTok LIVE.
          </p>
        </div>

        {/* Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="flex">
              <div className="w-full rounded-2xl border border-on-surface/[0.08] p-6 sm:p-8 flex flex-col justify-between bg-surface/40">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-6">
                    <Icon name={p.icon || "star"} className="text-[20px]" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-on-surface">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-on-surface-variant font-normal">
                    {p.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-on-surface/[0.08] flex items-center justify-between text-xs font-mono font-bold text-tertiary">
                  <span>0{i + 1}</span>
                  <span className="text-[#FF6B00]">OCD Standard</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}