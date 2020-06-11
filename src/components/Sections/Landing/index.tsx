import React from 'react';
import styled from 'styled-components';
import { LandingSVG } from '../../../assets/images/index';
import Text from '../../Text';
import theme from '../../../theme';
import IconContainer from '../../Socials';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const IconDivision = styled.div`
  flex-grow: 1;
  margin: auto;
`;

const TextDivision = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.turquoise};
  width: 580px;
`;

const TitleContainer = styled.div`
  padding: 0px 50px 0px 50px;
  min-width: 650px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Landing: React.FC = () => {
  const svgSize = 720;

  return (
    <Container>
      <IconDivision>
        <LandingSVG height={svgSize} width={svgSize} />
      </IconDivision>
      <TextDivision>
        <TitleContainer>
          <Text size={'30px'} color={theme.color.beige}>{`Hey! I'm`}</Text>
          <Text size={'90px'} color={theme.color.beige} as={'h1'}>
            {'Craig Lewis'}
          </Text>
          <Text size={'34px'} color={theme.color.beige}>
            {'Yet another software engineer'}
          </Text>
        </TitleContainer>
        <IconContainer margin={'0px auto 100px auto'} />
      </TextDivision>
    </Container>
  );
};

export default Landing;
