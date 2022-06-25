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
            <p>{project.title}</p>
            <p>{project.deployLink}</p>
            <p>{project.githubLink}</p>
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