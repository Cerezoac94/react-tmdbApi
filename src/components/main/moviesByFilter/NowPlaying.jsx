import React from "react";
import genreContainer from "./genreContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionStyled = styled.section`
	display: flex;
	width: 100%;
	background-color: #3d3d3d;
	padding: 1rem;
	border-radius: 1rem;
	@media (min-width: 720px) {
		flex-direction: column;
		width: 24rem;
		height: calc(100vh - 2vh);
	}
	@media (min-width: 980px) {
		width: 30rem;
	} 
	@media (min-width: 1880px) {
			width: 100%;
	}

	img {
		width: 70%;
		margin-right: 1rem;
		@media (min-width: 720px) {
			width: 9.5em;
		}
		@media (min-width: 980px) {
			width: 8.5rem;
		}
		@media (min-width: 1180px) {
			width: 30%;
		}
	}

	section div {
		display: none;
		@media (min-width: 720px) {
			display: flex;
			flex-wrap: wrap;
		}
	}

	section label {
		display: none;
		@media (min-width: 720px) {
			display: flex;
		}
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		@media (min-width: 720px) {
			writing-mode: horizontal-tb;
			transform: rotate(0);
		}
		@media (min-width: 1880px) {
			font-size: 4rem;
	}
	}
	h3 {
		font-size: 0.8rem;
		margin-top: -6rem;
		width: 70%;
		background-color: rgb(61, 61, 61, 0.5);
		@media (min-width: 720px) {
			width: 100%;
			margin-top: 0;
			font-size: 1.5rem;
			background-color: transparent;
		}
		@media (min-width: 1880px) {
			font-size: 3rem;
	}
	}

	label,
	span {
		font-size: 1rem;
		color: #bababa;
		margin: 1rem 1rem 2rem 0;
		@media (min-width: 1880px) {
			font-size: 2rem;
	}
	}
	span {
		background-color: #d9251d;
		color: white;
		padding: 0.2rem 0.5rem;
		text-align: center;
		font-size: 0.8rem;
		border-radius: 1.5rem;
		margin: 2rem 0.5rem 0 0;
		@media (min-width: 720px) {
			margin: .1rem 0.3rem 0 0;
		}
		@media (min-width: 800px) {
			margin: .8rem 0.5rem 0 0;
			
		}
		@media (min-width: 950px) {
			margin: 2rem 0.5rem 0 0;
		}
		@media (min-width: 1880px) {
			padding: 0.6rem 1rem;
			font-size: 1.8rem;
		}
	}
	
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 720px) {
		flex-direction: row;
		margin-bottom: 1rem;
	}
`;

const LinkStyled = styled(Link)`
text-decoration: none;
color: var(--colorWhite);
`

// const ImgStyled = styled.img`
// 	width: 7.6rem;
// 	margin-right: 1rem;
// `;

const NowPlaying = ({ movies }) => {
	return (
		<SectionStyled>
			<h2>Latest</h2>

			{movies.map((movie, key) => (
				<LinkStyled to={`/movie/${movie.id}`} key={key}>
				<Content >
					<img
						src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
						alt={movie.title}
					/>
					<section>
						<h3>{movie.title}</h3>
						<label>
							<ion-icon name="calendar-clear-outline"></ion-icon>
							{movie.release_date.slice(0, 4)}
						</label>
						<div>
							{movie.genre_ids.map((genre, key) => (
								<span key={key}>
									{
										genreContainer[
											genreContainer.findIndex((p) => p.id === genre)
										].name
									}
								</span>
							))}
						</div>
					</section>
				</Content>
				</LinkStyled>
			))}
		</SectionStyled>
	);
};

export default NowPlaying;
