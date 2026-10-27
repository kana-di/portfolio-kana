import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  /* Envoi via Netlify Forms : les messages arrivent dans Netlify > Forms (et par courriel) */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      });
      if (!res.ok) throw new Error(res.status);
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError(true);
    }
  };

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
              Contact<span className="accent-dot">.</span>
            </h1>
            <div className="divider" />
            <p className="section-subtitle">
              Disponible dès maintenant pour un stage en développement web. Écrivez-moi, je réponds sous 24 h.
            </p>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-5">
            {/* ── FORMULAIRE ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-lg-7"
            >
              <div className="card-dark p-4 p-md-5">
                <h2 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                  Envoyer un message
                </h2>

                {submitted && (
                  <div
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.3)',
                      color: '#4ade80',
                      borderRadius: 8,
                      padding: '0.75rem 1rem',
                      marginBottom: '1.5rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    ✅ Message reçu ! Je vous répondrai rapidement.
                  </div>
                )}

                {error && (
                  <div
                    style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#f87171',
                      borderRadius: 8,
                      padding: '0.75rem 1rem',
                      marginBottom: '1.5rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    L&apos;envoi n&apos;a pas fonctionné. Écrivez-moi directement à {profile.email}.
                  </div>
                )}

                <form name="contact" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      style={{
                        width: '100%',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        padding: '0.75rem 1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                    >
                      Adresse email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      style={{
                        width: '100%',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        padding: '0.75rem 1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Votre message..."
                      style={{
                        width: '100%',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        padding: '0.75rem 1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                        fontFamily: 'inherit',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <button type="submit" className="btn-accent" style={{ width: '100%' }}>
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── INFOS CONTACT ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-lg-5"
            >
              <h2 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                Informations
              </h2>

              {[
                {
                  emoji: '📧',
                  label: 'Email',
                  value: 'kanadiallo20@gmail.com',
                  href: 'mailto:kanadiallo20@gmail.com',
                },
                {
                  emoji: '🐙',
                  label: 'GitHub',
                  value: 'github.com/kana-di',
                  href: 'https://github.com/kana-di',
                },
                ...(profile.linkedin
                  ? [{
                      emoji: '💼',
                      label: 'LinkedIn',
                      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
                      href: profile.linkedin,
                    }]
                  : []),
                {
                  emoji: '📍',
                  label: 'Localisation',
                  value: 'Montréal, QC 🇨🇦',
                  href: null,
                },
              ].map(({ emoji, label, value, href }) => (
                <div
                  key={label}
                  className="card-dark d-flex align-items-center gap-3 p-3 mb-3"
                >
                  <span style={{ fontSize: '1.25rem' }}>{emoji}</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500 }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <div
                className="card-dark p-4 mt-4"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04))' }}
              >
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0, lineHeight: 1.7 }}>
                  🎓 Disponible dès maintenant pour un stage en développement web (front-end, back-end ou WordPress),
                  à Montréal, en hybride ou à distance. Je réponds généralement sous 24 h.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
