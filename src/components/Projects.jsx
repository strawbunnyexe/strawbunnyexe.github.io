import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { motion } from 'framer-motion';

import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading projects:', err);
        setError('Could not load projects.');
        setLoading(false);
      });
  }, []);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Category Filter */}
      <nav className="project-categories" aria-label="Project Categories">
        {['all', 'web', 'game'].map((cat) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            key={cat}
          >
            {cat === 'all' ? 'All' : cat === 'web' ? 'Web Dev' : 'Game Dev'}
          </motion.button>
        ))}
      </nav>

      {/* Loading/Error */}
      {loading && <p>Loading projects...</p>}
      {error && <p className="error">{error}</p>}

      {/* Projects Grid */}
      {!loading && !error && (
        <div className="projects-container">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ height: '100%' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
