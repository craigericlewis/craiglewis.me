import { Size } from '../types/Size';

export const themeConstants = {
  color: {
    black: '#252525',
    white: '#fff',
    beige: '#fefbf5',
    turquoise: '#224A54',
    lightBlue: '#98bec8',
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
