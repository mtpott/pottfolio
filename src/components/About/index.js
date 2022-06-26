import React from 'react';
import photo from '../../assets/me.png';

function About() {
    return (
        <div className="container">
        <div className='about-div'>
            <h3 className='about'>About the developer:</h3>
                <p className='about-pg'>Megan is originally from Durham, North Carolina, and graduated from Davidson College in 2019 with a degree in Art History. After making her way back to Durham by way of Boston, MA, she enrolled at UNC Charlotte's full stack development bootcamp. She has previously worked as a barista at a local coffeeshop, and enjoyed the bustle of a busy day, as there was always something to occupy the mind. Before working as a barista, she served as an intern in the Development department at the Peabody Essex Museum in Salem, MA, and was sad to see the internship cut short due to COVID-19. Throughout her bootcamp experience, she has most enjoyed working with Node, Express, and SQL.</p>

                <p className='about-pg'>Contact Megan here:</p>
                <a href="mailto:mtpott23@gmail.com">mtpott23@gmail.com</a>
                <p>(919)906-8451</p>
            </div>
            <div className="photo">
                <img alt="me" src={photo}></img>
            </div>
    </div>
    )
}

export default About;