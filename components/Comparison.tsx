import Icon from "./Icon";
import Reveal from "./Reveal";
import { oldWay, newWay } from "@/lib/data";

export default function Comparison() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Analyse Économique &amp; Agilité</span>
          <h2 className="mt-2 font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Studio en dur ou Régie 100% Déportée ?</h2>
          <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
            Pourquoi les plus grandes marques abandonnent la lourdeur des plateaux traditionnels au profit de l&apos;infrastructure cloud StudioLive Pro.
          </p>
        </div>
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl bg-surface-container-lowest/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6">
                <div>
                  <span className="font-label-sm text-label-sm text-tertiary uppercase">Modèle Ancien</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-0.5">Studio Physique Traditionnel</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-tertiary">
                  <Icon name="domain_disabled" className="text-[20px]" />
                </span>
              </div>
              <ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
                {oldWay.map(([b, t]) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon name="close" className="text-error text-[18px] flex-shrink-0 mt-0.5" />
                    <span><strong>{b}</strong> {t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4">
              <span className="font-label-sm text-label-sm text-tertiary uppercase">Résultat : Rentabilité difficilement atteignable sur TikTok Shop</span>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-surface-container-lowest shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-6 mb-6">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">Solution StudioLive Pro</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-0.5">Régie Cloud 100% Déportée</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <Icon name="check" className="text-[20px]" />
                </span>
              </div>
              <ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface">
                {newWay.map(([b, t]) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon name="check_circle" className="text-secondary-container text-[18px] flex-shrink-0 mt-0.5" />
                    <span><strong>{b}</strong> {t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4">
              <span className="font-label-sm text-label-sm text-primary font-semibold uppercase">Résultat : ROI immédiat dès le premier créneau de vente</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}