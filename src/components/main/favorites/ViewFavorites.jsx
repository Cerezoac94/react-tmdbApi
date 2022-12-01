import React from "react";
import styled from "styled-components";
import FavoritesList from "./FavoritesList";

const SectionStyled = styled.section`
	

	h1 {
		font-size: 2rem;
		margin: 1rem 0;
	}
    .container {
        display: flex;
	flex-wrap: wrap;
	justify-content: center;
    }

`;

const ViewFavorites = () => {
	return (
		<SectionStyled>
			<h1>Favorites</h1>
            <div className="container">
				<FavoritesList />
            </div>
		</SectionStyled>
		
	);
};

export default ViewFavorites;
