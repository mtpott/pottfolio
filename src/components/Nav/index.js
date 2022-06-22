import React, { useState } from 'react';
import Contact from '../Contact';
import Project from '../Project';
import About from '../About';

function Nav() {
    const [contactSelected, setContactSelected] = useState(false);
    const [aboutSelected, setAboutSelected] = useState();
    const [projectSelected, setProjectSelected] = useState();

    const handleContactClick = event => {
        setContactSelected(true);
        setAboutSelected(false);
        setProjectSelected(false);
    }

    const handleAboutClick = event => {
        setAboutSelected(true);
        setContactSelected(false);
        setProjectSelected(false);
    }

    const handleProjectClick = event => {
        setProjectSelected(true);
        setAboutSelected(false);
        setContactSelected(false);
    }

    return (
    <section>
        <nav className='nav-bar'>
        <ul className="nav-ul">
            <li className="nav-link">
                <a href="#about" onClick={handleAboutClick}>about</a>
            </li>
            <li className="nav-link">
                <a href="#project" onClick={handleContactClick}>projects</a>
            </li>
            <li className="nav-link">
                <a href="#contact" onClick={handleProjectClick}>contact</a>
                    
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

    </section>
    )
}

export default Nav;

// const isAbout = props.isAbout;
//     const isProject = props.isProject;
//     const isContact = props.isContact;
//     const isResume = props.isResume;

//     if (isAbout) {
//         return 'about section';
//     } else if (isProject) {
//         return <Project />;
//     } else if (isContact) {
//         return <Contact />
//     } else {
//         return <Resume />
//     }