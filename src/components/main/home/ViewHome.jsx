import React from "react";
import styled from "styled-components";
import HeroContainer from "./HeroContainer";
import NewestHomeContainer from "./NewestHomeContainer";
import PopularHomeContainer from "./PopularHomeContainer";
import TopRatedHomeContainer from "./TopRatedHomeContainer";

const Container = styled.div``;

const Home = () => {
	return (
		<Container>
			<HeroContainer />
			<PopularHomeContainer />
			<NewestHomeContainer />
			<TopRatedHomeContainer />
		</Container>
	);
};

export default Home;
