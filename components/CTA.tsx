"use client";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const reassurance = [
  "En studio ou en ligne",
  "Sans engagement de volume",
  "Éligible marques globales",
];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden border-y border-on-surface/[0.08] py-24 lg:py-32"
    >
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
          </span>
          Premier Live sous 48h
        </span>

        {/* Title */}
        <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
          Prêt à booster vos ventes en direct sur TikTok cette semaine
          <span className="text-[#FF6B00]"> ?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
          Partagez-nous votre catalogue. Que ce soit en studio dans nos locaux ou en ligne depuis l&apos;extérieur, nos équipes s&apos;occupent de tout pour lancer votre premier live sous 48 heures.
        </p>

        {/* Form or success state */}
        {sent ? (
          <div
            role="status"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-on-surface/[0.08] bg-on-surface/[0.03] px-6 py-3.5 text-sm font-medium text-on-surface"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF6B00]" />
            <span>
              Merci ! Nous vous recontactons très vite à l&apos;adresse{" "}
              <span className="text-[#FF6B00]">{email}</span>.
            </span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex w-full max-w-lg flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:border sm:border-on-surface/[0.08] sm:bg-on-surface/[0.03] sm:p-1.5 sm:transition-colors sm:focus-within:border-[#FF6B00]/40"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email professionnel"
              aria-label="Email professionnel"
              className="min-w-0 flex-1 rounded-full border border-on-surface/[0.08] bg-on-surface/[0.03] px-5 py-3.5 text-sm text-on-surface placeholder:text-tertiary focus:border-[#FF6B00]/40 focus:outline-none sm:border-0 sm:bg-transparent sm:py-3 sm:pl-5 sm:focus:border-0"
            />
            <button
              type="submit"
              className="shrink-0 whitespace-nowrap rounded-full bg-on-surface px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-all duration-300 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)] active:scale-[0.97] sm:py-3"
            >
              Demander un accès
            </button>
          </form>
        )}

        {/* Reassurance */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-tertiary">
          {reassurance.map((t, i) => (
            <li key={t} className="flex items-center gap-4">
              {i > 0 && <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-on-surface/20 sm:block" />}
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}