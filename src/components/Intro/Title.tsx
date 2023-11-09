import { get } from "https";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const TitleDiv=styled.div`
  position:absolute;
  white-space:nowrap;
  font-family:'jejudoldam';
  z-index:1;
`
const TitleUnmask = styled.h1`
  color:transparent;
  font-size:7.9rem;
  -webkit-text-stroke: 1px black;
  @media screen and (max-width:900px){
      font-size:5rem;
    }
  @media screen and (max-width:500px){
      font-size:3rem;
    }
`
const translateBackgroundMask=(move:number)=>keyframes`
  0%,100%{
    transform : translateY(0px);
  }
  50%{
    transform : translateY(${2*move}px);
  }
`
const translateTitleMask=(move:number)=>keyframes`
  0%,100%{
    transform : translateY(0px);
  }
  50%{
    transform : translateY(${2*move}px);
  }
`
interface MoveRange {
  height:number;
  top:number;
}

const TextBackgroundOnMouseMove=styled.div<MoveRange>`
  height:100px;
  z-index:1;
  color:#6f3f06;
  position:absolute;
  top:0;
  overflow:hidden;
  -webkit-text-stroke: 1px black;
  animation: ${props=>translateBackgroundMask(props.height-props.top)} 5s linear infinite;
  @media screen and (max-width:900px){
      height:50px;
    }
`

const TitleMask = styled.h1<MoveRange>`
  font-size:7.9rem;
  animation: ${props=>translateTitleMask(-props.height+props.top)} 5s linear infinite;
  @media screen and (max-width:900px){
      font-size:5rem;
    }
  @media screen and (max-width:500px){
      font-size:3rem;
    }
`

export function Title(){
    const [PosY, setPosY]=useState({
      height:0,
      top:0,
    });
    
    useEffect(()=>{
      const titleElement=document.getElementById('title');
                if (titleElement){
                  const titleDivInfo=titleElement.getBoundingClientRect();
                    setPosY((prev)=>{
                      return {...prev, height:titleDivInfo.height, top:titleDivInfo.top}
                    });
                }
    },[])

    return(
        <TitleDiv id="title">
            <TextBackgroundOnMouseMove height={PosY.height} top={PosY.top} >
                <TitleMask height={PosY.height} top={PosY.top}>Frontend<br/>Portfolio</TitleMask>
                </TextBackgroundOnMouseMove>
                <TitleUnmask>Frontend<br/>Portfolio</TitleUnmask>
        </TitleDiv>

    );
}


