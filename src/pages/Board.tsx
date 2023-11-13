import { useState } from "react";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { styled } from "styled-components";
import { BoardList } from "../components/Board/BoardList";
import { InputMessage } from "../components/Board/InputMessage";


const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  padding:100px 10%;
  align-items:center;
  justify-content:center;
`
export function Board(){
  const [onConfeti,setOnConfetti]=useState(true);
    return(
    <Div>
      {onConfeti && 
      <ConfettiExplosion 
        onComplete={()=>setOnConfetti(false)} 
        colors={['#7FB4E2','#6F3A00','#FFECCC','#8B7356','#87ceeb']}/>}
      <BoardList/>
      <InputMessage confetti={setOnConfetti}/>
    </Div>);
}