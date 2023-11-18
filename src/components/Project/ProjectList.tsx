import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectData';

const ProjectListDiv=styled.div`
    width:100%;
    height:100%;
`
type ProjectListProp={
    index:number;
}

function ProjectList(prop:ProjectListProp) {
    return (
        <ProjectListDiv>
            <ProjectCard title={ProjectData[prop.index].title}
                         member={ProjectData[prop.index].member}
                         images={ProjectData[prop.index].images}
                         github={ProjectData[prop.index].github}
                         hosturl={ProjectData[prop.index].hosturl}
                         introduce={ProjectData[prop.index].introduce}
                         implementaion={ProjectData[prop.index].implementation}
                         skillstack={ProjectData[prop.index].skillstack}/>
        </ProjectListDiv>
    );
}

export default ProjectList;