import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import { favContext } from "../../../Context/FavContext";

const SectionStyled = styled.section`
	position: relative;
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	

	.backContainer {
		position: absolute;
		opacity: 0.3;
		width: 100%;
		height: 100%;
	}
	.backContainer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.poster {
		display: flex;
    justify-content: center;
		width: 80%;
		@media (min-width: 720px) {
		width: 40%;
		margin: 0 1rem 0 2rem;
		}
	}

	.poster::after{
		content: "";
		height: 100%;
		right: 0;
		left: 0;
		bottom: 0;
		position: absolute;
		border-radius: 0.5rem;
		background-image:linear-gradient(to bottom,rgb(50,50,50, .1),rgb(0,0,0)); 
		@media (min-width: 720px) {
			position: static;
			content: none;
			
		}
	}


	.poster img {
		width: 100%;
		object-fit: cover;

		@media (min-width: 580px) {
			width: 40rem;
		}

		@media (min-width: 710px) {
			width: 80%;
		}
		/* height: 90%; */
	}

	.info {
		position: relative;
		z-index: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media (min-width: 720px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	}
	.info article {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 70%;
		height: 85%;
		@media (min-width: 580px) {
			width: 38rem;
		}
		@media (min-width: 720px) {
			justify-content: center;
			position: static;
			width: 60%;
			height: 85%;
		}
	}

	h2 {
		font-size: 2.5rem;
		@media (min-width: 720px) {
			font-size: 4rem;
		}
	}
	h3 {
		font-size: 0.9rem;
		color: #bababa;
		@media (min-width: 720px) {
			font-size: 1.5rem;
		}
	}

	.releases {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		
		font-size: 1rem;
		@media (min-width: 720px) {
			width: 95%;
			font-size: 1.2rem;
			margin: 2rem 2rem 2rem 0;
		}
		@media (min-width: 920px) {
			width: 85%;
			font-size: 1.5rem;
		}
	}

	.clasDate {
		width: max-content;
		display: flex;
		align-items: center;
	}
	.clasification {
		
		padding: 0.3rem;
		border: 1px solid #bababa;
		border-radius: 3px;
		color: #bababa;
		margin-right: 1rem;}
	

	.genres {
		margin: 1rem;
	}
	.genres span {
		padding: 1rem;
	}

	/* .rating {
		margin: 3rem;
	} */
	.rating {
		width: 4rem;
		margin: 0 auto;
		@media (min-width: 720px) {
			width: 5rem;
			margin: initial;
			margin-bottom: 2rem;
		}
	}

	h4,
	p {
		font-size: 1rem;
		@media (min-width: 720px) {
			font-size: 1.5rem;
		}
	}

	.CircularProgressbar {
		width: 100%;
		vertical-align: middle;
	}

	.CircularProgressbar .CircularProgressbar-path {
		stroke: #00b3ff;
		transition: stroke-dashoffset 0.5s ease 0s;
	}

	.CircularProgressbar .CircularProgressbar-trail {
		stroke: #bababa;
	}

	.CircularProgressbar .CircularProgressbar-text {
		fill: #ffffff;
		font-size: 2rem;
		dominant-baseline: middle;
		text-anchor: middle;
	}
`;

const Movie = ({ movie }) => {
	const { addToFav, fav } = useContext(favContext);
	const [isFav, setIsFav] = useState(false);
	//   console.log(fav);
	// let ifFav = fav.findIndex(f => f.id === movie.id)}
	const clicked = () => {
		// if(ifFav >= 0) {

		//   addToFav({...movie})
		// }else{
		//   setIsFav(!isFav)
		// }

		setIsFav(!isFav);
	};
	useEffect(() => {
		isFav && addToFav({ ...movie, isFav });
		// if(fav.some((f => f.isFav === true))){
		//   setIsFav(true)
		// }else{
		//   setIsFav(false)
		// }
	}, [isFav]);

	return (
		<SectionStyled>
			<figure className="backContainer">
				<img
					src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
					alt={movie.title}
				/>
			</figure>
			<div className="info">
				<figure className="poster">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
						alt={movie.title}
					/>
				</figure>
				<article>
					<h2>{movie.title}</h2>
					<h3>{movie.tagline}</h3>

					<div className="releases">
						<div className="clasDate">
							<label className="clasification">
								{movie?.releases?.countries[0]?.certification}
							</label>
							<label>{movie?.release_date}</label>
						</div>

						<div className="genres">
							{movie?.genres?.map((e, key) => (
								<span key={key}>{e.name}</span>
							))}
						</div>
						<span onClick={clicked} className="outline">
							<ion-icon name={isFav ? "heart" : "heart-outline"}></ion-icon>
						</span>
					</div>
					<div className="rating">
						<CircularProgressbar
							value={`${movie?.vote_average * 10}`}
							text={`${`${movie?.vote_average * 10}`}%`}
						/>
					</div>
					<div className="content">
						<h4>OVERVIEW</h4>
						<p>{movie.overview}</p>
					</div>
				</article>
			</div>
		</SectionStyled>
	);
};

export default Movie;
