
/**
 * All the copy of the booking and studio pages lives here.
 * Prices and package specifications must remain consistent
 * across both sections of the project.
 *
 * Market: Lomé / FCFA
 */

export type ModeId = "cloud" | "studio";
export type PackId = "starter" | "growth" | "enterprise";
export type SlotId = "morning" | "afternoon" | "prime";
export type CategoryId = "beaute" | "fashion" | "tech" | "lifestyle";

export const trustPoints = [
  { icon: "verified", text: "TikTok Shop Partner Certifié" },
  { icon: "speed", text: "Régie Broadcast <18ms" },
  { icon: "lock_reset", text: "Sans engagement immédiat" },
];

export const modes: {
  id: ModeId;
  highlighted: boolean;
  badge: string;
  badgeIcon: string;
  icon: string;
  title: string;
  text: string;
  label: string;
  points: string[];
}[] = [
  {
    id: "cloud",
    highlighted: true,
    badge: "Recommandé · Agilité Maximale",
    badgeIcon: "bolt",
    icon: "cloud_sync",
    title: "100% En Ligne (Cloud Déporté)",
    text: "Régie connectée ultra-faible latence (<18ms). L'animateur anime depuis son studio homologué avec habillage temps réel TikTok Shop.",
    label: "100% En Ligne",
    points: [
      "Incrustation fiches TikTok Shop & modération IA",
      "Zéro déplacement requis · Déploiement sous 72h",
    ],
  },
  {
    id: "studio",
    highlighted: false,
    badge: "Plateaux Broadcast 4K",
    badgeIcon: "videocam",
    icon: "apartment",
    title: "En Présentiel (Studios Lomé)",
    text: "Pour vos lancements VIP, présentations produits et temps forts de marque. Une production professionnelle avec cadreurs et régie sur place.",
    label: "Studio Présentiel",
    points: [
      "Caméras 4K et régie multicaméra",
      "Accueil professionnel et direction live",
    ],
  },
];

export const packs: {
  id: PackId;
  featured: boolean;
  tag: string;
  title: string;
  desc: string;
  price: string;
  unit: string;
  note: string;
  label: string;
  features: { icon: string; text: string; strong?: boolean }[];
}[] = [
  {
    id: "starter",
    featured: false,
    tag: "Découverte Déportée",
    title: "Starter",
    desc: "Idéal pour tester vos premiers directs et valider votre catalogue sur TikTok Shop.",
    price: "25 000 FCFA",
    unit: "HT / session",
    note: "1 session de 25 minutes",
    label: "Starter (25 minutes)",
    features: [
      {
        icon: "timer",
        text: "1 session live de 25 minutes",
        strong: true,
      },
      {
        icon: "record_voice_over",
        text: "1 animateur certifié",
      },
      {
        icon: "videocam",
        text: "2 axes caméra HD/4K (face + focus produit)",
      },
      {
        icon: "storefront",
        text: "Jusqu'à 3 fiches TikTok Shop",
      },
      {
        icon: "movie_creation",
        text: "Replay Master HD sous 12h + métriques d'engagement",
      },
    ],
  },
  {
    id: "growth",
    featured: true,
    tag: "Recommandé",
    title: "Business",
    desc: "Le package complet recommandé pour maximiser le GMV et accélérer vos ventes quotidiennes.",
    price: "55 000 FCFA",
    unit: "HT / session",
    note: "1 animateur professionnel + 1 régisseur dédié",
    label: "Business (55 000 FCFA)",
    features: [
      {
        icon: "videocam",
        text: "Studio présentiel & régie Cloud déportée",
      },
      {
        icon: "record_voice_over",
        text: "1 animateur professionnel",
        strong: true,
      },
      {
        icon: "support_agent",
        text: "1 régisseur dédié",
        strong: true,
      },
      {
        icon: "camera",
        text: "3 caméras 4K avec macro produit",
      },
      {
        icon: "storefront",
        text: "Jusqu'à 10 références produits",
      },
      {
        icon: "analytics",
        text: "Habillage graphique & Analytics en direct",
      },
      {
        icon: "broadcast",
        text: "Multi-diffusion HD prioritaire",
      },
    ],
  },
  {
    id: "enterprise",
    featured: false,
    tag: "Grands Comptes",
    title: "Enterprise",
    desc: "Une solution personnalisée pour les grandes marques et les déploiements multi-sites.",
    price: "Sur devis",
    unit: "",
    note: "Accompagnement personnalisé",
    label: "Enterprise (Sur devis)",
    features: [
      {
        icon: "groups",
        text: "Équipe de production dédiée",
      },
      {
        icon: "hub",
        text: "Production multi-sites",
      },
      {
        icon: "support_agent",
        text: "Support prioritaire",
      },
    ],
  },
];

