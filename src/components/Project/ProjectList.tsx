import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectData';

const ProjectListDiv=styled.div`
    width:80%;
    height:70%;
`


function ProjectList() {
    return (
        <ProjectListDiv>
            <ProjectCard title={ProjectData[0].title} images={ProjectData[0].images} summary={ProjectData[0].summary}/>
        </ProjectListDiv>
    );
}

export default ProjectList;