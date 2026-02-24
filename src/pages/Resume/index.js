import React from 'react';
import './style.css';

function Resume() {
    return (
        <div className="resume">
            <h1>Trystan M. Cortez</h1>

            <section className="contact">
                <p>
                    <strong>Location:</strong> Jarrell, TX
                </p>
                <p>
                    <strong>Phone:</strong> <a href="tel:+19564343719">(956) 434-3719</a>
                </p>
                <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:trystan.m.cortez@gmail.com">trystan.m.cortez@gmail.com</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                        href="https://www.linkedin.com/in/trystan-cortez/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/trystan-cortez
                    </a>
                </p>
                <p>
                    <strong>GitHub:</strong>{' '}
                    <a
                        href="https://github.com/CortezT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/CortezT
                    </a>
                </p>
            </section>

            <section className="summary">
                <h3>Summary</h3>
                <p>
                    Web Developer with experience shipping production updates in WordPress/PHP and
                    front-end (JavaScript, HTML, CSS). Strong in debugging and improving responsive
                    UI/UX within existing codebases—delivering clean, maintainable fixes and iterative
                    feature enhancements. Texas Army National Guard Sergeant (E-5) known for disciplined
                    execution, clear communication, and ownership in fast-paced, team environments.
                </p>
            </section>

            <section className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>Responsive Design</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 / CSS3</li>
                    <li>WordPress</li>
                    <li>PHP</li>
                    <li>Testing &amp; Debugging</li>
                    <li>Version Control &amp; Workflow</li>
                    <li>Chrome DevTools</li>
                </ul>
            </section>

            <section className="experience">
                <h3>Professional Experience</h3>

                <div className="job">
                    <h4>Web Developer</h4>
                    <p><strong>Next90 LLC</strong> – Remote | September 2025 – February 2026</p>
                    <ul>
                        <li>
                            Supported development of the New ACUnit WordPress website, delivering iterative UI
                            and functionality updates using PHP, JavaScript, HTML, and CSS.
                        </li>
                        <li>
                            Implemented a new “Ceiling” selection path in the Split System flow, enforcing
                            business rules (restricted tonnage options; removed invalid combinations) to improve
                            quote accuracy.
                        </li>
                        <li>
                            Updated conditional logic to hide Gas Furnace for Ceiling and auto-select
                            Electric/Heat Pump, reducing friction by skipping unnecessary steps in the user journey.
                        </li>
                        <li>
                            Resolved responsive UI defects and improved component consistency (card sizing,
                            alignment, spacing) to enhance usability across mobile and desktop breakpoints.
                        </li>
                        <li>
                            Fixed a Home V2 header/logo mobile display issue by updating template behavior and
                            scroll logic for reliable visibility and a cleaner UX.
                        </li>
                        <li>
                            Performed debugging and QA in an existing codebase, validating changes across
                            breakpoints and preventing regressions between product flows (Mini Split vs Split System).
                        </li>
                    </ul>
                </div>

                <div className="job">
                    <h4>Personnel Actions Analyst</h4>
                    <p><strong>Texas Military Department</strong> – Austin, TX | April 2021 – January 2025</p>
                    <ul>
                        <li>
                            Streamlined the Personnel Record Management System (PEMS), reducing retrieval time by
                            30% and minimizing data errors.
                        </li>
                        <li>
                            Conducted a full audit and transitioned to a digital filing system, ensuring real-time
                            updates and improved data accuracy.
                        </li>
                        <li>
                            Optimized onboarding/offboarding processes, reducing processing time for personnel by 40%.
                        </li>
                        <li>
                            Coordinated cross-department workflows to eliminate bottlenecks and standardize documentation.
                        </li>
                        <li>
                            Developed a structured training program for incoming HR personnel, improving new-hire
                            productivity by 25% within their first three months.
                        </li>
                        <li>
                            Designed training modules, job aids, and mentorship programs to strengthen HR operational knowledge.
                        </li>
                        <li>
                            Maintained personnel records and statistical data in compliance with regulations.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="projects">
                <h3>Projects</h3>
                <div className="project">
                    <h4>React Portfolio Website</h4>
                    <p><strong>Tech:</strong> React, JavaScript, HTML, CSS</p>
                    <ul>
                        <li>
                            Built a responsive portfolio site with reusable components and clean layout patterns
                            to showcase web projects and skills.
                        </li>
                        <li>
                            Implemented mobile-first styling and iterative UI refinements to ensure consistent
                            presentation across devices.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="education">
                <h3>Education &amp; Training</h3>
                <ul>
                    <li>
                        <strong>Business Intelligence Analytics Program</strong> – TripleTen (Graduation: 2025)
                    </li>
                    <li>
                        <strong>Coding Boot Camp Certificate Program</strong> – University of Texas at Austin
                        (Graduation: 2024)
                    </li>
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