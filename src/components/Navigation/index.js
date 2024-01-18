import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/" onClick={closeMenu}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" onClick={closeMenu}>
                        Portfolio
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