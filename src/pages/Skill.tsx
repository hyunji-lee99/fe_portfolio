import { styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import { ClickMessage } from "../components/Skill/ClickMessage";
import {RotateSkillCube} from "../components/Skill/RotateSkillCube";

const Div = styled.div`
  width:100vw;
  height:100vh;
  padding:100px 10%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
`

type SkillProps={
  skillRef:React.ForwardedRef<HTMLDivElement|null>;
  nextRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function Skill(prop:SkillProps){
    return(
    <Div ref={prop.skillRef}>
        <RotateSkillCube></RotateSkillCube>
        <DownButton location={prop.nextRef}/>
    </Div>);
}