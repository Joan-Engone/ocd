"use client";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import { ease, spring, rise, trigger } from "@/lib/motion";
import { modes, type ModeId } from "@/lib/booking-data";

export default function ModeStep({ value, onChange }: { value: ModeId; onChange: (mode: ModeId) => void }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {modes.map((m, idx) => {
        const selected = value === m.id;
        return (
          <motion.label
            key={m.id}
            variants={rise}
            {...trigger(idx * 0.12)}
            whileHover={{ y: -2, transition: spring }}
            whileTap={{ scale: 0.99 }}
            className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-colors duration-300 focus-within:ring-2 focus-within:ring-[#FF6B00]/40 ${
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
                className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
              />
            )}

            <input
              type="radio"
              name="execution_mode"
              value={m.id}
              checked={selected}
              onChange={() => onChange(m.id)}
              className="sr-only"
            />

            {/* Top Row: Monochrome Badge & Radio Indicator */}
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <Icon
                  name={m.badgeIcon}
                  className={`text-[13px] ${selected ? "text-[#FF6B00]" : "text-on-surface-variant"}`}
                />
                <span>{m.badge}</span>
              </div>

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

            {/* Icon Pod & Title */}
            <div className="mb-3 flex items-center gap-3.5">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 ${
                  selected ? "text-[#FF6B00]" : "text-on-surface/80 group-hover:text-on-surface"
                }`}
              >
                <Icon name={m.icon} className="text-[20px]" />
              </div>

              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-on-surface sm:text-xl">
                  {m.title}
                </h3>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant/70">
                  {selected ? "Actif" : `0${idx + 1}`}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-6 text-xs leading-relaxed text-on-surface-variant sm:text-sm">
              {m.text}
            </p>

            {/* Monochrome Checklist Footer */}
            <div className="-mx-6 -mb-6 mt-auto flex flex-col gap-2.5 border-t border-white/10 bg-white/[0.015] p-6 pt-5 sm:-mx-8 sm:-mb-8 sm:px-8">
              {m.points.map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-xs font-medium text-on-surface/90 sm:text-sm">
                  <Icon
                    name="check_circle"
                    className={`mt-0.5 shrink-0 text-[15px] transition-colors ${
                      selected ? "text-[#FF6B00]" : "text-on-surface-variant/50"
                    }`}
                  />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </motion.label>
        );
      })}
    </div>
  );
}