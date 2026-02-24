import React from 'react';
import Project from '../../components/Project';
import './style.css';

function Portfolio() {
    const projects = [
        {
            title: 'Employee Tracker',
            description:
                'CLI-based employee management app for viewing and updating employees, roles, and departments.',
            imageUrl: '/img/Employee Tracker.png',
            repoUrl: 'https://github.com/CortezT/Employee-Tracker',
            tech: ['Node.js', 'Inquirer', 'MySQL'],
            status: 'Completed',
        },
        {
            title: 'Work Day Scheduler',
            description:
                'A browser-based daily scheduler for saving tasks by time block with persistent local storage.',
            imageUrl: '/img/Work Day Scheduler.png',
            projectUrl: 'https://cortezt.github.io/Work-Schedule/',
            repoUrl: 'https://github.com/CortezT/Work-Schedule',
            tech: ['JavaScript', 'HTML', 'CSS'],
            status: 'Completed',
        },
        {
            title: 'City Weather',
            description:
                'Weather dashboard that fetches forecast data for searched cities and stores recent searches.',
            imageUrl: '/img/City-Weather.png',
            projectUrl: 'https://cortezt.github.io/City-Weather/',
            repoUrl: 'https://github.com/CortezT/City-Weather',
            tech: ['JavaScript', 'REST API', 'HTML/CSS'],
            status: 'Completed',
        },
        {
            title: 'Progressive Web App Text Editor',
            description:
                'A PWA text editor with offline capability and installable behavior using service workers.',
            imageUrl: '/img/TextEditor.png',
            projectUrl: 'https://simple-txt-editor.onrender.com/',
            repoUrl: 'https://github.com/CortezT/Progressive-Web-Applications',
            tech: ['JavaScript', 'PWA', 'Webpack'],
            status: 'Completed',
        },
        {
            title: 'Taking Note',
            description:
                'Note-taking app that lets users create, save, and delete notes through an Express backend.',
            imageUrl: '/img/Note-Taker front page.png',
            projectUrl: 'https://takingnote-14e8da777627.herokuapp.com',
            repoUrl: 'https://github.com/CortezT/Taking-note',
            tech: ['Node.js', 'Express', 'JavaScript'],
            status: 'Completed',
        },
        {
            title: 'JavaScript Calculator',
            description:
                'Responsive calculator UI for basic arithmetic operations with clean button layout and interaction.',
            imageUrl: '/img/JavaScript Calculator.png',
            repoUrl: 'https://github.com/CortezT/Calculator',
            tech: ['JavaScript', 'HTML', 'CSS'],
            status: 'Completed',
        },
    ];

    return (
        <section className="projects-page">
            <div className="projects-page__header">
                <h2>Projects</h2>
                <p>
                    A selection of web development projects showcasing front-end UI work,
                    APIs, full-stack fundamentals, and application logic.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;