
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
  type Easing,
} from "motion/react";

import Icon from "./Icon";
import { nav } from "@/lib/data";

const MotionLink = motion.create(Link);

const CTA = {
  label: "Réserver un Live",
  href: "/studio-formules#formules",
};

const ACCOUNT = {
  label: "Mon compte",
  href: "/compte",
};

const customEase: Easing = [0.16, 1, 0.3, 1];
const headerEase: Easing = [0.22, 1, 0.36, 1];

const isActive = (href: string, pathname: string) =>
  !href.includes("#") &&
  (href === "/" ? pathname === "/" : pathname.startsWith(href));

// Mobile drawer animation
const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: customEase,
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: "easeIn" as Easing,
    },
  },
};

// Individual mobile drawer items
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: customEase,
    },
  },
};

export default function Header() {
  const pathname = usePathname();

  // Remount HeaderContent when the route changes.
  // This resets the mobile menu without calling setState inside an effect.
  return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  // Close menu when Escape is pressed and lock body scrolling.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-on-background/25 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: headerEase,
        }}
        className="fixed inset-x-0 top-3 z-50 mx-auto max-w-7xl px-3 sm:top-4 sm:px-6"
      >
        <div
          className={`relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${
            scrolled || open
              ? "bg-surface/90 py-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.2)]"
              : "bg-surface/60 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          }`}
        >
          {/* Brand Identity */}
          <Link
            href="/"
            onClick={close}
            className="group flex items-center gap-2.5 outline-none"
          >
            <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
              <Image
                src="/images/ocd-logo.png"
                alt="OCD"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </div>

            <span className="text-base font-extrabold tracking-tight text-on-surface sm:text-lg">
              Live<span className="text-[#FF6B00]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-on-surface/[0.05] bg-on-surface/[0.03] p-1 lg:flex"
            aria-label="Navigation principale"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((l) => {
              const active = isActive(l.href, pathname);

              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onMouseEnter={() => setHovered(l.label)}
                  onFocus={() => setHovered(l.label)}
                  onBlur={() => setHovered(null)}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#FF6B00]"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {hovered === l.label && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-on-surface/[0.06]"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 38,
                      }}
                    />
                  )}

                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 34,
                      }}
                    />
                  )}

                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Desktop CTA */}
            <MotionLink
              href={CTA.href}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group hidden items-center gap-2 whitespace-nowrap rounded-full bg-on-surface px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)] sm:inline-flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
              </span>

              <span>{CTA.label}</span>
            </MotionLink>

            {/* User Account */}
            <MotionLink
              href={ACCOUNT.href}
              aria-label={ACCOUNT.label}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2 rounded-full border border-on-surface/[0.05] bg-on-surface/[0.03] p-1 text-on-surface transition-colors duration-200 hover:border-[#FF6B00]/30 hover:bg-on-surface/[0.06] sm:pr-3.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 text-[#FF6B00] transition-colors duration-200 group-hover:bg-[#FF6B00] group-hover:text-white">
                <Icon name="person" className="text-[18px]" />
              </span>

              <span className="hidden text-xs font-medium text-on-surface-variant transition-colors group-hover:text-on-surface sm:inline">
                {ACCOUNT.label}
              </span>
            </MotionLink>

            {/* Mobile Burger Menu */}
            <motion.button
              type="button"
              onClick={() => setOpen((o) => !o)}
              whileTap={{ scale: 0.92 }}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/[0.05] bg-on-surface/[0.03] transition-colors hover:bg-on-surface/[0.06] lg:hidden"
            >
              <motion.span
                className="absolute left-1/2 top-1/2 -ml-[9px] h-[2px] w-[18px] rounded-full bg-on-surface"
                animate={open ? { y: 0, rotate: 45 } : { y: -5, rotate: 0 }}
              />

              <motion.span
                className="absolute left-1/2 top-1/2 -ml-[9px] h-[2px] w-[18px] rounded-full bg-on-surface"
                animate={
                  open
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
              />

              <motion.span
                className="absolute left-1/2 top-1/2 -ml-[9px] h-[2px] w-[18px] rounded-full bg-on-surface"
                animate={open ? { y: 0, rotate: -45 } : { y: 5, rotate: 0 }}
              />
            </motion.button>
          </div>

          {/* Mobile Glass Drawer */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="panel"
                id="mobile-menu"
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute left-0 right-0 top-full mt-2.5 origin-top overflow-hidden rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:border-white/5 lg:hidden"
              >
                {/* Ambient Light */}
                <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 bg-[#FF6B00]/10 blur-[60px]" />

                <div className="flex flex-col space-y-4">
                  {/* Status Header */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-between border-b border-on-surface/[0.08] pb-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                      <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">
                        Missions En Présentiel
                      </span>
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B00]">
                      Bovann Group
                    </span>
                  </motion.div>

                  {/* Mobile Navigation */}
                  <nav
                    className="flex flex-col space-y-1"
                    aria-label="Navigation mobile"
                  >
                    {nav.map((l) => {
                      const active = isActive(l.href, pathname);

                      return (
                        <motion.div key={l.label} variants={itemVariants}>
                          <Link
                            href={l.href}
                            onClick={close}
                            aria-current={active ? "page" : undefined}
                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                              active
                                ? "border border-[#FF6B00]/30 bg-[#FF6B00]/15 text-[#FF6B00]"
                                : "text-on-surface-variant hover:bg-on-surface/[0.05] hover:text-on-surface"
                            }`}
                          >
                            <span>{l.label}</span>

                            <Icon
                              name="arrow_forward"
                              className={`text-[16px] ${
                                active ? "text-[#FF6B00]" : "opacity-30"
                              }`}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <motion.div variants={itemVariants} className="pt-2">
                    <Link
                      href={CTA.href}
                      onClick={close}
                      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-on-surface py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-surface shadow-[0_10px_26px_-8px_rgba(0,0,0,0.45)] transition-transform active:scale-[0.98]"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
                      </span>

                      {CTA.label}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </MotionConfig>
  );
}
