import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
  }

  ::-moz-selection { /* Code for Firefox */
    color: #FF6700;
    background: #FFF;
  }

  ::selection {
    color: #FF6700;
    background: #FFF;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #FF6700 #3F3D44;
  }

  *::-webkit-scrollbar{
    width: 10px;
  }

  *::-webkit-scrollbar-thumb{
    background-color: #FF6700;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-track{
    background-color: #3F3D44;
  }
`;
