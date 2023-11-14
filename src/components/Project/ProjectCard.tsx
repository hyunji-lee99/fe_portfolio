import React from 'react';
import styled from 'styled-components';
import ProjectImageSlider from './ProjectImageSlider';
import "../../fonts/font.css";

const CardDiv=styled.div`
    width:100%;
    height:100%;
    display:flex;
    background-color:white;
    border-radius:10px;
    padding: 5%;
    font-family:"Suite-Regular";
`
const CardImage=styled.img`
    width:10%;
`
const CardTitle=styled.h3`

`
const CardIntroduce=styled.p`
    
`
type ProjectCardProp={
    title:string,
    images:string[],
    summary:string
}

function ProjectCard(prop:ProjectCardProp) {
    return (
        <CardDiv>
            <ProjectImageSlider imageList={prop.images}/>
            <CardTitle>{prop.title}</CardTitle>
            <CardIntroduce>{prop.summary}</CardIntroduce>
        </CardDiv>
    );
}

export default ProjectCard;