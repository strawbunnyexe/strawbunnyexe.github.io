import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    rotate: [0, -1.5, 1.5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const arrowVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero-title" variants={fadeUp}>
          Jennifer Pichardo
        </motion.h1>

        <motion.div className="dialogue-box" variants={fadeUp}>
          <p>Web & Game Developer</p>
        </motion.div>

        <motion.div className="hero-buttons" variants={fadeUp}>
          <a
            href="/resume.pdf"
            className="hero-button resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href="#projects" className="hero-button work-button">
            View My Work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-avatar"
        variants={avatarVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        <img
          src="/assets/images/profile.webp"
          alt="Avatar of Jennifer"
          className="avatar-img"
        />
      </motion.div>

      <motion.div
        className="scroll-arrow"
        variants={arrowVariants}
        initial="initial"
        animate="animate"
      >
        <a href="#about" aria-label="Scroll to About Section">
          <span className="arrow">&#9660;</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
