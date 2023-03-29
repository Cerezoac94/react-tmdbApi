import React from "react";
import genreContainer from "./genreContainer";
import styled from "styled-components"
import { Link } from "react-router-dom";

const SectionStyled = styled.section`
display: flex;
margin-bottom:2rem;
width: 100%;
@media (min-width: 720px) {
  /* margin-right: 1rem; */
    width: 40rem;
  }
  @media (min-width: 760px) {
    width: 45rem;
  }
  @media (min-width: 920px) {
    width: 60rem;
  }
  @media (min-width: 1100px) {
    width: 68rem;
  }
  @media (min-width: 1880px) {
    width: 60%;
	}

img{
  width: 15rem;
  margin-right: 1.5rem;
  @media (min-width: 720px) {
    width: 17rem;
margin-right: 2rem;
  }
  @media (min-width: 920px) {
width: 20rem;
}



}

section div{
  display: flex;
  flex-wrap: wrap;
}

h2 {

  font-size: 2rem;
  @media (min-width: 500px) {
    font-size: 2.5rem;
  }
  @media (min-width: 920px) {
  font-size: 3rem;
}
}

label, span {
font-size: 1rem;
color: #BABABA;
margin-right: 1rem;
@media (min-width: 500px) {
  font-size: 1.2rem;
  margin: 1rem 1rem 2rem 0;
}
}
.genres {
  margin: 2rem 1rem 0 0;
}
span{
  background-color: #D9251D;
  color: white;
    padding: .3rem .5rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 1.5rem;
    margin: 1rem .5rem 0 0;
    @media (min-width: 720px) {
      padding: .5rem .8rem;
      font-size: 1.3rem;
  }
}



`;

const LinkStyled = styled(Link)`
text-decoration: none;
color: var(--colorWhite);

img:hover{
  @media (min-width: 720px) {
  transform: scale(1.05);}
}

h4,p{
  font-size: 1rem;
  
@media (min-width: 500px) {
  font-size: 1.1rem;
}
@media (min-width: 720px) {
  font-size: 1.2rem;
}
@media (min-width: 920px) {
  font-size: 1.5rem;
}
}
`;

const Movies = ({ movie }) => {

	return (
    
		<SectionStyled>
			<LinkStyled to={`/movie/${movie.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
					alt={movie.title}
				/>
			 </LinkStyled>
      <section>
      <LinkStyled to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
        <div>
        <label><ion-icon name="star-half-outline"></ion-icon>{movie.vote_average * 10}</label>
        <label><ion-icon name="calendar-clear-outline"></ion-icon>{movie.release_date?.slice(0, 4)}</label>
        </div>

        <h4>OVERVIEW</h4>
        <p>{movie.overview}</p>
        </LinkStyled>
        <div>
        {movie.genre_ids.map((genre, key) => (
          <div className="genres"  key={key}>
          <LinkStyled to={`/movies/genre/${genre}`} >
          <span>{(genreContainer[genreContainer.findIndex(p => p.id === genre)].name)}</span></LinkStyled>
          </div>
        ))}
        </div>
      </section>
		</SectionStyled>
   
	);
};

export default Movies;
