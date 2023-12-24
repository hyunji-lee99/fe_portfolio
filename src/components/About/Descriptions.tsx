import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { keyframes, styled } from 'styled-components';
import { onDescriptionState } from '../../recoil/AboutState';

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
  &.startanimation{
    animation: ${SlideRightDescription} 0.5s linear;
  }
  @media screen and (max-width:900px){
    font-size:1.2rem;
    line-height:3rem;
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

export function Descriptions() {
    const {ref, inView}=useInView();
    const [onDescription, setOnDescription]=useRecoilState(onDescriptionState);
    useEffect(()=>{
        if (inView){
          setOnDescription(true)
        }
        else{
          setOnDescription(false)
        }
      },[inView, setOnDescription])
      
    return (
        <Description ref={ref} className={onDescription?"startanimation":""}>
            <BoldFont>성취하며 느낀 행복</BoldFont>을 오랫동안 기억하고,
            <br/>
            <BorderBottomGradient><BoldFont>차근차근</BoldFont> 꾸준하게</BorderBottomGradient> 성장 중인
            <br/>
            <BoldFont>프론트엔드</BoldFont> 개발자 <BorderBottomGradient><BoldFont>이현지</BoldFont></BorderBottomGradient>입니다.
        </Description>
    );
}
