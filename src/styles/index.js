import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }
`;

export const colors = {
    primary: "#f5f5f5",
    secondary: "#f5f5f5",
    tertiary: "#f5f5f5",
}
