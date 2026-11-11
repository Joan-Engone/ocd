"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Icon from "@/components/Icon";
import { images } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });
const MotionLink = motion.create(Link);

const glass = "absolute flex items-center gap-3.5 rounded-2xl bg-surface/85 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-xl transition-transform hover:scale-[1.02] duration-300";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="relative w-full overflow-hidden pb-20 pt-32 lg:pt-36">
      <HeroScene />
      
      {/* Ambient background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#FF6B00]/15 via-[#FF6B00]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Top Tag Badge */}
        <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/60 backdrop-blur-xl border border-on-surface/[0.08] shadow-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
          </span>
          <span className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">
            TikTok Live B2B • En Studio &amp; En Ligne • Mondial
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 {...fade(0.08)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface max-w-4xl leading-[1.1] text-balance">
          Propulsez vos ventes en direct sur TikTok,<br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8526]"> En studio ou à distance.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fade(0.16)} className="mt-6 text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed font-normal">
          Accueillez vos produits dans nos studios professionnels pour un rendu broadcast optimal, ou diffusez en ligne depuis l&apos;extérieur pour connecter vos équipes et acheteurs du monde entier.
        </motion.p>

        {/* Ultra High-End CTA Buttons */}
        <motion.div {...fade(0.24)} className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* Primary CTA with pulse dot indicator */}
          <MotionLink 
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.96 }} 
            href="#packages" 
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B00] via-[#FF7A1A] to-[#FF8526] text-white text-xs font-black uppercase tracking-widest shadow-[0_15px_30px_rgba(255,107,0,0.35)] hover:shadow-[0_20px_40px_rgba(255,107,0,0.5)] border border-white/25 transition-all overflow-hidden"
          >
            {/* Shimmer light effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <span className="relative z-10 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Réserver une session
            </span>
          </MotionLink>

          {/* Secondary CTA */}
          <MotionLink 
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#comparatif" 
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-surface/70 hover:bg-surface text-on-surface text-xs font-bold uppercase tracking-widest backdrop-blur-2xl border border-white/15 dark:border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[#FF6B00]/50 transition-all"
          >
            <span>Voir les formules Studio &amp; Ligne</span>
          </MotionLink>

        </motion.div>

       {/* Live preview */}
        <motion.div {...fade(0.34)} className="mt-16 w-full relative">
          <div className="relative mx-auto rounded-[2rem] p-2 sm:p-2.5 bg-on-surface/[0.03] border border-on-surface/[0.06] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">

            {/* Photo frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[640px] overflow-hidden rounded-3xl bg-surface-container-highest">
              <Image
                src={images.hero}
                alt="Diffusion TikTok Live en studio et en ligne à l'international"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-center"
              />

              {/* Soft overlay for legibility */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
              />

              {/* Top row: live status + hybrid tag */}
              <div className="absolute inset-x-3 top-3 sm:inset-x-5 sm:top-5 flex items-center justify-between gap-3">
        

                <span className="hidden sm:inline-flex rounded-full bg-surface/75 backdrop-blur-xl border border-on-surface/[0.08] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-on-surface-variant">
                  Studio &amp; Cloud Hybrid
                </span>
              </div>

              {/* Bottom info bar */}
              <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 grid grid-cols-2 sm:grid-cols-3 divide-x divide-on-surface/[0.08] rounded-2xl bg-surface/75 backdrop-blur-xl border border-on-surface/[0.08] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]">
                <div className="px-4 py-3 sm:px-6 sm:py-4 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tertiary">Sur place</p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-on-surface">Studios professionnels</p>
                </div>

                <div className="px-4 py-3 sm:px-6 sm:py-4 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tertiary">En ligne</p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-on-surface">Diffusion mondiale</p>
                </div>

                <div className="hidden sm:block px-6 py-4 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tertiary">Conversion</p>
                  <p className="mt-1 text-sm font-semibold text-on-surface">
                    <span className="text-[#FF6B00]">x3.8</span> avec TikTok Shop intégré
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}