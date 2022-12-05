import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionStyled = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	background-color: transparent;
	border-radius: 1rem;
	margin-bottom: 5rem;
	@media (min-width: 720px) {
		padding: 4rem 3rem;
	}

	h1 {
		margin: 0 0 2rem 2rem;
		font-size: 2rem;
		@media (min-width: 720px) {
			font-size: 2.3rem;
		}
	}
	h3 {
		margin: 0 2rem 2rem 0;
		font-size: 1rem;
		color: var(--colorRed);
		@media (min-width: 720px) {
			font-size: 1.5rem;
		}
	}

	.poster {
		width: 50%;
		padding: 1rem;
		background-color: transparent;
		position: relative;
		@media (min-width: 720px) {
			width: 33.3%;
		}
	}
	.first {
		display: none;
		position: relative;
		@media (min-width: 720px) {
			display: block;
			width: calc(100% - 33.3%);
			padding: 1rem;
		}
	}


	.poster:hover,
	.first:hover {
		@media (min-width: 720px) {
			transform: scale(1.03);
		}
	}
`;

const LinkStyled = styled(Link)`
	text-decoration: none;
	color: var(--colorWhite);
	
	h3:hover {
		@media (min-width: 720px) {
			transform: scale(1.05);
		}
	}
	figure{
		
		width: 100%;
		height: 100%;
		position:relative;
	}

	figure::after{
		content: "";
		height: 100%;
		right: 0;
		left: 0;
		bottom: 0;
		position: absolute;
		border-radius: 0.5rem;
		background-image:linear-gradient(to bottom,rgb(50,50,50, .1),rgb(0,0,0)); 
	}

	figure:hover:after{
		@media (min-width: 720px) {
		display: none;
	}
	}


	img {
		width: 100%;
		height: 100%;
		margin-right: 1rem;
		border-radius: 0.5rem;
		position: relative;
		@media (min-width: 720px) {
			width: 100%;
		}
	}

	.info {
		width: 90%;
		position: absolute;
		bottom: 2.5rem;
		left: 1.5rem;
		
		@media (min-width: 720px) {
		bottom: 5rem;
		left: 2rem;
		}

		div{
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
	h2 {
		font-size: 1.5rem;
		@media (min-width: 720px) {
		font-size: 2.5rem;
	}
	@media (min-width: 950px) {
		font-size: 3.5rem;
	}
	}
	label {
		color: var(--colorGray);
		font-size: 1rem;
		@media (min-width: 720px) {
		font-size: 1.7rem;
		}
	}
`;

const HeaderSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const MoviesHomeList = (props) => {
	return (
		<SectionStyled>
			<HeaderSection>
				<div>
					{props.name != "Top-Rated" ? (
						<h1>{props.name}</h1>
					) : (
						<h1>Top Rated</h1>
					)}
				</div>
				<div>
					<LinkStyled to={`/movies/${props.name.toLowerCase()}`}>
						<h3>View More</h3>
					</LinkStyled>
				</div>
			</HeaderSection>
			{props.movies.map((movie, key) => {
				return (
					<div className={key === 0 ? "first" : "poster"} key={key}>
						<LinkStyled to={`/movie/${movie.id}`}>
						<figure>
							<img
								src={`https://image.tmdb.org/t/p/${
									key != 0
										? `w500${movie?.poster_path}`
										: `w780${movie?.backdrop_path}`
								}`}
								alt={movie.title}
							/>
							</figure>
							<section className="info">
								<h2>{movie.title}</h2>
								<div>
									<label>
										<ion-icon name="star-half-outline"></ion-icon>
										{movie.vote_average * 10}
									</label>
									<label>
										<ion-icon name="calendar-clear-outline"></ion-icon>
										{movie.release_date.slice(0, 4)}
									</label>
								</div>
							</section>
						</LinkStyled>
					</div>
				);
			})}
		</SectionStyled>
	);
};

export default MoviesHomeList;
