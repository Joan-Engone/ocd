import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { addons } from "@/lib/studio-data";

export default function Addons({ addons: customAddons }: { addons?: typeof addons }) {
  const allItems = customAddons && customAddons.length > 0 ? customAddons : addons;
  
  // Filter out "Option Présentiel Sur Site" to keep 3 streamlined options
  const items = allItems.filter(
    (a) => a.title !== "Option Présentiel Sur Site"
  );

  return (
    <section className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      
      {/* Background ambient light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#FF6B00]/10 blur-[100px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
          Options &amp; Modules Flexibles
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
          Extensions activables pour vos sessions Live
        </h2>
        <p className="text-xs sm:text-sm text-on-surface-variant font-normal leading-relaxed">
          Personnalisez votre package en un clin d&apos;œil avec des options sur-mesure.
        </p>
      </div>

      {/* Single Unified Outer Glass Capsule Container */}
      <Reveal>
        <div className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:gap-y-0 md:divide-x divide-white/10">
            {items.map((a, idx) => (
              <div
                key={a.title}
                className={`flex flex-col justify-between group ${
                  idx !== 0 ? "pt-6 md:pt-0 md:pl-6" : ""
                }`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-[#FF6B00] flex items-center justify-center group-hover:border-[#FF6B00]/40 transition-colors">
                      <Icon name={a.icon} className="text-[16px]" />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-tertiary">
                      Option {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-on-surface tracking-tight">{a.title}</h3>
                  <p className="text-xs text-on-surface-variant font-normal mt-1 leading-relaxed min-h-[36px]">
                    {a.text}
                  </p>
                </div>

                {/* Price Display Block */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-tertiary">
                    {a.unit}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#FF6B00]">
                    {a.price}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Reveal>

    </section>
  );
}