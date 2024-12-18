// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} className="view-project">View Project</a>
    </div>
  );
};

export default ProjectCard;

