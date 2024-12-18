import React, { useState, useEffect } from "react";
import "./Header.css"; // Import CSS for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle Menu State
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track Scroll Progress
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

      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">JP</div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
          id="hamburger"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

