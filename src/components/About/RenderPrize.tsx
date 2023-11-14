import {Info, InfoContentDiv, InfoTitle, InfoContent, InfoContentDetail, InfoContentElementDiv} from "./CommonInfo";

export function RenderPrize(){
    return(
      <Info>
      <InfoTitle>수상 이력</InfoTitle>
      <InfoContentDiv>
          <InfoContentElementDiv>
              <InfoContent>공개 SW 개발자 대회 동상</InfoContent>
              <InfoContentDetail>리원에이스<br/>NLP 기반 Java Thread Dump 데이터 분석 웹 서비스 개발<br/>2022.12.06</InfoContentDetail>
          </InfoContentElementDiv>
          <InfoContentElementDiv>
              <InfoContent>대구를 빛내는 해커톤</InfoContent>
              <InfoContentDetail>경북대학교 SW 교육원<br/>노인 전용 SNS 'Hallo' 개발<br/>2022.10.11</InfoContentDetail>
          </InfoContentElementDiv>
          <InfoContentElementDiv>
              <InfoContent>대경권 공공데이터 활용 경진대회</InfoContent>
              <InfoContentDetail>한국지능정보사회진흥원<br/>불법 주정차 단속 CCTV 설치 위치 추천을 위한 데이터 분석<br/>2020.12.28</InfoContentDetail>
          </InfoContentElementDiv>
      </InfoContentDiv>
      </Info>
    );
}