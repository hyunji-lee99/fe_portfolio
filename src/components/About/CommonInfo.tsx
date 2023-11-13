import styled from "styled-components"

export const Info=styled.div`
  width:100%;
  height:100%;
  margin: 10px 0;
  padding: 10% 10%;
  /* position:absolute; */
  background-color:white;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
  overflow:scroll;
  @media screen and (max-width:900px){
    padding: 6% 6%;
  }
  
`
export const InfoTitle=styled.span`
  font-size:2rem;
  @media screen and (max-width:900px){
    font-size:1.5rem;
  }
  
`
export const InfoContent=styled.div`
  font-size:1rem;
  @media screen and (max-width:900px){
    font-size:0.8rem;
  }
`
export const InfoContentDetail=styled.span`
  color:gray;
  font-size:0.7rem;
`
export const InfoContentDiv=styled.div`
  
`
export const InfoContentElementDiv=styled.div`
  margin:5% 0;
`