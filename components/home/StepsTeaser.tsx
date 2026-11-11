import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function StepsTeaser() {
  const steps = [
    { 
      step: "01",
      tag: "Configuration",
      title: "Format au choix", 
      text: "En studio dans nos locaux ou en ligne à l'extérieur.",
      icon: "tune"
    },
    { 
      step: "02",
      tag: "Casting",
      title: "Animateur Certifié", 
      text: "Sélection d'un présentateur pro pour votre marque.",
      icon: "record_voice_over"
    },
    { 
      step: "03",
      tag: "Production",
      title: "Régie Pro & Direct", 
      text: "Notre équipe technique pilote l'habillage en direct.",
      icon: "videocam"
    },
    { 
      step: "04",
      tag: "Conversion",
      title: "Ventes TikTok Shop", 
      text: "Diffusion mondiale et conversion instantanée.",
      icon: "shopping_bag"
    }
  ];

  return (
    <section id="comment-ca-marche" className="w-full py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
            Processus Clés en Main
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Un Live prêt en 4 étapes simples
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Prise en charge complète par nos équipes, de la configuration à la vente.
          </p>
        </div>

        {/* Single Full-Width Unified Glass Container */}
        <Reveal>
          <div className="relative rounded-3xl bg-surface/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl p-6 sm:p-10 overflow-hidden">
            
            {/* Ambient background glow inside the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#FF6B00]/10 blur-[100px] pointer-events-none -z-10" />

            {/* 4-Column Layout inside a single wrapper with vertical dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
              {steps.map((s, idx) => (
                <div 
                  key={s.step} 
                  className={`flex flex-col justify-between group ${idx !== 0 ? "pt-6 sm:pt-0 lg:pl-8" : ""}`}
                >
                  {/* Top Row: Category Tag & Number Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-extrabold text-tertiary uppercase tracking-widest">
                      {s.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-extrabold text-[#FF6B00]">
                      {s.step}
                    </span>
                  </div>

                  {/* Middle Row: Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-on-surface/90 group-hover:text-[#FF6B00] group-hover:border-[#FF6B00]/20 transition-colors">
                      <Icon name={s.icon} className="text-[20px]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-on-surface tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs font-normal text-on-surface-variant leading-relaxed">
                        {s.text}
                      </p>
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