import React from 'react';
import './style.css';

function AboutMe() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <img src="/img/Face-Photo.JPG" alt="Trystan Cortez" />
            <p>
                I am passionate about coding and exploring the technical intricacies that bring applications and designs to life. My journey into development started with a fascination for how video games operate behind the scenes. This curiosity has driven me to experiment with coding projects, including creating mods for video games. While I’ve explored Python, I’ve discovered a strong preference for JavaScript and its versatility in front-end development. Looking ahead, I aspire to deepen my knowledge in C++ to pursue my long-term goal of contributing to game design and development.
            </p>
            <p>
                In addition to my technical interests, I bring a strong sense of discipline and adaptability gained from my service in the Texas Army National Guard, including an overseas deployment. These experiences have instilled in me a commitment to teamwork, problem-solving, and continuous growth. Outside of work, I am eager to explore the world and immerse myself in new cultures. Visiting Japan during cherry blossom season remains a dream of mine, as I find inspiration in the beauty of nature and the innovation of different traditions.
            </p>
        </div>
    );
}

export default AboutMe;