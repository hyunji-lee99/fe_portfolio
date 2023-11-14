import React from 'react';
import styled from 'styled-components';
import "../../fonts/font.css";

const ContentDiv=styled.div`
    width:100%;
    height:150px;
    /* border-radius:10px; */
    padding: 5% 5%;
    font-family:'SUITE-Regular';
    &:nth-of-type(4n+1){
        background-color:#7FB4E2;
    }
    &:nth-of-type(4n+2){
        background-color:#6F3A00;
        color:white;
    }
    &:nth-of-type(4n+3){
        background-color:#FFECCC;
    }
    &:nth-of-type(4n+4){
        background-color:#8B7356;
        color:white;
    }
  
`
const Author=styled.span`
    font-family:'SUITE-Bold';
`
const Message=styled.div`
    overflow:scroll;

`
type BoardContentProps={
    author:string,
    content:string
}
export function BoardContent(prop:BoardContentProps) {
    return (
        <ContentDiv>
            <Author>{prop.author}</Author>
            <Message>{prop.content}</Message>
        </ContentDiv>
    );
}
