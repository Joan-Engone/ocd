"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PLAY_ONCE, word } from "@/lib/motion";

type Part = {
  text: string;
  /** Extra classes for these words (e.g. a color or a gradient) */
  className?: string;
  /** Attach to the previous word with no space (e.g. a final period) */
  glue?: boolean;
};

/* One word sliding up from behind a mask.
   The visibility check runs on the mask (always on screen), not on the word itself:
   a word hidden below its own mask is clipped, so the browser never reports it as visible. */
function Word({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: PLAY_ONCE, amount: 0.5 });

  return (
    <span ref={ref} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
      <motion.span
        variants={word}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        custom={delay}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Headline whose words slide up one after another.
 * Use it INSIDE a heading and give the heading an aria-label with the full text:
 *
 * <h1 aria-label="Hello world.">
 *   <Words parts={[{ text: "Hello" }, { text: "world", className: "text-orange-500" }, { text: ".", glue: true }]} />
 * </h1>
 */
export default function Words({
  parts,
  delay = 0.15,
  stagger = 0.07,
}: {
  parts: Part[];
  delay?: number;
  stagger?: number;
}) {
  const tokens: { w: string; className?: string; space: boolean }[] = [];

  parts.forEach((p) => {
    if (p.glue && tokens.length > 0) tokens[tokens.length - 1].space = false;
    p.text
      .split(" ")
      .filter(Boolean)
      .forEach((w) => tokens.push({ w, className: p.className, space: true }));
  });
  if (tokens.length > 0) tokens[tokens.length - 1].space = false;

  return (
    <>
      {tokens.map((t, i) => (
        <span key={`${t.w}-${i}`}>
          <Word delay={delay + i * stagger} className={t.className}>
            {t.w}
          </Word>
          {t.space && " "}
        </span>
      ))}
    </>
  );
}