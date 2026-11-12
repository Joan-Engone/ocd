"use client";
import { motion } from "motion/react";
import { ease, spring, PLAY_ONCE, rise, pop, trigger } from "@/lib/motion";
import Icon from "@/components/Icon";

const steps = [
  {
    step: "01",
    tag: "Configuration",
    title: "Format au choix",
    text: "En studio dans nos locaux ou en ligne à l'extérieur.",
    icon: "tune",
  },
  {
    step: "02",
    tag: "Casting",
    title: "Animateur Certifié",
    text: "Sélection d'un présentateur pro pour votre marque.",
    icon: "record_voice_over",
  },
  {
    step: "03",
    tag: "Production",
    title: "Régie Pro & Direct",
    text: "Notre équipe technique pilote l'habillage en direct.",
    icon: "videocam",
  },
  {
    step: "04",
    tag: "Conversion",
    title: "Ventes TikTok Shop",
    text: "Diffusion mondiale et conversion instantanée.",
    icon: "shopping_bag",
  },
];

export default function StepsTeaser() {
  return (
    <>
      <section id="comment-ca-marche" className="w-full py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <motion.span
              variants={rise}
              {...trigger(0)}
              className="block text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]"
            >
              Processus Clés en Main
            </motion.span>
            <motion.h2
              variants={rise}
              {...trigger(0.12)}
              className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight"
            >
              Un Live prêt en 4 étapes simples
            </motion.h2>
            <motion.p variants={rise} {...trigger(0.24)} className="text-xs sm:text-sm text-on-surface-variant">
              Prise en charge complète par nos équipes, de la configuration à la vente.
            </motion.p>
          </div>

          {/* Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: PLAY_ONCE, amount: 0.1 }}
            transition={{ duration: 0.9, ease }}
            className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-10 overflow-hidden"
          >
            {/* Ambient glow: wrapper keeps the centering, inner element breathes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] pointer-events-none -z-10">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-[#FF6B00]/10 blur-[100px]"
              />
            </div>

            {/* Light line sweeping across the top edge */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: PLAY_ONCE, amount: 0.1 }}
              transition={{ duration: 1.6, delay: 0.4, ease }}
              className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
            />

            {/* 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
              {steps.map((s, idx) => {
                const base = 0.4 + idx * 0.2; // each step starts a bit later than the previous one
                return (
                  <div
                    key={s.step}
                    className={`flex flex-col justify-between group ${idx !== 0 ? "pt-6 sm:pt-0 lg:pl-8" : ""}`}
                  >
                    {/* Tag & number pill */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.span
                        variants={rise}
                        {...trigger(base)}
                        className="text-[10px] font-extrabold text-tertiary uppercase tracking-widest"
                      >
                        {s.tag}
                      </motion.span>
                      <motion.span
                        variants={pop}
                        {...trigger(base + 0.15)}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-extrabold text-[#FF6B00]"
                      >
                        {s.step}
                      </motion.span>
                    </div>

                    {/* Icon & text */}
                    <div className="space-y-4">
                      <div className="idle-float w-fit" style={{ animationDelay: `${idx * 0.5}s` }}>
                        <motion.div
                          variants={pop}
                          {...trigger(base + 0.2)}
                          whileHover={{ scale: 1.12, rotate: -8, transition: spring }}
                          className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-on-surface/90 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/20 transition-colors"
                        >
                          <Icon name={s.icon} className="text-[20px]" />
                        </motion.div>
                      </div>

                      <motion.div variants={rise} {...trigger(base + 0.3)}>
                        <h3 className="text-base font-bold text-on-surface tracking-tight">{s.title}</h3>
                        <p className="mt-2 text-xs font-normal text-on-surface-variant leading-relaxed">{s.text}</p>
                      </motion.div>
                    </div>
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