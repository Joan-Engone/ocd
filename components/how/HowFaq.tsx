"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import { howFaqs } from "@/lib/how-data";

export default function HowFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="w-full py-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold">Gouvernance &amp; Protocoles</span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Foire aux questions opérationnelles.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tout ce que vos équipes e-commerce et juridiques doivent savoir sur la diffusion TikTok LIVE déportée.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {howFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-xl bg-surface-container-lowest shadow-sm">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="font-headline-md text-headline-md text-on-surface">{f.q}</h3>
                  <Icon name={isOpen ? "remove" : "add"} className="text-primary-container text-[20px] shrink-0" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}