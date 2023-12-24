import { atom } from "recoil";

// 현재 나타내고 있는 내 정보의 index는?
export const currentPageState=atom({
    key:'currentPage',
    default:0
})

// 정보를 담은 slider가 view에 나타났는가?
export const onSliderState=atom({
    key:'onSlider',
    default:false
})

// 소개 메시지가 view에 나타났는가?
export const onDescriptionState=atom({
    key:'onDescription',
    default:false
})