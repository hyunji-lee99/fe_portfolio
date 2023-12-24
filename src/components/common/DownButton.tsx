import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ButtonDiv=styled.div`
    z-index:2;
    bottom:10%;
    position:absolute;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    @media screen and (max-width:900px){
        bottom:5%;
    }
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


const AnimationEffectOne = styled.div`
    width:20%;
    height:20%;
    border-radius:50%;
    background-color:#ffffff6b;
    opacity:0.3;
    position:absolute;
    animation: ${BellEffect} 3s infinite linear;
`

const AnimationEffectTwo = styled.div`
    width:20%;
    height:20%;
    border-radius:50%;
    background-color:#ffffff6b;
    opacity:0.3;
    position:absolute;
    animation: ${BellEffect} 3s 1.5s infinite linear;
`

type DownButtonProps={
    location:React.ForwardedRef<HTMLDivElement>;
}

export function DownButton(prop:DownButtonProps){
    const onDownButton=()=>{
        if (typeof prop.location!=="function"){
            prop.location?.current?.scrollIntoView({behavior:"smooth"});
        }
    }
    return(
        <ButtonDiv onClick={onDownButton}>
            <Button>
                <FontAwesomeIcon icon={faArrowDown as IconProp} />
            </Button>
            <AnimationEffectOne/>
            <AnimationEffectTwo/>
        </ButtonDiv>
    );
}