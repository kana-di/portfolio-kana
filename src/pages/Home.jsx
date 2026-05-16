import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/* Données des compétences */
const skills = [
  { label: 'React / JavaScript ES6+', level: 80, emoji: '⚛️' },
  { label: 'HTML5 / CSS3 / Bootstrap', level: 90, emoji: '🎨' },
  { label: 'PHP 8 / Symfony 7', level: 75, emoji: '🐘' },
  { label: 'Node.js / Express', level: 70, emoji: '🟢' },
  { label: 'MySQL / PostgreSQL', level: 72, emoji: '🗄️' },
  { label: 'Git / GitHub / Docker', level: 68, emoji: '🐙' },
];

/* Animation fade-in depuis le bas */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

/* Barre de progression animée */
const SkillBar = ({ label, level, emoji }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
          {emoji} {label}
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  emoji: PropTypes.string.isRequired,
};

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
          <div className="col-lg-8">
            <motion.p
              {...fadeUp(0)}
              style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '1rem' }}
            >
              Disponible pour un stage — Été 2026
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
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}
            >
              Développeur Web Junior
            </motion.h2>

            <motion.p
              {...fadeUp(0.25)}
              style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' }}
            >
              📍 Montréal, QC 🇨🇦
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
          </div>
        </div>
      </div>
    </section>

    {/* ── SKILLS ── */}
    <section style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Compétences<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Technologies maîtrisées au cours de mon DEC et de mes projets personnels.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            {skills.map((skill) => (
              <SkillBar key={skill.label} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section>
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
          <span
            style={{
              display: 'inline-block',
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: 20,
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              marginBottom: '1.25rem',
            }}
          >
            🎓 Disponible pour un stage
          </span>
          <h3 style={{ fontWeight: 700, fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Été 2026 — Montréal, QC
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto 2rem' }}>
           Étudiant en fin de DEC Techniques de l'informatique . 
À la recherche d'un stage en développement web pour mettre en pratique 
mes compétences en React, JavaScript, HTML5, CSS3, Bootstrap 5, PHP, 
Symfony et Node.js."
          </p>
          <Link to="/contact" className="btn-accent">
            Prendre contact
          </Link>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default Home;
