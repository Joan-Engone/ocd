import Image from "next/image";
import Link from "next/link";
import { footerCols } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-on-surface/[0.08] bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* Brand + links */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">

          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link href="/" className="group flex w-fit items-center gap-2.5">
              <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                <Image
                  src="/images/ocd-logo.png"
                  alt="OCD"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-on-surface sm:text-xl">
                Live<span className="text-[#FF6B00]">.</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
              L&apos;infrastructure cloud et régie déportée n°1 pour les marques e-commerce, marques directes et détaillants sur TikTok en Direct.
            </p>
          </div>

          {footerCols.map((c, i) => (
            <nav key={c.title} aria-label={c.title} className="flex flex-col gap-5">
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
                <span className="text-[#FF6B00]">0{i + 1}</span>
                {c.title}
              </span>
              <ul className="flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#formules"
                      className="text-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-on-surface/[0.08] py-6 text-center text-xs text-tertiary sm:flex-row sm:text-left">
          <p>© 2026 OCD Live. Tous droits réservés.</p>

          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
              </span>
              99,98% de disponibilité
            </span>
            <span aria-hidden="true">·</span>
            <span>Certifié ISO 27001</span>
            <span aria-hidden="true">·</span>
            <span>Lomé, Togo</span>
          </p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none translate-y-[12%] text-center text-[26vw] font-extrabold leading-[0.8] tracking-tighter text-on-surface/[0.04] lg:text-[16rem]"
      >
        OCD
      </div>
    </footer>
  );
}