import type { Metadata } from "next";
import AccountIntro from "@/components/account/AccountIntro";
import AuthForm from "@/components/account/AuthForm";

export const metadata: Metadata = {
  title: "Mon compte — Live.",
  description:
    "Connectez-vous ou créez votre espace client pour suivre vos réservations, vos rapports de performance et vos factures.",
};

export default function ComptePage() {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AccountIntro />
        </div>
        <div className="lg:col-span-7">
          <div className="mx-auto w-full max-w-xl">
            <AuthForm />
          </div>
        </div>
      </div>
    </section>
  );
}