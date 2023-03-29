import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { userContext } from "../../Context/UserContext";
import Nav from "./Nav";
import logo from "../../assets/Logo.png"

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 1rem;
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
  color: var(--colorRed);
  font-size: 1.8rem;
  margin: .5rem .5rem;
  text-decoration:none;
  @media (min-width: 720px) {
    margin: 1rem 1rem;
  }
  img{ width: 12rem;
    @media (min-width: 720px) {
    width: 17rem;
  }
  }
`;

const Header = () => {
  const {user} = useContext(userContext)
  const [click, setClick] = useState(false);
  const clicked = () => {
    setClick(!click);
  };
  return (
    <HeaderStyled>
      <div>
      <Menu onClick={clicked}><ion-icon name={click ? 'close':'menu'}></ion-icon></Menu>
      <LinkStyled to="/"><img src={logo} alt="Logo" /></LinkStyled> 
      </div>
      <Nav click={click} clicked={clicked}/>
      {!user && <div className="buttons">
      <LinkStyled to="/login"><Button name="Log In"/></LinkStyled>
      <LinkStyled to="/signup"><Button name="Sign Up"  primary="true"/></LinkStyled>
      </div>}
      {user && <div>
      <LinkStyled to="/logout">Log Out</LinkStyled>
      </div>}
    </HeaderStyled>
  );
};

export default Header;