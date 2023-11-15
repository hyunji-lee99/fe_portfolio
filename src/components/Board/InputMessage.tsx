import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { postMessage } from '../../firebase';
import "../../fonts/font.css";

const InputForm=styled.form`
    width: 100%;
    height:80px;
    display:flex;
    z-index:5;
    /* justify-content:space-between; */
    
`
const ContentInput=styled.input`
    width:100%;
    height:100%;
    /* padding: 0 1%; */
    font-family:"SUITE-Regular";
    border:none;
    border-bottom-left-radius:25px;
    /* border-left:solid 1px black; */
    /* border-bottom:solid 1px black; */
    padding-left:6%;
    &:focus{
        outline:none;
    }
`
const NameInput=styled.input`
    width:100%;
    height:100%;
    /* padding: 0 1%; */
    padding-left:6%;
    border:none;
    /* border-left:solid 1px black; */
    font-family:"SUITE-Regular";
    &:focus{
        outline:none;
    }
`
const InputDiv=styled.div`
    width:100%;
    height: 80px;
    display:flex;
    flex-direction:column;

`
const SubmitButton=styled.button`
    width:5%;
    height:100%;
    border:none;
    border-bottom-right-radius:25px;
    /* border-right: solid 1px black; */
    /* border-bottom: solid 1px black; */
    color:white;
    background-color: #87CEEB;
    @media screen and (max-width:700px){
        width:15%;
    }
`

type InputMessageProps={
    confetti:Function
}
    

export function InputMessage(prop:InputMessageProps) {
    const [inputAuthor, setInputAuthor]=useState('');
    const [inputContent, setInputContent]=useState('');

    const onChangeAuthor=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputAuthor(e.target.value);
    }
    const onChangeContent=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputContent(e.target.value);
    }
    const onSubmitMessage=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (inputAuthor!='' && inputContent!=''){
            postMessage({
                author:inputAuthor,
                content:inputContent,
                createdAt:Date.now()
            });
            setInputAuthor('');
            setInputContent('');
            prop.confetti(true);
        }
        else{
            alert('내용을 입력해주세요!')
        }
       
    }
    return (
        <InputForm onSubmit={onSubmitMessage}>
            <InputDiv>
                <NameInput onChange={onChangeAuthor} value={inputAuthor} placeholder="이름 또는 별명을 입력해주세요!"/>
                <ContentInput onChange={onChangeContent} value={inputContent} placeholder="하고 싶은 말을 입력해주세요!"/>
            </InputDiv>
            <SubmitButton type='submit'>
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </SubmitButton>
        </InputForm>
    );
}
