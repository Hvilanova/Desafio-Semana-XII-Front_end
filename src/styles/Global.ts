import { createGlobalStyle } from './Global';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #282828
  }

  button {
    background: none;
    border: none;
    outline: none;
  }
  a {
    text-decoration: none;
    outline: none;
  }
`

export default GlobalStyle;