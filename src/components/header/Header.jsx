import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

import Nav from "./Nav";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 10px;
  min-height: 10vh;
  
  div{
    display: flex;
    align-items: center;
  }
`;

const Menu = styled.span`
  z-index: 1;
  @media (min-width: 720px) {
    display: none;
  }
  
  ion-icon {
  font-size: 3rem;
}
  `
  ;


  const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  color: #e10000;
  font-size: 1.8rem;
  margin: 1rem 1rem;
  text-decoration:none;
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const clicked = () => {
    setClick(!click);
  };
  return (
    <HeaderStyled>
      <div>
      <Menu onClick={clicked}><ion-icon name={click ? 'close':'menu'}></ion-icon></Menu>
      <LinkStyled to="/"><ion-icon name="videocam-outline"></ion-icon>ACDMDb</LinkStyled> 
      </div>
      <Nav click={click} clicked={clicked}/>
      <div>
      <Button name="Log In"/>
      <Button name="Sign Up"  primary="true"/>
      </div>
    </HeaderStyled>
  );
};

export default Header;