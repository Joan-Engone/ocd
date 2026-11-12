"use client";
import { motion } from "motion/react";
import { ease } from "@/lib/motion";

/**
 * A template re-mounts on every navigation, so each page fades in.
 * Opacity only: a transform here would break position: fixed elements inside the page.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}