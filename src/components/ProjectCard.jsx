// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, liveLink, githubLink } = project;

  return (
    <div className='project-card'>
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
        />
      )}

      {/* Project Title */}
      <h3>{title}</h3>

      {/* Project Description */}
      <p>{description}</p>

      {/* Buttons */}
      <div className="project-buttons">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            aria-label={`View live version of ${title}`}
          >
            View Live
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            aria-label={`View source code of ${title} on GitHub`}
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
