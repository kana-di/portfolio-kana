import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const techCategories = [
  {
    title: 'Front-end',
    emoji: '🎨',
    skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap 5'],
  },
  {
    title: 'Back-end',
    emoji: '⚙️',
    skills: ['PHP 8', 'Symfony 7', 'Node.js', 'Express'],
  },
  {
    title: 'Bases de données',
    emoji: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
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
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Étudiant au DEC en Techniques de l’informatique,
               je suis actuellement à la recherche d’un stage en développement web afin de mettre en pratique et approfondir 
               mes compétences en React, JavaScript, HTML5, CSS3, Bootstrap 5, PHP, Symfony et Node.js. Motivé et passionné par le développement, je souhaite contribuer à des projets concrets tout en continuant à développer mon expertise technique.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Mes projets couvrent l&apos;e-commerce, les API REST et les applications web complètes.
              J&apos;aime construire des interfaces propres, performantes et accessibles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── FORMATION ── */}
    <section>
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
    <section style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div {...fadeUp()}>
          <h2 className="section-title">
            Compétences<span className="accent-dot">.</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="row g-4">
          {techCategories.map(({ title, emoji, skills }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.1)} className="col-md-6">
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
