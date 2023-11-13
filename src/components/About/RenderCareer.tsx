import {Info, InfoContentDiv, InfoTitle, InfoContent, InfoContentDetail, InfoContentElementDiv} from "./CommonInfo";
import styled from "styled-components";

const JobList=styled.ul`
  color:#5b5a5a;
  font-size:0.7rem;
  list-style:none;
`

export function RenderCareer(){
    return(
        <Info>
            <InfoContentDiv>
            <InfoTitle>경력</InfoTitle>
              <InfoContentElementDiv>
                <InfoContent>다이브 주식회사<br/>웹 프론트엔드 개발 | 프리랜서</InfoContent>
                <InfoContentDetail>2023년 8월 8일 ~ 2023년 10월 8일 (2개월)</InfoContentDetail>
                <JobList>
                  <li>• 스마트농업 AI 경진대회 공식 웹 프론트엔드 개발 참여</li>
                  <li>• 사용 기술 : React, TypeSciprt, Chakra UI</li>
                </JobList>
              </InfoContentElementDiv>
              <InfoContentElementDiv>
                <InfoContent>다이브 주식회사<br/>인공지능 모델 및 API 개발 | 프리랜서</InfoContent>
                <InfoContentDetail>2022년 3월 2일 ~ 2022년 7월 2일 (4개월)</InfoContentDetail>
                <JobList>
                  <li>• 보험사 컨설턴트와 고객 매칭 모델 개발</li>
                  <li>• 모델 학습 및 예측 API 개발</li>
                  <li>• 사용 기술 : sklearn, pytorch, Django Rest Framework</li>
                </JobList>
              </InfoContentElementDiv>
              <InfoContentElementDiv>
                <InfoContent>다이브 주식회사<br/>웹 프론트엔드 개발 | 인턴</InfoContent>
                <InfoContentDetail>2021년 12월 22일 ~ 2022년 2월 18일 (2개월)</InfoContentDetail>
                <JobList>
                  <li>• NFT 마켓 플레이스 웹 프론트엔드 개발</li>
                  <li>• 사내 자체 이벤트 웹 프론트엔드 개발</li>
                  <li>• 사용 기술 : React, JavaScript, Styled-components</li>
                </JobList>
              </InfoContentElementDiv>
            </InfoContentDiv>
          </Info>
    );
}