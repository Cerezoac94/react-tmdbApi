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
		padding:4rem 3rem; 
		
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
		color: #d9251d;
		@media (min-width: 720px) {
			font-size: 1.3rem;
		}
	}

  .poster{
  width: 50%;
 	padding: 0.5rem;
 	background-color: transparent;

 	@media (min-width: 720px) {
 		width:33.3%;
    
 	}
}
  .first{
    display: none;
    @media (min-width: 720px) {
      display: block;
       width: calc(100% - 33.3%);
       padding: 0.5rem;
     }
    }

     img {
		width: 100%;
		height: 100%;
		margin-right: 1rem;
		@media (min-width: 720px) {
			width: 100%;
		}
	}
`;



	

const TitleSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;



const MoviesHomeList = (props) => {
	return (
		<SectionStyled>
			<TitleSection>
				<div>
					{props.name != "Top-Rated" ?
					<h1>{props.name}</h1> : <h1>Top Rated</h1>}
				</div>
				<div>
				<Link to={`/movies/${props.name.toLowerCase()}`}>
					<h3>View More</h3>
					</Link>
				</div>
			</TitleSection>
			{props.movies.map((movie, key) => {

				return (
					
					<div className={key === 0 ? "first" : "poster"} key={key}>
						<Link to={`/movie/${movie.id}`}>
						
          <img
							src={`https://image.tmdb.org/t/p/${key!=0 ? `w500${movie?.poster_path}`:`w780${movie?.backdrop_path}`}`}
							alt={movie.title}
						/>
						<section>
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
						</Link>
					</div>
					
				);
			})}
		</SectionStyled>
	);
};

export default MoviesHomeList;
