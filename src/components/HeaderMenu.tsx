import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import '../fonts/font.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useState } from "react";
import "../fonts/font.css";

const HeaderDiv = styled.div`
    position:fixed;
    z-index:3;
    top:0;
    width:100%;
    padding:0 5%;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family:'jejudoldam';
    backdrop-filter:blur(3px);
    -webkit-backdrop-filter:blur(3px);
    &.responsive{
      background-color:white;
    }
    @media screen and (max-width:900px){
      padding:0;
    }
    @media screen and (min-width:1200px){
      padding: 0 10%;
    }
`
const Logo = styled.h3`
    font-size:1.5rem;
    @media screen and (max-width:900px){
      margin: 0 auto;
    }

`
const Menu = styled.nav`
    width: 40%;
    @media screen and (max-width:900px){
      display:none;
    }
`

const MenuUl=styled.ul`
    display:flex;
    list-style:none;
    justify-content:space-around;
    width:100%;
    font-size:1.2rem;
`
const MenuLi=styled.li`
  color:#87CEEB;
  -webkit-text-stroke: 1px black;
`

const ResponsiveMenu=styled.div`
  font-size:1.5rem;
  position: absolute;
  
  right:5%;
  @media screen and (min-width:900px){
      display:none;
    }
  
`

const RespMenuUnderLogo=styled.ul`
    list-style:none;
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:100%;
    height:200%;
    text-align:center;
    top:100px;
    z-index:3;
    background-color:white;
    font-family:"SUITE-Bold";
    @media screen and (min-width:900px){
      display:none;
    }
`

type HeaderMenuProps={
  menuRef:React.ForwardedRef<HTMLDivElement>[];
}

const HeaderMenu=(prop:HeaderMenuProps)=>{
  const [respMenu, setRespMenu] = useState(false);
  const onClickIntro=()=>{
    setRespMenu(false);
    if (typeof prop.menuRef[0]!=="function"){
      prop.menuRef[0]?.current?.scrollIntoView({behavior:"smooth"});
    }
  }
  
  const onClickAbout=()=>{
    setRespMenu(false);
    if (typeof prop.menuRef[1]!=="function"){
      prop.menuRef[1]?.current?.scrollIntoView({behavior:"smooth"});
    }
  }
  
  const onClickSkill=()=>{
    setRespMenu(false);
    if (typeof prop.menuRef[2]!=="function"){
      prop.menuRef[2]?.current?.scrollIntoView({behavior:"smooth"});
    }
  }
  
  const onClickProject=()=>{
    setRespMenu(false);
    if (typeof prop.menuRef[3]!=="function"){
      prop.menuRef[3]?.current?.scrollIntoView({behavior:"smooth"});
    }
  }
  
  const onClickBoard=()=>{
    setRespMenu(false);
    if (typeof prop.menuRef[4]!=="function"){
      prop.menuRef[4]?.current?.scrollIntoView({behavior:"smooth"});
    }
  }
    return (
      <HeaderDiv className={respMenu?"responsive":""}>
        <Logo onClick={onClickIntro}>HYUNJI</Logo>
        {respMenu?
        // 반응형 메뉴
        <RespMenuUnderLogo>
          <li onClick={onClickAbout}>ABOUT</li>
          <li onClick={onClickSkill}>SKILL</li>
          <li onClick={onClickProject}>PROJECT</li>
          <li onClick={onClickBoard}>BOARD</li>
        </RespMenuUnderLogo>
        :
        <></>}
        <Menu>
          <MenuUl>
            <li onClick={onClickAbout}>ABOUT</li>
            <MenuLi onClick={onClickSkill}>SKILL</MenuLi>
            <li onClick={onClickProject}>PROJECT</li>
            <MenuLi onClick={onClickBoard}>BOARD</MenuLi>
          </MenuUl>
        </Menu>
        <ResponsiveMenu onClick={()=>setRespMenu(!respMenu)}>
          <FontAwesomeIcon icon={faBars as IconProp} />
        </ResponsiveMenu>
      </HeaderDiv>
      
    );
  }
  
  export default forwardRef(HeaderMenu);
  