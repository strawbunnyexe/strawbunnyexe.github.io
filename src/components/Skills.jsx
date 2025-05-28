import React, { useEffect } from 'react';
import './Skills.css'; // Import the CSS styles

const Skills = () => {
  useEffect(() => {
    // Handle progress bar animation on scroll
    const progressBars = document.querySelectorAll('progress');

    const animateProgressBars = () => {
      progressBars.forEach((bar) => {
        const max = bar.getAttribute('max');
        const value = bar.getAttribute('value');
        bar.style.width = '0'; // Reset to 0 for animation

        setTimeout(() => {
          bar.style.transition = 'width 1.5s ease-in-out';
          bar.style.width = `${(value / max) * 100}%`;
        }, 200);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBars();
            observer.disconnect(); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const skillsSection = document.querySelector('#skills');
    observer.observe(skillsSection);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <h2>Skills</h2>

      {/* Frontend Skills */}
      <div className="category">
        <h3>Frontend</h3>
        <div className="skills-row">
          <div className="skill">
            <label htmlFor="html">HTML/CSS</label>
            <progress id="html" value="90" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="js">JavaScript</label>
            <progress id="js" value="75" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="js">TypeScript</label>
            <progress id="js" value="75" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="react">React</label>
            <progress id="react" value="70" max="100"></progress>
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="category">
        <h3>Backend</h3>
        <div className="skills-row">
          <div className="skill">
            <label htmlFor="node">Node.js</label>
            <progress id="node" value="60" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="mongodb">MongoDB</label>
            <progress id="mongodb" value="75" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="mongodb">Python</label>
            <progress id="mongodb" value="50" max="100"></progress>
          </div>
        </div>
      </div>

      {/* Game Development Skills */}
      <div className="category">
        <h3>Game Development</h3>
        <div className="skills-row">
          <div className="skill">
            <label htmlFor="unity">Unity</label>
            <progress id="unity" value="85" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="csharp">C#</label>
            <progress id="csharp" value="80" max="100"></progress>
          </div>
          <div className="skill">
            <label htmlFor="gameDesign">C++</label>
            <progress id="gameDesign" value="75" max="100"></progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
