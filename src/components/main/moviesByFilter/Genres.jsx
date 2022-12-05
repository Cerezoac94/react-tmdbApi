import genreContainer from "./genreContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionStyled = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	.genre {
		width: 9rem;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--colorRed);
		border-radius: 1rem;

		@media (min-width: 600px) {
			width: 15rem;
			height: 8rem;
		}
	}

  .genre:hover{
    transform: scale(1.2);
    background-color: var(--colorRed);
  }

	span {
		font-size: 1rem;
		@media (min-width: 600px) {
			font-size: 2rem;
		}
	}
`;

const LinkStyled = styled(Link)`
	width: fit-content;
	text-decoration: none;
	color: var(--colorWhite);
	margin: .8rem;
  @media (min-width: 720px) {
    margin: 2rem;
  }
`;



const Genres = () => {
	console.log(genreContainer);
	return (
		<SectionStyled>
			{genreContainer.map((genre, key) => (
				<LinkStyled to={`/movies/genre/${genre.id}`} key={key}>
					<div className="genre">
						<span>{genre.name}</span>
					</div>
				</LinkStyled>
			))}
		</SectionStyled>
	);
};

export default Genres;
