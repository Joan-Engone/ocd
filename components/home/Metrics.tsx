"use client";
import { motion } from "motion/react";
import CountUp from "@/components/motion/CountUp";
import { ease, spring, PLAY_ONCE, rise, pop, trigger } from "@/lib/motion";
import Icon from "@/components/Icon";

const metrics = [
  { value: "Studio & Ligne", label: "Format Sur-Mesure", tag: "Production", icon: "podium" },
  { value: "Mondiale", label: "Portée Internationale", tag: "Diffusion", icon: "language" },
  { value: "Packages", label: "Offres Entreprises B2B", tag: "Formules", icon: "card_membership" },
  {
    value: "+3.2x",
    label: "Ventes TikTok Shop",
    tag: "Performance",
    icon: "shopping_bag",
    count: { to: 3.2, decimals: 1, prefix: "+", suffix: "x" },
  },
];

export default function Metrics() {
  return (
    <>
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Unified Frosted Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: PLAY_ONCE, amount: 0.15 }}
            transition={{ duration: 0.9, ease }}
            className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden"
          >
            {/* Internal ambient light: wrapper keeps the position, inner element breathes */}
            <div className="absolute -top-24 -right-24 w-80 h-80 pointer-events-none -z-10">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-[#FF6B00]/10 blur-[90px]"
              />
            </div>

            {/* Light line sweeping across the top edge */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: PLAY_ONCE, amount: 0.15 }}
              transition={{ duration: 1.6, delay: 0.3, ease }}
              className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
              {metrics.map((m, idx) => {
                const base = 0.3 + idx * 0.15; // each cell starts a bit after the previous one
                return (
                  <div
                    key={m.tag}
                    className={`flex flex-col justify-between ${idx !== 0 ? "pt-6 sm:pt-0 lg:pl-8" : ""}`}
                  >
                    {/* Top Row: Tag & Contextual Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.span
                        variants={rise}
                        {...trigger(base)}
                        className="text-[10px] font-extrabold text-tertiary uppercase tracking-widest"
                      >
                        {m.tag}
                      </motion.span>

                      <div className="idle-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                        <motion.div
                          variants={pop}
                          {...trigger(base + 0.1)}
                          whileHover={{ scale: 1.12, rotate: -8, transition: spring }}
                          className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-on-surface/80 hover:text-[#FF6B00] hover:border-[#FF6B00]/20 transition-colors"
                        >
                          <Icon name={m.icon} className="text-[18px]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Stat Value & Label */}
                    <motion.div variants={rise} {...trigger(base + 0.2)}>
                      <div className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                        {m.count ? <CountUp {...m.count} delay={base + 0.3} /> : m.value}
                      </div>
                      <div className="text-xs font-semibold text-on-surface-variant mt-1">{m.label}</div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}