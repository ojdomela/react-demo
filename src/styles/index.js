import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: "green",
    secondary: "#fff",
    tertiary: "#f5f5f5",
    background: "#000",
}

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding-top: 5rem;
        background-color: ${colors.background};
        color: ${colors.secondary};
        min-height: 200vh;
        position: relative;
        ${props => props.modal ? "overflow: hidden;" : ""}
    }

    html {
        font-size: 62.5%;
    }
`;
