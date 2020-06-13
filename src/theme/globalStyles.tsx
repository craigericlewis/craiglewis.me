import { createGlobalStyle } from 'styled-components';
import { themeConstants } from './constants';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${themeConstants.color.beige};
    font-family: Roboto,sans-serif !important;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
