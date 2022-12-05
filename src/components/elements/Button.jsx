import React from 'react'
import styled from "styled-components";

const ButtonStyled = styled.button`
    width: max-content;
    background-color: ${(props) => (props.primary ? "#D9251D": "transparent")};
    border: .1rem solid #D9251D;
    color: white;
    padding: .5rem .6rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.1rem;
    border-radius: .6rem;
    margin: 0 .1rem;
    @media (min-width: 720px) {
 margin: 0 .4rem;
 font-size: 1.3rem;
 padding: .6rem .8rem;
    }
  
    
`;

const Button = (props) => {
  return (
    <ButtonStyled primary={props.primary}>{props.name}
    </ButtonStyled>
  )
}

export default Button