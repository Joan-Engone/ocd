"use client";
import CountUp from "@/components/motion/CountUp";

const formatNumber = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");

/**
 * Counts up the number inside a price string (e.g. "20 000 FCFA") and keeps the text around it.
 * If there is no number (e.g. "Sur devis"), the text is shown as is.
 */
export default function CountPrice({ value, delay = 0 }: { value: string | number; delay?: number }) {
  const text = String(value);
  const match = text.match(/\d(?:[\s\u00a0\u202f]?\d)*/);
  if (!match) return <>{text}</>;

  const to = parseInt(match[0].replace(/\D/g, ""), 10);
  const prefix = text.slice(0, match.index);
  const suffix = text.slice((match.index ?? 0) + match[0].length);

  return <CountUp to={to} delay={delay} format={(v) => `${prefix}${formatNumber(v)}${suffix}`} />;
}