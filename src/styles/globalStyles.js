import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
