import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import styled from 'styled-components';
import { postMessage } from '../../firebase';
import "../../fonts/font.css";

const InputForm=styled.form`
    width: 100%;
    height:50px;
    display:flex;
    margin-top:1%;
    /* justify-content:space-between; */
    

`
const ContentInput=styled.input`
    width:70%;
    height:100%;
    padding: 0 1%;
    border:none;
    font-family:"SUITE-Regular";
    background-image:url("/images/board/message_bubble.png");
    background-repeat: no-repeat;
    background-position: 2% center;
    background-size:30px;
    padding-left:50px;
    &:focus{
        outline:none;
    }
`
const NameInput=styled.input`
    width:20%;
    height:100%;
    padding: 0 1%;
    border:none;
    font-family:"SUITE-Regular";
    background-image:url("/images/board/write.png");
    background-repeat: no-repeat;
    background-position: 2% center;
    background-size:30px;
    padding-left:40px;


    &:focus{
        outline:none;
    }
`
const SubmitButton=styled.button`
    width:10%;
    height:100%;
    border:none;
    color:white;
    background-image: linear-gradient(90deg, #7FB4E2 0%,#aad4e4 100%);
`
const Icon=styled.img`
    width:50px;
    height:50px;

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
            <NameInput onChange={onChangeAuthor} value={inputAuthor} placeholder="이름 또는 별명을 입력해주세요!"/>
            <ContentInput onChange={onChangeContent} value={inputContent} placeholder="하고 싶은 말을 입력해주세요!"/>
            <SubmitButton type='submit'>
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </SubmitButton>
        </InputForm>
    );
}
