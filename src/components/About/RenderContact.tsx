import {Info, InfoContentDiv, InfoTitle } from "./CommonInfo";
import styled from "styled-components";

const ContactInfoDiv=styled.div`
  display:flex;
  margin: 5% 0;
  width:100%;
  justify-content: space-between;
`
const ContactTilte=styled.div`
  font-size:1rem;
`
const ContactContent=styled.div`
  color:gray;
  font-size: 1rem;
`

export function RenderContact(){
    return(
        <Info>
              <InfoTitle>연락처</InfoTitle>
              <InfoContentDiv>
                    <ContactInfoDiv>
                        <ContactTilte>Email</ContactTilte>
                        <ContactContent>hyunji0483@naver.com</ContactContent>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                        <ContactTilte>Github</ContactTilte>
                        <ContactContent>https://github.com/hyunji-lee99</ContactContent>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                        <ContactTilte>Blog</ContactTilte>
                        <ContactContent>https://1eehyunji.tistory.com/</ContactContent>
                    </ContactInfoDiv>
                </InfoContentDiv>
        </Info>
    );
}