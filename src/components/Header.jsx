import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../context/ScrollContext';
import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollToSection } = useScroll();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

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

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div id="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>

      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => handleNavClick("hero")} className="logo">JP</Link>
        </div>

        {/* Nav Links */}
        <div className="nav-right">
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li><button onClick={() => handleNavClick("hero")}>Home</button></li>
            <li><button onClick={() => handleNavClick("about")}>About</button></li>
            <li><button onClick={() => handleNavClick("skills")}>Skills</button></li>
            <li><button onClick={() => handleNavClick("projects")}>Projects</button></li>
            <li><button onClick={() => handleNavClick("contact")}>Contact</button></li>
            <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          </ul>

          {/* Theme Toggle */}
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

          {/* Hamburger */}
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

