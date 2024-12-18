import React from "react";
import "./About.css"; // Link to your CSS file 

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">

                <div className="about-text">
                    <h2>About Me</h2>
                    <p>Hello! I'm Jennifer Pichardo, a passionate front-end developer and game developer. I specialize in creating pixel-perfect websites and immersive games that transport users to another world. My goal is to combine creativity and technical expertise to bring unique ideas to life!</p>
                    <p>When I'm not coding, you can find me exploring new technologies, playing retro games, or experimenting with game development tools.</p>
                </div>
                <div className="about-avatar">
                    <img
                        src="https://placehold.co/400"
                        alt="Avatar"
                        className="avatar-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;