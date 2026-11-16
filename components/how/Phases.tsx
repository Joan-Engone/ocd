"use client";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { phases as defaultPhases } from "@/lib/how-data";
import { ease, spring, PLAY_ONCE, rise, fadeUp, pop, trigger } from "@/lib/motion";

const bovannPhases = [
  {
    n: "01",
    title: "Cadrage & Logistique",
    text: "Alignement stratégique sur vos objectifs et réception des échantillons.",
    deliverable: "Planning & Rétroplanning",
    icon: "assignment",
  },
  {
    n: "02",
    title: "Préparation Studio",
    text: "Configuration technique de la régie cloud et calibration du plateau.",
    deliverable: "Signal test & Fiches TikTok Shop",
    icon: "settings_input_hdmi",
  },
  {
    n: "03",
    title: "Diffusion Live & Vente",
    text: "Animation par nos présentateurs certifiés et régie en temps réel.",
    deliverable: "Session Live & Ventes directes",
    icon: "sensors",
  },
  {
    n: "04",
    title: "Analytics & Replays",
    text: "Analyse des conversions et livraison des formats courts de vente.",
    deliverable: "Rapport BI + Clips Spark Ads",
    icon: "analytics",
  },
];

const TITLE = "Une mécanique millimétrée en 4 étapes.";

export default function Phases({ phases = defaultPhases || bovannPhases }) {
  const items = phases && phases.length > 0 ? phases : bovannPhases;

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.span
            variants={rise}
            {...trigger(0)}
            className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]"
          >
            Workflow Opérationnel
          </motion.span>

          <h2
            aria-label={TITLE}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface"
          >
            <Words
              delay={0.15}
              parts={[
                { text: "Une mécanique millimétrée en" },
                {
                  text: "4 étapes",
                  className: "bg-gradient-to-r from-[#FF6B00] to-[#FF8526] bg-clip-text text-transparent",
                },
                { text: ".", glue: true },
              ]}
            />
          </h2>

          <motion.p
            variants={rise}
            {...trigger(0.4)}
            className="text-xs sm:text-sm text-on-surface-variant font-normal leading-relaxed"
          >
            De la préparation technique jusqu&apos;au rapport d&apos;analyse post-live.
          </motion.p>
        </div>

        {/* Single Streamlined Glass Capsule Container */}
        <motion.div
          variants={fadeUp}
          {...trigger(0.5)}
          className="relative rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl dark:border-white/5 overflow-hidden"
        >
          {/* Light line sweeping across the top edge */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: PLAY_ONCE, amount: 0.1 }}
            transition={{ duration: 1.4, delay: 0.7, ease }}
            className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/10">
            {items.map((p, idx) => {
              const base = 0.6 + idx * 0.15;
              return (
                <div
                  key={p.n || p.title}
                  className={`flex flex-col justify-between group ${
                    idx !== 0 ? "pt-6 md:pt-0 lg:pl-6" : ""
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Phase Number Badge & Icon Pod */}
                    <div className="flex items-center justify-between">
                      <motion.span
                        variants={rise}
                        {...trigger(base)}
                        className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-on-surface text-[10px] font-extrabold tracking-widest uppercase"
                      >
                        PHASE {p.n}
                      </motion.span>

                      <div className="idle-float" style={{ animationDelay: `${idx * 0.4}s` }}>
                        <motion.div
                          variants={pop}
                          {...trigger(base + 0.1)}
                          whileHover={{ scale: 1.12, rotate: -6, transition: spring }}
                          className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:border-[#FF6B00]/30"
                        >
                          <Icon name={p.icon} className="text-[16px]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <motion.div variants={rise} {...trigger(base + 0.2)}>
                      <h3 className="text-sm font-bold text-on-surface tracking-tight">{p.title}</h3>
                      <p className="text-xs text-on-surface-variant font-normal mt-1 leading-relaxed">
                        {p.text}
                      </p>
                    </motion.div>
                  </div>

                  {/* Clean Deliverable Footer */}
                  <motion.div
                    variants={rise}
                    {...trigger(base + 0.3)}
                    className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2"
                  >
                    <Icon name="check_circle" className="text-[14px] text-[#FF6B00] shrink-0" /> 
                    <span className="text-xs font-bold text-on-surface leading-tight">{p.deliverable}</span>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}