import styled from "styled-components";
import "../../fonts/font.css"
import { FrontendSkillSet, BackendSkillSet, CertificateSkillSet, EtcSkillSet } from "./SkillData";

const SkillDiv=styled.div`
    width:100%;
    height:100%;
    padding: 5% 5%;
    font-family:"SUITE-Bold";
`
const SkillTitle=styled.h2`
    font-family:"SUITE-Bold";
    height: 10%;
    border-bottom: solid 1px black;
    @media screen and (max-width: 700px){
        font-size: 1rem;
        height: 13%;
    }
`

const SkillSet=styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding:5%;
`
const SkillLogoAndName=styled.div`
    width:96px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 700px){
        width:40px;
        font-size:0.4rem;
    }
`

const SkillLogo=styled.img`
    width:100%;
    height:96px;
    @media screen and (max-width: 700px){
        height:40px;
    }
    
`
const SkillName=styled.span`
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 20%;
  background-image: linear-gradient(90deg, #7FB4E2 0%,#aad4e4 100%);
    
`

type SkillDetailProps={
    subject:string;
}

export function SkillDetail(subject:SkillDetailProps){
    const RenderData=():JSX.Element[]=>{
    let Data:Record<string,string>[]=[];
    if (subject.subject==='Frontend'){
        Data=FrontendSkillSet;
    }
    else if (subject.subject==='Backend'){
        Data=BackendSkillSet;
    }
    else if (subject.subject==='Certificate'){
        Data=CertificateSkillSet;
    }
    else if (subject.subject==='etc'){
        Data=EtcSkillSet;
    }
    const ReturnRenderData=Data.map(
        (data,id)=>{
          return (
            <SkillLogoAndName key={id}>
                <SkillLogo src={data.img}></SkillLogo>
                <SkillName>{data.title}</SkillName>
            </SkillLogoAndName>
          );
        }
      );
    return ReturnRenderData;
    }
    return(
    <SkillDiv>
        <SkillTitle>{subject.subject}</SkillTitle>
        <SkillSet>
            {RenderData()}
        </SkillSet>

    </SkillDiv>
    );
}