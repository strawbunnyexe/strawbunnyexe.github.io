// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-buttons">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button">
            View Live
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
