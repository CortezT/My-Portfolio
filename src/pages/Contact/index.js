import React from 'react';
import './style.css';

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact me</h2>
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-group">
                    <label htmlFor="name">Your First and Last Name</label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" required></textarea>
                </div>

                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}

export default Contact;