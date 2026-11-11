import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { hosts } from "@/lib/data";

export default function Hosts() {
  return (
    <section id="animateurs" className="w-full bg-surface-container-low py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Réseau Certifié</span>
            <h2 className="mt-2 font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Des animateurs rodés au direct, équipés chez eux</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-body-md text-body-md text-primary-container hover:text-secondary font-semibold">
            <span>Découvrir les 40+ profils certifiés</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hosts.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.08} className="flex">
              <article className="w-full p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
                    <Image src={h.src} alt={h.alt} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-md text-headline-md text-on-surface font-semibold">{h.name}</span>
                      <Icon name="verified" className="text-primary-container text-[16px]" />
                    </div>
                    <span className="font-label-sm text-label-sm text-tertiary">Spécialité : {h.specialty}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">{h.badge}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Score conversion : {h.score}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{h.bio}</p>
                <div className="mt-auto pt-3 flex items-center justify-between text-tertiary">
                  <span className="font-label-sm text-label-sm">Localisation : {h.place}</span>
                  <span className="font-label-sm text-label-sm text-primary-container font-semibold">{h.avail}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}