import React  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav`
  position: absolute;
  top: 10vh;
  left: ${(props) => (props.show ? "0" : "-50rem")};
  transition: left 700ms ease;
  width: 20rem;
  background-color: #1e1e1e;
  @media (min-width: 720px) {
    position: static;
    width: initial;
    background-color: transparent;
  }
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: left;
  color: #e10000;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  text-decoration: none;
  @media (min-width: 720px) {
    width: initial;
    margin: 0 10px;
  }
`;

const Nav = ({ click, clicked }) => {
  return (
    <NavStyled show={click} onClick={clicked}>
      <LinkStyled to="/movies">Movies</LinkStyled>
      <LinkStyled to="/genders">Genres</LinkStyled> {/*Esto mostrara una lista de generos, posterior a esto, el genero seleccionado mostrará la vista de peliculas de ese genero, similar a ver un detalle de pelicula */}
      <LinkStyled to="/movies/favorite">Favorites</LinkStyled>
      <LinkStyled to="/contact-us">Contact Us</LinkStyled>
      
    </NavStyled>
  )
};

export default Nav;