import {Info, InfoContentDiv, InfoTitle, InfoContent, InfoContentDetail, InfoContentElementDiv} from "./CommonInfo";

export function RenderEtc(){
    return(
      <Info>
      <InfoTitle>기타 이력</InfoTitle>
      <InfoContentDiv>
          <InfoContentElementDiv>
              <InfoContent>GDSC KNU</InfoContent>
              <InfoContentDetail>GDSC(Google Developer Student Clubs)<br/>프론트엔드 멤버<br/>2021.08 ~ 2022.07</InfoContentDetail>
          </InfoContentElementDiv>
          <InfoContentElementDiv>
              <InfoContent>학생리포터</InfoContent>
              <InfoContentDetail>경북대학교 대외홍보협력과<br/>취재팀<br/>2019.03 ~ 2020.02</InfoContentDetail>
          </InfoContentElementDiv>
      </InfoContentDiv>
      </Info>
    );
}