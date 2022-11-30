import styled from "styled-components";

const FormContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    label {
        width: 100%;
      display: block;
      font-size: 1.5rem;
      margin-top: 10px;
    }
    input {
        width: 100%;
      display: block;
      height: 30px;
    }
    div{
        display: flex;
    }
    button{
    width: 100%;
    background-color: #D9251D;
    border: none;
    color: white;
    padding: .6rem .8rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.3rem;
    border-radius: .6rem;
    margin: 0 .4rem;
    }
  }
`;

export default FormContainer;