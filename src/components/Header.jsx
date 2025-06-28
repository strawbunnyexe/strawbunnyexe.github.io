import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle mobile nav menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Scroll Indicator */}
      <div id="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>

      <nav className="navbar">
        {/* Left Side - Logo */}
        <div className="logo">JP</div>

        {/* Right Side - Links and Theme Toggle */}
        <div className="nav-right">
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          </ul>

          {/* Theme Toggle Button */}
          <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="theme-icon"
              >
                <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} fixedWidth />
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

    </header>
  );
};

export default Header;
