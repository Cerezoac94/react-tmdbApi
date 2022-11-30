// import React from "react";
// import styled from "styled-components";

// const SectionStyled = styled.section`
// display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-auto-rows: 7rem;
//     gap: 1rem;
//     align-content: center;
// margin-bottom:2rem;
// width: 45%;
// @media (min-width: 720px) {
//     width: 20rem;
//   }
//   @media (min-width: 920px) {
//     width: 25rem;
//   }
// `;

// const MoviesHome = ({ movie, id }) => {
//   console.log(id);
// 	return (
// 		<SectionStyled>
// 			<img
// 				src={id === 0 ? `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}` : `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
// 				alt={movie.title}
// 			/>

// 			<section>
// 				<h2>{movie.title}</h2>
// 				<div>
// 					<label>
// 						<ion-icon name="star-half-outline"></ion-icon>
// 						{movie.vote_average * 10}
// 					</label>
// 					<label>
// 						<ion-icon name="calendar-clear-outline"></ion-icon>
// 						{movie.release_date.slice(0, 4)}
// 					</label>
// 				</div>
// 			</section>
// 		</SectionStyled>
// 	);
// };

// export default MoviesHome;
