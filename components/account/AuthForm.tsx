"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import { ease, spring, fadeUp, trigger } from "@/lib/motion";
import { signIn, signUp } from "@/lib/auth";

type Mode = "login" | "register";

const inputClass =
  "h-12 w-full rounded-xl border border-on-surface/[0.1] bg-on-surface/[0.03] px-4 text-sm text-on-surface placeholder:text-tertiary transition-all focus:border-[#FF6B00]/50 focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/10";

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant";

const tabs: { id: Mode; label: string }[] = [
  { id: "login", label: "Connexion" },
  { id: "register", label: "Créer un compte" },
];

/** 0 to 4: length, uppercase, digit, symbol */
const passwordScore = (value: string) =>
  [value.length >= 8, /[A-Z]/.test(value), /\d/.test(value), /[^A-Za-z0-9]/.test(value)].filter(Boolean).length;

const strengthLabels = ["Trop court", "Faible", "Correct", "Bon", "Excellent"];

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function AuthForm() {
  const [mode, setMode] = useState<Mode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<Mode | null>(null);

  const switchMode = (next: Mode) => {
    setMode(next);
    setError("");
    setPassword("");
    setShowPassword(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    setError("");
    setLoading(true);

    const result =
      mode === "login"
        ? await signIn({ email: get("email"), password: String(data.get("password") ?? "") })
        : await signUp({
            name: get("name"),
            brand: get("brand"),
            email: get("email"),
            password: String(data.get("password") ?? ""),
          });

    setLoading(false);

    if (result.ok) setDone(mode);
    else setError(result.error);
  };

  const score = passwordScore(password);

  return (
    <motion.div
      variants={fadeUp}
      {...trigger(0.3)}
      className="rounded-3xl border border-on-surface/[0.08] bg-surface/60 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-10"
    >
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            role="status"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={spring}
            className="flex flex-col items-center gap-4 py-6 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <Icon name="check_circle" className="text-[30px]" />
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">
              {done === "login" ? "Connexion réussie" : "Compte créé"}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
              {done === "login"
                ? "Content de vous revoir. Votre espace client est prêt."
                : "Bienvenue ! Votre espace client est prêt, vous pouvez planifier votre premier live."}
            </p>
            <Link
              href="/reserver"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-on-surface px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
              </span>
              Réserver un live
            </Link>
          </motion.div>
        ) : (
          <motion.div key="form" initial={false} exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}>
            {/* Mode switch: the dark pill glides between the two options */}
            <div
              role="group"
              aria-label="Connexion ou création de compte"
              className="mb-8 flex w-full items-center rounded-full border border-on-surface/[0.08] bg-on-surface/[0.03] p-1"
            >
              {tabs.map((t) => {
                const active = mode === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => switchMode(t.id)}
                    className={`relative flex-1 rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                      active ? "text-surface" : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="auth-pill"
                        transition={spring}
                        className="absolute inset-0 rounded-full bg-on-surface shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.form
                key={mode}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: mode === "login" ? -16 : 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: mode === "login" ? 16 : -16 }}
                transition={{ duration: 0.25, ease }}
                className="flex flex-col gap-5"
                noValidate={false}
              >
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">
                    {mode === "login" ? "Bon retour" : "Créez votre espace"}
                    <span className="text-[#FF6B00]">.</span>
                  </h2>
                  <p className="mt-1.5 text-sm text-on-surface-variant">
                    {mode === "login"
                      ? "Entrez vos identifiants pour accéder à votre espace."
                      : "Quelques informations suffisent pour démarrer."}
                  </p>
                </div>

                {mode === "register" && (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="auth-name" label="Nom complet">
                      <input
                        id="auth-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="ex. Alexiane Durand"
                        className={inputClass}
                      />
                    </Field>
                    <Field id="auth-brand" label="Marque / Entreprise">
                      <input
                        id="auth-brand"
                        name="brand"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder="ex. Maison Botanica"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                )}

                <Field id="auth-email" label="Email professionnel">
                  <input
                    id="auth-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="vous@entreprise.com"
                    className={inputClass}
                  />
                </Field>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="auth-password" className={labelClass}>
                      Mot de passe
                    </label>
                    {mode === "login" && (
                      <a
                        href="mailto:ops@studiolive-pro.fr?subject=Mot%20de%20passe%20oubli%C3%A9"
                        className="text-xs text-on-surface-variant underline-offset-4 transition-colors hover:text-[#FF6B00] hover:underline"
                      >
                        Mot de passe oublié ?
                      </a>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      id="auth-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={mode === "register" ? 8 : undefined}
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                      placeholder={mode === "register" ? "8 caractères minimum" : "Votre mot de passe"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      aria-pressed={showPassword}
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-on-surface/[0.06] hover:text-on-surface"
                    >
                      <Icon name={showPassword ? "visibility_off" : "visibility"} className="text-[18px]" />
                    </button>
                  </div>

                  {mode === "register" && password.length > 0 && (
                    <div className="mt-1.5" aria-live="polite">
                      <div className="flex gap-1.5">
                        {[0, 1, 2, 3].map((i) => (
                          <span key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-on-surface/[0.08]">
                            <motion.span
                              className="block h-full origin-left rounded-full bg-[#FF6B00]"
                              initial={false}
                              animate={{ scaleX: i < score ? 1 : 0 }}
                              transition={{ duration: 0.3, ease }}
                            />
                          </span>
                        ))}
                      </div>
                      <p className="mt-1.5 text-xs text-tertiary">{strengthLabels[score]}</p>
                    </div>
                  )}
                </div>

                {mode === "register" && (
                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-on-surface-variant">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[#FF6B00]"
                    />
                    <span>J&apos;accepte les conditions générales et la politique de confidentialité (RGPD).</span>
                  </label>
                )}

                <AnimatePresence>
                  {error && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? undefined : { y: -2 }}
                  whileTap={loading ? undefined : { scale: 0.98 }}
                  className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-on-surface px-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin rounded-full border-2 border-surface/30 border-t-surface"
                      />
                      <span>{mode === "login" ? "Connexion…" : "Création…"}</span>
                    </>
                  ) : (
                    <span>{mode === "login" ? "Se connecter" : "Créer mon compte"}</span>
                  )}
                </motion.button>

                <p className="text-center text-xs text-tertiary">
                  {mode === "login" ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
                  <button
                    type="button"
                    onClick={() => switchMode(mode === "login" ? "register" : "login")}
                    className="font-semibold text-on-surface underline-offset-4 hover:underline"
                  >
                    {mode === "login" ? "Créer un compte" : "Se connecter"}
                  </button>
                </p>
              </motion.form>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}