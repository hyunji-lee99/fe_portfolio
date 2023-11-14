import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BoardContent } from './BoardContent';
import { MessagesCollectionRef} from "../../firebase";
import { onSnapshot, orderBy, query } from 'firebase/firestore';

const BoardDiv=styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows:repeat(3, 1fr); */
    grid-gap: 4%;
    padding: 5% 5%;
    /* border:solid 1px black; */
    width: 100%;
    height:90%;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
    overflow:scroll;
    border:solid 1px black;
    border-bottom:none;
    background-color: white;

`

type BoardType={
    author:string,
    content:string
}

export function BoardList() {
    const [board, setBoard]=useState<BoardType[]>([]);
    const getData=async()=>{
        const q=query(MessagesCollectionRef, orderBy('createdAt','desc'));
        const observer=onSnapshot(q,(snapshot)=>{
            const newData=snapshot.docs.map((d)=>{            
                return{
                ...d.data()
                }
            })
            setBoard(newData as BoardType[]);
        })
    }
    useEffect(()=>{
        getData()
    },[])

    function RenderBoardContent(){
        const ReturnRenderBoardContentboard=board?.map((data)=>{
            return(
            <BoardContent author={data.author} content={data.content}></BoardContent>
            );
        })
        return ReturnRenderBoardContentboard;
    }

    return (
        <BoardDiv>
            {RenderBoardContent()}
        </BoardDiv>
    );
}

