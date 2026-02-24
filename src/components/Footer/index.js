import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">© {currentYear} Trystan Cortez</p>

            <div className="social-media-links">
                <a
                    href="https://github.com/CortezT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <i className="fab fa-github" aria-hidden="true"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/trystan-cortez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>

                <a
                    href="mailto:trystan.m.cortez@gmail.com"
                    className="social"
                    aria-label="Email Trystan"
                    title="Email"
                >
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;