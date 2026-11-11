import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-12 mb-16 scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl bg-neutral-950 text-white p-10 md:p-14 relative overflow-hidden shadow-2xl border border-neutral-800">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#f07800]/25 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 font-label-md text-xs text-[#ffb787] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#f07800] animate-pulse" />
                Sessions de lancement ouvertes cette semaine
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                Prêt à lancer votre premier TikTok LIVE à distance cette semaine ?
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                Activez votre formule en quelques clics ou échangez 15 minutes avec notre directeur des opérations pour planifier la réception de vos échantillons et le casting du bon talent.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <a href="#formules" className="px-6 py-3.5 rounded-xl bg-[#f07800] hover:bg-[#fe761a] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all active:scale-[0.98]">
                <span>Sélectionner une formule</span>
                <Icon name="bolt" className="text-[18px]" />
              </a>
              <a href="mailto:ops@studiolive-pro.fr" className="px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold text-center transition-all border border-neutral-700">
                Parler à un producteur
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}