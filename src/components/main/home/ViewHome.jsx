import React from 'react'
import styled from 'styled-components'
import NewestHomeContainer from './NewestHomeContainer'
import PopularHomeContainer from './PopularHomeContainer'
import TopRatedHomeContainer from './TopRatedHomeContainer'

const Container = styled.div`

`


const Home = () => {
  
  return (
    <Container>
    <PopularHomeContainer/>
    <NewestHomeContainer/>
    <TopRatedHomeContainer/>
    </Container>
  )
}

export default Home