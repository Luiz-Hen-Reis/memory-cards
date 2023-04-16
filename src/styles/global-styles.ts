import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        box-sizing: border-box;
        background-color: ${theme.colors.federalBlue};
    }
    html {
        font-size: 62.50%;
        scroll-behavior: smooth;
        line-height: 1.7;
        font-family: ${theme.font.family.default};
        color: ${theme.colors.mintCream};
    }
    a, button {
    all: unset;
  }
`;
