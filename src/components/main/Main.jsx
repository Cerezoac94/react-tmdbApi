import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 90%;
    margin: 0 auto;
`

const Main = () => {
  return (
    <MainStyled>
        <Outlet/>
    </MainStyled>
  )
}

export default Main