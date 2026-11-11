import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { plans as defaultPlans } from "@/lib/studio-data";

const points = [
  "Équipes d'animateurs et régisseurs professionnels sur site (Présentiel)",
  "Installation directe dans vos locaux, showroom ou boutique à Lomé",
  "Mise en antenne rapide & suivi des performances e-commerce TikTok",
];

export default function PricingTeaser({ plans = defaultPlans }) {
  // Single source of truth: fallback to "20 000 FCFA" if plans data is missing
  const starter = plans && plans[0]?.session?.price ? plans[0].session.price : "20 000 FCFA";

  return (
    <section className="w-full py-16 lg:py-24 border-t border-on-surface/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Column: Title + Editorial Checklist */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
                Tarifs &amp; Transparence
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-on-surface sm:text-4xl">
                Des formules claires, sans frais cachés
                <span className="text-[#FF6B00]">.</span>
              </h2>

              <ul className="mt-8 space-y-4 border-t border-on-surface/[0.08] pt-6">
                {points.map((p, i) => (
                  <li key={p} className="flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-[#FF6B00] shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-normal text-on-surface-variant leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Pricing Card & CTA Button */}
            <div className="lg:col-span-5 flex flex-col justify-center rounded-2xl border border-on-surface/[0.08] p-6 sm:p-8 bg-surface/40">
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-tertiary">
                  À partir de
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF6B00]">
                  Présentiel Sur Site
                </span>
              </div>

              <div className="flex items-baseline gap-x-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-on-surface">
                  {starter}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-tertiary">
                  HT / session
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-on-surface-variant font-normal">
                Comprend la présence sur site de nos animateurs et régisseurs certifiés à Lomé.
              </p>

              <Link
                href="/studio-formules#formules"
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-on-surface px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-md transition-all duration-300 hover:bg-[#FF6B00] hover:text-white active:scale-[0.97] w-full text-center"
              >
                <span>Voir les 3 formules</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </Link>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}