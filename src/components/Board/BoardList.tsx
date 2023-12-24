import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { BoardContent } from './BoardContent';
import { MessagesCollectionRef} from "../../firebase";
import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { BoardDataState } from '../../recoil/BoardState';
import { useRecoilState } from 'recoil';

const BoardDiv=styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4%;
    width: 100%;
    height:90%;
    overflow:scroll;
    @media screen and (max-width:500px){
        grid-template-columns: 1fr;
    }

`

export function BoardList() {
    const [board, setBoard]=useRecoilState(BoardDataState);

    const getData=useCallback(async()=>{
            const q=query(MessagesCollectionRef, orderBy('createdAt','desc'));
            onSnapshot(q,(snapshot)=>{
                const newData=snapshot.docs.map((d)=>{            
                    return{
                    ...d.data()
                    }
                })
                setBoard(newData as typeof board);
            })
        }
    ,[setBoard])

    useEffect(()=>{
        getData()
    },[getData])

    function RenderBoardContent(){
        const ReturnRenderBoardContentboard=board?.map((data,id)=>{
            return(
            <BoardContent key={id} author={data.author} content={data.content}></BoardContent>
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

