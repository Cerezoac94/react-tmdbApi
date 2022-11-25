import React from 'react'
import styled from "styled-components";

const ButtonStyed = styled.button`
    background-color: ${(props) => (props.primary ? "#D9251D": "transparent")};
    border: .1rem solid #D9251D;
    color: white;
    padding: .6rem .8rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.3rem;
    border-radius: .6rem;
    margin: 0 .4rem;

`;

const Button = (props) => {
  return (
    <ButtonStyed primary={props.primary}>{props.name}
    </ButtonStyed>
  )
}

export default Button