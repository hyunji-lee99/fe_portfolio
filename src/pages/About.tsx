import { keyframes, styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import '../fonts/font.css';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";


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

const RotateInfo=keyframes`
  0%, 100%{
      transform: rotate(-1deg);
  }
  50%{
      transform: rotate(1deg)
  }

`

const InfoDiv=styled.div`
  width:40%;
  height:80%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  @media screen and (max-width:900px){
    width:100%;
  }
  
`

const Info=styled.div`
  width:100%;
  height:100px;
  margin: 10px 0;
  display:flex;
  align-items:center;
  padding: 0 5%;
  justify-content:space-around;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
  animation: ${RotateInfo} 1s infinite linear;
  &:nth-child(2){
    animation: ${RotateInfo} 1s 1.5s infinite linear;
  }
  &:nth-child(3){
    animation: ${RotateInfo} 1s 3s infinite linear;
  }
  &:nth-child(4){
    animation: ${RotateInfo} 1s 4.5s infinite linear;
  }
  
`
const InfoTitle=styled.span`
  font-size:2rem;
  @media screen and (max-width:900px){
    font-size:1.5rem;
  }
  
`
const InfoContent=styled.span`
  font-size:1rem;

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
export function About(){
    const {ref, inView}=useInView();
    const [onAbout, setOnAbout]=useState(true);
    const InfoData=[
      {
        title:'이메일',
        content:'hyunji0483@naver.com'
      },
      {
        title:'학력',
        content:'경북대학교 컴퓨터학부'
      },
      {
        title:'경력',
        content:'다이브(주) 프리랜서 개발자'
      },
      {
        title:'사이트',
        content:'https://1eehyunji.tistory.com/'
      }
    ]

    const renderInfoData=():JSX.Element[]=>{
      const returnRenderInfoData=InfoData.map(
        (data)=>{
          return (
          <Info className={onAbout?"startAnimation":""}>
            <InfoTitle>{data.title}</InfoTitle>
            <InfoContent>{data.content}</InfoContent>
          </Info>
          );
        }
      );
      return returnRenderInfoData;  
    }

    useEffect(()=>{
      if (inView){
        setOnAbout(true)
      }
      else{
        setOnAbout(false)
      }
    },[inView])
    return(
    <Div>
        <Description ref={ref} className={onAbout?"startAnimation":""}>
          <BoldFont>성취하며 느낀 행복</BoldFont>을 오랫동안 기억하고,
          <br/>
          <BorderBottomGradient><BoldFont>차근차근</BoldFont> 꾸준하게</BorderBottomGradient> 성장 중인
          <br/>
          <BoldFont>프론트엔드</BoldFont> 개발자 <BorderBottomGradient><BoldFont>이현지</BoldFont></BorderBottomGradient>입니다.
        </Description>
        <InfoDiv>
          {renderInfoData()}
        </InfoDiv>

        <DownButton location={2}/>
    </Div>
    );
}

