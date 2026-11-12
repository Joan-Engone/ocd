/**
 * Shared motion settings and variants for the whole website.
 * Import from here instead of redefining them in each component.
 */

// false = animations replay each time a section re-enters the screen.
// Switch to true when you are happy with the result (plays only the first time).
export const PLAY_ONCE = false;

export const ease = [0.16, 1, 0.3, 1] as const;
export const spring = { type: "spring" as const, stiffness: 380, damping: 20 };

// When an element counts as "visible"
export const viewport = { once: PLAY_ONCE, amount: 0.25 };

/* ---------- Variants ----------
   Every element triggers itself; its delay is passed through `custom`.
   Usage: <motion.div variants={rise} {...trigger(0.2)} /> */

// Small elements (text, labels): rise + blur clearing
export const rise = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease },
  }),
};

// Large containers / cards: no blur (blur would break backdrop-blur inside)
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
};

export const slideIn = {
  hidden: { opacity: 0, x: -24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

// Icons, pills, dots
export const pop = {
  hidden: { opacity: 0, scale: 0.4, rotate: -20 },
  show: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { ...spring, delay },
  }),
};

// Headline words sliding up from behind a mask
export const word = {
  hidden: { y: "110%" },
  show: (delay: number = 0) => ({ y: "0%", transition: { duration: 0.9, delay, ease } }),
};

/** Spread on a motion element: makes it animate itself when it enters the screen. */
export const trigger = (delay: number = 0) => ({
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport,
  custom: delay,
});