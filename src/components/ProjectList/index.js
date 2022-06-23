import React, { useState } from 'react';

const ProjectList = (proj) => {
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            title: 'Run-Buddy',
            deployLink: 'https://mtpott.github.io/run-buddy/',
            githubLink: 'https://github.com/mtpott/run-buddy'
        },
        {
            title: 'Find-A-Pet',
            deployLink: 'https://scottietee.github.io/Find-A-Pet/',
            githubLink: 'https://github.com/ScottieTee/Find-A-Pet'
        },
        {
            title: 'Coin-Vault',
            deployLink: 'https://the-coin-vault.herokuapp.com/',
            githubLink: 'https://github.com/ApolloSolo/Coin-Vault'
        }
    ])

    const selectedProject = projects.filter(project => project.title);

    const chooseProject = (project, i) => {
        setCurrentProject({...project, index: i});
    }

    return (
        <div>
            <div>
            {selectedProject.map((image, i) => (
                <img className="photo" 
                src={require(`../../assets/project-img/${i}.png`)}
                alt={image.name}
                onClick={() => chooseProject(image, i)}
                key={image.name}
                />
            ))}
            </div>
        </div>
    );
}

export default ProjectList;