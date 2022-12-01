import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SectionStyled = styled.section`
display: flex;
flex-direction: column;
width: 15rem;
margin-bottom: 1rem;
padding: 1rem;

img{
  width: 100%;
}

`

const Favorites = ({movie}) => {
  // return (
  //   <SectionStyled>
  //   <Link to={`/movie/${movie.id}`}>
  //     <img
  //       src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
  //       alt={movie.title}
  //     />
  //    </Link>
  //     <h2>{movie.title}</h2>
  // </SectionStyled>
  // )
  
  
  if (movie === 0) {return <h2>You don't have favorites yet</h2> }
    return (
      <SectionStyled>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie.title}
        />
       </Link>
        <h2>{movie.title}</h2>
    </SectionStyled>
    ) 
}

export default Favorites