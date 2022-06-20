import React, { useState } from 'react';
import Nav from '../Nav';

function Header(props) {
    
    return (
        <section className='header-section'>
            <h1 className='header-name'>megan</h1>
            <Nav />
        </section>
    );
}

export default Header;