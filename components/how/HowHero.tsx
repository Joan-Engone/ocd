"use client";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { ease, spring, PLAY_ONCE, rise, fadeUp, pop, trigger } from "@/lib/motion";
import { trustPoints } from "@/lib/booking-data";

const TITLE = "Planifier votre direct TikTok LIVE.";

export default function BookingHero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">

      {/* Ambient Background Glow: wrapper keeps the centering, inner element breathes */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full bg-gradient-to-b from-[#FF6B00]/15 via-[#FF6B00]/5 to-transparent blur-[120px]"
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center text-center lg:mb-10">

        {/* Eyebrow Badge */}
        <motion.div
          variants={rise}
          {...trigger(0)}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-surface/60 px-4 py-1.5 shadow-sm backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
          </span>

          <span className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">
            Réservation &amp; Cadrage sous 24h
          </span>
        </motion.div>

        {/* Title: words slide up one after another */}
        <h1
          aria-label={TITLE}
          className="max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl lg:text-6xl"
        >
          <Words
            delay={0.2}
            parts={[
              { text: "Planifier votre direct" },
              {
                text: "TikTok LIVE",
                className: "bg-gradient-to-r from-[#FF6B00] to-[#FF8526] bg-clip-text text-transparent",
              },
              { text: ".", glue: true },
            ]}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={rise}
          {...trigger(0.8)}
          className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-on-surface-variant sm:text-base"
        >
          Sélectionnez votre mode de tournage, vos formats et votre créneau prévisionnel. Nos directeurs de production
          calibrent votre dispositif sous 24h ouvrées.
        </motion.p>
      </div>

      {/* Trust Points Card Container */}
      <motion.div
        variants={fadeUp}
        {...trigger(0.9)}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/5 sm:p-7 lg:p-8"
      >
        {/* Light line sweeping across the top edge */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: PLAY_ONCE, amount: 0.1 }}
          transition={{ duration: 1.6, delay: 1.2, ease }}
          className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
        />

        <div className="grid grid-cols-1 gap-6 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trustPoints.map((t, idx) => {
            const base = 1.1 + idx * 0.15;
            return (
              <div
                key={t.text}
                className={`group flex items-center justify-center gap-4 ${
                  idx !== 0 ? "pt-5 sm:pl-6 sm:pt-0" : ""
                }`}
              >
                <div className="idle-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                  <motion.div
                    variants={pop}
                    {...trigger(base + 0.1)}
                    whileHover={{ scale: 1.12, rotate: -8, transition: spring }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#FF6B00] transition-colors group-hover:border-[#FF6B00]/25"
                  >
                    <Icon name={t.icon} className="text-[18px]" />
                  </motion.div>
                </div>

                <motion.div variants={rise} {...trigger(base + 0.2)} className="space-y-0.5 text-left">
                  <div className="text-xs font-bold tracking-tight text-on-surface sm:text-sm">
                    {t.text}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}