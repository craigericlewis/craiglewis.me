import React from 'react';
import styled from 'styled-components';
import { LandingSVG } from '../../assets/images/index';
import Text from '../../components/Text';
import theme from '../../theme/index';
import IconContainer from './IconContainer';

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

const Landing: React.FC = () => (
  <Container>
    <IconDivision>
      <LandingSVG height={720} width={720} />
    </IconDivision>
    <TextDivision>
      <TitleContainer>
        <Text size={30} color={theme.color.beige}>{`Hey! I'm`}</Text>
        <Text size={90} color={theme.color.beige}>
          {'Craig Lewis'}
        </Text>
        <Text size={34} color={theme.color.beige}>
          {'Yet another software engineer'}
        </Text>
      </TitleContainer>
      <IconContainer />
    </TextDivision>
  </Container>
);

export default Landing;
