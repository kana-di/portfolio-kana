import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const qualites = [
  { emoji: '🚀', title: 'Je livre', text: 'Des projets menés jusqu’au bout et mis en ligne, pas seulement des exercices.' },
  { emoji: '🧩', title: 'Full-stack', text: 'À l’aise du front-end au back-end, de la base de données jusqu’au déploiement.' },
  { emoji: '📚', title: 'J’apprends vite', text: 'Nouvelles technologies prises en main seul : Symfony, Docker, thèmes bloc WordPress.' },
  { emoji: '🤝', title: 'Esprit d’équipe', text: 'Git, GitHub et code documenté : habitué à travailler sur un code partagé.' },
];

const techCategories = [
  {
    title: 'Front-end',
    emoji: '🎨',
    skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap 5', 'Framer Motion'],
  },
  {
    title: 'Back-end',
    emoji: '⚙️',
    skills: ['PHP 8', 'Symfony 7', 'Node.js', 'Express', 'API REST'],
  },
  {
    title: 'Bases de données',
    emoji: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'CMS',
    emoji: '🧱',
    skills: ['WordPress', 'Thèmes bloc (FSE)', 'Gutenberg', 'SEO'],
  },
  {
    title: 'Outils',
    emoji: '🛠️',
    skills: ['Git / GitHub', 'Docker', 'VS Code', 'Postman', 'Swagger'],
  },
];

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* ── EN-TÊTE ── */}
    <section style={{ paddingBottom: 0 }}>
      <div className="container">
        <motion.div {...fadeUp()}>
          <h1 className="section-title">
            À propos<span className="accent-dot">.</span>
          </h1>
          <div className="divider" />
        </motion.div>
      </div>
    </section>

    {/* ── PROFIL ── */}
    <section style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Avatar */}
          <motion.div {...fadeUp(0.1)} className="col-md-4 text-center">
            <div
              style={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: 800,
                color: '#fff',
                margin: '0 auto',
                boxShadow: '0 0 40px rgba(139,92,246,0.3)',
              }}
            >
              KD
            </div>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              📍 Montréal, QC 🇨🇦
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div {...fadeUp(0.2)} className="col-md-8">
            <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
              Kana Diallo
            </h2>
            <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>
              Développeur web full-stack junior · {profile.disponibilite.toLowerCase()} pour un stage
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Formé au DEC en Techniques de l&apos;informatique à l&apos;Institut Teccart, je construis des
              projets web complets : interfaces en React, back-end en PHP / Symfony et Node.js,
              bases de données MySQL et PostgreSQL, et sites WordPress sur mesure.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mon dernier projet, KanaStudio, est un site immobilier en ligne : thème WordPress codé à partir
              d&apos;une maquette, optimisé (92 sur Lighthouse mobile) et pensé pour que le client le modifie seul.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Je cherche un stage où je pourrai contribuer à de vrais projets au sein d&apos;une équipe,
              apprendre les bonnes pratiques et livrer du code propre.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── CE QUE J'APPORTE ── */}
    <section>
      <div className="container">
        <motion.div {...fadeUp()}>
          <h2 className="section-title">
            Ce que j&apos;apporte<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="row g-4">
          {qualites.map(({ emoji, title, text }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.1)} className="col-md-6 col-lg-3">
              <div className="card-dark p-4 h-100">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{emoji}</div>
                <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FORMATION ── */}
    <section style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div {...fadeUp()}>
          <h2 className="section-title">
            Formation<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="row">
          <div className="col-lg-8">
            <motion.div {...fadeUp(0.1)} className="card-dark p-4 mb-3">
              <div className="d-flex align-items-start gap-3">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                    <h3 style={{ fontWeight: 600, fontSize: '1rem', margin: 0 }}>
                      DEC — Techniques de l&apos;informatique
                    </h3>
                    <span className="badge-tech">2023 – 2026</span>
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    Institut Teccart, Montréal
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Profil : Développement d&apos;applications web et mobiles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* ── COMPÉTENCES ── */}
    <section>
      <div className="container">
        <motion.div {...fadeUp()}>
          <h2 className="section-title">
            Compétences<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="row g-4">
          {techCategories.map(({ title, emoji, skills }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.1)} className="col-md-6 col-lg-4">
              <div className="card-dark p-4 h-100">
                <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>
                  {emoji} {title}
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="badge-tech">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default About;
