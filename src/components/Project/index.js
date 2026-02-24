import React from 'react';
import './style.css';

function Project({
    title,
    description,
    imageUrl,
    projectUrl,
    repoUrl,
    tech = [],
    status = 'Completed',
}) {
    return (
        <article className="project-card">
            <img className="project-card__image" src={imageUrl} alt={title} />

            <div className="project-card__body">
                <div className="project-card__top">
                    <h3 className="project-card__title">{title}</h3>
                    <span className="project-card__status">{status}</span>
                </div>

                <p className="project-card__description">{description}</p>

                {tech.length > 0 && (
                    <div className="project-card__tags">
                        {tech.map((item) => (
                            <span key={item} className="project-card__tag">
                                {item}
                            </span>
                        ))}
                    </div>
                )}

                <div className="project-card__links">
                    {projectUrl && (
                        <a
                            className="project-card__link project-card__link--primary"
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                    )}

                    <a
                        className="project-card__link"
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </article>
    );
}

export default Project;