"use client";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { spring, rise, fadeUp, trigger } from "@/lib/motion";

const TITLE = "Prêt à lancer votre premier TikTok LIVE à distance cette semaine ?";

export default function FinalCta() {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-12 mb-16 scroll-mt-24">
      <motion.div
        variants={fadeUp}
        {...trigger(0)}
        className="rounded-3xl bg-neutral-950 text-white p-10 md:p-14 relative overflow-hidden shadow-2xl border border-neutral-800"
      >
        {/* Glow: wrapper keeps the position, inner element breathes */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 pointer-events-none">
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full rounded-full bg-[#f07800]/25 blur-3xl"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              variants={rise}
              {...trigger(0.2)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 font-label-md text-xs text-[#ffb787] uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#f07800] animate-pulse" />
              Sessions de lancement ouvertes cette semaine
            </motion.div>

            {/* Title: words slide up one after another */}
            <h3 aria-label={TITLE} className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
              <Words delay={0.35} parts={[{ text: TITLE }]} />
            </h3>

            <motion.p variants={rise} {...trigger(1)} className="text-sm md:text-base text-neutral-400 leading-relaxed">
              Activez votre formule en quelques clics ou échangez 15 minutes avec notre directeur des opérations pour
              planifier la réception de vos échantillons et le casting du bon talent.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <motion.a
              variants={rise}
              {...trigger(1.15)}
              whileHover={{ y: -2, transition: spring }}
              whileTap={{ scale: 0.97 }}
              href="#formules"
              className="px-6 py-3.5 rounded-xl bg-[#f07800] hover:bg-[#fe761a] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-colors"
            >
              <span>Sélectionner une formule</span>
              {/* The bolt pulses every few seconds to attract the eye */}
              <motion.span
                aria-hidden="true"
                animate={{ scale: [1, 1.3, 1], rotate: [0, -12, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
                className="inline-flex"
              >
                <Icon name="bolt" className="text-[18px]" />
              </motion.span>
            </motion.a>

            <motion.a
              variants={rise}
              {...trigger(1.27)}
              whileHover={{ y: -2, transition: spring }}
              whileTap={{ scale: 0.97 }}
              href="mailto:ops@studiolive-pro.fr"
              className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold text-center transition-colors border border-neutral-700"
            >
              Parler à un producteur
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}