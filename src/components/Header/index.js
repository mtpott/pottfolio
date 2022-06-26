import React, { useEffect } from 'react';
import Nav from '../Nav';

function Header(props) {
    
    return (
        <section className='header-section'>
            <a href="/pottfolio" className='header-name'>pottfolio</a>
            <Nav />
        </section>
    );
}

export default Header;