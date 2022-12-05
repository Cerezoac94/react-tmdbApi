import React,{useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userContext } from "../../Context/UserContext";


const NavStyled = styled.nav`
  position: absolute;
  top: 10vh;
  left: ${(props) => (props.show ? "0" : "-50rem")};
  padding-left: 1.5rem;
  transition: left 700ms ease;
  width: 20rem;
  background-color: #1e1e1e;
  z-index: 2;
  @media (min-width: 720px) {
    padding: 0;
    position: static;
    width: initial;
    background-color: transparent;
  }
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: left;
  color: #BABABA;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  text-decoration: none;
  @media (min-width: 720px) {
    width: initial;
    margin: 0 10px;
    font-size: 2rem;
  }
  :hover{
    color: #ffffff;
  }
`;

const Nav = ({ click, clicked }) => {
  const {user}=useContext(userContext)
  return (
    <NavStyled show={click} onClick={clicked}>
      <LinkStyled to="/movies/popular">Popular</LinkStyled>
      <LinkStyled to="/movies/Newest">Newest</LinkStyled>
      <LinkStyled to="/movies/top-rated">Top Rated</LinkStyled>
      <LinkStyled to="/genres">Genres</LinkStyled> {/*Esto mostrara una lista de generos, posterior a esto, el genero seleccionado mostrará la vista de peliculas de ese genero, similar a ver un detalle de pelicula */}
      {user && <LinkStyled to="/movies/favorite">Favorites</LinkStyled>}
      
      
    </NavStyled>
  )
};

export default Nav;