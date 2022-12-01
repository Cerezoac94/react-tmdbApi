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
margin-bottom:2rem;
::after {
   content: "";
    display: block;
    position: relative;
    top: .8rem;
    left: -2rem;
    width: 25rem;
    height: 1px;
    margin-left: 20px;
    background-color: #FFFFFF;
    @media (min-width: 720px) {
      width: 40rem;
    }
}
h1{
  font-size:2rem;
  @media (min-width: 720px) {
  font-size:2.5rem;
}
}
h3{
  font-size:1rem;
  @media (min-width: 720px) {
  font-size:1.5rem;
  }}
}
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