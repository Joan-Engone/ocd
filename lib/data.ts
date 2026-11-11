const IMG = "https://lh3.googleusercontent.com/aida-public/";

export const images = {
  hero: "/images/hero-studio.jpg",
  sim: IMG + "AB6AXuCTsesUpYb76ylSLpclXe7qDNxyGl9QGjLahrjrEjvSD5ialS79GtP4ivpCa7oKNDDLtnVr74UAEKhxNwwqursKP0aVGftB6qIIBA_vZS4TGCxK0nEVIAaQiSmSM1xQv6CNK1OexmNuG2G0o66iOS_RtcmG0VcZSAvYkt9I5y4ujJ32qGV_h_2elQBcYVevX0jKHTI9lFLEkou_nZXwnSIsSOWKrBswK0droPNhvKgg",
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Studio & Formules ", href: "/studio-formules" },
  { label: "Comment ca marche?", href: "/comment-ca-marche" },
  { label: "A propos", href: "/a-propos" },
];

export const metrics = [
  { tag: "Logistique", icon: "flight_takeoff", iconClass: "text-primary-container", value: "100%", title: "À distance", text: "Zéro transport, zéro déplacement d'équipe" },
  { tag: "Performance", icon: "trending_up", iconClass: "text-secondary", value: "x3.8", title: "Taux de conversion", text: "Comparé aux diffusions mobiles brutes" },
  { tag: "Agilité", icon: "bolt", iconClass: "text-primary-container", value: "< 48h", title: "Mise en antenne", text: "De l'envoi de produit au premier LIVE" },
  { tag: "Fiabilité Flux", icon: "verified", iconClass: "text-secondary-container", value: "99.9%", title: "Stabilité Cloud", text: "Pipeline redondé multi-serveurs AWS/GCP" },
];

export const steps = [
  { n: "01", icon: "group", title: "Sélection de l'Animateur", text: "Choisissez parmi notre répertoire d'animateurs formés au Live Shopping TikTok, calibrés selon votre niche : Beauté, Tech, Fashion, Food ou Maison.", footIcon: "check_circle", foot: "Hosts testés & certifiés" },
  { n: "02", icon: "local_shipping", title: "Expédition des Échantillons", text: "Vos produits sont livrés directement à l'espace de diffusion dédié de l'animateur. Notre équipe prépare les fiches argumentaires et briefs de démonstration.", footIcon: "inventory_2", foot: "Réception & test caméra 24h" },
  { n: "03", icon: "tune", title: "Régie Cloud & Habillage", text: "À distance, nos ingénieurs prennent la main sur le flux vidéo : titrage dynamique, déclenchement des épingles produits, alertes de ventes et modération anti-spam.", footIcon: "cloud_sync", foot: "Contrôle à distance sécurisé" },
  { n: "04", icon: "point_of_sale", title: "Diffusion & Chiffre d'Affaires", text: "Le stream est injecté en direct sur votre compte TikTok officiel. Vous surveillez en temps réel le GMV, les conversions et le panier moyen depuis votre espace client.", footIcon: "analytics", foot: "Données & replay exportables" },
];

export const oldWay = [
  ["Coûts fixes colossaux :", "Location de plateau à la journée (1 500€ à 3 500€ / jour hors matériel)."],
  ["Frictions logistiques :", "Déplacement obligatoire des animateurs, équipes techniques et stocks à Paris."],
  ["Délai de setup lent :", "3 à 5 semaines de coordination, planning studio rigide et créneaux figés."],
  ["Scaling impossible :", "Difficile d'animer 3 lives par semaine sans exploser le budget de production."],
];

export const newWay = [
  ["Coût divisé par 3 :", "Aucune charge immobilière, tarification claire par session ou abonnement mensuel."],
  ["Zéro déplacement :", "L'animateur diffuse depuis un setup homologué chez lui ; notre régisseur pilote tout à distance."],
  ["Déploiement sous 48h :", "Conduite d'antenne dématérialisée, validation des prix en ligne et tests instantanés."],
  ["Multi-diffusion scalable :", "Activez plusieurs animateurs simultanés sans congestion technique physique."],
];

