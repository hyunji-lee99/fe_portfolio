import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ProjectPageState } from '../../recoil/ProjectState';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectData';

const ProjectListDiv=styled.div`
    width:100%;
    height:100%;
`

function ProjectList() {
    const ProjectPage=useRecoilValue(ProjectPageState)
    return (
        <ProjectListDiv>
            <ProjectCard title={ProjectData[ProjectPage].title}
                         member={ProjectData[ProjectPage].member}
                         images={ProjectData[ProjectPage].images}
                         github={ProjectData[ProjectPage].github}
                         hosturl={ProjectData[ProjectPage].hosturl}
                         introduce={ProjectData[ProjectPage].introduce}
                         implementaion={ProjectData[ProjectPage].implementation}
                         skillstack={ProjectData[ProjectPage].skillstack}/>
        </ProjectListDiv>
    );
}

export default ProjectList;