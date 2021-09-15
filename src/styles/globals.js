import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import BackgroundImage from '../assets/background-stars.svg';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    background: ${(props) => props.theme.colors.dark_grey};
    color: ${(props) => props.theme.colors.white};
    cursor: default;
    background-image: url(${BackgroundImage});

  }
  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 8rem;
    font-weight: 500;
    line-height: 10.3rem;
    margin: 0;
  }
  h2 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 4rem;
    font-weight: 500;
    line-height: 5.2rem;
    letter-spacing: -1.5px;
  }
  h3 {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 2.6px;
  }
  h4 {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.white};
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