export const plans = [
  { tag: "Test de Marché", name: "Pack Remote Starter", desc: "Idéal pour valider la traction de votre catalogue sur TikTok Shop sans engagement.", price: "890€", unit: "/ session de 2h", sub: "Tout inclus • Zéro frais cachés", cta: "Réserver un Starter LIVE", featured: false,
    features: ["1 Animateur certifié remote (2 heures en direct)", "Régisseur cloud dédié à distance", "Habillage de base & épinglage 5 fiches produits", "Modération basique des commentaires", "Bilan post-live & enregistrement HD exportable"] },
  { tag: "Programme Récurrent", name: "Pack Remote Growth", desc: "Pour les marques e-commerce prêtes à faire du Live Shopping un canal de vente pérenne.", price: "2 990€", unit: "/ mois (4 sessions)", sub: "Soit 747€ par session LIVE", cta: "Démarrer le Pack Growth", featured: true,
    features: ["4 Sessions complètes (2h par session par semaine)", "Choix parmi notre Top 10 Animateurs Premium", "Habillage sur-mesure aux couleurs de votre marque", "Catalogue jusqu'à 20 SKUs synchronisés", "Régie broadcast complète + Modération IA & humaine", "Rapports analytiques détaillés (panier, vues, taux de rebond)"] },
  { tag: "Multi-Sessions & Retail", name: "Enterprise Scale", desc: "Diffusion quotidienne intensive, gestion multi-pays ou grand réseau de distribution.", price: "Sur-mesure", unit: "", sub: "SLA garanti 24/7 & Producteur Dédié", cta: "Contacter l'Équipe Enterprise", featured: false,
    features: ["Sessions illimitées / Programmes quotidiens", "Pool d'animateurs exclusifs formés à votre marque", "Intégration API TikTok Shop directe & ERP stock", "Ingénieurs streaming dédiés & passerelle backup 4G/5G", "Support opérationnel WhatsApp & Slack d'urgence"] },
];

export const hosts = [
  { name: "Clara V.", specialty: "Skincare & Beauté D2C", badge: "Kit 4K Sony Homologué", score: "4.9/5", bio: "Plus de 180h de live direct cumulées. Capacité à vulgariser les formules cosmétiques et déclencher les ventes d'urgence.", place: "Lyon, FR (Distant)", avail: "Disponible 48h", alt: "Portrait de Clara V., animatrice live shopping", src: IMG + "AB6AXuA2eHbt119MgedqsCEOVQEFbasZpFVYv_5DVSNu00jd8aP2eVxVxbSziJ0_ZJVHfXY9ReIeBl6ngzRKY6rDkBYLwwAjh1JP8CpbvRssQ3ppc86ZMrLruCDbj8nG8oGTWc5CGSfmNxseYfirLHtM_EFohPSH-3RgZhCyoL4-O_jiZpft3YBf6pV2hngnwwpI5QHpKmicIcMwSDlac1N1bCddHgFiGxNB9epLKI6XVLNO" },
  { name: "Thomas D.", specialty: "High-Tech & Gaming Accessories", badge: "Setup Multi-Cam Micro-Détails", score: "4.8/5", bio: "Démonstrations de fonctionnalités en gros plan, tests en direct et réponses instantanées aux questions techniques complexes.", place: "Bordeaux, FR (Distant)", avail: "Disponible 48h", alt: "Portrait de Thomas D., créateur de contenu tech", src: IMG + "AB6AXuBDgYNr6itq047I3PsK4lFIlzyHrzUijsJjxhqLw6RbeoYZw1v-YzIxb9xLreKdZhFdIOFVtdVQx1tF24q2NFrJVVA-vUGu8AdkeqLVN4jny4yRGVHOZSbz9qE7HH7Xc4Wqb3X2d7hZnc5tXXATl7rrggB-CXyLT4It7cAipBYemvGgkGF5Sy9OyV18dhbR4owgHk9dCxAMOCH1x6WMPS8eyNGMpda1XbkPCafCS5LJ" },
  { name: "Léa M.", specialty: "Prêt-à-porter, Bijoux & Mode", badge: "Cabine Espace & Ringlight Pro", score: "5.0/5", bio: "Excellente énergie vestimentaire, guides de tailles en temps réel et conseils personnalisés pour les spectatrices du flux live.", place: "Bruxelles, BE (Distant)", avail: "Disponible 72h", alt: "Portrait de Léa M., styliste et animatrice mode", src: IMG + "AB6AXuAUkj7hiwt874A0yPy7eZD0FVWnGx6qj9bImq1iGawxR7XjYYl6uEF2WO8Y0PnQwMAg23cMzmDgvDYMMhs7jYA1IccRs4n0A2Q37_fpyJlCAZUuEX72hc6bzNCYWRV5bJmBNybVT-lBRrTNbFGp5RaXBAJDB6NpDvMVU5O8QNvaBBYJQ6ysC0J0j1537DjyS2Z_Bz8m9y2fLvXlqGzczJr2eVy9_Y7S5sw85XnPZ8jd" },
];

export const footerCols = [
  { title: "Solutions Remote", links: ["Régie Déportée Multi-flux", "Kits Caméra & Lumière Plug & Play", "Modération & Enchères TikTok", "Pipeline Shopping API Direct"] },
  { title: "Talents & Méthode", links: ["Catalogue Hosts Certifiés", "Architecture Technique", "Études de Cas & ROI", "Processus d'Onboarding 48h"] },
  { title: "Gouvernance & SLA", links: ["Console Producteur Dédiée", "Supervision 24/7 N2 & N3", "Mentions Légales & RGPD", "Sécurité & Compliance Flux"] },
];