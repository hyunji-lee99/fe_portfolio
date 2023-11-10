import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import '../fonts/font.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../fonts/font.css";

const HeaderDiv = styled.div`
    position:fixed;
    z-index:3;
    top:0;
    width:100vw;
    padding:0 5%;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family:'jejudoldam';
    background-color:white;
    @media screen and (max-width:900px){
      padding:0;
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
    background-color:white;
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:100vw;
    height:200%;
    text-align:center;
    top:100px;
    font-family:"SUITE-Bold";
    @media screen and (min-width:900px){
      display:none;
    }
`


function HeaderMenu() {
  const [respMenu, setRespMenu] = useState(false);
  const onClickIntro=()=>{
    setRespMenu(false);
    window.scrollTo({left:0,top:0,behavior:"smooth"});
  }
  
  const onClickAbout=()=>{
    setRespMenu(false);
    window.scrollTo({left:0,top:window.innerHeight,behavior:"smooth"});
  }
  
  const onClickSkill=()=>{
    setRespMenu(false);
    window.scrollTo({left:0,top:2*window.innerHeight,behavior:"smooth"});
  }
  
  const onClickProject=()=>{
    setRespMenu(false);
    window.scrollTo({left:0,top:3*window.innerHeight,behavior:"smooth"});
  }
  
  const onClickChat=()=>{
    setRespMenu(false);
    window.scrollTo({left:0,top:4*window.innerHeight,behavior:"smooth"});
  }
    return (
      <HeaderDiv>
        <Logo onClick={onClickIntro}>HYUNJI</Logo>
        {respMenu?
        <RespMenuUnderLogo>
          <li onClick={onClickAbout}>ABOUT</li>
          <li onClick={onClickSkill}>SKILL</li>
          <li onClick={onClickProject}>PROJECT</li>
          <li onClick={onClickChat}>CHAT</li>
        </RespMenuUnderLogo>
        :
        <></>}
        <Menu>
          <MenuUl>
            <li onClick={onClickAbout}>ABOUT</li>
            <MenuLi onClick={onClickSkill}>SKILL</MenuLi>
            <li onClick={onClickProject}>PROJECT</li>
            <MenuLi onClick={onClickChat}>CHAT</MenuLi>
          </MenuUl>
        </Menu>
        <ResponsiveMenu onClick={()=>setRespMenu(!respMenu)}>
          <FontAwesomeIcon icon={faBars as IconProp} />
        </ResponsiveMenu>
      </HeaderDiv>
    );
  }
  
  export default HeaderMenu;
  