import React from 'react';
import Project from '../../components/Project';
import './style.css';

function Portfolio() {
    const projects = [
        {
            title: 'Rain or Shine',
            description:
                'As a person who wants to spend more time in nature, I want to be able to anticipate the weather of nearby parks for the day, hour by hour, so that I can plan out my outdoor activities properly.',
            imageUrl: '/Rain or Shine.png',
            projectUrl: 'https://victoriasweet.github.io/kittykittymeowmeow/',
            repoUrl: 'https://github.com/VictoriaSweet/kittykittymeowmeow',
        },
        {
            title: 'Nibble Network',
            description:
                'Nibble Network is designed to help users organize and save their favorite recipes. The application provides a user-friendly interface for registration, login, and recipe management.',
            imageUrl: '/Nibble Network.png',
            projectUrl:
                'https://sheltered-escarpment-88259-4cabc8282347.herokuapp.com/',
            repoUrl: 'https://github.com/cjenschke/Nibble-Network',
        },
        {
            title: 'City-Weather',
            description: 'Website designed to produce the weather forcast of a given city.',
            imageUrl: '/City-Weather.png',
            projectUrl: 'https://cortezt.github.io/City-Weather/',
            repoUrl: 'https://github.com/CortezT/City-Weather',
        },
        {
            title: 'Progressive-Web-Application',
            description:
                'This application is a simple text editor.',
            imageUrl: '/TextEditor.png',
            projectUrl: 'https://simple-txt-editor.onrender.com/',
            repoUrl: 'https://github.com/CortezT/Progressive-Web-Applications',
        },
    ];

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
