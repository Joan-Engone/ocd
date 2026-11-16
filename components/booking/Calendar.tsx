"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Icon from "@/components/Icon";
import { spring } from "@/lib/motion";

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const monthFormat = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

/** Real calendar: past days are disabled, and the month can be changed. */
export default function Calendar({ value, onChange }: { value: Date | null; onChange: (date: Date) => void }) {
  const [today] = useState(() => startOfDay(new Date()));
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const year = view.getFullYear();
  const month = view.getMonth();

  // Weeks start on Monday
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const total = Math.ceil((offset + daysInMonth) / 7) * 7;
  const cells = Array.from({ length: total }, (_, i) => new Date(year, month, 1 - offset + i));

  const canGoBack = year > today.getFullYear() || month > today.getMonth();

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface/40 p-4 backdrop-blur-xl dark:border-white/5">
      {/* Header: Month & Navigation */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 px-1">
        <span
          className="text-xs font-extrabold uppercase tracking-widest text-on-surface"
          suppressHydrationWarning
        >
          {cap(monthFormat.format(view))}
        </span>

        <div className="flex items-center gap-1.5">
          <motion.button
            type="button"
            aria-label="Mois précédent"
            disabled={!canGoBack}
            whileTap={canGoBack ? { scale: 0.92 } : undefined}
            onClick={() => setView(new Date(year, month - 1, 1))}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-on-surface-variant transition-colors hover:border-white/25 hover:text-on-surface disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10"
          >
            <Icon name="chevron_left" className="text-[16px]" />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Mois suivant"
            whileTap={{ scale: 0.92 }}
            onClick={() => setView(new Date(year, month + 1, 1))}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-on-surface-variant transition-colors hover:border-white/25 hover:text-on-surface"
          >
            <Icon name="chevron_right" className="text-[16px]" />
          </motion.button>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/70">
        {WEEKDAYS.map((d, i) => (
          <span key={`${d}-${i}`} className="py-1">
            {d}
          </span>
        ))}
      </div>

      {/* Day Grid */}
      <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs" suppressHydrationWarning>
        {cells.map((date) => {
          const inMonth = date.getMonth() === month;
          const past = date < today;
          const isToday = sameDay(date, today);
          const selected = value !== null && sameDay(date, value);

          if (!inMonth) {
            return (
              <span key={date.toISOString()} className="py-2 text-on-surface-variant/20 select-none">
                {date.getDate()}
              </span>
            );
          }

          return (
            <motion.button
              key={date.toISOString()}
              type="button"
              disabled={past}
              aria-pressed={selected}
              initial={false}
              animate={{ scale: selected ? 1 : 1 }}
              whileHover={!past && !selected ? { scale: 1.05, transition: spring } : undefined}
              whileTap={!past ? { scale: 0.94 } : undefined}
              onClick={() => onChange(date)}
              className={`relative flex items-center justify-center rounded-lg py-2 transition-colors ${
                selected
                  ? "bg-[#FF6B00] font-bold text-white shadow-sm"
                  : past
                    ? "cursor-not-allowed font-normal text-on-surface-variant/25"
                    : `font-medium text-on-surface/90 hover:bg-white/[0.06] hover:text-on-surface ${
                        date.getDay() === 0 ? "text-on-surface-variant/70" : ""
                      }`
              }`}
            >
              <span>{date.getDate()}</span>
              {isToday && !selected && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 h-1 w-1 rounded-full bg-[#FF6B00]"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}