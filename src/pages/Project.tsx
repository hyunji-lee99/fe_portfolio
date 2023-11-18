import { useState } from "react";
import { styled } from "styled-components";
import { DownButton } from "../components/common/DownButton";
import ProjectList from "../components/Project/ProjectList";
import ProjectMoveButton from "../components/Project/ProjectMoveButton";

const Div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
  padding: 100px 10%;
  background-color:#7FB4E226;
`
type ProjectProps={
  projectRef:React.ForwardedRef<HTMLDivElement|null>;
  nextRef:React.ForwardedRef<HTMLDivElement|null>;
}

export function Project(prop:ProjectProps){
    const [curPage, setCurPage]=useState<number>(0);
    return(
    <Div ref={prop.projectRef}>
        <ProjectList index={curPage}/>
        <ProjectMoveButton PageSelect={setCurPage}/>
        <DownButton location={prop.nextRef}/>
    </Div>);
}