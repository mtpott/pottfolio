import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("you hit the submit button! :) ", formState);
    }

    return (
        <div className="contact-div">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-name">
                    <label htmlFor="name">name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div className="contact-email">
                    <label htmlFor="email">email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div className="contact-message">
                    <label htmlFor="message">message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="4" />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Contact;