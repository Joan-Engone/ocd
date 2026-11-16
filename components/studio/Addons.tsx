"use client";
import { motion } from "motion/react";
import Words from "@/components/motion/Words";
import Icon from "@/components/Icon";
import CountPrice from "@/components/motion/CountPrice";
import { addons } from "@/lib/studio-data";
import { ease, spring, PLAY_ONCE, rise, fadeUp, pop, trigger } from "@/lib/motion";

export default function Addons({ addons: customAddons }: { addons?: typeof addons }) {
  const allItems = customAddons && customAddons.length > 0 ? customAddons : addons;
  // Filter out "Option Présentiel Sur Site" to keep 3 streamlined options
  const items = allItems.filter((a) => a.title !== "Option Présentiel Sur Site");

  return (
    <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background ambient light glow: wrapper keeps the centering, inner element breathes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] pointer-events-none -z-10">
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full bg-[#FF6B00]/10 blur-[100px]"
        />
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <motion.span
          variants={rise}
          {...trigger(0)}
          className="block text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]"
        >
          Options &amp; Modules Flexibles
        </motion.span>
        <h2
          aria-label="Extensions activables pour vos sessions Live"
          className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight"
        >
          <Words delay={0.15} parts={[{ text: "Extensions activables pour vos sessions Live" }]} />
        </h2>
        <motion.p
          variants={rise}
          {...trigger(0.7)}
          className="text-xs sm:text-sm text-on-surface-variant font-normal leading-relaxed"
        >
          Personnalisez votre package en un clin d&apos;œil avec des options sur-mesure.
        </motion.p>
      </div>

      {/* Single Unified Outer Glass Capsule Container */}
      <motion.div
        variants={fadeUp}
        {...trigger(0.3)}
        className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden"
      >
        {/* Light line sweeping across the top edge */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: PLAY_ONCE, amount: 0.15 }}
          transition={{ duration: 1.6, delay: 0.6, ease }}
          className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:gap-y-0 md:divide-x divide-white/10">
          {items.map((a, idx) => {
            const base = 0.5 + idx * 0.18; // each option starts a bit after the previous one
            return (
              <div
                key={a.title}
                className={`flex flex-col justify-between group ${idx !== 0 ? "pt-6 md:pt-0 md:pl-6" : ""}`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="idle-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                      <motion.div
                        variants={pop}
                        {...trigger(base)}
                        whileHover={{ scale: 1.12, rotate: -8, transition: spring }}
                        className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-[#FF6B00] flex items-center justify-center group-hover:border-[#FF6B00]/40 transition-colors"
                      >
                        <Icon name={a.icon} className="text-[16px]" />
                      </motion.div>
                    </div>
                    <motion.span
                      variants={rise}
                      {...trigger(base + 0.1)}
                      className="text-[9px] font-extrabold uppercase tracking-widest text-tertiary"
                    >
                      Option {idx + 1}
                    </motion.span>
                  </div>

                  <motion.div variants={rise} {...trigger(base + 0.15)}>
                    <h3 className="text-sm font-bold text-on-surface tracking-tight">{a.title}</h3>
                    <p className="text-xs text-on-surface-variant font-normal mt-1 leading-relaxed min-h-[36px]">
                      {a.text}
                    </p>
                  </motion.div>
                </div>

                {/* Price Display Block */}
                <div className="relative mt-5 pt-4 flex items-baseline justify-between">
                  {/* The divider draws itself */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: PLAY_ONCE, amount: 0.25 }}
                    transition={{ duration: 0.9, delay: base + 0.3, ease }}
                    className="absolute inset-x-0 top-0 h-px origin-left bg-white/15"
                  />
                  <motion.span
                    variants={rise}
                    {...trigger(base + 0.35)}
                    className="text-[10px] font-extrabold uppercase tracking-wider text-tertiary"
                  >
                    {a.unit}
                  </motion.span>
                  <span className="text-xs sm:text-sm font-black text-[#FF6B00]">
                    <CountPrice value={a.price} delay={base + 0.4} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}