import React from 'react';
import ProjectList from '../ProjectList';

function Project(props) {
    const { currentProject } = props;
    return (
        <section>
        <ProjectList currentProject={currentProject} />
        </section>
    )
}

export default Project;