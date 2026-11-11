import Image from "next/image";
import Reveal from "@/components/Reveal";
import { team as defaultTeam } from "@/lib/about-data";

const bovannTeam = [
  {
    name: "Direction Générale & Strategy",
    role: "Direction Bovann Group",
    bio: "Supervision des opérations stratégiques et déploiement du réseau d'animation TikTok LIVE en Afrique de l'Ouest.",
    src: "/images/team-1.jpg",
  },
  {
    name: "Chef d'Antenne & Régie",
    role: "Responsable Régie Mobile",
    bio: "Pilotage des régies sur site, gestion des flux multi-caméras 4K et synchronisation audio/vidéo en présentiel.",
    src: "/images/team-2.jpg",
  },
  {
    name: "Lead Animation TikTok",
    role: "Head of Live Hosts",
    bio: "Formation et encadrement des animateurs pros certifiés dédiés à l'engagement et la conversion e-commerce.",
    src: "/images/team-3.jpg",
  },
  {
    name: "Lead Production & Setup",
    role: "Ingénieur Plateau & Image",
    bio: "Scénographie plateau, calibrage de l'éclairage broadcast et intégration technique des catalogues produits.",
    src: "/images/team-4.jpg",
  },
];

export default function Team({ team = defaultTeam || bovannTeam }) {
  const members = team && team.length > 0 ? team : bovannTeam;

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Editorial Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-tertiary">
            L&apos;Équipe • Bovann Group
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
            Direction &amp; Réalisation
            <span className="text-[#FF6B00]">.</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Nos experts en régie mobile et animation live sur site à Lomé.
          </p>
        </div>

        {/* Clean Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group flex flex-col">
                <div className="relative h-72 rounded-2xl overflow-hidden bg-surface-container mb-4 border border-on-surface/[0.08]">
                  <Image
                    src={m.src || "/images/team-placeholder.jpg"}
                    alt={`Portrait de ${m.name}`}
                    fill
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF6B00] mb-1">
                  {m.role}
                </span>
                
                <h3 className="text-lg font-bold tracking-tight text-on-surface">
                  {m.name}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-on-surface-variant font-normal">
                  {m.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}