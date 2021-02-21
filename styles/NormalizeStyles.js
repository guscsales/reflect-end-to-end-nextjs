import { createGlobalStyle } from 'styled-components';

export const NormalizeStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
