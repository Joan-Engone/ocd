"use client";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { pillars as defaultPillars } from "@/lib/about-data";
import { ease, spring, PLAY_ONCE, rise, fadeUp, pop, trigger } from "@/lib/motion";

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

const TITLE = "Trois principes d'excellence.";

export default function Pillars({ pillars = defaultPillars || bovannPillars }) {
  const items = pillars && pillars.length > 0 ? pillars : bovannPillars;

  return (
    <section className="w-full py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            variants={rise}
            {...trigger(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary block"
          >
            Nos Piliers • Bovann Group
          </motion.span>

          <h2
            aria-label={TITLE}
            className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl"
          >
            <Words
              delay={0.15}
              parts={[
                { text: "Trois principes" },
                {
                  text: "d'excellence",
                  className: "bg-gradient-to-r from-[#FF6B00] to-[#FF8526] bg-clip-text text-transparent",
                },
                { text: ".", glue: true },
              ]}
            />
          </h2>

          <motion.p
            variants={rise}
            {...trigger(0.4)}
            className="mt-3 text-sm leading-relaxed text-on-surface-variant"
          >
            Notre framework opérationnel garantit une exécution sans faille pour chaque session TikTok LIVE.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {items.map((p, i) => {
            const base = 0.5 + i * 0.15;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                {...trigger(base)}
                className="relative w-full rounded-2xl border border-on-surface/[0.08] p-6 sm:p-8 flex flex-col justify-between bg-surface/40 overflow-hidden group hover:border-[#FF6B00]/30 transition-colors"
              >
                {/* Light line sweeping across the top edge */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: PLAY_ONCE, amount: 0.1 }}
                  transition={{ duration: 1.4, delay: base + 0.2, ease }}
                  className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
                />

                <div>
                  <div className="idle-float mb-6 w-fit" style={{ animationDelay: `${i * 0.4}s` }}>
                    <motion.div
                      variants={pop}
                      {...trigger(base + 0.1)}
                      whileHover={{ scale: 1.12, rotate: -6, transition: spring }}
                      className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center"
                    >
                      <Icon name={p.icon || "star"} className="text-[20px]" />
                    </motion.div>
                  </div>

                  <motion.div variants={rise} {...trigger(base + 0.2)}>
                    <h3 className="text-lg font-bold tracking-tight text-on-surface">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-on-surface-variant font-normal">
                      {p.text}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  variants={rise}
                  {...trigger(base + 0.3)}
                  className="mt-6 pt-4 border-t border-on-surface/[0.08] flex items-center justify-between text-xs font-mono font-bold text-tertiary"
                >
                  <span>0{i + 1}</span>
                  <span className="text-[#FF6B00]">OCD Standard</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}