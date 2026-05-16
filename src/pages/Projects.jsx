import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Librairie Symfony',
    description:
      'Plateforme e-commerce de livres avec authentification OTP, intégration PayPal, calcul des taxes QC et génération de factures PDF.',
    stack: ['PHP 8', 'Symfony 7', 'MySQL', 'Twig', 'Bootstrap 5'],
    tags: ['PHP', 'Symfony'],
    github: 'https://github.com/kana-di/librairie-symfony',
    emoji: '📚',
  },
  {
    id: 2,
    title: 'Urban Kicks',
    description:
      'Boutique e-commerce de sneakers. Architecture MVC maison, authentification sécurisée (bcrypt), gestion du panier et panneau d\'administration.',
    stack: ['PHP natif', 'MySQL', 'Bootstrap 5', 'MVC'],
    tags: ['PHP'],
    github: 'https://github.com/kana-di/urban-kicks',
    emoji: '👟',
  },
  {
    id: 3,
    title: 'API Activités Étudiantes',
    description:
      'API REST complète avec 15+ endpoints, documentation Swagger interactive et déploiement Docker. Gestion des activités, inscriptions et utilisateurs.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Swagger', 'Docker'],
    tags: ['Node.js'],
    github: 'https://github.com/kana-di/ProjetFinal1',
    emoji: '🚀',
  },
];

const filters = ['Tous', 'PHP', 'Node.js'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filtered =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ── EN-TÊTE ── */}
      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="section-title">
              Projets<span className="accent-dot">.</span>
            </h1>
            <div className="divider" />
            <p className="section-subtitle">
              Projets réalisés pendant mon DEC et en dehors des cours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTRES ── */}
      <section style={{ paddingTop: 0, paddingBottom: '2rem' }}>
        <div className="container">
          <div className="d-flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  background: activeFilter === f ? 'var(--accent)' : 'var(--bg-card)',
                  color: activeFilter === f ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${activeFilter === f ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: 8,
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE ── */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row g-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="col-md-6 col-lg-4"
                >
                  <div
                    className="card-dark h-100 d-flex flex-column"
                    style={{ padding: '1.5rem' }}
                  >
                    {/* Icône */}
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 12,
                        background: 'var(--accent-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {project.emoji}
                    </div>

                    {/* Titre + description */}
                    <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.875rem',
                        lineHeight: 1.7,
                        flex: 1,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tags stack */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tag) => (
                        <span key={tag} className="badge-tech">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bouton GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-accent"
                      style={{ textAlign: 'center', width: '100%' }}
                    >
                      GitHub →
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
