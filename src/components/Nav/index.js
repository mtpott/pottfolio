import React from 'react';
import Contact from '../Contact';

function Nav(props) {
    const { contactSelected, setContactSelected, aboutSelected, setAboutSelected} = props;
    return (
        <nav>
            <h1>header inside nav </h1>
        <ul>
            <li>
                <a href="#about" onClick={() => setAboutSelected(true)}>about</a>
            </li>
            <li>
                <Contact />
                <span onClick={() => {setContactSelected(false)}}>contact</span>
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