// External libraries
import { createGlobalStyle } from 'styled-components'

// Styled
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 93.75%;
    }
  }

  body {
    background: ${theme.colors.gray_900};
    color: ${theme.colors.white};
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`
