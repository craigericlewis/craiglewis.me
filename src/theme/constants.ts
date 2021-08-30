import { Size } from '../types/Size';

export const themeConstants = {
  color: {
    black: '#252525',
    white: '#fff',
    beige: '#fefbf5',
    turquoise: '#224A54',
    lightBlue: '#98bec8',
    lighterBlue: '#d3e1e1',
    darkBlue: '#1f4954',
    green: '#3bab87',
    red: '#B14240',
    peach: '#e9c3b8',
    mediumBlue: '#006097',
    grey: '#707789',
    forestGreen: '#34a853',
    darkGrey: '#555a66',
    cream: '#fdf0ec',
    grayishBlue: '#DFE3EE',
    midnightBlue: '#98BEC8',
    yellow: '#FFEE99',
  },
  fontSize: {
    [Size.XSMALL]: 16,
    [Size.SMALL]: 18,
    [Size.MEDIUM]: 22,
    [Size.LARGE]: 26,
    [Size.XLARGE]: 42,
  },
  lineHeight: {
    [Size.XSMALL]: 1.1,
    [Size.SMALL]: 1.1,
    [Size.MEDIUM]: 1.2,
    [Size.LARGE]: 1.3,
    [Size.XLARGE]: 1.3,
  },
  fontFamily: {
    heading: 'Overpass, sans-serif',
    body: 'Roboto, sans-serif',
  },
};
