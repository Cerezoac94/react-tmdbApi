import React from "react";
import genreContainer from "./genreContainer";
import styled from "styled-components"

const SectionStyled = styled.section`
display: flex;
/* margin-bottom:2rem; */
width: 100%;
background-color: #3D3D3D;
@media (min-width: 720px) {
    width: 30rem;
    /* height: calc(100vh - 20vh); */
  }`

const ImgStyled = styled.img`
width: 9rem;
margin-right: 1rem;
`;


const NowPlaying = ({ movie }) => {
	return (
		<SectionStyled>
			<ImgStyled
				src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
				alt={movie.title}
			/>
			<section>
				<h2>{movie.title}</h2>
				<label>
					<ion-icon name="calendar-clear-outline"></ion-icon>
					{movie.release_date.slice(0, 4)}
				</label>
        <div>
        {movie.genre_ids.map((genre, key) => (
          <span key={key}>{(genreContainer[genreContainer.findIndex(p => p.id === genre)].name)}</span>
        ))}
        </div>
			</section>
		</SectionStyled>
	);
};

export default NowPlaying;
