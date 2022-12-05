import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyled = styled.footer`
 display: flex;
 flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 25vh;
  background-color: var(--colorFooter);

  .rrss{
    width: 15rem;
    display: flex;
    justify-content: space-between;
    @media (min-width: 720px) {width: 20rem;}
  }
  span{
    width: 4rem;
    height: 4rem;
    font-size: 4rem;
    @media (min-width: 720px) {
      width: 5rem;
    height: 5rem;
    font-size: 5rem;
    }
  }
`


const NavStyled = styled.nav`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 width: 25rem;
  @media (min-width: 720px) {
    width: 40rem;
  }
`;


const LinkStyled = styled(Link)`
  
  text-align: left;
  color: #BABABA;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  text-decoration: none;
  margin: 0 10px;
  @media (min-width: 720px) {
    width: initial;
    
  }
  :hover{
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="rrss">
        <span><ion-icon name="logo-facebook"></ion-icon></span>
        <span><ion-icon name="logo-instagram"></ion-icon></span>
        <span><ion-icon name="logo-twitter"></ion-icon></span>
      </div>
    <NavStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/contact-us">Contact Us</LinkStyled>
      <LinkStyled to="/support">Support</LinkStyled>
      <LinkStyled to="/terms-of-use">Terms of Use</LinkStyled> 
      <LinkStyled to="/privacy-policy">Privacy Policy</LinkStyled>
    </NavStyled>
    <h3>© 2020-2022 ACDMDb.com, inc.</h3>
    </FooterStyled>
  )
}

export default Footer