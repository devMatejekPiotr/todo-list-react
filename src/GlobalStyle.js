import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }
    
    body {
        width: 80vw;
        max-width: 850px;
        font-family: "Montserrat", sans-serif;
        background-color: ${({ theme }) => theme.colors.grey};
        word-break: break-word;
        padding-top: 40px;
        margin: 0 auto;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        body {
        width: 90vw;
        }
    }
  `;
