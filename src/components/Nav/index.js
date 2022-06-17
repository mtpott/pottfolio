import React from 'react';
import Contact from '../Contact';

function Nav() {
    return (
        <nav>
            <h1>header inside nav </h1>
        <ul>
            <li>
                <a href="/">about</a>
            </li>
            <li>
                <a href="/">projects</a>
            </li>
            <li>
                <Contact />
                <span>contact</span>
            </li>
        </ul>

        </nav>
    )
}

export default Nav;