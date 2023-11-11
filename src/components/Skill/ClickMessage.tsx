import styled, { keyframes } from "styled-components";
import "../../fonts/font.css";

const swell=keyframes`
  0%, 100% {
    transform: translate3d(0, -20px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
`
const MessageDiv=styled.div`
    position: absolute;
    top:20%;
    right: 10%;
    text-align:center;
    animation: ${swell} 1s infinite linear;
    font-family:"SUITE-Regular";
    @media screen and (min-width:1200px){
        right:17%;
    }
`
const Message=styled.div`

`
const Arrow=styled.img`
    transform: rotate(145deg);
    margin-top:10px;
    height:30px;
    @media screen and (max-width:900px){
        transform: rotate(125deg);
    }
`
type ClickMessageProps={
    running:boolean;
}
export function ClickMessage(prop:ClickMessageProps){
    return(
        <MessageDiv>
            <Message>
            {prop.running? "다시 클릭하면 큐브가 돌아가요!":"큐브를 클릭하면 멈출 수 있어요!"}
            </Message>
            <Arrow src={"/images/skillset/arrow.png"}></Arrow>
        </MessageDiv>
    );

}