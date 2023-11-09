import { keyframes, styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import '../fonts/font.css';

const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:space-around;
  position: relative;
`
const Description=styled.div`
  font-size:2rem;
  line-height:4rem;
  white-space:nowrap;


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
  width:20%;
  height:60%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  
`

const Info=styled.div`
  width:100%;
  height:100px;
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
  &:hover{
    transform : scale(1.5);
  }
`


export function About(){
    return(
    <Div>
        <Description>
          성취하며 느낀 행복을 오랫동안 기억하고,
          <br/>
          차근차근 꾸준하게 성장 중인
          <br/>
          프론트엔드 개발자 이현지입니다.
        </Description>
        <InfoDiv>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
        </InfoDiv>

        <DownButton location={2}/>
    </Div>
    );
}