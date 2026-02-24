import React, { useState } from 'react';
import './style.css';

function Contact() {
    const [emailValid, setEmailValid] = useState(true);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const encode = (data) =>
        Object.keys(data)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const emailInput = formData.get('email')?.toString().trim() || '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailInput);

        if (!isValid) {
            setEmailValid(false);
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        setEmailValid(true);
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': 'contact',
                    'bot-field': formData.get('bot-field') || '',
                    name: formData.get('name') || '',
                    email: formData.get('email') || '',
                    message: formData.get('message') || '',
                }),
            });

            form.reset();
            setStatus({
                type: 'success',
                message: 'Thanks — your message was sent successfully. I’ll get back to you soon.',
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong while sending your message. Please try again or email me directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Me</h2>
            <p className="contact-subtext">
                Have a project or opportunity in mind? Send me a message.
            </p>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />

                <div hidden>
                    <label>
                        Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Your First and Last Name</label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={() => {
                            setEmailValid(true);
                            if (status.type === 'error') setStatus({ type: '', message: '' });
                        }}
                    />
                    {!emailValid && <p className="error-message">Invalid email format</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" required />
                </div>

                {status.message && (
                    <p className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
                        {status.message}
                    </p>
                )}

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className="contact-direct">
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
            </div>
        </div>
    );
}

export default Contact;