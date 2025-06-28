import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faJsSquare, faReact,
  faNodeJs, faPython, faUnity
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';

import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML/CSS', id: 'html', level: 90, icon: faHtml5 },
      { name: 'JavaScript', id: 'js', level: 90, icon: faJsSquare },
      { name: 'TypeScript', id: 'ts', level: 80, icon: faCode },
      { name: 'React', id: 'react', level: 70, icon: faReact },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', id: 'node', level: 60, icon: faNodeJs },
      { name: 'MongoDB', id: 'mongo', level: 50, icon: faDatabase },
      { name: 'Python', id: 'python', level: 50, icon: faPython },
    ],
  },
  {
    category: 'Game Development',
    items: [
      { name: 'Unity', id: 'unity', level: 75, icon: faUnity },
      { name: 'C#', id: 'csharp', level: 80, icon: faCode },
      { name: 'C++', id: 'cpp', level: 60, icon: faCogs },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {skillsData.map(({ category, items }, index) => (
        <motion.div
          className="category"
          key={category}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * index, duration: 0.6 }}
        >
          <h3>{category}</h3>
          <div className="skills-row">
            {items.map(({ name, id, level, icon }) => (
              <motion.div
                className="skill"
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "6px 6px 0 var(--accent-pink)"
                }}
                transition={{
                  type: 'tween',
                  duration: 0.12,
                  stiffness: 500,
                  damping: 10,
                  delay: 0.15
                }}
              >
                <div id={`label-${id}`} className="skill-label">
                  <FontAwesomeIcon icon={icon} className="skill-icon" /> {name}
                </div>

                <div className="progress-container">
                  <motion.div
                    className="skill-bar"
                    style={{ '--progress': `${level}%` }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    role="progressbar"
                    aria-valuenow={level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-labelledby={`label-${id}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;

