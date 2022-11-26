import React from 'react'
import NowPlayingContainer from './NowPlayingContainer'
import PopularContainer from './PopularContainer'
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

const ViewPopular = () => {
  return (
    <>
    <Info>
    <h1>Most Popular Movies</h1>
    <h3>As determined by IMDb Users</h3>
    </Info>
    <SectionStyled>
        
    <div>
    <PopularContainer/>
    </div>
    <div>
    <NowPlayingContainer/>
    </div>
    </SectionStyled>
    </>
  )
}

export default ViewPopular