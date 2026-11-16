"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import Words from "@/components/motion/Words";
import Icon from "@/components/Icon";
import { consoleImage, specs } from "@/lib/studio-data";
import { ease, spring, PLAY_ONCE, rise, fadeUp, slideIn, pop, trigger } from "@/lib/motion";

const metricsBar = [
  ["Mode Service", "Présentiel & Ligne", "text-[#FF6B00]"],
  ["Boutique TikTok", "Push Automatisé", "text-on-surface"],
  ["Flux Direct", "Mondial < 0.1s", "text-emerald-500"],
];

export default function Architecture() {
  // The light sweep starts outside the clipped media frame, so visibility is checked on the frame itself
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvasInView = useInView(canvasRef, { once: PLAY_ONCE, amount: 0.25 });

  return (
    <section id="infrastructure" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 lg:mb-16">
        <motion.span
          variants={rise}
          {...trigger(0)}
          className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary"
        >
          Infrastructure Globale &amp; Hybride
        </motion.span>
        <h2
          aria-label="En présentiel ou en ligne : une régie de pointe pour vos produits."
          className="mt-3 text-3xl font-extrabold text-on-surface tracking-tight sm:text-4xl"
        >
          <Words
            delay={0.15}
            parts={[
              { text: "En présentiel ou en ligne : une régie de pointe pour vos produits" },
              { text: ".", className: "text-[#FF6B00]", glue: true },
            ]}
          />
        </h2>
        <motion.p
          variants={rise}
          {...trigger(0.75)}
          className="mt-3 text-sm leading-relaxed text-on-surface-variant font-normal"
        >
          Que vous choisissiez une installation physique dans vos locaux à Lomé ou une régie déportée en ligne, notre
          architecture gère toute la technique pour maximiser vos ventes en direct.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Specs & Features (Span 5) */}
        <div id="talents" className="lg:col-span-5 space-y-4 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2 pb-4 relative">
            {/* The divider draws itself */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: PLAY_ONCE, amount: 0.25 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="absolute inset-x-0 bottom-0 h-px origin-left bg-on-surface/[0.12]"
            />
            <motion.div
              variants={pop}
              {...trigger(0.1)}
              className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]"
            >
              <Icon name="storefront" className="text-[18px]" />
            </motion.div>
            <motion.div variants={rise} {...trigger(0.2)}>
              <h3 className="text-sm font-bold text-on-surface tracking-tight">Flexibilité Totale B2B</h3>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-tertiary">
                Marché togolais &amp; global
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            {specs.map((s, i) => {
              const base = 0.3 + i * 0.12;
              return (
                <motion.div
                  key={s.title}
                  variants={slideIn}
                  {...trigger(base)}
                  whileHover={{ x: 4, transition: spring }}
                  className="p-4 rounded-2xl border border-on-surface/[0.08] bg-surface/40 flex items-start gap-3.5 transition-colors duration-300 hover:border-[#FF6B00]/30"
                >
                  <motion.div
                    variants={pop}
                    {...trigger(base + 0.12)}
                    className="w-6 h-6 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5"
                  >
                    <Icon name={s.icon} className="text-[14px]" />
                  </motion.div>
                  <div>
                    <div className="text-xs font-bold text-on-surface">{s.title}</div>
                    <div className="text-xs text-on-surface-variant font-normal mt-1 leading-snug">{s.text}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* International Callout */}
          <motion.div
            variants={slideIn}
            {...trigger(0.3 + specs.length * 0.12)}
            whileHover={{ x: 4, transition: spring }}
            className="p-4 rounded-2xl border border-on-surface/[0.08] bg-surface/40 flex items-center gap-3.5 transition-colors duration-300 hover:border-[#FF6B00]/30"
          >
            <motion.div
              variants={pop}
              {...trigger(0.42 + specs.length * 0.12)}
              className="w-8 h-8 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0"
            >
              <Icon name="public" className="text-[16px]" />
            </motion.div>
            <div>
              <h4 className="text-xs font-bold text-on-surface">Déploiement International</h4>
              <p className="text-xs text-on-surface-variant font-normal">Diffusion haute performance depuis Lomé.</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Media Preview (Span 7) */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            variants={fadeUp}
            {...trigger(0.2)}
            className="relative rounded-2xl overflow-hidden border border-on-surface/[0.08] bg-surface-container shadow-sm flex flex-col justify-between group"
          >
            {/* Media Canvas */}
            <div ref={canvasRef} className="relative aspect-video w-full overflow-hidden bg-black">
              {/* The image settles from a slight zoom */}
              <motion.div
                initial={{ scale: 1.18 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: PLAY_ONCE, amount: 0.25 }}
                transition={{ duration: 1.6, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={consoleImage}
                  alt="Plateforme Bovann Group - Gestion des diffusions en présentiel et en ligne"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* One light sweep when the console comes on */}
              <motion.span
                aria-hidden="true"
                initial={{ x: "-130%", skewX: -12, opacity: 0 }}
                animate={
                  canvasInView
                    ? { x: "520%", skewX: -12, opacity: [0, 1, 1, 0] }
                    : { x: "-130%", skewX: -12, opacity: 0 }
                }
                transition={{ duration: 1.4, delay: canvasInView ? 0.7 : 0, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
            </div>

            {/* Bottom Metrics Bar */}
            <div className="p-4 bg-surface border-t border-on-surface/[0.08] grid grid-cols-3 gap-3 text-center">
              {metricsBar.map(([label, value, color], i) => (
                <motion.div
                  key={label}
                  variants={rise}
                  {...trigger(0.8 + i * 0.12)}
                  className="p-2.5 rounded-xl border border-on-surface/[0.08] bg-surface/40"
                >
                  <div className="text-[10px] text-tertiary uppercase font-semibold tracking-wider">{label}</div>
                  <div className={`text-xs font-bold mt-1 ${color}`}>{value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}