
export const consoleImage =
  "https://lh3.googleusercontent.com/aida/ALJJyrBG7hrBQsQXI-ErQDDcpImP86ZJGF7I2IOq4Vt735KlJFHhU426ZMyUhXCopd8QfJh3t2JpGkyqHhm_0azCq2XD5UjcYrYwwwHSaVJfsMwvJ4E3_Hh5UqQv4byUi5C939wuHHUcnaNvLkrGI8wLSwxLHJ31y7wCdkpEnwO10Fx_DYNX9MC8bRQC7m5pDxqdykPC7j4VKCiBwGVvLHmGBoq75LDNJMCuUE3JyGybyeoq";

// Metrics
export const studioMetrics = [
  {
    icon: "cloud_sync",
    value: "4K HDR",
    label: "Multi-flux déporté SRT",
  },
  {
    icon: "trending_up",
    value: "Optimisée",
    label: "Conversion boutique TikTok",
  },
  {
    icon: "speed",
    value: "SRT",
    label: "Transmission cloud sécurisée",
  },
  {
    icon: "verified_user",
    value: "Clé en main",
    label: "Animation et régie de production",
  },
];

// Pricing plans
export const plans = [
  {
    tag: "Découverte Déportée",
    name: "Starter",
    icon: "cloud_upload",
    featured: false,
    desc: "Idéal pour tester vos premiers directs et présenter votre catalogue sur TikTok Shop.",
    session: {
      price: "25 000 FCFA",
      period: "HT / session de 25 min",
    },
    monthly: {
      price: "Sur devis",
      period: "Tarif récurrent à confirmer",
    },
    note: "En présentiel ou à distance · Sans engagement de volume",
    features: [
      "**1 session de 25 minutes** animée depuis le studio ou vos locaux à Lomé",
      "**1 animateur certifié** dans votre secteur d'activité",
      "Régie cloud avec **2 angles caméra HD/4K** (face + focus produit)",
      "Gestion et mise en avant de **3 fiches TikTok Shop maximum**",
      "Livrable : replay HD et métriques d'engagement",
    ],
    cta: "Réserver la formule Starter",
  },
  {
    tag: "Accélération E-commerce",
    name: "Business",
    icon: "stars",
    featured: true,
    desc: "Une formule complète pour professionnaliser vos directs et accélérer vos ventes.",
    session: {
      price: "55 000 FCFA",
      period: "HT / session",
    },
    monthly: {
      price: "Sur devis",
      period: "Tarif récurrent à confirmer",
    },
    note: "Formule recommandée · Animateur professionnel et régisseur dédié",
    features: [
      "**Studio présentiel et régie cloud déportée**",
      "**1 animateur professionnel + 1 régisseur dédié**",
      "Régie cloud avec **3 caméras 4K**, dont une caméra dédiée aux détails des produits",
      "Gestion du catalogue et des offres flash en direct (**jusqu'à 10 références**)",
      "Habillage graphique et suivi des performances",
      "Production et diffusion HD",
    ],
    cta: "Choisir la formule Business",
  },
  {
    tag: "Réseaux & Grands Comptes",
    name: "Enterprise",
    icon: "hub",
    featured: false,
    desc: "Une solution personnalisée pour les grandes marques et les opérations de production à grande échelle.",
    session: {
      price: "Sur devis",
      period: "",
    },
    monthly: {
      price: "Sur devis",
      period: "",
    },
    note: "Accompagnement dédié et dispositif sur mesure",
    features: [
      "Production présentielle multi-sites sur mesure",
      "Équipe de production dédiée à votre marque",
      "Gestion de catalogues produits à grande échelle",
      "Possibilité de diffusion multi-comptes et d'interventions à distance",
      "Support et accompagnement prioritaires",
      "Configuration technique adaptée aux besoins de votre entreprise",
    ],
    cta: "Contacter l'équipe Enterprise",
  },
];

