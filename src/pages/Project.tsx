import { styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import ProjectList from "../components/Project/ProjectList";

const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
  background-image:linear-gradient(0deg, #ffffff 0%,#7FB4E280 100%);
`
type ProjectProps={
  projectRef:React.ForwardedRef<HTMLDivElement|null>;
  nextRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function Project(prop:ProjectProps){
    return(
    <Div ref={prop.projectRef}>
        <ProjectList/>
        <DownButton location={prop.nextRef}/>
    </Div>);
}