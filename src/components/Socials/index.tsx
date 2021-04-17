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

const linkedinURL = 'https://www.linkedin.com/in/craig-eric-lewis/';

const githubURL = 'https://github.com/craigericlewis';

const emailURL = 'mailto:celewis@uwaterloo.ca';

const Socials: React.FC<Props> = ({
  margin,
  iconPadding,
  size,
  fill,
  hoverFill,
}) => {
  return (
    <Container margin={margin}>
      <IconHolder
        url={linkedinURL}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'linkedin'}
        iconPadding={iconPadding}
      />
      <IconHolder
        url={githubURL}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'github'}
        iconPadding={iconPadding}
      />
      <IconHolder
        url={emailURL}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'email'}
        iconPadding={iconPadding}
      />
      <IconHolder
        url={Resume}
        fill={fill}
        hoverFill={hoverFill}
        sideLength={size}
        name={'resume'}
        iconPadding={iconPadding}
      />
    </Container>
  );
};

export default Socials;
