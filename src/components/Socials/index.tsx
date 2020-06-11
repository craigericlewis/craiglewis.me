import React from 'react';
import styled from 'styled-components';
import IconHolder from './IconHolder';
import { Resume } from '../../assets/resume';
import { themeConstants } from '../../theme/constants';

interface Props {
  margin: string;
  iconPadding: string;
  size: number;
}

interface ContainerProps {
  margin: string;
}

const Container = styled.div<ContainerProps>`
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

const IconContainer: React.FC<Props> = ({ margin, iconPadding, size }) => {
  return (
    <Container margin={margin}>
      <IconHolder
        onClick={linkedinClick}
        fill={themeConstants.color.lightBlue}
        sideLength={size}
        name={'linkedin'}
        iconPadding={iconPadding}
      />
      <IconHolder
        onClick={githubClick}
        fill={themeConstants.color.lightBlue}
        sideLength={size}
        name={'github'}
        iconPadding={iconPadding}
      />
      <IconHolder
        onClick={emailClick}
        fill={themeConstants.color.lightBlue}
        sideLength={size}
        name={'email'}
        iconPadding={iconPadding}
      />
      <IconHolder
        onClick={openResume}
        fill={themeConstants.color.lightBlue}
        sideLength={size}
        name={'resume'}
        iconPadding={iconPadding}
      />
    </Container>
  );
};

export default IconContainer;
