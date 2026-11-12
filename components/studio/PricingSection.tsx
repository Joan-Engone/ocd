"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import CountPrice from "@/components/motion/CountPrice";
import { spring, rise, fadeUp, slideIn, pop, trigger } from "@/lib/motion";

export default function PricingSection() {
  const [monthly, setMonthly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: monthly ? "20 000 FCFA" : "25 000 FCFA",
      period: monthly ? "HT / live" : "HT / session",
      desc: "Idéal pour tester vos premiers directs et valider votre catalogue.",
      features: [
        "Prestation 100% Présentiel sur votre site",
        "1 Animateur professionnel certifié",
        "Gestion & intégration TikTok Shop",
        "Régie technique HD standard sur site",
      ],
      featured: false,
    },
    {
      name: "Business",
      price: monthly ? "45 000 FCFA" : "55 000 FCFA",
      period: monthly ? "HT / live" : "HT / session",
      desc: "Le package complet recommandé pour accélérer vos ventes quotidiennes.",
      features: [
        "Installation complète dans vos locaux ou showroom",
        "2 Animateurs pro + 1 Régisseur dédié sur place",
        "Catalogue produits & Offres Flash en direct",
        "Habillage graphique & Analytics en direct",
        "Animation & promotion intensive sur site",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      desc: "Pour les grandes marques & déploiements multi-sites sur-mesure.",
      features: [
        "Dispositif présentiel multi-sites sur-mesure",
        "Équipe de production dédiée à votre marque",
        "Support prioritaire & Accompagnement 24/7",
        "Équipements broadcast haut de gamme mobilisés",
      ],
      featured: false,
    },
  ];

  const billing = [
    { label: "À la session", value: false },
    { label: "Abonnement (-20%)", value: true },
  ];

  return (
    <section id="packages" className="w-full scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Billing Toggle */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.span
              variants={rise}
              {...trigger(0)}
              className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary"
            >
              Tarifs &amp; Offres B2B
            </motion.span>
            <motion.h2
              variants={rise}
              {...trigger(0.12)}
              className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-on-surface sm:text-4xl"
            >
              Des formules adaptées à votre croissance
              <span className="text-[#FF6B00]">.</span>
            </motion.h2>
            <motion.p
              variants={rise}
              {...trigger(0.24)}
              className="mt-3 text-sm font-normal leading-relaxed text-on-surface-variant"
            >
              Choisissez la formule idéale pour booster vos ventes en direct sur TikTok Shop avec nos équipes
              d&apos;animateurs et régisseurs en présentiel.
            </motion.p>
          </div>

          {/* Billing Switcher: the dark pill glides between the two options */}
          <motion.div
            variants={rise}
            {...trigger(0.3)}
            role="group"
            aria-label="Mode de facturation"
            className="inline-flex w-fit items-center rounded-full border border-on-surface/[0.08] bg-surface/40 p-1 shadow-sm"
          >
            {billing.map((b) => {
              const active = monthly === b.value;
              return (
                <button
                  key={b.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setMonthly(b.value)}
                  className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    active ? "text-surface" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={spring}
                      className="absolute inset-0 rounded-full bg-on-surface shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{b.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {plans.map((p, idx) => {
            const base = 0.2 + idx * 0.15; // each card starts a bit after the previous one
            return (
              <motion.div
                key={p.name}
                variants={fadeUp}
                {...trigger(base)}
                whileHover={{ y: -6, transition: spring }}
                className={`relative flex flex-col justify-between rounded-2xl bg-surface/40 p-6 transition-colors duration-300 sm:p-8 ${
                  p.featured
                    ? "border-2 border-[#FF6B00] shadow-lg lg:-translate-y-2"
                    : "border border-on-surface/[0.08] hover:border-on-surface/[0.15]"
                }`}
              >
                {/* Soft pulse around the recommended plan */}
                {p.featured && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [0, 0.6, 0], scale: [1, 1.015, 1.035] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    className="pointer-events-none absolute -inset-[3px] rounded-[1.2rem] border border-[#FF6B00]/60"
                  />
                )}

                <div>
                  {/* Plan Badge / Title */}
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold tracking-tight text-on-surface">{p.name}</h3>
                    {p.featured && (
                      <motion.span
                        variants={pop}
                        {...trigger(base + 0.3)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6B00]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#FF6B00]"
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF6B00]" />
                        Recommandé
                      </motion.span>
                    )}
                  </div>

                  <p className="text-xs font-normal leading-relaxed text-on-surface-variant sm:text-sm">{p.desc}</p>

                  {/* Pricing Pod: the price counts up, and glides when you switch billing */}
                  <div className="my-6 border-y border-on-surface/[0.08] py-6">
                    <div className="flex items-baseline gap-x-2">
                      <span className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
                        <CountPrice value={p.price} delay={base + 0.2} />
                      </span>
                      {p.period && (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-tertiary">
                          {p.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mb-8 space-y-3">
                    {p.features.map((f, i) => (
                      <motion.li
                        key={f}
                        variants={slideIn}
                        {...trigger(base + 0.35 + i * 0.08)}
                        className="flex items-start gap-3 text-xs font-normal text-on-surface-variant sm:text-sm"
                      >
                        <motion.div
                          variants={pop}
                          {...trigger(base + 0.4 + i * 0.08)}
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-[#FF6B00]/10 text-[#FF6B00]"
                        >
                          <Icon name="check" className="text-[12px]" />
                        </motion.div>
                        <span className="leading-snug text-on-surface">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Trigger Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    p.featured
                      ? "bg-[#FF6B00] text-white shadow-md hover:bg-[#ff7a1a]"
                      : "bg-on-surface text-surface hover:bg-[#FF6B00] hover:text-white"
                  }`}
                >
                  <span>Réserver cette formule</span>
                  <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </span>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}