export const slots: {
  id: SlotId;
  title: string;
  time: string;
  badge?: string;
  status: string;
  highlighted?: boolean;
}[] = [
  {
    id: "morning",
    title: "Matinée Lancement",
    time: "10h00 - 12h00 · Idéal B2B & Food",
    status: "Dispo",
  },
  {
    id: "afternoon",
    title: "Après-midi Démo Produit",
    time: "15h00 - 17h00 · Skincare & Tech",
    status: "Dispo",
  },
  {
    id: "prime",
    title: "Prime Time Shopping",
    time: "19h00 - 21h00 · Conversion maximale",
    badge: "Pic d'audience",
    status: "Recommandé",
    highlighted: true,
  },
];

export const categories: {
  id: CategoryId;
  label: string;
}[] = [
  { id: "beaute", label: "Beauté & Soins" },
  { id: "fashion", label: "Prêt-à-porter" },
  { id: "tech", label: "Tech & Maison" },
  { id: "lifestyle", label: "Food & Lifestyle" },
];

export const reassurance = [
  "Annulation flexible 72h",
];

export const STUDIO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBprpq3tKs5OWLkGs2_9m5nwzWqEO8ZS2_cjLjRahWZziFlokmHLr2Vr7K8l5nBFRzz9tx7Dju05Ms-xO38kzKUSmzAAs__oq4x70NiSJWVokdHdjTjYj_kMPLTwL-PlUxDktPcb2HE16FnSNfEgUw6P6apiYwOlwrgPtxvf9H9oWX6opAJGpJJl0X0kiU7saqYNNd6MsuFDu51-tQup99-eKfz1KKpqffcti8Sl6jN";

export const faqs = [
  {
    q: "Puis-je changer de format (En ligne ou Présentiel) après avoir réservé ?",
    a: "Oui, absolument. Le formulaire permet de pré-qualifier vos besoins. Lors du point de cadrage avec votre chef de projet dédié sous 24h, vous pouvez ajuster le mode d'exécution (choisir l'option régie cloud ou le format présentiel) selon vos besoins.",
  },
  {
    q: "Que se passe-t-il exactement après l'envoi de ma demande ?",
    a: "Dès confirmation, votre créneau est pré-réservé dans notre planning de régie. Votre directeur de compte analyse votre boutique TikTok Shop ou votre catalogue de produits, vérifie les stocks et vous envoie une invitation pour un call de cadrage de 20 minutes afin de caler le conducteur et le choix des animateurs.",
  },
  {
    q: "Fournissez-vous l'animateur si nous n'avons pas d'ambassadeur interne ?",
    a: "Oui, c'est l'essence de notre service clés en main. Nous disposons d'un vivier d'animateurs shopping formés aux algorithmes TikTok LIVE, spécialisés par verticale (skincare, mode, tech, cuisine). Si vous préférez faire intervenir vos propres équipes ou créateurs internes, nous formons et encadrons vos talents.",
  },
];

export const consoleImage =
  "https://lh3.googleusercontent.com/aida/ALJJyrBG7hrBQsQXI-ErQDDcpImP86ZJGF7I2IOq4Vt735KlJFHhU426ZMyUhXCopd8QfJh3t2JpGkyqHhm_0azCq2XD5UjcYrYwwwHSaVJfsMwvJ4E3_Hh5UqQv4byUi5C939wuHHUcnaNvLkrGI8wLSwxLHJ31y7wCdkpEnwO10Fx_DYNX9MC8bRQC7m5pDxqdykPC7j4VKCiBwGVvLHmGBoq75LDNJMCuUE3JyGybyeoq";

