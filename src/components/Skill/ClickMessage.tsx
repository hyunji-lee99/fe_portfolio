import styled, { keyframes } from "styled-components";
import "../../fonts/font.css";

const swell=keyframes`
  0%, 100% {
    transform: translate3d(0, 0px, 0);
  }
  50% {
    transform: translate3d(0, -15px, 0);
  }
`
const MessageDiv=styled.div`
    position: absolute;
    top:-22%;
    right:-50%;
    text-align:center;
    font-family:"SUITE-Regular";
    @media screen and (max-width:750px){
        top:-50%;
        right:-5%;
    }
`
const Message=styled.span`
    animation: ${swell} 0.7s infinite linear;
    display:inline-block;

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
            <div>
            {prop.running? 
            <>다시 <Message>클릭</Message>하면 큐브가 돌아가요!</>
            :
            <>큐브를 <Message>클릭</Message>하면 멈출 수 있어요!</>
            }
            </div>
            <Arrow src={"/images/skillset/arrow.png"}></Arrow>
        </MessageDiv>
    );

}