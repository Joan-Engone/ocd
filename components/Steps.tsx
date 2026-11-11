import Icon from "./Icon";
import Reveal from "./Reveal";
import { steps } from "@/lib/data";

export default function Steps() {
  return (
    <section id="comment-ca-marche" className="w-full py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Architecture Opérationnelle</span>
            <h2 className="mt-2 font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
              Comment fonctionne votre LIVE 100% à distance ?
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Un pipeline rodé pour les DNVB et retailers : vous conservez le contrôle stratégique pendant que notre régie cloud et nos animateurs s&apos;occupent de tout l&apos;écosystème technique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="flex">
              <div className="flex flex-col w-full p-6 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <span className="font-label-md text-label-md text-primary-container font-semibold tracking-wider mb-4">ÉTAPE {s.n}</span>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-5 text-on-surface">
                  <Icon name={s.icon} className="text-[24px]" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">{s.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">{s.text}</p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-tertiary">
                  <Icon name={s.footIcon} className="text-[16px]" />
                  <span className="font-label-sm text-label-sm">{s.foot}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}