import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/projects', label: 'Projets' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark-custom sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', textDecoration: 'none' }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
            }}
          >
            KD
          </span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontSize: '0.9rem' }}>
            Portfolio
          </span>
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Liens */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="nav-item">
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-2 ${isActive ? 'active-link' : 'inactive-link'}`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--accent-soft)' : 'transparent',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
