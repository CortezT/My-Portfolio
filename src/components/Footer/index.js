import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">© 2024 Trystan Cortez</p>
            <div className="social-media-links">
                <a
                    href="https://github.com/CortezT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/trystan-cortez-18543a268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://mail.google.com/mail/u/1/#inbox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                >
                    <i className="fab fa-google"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;