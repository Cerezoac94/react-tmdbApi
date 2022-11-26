import React from 'react'
import NowPlayingContainer from './NowPlayingContainer'
import NewestContainer from './NewestContainer';
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

const ViewNewest = () =>{
    return (
        <>
        <Info>
        <h1>Newest Movies</h1>
        <h3>As determined by IMDb Users</h3>
        </Info>
        <SectionStyled>
            
        <div>
        <NewestContainer/>
        </div>
        <div>
        <NowPlayingContainer/>
        </div>
        </SectionStyled>
        </>
      )
}

export default ViewNewest