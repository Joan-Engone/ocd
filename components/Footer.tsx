"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { footerCols } from "@/lib/data";
import { ease, PLAY_ONCE, rise, slideIn, trigger } from "@/lib/motion";

const letters = "OCD".split("");

const letterVariants = {
  hidden: { y: "60%", opacity: 0 },
  show: (delay: number) => ({ y: "0%", opacity: 1, transition: { duration: 1.1, delay, ease } }),
};

export default function Footer() {
  // The wordmark sits half-clipped at the bottom edge, so visibility is checked on the whole footer
  const footerRef = useRef<HTMLElement>(null);
  const inView = useInView(footerRef, { once: PLAY_ONCE, amount: 0.2 });

  return (
    <footer
      ref={footerRef}
      className="relative mt-24 w-full overflow-hidden border-t border-on-surface/[0.08] bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand + links */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <motion.div variants={rise} {...trigger(0)} className="w-fit">
              <Link href="/" className="group flex w-fit items-center gap-2.5">
                <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                  <Image src="/images/ocd-logo.png" alt="OCD" fill sizes="44px" className="object-contain" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-on-surface sm:text-xl">
                  Live<span className="text-[#FF6B00]">.</span>
                </span>
              </Link>
            </motion.div>

            <motion.p
              variants={rise}
              {...trigger(0.12)}
              className="max-w-sm text-sm leading-relaxed text-on-surface-variant"
            >
              L&apos;infrastructure cloud et régie déportée n°1 pour les marques e-commerce, marques directes et
              détaillants sur TikTok en Direct.
            </motion.p>
          </div>

          {footerCols.map((c, i) => {
            const base = 0.2 + i * 0.15; // each column starts a bit after the previous one
            return (
              <nav key={c.title} aria-label={c.title} className="flex flex-col gap-5">
                <motion.span
                  variants={rise}
                  {...trigger(base)}
                  className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary"
                >
                  <span className="text-[#FF6B00]">0{i + 1}</span>
                  {c.title}
                </motion.span>
                <ul className="flex flex-col gap-3">
                  {c.links.map((l, j) => (
                    <motion.li key={l} variants={slideIn} {...trigger(base + 0.1 + j * 0.07)}>
                      <a
                        href="#formules"
                        className="relative inline-block text-sm text-on-surface-variant transition-all duration-200 hover:translate-x-1 hover:text-on-surface after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#FF6B00] after:transition-transform after:duration-300 hover:after:scale-x-100"
                      >
                        {l}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        {/* Bottom row */}
        <motion.div
          variants={rise}
          {...trigger(0.3)}
          className="flex flex-col items-center justify-between gap-3 border-t border-on-surface/[0.08] py-6 text-center text-xs text-tertiary sm:flex-row sm:text-left"
        >
          <p>© 2026 OCD Live. Tous droits réservés.</p>

          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
              </span>
              99,98% de disponibilité
            </span>
            <span aria-hidden="true">·</span>
            <span>Certifié ISO 27001</span>
            <span aria-hidden="true">·</span>
            <span>Lomé, Togo</span>
          </p>
        </motion.div>
      </div>

      {/* Oversized wordmark: letters rise one by one */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none translate-y-[12%] text-center text-[26vw] font-extrabold leading-[0.8] tracking-tighter text-on-surface/[0.04] lg:text-[16rem]"
      >
        {letters.map((l, i) => (
          <motion.span
            key={`${l}-${i}`}
            variants={letterVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={0.4 + i * 0.15}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </footer>
  );
}