import { styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";

const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
`

export function Skill(){
    return(
    <Div>
        skill
        <DownButton location={3}/>
    </Div>);
}