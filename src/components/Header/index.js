import React from 'react';
import Nav from '../Nav';

function Header(props) {
    
    return (
        <section className='header-section'>
            <a href="/" className='header-name'>megan</a>
            <Nav />
        </section>
    );
}

export default Header;