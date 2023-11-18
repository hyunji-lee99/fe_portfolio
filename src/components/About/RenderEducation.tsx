import {Info, InfoContentDiv, InfoTitle, InfoContent, InfoContentDetail, InfoContentElementDiv} from "./CommonInfo";

export function RenderEducation(){
    return(
        <Info>
                <InfoTitle>학력</InfoTitle>
                <InfoContentDiv>
                    <InfoContentElementDiv>
                        <InfoContent>경북대학교 컴퓨터학부 졸업</InfoContent>
                        <InfoContentDetail>2018.03 ~ 2023.02</InfoContentDetail>
                    </InfoContentElementDiv>
                    <InfoContentElementDiv>
                        <InfoContent>대구남산고등학교 졸업</InfoContent>
                        <InfoContentDetail>2015.03 ~ 2018.02</InfoContentDetail>
                    </InfoContentElementDiv>
                </InfoContentDiv>
          </Info>
    );
}