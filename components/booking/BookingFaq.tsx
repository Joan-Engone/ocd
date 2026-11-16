"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import { ease } from "@/lib/motion";
import { faqs } from "@/lib/booking-data";

export default function BookingFaq() {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) => setOpen((prev) => (prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]));

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 pt-8">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
          Questions fréquentes avant réservation
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tout ce que vous devez savoir pour organiser votre session live sereinement.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={f.q} className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-headline-md text-headline-md font-semibold text-on-surface transition-colors hover:bg-surface-container-low/40"
              >
                <span>{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="inline-flex shrink-0 text-on-surface-variant"
                >
                  <Icon name="expand_more" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-1 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl bg-surface-container-high/40 p-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-primary-container shadow-sm">
            <Icon name="headset_mic" className="text-[20px]" />
          </div>
          <div>
            <p className="font-body-md text-body-md font-semibold text-on-surface">
              Besoin d&apos;un cadrage sur-mesure ou d&apos;un appel direct ?
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Nos showrunners sont disponibles du lundi au vendredi de 9h à 19h.
            </p>
          </div>
        </div>
        <a
          href="mailto:ops@studiolivepro.com"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-surface-container-lowest px-4 py-2 font-body-sm text-body-sm font-semibold text-on-surface shadow-sm transition-colors hover:bg-surface-container"
        >
          <span>Écrire à l&apos;équipe Régie</span>
          <Icon name="arrow_outward" className="text-[16px]" />
        </a>
      </div>
    </div>
  );
}