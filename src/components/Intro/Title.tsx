import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { posYState, titleState } from "../../recoil/IntroState";

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
  startanimation:boolean;
}

const TextBackgroundOnMouseMove=styled.div<TitleProps>`
  height:100px;
  z-index:1;
  color:#6f3f06;
  position:absolute;
  top:0;
  overflow:hidden;
  -webkit-text-stroke: 1px black;
  animation: ${(props)=>props.startanimation? translateBackgroundMask(props.height) :null} 5s linear infinite;
  @media screen and (max-width:900px){
      height:50px;
    }
`

const TitleMask = styled.h1<TitleProps>`
  font-size:7.9rem;
  animation: ${(props)=>props.startanimation? translateTitleMask(-props.height) :null} 5s linear infinite;
  @media screen and (max-width:900px){
      font-size:5rem;
    }
  @media screen and (max-width:500px){
      font-size:3rem;
    }
`

export function Title(){
    const [PosY, setPosY]=useRecoilState(posYState);
    const [onTitle, setOnTitle]=useRecoilState(titleState);
    const {ref, inView}=useInView();
    
    useEffect(()=>{
      if (inView){
        setOnTitle(true)
        const titleElement=document.getElementById('title');
                if (titleElement){
                  const titleDivInfo=titleElement.getBoundingClientRect();
                    setPosY(titleDivInfo.height);
                }
      }
      else{
        setOnTitle(false)
      }
    },[inView, setOnTitle, setPosY])

    return(
        <TitleDiv ref={ref} className={onTitle?"startAnimation":""} id="title">
            <TitleUnmask>Frontend<br/>Portfolio</TitleUnmask>
            <TextBackgroundOnMouseMove height={PosY} startanimation={onTitle}>
                <TitleMask height={PosY} startanimation={onTitle}> Frontend<br/>Portfolio</TitleMask>
            </TextBackgroundOnMouseMove>
        </TitleDiv>

    );
}


