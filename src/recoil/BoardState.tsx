import { atom } from "recoil";

// snow animation에 view에 나타났는가?
export const onSnowState=atom({
    key:'onSnow',
    default:false
})

type BoardType={
    author:string,
    content:string
}

// 현재 저장된 게시판 데이터를 담은 배열
export const BoardDataState=atom<BoardType[]>({
    key:'BoardData',
    default:[]
})

// 게시판에 글을 작성하기 위한 데이터를 담은 배열
export const InputDataState=atom<BoardType>({
    key:'InputData',
    default:{
        author:'',
        content:''
    }
})
