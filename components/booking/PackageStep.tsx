"use client";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import { ease, spring, rise, trigger } from "@/lib/motion";
import { packs, type PackId } from "@/lib/booking-data";

export default function PackageStep({ value, onChange }: { value: PackId; onChange: (pack: PackId) => void }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {packs.map((p, idx) => {
        const selected = value === p.id;
        return (
          <motion.label
            key={p.id}
            variants={rise}
            {...trigger(idx * 0.1)}
            whileHover={{ y: -2, transition: spring }}
            whileTap={{ scale: 0.99 }}
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border p-6 sm:p-7 backdrop-blur-xl transition-colors duration-300 focus-within:ring-2 focus-within:ring-[#FF6B00]/40 ${
              selected
                ? "border-[#FF6B00]/60 bg-surface/80 shadow-xl"
                : "border-white/10 bg-surface/40 shadow-sm hover:border-white/20 hover:bg-surface/60 dark:border-white/5"
            }`}
          >
            {/* Active Top-Edge Light Sweep */}
            {selected && (
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease }}
                className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
              />
            )}

            <input
              type="radio"
              name="package"
              value={p.id}
              checked={selected}
              onChange={() => onChange(p.id)}
              className="sr-only"
            />

            {/* Top Row: Monochrome Tag & Radio Indicator */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  p.featured || selected
                    ? "border-white/15 bg-white/[0.06] text-on-surface"
                    : "border-white/10 bg-white/[0.03] text-on-surface-variant"
                }`}
              >
                {p.featured && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                )}
                <span>{p.tag}</span>
              </span>

              <motion.div
                initial={false}
                animate={{ scale: selected ? 1 : 0.9 }}
                transition={spring}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                  selected
                    ? "border-[#FF6B00] bg-[#FF6B00] text-white"
                    : "border-white/15 bg-transparent text-transparent group-hover:border-white/30"
                }`}
              >
                <Icon name="check" className="text-[13px]" />
              </motion.div>
            </div>

            {/* Title & Description */}
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-lg font-extrabold tracking-tight text-on-surface sm:text-xl">
                  {p.title}
                </h4>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant/60">
                  0{idx + 1}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                {p.desc}
              </p>
            </div>

            {/* Price Readout */}
            <div className="my-6 border-y border-white/10 py-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-on-surface sm:text-3xl">
                  {p.price}
                </span>
                <span className="text-xs font-medium text-on-surface-variant">
                  {p.unit}
                </span>
              </div>
              <span
                className={`mt-1 block font-mono text-[11px] font-semibold transition-colors ${
                  selected ? "text-[#FF6B00]" : "text-on-surface-variant/80"
                }`}
              >
                {p.note}
              </span>
            </div>

            {/* Monochrome Feature List */}
            <div className="mt-auto flex flex-col gap-2.5">
              {p.features.map((f) => (
                <div
                  key={f.text}
                  className={`flex items-start gap-2.5 text-xs text-on-surface/90 sm:text-sm ${
                    f.strong ? "font-semibold text-on-surface" : "font-normal"
                  }`}
                >
                  <Icon
                    name={f.icon}
                    className={`mt-0.5 shrink-0 text-[15px] transition-colors ${
                      selected ? "text-[#FF6B00]" : "text-on-surface-variant/50"
                    }`}
                  />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </motion.label>
        );
      })}
    </div>
  );
}