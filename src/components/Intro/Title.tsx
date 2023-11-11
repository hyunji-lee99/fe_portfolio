import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";

const SlideDownTitle=keyframes`
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(0px);
  }
`
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
    transform : translateY(-100px);
  }
  50%{
    transform : translateY(${move}px);
  }
`
const translateTitleMask=(move:number)=>keyframes`
  0%,100%{
    transform : translateY(100px);
  }
  50%{
    transform : translateY(${move}px);
  }
`
interface TitleProps{
  height:number;
  startAnimation:boolean;
}

const TextBackgroundOnMouseMove=styled.div<TitleProps>`
  height:100px;
  z-index:1;
  color:#6f3f06;
  position:absolute;
  top:0;
  overflow:hidden;
  -webkit-text-stroke: 1px black;
  animation: ${(props)=>props.startAnimation? translateBackgroundMask(props.height) :null} 5s linear infinite;
  @media screen and (max-width:900px){
      height:50px;
    }
`

const TitleMask = styled.h1<TitleProps>`
  font-size:7.9rem;
  animation: ${(props)=>props.startAnimation? translateTitleMask(-props.height) :null} 5s linear infinite;
  @media screen and (max-width:900px){
      font-size:5rem;
    }
  @media screen and (max-width:500px){
      font-size:3rem;
    }
`

export function Title(){
    const [PosY, setPosY]=useState(0);
    const [onTitle, setOnTitle]=useState(true);
    const {ref, inView}=useInView();
    
    useEffect(()=>{
      if (inView){
        setOnTitle(true);
        const titleElement=document.getElementById('title');
                if (titleElement){
                  const titleDivInfo=titleElement.getBoundingClientRect();
                    setPosY(titleDivInfo.height);
                }
      }
      else{
        setOnTitle(false)
      }
    },[inView])

    return(
        <TitleDiv ref={ref} className={onTitle?"startAnimation":""} id="title">
            <TitleUnmask>Frontend<br/>Portfolio</TitleUnmask>
            <TextBackgroundOnMouseMove height={PosY} startAnimation={onTitle}>
                <TitleMask height={PosY} startAnimation={onTitle}> Frontend<br/>Portfolio</TitleMask>
            </TextBackgroundOnMouseMove>
        </TitleDiv>

    );
}


