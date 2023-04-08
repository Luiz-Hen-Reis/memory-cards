import { createGlobalStyle } from "styled-components";

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
    }
    html {
        font-size: 62.50%;
        scroll-behavior: smooth;
        line-height: 1.7;
    }
`;
