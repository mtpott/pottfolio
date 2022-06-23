import React, { useState } from 'react';

const ProjectList = () => {
    // const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            title: 'Find-A-Pet',
            deployLink: 'https://scottietee.github.io/Find-A-Pet/',
            githubLink: 'https://github.com/ScottieTee/Find-A-Pet'
        },
        {
            title: 'Coin-Vault',
            deployLink: 'https://the-coin-vault.herokuapp.com/',
            githubLink: 'https://github.com/ApolloSolo/Coin-Vault'
        },
        {
            title: 'project 3',
            deployLink: 'link.com/link',
            githubLink: 'link.com/link'
        },
        {
            title: 'project 4',
            deployLink: 'link.com/link',
            githubLink: 'link.com/link'
        }
    ])

    let selectedProject = projects.filter(project => project.title)

    return (
        <div>
            {selectedProject.map(project => <p>{project.title, project.deployLink, project.githubLink}</p>)}
            {/* {project.map((photo, i) => (
                <img
                    src={require(`../../assets/project-img/${photo}/${i}.jpg`)}
                    alt={photo.i}
                    key={photo.i}
                    />
            ))} */}
        </div>
    );    
}

export default ProjectList;