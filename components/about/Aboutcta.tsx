import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function AboutCta() {
  return (
    <section className="w-full py-16 lg:py-24 border-t border-on-surface/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Reveal className="flex flex-col items-center">
          
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF6B00]">
            Prêt pour l&apos;antenne ?
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface max-w-2xl text-balance">
            Donnez à votre marque l&apos;envergure du direct
            <span className="text-[#FF6B00]">.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant max-w-xl">
            Échangez 30 minutes avec un directeur de production pour évaluer le potentiel live de votre catalogue et planifier l&apos;intervention de nos équipes sur site.
          </p>

          <Link
            href="/studio-formules#contact"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-on-surface px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface shadow-md transition-all duration-300 hover:bg-[#FF6B00] hover:text-white active:scale-[0.97] w-full sm:w-auto"
          >
            <span>Planifier un échange stratégique</span>
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>

        </Reveal>
      </div>
    </section>
  );
}