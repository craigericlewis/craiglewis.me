import React from 'react';
import styled from 'styled-components';
import IconHolder from './IconHolder';
import { Resume } from '../../assets/resume';
import { themeConstants } from '../../theme/constants';

const Container = styled.div<Props>`
  display: flex;
  margin: ${({ margin }) => margin};
`;

const linkedinClick = () => {
  window.open('https://www.linkedin.com/in/craig-eric-lewis/', '_blank');
};

const githubClick = () => {
  window.open('https://github.com/craigericlewis', '_blank');
};

const emailClick = () => {
  window.location.href = 'mailto:celewis@uwaterloo.ca';
};

const openResume = () => {
  window.open(Resume);
};

interface Props {
  margin: string;
}

const IconContainer: React.FC<Props> = ({ margin }) => (
  <Container margin={margin}>
    <IconHolder
      onClick={linkedinClick}
      fill={themeConstants.color.lightBlue}
      sideLength={45}
      name={'linkedin'}
    />
    <IconHolder
      onClick={githubClick}
      fill={themeConstants.color.lightBlue}
      sideLength={45}
      name={'github'}
    />
    <IconHolder
      onClick={emailClick}
      fill={themeConstants.color.lightBlue}
      sideLength={45}
      name={'email'}
    />
    <IconHolder
      onClick={openResume}
      fill={themeConstants.color.lightBlue}
      sideLength={45}
      name={'resume'}
    />
  </Container>
);

export default IconContainer;
