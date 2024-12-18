import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch the JSON file containing project data
  useEffect(() => {
    fetch('data/projects.json')
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setProjects(data)) // Set the projects in the state
      .catch((error) => console.error('Error fetching the projects data:', error));
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Filter projects based on the selected category
  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  // Filtered projects based on selected category
  const filteredProjects = selectedCategory === 'all'
  ? projects
  : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects">
      <h2>My Projects</h2>
    
      {/* Category Filter Buttons */}
      <div className="project-categories">
      <button
          className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => filterProjects('all')}
        >
          All
        </button>
        <button
          className={`category-btn ${selectedCategory === 'frontend' ? 'active' : ''}`}
          onClick={() => filterProjects('frontend')}
        >
          Frontend
        </button>
        <button
          className={`category-btn ${selectedCategory === 'backend' ? 'active' : ''}`}
          onClick={() => filterProjects('backend')}
        >
          Backend
        </button>
        <button
          className={`category-btn ${selectedCategory === 'game' ? 'active' : ''}`}
          onClick={() => filterProjects('game')}
        >
          Game Dev
        </button>
      </div>
    
      {/* Projects Grid */}
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

