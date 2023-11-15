import { useState } from "react";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { styled } from "styled-components";
import { BoardList } from "../components/Board/BoardList";
import { InputMessage } from "../components/Board/InputMessage";
import Snowfall from "react-snowfall";


const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  position:relative;
  flex-direction:column;
  padding:100px 10%;
  align-items:center;
  justify-content:center;
  background-image:linear-gradient(0deg, #ffffff 0%,#7FB4E280 100%);
`

type BoardProps={
  boardRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function Board(prop:BoardProps){
  const [onConfeti,setOnConfetti]=useState(true);
    return(
    <Div ref={prop.boardRef}>
      <Snowfall color={"#ffffff"} snowflakeCount={1500} speed={[1,1]} wind={[-1,1]}/>
      {/* {onConfeti && 
      <ConfettiExplosion 
        onComplete={()=>setOnConfetti(false)} 
        colors={['#7FB4E2','#6F3A00','#FFECCC','#8B7356','#87ceeb']}/>} */}
      <BoardList/>
      <InputMessage confetti={setOnConfetti}/>
    </Div>);
}