import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="site-title">
                    Trystan Cortez
                </Link>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;