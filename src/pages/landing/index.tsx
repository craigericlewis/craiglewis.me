import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgContainer = styled.div`
  left: 0;
`;

const Landing = () => {
  return (
    <Container>
      <div>
        <ImgContainer />
        <ImgContainer />
        <ImgContainer />
      </div>
      <div></div>
    </Container>
  );
};

export default Landing;