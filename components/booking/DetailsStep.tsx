"use client";
import { useEffect, useRef, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import Calendar from "@/components/booking/Calendar";
import { ease, spring, PLAY_ONCE, fadeUp, trigger } from "@/lib/motion";
import { categories, reassurance, slots, STUDIO_IMAGE, type CategoryId, type SlotId } from "@/lib/booking-data";

export type ContactFields = {
  name: string;
  email: string;
  brand: string;
  url: string;
  notes: string;
};

const dateFormat = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" });
export const formatDate = (d: Date | null) => (d ? dateFormat.format(d) : "à définir");

const inputClass =
  "h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-all focus:border-[#FF6B00]/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30";

const labelClass = "font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant";

type Props = {
  date: Date | null;
  onDate: (date: Date) => void;
  slot: SlotId;
  onSlot: (slot: SlotId) => void;
  category: CategoryId;
  onCategory: (category: CategoryId) => void;
  summary: string;
  sent: boolean;
  reference: string;
  onSubmit: (fields: ContactFields) => void;
};

export default function DetailsStep({
  date,
  onDate,
  slot,
  onSlot,
  category,
  onCategory,
  summary,
  sent,
  reference,
  onSubmit,
}: Props) {
  const rightColRef = useRef<HTMLDivElement>(null);

  // Bring the confirmation into view once the request is sent
  useEffect(() => {
    if (sent) rightColRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [sent]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    onSubmit({
      name: get("name"),
      email: get("email"),
      brand: get("brand"),
      url: get("url"),
      notes: get("notes"),
    });
  };

  const slotLabel = slots.find((s) => s.id === slot)?.title ?? "";

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Left column: calendar & time slots */}
      <div className="flex flex-col gap-6 lg:col-span-5">
        <motion.div
          variants={fadeUp}
          {...trigger(0.1)}
          className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-6 shadow-xl backdrop-blur-2xl dark:border-white/5 sm:p-7"
        >
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: PLAY_ONCE, amount: 0.1 }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
          />

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-extrabold tracking-tight text-on-surface sm:text-lg">
                1. Semaine ciblée
              </h4>
              <p className="mt-0.5 text-xs text-on-surface-variant">
                Sélectionnez la période estimée de diffusion
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>Slots ouverts</span>
            </span>
          </div>

          <Calendar value={date} onChange={onDate} />

          <fieldset className="flex flex-col gap-3">
            <legend className={`${labelClass} mb-1`}>2. Tranche horaire recommandée</legend>
            <div className="grid grid-cols-1 gap-2.5">
              {slots.map((s) => {
                const selected = slot === s.id;
                return (
                  <motion.label
                    key={s.id}
                    whileTap={{ scale: 0.99 }}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3.5 transition-colors ${
                      selected
                        ? "border-[#FF6B00]/60 bg-surface/80 shadow-md"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="time_slot"
                        value={s.id}
                        checked={selected}
                        onChange={() => onSlot(s.id)}
                        className="sr-only"
                      />
                      <div
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          selected ? "border-[#FF6B00] bg-[#FF6B00]" : "border-white/25 bg-transparent"
                        }`}
                      >
                        {selected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-on-surface sm:text-sm">{s.title}</p>
                          {s.badge && (
                            <span className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">
                              {s.badge}
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-[10px] text-on-surface-variant">{s.time}</p>
                      </div>
                    </div>
                    <span
                      className={`font-mono text-[10px] font-semibold uppercase tracking-wider ${
                        selected ? "text-[#FF6B00]" : "text-on-surface-variant/70"
                      }`}
                    >
                      {s.status}
                    </span>
                  </motion.label>
                );
              })}
            </div>
          </fieldset>

          <div className="flex items-center gap-2 pt-1 font-mono text-[10px] text-on-surface-variant">
            <Icon name="info" className="text-[14px] text-[#FF6B00]" />
            <span>Date modifiable sans frais jusqu&apos;à 72h avant le direct.</span>
          </div>
        </motion.div>

        {/* Studio visual */}
        <motion.div
          variants={fadeUp}
          {...trigger(0.2)}
          className="relative h-48 overflow-hidden rounded-3xl border border-white/10 bg-surface/40 shadow-xl"
        >
          <div
            role="img"
            aria-label="Intérieur d'un studio d'enregistrement vidéo broadcast, caméras 4K et régie de live shopping"
            className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url('${STUDIO_IMAGE}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-white">Hub Central · Studio Lomé</p>
            <p className="font-mono text-[10px] text-white/70">
              Plateaux insonorisés homologués et régie mobile sur site
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right column: contact form */}
      <div ref={rightColRef} className="flex flex-col gap-6 lg:col-span-7">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              role="status"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={spring}
              className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-surface/80 p-8 text-center shadow-xl backdrop-blur-2xl sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-[#FF6B00]">
                <Icon name="check_circle" className="text-[32px]" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-on-surface sm:text-2xl">
                Demande de créneau enregistrée !
              </h3>
              <p className="max-w-md text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                Merci pour votre confiance. Votre créneau est temporairement bloqué. Un directeur de production
                analyse vos informations et vous transmet le plan de vol technique sous 24 heures ouvrées.
              </p>
              <div className="mt-2 flex w-full max-w-sm flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Référence :</span>
                  <span className="font-bold text-[#FF6B00]">{reference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Créneau :</span>
                  <span className="font-bold text-on-surface">
                    {formatDate(date)} · {slotLabel}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Sélection :</span>
                  <span className="font-bold text-on-surface">{summary}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="text-on-surface-variant">Rappel :</span>
                  <span className="text-[#FF6B00]">&lt; 24h ouvrées</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
              variants={fadeUp}
              {...trigger(0.15)}
              className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-6 shadow-xl backdrop-blur-2xl dark:border-white/5 sm:p-8 lg:p-10"
            >
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: PLAY_ONCE, amount: 0.1 }}
                transition={{ duration: 1.4, delay: 0.25, ease }}
                className="pointer-events-none absolute inset-x-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#FF6B00]/80 to-transparent"
              />

              <div className="pb-1">
                <h4 className="text-base font-extrabold tracking-tight text-on-surface sm:text-lg">
                  2. Coordonnées de votre marque
                </h4>
                <p className="mt-0.5 text-xs text-on-surface-variant">
                  Aucun mot de passe requis. Un conseiller vous contacte sous 24h avec le cadrage complet.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="contact-name">
                    Nom complet *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="ex. Alexiane Durand"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="contact-email">
                    Email professionnel *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alexiane@marqueparis.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="brand-name">
                    Marque / Entreprise *
                  </label>
                  <input
                    id="brand-name"
                    name="brand"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="ex. Maison Botanica"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass} htmlFor="brand-url">
                    Lien TikTok Shop ou Site Web
                  </label>
                  <input
                    id="brand-url"
                    name="url"
                    type="text"
                    placeholder="tiktok.com/@votre_compte"
                    className={inputClass}
                  />
                </div>
              </div>

              <fieldset className="flex flex-col gap-2">
                <legend className={`${labelClass} mb-1`}>Catégorie principale de produits *</legend>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {categories.map((c) => {
                    const selected = category === c.id;
                    return (
                      <label
                        key={c.id}
                        className={`flex cursor-pointer items-center justify-center rounded-xl border p-3 text-center transition-colors ${
                          selected
                            ? "border-[#FF6B00] bg-surface font-bold text-[#FF6B00]"
                            : "border-white/10 bg-white/[0.03] font-medium text-on-surface-variant hover:border-white/20 hover:bg-white/[0.06]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="product_cat"
                          value={c.id}
                          checked={selected}
                          onChange={() => onCategory(c.id)}
                          className="sr-only"
                        />
                        <span className="text-xs">{c.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass} htmlFor="booking-notes">
                  Précisions ou besoins spécifiques (Optionnel)
                </label>
                <textarea
                  id="booking-notes"
                  name="notes"
                  rows={3}
                  placeholder="Ex: Lancement d'une nouvelle gamme, objectif de 250 commandes lors du direct..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-all focus:border-[#FF6B00]/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30"
                />
              </div>

              {/* Summary & Reassurance */}
              <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-on-surface">Sélection en cours :</span>
                  <span className="font-mono text-xs font-extrabold text-[#FF6B00]" aria-live="polite">
                    {summary}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 text-xs text-on-surface-variant">
                  <div className="flex items-start gap-2.5">
                    <Icon name="verified_user" className="mt-0.5 text-[15px] text-[#FF6B00] shrink-0" />
                    <span>
                      <strong className="text-on-surface">Inclus sans surcoût :</strong> Cadrage stratégique personnalisé, vérification technique de vos flux, support régie broadcast dédié.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="info" className="mt-0.5 text-[15px] text-on-surface-variant shrink-0" />
                    <span>
                      <strong className="text-on-surface">Aucun paiement immédiat requis.</strong> Votre réservation pré-bloque le créneau de diffusion et nos équipes valident la faisabilité sous 24h ouvrées.
                    </span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, transition: spring }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-[#FF6B00] text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-[#FF6B00]/25 transition-colors hover:bg-[#ff7b1a]"
                >
                  <span>Confirmer ma demande de créneau</span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </motion.button>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 font-mono text-[10px] text-on-surface-variant/70">
                  {reassurance.map((r) => (
                    <div key={r} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}