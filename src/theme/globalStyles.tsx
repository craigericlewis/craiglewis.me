import { createGlobalStyle } from 'styled-components';
import { themeConstants } from './constants';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${themeConstants.color.beige}
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
