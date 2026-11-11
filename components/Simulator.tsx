"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Icon from "./Icon";
import { images } from "@/lib/data";

const DEFAULT_STATUS = "Interagissez avec le panneau gauche pour tester la réactivité.";

const controls = [
  { id: "pin", icon: "push_pin", color: "text-primary-container", title: "Épingler Produit TikTok Shop", sub: "Déclenche la pop-up panier en bas d'écran" },
  { id: "flash", icon: "timer", color: "text-secondary-container", title: "Lancer Compte à Rebours Promo", sub: "Incruste un chrono broadcast -30% (5 minutes)" },
  { id: "mod", icon: "security", color: "text-error", title: "Filtre Modération IA Immédiat", sub: "Bloque les bots et commentaires négatifs du chat" },
  { id: "cam", icon: "zoom_in", color: "text-primary", title: "Basculer Zoom Démonstration PTZ", sub: "Passe la caméra du domicile en macro texture" },
] as const;
type Action = (typeof controls)[number]["id"];

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function Simulator() {
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const [pinBump, setPinBump] = useState(0);
  const [flash, setFlash] = useState(false);
  const [secs, setSecs] = useState(299);
  const [mod, setMod] = useState(false);
  const [zoom, setZoom] = useState(false);
  const modTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!flash) return;
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [flash]);

  useEffect(() => () => clearTimeout(modTimer.current), []);

  const trigger = (a: Action) => {
    if (a === "pin") {
      setPinBump((n) => n + 1);
      setStatus("Régie Cloud : Fiche produit ré-épinglée au premier plan du live TikTok Shop.");
    } else if (a === "flash") {
      setFlash((f) => !f);
      setSecs(299);
      setStatus("Régie Cloud : Habillage chronomètre promotionnel injecté en temps réel.");
    } else if (a === "mod") {
      setMod(true);
      clearTimeout(modTimer.current);
      modTimer.current = setTimeout(() => setMod(false), 3500);
      setStatus("Régie Cloud : Modération IA activée — commentaires parasites neutralisés.");
    } else {
      setZoom((z) => !z);
      setStatus(zoom ? "Régie Cloud : Plan large rétabli au domicile de l'animateur." : "Régie Cloud : Zoom macro déclenché à distance pour gros plan produit.");
    }
  };

  return (
    <section id="simulateur" className="w-full py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-surface-container-highest p-8 lg:p-12 shadow-inner">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Simulateur Live</span>
              <h2 className="mt-2 font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Testez les commandes de la régie cloud à distance</h2>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                Cliquez sur les commandes pour voir comment nos techniciens déportés impactent votre direct sans toucher à votre studio.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              Mode Démo Actif
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-3">
              {controls.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => trigger(c.id)}
                  className="w-full text-left p-4 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-all flex items-center justify-between shadow-sm group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-container"
                >
                  <div className="flex items-center gap-3">
                    <Icon name={c.icon} className={`${c.color} text-[22px]`} />
                    <div>
                      <div className="font-headline-md text-headline-md text-on-surface font-semibold">{c.title}</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">{c.sub}</div>
                    </div>
                  </div>
                  <Icon name="chevron_right" className="text-tertiary group-hover:text-on-surface transition-colors" />
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest p-3 shadow-2xl relative">
                <div className="rounded-xl overflow-hidden relative aspect-[9/16] bg-surface-container-highest flex flex-col justify-between p-4">
                  <motion.div className="absolute inset-0" animate={{ scale: zoom ? 1.25 : 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                    <Image src={images.sim} alt="Vue verticale d'une animatrice TikTok Live présentant un flacon de soin cosmétique" fill sizes="384px" className="object-cover" />
                  </motion.div>

                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 bg-on-background/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-surface-container-lowest">
                      <span className="w-2 h-2 rounded-full bg-error animate-ping" />
                      <span className="font-label-sm text-label-sm font-semibold">LIVE</span>
                      <span className="font-label-sm text-label-sm text-surface-dim">1.4k</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-on-background/60 backdrop-blur-sm px-2 py-1 rounded-full text-surface-container-lowest">
                      <Icon name="tune" className="text-[14px]" />
                      <span className="font-label-sm text-label-sm">Remote Cloud: OK</span>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col gap-2 my-auto">
                    <AnimatePresence>
                      {flash && (
                        <motion.div key="timer" initial={{ opacity: 0, y: -12, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12 }} className="p-3 rounded-lg bg-on-background/80 backdrop-blur-md text-surface-container-lowest text-center">
                          <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">FLASH SALE ACTIVE</span>
                          <div className="font-headline-md text-headline-md text-on-primary font-bold">{fmt(secs)} • REMISE -30%</div>
                        </motion.div>
                      )}
                      {mod && (
                        <motion.div key="mod" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-2 rounded bg-surface-container-lowest/90 backdrop-blur text-on-surface text-center font-label-sm text-label-sm font-semibold">
                          <span className="text-secondary-container">Shield Cloud :</span> 14 spams filtrés automatiquement
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative z-10 w-full">
                    <motion.div key={pinBump} initial={pinBump ? { scale: 1.06 } : false} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-container-lowest shadow-lg">
                      <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary font-bold">#01</div>
                      <div className="flex-grow min-w-0">
                        <div className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Crème Hydratante Éclat 50ml</div>
                        <div className="font-label-sm text-label-sm text-primary-container font-bold">
                          24,90 € <span className="line-through text-tertiary font-normal">34,90 €</span>
                        </div>
                      </div>
                      <button type="button" className="px-2.5 py-1.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-medium">Acheter</button>
                    </motion.div>
                  </div>
                </div>
                <div className="mt-3 text-center" aria-live="polite">
                  <span className="font-label-sm text-label-sm text-tertiary">{status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}