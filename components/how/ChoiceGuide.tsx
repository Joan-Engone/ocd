import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

const strategies = [
  {
    tag: "Recommandé • Flagship",
    title: "Option Présentiel",
    subtitle: "Studios & régie mobile directement sur site",
    description: "L'option ultime pour vos lancements majeurs et showrooms. Nos équipes d'animateurs et régisseurs pros s'installent dans vos locaux pour une immersion totale et des ventes multipliées.",
    features: [
      "Animation par host pro certifié",
      "Régie mobile complète & éclairage studio",
      "Démonstration physique immersive des produits",
      "Suivi des performances TikTok Shop en direct"
    ],
    highlight: true,
  },
  {
    tag: "Agilité & Rapidité",
    title: "Option En Ligne",
    subtitle: "Régie mobile déportée",
    description: "Idéal pour valider régulièrement vos ventes TikTok Shop sans mobiliser d'espace physique dans vos locaux tout en conservant une qualité broadcast irréprochable.",
    features: [
      "Mise en antenne rapide en moins de 48h",
      "Diffusion mondiale depuis l'extérieur",
      "Support technique et régie cloud dédiés",
      "Coût d'entrée optimisé"
    ],
    highlight: false,
  },
  {
    tag: "Alternative Classique",
    title: "Gestion Interne",
    subtitle: "Sans régie professionnelle",
    description: "La configuration traditionnelle avec vos équipes en interne. Souvent confrontée à des contraintes de matériel, de latence réseau et d'expertise d'animation.",
    features: [
      "Utilisation de smartphones en interne",
      "Animation par vos salariés non formés",
      "Risques de coupures réseau & audio",
      "Temps de préparation chronophage"
    ],
    highlight: false,
  },
];

export default function ChoiceGuide() {
  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-12 lg:gap-16">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-[10px] font-black uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            Guide de choix stratégique
          </div>
          <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-on-surface sm:text-4xl lg:text-5xl text-balance">
            Quelle option de diffusion choisir pour votre marque
            <span className="text-[#FF6B00]"> ?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant">
            Comparez nos trois approches et sélectionnez le dispositif idéal pour propulser vos ventes en direct sur TikTok Shop.
          </p>
        </div>

        {/* 3-Column Editorial Strategy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {strategies.map((strat, idx) => (
            <Reveal key={strat.title} delay={idx * 0.1}>
              <div 
                className={`relative h-full rounded-3xl p-8 flex flex-col justify-between backdrop-blur-2xl transition-all duration-300 ${
                  strat.highlight
                    ? "bg-gradient-to-b from-surface/90 via-surface/70 to-[#FF6B00]/10 border-2 border-[#FF6B00]/50 shadow-[0_20px_50px_rgba(255,107,0,0.15)] lg:-translate-y-2"
                    : "bg-surface/60 border border-white/10 dark:border-white/5 shadow-xl hover:border-white/20"
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      strat.highlight 
                        ? "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/30" 
                        : "bg-white/5 text-tertiary border border-white/10"
                    }`}>
                      {strat.tag}
                    </span>
                    {strat.highlight && (
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
                    )}
                  </div>

                  <h3 className="text-xl font-black text-on-surface tracking-tight">
                    {strat.title}
                  </h3>
                  <span className="block text-xs font-semibold text-[#FF6B00] mt-1">
                    {strat.subtitle}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {strat.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-8 space-y-3.5 pt-6 border-t border-white/10">
                    {strat.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-on-surface">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          strat.highlight ? "bg-[#FF6B00] text-white" : "bg-white/5 text-[#FF6B00] border border-white/10"
                        }`}>
                          <Icon name="check" className="text-[12px]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-8 mt-8 border-t border-white/10">
                  <Link
                    href="/studio-formules#formules"
                    className={`w-full py-3.5 px-6 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                      strat.highlight
                        ? "bg-gradient-to-r from-[#FF6B00] to-[#FF8526] text-white shadow-lg shadow-[#FF6B00]/30 hover:scale-[1.02]"
                        : "bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span>Découvrir l&apos;offre</span>
                    <Icon name="arrow_forward" className="text-[14px]" />
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}