// Technical specifications
export const specs = [
  {
    icon: "lens",
    title: "Optiques Sony FX3 & FX6 Plein Format",
    text: "Rendu cinématique, autofocus performant et colorimétrie peau calibrée S-Cinetone.",
  },
  {
    icon: "mic",
    title: "Prise de son Shure SM7B & Sennheiser HF",
    text: "Isolation acoustique, traitement anti-réverbération et compression audio en temps réel.",
  },
  {
    icon: "light_mode",
    title: "Éclairage Aputure DMX pilotable à distance",
    text: "Contrôle de l'intensité et de la température de lumière pour une qualité d'image professionnelle.",
  },
];

// Optional add-on services
export const addons = [
  {
    icon: "record_voice_over",
    title: "Animateur B2B supplémentaire",
    text: "Ajout d'un présentateur professionnel pour accompagner l'animateur principal et dynamiser votre direct.",
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
    text: "Diffusion multilingue et accompagnement linguistique pour toucher différents marchés.",
    unit: "Par mois",
    price: "+30 000 FCFA",
  },
  {
    icon: "trending_up",
    title: "Campagne Ads & Coupons",
    text: "Boost publicitaire ciblé et intégration de coupons promotionnels sur TikTok Shop.",
    unit: "Par live",
    price: "+20 000 FCFA",
  },
];

// Package comparison matrix
export const matrix: [string, string, string, string][] = [
  [
    "Durée du direct",
    "25 minutes",
    "Selon créneau réservé",
    "Modulable selon le projet",
  ],
  [
    "Caméras & régie cloud déportée",
    "2 angles HD/4K",
    "3 caméras 4K + caméra dédiée aux détails produits",
    "Configuration sur mesure",
  ],
  [
    "Animateur / Présentateur",
    "1 animateur certifié",
    "1 animateur professionnel",
    "Équipe dédiée",
  ],
  [
    "Régisseur cloud & assistance direct",
    "Supervision cloud mutualisée",
    "1 régisseur dédié",
    "Équipe technique dédiée",
  ],
  [
    "Catalogue TikTok Shop",
    "Jusqu'à 3 fiches produits",
    "Jusqu'à 10 références",
    "Selon les besoins du projet",
  ],
  [
    "Modération chat",
    "Standard",
    "Accompagnement dédié",
    "Dispositif personnalisé",
  ],
  [
    "Habillage graphique & bannières",
    "Templates standardisés",
    "Habillage personnalisé",
    "Création graphique sur mesure",
  ],
  [
    "Rapport post-live",
    "Métriques de base",
    "Rapport détaillé des performances",
    "Reporting personnalisé",
  ],
  [
    "Livrables replay",
    "Replay HD",
    "Replay HD et contenus complémentaires selon le projet",
    "Livrables définis sur mesure",
  ],
  [
    "Support",
    "Support standard",
    "Assistance dédiée pendant le live",
    "Accompagnement prioritaire",
  ],
];

// Studio FAQs
export const studioFaqs = [
  {
    q: "Comment mes produits sont-ils transmis à l'équipe de production ?",
    a: "Que ce soit pour un tournage dans nos locaux à Lomé ou à distance, vous transmettez simplement vos échantillons produits au moins 48 heures avant le direct. En option présentielle, notre équipe peut également déplacer la régie mobile dans votre magasin ou showroom.",
  },
  {
    q: "Comment la régie gère-t-elle le direct à distance ?",
    a: "Nos équipements peuvent être connectés via le protocole SRT sécurisé. Le régisseur supervise les flux vidéo et audio, pilote les changements de caméra et gère les éléments graphiques et promotionnels intégrés au direct.",
  },
  {
    q: "Qui gère la connexion au compte TikTok de ma marque ?",
    a: "Vous ne devez pas communiquer vos identifiants personnels. La diffusion est organisée à partir des accès et des outils officiels mis à disposition par TikTok, selon la configuration de votre compte.",
  },
  {
    q: "Comment est géré le briefing avant la première diffusion ?",
    a: "Nous organisons un briefing avec votre responsable e-commerce, le régisseur assigné et l'animateur afin de valider les arguments de vente, les offres promotionnelles et le déroulement de la session.",
  },
];
