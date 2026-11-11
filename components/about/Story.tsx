import Image from "next/image";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { storyImage } from "@/lib/about-data";

export default function Story() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image Frame Column */}
            <div className="lg:col-span-6">
              <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden bg-surface-container border border-on-surface/[0.08] shadow-sm">
                <Image
                  src={storyImage || "/images/studio-preview.jpg"}
                  alt="Équipe de régie et animation TikTok LIVE Bovann Group en présentiel"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                
                {/* On-Image Status Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-on-surface/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface">
                      Régie Mobile Sur Site
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider">
                    Lomé • Togo
                  </span>
                </div>
              </div>
            </div>

            {/* Story Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary mb-3">
                Notre Raison d&apos;Être
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight text-on-surface text-balance">
                Réinventer le direct shopping pour les marques d&apos;envergure
                <span className="text-[#FF6B00]">.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant font-normal">
                <strong className="font-semibold text-on-surface">Bovann Group</strong> est né d&apos;un constat simple : le live commerce méritait mieux que l&apos;instabilité d&apos;un smartphone isolé et la lourdeur d&apos;une régie télévisuelle classique.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-on-surface-variant font-normal">
                En déployant des équipes d&apos;animateurs certifiés et de régisseurs professionnels directement dans vos locaux ou notre studio à Lomé, nous permettons aux marques de créer des rendez-vous d&apos;achat captivants, immersifs et calibrés pour maximiser la conversion sur TikTok LIVE.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-on-surface/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <Icon name="verified" className="text-[16px]" />
                  </div>
                  <span className="text-xs font-bold text-on-surface">Hosts Certifiés</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <Icon name="video_settings" className="text-[16px]" />
                  </div>
                  <span className="text-xs font-bold text-on-surface">Régie Sur Site</span>
                </div>
              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}