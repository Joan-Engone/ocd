import Icon from "./Icon";
import Reveal from "./Reveal";
import { plans } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="formules" className="w-full py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Tarification Sans Surprise</span>
          <h2 className="mt-2 font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">Formules Clé en Main Remote</h2>
          <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
            Chaque formule inclut l&apos;attribution d&apos;un animateur certifié, la logistique de brief et notre régie cloud opérationnelle complète.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="flex">
              <div className={`flex flex-col w-full p-8 rounded-xl bg-surface-container-lowest relative overflow-hidden transition-shadow ${p.featured ? "shadow-xl" : "shadow-sm hover:shadow-md"}`}>
                {p.featured && (
                  <div className="absolute top-0 right-0 bg-primary-container text-on-primary px-4 py-1 rounded-bl text-label-sm font-semibold tracking-wider uppercase">Recommandé</div>
                )}
                <div className="mb-4">
                  <span className={`font-label-sm text-label-sm uppercase tracking-wider ${p.featured ? "text-primary font-semibold" : "text-tertiary"}`}>{p.tag}</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">{p.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{p.desc}</p>
                </div>
                <div className="py-6 my-2">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-xl text-headline-xl font-semibold text-on-surface">{p.price}</span>
                    {p.unit && <span className="font-label-sm text-label-sm text-tertiary">{p.unit}</span>}
                  </div>
                  <span className={`font-label-sm text-label-sm ${p.featured ? "text-primary-container font-semibold" : "text-on-surface-variant"}`}>{p.sub}</span>
                </div>
                <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name={p.featured ? "check_circle" : "check"} className={`text-[16px] ${p.featured ? "text-secondary-container" : "text-primary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center py-3 rounded font-body-md text-body-md font-medium transition-colors ${
                    p.featured
                      ? "bg-primary-container text-on-primary shadow-md hover:bg-secondary-container"
                      : i === 2
                      ? "bg-on-background text-surface-container-lowest hover:bg-tertiary"
                      : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}