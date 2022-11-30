import React from "react";
import styled from "styled-components";
// import CircularProgress from "react-native"

const SectionStyled = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	/* background-color: #563001; */
	width: 100%;
	height: 90vh;

	.backContainer {
		position: absolute;
		opacity: 0.3;
		width: 100%;
		height: 100%;
		/* background-color: antiquewhite; */
	}
	.backContainer img {
		width: 100%;
		height: 100%;
		background-size: cover;
	}

	.poster {
		width: 40%;
	}
	.poster img {
		width: 80%;
		/* height: 90%; */
	}

	.info {
		z-index: 1;
		width: 90%;
		display: flex;
		align-items: center;
		/* background-color: transparent; */
	}
	.info article {
		width: 60%;
		height: 85%;
		/* display: flex;
		flex-direction: column;
		justify-content: space-between; */
		/* align-content: space-between; */
	}

  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.5rem;
    color: #BABABA;
  }
.releases{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:2rem 2rem 2rem 0;
  font-size: 1.5rem;
}

  .clasification {
    padding: .3rem;
    border: 1px solid #BABABA;
    border-radius: 3px;
    color: #BABABA
    ;
  }

  .genres span{
    padding: 1rem;
  }


  .rating{
    margin: 3rem;
  }
`;

const Movie = ({ movie }) => {
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
						<label className="clasification">
							{movie?.releases?.countries[0]?.certification}
						</label>
						<label>{movie?.release_date?.slice(0, 4)}</label>
						<div className="genres">
            {movie?.genres?.map((e, key) => (
							<span key={key}>{e.name}</span>
						))}
            </div>
						<span className="filled">
							<ion-icon name="heart"></ion-icon>
						</span>
						<span className="outline">
							<ion-icon name="heart-outline"></ion-icon>
						</span>
					</div>

					<div className="rating">
						<label>{`${movie?.vote_average * 10}`}</label>
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
