import { useEffect, useRef } from "react";
import { keyframes, styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { DownButton } from "../components/common/DownButton";
import { RenderEducation } from "../components/About/RenderEducation";
import { RenderCareer } from "../components/About/RenderCareer";
import { RenderEtc } from "../components/About/RenderEtc";
import { RenderContact } from "../components/About/RenderContact";
import { RenderPrize } from "../components/About/RenderPrize";
import { Descriptions } from "../components/About/Descriptions";
import '../fonts/font.css';
import { useRecoilState } from "recoil";
import { currentPageState, onSliderState } from "../recoil/AboutState";

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

const InfoDiv=styled.div`
  width:100%;
  height:100%;
  max-width:500px;
  min-width:310px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
`
const InfoSliderWrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
`
const SlideLeft=keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
`

const SliderButtonWrapper=styled.div`
    position:relative;
    display:flex;
    width:40%;
    height:80%;
    @media screen and (max-width:900px){
    width:100%;
    height: 60%;
  }
  &.startAnimation{
    animation: ${SlideLeft} 0.5s linear;
  }
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
  top:50%;
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
  const [currentPage, setCurrentPage]=useRecoilState(currentPageState);
  const [onSlider, setOnSlider]=useRecoilState(onSliderState);
  const SlideRef=useRef<HTMLDivElement>(null);
  const {ref,inView}=useInView()
  useEffect(()=>{
    if(SlideRef.current){
        const slideRange=SlideRef.current.offsetWidth*currentPage;
        SlideRef.current.style.transition = "all 0.5s ease-in-out";
        SlideRef.current.style.transform=`translateX(-${slideRange}px)`
    }
    if (inView){
      setOnSlider(true);
    }
    else{
      setOnSlider(false);
    }

  },[currentPage,inView, setOnSlider])

  const onClickPrevButton=()=>{
      if (currentPage===0){
        setCurrentPage(4);
      }
      else{
        setCurrentPage((cur)=>cur-1);
      } 
  }
  
  const onClickNextButton=()=>{
      if (currentPage===4){
        setCurrentPage(0);
      }
      else{
        setCurrentPage((cur)=>cur+1);
      } 
  }
    return(
    <Div ref={prop.aboutRef}>
        <Descriptions/>
        {/* slider 컴포넌트화 필요 */}
        <SliderButtonWrapper ref={ref} className={onSlider?"startAnimation":""}>
        <Button onClick={onClickPrevButton} style={{left:'-10%'}}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </Button>
        <InfoDiv>
          <InfoSliderWrapper ref={SlideRef}>
            {RenderContact()}
            {RenderEducation()}
            {RenderCareer()}
            {RenderPrize()}
            {RenderEtc()}
          </InfoSliderWrapper>
        </InfoDiv>
        <Button onClick={onClickNextButton} style={{right:'-10%'}}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Button>
        </SliderButtonWrapper>
        <DownButton location={prop.nextRef}/>
    </Div>
    );
}

