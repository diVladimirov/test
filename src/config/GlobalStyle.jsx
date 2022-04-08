import { css } from "@emotion/react";

const GlobalStyle = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    height: 100%;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background-color: transparent;
    cursor: pointer;
  }
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1 1 auto;
  }
`;
export default GlobalStyle;
