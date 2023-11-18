import { Dispatch, SetStateAction, useState } from "react";
import styled, { keyframes } from "styled-components";
import "../../fonts/font.css";

const ButtonDiv=styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    right:5%;
    bottom:30%;
    height:15%;
`
const Button=styled.button`
    width:30px;
    height:15px;
    background-color:#87CEEB;
    border:none;
    &.currentPage{
        background-color:white;
        border:solid 1px black;
    }
    @media screen and (max-width:500px){
        width:20px;
        height:10px;
    }
`

const swell=keyframes`
  0%, 100% {
    transform: translate3d(0, 0px, 0);
  }
  50% {
    transform: translate3d(0, -15px, 0);
  }
`

const ButtonClickMessage=styled.div`
    position:absolute;
    left:-15px;
    top:-70px;
    animation: ${swell} 2s infinite linear;
    font-family:"Suite-Regular";

`
const ButtonClickIcon=styled.img`
    transform: rotate(75deg);
    margin-top:10px;
    width:30px;
    
`
type ProjectMoveButtonProp={
    PageSelect:Dispatch<SetStateAction<number>>
}

function ProjectMoveButton(prop:ProjectMoveButtonProp){
    const [cur,setCur]=useState(0);
    const onClickButton=(pageNum:number)=>{
        prop.PageSelect(pageNum);
        setCur(pageNum);
    }
    return(
        <ButtonDiv>
        <ButtonClickMessage>
                <div>Click<br/>button</div>
                <ButtonClickIcon src="/images/skillset/arrow.png"/>
            </ButtonClickMessage>
            <Button className={cur===0?"currentPage":""} onClick={()=>onClickButton(0)}/>
            <Button className={cur===1?"currentPage":""} onClick={()=>onClickButton(1)}/>
            <Button className={cur===2?"currentPage":""} onClick={()=>onClickButton(2)}/>
            <Button className={cur===3?"currentPage":""} onClick={()=>onClickButton(3)}/>
            <Button className={cur===4?"currentPage":""} onClick={()=>onClickButton(4)}/>
        </ButtonDiv>
    );
}

export default ProjectMoveButton;