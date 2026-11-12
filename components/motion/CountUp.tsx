"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { PLAY_ONCE } from "@/lib/motion";

/**
 * Number that counts up when it enters the screen.
 * - It starts at the final value, so server-rendered HTML shows the real number.
 * - It drives the text with a motion value (no setState inside an effect).
 * - If `to` changes later (e.g. a billing toggle), it glides from the old value to the new one.
 * <CountUp to={3.2} decimals={1} prefix="+" suffix="x" />
 * <CountUp to={20000} format={(v) => Math.round(v).toLocaleString("fr-FR")} />
 */
export default function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  delay = 0,
  duration = 1.6,
  format,
  className = "tabular-nums",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  duration?: number;
  format?: (value: number) => string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: PLAY_ONCE, amount: 0.6 });
  const played = useRef(false);

  const count = useMotionValue(to);
  const text = useTransform(count, (v) => (format ? format(v) : `${prefix}${v.toFixed(decimals)}${suffix}`));

  useEffect(() => {
    if (!inView) {
      played.current = false;
      return;
    }
    // First time visible: count from 0. Later value changes: glide from the current value.
    const controls = played.current
      ? animate(count, to, { duration: 0.7, ease: "easeOut" })
      : animate(count, [0, to], { duration, delay, ease: "easeOut" });
    played.current = true;
    return () => controls.stop();
  }, [inView, to, delay, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}