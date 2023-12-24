import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { postMessage } from '../../firebase';
import "../../fonts/font.css";
import { InputDataState } from '../../recoil/BoardState';

const InputForm=styled.form`
    width: 100%;
    height:80px;
    display:flex;
    margin-top:5%;
    justify-content:space-between;
    position:relative;
    /* justify-content:space-between; */
    @media screen and (max-width:700px){
        height:60px;
    }
    
`
const ContentInput=styled.input`
    width:100%;
    height:100%;
    padding-left:1%;
    border: none;
    border-radius:0;
    background-color:transparent;
    border-bottom: solid 1px gray;
    -webkit-appearance:none;
    font-family:"SUITE-Regular";
    &:focus{
        outline:none;
    }
`
const NameInput=styled.input`
    width:100%;
    height:100%;
    padding-left:1%;
    margin-bottom:5px;
    border:none;
    border-radius:0;
    background-color:transparent;
    border-bottom: solid 1px gray;
    font-family:"SUITE-Regular";
    -webkit-appearance:none;
    &:focus{
        outline:none;
    }
`
const InputDiv=styled.div`
    width:90%;
    height: 100%;
    display:flex;
    flex-direction:column;
    @media screen and (max-width:700px){
        width:80%;
    }

`
const SubmitButton=styled.button`
    width:5%;
    height:100%;
    border:none;
    border-radius: 5px;
    color:white;
    background-color: gray;
    @media screen and (max-width:700px){
        width:15%;
    }
`

    

export function InputMessage() {
    // const [inputAuthor, setInputAuthor]=useState('');
    // const [inputContent, setInputContent]=useState('');
    const [inputData, setInputData]=useRecoilState(InputDataState);

    const onChangeAuthor=(e:React.ChangeEvent<HTMLInputElement>)=>{
        // setInputAuthor(e.target.value);
        setInputData({
            ...inputData,
            author: e.target.value
        })
    }
    const onChangeContent=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputData({
            ...inputData,
            content: e.target.value
        })
    }
    const onSubmitMessage=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (inputData.author!=='' && inputData.content!==''){
            postMessage({
                author:inputData.author,
                content:inputData.content,
                createdAt:Date.now()
            });
            setInputData({
                author:'',
                content:''
            })
        }
        else{
            alert('내용을 입력해주세요!')
        }
       
    }
    return (
        <InputForm onSubmit={onSubmitMessage}>
            <InputDiv>
                <NameInput onChange={onChangeAuthor} value={inputData.author} placeholder="이름 또는 별명을 입력해주세요!"/>
                <ContentInput onChange={onChangeContent} value={inputData.content} placeholder="하고 싶은 말을 입력해주세요!"/>
            </InputDiv>
            <SubmitButton type='submit'>
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </SubmitButton>
        </InputForm>
    );
}
