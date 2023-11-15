import { useEffect, useRef } from 'react';
import styled,{keyframes} from 'styled-components';
import ProjectImageSlider from './ProjectImageSlider';
import "../../fonts/font.css";

const CardDiv=styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    border-radius:10px;
    padding: 5%;
    font-family:"Suite-Regular";
    color:#414141;
    @media screen and (max-width:900px){
        flex-direction:column;
        font-size:0.8rem;
    }
`
const SlideDownInfo=keyframes`
    from{
        transform:translateY(-100%);
    }
    to{
        transform: translateY(0);
    }  
`
const SlideLeftInfo=keyframes`
    from{
        transform:translateX(100%);
    }
    to{
        transform: translateX(0);
    }  
    
`

const CardInfo=styled.div`
    margin-right:10%;
    &.startanimation{
        animation: ${SlideDownInfo} 0.3s linear;
    }
    @media screen and (max-width:900px){
        margin-right:0;
        margin-bottom:20px;
    }
`
const CardTitle=styled.h3`
    display:inline;
    margin-top:10px;
    margin-right:5px;
    font-family:'SUITE-Bold';
    font-size:1.5rem;

`
const CardMember=styled.span`
    color:gray;

`
const CardLink=styled.a`
    margin-top:10px;
    display:flex;
    align-items:center;
    /* white-space:nowrap; */
    /* background-image:url("/images/skillset/github.svg");
    background-repeat:no-repeat;
    background-size:25px; */
    width:100%;
    height:25px;
    /* background-position:0px center; */
    /* padding-left:30px; */
    text-decoration:none;
    color:#414141;
`
const Tag=styled.span`
    background-color:lightgray;
    padding:1%;
    border-radius:5px;
    margin-right:5px;
    white-space:nowrap;

`
const CardDetailDiv=styled.div`
    &.startanimation{
        animation: ${SlideLeftInfo} 0.3s linear;
    }


`
const DetailTitle=styled.span`
    font-size:1.5rem;
    font-family:'SUITE-Bold';
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 30%;
    background-image: linear-gradient(90deg, #7FB4E2 0%,#aad4e4 100%);
    @media screen and (max-width:500px){
        font-size:1rem;
    }
`
const DetailContent=styled.p`
    word-break:keep-all;
    margin-top:10px;
    margin-bottom:20px;
    line-height:1.5rem;
    @media screen and (max-width:500px){
        font-size:0.7rem;
        line-height:1rem;
    }
    
`
type ProjectCardProp={
    title:string,
    member:string,
    images:string[],
    github:string,
    hosturl:string,
    introduce:string,
    implementaion:string,
    skillstack:string
}


function ProjectCard(prop:ProjectCardProp) {
    const CardInfoRef=useRef<HTMLDivElement>(null);
    const CardDetailRef=useRef<HTMLDivElement>(null);
    const mutationObserver=new MutationObserver(async()=>{
        // CardInfo랑 CardDetailDiv 애니메이션 실행
        if (CardInfoRef.current && CardDetailRef.current){
            CardInfoRef.current.classList.remove("startanimation");
            CardDetailRef.current.classList.remove("startanimation");
            //브라우저에 dom에 대한 정보(width)를 요청하면서 강제로 브라우저에게 일을 시키게 할 뿐이다
            void CardInfoRef.current.offsetHeight;
            CardInfoRef.current.classList.add("startanimation");
            CardDetailRef.current.classList.add("startanimation");
        }

        
    })
    useEffect(()=>{
        if (CardInfoRef.current){
            mutationObserver.observe(CardInfoRef.current, {
                childList:true,
                subtree:true,
            })
        }
       
    },[])
    return (
        <CardDiv>
            <CardInfo ref={CardInfoRef}>
                <ProjectImageSlider imageList={prop.images}/>
                <CardTitle>{prop.title}</CardTitle>
                <CardMember>{prop.member}</CardMember>
                {prop.github!==""?
                    <CardLink href={prop.github} target="_blank">
                        <Tag>레포</Tag>
                        {prop.github}
                    </CardLink>:<></>}
                {prop.hosturl!==""?
                    <CardLink href={prop.hosturl} target="_blank">
                        <Tag>배포</Tag>
                        {prop.hosturl}
                    </CardLink>:<></>}
            </CardInfo>
            <CardDetailDiv ref={CardDetailRef}>
                <DetailTitle>프로젝트 소개</DetailTitle>
                <DetailContent>{prop.introduce}</DetailContent>
                <DetailTitle>구현 사항</DetailTitle>
                <DetailContent style={{whiteSpace:"pre-line"}}>{prop.implementaion}</DetailContent>
                <DetailTitle>기술 스택</DetailTitle>
                <DetailContent>{prop.skillstack}</DetailContent>
            </CardDetailDiv>
        </CardDiv>
    );
}

export default ProjectCard;