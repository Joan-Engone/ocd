"use client";
import Link from "next/link";
import { motion } from "motion/react";
import CountPrice from "@/components/motion/CountPrice";
import { ease, PLAY_ONCE, rise, slideIn, pop, trigger } from "@/lib/motion";
import Icon from "@/components/Icon";
import { plans as defaultPlans } from "@/lib/studio-data";

const MotionLink = motion.create(Link);

const points = [
  "Équipes d'animateurs et régisseurs professionnels sur site (Présentiel)",
  "Installation directe dans vos locaux, showroom ou boutique à Lomé",
  "Mise en antenne rapide & suivi des performances e-commerce TikTok",
];

export default function PricingTeaser({ plans = defaultPlans }) {
  // Single source of truth: fallback to "20 000 FCFA" if plans data is missing
  const starter = plans && plans[0]?.session?.price ? plans[0].session.price : "20 000 FCFA";

  return (
    <>
      <section className="w-full py-16 lg:py-24 border-t border-on-surface/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Title + Editorial Checklist */}
            <div className="lg:col-span-7">
              <motion.span
                variants={rise}
                {...trigger(0)}
                className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary"
              >
                Tarifs &amp; Transparence
              </motion.span>

              <motion.h2
                variants={rise}
                {...trigger(0.12)}
                className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-on-surface sm:text-4xl"
              >
                Des formules claires, sans frais cachés
                <span className="text-[#FF6B00]">.</span>
              </motion.h2>

              <div className="relative mt-8 pt-6">
                {/* The top line draws itself */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: PLAY_ONCE, amount: 0.25 }}
                  transition={{ duration: 1.2, delay: 0.3, ease }}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-on-surface/[0.12]"
                />

                <ul className="space-y-4">
                  {points.map((p, i) => (
                    <motion.li
                      key={p}
                      variants={slideIn}
                      {...trigger(0.45 + i * 0.18)}
                      className="flex items-start gap-4"
                    >
                      <motion.span
                        variants={pop}
                        {...trigger(0.55 + i * 0.18)}
                        className="text-xs font-mono font-bold text-[#FF6B00] shrink-0 mt-0.5"
                      >
                        0{i + 1}
                      </motion.span>
                      <span className="text-xs sm:text-sm font-normal text-on-surface-variant leading-relaxed">
                        {p}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Pricing Card & CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: PLAY_ONCE, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="relative lg:col-span-5 flex flex-col justify-center overflow-hidden rounded-2xl border border-on-surface/[0.08] p-6 sm:p-8 bg-surface/40 transition-colors duration-300 hover:border-[#FF6B00]/30"
            >
              {/* Light line sweeping across the top edge */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: PLAY_ONCE, amount: 0.2 }}
                transition={{ duration: 1.4, delay: 0.7, ease }}
                className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
              />

              <div className="flex items-center justify-between mb-3">
                <motion.span
                  variants={rise}
                  {...trigger(0.5)}
                  className="text-[10px] font-semibold uppercase tracking-[0.14em] text-tertiary"
                >
                  À partir de
                </motion.span>
                <motion.span
                  variants={rise}
                  {...trigger(0.6)}
                  className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF6B00]"
                >
                  Présentiel Sur Site
                </motion.span>
              </div>

              <motion.div variants={rise} {...trigger(0.7)} className="flex items-baseline gap-x-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-on-surface">
                  <CountPrice value={starter} delay={0.8} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-tertiary">
                  HT / session
                </span>
              </motion.div>

              <motion.p
                variants={rise}
                {...trigger(0.85)}
                className="mt-3 text-xs leading-relaxed text-on-surface-variant font-normal"
              >
                Comprend la présence sur site de nos animateurs et régisseurs certifiés à Lomé.
              </motion.p>

              <MotionLink
                href="/studio-formules#formules"
                variants={rise}
                {...trigger(1)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-on-surface px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-md transition-colors duration-300 hover:bg-[#FF6B00] hover:text-white w-full text-center"
              >
                <span>Voir les 3 formules</span>
                {/* Arrow nudges forward every few seconds to invite the click */}
                <motion.span
                  aria-hidden="true"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <Icon name="arrow_forward" className="text-[16px]" />
                </motion.span>
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}