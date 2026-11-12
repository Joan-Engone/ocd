"use client";
import { MotionConfig } from "motion/react";

/**
 * One place to control motion for the whole site.
 * "user"  -> respects the visitor's OS "reduce motion" setting (recommended)
 * "never" -> always animate (handy to test if your OS disables animations)
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}