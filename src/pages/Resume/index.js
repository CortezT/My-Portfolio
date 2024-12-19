import React from 'react';
import './style.css';

function Resume() {
    return (
        <div className="resume">
            <h1>Trystan Cortez</h1>
            <h3>Full Stack Web Developer | U.S. Army National Guard</h3>

            <section className="contact">
                <p>
                    <strong>Email:</strong> <a href="mailto:trystan.m.cortez@gmail.com">trystan.m.cortez@gmail.com</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/trystan-cortez/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/trystan-cortez/</a>
                </p>
                <p>
                    <strong>GitHub:</strong> <a href="https://github.com/CortezT" target="_blank" rel="noopener noreferrer">https://github.com/CortezT</a>
                </p>
            </section>

            <section className="education">
                <h3>Education</h3>
                <ul>
                    <li><strong>University of Texas</strong> | Full Stack Web Developer Bootcamp | 2023–2024</li>
                    <li><strong>Advanced Individual Training (AIT)</strong> | 14G - Army Air Defense Battle Management System Operator | 2019–2020</li>
                    <li><strong>New Waverly High School</strong> | High School Diploma | 2019</li>
                </ul>
            </section>

            <section className="experience">
                <h3>Professional Experience</h3>
                <h4>Texas Army National Guard | E-5 Sergeant</h4>
                <ul>
                    <li>Deployed overseas for 10 months as part of a tactical operations unit.</li>
                    <li>Served as an HR Representative during a year-and-a-half deployment to the Texas border, managing personnel records for thousands of soldiers.</li>
                    <li>Adapted quickly to various roles, demonstrating flexibility and leadership in diverse environments.</li>
                </ul>
            </section>

            <section className="skills">
                <h3>Core Competencies</h3>
                <ul>
                    <li>Adaptability in dynamic environments and problem-solving in high-pressure situations.</li>
                    <li>Effective communication and team-building skills honed through military service and collaborative projects.</li>
                    <li>Quick learner, capable of mastering new tools and technologies in a fast-paced environment.</li>
                    <li>Proficient in Full Stack Web Development: React, JavaScript, HTML, CSS, Node.js, Express, SQL, MongoDB.</li>
                </ul>
            </section>

            <section className="certifications">
                <h3>Certifications</h3>
                <ul>
                    <li>Full Stack Web Developer | University of Texas Bootcamp</li>
                    <li>CompTIA Security+ (pending)</li>
                    <li>Certified Scrum Master (CSM) (pending)</li>
                </ul>
            </section>

            <a
                href="/img/Trystan_Cortez_Resume.pdf"
                download
                className="resume-download"
            >
                Download Full Resume
            </a>
        </div>
    );
}

export default Resume;