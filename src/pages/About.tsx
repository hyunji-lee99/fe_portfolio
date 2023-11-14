import { keyframes, styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import '../fonts/font.css';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { RenderEducation } from "../components/About/RenderEducation";
import { RenderCareer } from "../components/About/RenderCareer";
import { RenderEtc } from "../components/About/RenderEtc";
import { RenderContact } from "../components/About/RenderContact";
import { RenderPrize } from "../components/About/RenderPrize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  padding:100px 10%;
  align-items:center;
  font-family:"SUITE-Regular";
  justify-content:space-around;
  position: relative;
  @media screen and (max-width:900px){
    flex-direction:column;
    justify-content:center;
  }
`

const SlideRightDescription=keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0px);
  }
`

const Description=styled.div`
  font-size:2rem;
  line-height:4rem;
  white-space:nowrap;
  &.startAnimation{
    animation: ${SlideRightDescription} 0.5s linear;
  }
  @media screen and (max-width:900px){
    font-size:1.2rem;
    line-height:3rem;
  }
`

const InfoDiv=styled.div`
  width:40%;
  height:80%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  @media screen and (max-width:900px){
    width:100%;
    height: 60%;
  }
`

const BoldFont=styled.span`
  font-family:"SUITE-Bold";
`

const BorderBottomGradient=styled.span`
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 30%;
  background-image: linear-gradient(90deg, #7FB4E2 0%,#aad4e4 100%);
`

const Button=styled.button`
  font-size:1rem;
  border-radius:50%;
  background-color:#87CEEB;
  color:white;
  border:none;
  width:30px;
  height:30px;
  text-align:center;
  margin: 0 2%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  @media screen and (max-width:768px){
    width:20px;
    height:20px;
    font-size:0.8rem;
  }
`
type AboutProps={
  aboutRef:React.ForwardedRef<HTMLDivElement|null>;
  nextRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function About(prop:AboutProps){
    const {ref, inView}=useInView();
    const [onAbout, setOnAbout]=useState(true);
    const [currentInfo, setCurrentInfo]=useState(1);
    
    useEffect(()=>{
      if (inView){
        setOnAbout(true)
      }
      else{
        setOnAbout(false)
      }
    },[inView])
    
    
  const onClickPrevButton=()=>{
      if (currentInfo===1){
        setCurrentInfo(5);
      }
      else{
        setCurrentInfo((cur)=>cur-1);
      } 
  }
  
  const onClickNextButton=()=>{
      if (currentInfo===5){
        setCurrentInfo(1);
      }
      else{
        setCurrentInfo((cur)=>cur+1);
      } 
  }
    return(
    <Div ref={prop.aboutRef}>
        <Description ref={ref} className={onAbout?"startAnimation":""}>
          <BoldFont>성취하며 느낀 행복</BoldFont>을 오랫동안 기억하고,
          <br/>
          <BorderBottomGradient><BoldFont>차근차근</BoldFont> 꾸준하게</BorderBottomGradient> 성장 중인
          <br/>
          <BoldFont>프론트엔드</BoldFont> 개발자 <BorderBottomGradient><BoldFont>이현지</BoldFont></BorderBottomGradient>입니다.
        </Description>
        <InfoDiv>
          <Button onClick={onClickPrevButton} style={{left:'-11%'}}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Button>
            {currentInfo===1?RenderContact():null}
            {currentInfo===2?RenderEducation():null}
            {currentInfo===3?RenderCareer():null}
            {currentInfo===4?RenderPrize():null}
            {currentInfo===5?RenderEtc():null}
          <Button onClick={onClickNextButton} style={{right:'-11%'}}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Button>
        </InfoDiv>

        <DownButton location={prop.nextRef}/>
    </Div>
    );
}

