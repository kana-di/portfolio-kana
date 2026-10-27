import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const filters = ['Tous', 'WordPress', 'PHP', 'Node.js'];

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
              Un site en ligne et trois applications complètes, réalisés pendant mon DEC et en projets personnels. Le code de chacun est disponible sur GitHub.
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
                  <ProjectCard project={project} />
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
