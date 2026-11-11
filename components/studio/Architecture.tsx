import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { consoleImage, specs } from "@/lib/studio-data";

export default function Architecture() {
  return (
    <section id="infrastructure" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-24">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-12 lg:mb-16">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
          Infrastructure Globale &amp; Hybride
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-on-surface tracking-tight sm:text-4xl">
          En présentiel ou en ligne : une régie de pointe pour vos produits
          <span className="text-[#FF6B00]">.</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant font-normal">
          Que vous choisissiez une installation physique dans vos locaux à Lomé ou une régie déportée en ligne, notre architecture gère toute la technique pour maximiser vos ventes en direct.
        </p>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Specs & Features (Span 5) */}
          <div id="talents" className="lg:col-span-5 space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 mb-2 pb-4 border-b border-on-surface/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                <Icon name="storefront" className="text-[18px]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-on-surface tracking-tight">Flexibilité Totale B2B</h3>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-tertiary">Marché togolais &amp; global</p>
              </div>
            </div>

            <div className="space-y-3">
              {specs.map((s) => (
                <div 
                  key={s.title} 
                  className="p-4 rounded-2xl border border-on-surface/[0.08] bg-surface/40 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={s.icon} className="text-[14px]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface">{s.title}</div>
                    <div className="text-xs text-on-surface-variant font-normal mt-1 leading-snug">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* International Callout */}
            <div className="p-4 rounded-2xl border border-on-surface/[0.08] bg-surface/40 flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0">
                <Icon name="public" className="text-[16px]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-on-surface">Déploiement International</h4>
                <p className="text-xs text-on-surface-variant font-normal">Diffusion haute performance depuis Lomé.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Media Preview (Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-on-surface/[0.08] bg-surface-container shadow-sm flex flex-col justify-between group">
              
              {/* Media Canvas */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Image
                  src={consoleImage}
                  alt="Plateforme Bovann Group - Gestion des diffusions en présentiel et en ligne"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Metrics Bar */}
              <div className="p-4 bg-surface border-t border-on-surface/[0.08] grid grid-cols-3 gap-3 text-center">
                {[
                  ["Mode Service", "Présentiel & Ligne", "text-[#FF6B00]"],
                  ["Boutique TikTok", "Push Automatisé", "text-on-surface"],
                  ["Flux Direct", "Mondial < 0.1s", "text-emerald-500"],
                ].map(([label, value, color]) => (
                  <div key={label} className="p-2.5 rounded-xl border border-on-surface/[0.08] bg-surface/40">
                    <div className="text-[10px] text-tertiary uppercase font-semibold tracking-wider">{label}</div>
                    <div className={`text-xs font-bold mt-1 ${color}`}>{value}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}