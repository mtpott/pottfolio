import React, { useState } from 'react';
import Contact from '../Contact';
import Project from '../Project';
import About from '../About';

function Nav(props) {
    const [contactSelected, setContactSelected] = useState(false);
    const [aboutSelected, setAboutSelected] = useState();
    const [projectSelected, setProjectSelected] = useState();

    const handleContactClick = event => {
        setContactSelected(true);
        setAboutSelected(false);
        setProjectSelected(false);
        renderNav();
    }

    const handleAboutClick = event => {
        setAboutSelected(true);
        setContactSelected(false);
        setProjectSelected(false);
        renderNav();
    }

    const handleProjectClick = event => {
        setProjectSelected(true);
        setAboutSelected(false);
        setContactSelected(false);
        renderNav();
    }

    const renderNav = () => {
        if(handleAboutClick) {
            return (aboutSelected && <About />);
        } else if (handleContactClick) {
            return (contactSelected && <Contact />);
        } else {
            return (projectSelected && <Project />);
        }
    }

    return (
        <nav className='nav-bar'>
        <ul className="nav-ul">
            <li className="mx-1 nav-link">
                <a href="#about" onClick={handleAboutClick}>about</a>
                    {aboutSelected && (<About />)}
            </li>
            <li className="mx-1 nav-link">
                <a href="#project" onClick={handleContactClick}>projects</a>
                    {contactSelected && (<Project />)}
            </li>
            <li className="mx-1 nav-link">
                <a href="#contact" onClick={handleProjectClick}>contact</a>
                    {projectSelected && (<Contact />)}
            </li>
        </ul>

        </nav>
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