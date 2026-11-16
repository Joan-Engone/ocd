"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { ease, PLAY_ONCE, rise, fadeUp, pop, spring, trigger } from "@/lib/motion";

const strategies = [
  {
    tag: "Recommandé • Flagship",
    title: "Option Présentiel",
    subtitle: "Studios & matériel broadcast directement sur site",
    description: "L'option ultime pour vos lancements majeurs et showrooms. Nos équipes d'animateurs et régisseurs pros s'installent dans vos locaux avec notre équipement complet pour une immersion totale et des ventes multipliées.",
    features: [
      "Animation par host pro certifié",
      "Déploiement de notre matériel broadcast sur site",
      "Démonstration physique immersive des produits",
      "Suivi des performances TikTok Shop en direct"
    ],
    highlight: true,
  },
  {
    tag: "Agilité & Rapidité",
    title: "Option En Ligne",
    subtitle: "Diffusion cloud depuis chez vous",
    description: "Idéal pour valider régulièrement vos ventes TikTok Shop sans mobiliser d'espace physique dans vos locaux tout en conservant une qualité broadcast irréprochable.",
    features: [
      "Mise en antenne rapide en moins de 48h",
      "Diffusion mondiale depuis vos locaux ou chez vous",
      "Support technique et régie cloud dédiés",
      "Coût d'entrée optimisé"
    ],
    highlight: false,
  },
  {
    tag: "Alternative Classique",
    title: "Gestion Interne",
    subtitle: "Sans matériel ni régie professionnelle",
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

const TITLE = "Quelle option de diffusion choisir pour votre marque ?";

export default function ChoiceGuide() {
  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-12 lg:gap-16">

        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            variants={rise}
            {...trigger(0)}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface/60 border border-white/10 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            Guide de choix stratégique
          </motion.div>

          <h2
            aria-label={TITLE}
            className="text-3xl font-black leading-[1.12] tracking-tight text-on-surface sm:text-4xl lg:text-5xl text-balance"
          >
            <Words
              delay={0.15}
              parts={[
                { text: "Quelle option de diffusion choisir pour votre marque" },
                {
                  text: "?",
                  className: "text-[#FF6B00]",
                },
                { text: "", glue: true },
              ]}
            />
          </h2>

          <motion.p
            variants={rise}
            {...trigger(0.4)}
            className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant"
          >
            Comparez nos trois approches et sélectionnez le dispositif idéal pour propulser vos ventes en direct sur TikTok Shop.
          </motion.p>
        </div>

        {/* 3-Column Editorial Strategy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {strategies.map((strat, idx) => {
            const base = 0.5 + idx * 0.15;
            return (
              <motion.div
                key={strat.title}
                variants={fadeUp}
                {...trigger(base)}
                className={`relative h-full rounded-3xl p-8 flex flex-col justify-between backdrop-blur-2xl transition-all duration-300 ${
                  strat.highlight
                    ? "border-2 border-[#FF6B00]/60 bg-surface/80 shadow-2xl lg:-translate-y-2"
                    : "border border-white/10 bg-surface/40 shadow-xl hover:border-white/25 hover:bg-surface/60 dark:border-white/5"
                }`}
              >
                {/* Light line sweeping across the top edge */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: PLAY_ONCE, amount: 0.1 }}
                  transition={{ duration: 1.4, delay: base + 0.2, ease }}
                  className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
                />

                {/* Top Badge & Content */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                      strat.highlight 
                        ? "border-[#FF6B00]/40 bg-[#FF6B00]/15 text-[#FF6B00]" 
                        : "border-white/10 bg-white/[0.03] text-on-surface-variant"
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
                    {strat.features.map((feat, fIdx) => (
                      <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-on-surface">
                        <div style={{ animationDelay: `${fIdx * 0.3}s` }}>
                          <motion.div
                            variants={pop}
                            {...trigger(base + 0.2 + fIdx * 0.05)}
                            whileHover={{ scale: 1.15, rotate: -6, transition: spring }}
                            className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                              strat.highlight 
                                ? "border-[#FF6B00]/40 bg-[#FF6B00]/20 text-[#FF6B00]" 
                                : "border-white/10 bg-white/[0.04] text-on-surface-variant"
                            }`}
                          >
                            <Icon name="check" className="text-[12px]" />
                          </motion.div>
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
                        ? "bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25 hover:bg-[#ff7b1a]"
                        : "bg-white/[0.03] hover:bg-white/[0.08] text-on-surface border border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span>Découvrir l&apos;offre</span>
                    <Icon name="arrow_forward" className="text-[14px]" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}