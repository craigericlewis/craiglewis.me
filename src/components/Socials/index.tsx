import React from 'react';
import styled from 'styled-components';
import IconHolder from './IconHolder';
import { Resume } from '../../assets/resume';

interface Props {
  margin: string;
  iconPadding: string;
  size: number;
  fill: string;
  hoverFill: string;
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

const IconContainer: React.FC<Props> = ({
  margin,
  iconPadding,
  size,
  fill,
  hoverFill,
}) => {
  return (
    <Container margin={margin}>
      <IconHolder
        onClick={linkedinClick}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'linkedin'}
        iconPadding={iconPadding}
      />
      <IconHolder
        onClick={githubClick}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'github'}
        iconPadding={iconPadding}
      />
      <IconHolder
        onClick={emailClick}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'email'}
        iconPadding={iconPadding}
      />
      <IconHolder
        onClick={openResume}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'resume'}
        iconPadding={iconPadding}
      />
    </Container>
  );
};

export default IconContainer;
