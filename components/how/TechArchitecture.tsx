import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { archImage, pillars as defaultPillars } from "@/lib/how-data";

const bovannPillars = [
  {
    icon: "shield",
    title: "Sécurité SRT & Chiffrement",
    text: "Protocole Broadcast à faible latence sécurisé de bout en bout pour protéger votre signal live.",
  },
  {
    icon: "dvr",
    title: "Multi-Caméras Synchro",
    text: "Commutation instantanée entre plans larges, détails packaging et incrustations graphiques.",
  },
  {
    icon: "equalizer",
    title: "Traitement Audio Cloud",
    text: "Mixage radio temps réel, suppression du bruit ambiant et égalisation voix optimale.",
  },
  {
    icon: "sync_alt",
    title: "API TikTok Shop Direct",
    text: "Synchronisation instantanée des étiquettes produits et suivi des commandes en direct.",
  },
];

const telemetry = ["LATENCE : 18.2 ms", "BITRATE : 8500 kbps"];

export default function TechArchitecture({ pillars = defaultPillars || bovannPillars }) {
  const items = pillars && pillars.length > 0 ? pillars : bovannPillars;

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              Infrastructure Haute Disponibilité
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface">
              L&apos;Architecture Technique en Action.
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-normal leading-relaxed">
              Un triple écran de contrôle opéré par nos directeurs techniques. Nous visualisons la source caméra en direct, les niveaux d&apos;égalisation audio, et le retour d&apos;achat TikTok Shop sans gigue réseau.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-surface/60 backdrop-blur-xl border border-white/10 shadow-sm shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-bold text-on-surface tracking-wide">
              Flux SRT Master Actif : 1080p60
            </span>
          </div>
        </div>

        {/* Master Console Image Container */}
        <Reveal>
          <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl bg-surface/60 backdrop-blur-2xl group">
            <Image
              src={archImage}
              alt="Poste de contrôle à triple écran Bovann Group"
              width={1600}
              height={900}
              className="w-full h-auto object-cover max-h-[560px]"
            />

            {/* Bottom Floating Glass Overlay Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Icon name="terminal" className="text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-white tracking-tight">Régie Cloud Déportée v4.2</span>
                  <span className="text-xs text-white/70 font-normal">Multi-vue synchronisée • Mixage audio dynamique • Injection shopping API</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {telemetry.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-white text-[11px] font-mono font-bold tracking-wider"
                  >
                    {t}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-xl bg-[#FF6B00] text-white text-[11px] font-mono font-black tracking-wider uppercase shadow-md">
                  0% FRAME DROP
                </span>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Pillars Grid inside Single Outer Glass Capsule */}
        <Reveal>
          <div className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 lg:divide-x divide-white/10">
              {items.map((p, idx) => (
                <div
                  key={p.title}
                  className={`flex flex-col justify-between group ${
                    idx !== 0 ? "pt-6 md:pt-0 lg:pl-6" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B00] group-hover:scale-105 transition-transform">
                      <Icon name={p.icon} className="text-[18px]" />
                    </div>
                    <h4 className="text-sm font-bold text-on-surface tracking-tight">{p.title}</h4>
                    <p className="text-xs text-on-surface-variant font-normal leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}