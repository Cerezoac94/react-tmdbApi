import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --backgroundColor: #1e1e1e;
    --colorWhite: white;
    --colorGray: #BABABA;
    --colorRed: #D9251D;
    --colorFooter: #2E2E2E;
}

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
    background-color: var(--backgroundColor);
    height: 100vh;
    color: var(--colorWhite);
    font-family: 'DM Sans', sans-serif;
}
body{
    position: relative;
}
`;
export default GlobalStyled;