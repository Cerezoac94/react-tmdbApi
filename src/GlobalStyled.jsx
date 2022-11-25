import { createGlobalStyle } from "styled-components";
const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body, #root{
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    height: 100vh;
    color: white;
    font-family: 'DM Sans', sans-serif;
}
`;
export default GlobalStyled;