// Metrics aligned with Bovann Group B2B positioning
export const studioMetrics = [
  {
    icon: "cloud_sync",
    value: "4K HDR",
    label: "Multi-flux déporté SRT",
  },
  {
    icon: "trending_up",
    value: "+340%",
    label: "Conversion boutique TikTok",
  },
  {
    icon: "speed",
    value: "< 18ms",
    label: "Latence cloud SRT sécurisée",
  },
  {
    icon: "verified_user",
    value: "100% Clé en main",
    label: "Host certifié + Régie cloud incluse",
  },
];

export const plans = [
  {
    tag: "Découverte Déportée",
    name: "Starter",
    icon: "cloud_upload",
    featured: false,
    desc: "Idéal pour tester vos premiers directs et valider votre catalogue sur TikTok Shop.",
    session: {
      price: "25 000 FCFA",
      period: "HT / session de 25 min",
    },
    monthly: {
      price: "20 000 FCFA",
      period: "HT / live (-20%)",
    },
    note: "100% en présentiel ou à distance · Sans engagement de volume",
    features: [
      "**1 session de 25 min** animée depuis studio ou vos locaux à Lomé",
      "**1 animateur certifié** vertical Beauté, Mode ou High-Tech",
      "Régie cloud **2 axes caméra HD/4K** (face + focus packaging)",
      "Gestion et mise en avant de **3 fiches TikTok Shop**",
      "Livrable : Replay Master HD sous 12h + métriques d'engagement",
    ],
    cta: "Réserver la formule Starter",
  },
  {
    tag: "Accélération E-commerce",
    name: "Business",
    icon: "stars",
    featured: true,
    desc: "Le package complet recommandé pour maximiser le GMV et accélérer vos ventes quotidiennes.",
    session: {
      price: "55 000 FCFA",
      period: "HT / session",
    },
    monthly: {
      price: "45 000 FCFA",
      period: "HT / live (-20%)",
    },
    note: "Formule populaire · 1 animateur & 1 régisseur dédié",
    features: [
      "**Studio présentiel & régie Cloud déportée**",
      "**1 Animateur professionnel + 1 Régisseur dédié**",
      "Régie cloud **3 caméras avec macro produit 4K**",
      "Catalogue produits & Offres Flash en direct (jusqu'à 10 réf.)",
      "Habillage graphique & Analytics en direct",
      "Multi-diffusion HD prioritaire",
    ],
    cta: "Choisir la formule Business",
  },
  {
    tag: "Réseaux & Grands Comptes",
    name: "Enterprise",
    icon: "hub",
    featured: false,
    desc: "Pour les grandes marques & déploiements internationaux multi-sites.",
    session: {
      price: "Sur devis",
      period: "",
    },
    monthly: {
      price: "Sur devis",
      period: "",
    },
    note: "Accompagnement dédié & support prioritaire",
    features: [
      "Équipe de production dédiée",
      "Production multi-sites sur-mesure",
      "Support prioritaire",
    ],
    cta: "Contacter l'équipe Enterprise",
  },
];

export const specs = [
  {
    icon: "lens",
    title: "Optiques Sony FX3 & FX6 Plein Format",
    text: "Rendu bokeh cinématique, autofocus yeux infaillible et colorimétrie peau calibrée S-Cinetone.",
  },
  {
    icon: "mic",
    title: "Prise de son Shure SM7B & Sennheiser HF",
    text: "Isolation acoustique de pièce, traitement anti-réverbération et compression radio temps réel.",
  },
  {
    icon: "light_mode",
    title: "Éclairage Aputure DMX pilotable à distance",
    text: "Nos régisseurs contrôlent l'intensité et la température de lumière du créateur depuis le cloud.",
  },
];

