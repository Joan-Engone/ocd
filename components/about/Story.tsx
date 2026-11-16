"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Icon from "@/components/Icon";
import Words from "@/components/motion/Words";
import { storyImage } from "@/lib/about-data";
import { ease, spring, PLAY_ONCE, rise, fadeUp, pop, trigger } from "@/lib/motion";

const TITLE = "Réinventer le direct shopping pour les marques d'envergure.";

export default function Story() {
  return (
    <section className="w-full py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          {...trigger(0.2)}
          className="relative rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-10 backdrop-blur-2xl dark:border-white/5 shadow-2xl overflow-hidden"
        >
          {/* Light line sweeping across the top edge */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: PLAY_ONCE, amount: 0.1 }}
            transition={{ duration: 1.4, delay: 0.4, ease }}
            className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image Frame Column */}
            <div className="lg:col-span-6">
              <motion.div
                variants={fadeUp}
                {...trigger(0.3)}
                className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-surface-container shadow-xl group"
              >
                <Image
                  src={storyImage || "/images/studio-preview.jpg"}
                  alt="Équipe de régie et animation TikTok LIVE Bovann Group en présentiel"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* On-Image Status Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface">
                      Régie Mobile Sur Site
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider">
                    Lomé • Togo
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Story Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              <motion.span
                variants={rise}
                {...trigger(0.3)}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary mb-3"
              >
                Notre Raison d&apos;Être
              </motion.span>

              <h2
                aria-label={TITLE}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight text-on-surface text-balance"
              >
                <Words
                  delay={0.35}
                  parts={[
                    { text: "Réinventer le direct shopping pour les marques d'envergure" },
                    {
                      text: ".",
                      className: "text-[#FF6B00]",
                    },
                  ]}
                />
              </h2>

              <motion.p
                variants={rise}
                {...trigger(0.5)}
                className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant font-normal"
              >
                <strong className="font-semibold text-on-surface">Bovann Group</strong> est né d&apos;un constat simple : le live commerce méritait mieux que l&apos;instabilité d&apos;un smartphone isolé et la lourdeur d&apos;une régie télévisuelle classique.
              </motion.p>

              <motion.p
                variants={rise}
                {...trigger(0.6)}
                className="mt-3 text-sm sm:text-base leading-relaxed text-on-surface-variant font-normal"
              >
                En déployant des équipes d&apos;animateurs certifiés et de régisseurs professionnels directement dans vos locaux ou notre studio à Lomé, nous permettons aux marques de créer des rendez-vous d&apos;achat captivants, immersifs et calibrés pour maximiser la conversion sur TikTok LIVE.
              </motion.p>

              {/* Key Highlights */}
              <motion.div
                variants={rise}
                {...trigger(0.7)}
                className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/10"
              >
                <div className="flex items-center gap-2.5 group">
                  <div className="idle-float">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: -6, transition: spring }}
                      className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:border-[#FF6B00]/30 transition-colors"
                    >
                      <Icon name="verified" className="text-[16px]" />
                    </motion.div>
                  </div>
                  <span className="text-xs font-bold text-on-surface">Hosts Certifiés</span>
                </div>

                <div className="flex items-center gap-2.5 group">
                  <div className="idle-float" style={{ animationDelay: "0.4s" }}>
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 6, transition: spring }}
                      className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:border-[#FF6B00]/30 transition-colors"
                    >
                      <Icon name="video_settings" className="text-[16px]" />
                    </motion.div>
                  </div>
                  <span className="text-xs font-bold text-on-surface">Régie Sur Site</span>
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}