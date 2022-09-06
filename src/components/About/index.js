import React from 'react';
import photo from '../../assets/me.png';

function About() {
    return (
        <div className="container">
        <div className='about-div'>
            <h3 className='about'>About the developer:</h3>
                <p className='about-pg'>Megan is an outgoing, communicative individual looking to combine her liberal arts background with her newfound technical experience. She values communication through all facets of her career, and deeply enjoys collaborating and communicating with other people. She understands the necessity of digital expertise to aid in all forms of communication, and she values interactions with customers in order to meet their needs to the best of her ability.</p>
                <p className='about-pg'>Originally from Durham, North Carolina, Megan graduated from Davidson College in 2019 with a degree in Art History. After making her way back to Durham by way of Boston, MA, she enrolled at UNC Charlotte's full stack development bootcamp. She has previously worked as a barista at a local coffeeshop, where enjoyed the bustle of a busy day; there was always something to occupy the mind. Before working as a barista, she served as an intern in the Development department at the Peabody Essex Museum in Salem, MA, and was sad to see the internship cut short due to COVID-19. </p>
                <p className='about-pg'>Throughout the bootcamp, Megan most enjoyed working with Node, Express, and SQL, as well as her fellow students and instructors. She believes collaboration is the key to success, and could not be more grateful for her colleagues and friends made through her bootcamp experience!</p>

                <p className='about-pg'>Contact Megan here:</p>
                <a className='about-pg' href="mailto:mtpott23@gmail.com">mtpott23@gmail.com</a>
                <p className='about-pg'>(919)906-8451</p>
            </div>
            <div className="photo">
                <img alt="me" src={photo}></img>
            </div>
    </div>
    )
}

export default About;