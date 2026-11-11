export const archImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtdU5uGRKXUFAphunzUk8rGw27NhZhWgHxdG0WcQ-guD7S-MvmqKlR3fYwGxeCY69jPrKa_59qdUX9v2EqYUvGVqhy7hmPRTKpkQVRNlHbmnMlm4zHtDxfyIyypyei7iQvA88gqLJ0-hpeIUXgHgf-pHNTwzTy5Z3V0_bEfgaz7ZZJvNUTPnpBZ2EpqeC9Rphxd31UyimPDS4Fw2faPyf3QW6j9hGz0o9Qw9xA8yyq";

// Use **bold** in strings; rendered by <Rich />
export const kpis = [
  { label: "En Ligne (Remote)", value: "0 Déplacement", text: "Régie cloud & créateurs à domicile", color: "text-primary" },
  { label: "En Présentiel (Paris)", value: "3 Plateaux 4K", text: "Insonorisés, cadreurs & loges VIP", color: "text-on-surface" },
  { label: "Latence Régie", value: "< 18 ms", text: "Liaison SRT sécurisée TTSP", color: "text-secondary" },
  { label: "Spark Ads Pack", value: "Sous 12h", text: "3 découpes master pour ads", color: "text-on-surface" },
];

export const phases = [
  { n: "01", icon: "manage_accounts", title: "Casting & Cadrage Événement", active: false,
    text: "Sélection du talent homologué par verticale et synchronisation des fiches produits sur TikTok Seller Center.",
    online: "Brief visio avec le talent, tests de connectivité du setup personnel validés sous 48h.",
    onsite: "Réservation du plateau parisien, scénographie de marque et loges dédiées pour vos équipes.",
    deliverable: "Rétroplanning & Fiche conducteur live" },
  { n: "02", icon: "inventory_2", title: "Logistique & Répétitions", active: false,
    text: "Acheminement des produits, calibration lumière et répétition technique à blanc la veille avec la régie.",
    online: "Envoi postal sécurisé de 2 kits d'échantillons au domicile du créateur. Test macro 4K à distance.",
    onsite: "Livraison du stock au studio à Paris. Déballage VIP, mise en scène plateau et maquillage pro.",
    deliverable: "Rapport de conformité technique" },
  { n: "03", icon: "sensors", title: "Le Direct TikTok Shop", active: true,
    text: "Diffusion haute fidélité avec régie active : déclenchement des fiches produits, modération et dynamisation des ventes.",
    online: "Régie cloud déportée : flux SRT ultra-basse latence, incrustations live et modération IA + opérateur.",
    onsite: "Réalisateur et cadreur en plateau physique, régie multicam, retour prompteur et salon VIP pour la marque.",
    deliverable: "Télémétrie, GMV live & Panier direct" },
  { n: "04", icon: "monitoring", title: "Post-Prod & Spark Ads", active: false,
    text: "Bilan de rentabilité e-commerce, remise des masters vidéo haute définition et montage d'extraits pour sponsorisation.",
    online: "Clean feed 4K cloud iso + 3 découpes Spark Ads sous 12h pour réinjecter le momentum.",
    onsite: "Rushs cinéma multicam ProRes 422 + package créatif premium (5 déclinaisons social ads).",
    deliverable: "Rapport de conversion & Master Ads" },
];

export const pillars = [
  { icon: "lightbulb", title: "Contrôle DMX Déporté", text: "Le régisseur ajuste la température d'éclairage et la balance des couleurs de la pièce du créateur à distance via passerelle IP dédiée." },
  { icon: "shield", title: "Modération Hybride IA", text: "Filtrage instantané des spams, concurrents et mots-clés blacklistés en < 0.2s, complété par un modérateur humain attentif." },
  { icon: "sync", title: "Double Encodage Secours", text: "Liaison redondée en fibre optique et 5G de backup. Si la connexion domestique flanche, la bascule miroir s'exécute sans interruption de stream." },
  { icon: "shopping_cart", title: "Synchronisation Direct Shop", text: "Gestion des promotions flash, timers de rupture et mise en avant des variantes de couleurs sans intervention manuelle du talent." },
];

