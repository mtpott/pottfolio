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
            deployLink: '',
            githubLink: ''
        },
        {
            title: 'project 3',
            deployLink: '',
            githubLink: ''
        },
        {
            title: 'project 4',
            deployLink: '',
            githubLink: ''
        }
    ])

    const project = projects.filter((photo) => photo.category === photo);

    return (
        <div>
            {project.map((photo, i) => (
                <img
                    src={require(`../../assets/project-img/${photo}/${i}.jpg`)}
                    alt={photo.i}
                    key={photo.i}
                    />
            ))}
        </div>
    );    
}

export default ProjectList;