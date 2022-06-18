import React, { useState } from 'react';
import Nav from '../Nav';
import Contact from '../Contact';
import About from '../About';

function Header(props) {
    const [navSections] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "resume" },
        { name: "contact" }
      ]);
    
      const [currentSection, setCurrentSection] = useState(navSections[0]);
      const [contactSection, setContactSection] = useState(false);
    
    return (
        <section>
            <h1>header!</h1>
            <h2> inside the header are the titles: about me, portfolio, contact, and resume. corresponding title is highlighted when that component is clicked on</h2>
            <Nav
                navSections={navSections}
                setCurrentSection={setCurrentSection}
                contactSection={contactSection}
                setContactSection={setContactSection}>
            </Nav>
            <div>
                {!contactSection ? (
                   <> <About></About> </>
                ) : (
                    <Contact></Contact>
                )}
            </div>
        </section>
    );
}

export default Header;