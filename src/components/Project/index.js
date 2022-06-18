import React from 'react';
import ProjectList from '../ProjectList';

function Project(props) {
    const { selectedProject } = props;
    return (
        <section>
        <h1>{selectedProject.name}</h1>
            <a href="/">{selectedProject.deployLink}</a>
            <a href="/">{selectedProject.githubLink}</a>
            <ProjectList category={selectedProject.name} />
        </section>
    )
}

export default Project;