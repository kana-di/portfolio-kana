import PropTypes from 'prop-types';

/* Carte projet : utilisée sur l'accueil et sur la page Projets */
const ProjectCard = ({ project }) => (
  <div
    className="card-dark h-100 d-flex flex-column"
    style={{ padding: '1.5rem' }}
  >
    {/* Capture ou icône */}
    {project.image ? (
      <img
        src={project.image}
        alt={`Aperçu du site ${project.title}`}
        loading="lazy"
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: 10,
          border: '1px solid var(--border)',
          marginBottom: '1rem',
        }}
      />
    ) : (
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
    )}

    {/* Titre + description */}
    <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
      {project.title}
    </h3>
    <p
      style={{
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
        lineHeight: 1.7,
        marginBottom: '0.75rem',
      }}
    >
      {project.description}
    </p>

    {/* Points forts */}
    <ul className="project-highlights">
      {project.highlights.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>

    {/* Tags stack */}
    <div className="d-flex flex-wrap gap-2 mb-4">
      {project.stack.map((tag) => (
        <span key={tag} className="badge-tech">
          {tag}
        </span>
      ))}
    </div>

    {/* Boutons */}
    <div className="d-flex gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent"
          style={{ textAlign: 'center', flex: 1 }}
        >
          Voir le site →
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-accent"
          style={{ textAlign: 'center', flex: 1 }}
        >
          GitHub →
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    emoji: PropTypes.string,
    demo: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
