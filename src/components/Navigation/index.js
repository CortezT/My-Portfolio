import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <button
                className="hamburger"
                onClick={handleToggle}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                type="button"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" onClick={closeMenu}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/projects" onClick={closeMenu}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/resume" onClick={closeMenu}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;