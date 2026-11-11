"use client";
import { useState } from "react";
import Icon from "@/components/Icon";

export default function PricingSection() {
  const [monthly, setMonthly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: monthly ? "20 000 FCFA" : "25 000 FCFA",
      period: monthly ? "HT / live" : "HT / session",
      desc: "Idéal pour tester vos premiers directs et valider votre catalogue.",
      features: [
        "Prestation 100% Présentiel sur votre site",
        "1 Animateur professionnel certifié",
        "Gestion & intégration TikTok Shop",
        "Régie technique HD standard sur site",
      ],
      featured: false,
    },
    {
      name: "Business",
      price: monthly ? "45 000 FCFA" : "55 000 FCFA",
      period: monthly ? "HT / live" : "HT / session",
      desc: "Le package complet recommandé pour accélérer vos ventes quotidiennes.",
      features: [
        "Installation complète dans vos locaux ou showroom",
        "2 Animateurs pro + 1 Régisseur dédié sur place",
        "Catalogue produits & Offres Flash en direct",
        "Habillage graphique & Analytics en direct",
        "Animation & promotion intensive sur site",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      desc: "Pour les grandes marques & déploiements multi-sites sur-mesure.",
      features: [
        "Dispositif présentiel multi-sites sur-mesure",
        "Équipe de production dédiée à votre marque",
        "Support prioritaire & Accompagnement 24/7",
        "Équipements broadcast haut de gamme mobilisés",
      ],
      featured: false,
    },
  ];

  return (
    <section id="packages" className="w-full scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header + Billing Toggle */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
              Tarifs &amp; Offres B2B
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-on-surface sm:text-4xl">
              Des formules adaptées à votre croissance
              <span className="text-[#FF6B00]">.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant font-normal">
              Choisissez la formule idéale pour booster vos ventes en direct sur TikTok Shop avec nos équipes d&apos;animateurs et régisseurs en présentiel.
            </p>
          </div>

          {/* Clean Billing Switcher */}
          <div
            role="group"
            aria-label="Mode de facturation"
            className="inline-flex w-fit items-center rounded-full border border-on-surface/[0.08] bg-surface/40 p-1 shadow-sm"
          >
            <button
              type="button"
              aria-pressed={!monthly}
              onClick={() => setMonthly(false)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                !monthly
                  ? "bg-on-surface text-surface shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              À la session
            </button>
            <button
              type="button"
              aria-pressed={monthly}
              onClick={() => setMonthly(true)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                monthly
                  ? "bg-on-surface text-surface shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Abonnement (-20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 bg-surface/40 ${
                p.featured
                  ? "border-2 border-[#FF6B00] shadow-lg lg:-translate-y-2"
                  : "border border-on-surface/[0.08] hover:border-on-surface/[0.15]"
              }`}
            >
              <div>
                {/* Plan Badge / Title */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold tracking-tight text-on-surface">{p.name}</h3>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-[#FF6B00]/10 text-[#FF6B00]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                      Recommandé
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-on-surface-variant font-normal">
                  {p.desc}
                </p>

                {/* Pricing Pod */}
                <div className="my-6 border-y border-on-surface/[0.08] py-6">
                  <div className="flex items-baseline gap-x-2">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface">
                      {p.price}
                    </span>
                    {p.period && (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-tertiary">
                        {p.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="mb-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-xs sm:text-sm font-normal text-on-surface-variant">
                      <div className="w-5 h-5 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className="text-[12px]" />
                      </div>
                      <span className="leading-snug text-on-surface">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Button */}
              <a
                href="#contact"
                className={`group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 active:scale-[0.97] ${
                  p.featured
                    ? "bg-[#FF6B00] text-white shadow-md hover:bg-[#ff7a1a]"
                    : "bg-on-surface text-surface hover:bg-[#FF6B00] hover:text-white"
                }`}
              >
                <span>Réserver cette formule</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}