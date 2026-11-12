
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Icon from "./Icon";
import { nav } from "@/lib/data";

const CTA = {
  label: "Réserver un Live",
  href: "/studio-formules#formules",
};

const ACCOUNT = {
  label: "Mon compte",
  href: "/compte",
};

const isActive = (href: string, pathname: string) =>
  !href.includes("#") &&
  (href === "/" ? pathname === "/" : pathname.startsWith(href));

export default function Header() {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position without Motion.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when Escape is pressed and lock body scrolling.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={close}
          className="fixed inset-0 z-40 cursor-default bg-on-background/25 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Header */}
      <header className="fixed inset-x-0 top-3 z-50 mx-auto max-w-7xl px-3 sm:top-4 sm:px-6">
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
            <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
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
          >
            {nav.map((l) => {
              const active = isActive(l.href, pathname);

              return (
                <Link
                  key={l.label}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                    active
                      ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                      : "text-on-surface-variant hover:bg-on-surface/[0.06] hover:text-on-surface"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Desktop CTA */}
            <Link
              href={CTA.href}
              className="group hidden items-center gap-2 whitespace-nowrap rounded-full bg-on-surface px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)] sm:inline-flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
              </span>

              <span>{CTA.label}</span>
            </Link>

            {/* User Account */}
            <Link
              href={ACCOUNT.href}
              aria-label={ACCOUNT.label}
              className="group flex items-center gap-2 rounded-full border border-on-surface/[0.05] bg-on-surface/[0.03] p-1 text-on-surface transition-colors duration-200 hover:border-[#FF6B00]/30 hover:bg-on-surface/[0.06] sm:pr-3.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 text-[#FF6B00] transition-colors duration-200 group-hover:bg-[#FF6B00] group-hover:text-white">
                <Icon name="person" className="text-[18px]" />
              </span>

              <span className="hidden text-xs font-medium text-on-surface-variant transition-colors group-hover:text-on-surface sm:inline">
                {ACCOUNT.label}
              </span>
            </Link>

            {/* Mobile Burger Menu */}
            <button
              type="button"
              onClick={() => setOpen((previous) => !previous)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/[0.05] bg-on-surface/[0.03] transition-colors hover:bg-on-surface/[0.06] active:scale-95 lg:hidden"
            >
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-on-surface transition-transform duration-200 ${
                  open ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />

              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-on-surface transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-on-surface transition-transform duration-200 ${
                  open ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>

          {/* Mobile Glass Drawer */}
          {open && (
            <div
              id="mobile-menu"
              className="absolute left-0 right-0 top-full mt-2.5 origin-top overflow-hidden rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:border-white/5 lg:hidden"
            >
              {/* Ambient Light */}
              <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 bg-[#FF6B00]/10 blur-[60px]" />

              <div className="flex flex-col space-y-4">
                {/* Status Header */}
                <div className="flex items-center justify-between border-b border-on-surface/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                    <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">
                      Missions En Présentiel
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B00]">
                    Bovann Group
                  </span>
                </div>

                {/* Mobile Navigation */}
                <nav
                  className="flex flex-col space-y-1"
                  aria-label="Navigation mobile"
                >
                  {nav.map((l) => {
                    const active = isActive(l.href, pathname);

                    return (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
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
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-2">
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
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
