import { faArrowAltCircleLeft, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useEffect,useRef,useState} from 'react';
import styled from 'styled-components';

const SliderDiv=styled.div`
    width:400px;
    height:300px;
    overflow:hidden;
    position:relative;
`
const SliderWrapper=styled.div`
    display:flex;
    width:400px;
    height:300px;
`
const Image=styled.img`
    width:400px;
    height:300px;
    object-fit:contain;
`
const ImageDiv=styled.div`
    display:flex; */
    align-items:center;
    justify-content:center;
    width:400px;
    height:300px;
    background-color:white;
`
const ButtonDiv=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3%;

`
const Button=styled.button`
    color:white;
    width:25px;
    height:25px;
    border:none;
    border-radius:50%;
    background-color:#87CEEB;

`

type ProjectImageSliderProp={
    imageList:string[]
}

function ProjectImageSlider(prop:ProjectImageSliderProp) {
    const SlideRef=useRef<HTMLDivElement>(null);
    const [index, setIndex]=useState(0);
    const slideRange=400*index;

    useEffect(()=>{
        if(SlideRef.current?.style!=null){
            SlideRef.current.style.transition = "all 0.5s ease-in-out";
            SlideRef.current.style.transform=`translateX(-${slideRange}px)`
        }
    },[index])

    const ToNextSlide=()=>{
        if (index===prop.imageList.length-1){
            setIndex(0)
        }
        else{
            setIndex(cur=>cur+1)
        }
    }

    const ToPrevSlide=()=>{
        if (index===0){
            setIndex(prop.imageList.length-1)
        }
        else{
            setIndex(cur=>cur-1)
        }
    }

    const RenderImage=()=>{
        const ReturnRenderImage=prop.imageList.map((image)=>{
            return(
                <ImageDiv>
                    <Image src={image}></Image>
                </ImageDiv>
            )
        })
        return ReturnRenderImage
    }

    return (
        <div>
            <SliderDiv>
                <SliderWrapper ref={SlideRef}>
                    {RenderImage()}
                </SliderWrapper>
            </SliderDiv>
            <ButtonDiv>
                <Button onClick={ToPrevSlide} style={{marginRight:'5px'}}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </Button>
                <Button onClick={ToNextSlide}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Button>
            </ButtonDiv>
        </div>
    );
}

export default ProjectImageSlider;