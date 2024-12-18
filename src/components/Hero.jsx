import React from "react";
import "./Hero.css"; // Link to your CSS file 

const Hero = () => {
  return (
    <section className="hero">
      <section id="hero">
        <div className="hero-content">
          {/* Title */}
          <h1 className="hero-title">Jennifer Pichardo</h1>

          {/* Dialogue Box */}
          <div className="dialogue-box">
            <p>Programmer & Designer</p>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              className="hero-button resume-button"
              id="resume-btn"
            >
              Resume
            </a>
            <a href="#projects" className="hero-button work-button" id="work-btn">
              View My Work
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar">
          <img
            src="https://placehold.co/400"
            alt="Pixel Avatar"
            className="avatar-img"
          />
        </div>
      </section>

      {/* Scroll Arrow */}
      <div className="scroll-arrow">
        <a href="#about" className="arrow">&#9660;</a>
      </div>
    </section>
  );
};

export default Hero;
