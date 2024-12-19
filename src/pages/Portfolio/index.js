import React from 'react';
import './style.css';

function Portfolio() {
    const projects = [
        {
            title: 'Employee Tracker',
            description:
                'This repo allows users to use a tracker that lists all employee roles, employee names, and departments.',
            imageUrl: '/img/Employee Tracker.png',
            repoUrl: 'https://github.com/CortezT/Employee-Tracker',
        },
        {
            title: 'Work Day Scheduler',
            description: 'A simple calendar app for scheduling your work day.',
            imageUrl: '/img/Work Day Scheduler.png',
            projectUrl: 'https://cortezt.github.io/Work-Schedule/',
            repoUrl: 'https://github.com/CortezT/Work-Schedule',
        },
        {
            title: 'City-Weather',
            description: 'Website designed to produce the weather forecast of a given city.',
            imageUrl: '/img/City-Weather.png',
            projectUrl: 'https://cortezt.github.io/City-Weather/',
            repoUrl: 'https://github.com/CortezT/City-Weather',
        },
        {
            title: 'Progressive-Web-Application',
            description: 'This application is a simple text editor.',
            imageUrl: '/img/TextEditor.png',
            projectUrl: 'https://simple-txt-editor.onrender.com/',
            repoUrl: 'https://github.com/CortezT/Progressive-Web-Applications',
        },
        {
            title: 'Taking Note',
            description: 'This application allows users to store and delete notes.',
            imageUrl: '/img/Note-Taker front page.png',
            projectUrl: 'https://takingnote-14e8da777627.herokuapp.com',
            repoUrl: 'https://github.com/CortezT/Taking-note',
        },
        {
            title: 'JavaScript Calculator',
            description:
                'A simple, responsive JavaScript calculator that performs basic arithmetic operations.',
            imageUrl: '/img/JavaScript Calculator.png',
            repoUrl: 'https://github.com/CortezT/Calculator',
        },
    ];

    const Project = ({ title, description, imageUrl, projectUrl, repoUrl }) => (
        <div className="project">
            <img src={imageUrl} alt={title} />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    {projectUrl && (
                        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    )}
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        repoUrl={project.repoUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
