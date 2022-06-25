import React, { useState } from 'react';
import Contact from '../Contact';
import Project from '../Project';
import About from '../About';
import Resume from '../Resume';

function Nav() {
    const [contactSelected, setContactSelected] = useState(false);
    const [aboutSelected, setAboutSelected] = useState();
    const [projectSelected, setProjectSelected] = useState();
    const [resumeSelected, setResumeSelected] = useState();

    const handleContactClick = event => {
        setContactSelected(true);
        setAboutSelected(false);
        setProjectSelected(false);
        setResumeSelected(false);
    }

    const handleAboutClick = event => {
        setAboutSelected(true);
        setContactSelected(false);
        setProjectSelected(false);
        setResumeSelected(false);
    }

    const handleProjectClick = event => {
        setProjectSelected(true);
        setAboutSelected(false);
        setContactSelected(false);
        setResumeSelected(false);
    }

    const handleResumeClick = event => {
        setProjectSelected(false);
        setAboutSelected(false);
        setContactSelected(false);
        setResumeSelected(true);
    }

    return (
    <section>
        <nav className='nav-bar'>
        <ul className="nav-ul">
            <li>
                <a className="nav-link" href="#about" onClick={handleAboutClick}>about</a>
            </li>
            <li>
                <a className="nav-link" href="#project" onClick={handleContactClick}>projects</a>
            </li>
            <li>
                <a className="nav-link" href="#resume" onClick={handleResumeClick}>resume</a>
            </li>
            <li>
                <a className="nav-link" href="#contact" onClick={handleProjectClick}>contact</a>
            </li>
        </ul>
        </nav>

        <section className="about-section">
            {aboutSelected && (<About />)}
        </section>

        <section className="project-section">
            {contactSelected && (<Project />)}
        </section>

        <section className="contact-section">
            {projectSelected && (<Contact />)}
        </section>

        <section className="resume-section">
            {resumeSelected && (<Resume />)}
        </section>

    </section>
    )
}

export default Nav;