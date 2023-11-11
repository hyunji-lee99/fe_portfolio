import { styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import { ClickMessage } from "../components/Skill/ClickMessage";
import {RotateSkillCube} from "../components/Skill/RotateSkillCube";

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
        <RotateSkillCube></RotateSkillCube>
        <DownButton location={3}/>
    </Div>);
}