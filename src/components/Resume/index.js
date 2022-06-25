import React from 'react';

function Resume() {
    return (
        <div className="resume-div">
            <div className="resume-prof">
                <ul className="resume-ul">technical proficiencies:</ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL/Sequelize</li>
                    <li>Mongo/MongoDB</li>
                    <li>React</li>
            </div>
            <br></br>
            <div className="resume-link">
                <a href="https://docs.google.com/document/d/1U0B3Q9ChxzNqyUIBGRkVXODKGcdTlPJeIDcQeVrKMhk/export?format=pdf" target="_blank" rel="noreferrer">
                    download resume
                </a>
            </div>
        </div>
    );
}

export default Resume;