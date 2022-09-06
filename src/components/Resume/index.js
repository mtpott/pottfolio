import React from 'react';

function Resume() {
    return (
        <div>
        <div className="resume-div">
            <div className="resume-prof">
                <ul className="resume-ul">technical proficiencies:</ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL/Sequelize</li>
                    <li>Mongo/MongoDB</li>
                    <li>React</li>
            </div>
            <div className="resume-skills">
                <ul className="resume-ul">additional skills and interests:</ul>
                    <li>Microsoft Office</li>
                    <li>O365</li>
                    <li>Zoom</li>
                    <li>Google Suite</li>
                    <li>Slack</li>
                    <li>Microsoft Teams</li>
                    <li>Scrum</li>
                    <li>Tessitura</li>
                    <li>GiveCampus</li>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className="resume-link">
                <a className='link-resume' href="https://docs.google.com/document/d/1U0B3Q9ChxzNqyUIBGRkVXODKGcdTlPJeIDcQeVrKMhk/export?format=pdf" target="_blank" rel="noreferrer">
                    download resume
                </a>
            </div>
    </div>
    );
}

export default Resume;