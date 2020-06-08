import React from 'react';
import styled from 'styled-components';
import IconHolder from './IconHolder';
import {Resume} from '../../assets/resume'

const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

const linkedinClick = () => {
  window.open('https://www.linkedin.com/in/craig-eric-lewis/', '_blank');
}

const githubClick = () => {
  window.open('https://github.com/craigericlewis', '_blank');
}

const emailClick = () => {
  window.location = "mailto:celewis@uwaterloo.ca" as Location;
}

const openResume = () => {
  window.open(Resume)
}

const IconContainer = () => {
  return (
    <Container>
      <IconHolder onClick={linkedinClick} fill={'#ae6466'} sideLength={45} name={'linkedin'}/>
      <IconHolder onClick={githubClick} fill={'#ae6466'} sideLength={45} name={'github'}/>
      <IconHolder onClick={emailClick} fill={'#ae6466'} sideLength={45} name={'email'}/>
      <IconHolder onClick={openResume} fill={'#ae6466'} sideLength={45} name={'resume'}/>
    </Container>
  );
};

export default IconContainer;
