import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function Metrics() {
  const metrics = [
    { 
      value: "Studio & Ligne", 
      label: "Format Sur-Mesure", 
      tag: "Production", 
      icon: "podium" // Distinct broadcast / live production icon
    },
    { 
      value: "Mondiale", 
      label: "Portée Internationale", 
      tag: "Diffusion", 
      icon: "language" // Precise global network icon
    },
    { 
      value: "Packages", 
      label: "Offres Entreprises B2B", 
      tag: "Formules", 
      icon: "card_membership" // Clear B2B membership/package icon
    },
    { 
      value: "+3.2x", 
      label: "Ventes TikTok Shop", 
      tag: "Performance", 
      icon: "shopping_bag" // Direct e-commerce conversion icon
    }
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Single Unified Frosted Glass Container */}
          <div className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-8 overflow-hidden">
            
            {/* Subtle internal ambient light */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF6B00]/10 blur-[90px] pointer-events-none -z-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
              {metrics.map((m, idx) => (
                <div 
                  key={m.tag} 
                  className={`flex flex-col justify-between ${idx !== 0 ? "pt-6 sm:pt-0 lg:pl-8" : ""}`}
                >
                  {/* Top Row: Tag & Contextual Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-tertiary uppercase tracking-widest">
                      {m.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-on-surface/80">
                      <Icon name={m.icon} className="text-[18px]" />
                    </div>
                  </div>

                  {/* Stat Value & Label */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-on-surface-variant mt-1">
                      {m.label}
                    </div>
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