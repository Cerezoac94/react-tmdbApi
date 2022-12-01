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
justify-content:space-between;
 }

 div{
  width:fit-content;
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