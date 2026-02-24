import React from 'react';
import './style.css';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__header">
                <img src="/img/Face-Photo.JPG" alt="Trystan Cortez" className="about-me__photo" />

                <div className="about-me__intro">
                    <h2>About Me</h2>
                    <h3>Web Developer | Front-End Focus | Texas Army National Guard Sergeant (E-5)</h3>
                    <p>
                        I’m Trystan Cortez, a Web Developer focused on building and improving responsive user
                        interfaces. I enjoy working in real codebases, debugging issues, refining UX, and
                        delivering clean, maintainable updates that make products work better.
                    </p>
                </div>
            </div>

            <div className="about-me__content">
                <div className="about-me__card">
                    <h4>What I Do</h4>
                    <p>
                        My recent work includes shipping production updates in WordPress/PHP and front-end
                        technologies like JavaScript, HTML, and CSS. I also build React-based projects and enjoy
                        creating polished interfaces that work well across mobile and desktop.
                    </p>
                </div>

                <div className="about-me__card">
                    <h4>Strengths</h4>
                    <ul>
                        <li>Responsive UI development and layout refinement</li>
                        <li>Debugging and improving existing codebases</li>
                        <li>Clear communication and team collaboration</li>
                        <li>Ownership, discipline, and consistency under pressure</li>
                    </ul>
                </div>

                <div className="about-me__card">
                    <h4>Background</h4>
                    <p>
                        I bring a strong foundation from my service in the Texas Army National Guard, where I
                        developed leadership, adaptability, and process discipline in fast-paced environments.
                        That experience carries directly into how I approach software development and teamwork.
                    </p>
                </div>

                <div className="about-me__card">
                    <h4>Currently</h4>
                    <p>
                        I’m focused on growing as a front-end/web developer while continuing to strengthen my
                        skills in React, UI/UX implementation, and data-driven problem solving.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;