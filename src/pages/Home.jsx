import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
import ProjectCard from '../components/ProjectCard';

/* Technologies utilisées dans mes projets */
const stack = [
  'React', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap 5', 'PHP 8', 'Symfony 7',
  'WordPress', 'Node.js / Express', 'MySQL', 'PostgreSQL', 'Git / GitHub', 'Docker',
];

/* Chiffres clés */
const stats = [
  { value: '4', label: 'projets complets' },
  { value: '1', label: 'site en ligne' },
  { value: '92', label: 'Lighthouse mobile' },
  { value: '15+', label: 'endpoints d’API' },
];

/* Animation fade-in depuis le bas */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const featured = projects.filter((p) => p.featured);

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* ── HERO ── */}
    <section
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 60% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        padding: '60px 0',
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <motion.p {...fadeUp(0)} className="status-pill">
              <span className="status-dot" /> {profile.disponibilite} — {profile.recherche}
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}
            >
              Kana{' '}
              <span style={{ color: 'var(--accent)' }}>Diallo</span>
            </motion.h1>

            <motion.h2
              {...fadeUp(0.2)}
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem' }}
            >
              Développeur web full-stack junior
            </motion.h2>

            <motion.p
              {...fadeUp(0.25)}
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}
            >
              Formé au DEC en Techniques de l&apos;informatique (Institut Teccart, 2023 – 2026).
              Je conçois des sites et des applications web complets, du design à la mise en ligne :
              React, PHP / Symfony, Node.js et WordPress. Basé à {profile.ville}.
            </motion.p>

            <motion.div
              {...fadeUp(0.35)}
              className="d-flex gap-3 justify-content-center flex-wrap"
            >
              <Link to="/projects" className="btn-accent">
                Voir mes projets
              </Link>
              <Link to="/contact" className="btn-outline-accent">
                Me contacter
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.45)} className="d-flex gap-4 justify-content-center flex-wrap mt-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-link">
                GitHub ↗
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
                  LinkedIn ↗
                </a>
              )}
              <a href={`mailto:${profile.email}`} className="hero-link">
                {profile.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* ── CHIFFRES CLÉS ── */}
    <section style={{ padding: '0 0 60px' }}>
      <div className="container">
        <div className="row g-3">
          {stats.map(({ value, label }, i) => (
            <motion.div key={label} {...inView(i * 0.08)} className="col-6 col-md-3">
              <div className="card-dark text-center p-4 h-100">
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROJETS PHARES ── */}
    <section style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div {...inView()}>
          <h2 className="section-title">
            Projets phares<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Des projets concrets, avec le code source sur GitHub et un site visible en ligne.
          </p>
        </motion.div>

        <div className="row g-4">
          {featured.map((project, i) => (
            <motion.div key={project.id} {...inView(i * 0.1)} className="col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/projects" className="btn-outline-accent">
            Tous les projets →
          </Link>
        </div>
      </div>
    </section>

    {/* ── STACK ── */}
    <section>
      <div className="container">
        <motion.div {...inView()}>
          <h2 className="section-title">
            Technologies<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Les outils que j&apos;utilise dans mes projets.
          </p>
        </motion.div>

        <motion.div {...inView(0.1)} className="d-flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="badge-tech" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-dark text-center p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04))',
          }}
        >
          <span className="status-pill" style={{ marginBottom: '1.25rem' }}>
            <span className="status-dot" /> {profile.disponibilite}
          </span>
          <h3 style={{ fontWeight: 700, fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Vous cherchez un stagiaire en développement web ?
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 2rem' }}>
            Je suis disponible dès maintenant à {profile.ville}, sur place, en hybride ou à distance.
            Je réponds à chaque message sous 24 h.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contact" className="btn-accent">
              Prendre contact
            </Link>
            <a href={`mailto:${profile.email}`} className="btn-outline-accent">
              M&apos;écrire un courriel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default Home;
