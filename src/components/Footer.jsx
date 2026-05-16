const Footer = () => (
  <footer>
    <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        © 2026 Kana Diallo — Développeur Web Junior
      </span>

      <div className="d-flex gap-3">
        <a
          href="https://github.com/kana-di"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
        >
          GitHub
        </a>
        <a
          href="mailto:kanadiallo20@gmail.com"
          style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
        >
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
