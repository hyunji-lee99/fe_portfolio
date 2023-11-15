import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { ClickMessage } from "./ClickMessage";
import { SkillDetail } from "./SkillDetail";


const Spin=keyframes`
    from {transform: rotateY(0) rotateX(10deg)}
    to {transform: rotateY(360deg) rotateX(10deg)}
`

const CubeDiv=styled.div`
    width:400px;
    height:400px;
    position:relative;
    margin:0 auto;
    transform-style: preserve-3d;

    &.startAnimation{
        animation : ${Spin} 5s infinite linear;
    }

    &.pauseAnimation{
        animation-play-state:paused;
    }

    @media screen and (max-width:700px){
        width:200px;
        height:200px;
    }

`
const CubeSide=styled.div`
    position: absolute;
    border: solid 1px black;
    display:flex;
    align-items:center;
    background-color:#ffffffe6;

    width:400px;
    height:400px;
    &:nth-of-type(1){
        transform: rotateX(90deg) translateZ(200px); 
    }
    &:nth-of-type(2){
        transform: translateZ(200px); 
    }
    &:nth-of-type(3){
        transform: rotateY(90deg) translateZ(200px); 
    }
    &:nth-of-type(4){
        transform: rotateY(180deg) translateZ(200px); 
    }
    &:nth-of-type(5){
        transform: rotateY(-90deg) translateZ(200px); 
    }
    &:nth-of-type(6){
        transform: rotateX(-90deg) translateZ(200px); 
    }

    @media screen and (max-width:700px){
        width:200px;
        height:200px;
        &:nth-of-type(1){
            transform: rotateX(90deg) translateZ(100px); 
        }
        &:nth-of-type(2){
            transform: translateZ(100px); 
        }
        &:nth-of-type(3){
            transform: rotateY(90deg) translateZ(100px); 
        }
        &:nth-of-type(4){
            transform: rotateY(180deg) translateZ(100px); 
        }
        &:nth-of-type(5){
            transform: rotateY(-90deg) translateZ(100px); 
        }
        &:nth-of-type(6){
            transform: rotateX(-90deg) translateZ(100px); 
        }
    }
`


export function RotateSkillCube(){
    const {ref, inView}=useInView();
    const [onCubeClick, setOnCubeClick]=useState(false);
    const [onCube, setOnCube]=useState(true);
    
    useEffect(()=>{
        if (inView){
            setOnCube(true);
            setOnCubeClick(false);
        }
        else{
            setOnCube(false);
        }
    },[inView])

    return (
    <div style={{position:'relative'}}>
    <ClickMessage running={onCubeClick}/>
    <CubeDiv ref={ref} className={(onCube? "startAnimation ":"")+(onCubeClick? "pauseAnimation":"")} 
    onClick={()=>setOnCubeClick(!onCubeClick)}>
        <CubeSide></CubeSide>
        <CubeSide>
            <SkillDetail subject={"Frontend"}/>
        </CubeSide>
        <CubeSide>
            <SkillDetail subject={"Backend"}/>
        </CubeSide>
        <CubeSide>
            <SkillDetail subject={"Certificate"}/>
        </CubeSide>
        <CubeSide>
            <SkillDetail subject={"etc"}/>
        </CubeSide>
        <CubeSide></CubeSide>
    </CubeDiv>
    </div>
    );
}