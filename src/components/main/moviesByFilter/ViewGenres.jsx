import React from 'react'
import NowPlayingContainer from './NowPlayingContainer'
import GenresMoviesContainer from './GenresMoviesContainer'
import Styled from "styled-components"

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

const ViewGenres = () => {
  return (
    <>
    <Info>
    <h1>Movies by Genre</h1>
    <h3></h3>
    </Info>
    <SectionStyled>
        
    <div>
    <GenresMoviesContainer/>
    </div>
    <div>
    <NowPlayingContainer/>
    </div>
    </SectionStyled>
    </>
  )
}

export default ViewGenres