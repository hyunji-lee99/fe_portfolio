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
type ProjectProps={
  projectRef:React.ForwardedRef<HTMLDivElement|null>;
  nextRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function Project(prop:ProjectProps){
    return(
    <Div ref={prop.projectRef}>
        project
        <DownButton location={prop.nextRef}/>
    </Div>);
}