export const addons = [
  {
    icon: "record_voice_over",
    title: "Animateur B2B Expert",
    text: "Ajout d'un présentateur professionnel certifié pour incarner votre marque.",
    unit: "Par session",
    price: "+15 000 FCFA",
  },
  {
    icon: "storefront",
    title: "Option Présentiel Sur Site",
    text: "Déplacement de notre régie mobile et de l'équipe technique dans vos locaux.",
    unit: "Sur devis",
    price: "Sur-mesure",
  },
  {
    icon: "language",
    title: "Pack Multilingue Global",
    text: "Diffusion simultanée et traduction en direct pour toucher le marché international.",
    unit: "Par mois",
    price: "+30 000 FCFA",
  },
  {
    icon: "trending_up",
    title: "Campagne Ads & Coupons",
    text: "Boost publicitaire ciblé et intégration de coupons flash sur TikTok Shop.",
    unit: "Par live",
    price: "+20 000 FCFA",
  },
];

export const matrix: [string, string, string, string][] = [
  [
    "Durée de direct par créneau",
    "25 minutes",
    "Selon créneau réservé",
    "Modulable (sur mesure)",
  ],
  [
    "Caméras & régie cloud déportée",
    "2 axes HD/4K (Face + Plan produit)",
    "3 caméras 4K + Macro détails",
    "Dispositif multi-sites sur-mesure",
  ],
  [
    "Animateur / Créateur certifié",
    "1 Host certifié catégorie",
    "1 Animateur professionnel",
    "Équipe de production dédiée",
  ],
  [
    "Régisseur cloud & assistance direct",
    "Supervision cloud mutualisée",
    "1 Régisseur dédié 100% au live",
    "Équipe technique dédiée",
  ],
  [
    "Catalogue TikTok Shop synchronisé",
    "Jusqu'à 3 fiches produits",
    "Jusqu'à 10 références",
    "Sur mesure",
  ],
  [
    "Modération chat & filtre anti-trolls",
    "Standard",
    "Selon configuration",
    "Sur mesure",
  ],
  [
    "Habillage graphique & bannières dynamiques",
    "Templates standardisés",
    "Charte personnalisée de la marque",
    "Sur mesure",
  ],
  [
    "Rapport télémétrique post-live",
    "Métriques de base exportées",
    "Analytics en direct",
    "Sur mesure",
  ],
  [
    "Livrables replays & Shorts Spark Ads",
    "Master HD sous 12h",
    "Master HD + livrables convenus",
    "Sur mesure",
  ],
  [
    "SLA disponibilité & Support Prioritaire",
    "Standard Email",
    "Support dédié",
    "Support prioritaire",
  ],
];

export const studioFaqs = [
  {
    q: "Comment mes produits sont-ils transmis à l'équipe de production ?",
    a: "Que ce soit pour un tournage dans nos locaux à Lomé ou à distance, vous transmettez simplement votre échantillon produit au moins 48h avant le direct. En option présentiel, notre équipe déplace directement la régie mobile dans votre magasin ou showroom.",
  },
  {
    q: "Comment la régie gère-t-elle le direct à distance ?",
    a: "Tous nos équipements sont connectés via le protocole sécurisé SRT (<18ms de latence). Notre régisseur à distance pilote les bascules de caméras, gère les flux audio, ajuste l'éclairage et pousse les bannières de promotions directement sur le stream final.",
  },
  {
    q: "Qui gère la connexion au compte TikTok de ma marque ?",
    a: "Vous ne partagez jamais vos identifiants. Nous utilisons l'intégration officielle TikTok Shop Partner (TAP / TTSP) ou la clé de flux RTMP officielle fournie par votre TikTok Live Studio pour émettre le signal vidéo de manière 100% sécurisée.",
  },
  {
    q: "Comment est géré le briefing avant la première diffusion ?",
    a: "Nous organisons une session de cadrage vidéo de 30 minutes avec votre responsable e-commerce, le régisseur assigné et l'animateur pour valider les arguments de vente clés, les offres flash et le déroulé de la session.",
  },
];
