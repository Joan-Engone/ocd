"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { archImage, pillars as defaultPillars } from "@/lib/how-data";
import { ease, spring, PLAY_ONCE, rise, fadeUp, pop, trigger } from "@/lib/motion";

const bovannPillars = [
  {
    icon: "shield",
    title: "Sécurité SRT & Chiffrement",
    text: "Protocole Broadcast à faible latence sécurisé de bout en bout pour protéger votre signal live.",
  },
  {
    icon: "dvr",
    title: "Multi-Caméras Synchro",
    text: "Commutation instantanée entre plans larges, détails packaging et incrustations graphiques.",
  },
  {
    icon: "equalizer",
    title: "Traitement Audio Cloud",
    text: "Mixage radio temps réel, suppression du bruit ambiant et égalisation voix optimale.",
  },
  {
    icon: "sync_alt",
    title: "API TikTok Shop Direct",
    text: "Synchronisation instantanée des étiquettes produits et suivi des commandes en direct.",
  },
];

const telemetry = ["LATENCE : 18.2 ms", "BITRATE : 8500 kbps"];
const TITLE = "L'Architecture Technique en Action.";

export default function TechArchitecture({ pillars = defaultPillars || bovannPillars }) {
  const items = pillars && pillars.length > 0 ? pillars : bovannPillars;

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl text-left">
            <motion.span
              variants={rise}
              {...trigger(0)}
              className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]"
            >
              Infrastructure Haute Disponibilité
            </motion.span>

            <h2
              aria-label={TITLE}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface"
            >
              <Words
                delay={0.15}
                parts={[
                  { text: "L'Architecture Technique en" },
                  {
                    text: "Action",
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
              Un triple écran de contrôle opéré par nos directeurs techniques. Nous visualisons la source caméra en direct, les niveaux d&apos;égalisation audio, et le retour d&apos;achat TikTok Shop sans gigue réseau.
            </motion.p>
          </div>

          <motion.div
            variants={rise}
            {...trigger(0.5)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-surface/60 backdrop-blur-xl border border-white/10 shadow-sm shrink-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-bold text-on-surface tracking-wide">
              Flux SRT Master Actif : 1080p60
            </span>
          </motion.div>
        </div>

        {/* Master Console Image Container */}
        <motion.div variants={fadeUp} {...trigger(0.6)}>
          <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl bg-surface/60 backdrop-blur-2xl group">
            {/* Top Light Sweep Border Line */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: PLAY_ONCE, amount: 0.1 }}
              transition={{ duration: 1.4, delay: 0.8, ease }}
              className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent z-10"
            />

            <Image
              src={archImage}
              alt="Poste de contrôle à triple écran Bovann Group"
              width={1600}
              height={900}
              className="w-full h-auto object-cover max-h-[560px] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Bottom Floating Glass Overlay Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Icon name="terminal" className="text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-white tracking-tight">Régie Cloud Déportée v4.2</span>
                  <span className="text-xs text-white/70 font-normal">Multi-vue synchronisée • Mixage audio dynamique • Injection shopping API</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {telemetry.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-white text-[11px] font-mono font-bold tracking-wider"
                  >
                    {t}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-xl bg-[#FF6B00] text-white text-[11px] font-mono font-black tracking-wider uppercase shadow-md">
                  0% FRAME DROP
                </span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Pillars Grid inside Single Outer Glass Capsule */}
        <motion.div variants={fadeUp} {...trigger(0.8)}>
          <div className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 lg:divide-x divide-white/10">
              {items.map((p, idx) => {
                const base = 0.9 + idx * 0.15;
                return (
                  <div
                    key={p.title}
                    className={`flex flex-col justify-between group ${
                      idx !== 0 ? "pt-6 md:pt-0 lg:pl-6" : ""
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="idle-float" style={{ animationDelay: `${idx * 0.4}s` }}>
                        <motion.div
                          variants={pop}
                          {...trigger(base)}
                          whileHover={{ scale: 1.12, rotate: -6, transition: spring }}
                          className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:border-[#FF6B00]/30 transition-colors"
                        >
                          <Icon name={p.icon} className="text-[18px]" />
                        </motion.div>
                      </div>

                      <motion.div variants={rise} {...trigger(base + 0.1)}>
                        <h4 className="text-sm font-bold text-on-surface tracking-tight">{p.title}</h4>
                        <p className="text-xs text-on-surface-variant font-normal leading-relaxed mt-1">{p.text}</p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}