import { atom } from "recoil";

// cube가 동작중인가?
export const onClickCubeState=atom({
    key:'onClickCube',
    default:false
})

// cube가 view에 나타났는가?
export const onCubeState=atom({
    key:'onCube',
    default:false
})