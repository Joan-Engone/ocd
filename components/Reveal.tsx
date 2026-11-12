"use client";
import { motion } from "motion/react";
import { fadeUp, trigger } from "@/lib/motion";

/**
 * Drop-in scroll reveal. Every existing <Reveal> on the site now animates
 * with the shared settings: <Reveal delay={0.1} className="...">...</Reveal>
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div variants={fadeUp} {...trigger(delay)} className={className}>
      {children}
    </motion.div>
  );
}