// Projects.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import "./Projects.css"; // Link to your CSS file 

const Projects = () => {
  // Sample project data
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', imgSrc: 'https://placehold.co/200', link: '#', category: 'frontend' },
    { title: 'Project 2', description: 'Description of Project 2', imgSrc: 'https://placehold.co/200', link: '#', category: 'backend' },
    { title: 'Project 3', description: 'Description of Project 3', imgSrc: 'https://placehold.co/200', link: '#', category: 'game' },
    // Add more projects here...
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      
      {/* Category Filter Buttons */}
      <div className="project-categories">
        <button className="category-btn" onClick={() => handleCategoryChange('all')}>All</button>
        <button className="category-btn" onClick={() => handleCategoryChange('frontend')}>Frontend</button>
        <button className="category-btn" onClick={() => handleCategoryChange('backend')}>Backend</button>
        <button className="category-btn" onClick={() => handleCategoryChange('game')}>Game Dev</button>
      </div>
      
      {/* Projects Grid */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