export const compareRows: [string, string, string, string][] = [
  ["Cas d'Usage Recommandé",
    "**Récurrence hebdomadaire, scaling du catalogue** et collaboration fluide avec des créateurs partout en France ou à l'international.",
    "**Lancements VIP, temps forts retail (Black Friday, Noël)**, égéries de marque et plateaux scénographiés immersifs.",
    "Sessions ponctuelles d'expérimentation avec moyens du bord."],
  ["Lieu & Logistique Équipe",
    "**0 km voyagé.** Créateurs chez eux, équipes de marque à leur bureau. Envoi postal de 2 échantillons seulement.",
    "**Plateau insonorisé Paris centre.** Accueil de vos équipes, maquillage, vestiaire et loges VIP avec catering.",
    "3 à 5 personnes internes monopolisées, salle de réunion bloquée, matériel à ranger."],
  ["Qualité Technique & Captation",
    "Kits 4K Sony certifiés, micros Shure, calibration DMX à distance et liaison SRT chiffrée.",
    "Infrastructure multicam cinéma 4K, cadreurs sur pied/grue, éclairages broadcast Arri & retour prompteur.",
    "Smartphone unique, lumière ring light tremblante, son d'ambiance et baisse de batterie."],
  ["Pilotage en Régie & Ventes",
    "Régisseur cloud distant : épinglage de fiches, modération IA instantanée, déclenchement promotions flash.",
    "Régie physique sur site : opérateur dédié aux animations shopping, réalisateur direct et monitoring multi-écran.",
    "L'animateur fait tout seul sur l'écran tactile, oublie d'épingler et lit les commentaires négatifs."],
  ["Délais & Flexibilité",
    "**Activation sous 48h**. Flexibilité horaire maximale (soirées, dimanches, sessions courtes récurrentes).",
    "Réservation sous 7 jours. Demi-journées ou journées complètes pour des productions d'envergure.",
    "Lourd à monter en interne, souvent abandonné après 2 tentatives non rentables."],
];

export const guides = [
  { icon: "rocket_launch", border: "border-primary-container", iconColor: "text-primary-container", title: "Quand privilégier le Service En Ligne ?",
    text: "Idéal si vous visez un rythme régulier (2 à 5 lives par semaine), cherchez à optimiser vos coûts par diffusion et souhaitez engager des créateurs résidant dans différentes régions sans frais de transport." },
  { icon: "apartment", border: "border-on-background", iconColor: "text-on-surface", title: "Quand opter pour le Studio en Présentiel ?",
    text: "Idéal pour les lancements majeurs de collections, collaborations avec des personnalités VIP, démonstrations nécessitant plusieurs caméras physiques ou présence physique des directeurs de marque en régie." },
];

export const howFaqs = [
  { q: "Pouvons-nous alterner entre des lives En Ligne (Cloud) et En Présentiel (Studio) ?",
    a: "Absolument. C'est même la stratégie adoptée par la majorité de nos clients e-commerce : des diffusions régulières en ligne 100% déportées chaque semaine pour alimenter les ventes continues, combinées à un show événementiel par trimestre tourné dans nos plateaux parisiens avec vos ambassadeurs stars et équipes en régie." },
  { q: "Où sont situés vos studios en présentiel et comment se passe l'accueil de notre équipe ?",
    a: "Nos plateaux broadcast sont situés au cœur de Paris (accès direct transports & gares). Vous disposez d'un plateau insonorisé dédié, d'un espace lounge privatif avec écrans de retour régie, loges de maquillage et vestiaires sécurisés pour vos stocks de produits." },
  { q: "Comment sécurisez-vous l'accès à notre compte TikTok Shop sans partage de mots de passe ?",
    a: "Que le live soit En Ligne ou En Studio, nous n'avons jamais besoin de vos identifiants administrateurs. La liaison s'opère via les rôles officiels de l'API TikTok Shop Partner (TTSP) ou via l'attribution temporaire d'un rôle d'Opérateur Live dans votre TikTok Seller Center. Vos données bancaires restent strictement cloisonnées." },
  { q: "Quel est le délai de mise en place entre la validation et la première diffusion ?",
    a: "Pour une diffusion **En Ligne (Régie Cloud)**, comptez moins de 48 heures ouvrées une fois les échantillons réceptionnés chez le talent. Pour une diffusion **En Présentiel (Studios Paris)**, nous préconisons un délai de 5 à 7 jours pour scénariser le plateau et planifier la répétition générale sur place." },
];