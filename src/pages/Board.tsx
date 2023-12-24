
import { styled } from "styled-components";
import { BoardList } from "../components/Board/BoardList";
import { InputMessage } from "../components/Board/InputMessage";
import Snowfall from "react-snowfall";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { onSnowState } from "../recoil/BoardState";


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
const BoardWrapper=styled.div`
  width:100%;
  height:100%;
  z-index:2;
  padding: 5% 5%;
  background-color:#ffffff80;
  border-radius:10px;

`
type BoardProps={
  boardRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function Board(prop:BoardProps){
    const {ref, inView}=useInView();
    const [onSnow, setOnSnow]=useRecoilState(onSnowState);
    useEffect(()=>{
      if (inView){
        setOnSnow(true)
      }
      else {
        setOnSnow(false)
      }
    },[inView, setOnSnow])

    return(
    <Div ref={prop.boardRef}>
      {/* 뷰 안에 요소가 들어오면 animation 실행  */}
      <div ref={ref}></div>
      {onSnow?<Snowfall color={"#ffffff"} snowflakeCount={1500} speed={[1,1]} wind={[-1,1]}/>:null}
      <BoardWrapper>
        <BoardList/>
        <InputMessage/>
      </BoardWrapper>
    </Div>);
}