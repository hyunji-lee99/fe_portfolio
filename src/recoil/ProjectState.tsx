import { atom } from "recoil";

// 현재 나타내고 있는 프로젝트의 index는?
export const ProjectPageState=atom({
    key:'ProjectPage',
    default:0
})