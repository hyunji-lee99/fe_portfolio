import React from 'react';
import styled from 'styled-components';
import "../../fonts/font.css";

const ContentDiv=styled.div`
    width:100%;
    height:150px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 5% 0;
    font-family:'SUITE-Regular';
    &:nth-of-type(4n+1){
        background-color:#95744A80;
    }
    &:nth-of-type(4n+2){
        background-color:#6F3A0080;
    }
    &:nth-of-type(4n+3){
        background-color:#FFECCC80;
    }
    &:nth-of-type(4n+4){
        background-color:#8B735680;
    }
  
`
const Author=styled.div`
    width:90%;
    padding-bottom:2%;
    border-bottom: solid 1.5px black;
    font-family:'SUITE-Bold';
`
const Message=styled.div`
    overflow:scroll;
    padding-top:2%;
    width:90%;
    height:80%;

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
