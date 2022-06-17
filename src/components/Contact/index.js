import React from 'react';

function Contact() {
    return (
        <div>
            <h2>contact:</h2>
            <h4>leave your contact info below! i look forward to hearing from you.</h4>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">message:</label>
                    <textarea name="message" rows="4" />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Contact;