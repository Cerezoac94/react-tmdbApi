import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

const SectionStyled = styled.section`
	width: 100%;
	height: 90vh;
	position: relative;
	overflow: hidden;

	.info {
		position: absolute;
		width: 60%;
		bottom: 8rem;
		margin-left: 4rem;
	}
	h2 {
		font-size: 1.5rem;
		@media (min-width: 720px) {
			font-size: 2.5rem;
		}
		@media (min-width: 950px) {
			font-size: 3rem;
		}
	}

	h3 {
		font-size: 0.8rem;
		color: var(--colorGray);
		@media (min-width: 720px) {
			font-size: 1.3rem;
		}
		@media (min-width: 950px) {
			font-size: 1.5rem;
		}
	}



  .rating {
    position:absolute;
		width: 4rem;
    bottom: 5rem;
    right:8rem;
		/* margin: 0 auto; */
    /* z-index:1; */
		@media (min-width: 720px) {
			width: 8rem;
			margin: initial;
			margin-bottom: 2rem;
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

const LinkStyled = styled(Link)`
	text-decoration: none;
	color: var(--colorWhite);



`;

const SwiperStyled = styled(Swiper)`
	position: static;
	.swiper-slide img {
		display: block;
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}

	.swiper-container {
		width: 100%;
	}

	.swiper-pagination {
		bottom: 2rem;
		padding-bottom: 10px;
	}

	.swiper-wrapper {
		padding-inline-start: 0;
	}

	.swiper-pagination .swiper-pagination-bullet {
		opacity: 1;
		border: white solid 1px;
		background-color: transparent;
	}
	.swiper-pagination .swiper-pagination-bullet-active {
		background-color: white;
		width: 1.2rem;
		height: 1.2rem;
	}
`;

const Hero = ({ movies }) => {
	return (
		// <>
		<SectionStyled>
			<SwiperStyled
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}autoplay={{ delay: 4000 }}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper"
			>
				{movies.map((movie, key) => {
					return (
						<SwiperSlide key={key}>
							<LinkStyled to={`/movie/${movie.id}`}>
								<figure>
									<img
										src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
										alt={movie.title}
									/>
								</figure>
								<div className="info">
									<h2>{movie.title}</h2>
									<h3>{movie.overview}</h3>
								</div>
								<div className="rating">
									<CircularProgressbar
										value={`${movie?.vote_average * 10}`}
										text={`${`${movie?.vote_average * 10}`}%`}
									/>
								</div>
							</LinkStyled>
						</SwiperSlide>
					);
				})}
			</SwiperStyled>
		</SectionStyled>
		// </>
	);
};

export default Hero;
