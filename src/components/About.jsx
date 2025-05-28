import React from "react";
import "./About.css"; // Link to your CSS file 

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">

                <div className="about-text">
                    <h2>About Me</h2>
                    <p>Hello! I’m Jennifer Pichardo — a passionate web developer and game developer with a love for crafting pixel-perfect websites and immersive games that transport users to new worlds. My goal is to blend creativity and technical skill to bring unique ideas to life through interactive experiences.</p>
                    <p>When I’m not coding, you’ll find me exploring new technologies, diving into retro games, or drawing art to share on social media. Some of my all-time favorite games include Pokémon, Kingdom Hearts, Earthbound, and Ace Attorney — stories and systems that continue to inspire my work.</p>
                    <p>Let’s build something memorable together!</p>

                </div>
                <div className="about-avatar">
                    <img
                        src="/assets/images/profile-pixel.png"
                        alt="Avatar"
                        className="avatar-img"
                    />
                    <div className="stats">
                        <h3>Stats</h3>
                        <ul>
                            <li>Level: 24</li>
                            <li>HP: 100</li>
                            <li>Weapon: Keyboard</li>
                            <li>Skills: Code Alchemy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;