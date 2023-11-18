import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes, styled } from "styled-components";



const ButtonDiv=styled.div`
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`

const RealButton = styled.button`
    border-radius:50%;
    border:none;
    background-color:rgba(135,206,235,0.2);
    color:white;
    font-size:1.5rem;
    width:100%;
    height:100%;
    font-size:0.7rem;
    position:absolute;
`

const BellEffect=keyframes`
  0% {
      transform: scale(1);
  }
  100% {
    transform : scale(5)
  }

`


const AnimationEffectOne = styled.div`
    width:20%;
    height:20%;
    border-radius:50%;
    background-color:rgba(135,206,235,0.3);
    opacity:0.3;
    position:absolute;
    animation: ${BellEffect} 3s infinite linear;
`

const AnimationEffectTwo = styled.div`
    width:20%;
    height:20%;
    border-radius:50%;
    background-color:rgba(135,206,235,0.3);
    opacity:0.3;
    position:absolute;
    animation: ${BellEffect} 3s 1.5s infinite linear;
`
type ButtonProps={
    direction:IconProp;
}
export function Button(props:ButtonProps) {
    return (
        <ButtonDiv>
            <RealButton>
                <FontAwesomeIcon icon={props.direction}></FontAwesomeIcon>
            </RealButton>
            <AnimationEffectOne></AnimationEffectOne>
            <AnimationEffectTwo></AnimationEffectTwo>
        </ButtonDiv>
    );
}

