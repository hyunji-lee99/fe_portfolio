import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ButtonDiv=styled.div`
    z-index:3;
    bottom:10%;
    position:absolute;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
`

const Button = styled.button`
    border-radius:50%;
    border:none;
    background-color:#6f3f06;
    color:white;
    font-size:1.5rem;
    width:100%;
    height:100%;
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


const AnimationEffect_One = styled.div`
    width:20%;
    height:20%;
    border-radius:50%;
    background-color:#ffffff6b;
    opacity:0.3;
    position:absolute;
    animation: ${BellEffect} 3s infinite linear;
`

const AnimationEffect_Two = styled.div`
    width:20%;
    height:20%;
    border-radius:50%;
    background-color:#ffffff6b;
    opacity:0.3;
    position:absolute;
    animation: ${BellEffect} 3s 1.5s infinite linear;
`

type DownButtonProps={
    location:number;
}

export function DownButton(location:DownButtonProps){
    const onDownButton=()=>{
        window.scrollTo({left:0, top:location.location*window.innerHeight, behavior:'smooth'})
    }
    return(
        <ButtonDiv onClick={onDownButton}>
            <Button>
                <FontAwesomeIcon icon={faArrowDown as IconProp} />
            </Button>
            <AnimationEffect_One/>
            <AnimationEffect_Two/>
        </ButtonDiv>
    );
}