import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="4" />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Contact;