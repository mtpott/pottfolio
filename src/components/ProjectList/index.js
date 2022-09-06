import React, { useState } from 'react';

const ProjectList = (proj) => {
    const [project, setCurrentProject] = useState();
    const [showDiv, setShowDiv] = useState(false);
    const [projects] = useState([
        {
            id: '1',
            title: 'Run-Buddy',
            deployLink: 'https://mtpott.github.io/run-buddy/',
            githubLink: 'https://github.com/mtpott/run-buddy'
        },
        {
            id: '2',
            title: 'Find-A-Pet',
            deployLink: 'https://scottietee.github.io/Find-A-Pet/',
            githubLink: 'https://github.com/ScottieTee/Find-A-Pet'
        },
        {
            id: '3',
            title: 'Coin-Vault',
            deployLink: 'https://the-coin-vault.herokuapp.com/',
            githubLink: 'https://github.com/ApolloSolo/Coin-Vault'
        },
        {
            id: '4',
            title: 'Express Notetaker',
            deployLink: 'https://cryptic-crag-74579.herokuapp.com/',
            githubLink: 'https://github.com/mtpott/express-notetaker'
        },
        {
            id: '5',
            title: 'README Generator',
            deployLink: 'https://drive.google.com/file/d/1X9gLzg70zcqMbf0jeZXDTd4R5c5jaTe4/view',
            githubLink: 'https://github.com/mtpott/readme-generator'
        },
        {
            id: '6',
            title: 'SQL Employee Tracker',
            deployLink: 'https://drive.google.com/file/d/11nDN0Pnw8JIlp_4gk7xFv-6-PCJS1exy/view',
            githubLink: 'https://github.com/mtpott/sql-tracker'
        }
    ])

    const selectedProject = projects.filter(project => project.id);

    const chooseProject = (project, i) => {
        setCurrentProject({...project, index: i});
        setShowDiv(true);
        renderDiv(project);
    }


    function renderDiv(project) {
        return (<div className="proj-info">
            <p className="proj-title">{project.title}</p>
            <a className="proj-link" target="_blank" rel="noopener noreferrer" href={project.deployLink} path="/:deployLink">visit the app</a>
            <br></br>
            <a className="proj-link" target="_blank" rel="noopener noreferrer" href={project.githubLink} path="/:githubLink">visit the repository</a>
            </div>)
    }

    return (
        <div>
            <div className="proj-div">
            {selectedProject.map((image, i) => (
                <img className="photo" 
                src={require(`../../assets/project-img/${i}.png`)}
                alt={image.name}
                onClick={() => chooseProject(image, i)}
                key={image.id}
                />
            ))}
            </div>
            {showDiv && renderDiv(project)}
        </div>
    );
}

export default ProjectList;