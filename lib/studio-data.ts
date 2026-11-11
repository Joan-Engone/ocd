export const consoleImage =
  "https://lh3.googleusercontent.com/aida/ALJJyrBG7hrBQsQXI-ErQDDcpImP86ZJGF7I2IOq4Vt735KlJFHhU426ZMyUhXCopd8QfJh3t2JpGkyqHhm_0azCq2XD5UjcYrYwwwHSaVJfsMwvJ4E3_Hh5UqQv4byUi5C939wuHHUcnaNvLkrGI8wLSwxLHJ31y7wCdkpEnwO10Fx_DYNX9MC8bRQC7m5pDxqdykPC7j4VKCiBwGVvLHmGBoq75LDNJMCuUE3JyGybyeoq";

// Metrics aligned with Bovann Group B2B positioning
export const studioMetrics = [
  { icon: "cloud_sync", value: "4K HDR", label: "Multi-flux déporté SRT" },
  { icon: "trending_up", value: "+340%", label: "Conversion boutique TikTok" },
  { icon: "speed", value: "< 18ms", label: "Latence cloud SRT sécurisée" },
  { icon: "verified_user", value: "100% Clé en main", label: "Host certifié + Régie cloud incluse" },
];

export const plans = [
  {
    tag: "Découverte Déportée",
    name: "Starter",
    icon: "cloud_upload",
    featured: false,
    desc: "Idéal pour tester vos premiers directs et valider votre catalogue sur TikTok Shop.",
    session: { price: "25 000 FCFA", period: "HT / session" },
    monthly: { price: "20 000 FCFA", period: "HT / live (-20%)" },
    note: "100% en présentiel ou à distance · Sans engagement de volume",
    features: [
      "**1 session de 90 min** animée depuis studio ou vos locaux à Lomé",
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
    session: { price: "55 000 FCFA", period: "HT / session" },
    monthly: { price: "45 000 FCFA", period: "HT / live (-20%)" },
    note: "Formule populaire · Régisseur & Modération dédiés",
    features: [
      "**Studio présentiel & régie Cloud déportée**",
      "**2 Animateurs pro + 1 Régisseur dédié**",
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
    session: { price: "Sur Devis", period: "" },
    monthly: { price: "Sur Devis", period: "" },
    note: "Accompagnement dédié & SLA Broadcast 99.98%",
    features: [
      "Dispositif présentiel multi-sites sur-mesure",
      "Équipe de production dédiée à votre marque",
      "Synchronisation API directe Shopify & TikTok Seller Center",
      "Duplex streaming multi-comptes & invités VIP distants",
      "Support prioritaire & Accompagnement 24/7",
      "Architecture réseau dédiée certifiée ISO 27001",
    ],
    cta: "Contacter l'équipe Enterprise",
  },
];

export const specs = [
  { icon: "lens", title: "Optiques Sony FX3 & FX6 Plein Format", text: "Rendu bokeh cinématique, autofocus yeux infaillible et colorimétrie peau calibrée S-Cinetone." },
  { icon: "mic", title: "Prise de son Shure SM7B & Sennheiser HF", text: "Isolation acoustique de pièce, traitement anti-réverbération et compression radio temps réel." },
  { icon: "light_mode", title: "Éclairage Aputure DMX pilotable à distance", text: "Nos régisseurs contrôlent l'intensité et la température de lumière du créateur depuis le cloud." },
];

export const addons = [
  { 
    icon: "record_voice_over", 
    title: "Animateur B2B Expert", 
    text: "Ajout d'un présentateur professionnel certifié pour incarner votre marque.", 
    unit: "Par session", 
    price: "+15 000 FCFA" 
  },
  { 
    icon: "storefront", 
    title: "Option Présentiel Sur Site", 
    text: "Déplacement de notre régie mobile et de l'équipe technique dans vos locaux.", 
    unit: "Sur devis", 
    price: "Sur-mesure" 
  },
  { 
    icon: "language", 
    title: "Pack Multilingue Global", 
    text: "Diffusion simultanée et traduction en direct pour toucher le marché international.", 
    unit: "Par mois", 
    price: "+30 000 FCFA" 
  },
  { 
    icon: "trending_up", 
    title: "Campagne Ads & Coupons", 
    text: "Boost publicitaire ciblé et intégration de coupons flash sur TikTok Shop.", 
    unit: "Par live", 
    price: "+20 000 FCFA" 
  },
];

export const matrix: [string, string, string, string][] = [
  ["Durée de direct par créneau", "90 minutes", "2 heures / session", "Modulable (jusqu'à 4h)"],
  ["Caméras & régie cloud déportée", "2 axes HD/4K (Face + Plan produit)", "3 caméras 4K + Macro détails", "Jusqu'à 4 flux synchro + Duplex"],
  ["Animateur / Créateur certifié", "1 Host certifié catégorie", "1 Host Senior conversion directe", "Duo de Hosts exclusifs à la marque"],
  ["Régisseur cloud & assistance direct", "Supervision cloud mutualisée", "1 Régisseur dédié 100% au live", "Équipe dédiée (Régisseur + Ingénieur stream)"],
  ["Catalogue TikTok Shop synchronisé", "Jusqu'à 3 fiches produits", "Jusqu'à 10 références", "Illimité / Connexion API directe"],
  ["Modération chat & filtre anti-trolls", "none", "check", "check"],
  ["Habillage graphique & bannières dynamiques", "Templates standardisés", "Charte personnalisée de la marque", "Animations sur-mesure & 3D"],
  ["Rapport télémétrique post-live", "Métriques de base exportées", "Audit poussé panier & rétention", "Dashboard BI temps réel + Data API"],
  ["Livrables replays & Shorts Spark Ads", "Master HD sous 12h", "Master 4K + 3 Shorts montés", "Master 4K + 8 à 15 formats courts montés"],
  ["SLA disponibilité & Support Prioritaire", "Standard Email (48h)", "Canal Slack direct (24h)", "SLA 99.98% broadcast + Astreinte 24/7"],
];

export const faqs = [
  { 
    q: "Comment mes produits sont-ils transmis à l'équipe de production ?", 
    a: "Que ce soit pour un tournage dans nos locaux à Lomé ou à distance, vous transmettez simplement votre échantillon produit au moins 48h avant le direct. En option présentiel, notre équipe déplace directement la régie mobile dans votre magasin ou showroom." 
  },
  { 
    q: "Comment la régie gère-t-elle le direct à distance ?", 
    a: "Tous nos équipements sont connectés via le protocole sécurisé SRT (<18ms de latence). Notre régisseur à distance pilote les bascules de caméras, gère les flux audio, ajuste l'éclairage et pousse les bannières de promotions directement sur le stream final." 
  },
  { 
    q: "Qui gère la connexion au compte TikTok de ma marque ?", 
    a: "Vous ne partagez jamais vos identifiants. Nous utilisons l'intégration officielle TikTok Shop Partner (TAP / TTSP) ou la clé de flux RTMP officielle fournie par votre TikTok Live Studio pour émettre le signal vidéo de manière 100% sécurisée." 
  },
  { 
    q: "Comment est géré le briefing avant la première diffusion ?", 
    a: "Nous organisons une session de cadrage vidéo de 30 minutes avec votre responsable e-commerce, le régisseur assigné et l'animateur pour valider les arguments de vente clés, les offres flash et le déroulé de la session." 
  },
];