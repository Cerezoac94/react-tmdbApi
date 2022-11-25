import React from "react";
import genreContainer from "./genreContainer";
import styled from "styled-components"

const SectionStyled = styled.section`
display: flex;
margin-bottom:2rem;
width: 100%;
@media (min-width: 720px) {
    width: 60rem;
  }


section div{
  display: flex;
  flex-wrap: wrap;
}

h2 {
  font-size: 3rem;
}

label, span {
font-size: 1.2rem;
color: #BABABA;
margin: 1rem 1rem 2rem 0;
}

span{
  background-color: #D9251D;
  color: white;
    padding: .5rem .8rem;
    text-align: center;
    font-size: 1.3rem;
    border-radius: 1.5rem;
    margin: 2rem 1rem 0 0;
}

h4,p{
  font-size: 1.5rem;
}

`;

const ImgStyled = styled.img`
width: 20rem;
margin-right: 2rem;
`;

const Movies = ({ movie }) => {

	return (
		<SectionStyled>
			
				<ImgStyled
					src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
					alt={movie.title}
				/>
			
      <section>
        <h2>{movie.title}</h2>
        <div>
        <label><ion-icon name="star-half-outline"></ion-icon>{movie.vote_average * 10}</label>
        <label><ion-icon name="calendar-clear-outline"></ion-icon>{movie.release_date.slice(0, 4)}</label>
        </div>

        <h4>OVERVIEW</h4>
        <p>{movie.overview}</p>
        <div>
        {movie.genre_ids.map((genre, key) => (
          <span key={key}>{(genreContainer[genreContainer.findIndex(p => p.id === genre)].name)}</span>
        ))}
        </div>
      </section>
		</SectionStyled>
	);
};

export default Movies;