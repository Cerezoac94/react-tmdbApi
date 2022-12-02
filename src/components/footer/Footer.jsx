import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
 display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  min-height: 10vh;
  background-color: blueviolet;
`

const Footer = () => {
  return (
    <FooterStyled>Footer</FooterStyled>
  )
}

export default Footer