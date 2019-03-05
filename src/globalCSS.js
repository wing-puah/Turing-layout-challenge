import { createGlobalStyle } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const theme = {
  breakpoint: {
    mobileS: `@media only screen and (min-width: ${size.mobileS})`,
    mobileM: `@media only screen and (min-width: ${size.mobileM})`,
    mobileL: `@media only screen and (min-width: ${size.mobileL})`,
    tablet: `@media only screen and (min-width: ${size.tablet})`,
    laptop: `@media only screen and (min-width: ${size.laptop})`,
    laptopL: `@media only screen and (min-width: ${size.laptopL})`,
    desktop: `@media only screen and (min-width: ${size.desktop})`,
    desktopL: `@media only screen and (min-width: ${size.desktop})`
  },
  palette: {
    body: '#171717',
    border: '#f7f7f7',
    bgHover: '#fcfcfc',
    muted: '#999999',
  }
};

export { theme }

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }

  @font-face {
    font-family: 'Gordita';
    src: url('./fonts/GorditaRegular.ttf') format('ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Gordita';
    src: url('./fonts/GorditaMedium.ttf') format('ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Gordita';
    src: url('./fonts/GorditaBold.ttf') format('ttf');
    font-weight: 900;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Gordita, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  div {
    font-family: Gordita;
  }

  h1, h2, h3 {
    font-weight: 500;
    margin: 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 400;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto auto;
    grid-template-areas:
      'header'
      'sidebar'
      'main';

    ${props => props.theme.breakpoint.tablet} {
      grid-template-columns: [row-1-start] 240px [row-1-end] 1fr 80px [row-end];
      grid-template-rows: 80px auto;
      grid-template-areas:
        'header header header'
        'sidebar main  main';
    }
  }

  nav.header {
    grid-area: header;
  }

  aside {
    grid-area: sidebar;
  }

  section {
    grid-area: main;
  }

  .animate {
    transition: all 0.6s ease-in-out;
  }

  .animate--fast {
    transition: all 0.4s ease-in-out;
  }

  .text--uppercase {
    text-transform: uppercase;
  }
`;

export default GlobalStyle;
