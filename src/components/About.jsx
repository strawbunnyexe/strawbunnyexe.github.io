import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  // Auto-calculate age as level
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Text Card */}
        <motion.div
          className="about-text card"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 1, -1, 0],
            boxShadow: "0 0 24px var(--accent-pink, #ff00ff)"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2>About Me</h2>
          <p>
            Hello! I’m <strong>Jennifer Pichardo</strong> — a passionate web developer and game developer with a love for crafting pixel-perfect websites and immersive games that transport users to new worlds.
          </p>
          <p>
            When I’m not coding, you’ll find me sketching characters, tinkering with engines, or replaying favorites like <em>Earthbound</em>, <em>Kingdom Hearts</em>, and <em>Ace Attorney</em>.
          </p>
          <p>Let’s build something memorable together!</p>
        </motion.div>

        {/* Avatar Card */}
        <motion.div
          className="about-avatar card avatar-card"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 1, -1, 0],
            boxShadow: "0 0 24px var(--accent-pink, #ff00ff)"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img
            src="/assets/images/profile-pixel.png"
            alt="Pixel avatar of Jennifer"
            className="avatar-img"
          />
          <div className="stats">
            <h3>Stats</h3>
            <ul>
              <li><strong>Class:</strong> Developer-Witch</li>
              <li><strong>Level:</strong> {calculateAge('2001-03-15')}</li>
              <li><strong>HP:</strong> 100</li>
              <li><strong>Pronouns:</strong> they/she</li>
              <li><strong>Weapon:</strong> Keyboard</li>
              <li><strong>Skill:</strong> Code Alchemy</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
