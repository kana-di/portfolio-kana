import kanastudio from '../assets/kanastudio.webp';

/* Projets affichés sur l'accueil (featured) et sur la page Projets */
export const projects = [
  {
    id: 4,
    title: 'KanaStudio — Immobilier',
    description:
      'Site vitrine d’une agence immobilière, en ligne. Thème WordPress bloc (FSE) conçu de A à Z à partir d’une maquette, 100 % éditable par le client dans Gutenberg.',
    highlights: [
      'Lighthouse : 92 en performance mobile, 100 en SEO',
      'Images WebP (−52 % de poids) et préchargement',
      'SEO : Open Graph, JSON-LD, Google Search Console',
    ],
    stack: ['WordPress', 'Thème bloc', 'PHP', 'JavaScript', 'CSS'],
    tags: ['WordPress', 'PHP'],
    demo: 'https://kanastudio.freedev.app',
    image: kanastudio,
    emoji: '🏠',
    featured: true,
  },
  {
    id: 1,
    title: 'Librairie Symfony',
    description:
      'Plateforme e-commerce de livres : catalogue, panier, paiement et espace client.',
    highlights: [
      'Authentification par code OTP',
      'Paiement PayPal et calcul des taxes TPS/TVQ',
      'Factures PDF générées automatiquement',
    ],
    stack: ['PHP 8', 'Symfony 7', 'MySQL', 'Twig', 'Bootstrap 5'],
    tags: ['PHP', 'Symfony'],
    github: 'https://github.com/kana-di/librairie-symfony',
    emoji: '📚',
    featured: true,
  },
  {
    id: 2,
    title: 'Urban Kicks',
    description:
      'Boutique e-commerce de sneakers codée sans framework, de la base de données à l’interface.',
    highlights: [
      'Architecture MVC écrite à la main',
      'Mots de passe chiffrés (bcrypt), panier, PayPal sandbox',
      'Panneau d’administration des produits',
    ],
    stack: ['PHP natif', 'MySQL', 'Bootstrap 5', 'MVC'],
    tags: ['PHP'],
    github: 'https://github.com/kana-di/urban-kicks',
    emoji: '👟',
    featured: true,
  },
  {
    id: 3,
    title: 'API Activités Étudiantes',
    description:
      'API REST de gestion des activités, des inscriptions et des utilisateurs d’un établissement.',
    highlights: [
      '15+ endpoints REST documentés avec Swagger',
      'Base de données PostgreSQL',
      'Déploiement conteneurisé avec Docker',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Swagger', 'Docker'],
    tags: ['Node.js'],
    github: 'https://github.com/kana-di/Gestion-activites-etudiantes',
    emoji: '🚀',
  },
];
