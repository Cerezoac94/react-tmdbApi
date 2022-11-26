import React from 'react'
import NowPlayingContainer from './NowPlayingContainer'
import Styled from "styled-components"
import TopRatedContainer from './TopRatedContainer';

const SectionStyled = Styled.section `
display:flex;
flex-direction:column;
position:relative;

 @media (min-width: 720px) {
flex-direction:row;
justify-content:space-between
 }

`;

const Info = Styled.div`
margin-bottom:1rem;
`

const ViewTopRated = () => {
  return (
    <>
        <Info>
        <h1>Top Rated Movies</h1>
        <h3>As determined by IMDb Users</h3>
        </Info>
        <SectionStyled>
            
        <div>
        <TopRatedContainer/>
        </div>
        <div>
        <NowPlayingContainer/>
        </div>
        </SectionStyled>
        </>
  )
}

export default ViewTopRated