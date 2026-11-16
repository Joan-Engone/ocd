"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Words from "@/components/motion/Words";
import { rise, slideIn, pop, trigger } from "@/lib/motion";

const TITLE = "Votre espace client, au même endroit.";

const benefits = [
  "Suivi de vos réservations et de vos créneaux en temps réel",
  "Rapports de performance (GMV, conversions) et replays exportables",
  "Factures, devis et documents contractuels centralisés",
];

export default function AccountIntro() {
  return (
    <div>
      <motion.span
        variants={rise}
        {...trigger(0)}
        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
        </span>
        Espace client
      </motion.span>

      <h1
        aria-label={TITLE}
        className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-on-surface sm:text-5xl"
      >
        <Words
          delay={0.15}
          parts={[
            { text: "Votre espace client, au même endroit" },
            { text: ".", className: "text-[#FF6B00]", glue: true },
          ]}
        />
      </h1>

      <motion.p
        variants={rise}
        {...trigger(0.7)}
        className="mt-5 max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-base"
      >
        Connectez-vous pour suivre vos lives, consulter vos rapports et gérer vos réservations en toute simplicité.
      </motion.p>

      <div className="relative mt-10 max-w-md pt-6">
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-on-surface/[0.12]"
        />
        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <motion.li key={b} variants={slideIn} {...trigger(0.9 + i * 0.15)} className="flex items-start gap-4">
              <motion.span
                variants={pop}
                {...trigger(1 + i * 0.15)}
                className="mt-0.5 shrink-0 font-mono text-xs font-bold text-[#FF6B00]"
              >
                0{i + 1}
              </motion.span>
              <span className="text-sm leading-relaxed text-on-surface-variant">{b}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.p variants={rise} {...trigger(1.5)} className="mt-8 text-xs text-tertiary">
        Pas besoin de compte pour réserver :{" "}
        <Link href="/reserver" className="font-semibold text-on-surface underline-offset-4 hover:underline">
          planifier un live
        </Link>
        .
      </motion.p>
    </div>
  );
}