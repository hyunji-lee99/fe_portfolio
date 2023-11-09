import { useEffect, useState } from "react";
import styled from "styled-components";

const TitleDiv=styled.div`
  position:absolute;
  white-space:nowrap;
  font-family:'jejudoldam';
  z-index:2;
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

const TextBackgroundOnMouseMove=styled.div`
  height:100px;
  z-index:1;
  color:#6f3f06;
  position:absolute;
  top:0;
  overflow:hidden;
  -webkit-text-stroke: 1px black;
  @media screen and (max-width:900px){
      height:50px;
    }
`
const TitleMask = styled.h1`
  font-size:7.9rem;
  @media screen and (max-width:900px){
      font-size:5rem;
    }
  @media screen and (max-width:500px){
      font-size:3rem;
    }
`

export function Title(){
    const [PosY, setPosY]=useState(0);
    
    useEffect(()=>{
        const getOffset=(e:any)=>{
            const titleElement=document.getElementById('title');
                if (titleElement){
                    setPosY(e.clientY-titleElement.getBoundingClientRect().top);
                }
        }
        const onMouseMove=()=>{
            window.addEventListener('mousemove',getOffset)
        }
        onMouseMove();
        return()=>{
            window.removeEventListener('mousemove',getOffset)
        };
    },[])

    return(
        <TitleDiv id="title">
            <TextBackgroundOnMouseMove style={{transform:`translateY(${PosY}px)`}}>
                <TitleMask style={{transform:`translateY(${-PosY}px)`}}>Frontend<br/>Portfolio</TitleMask>
                </TextBackgroundOnMouseMove>
                <TitleUnmask>Frontend<br/>Portfolio</TitleUnmask>
        </TitleDiv>

    );
}


