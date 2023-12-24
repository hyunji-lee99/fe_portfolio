import { atom } from "recoil";

// title이 view에 나타났는가?
export const titleState = atom({
    key: 'title',
    default: false
});

// 타이틀에 표시되는 갈색 하이하이트 div의 위치 Y값은?
export const posYState = atom({
    key: 'posY',
    default: 0
});

// wave animation이 view에 나타났는가?
export const waveState= atom({
    key:'wave',
    default:true
})
