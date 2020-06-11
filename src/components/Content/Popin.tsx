import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';

interface Props {
  text: string;
  isHovered: boolean;
  width: number;
}

interface ContainerProps {
  isHovered: boolean;
  width: number;
}

const TextContainer = styled(Text)`
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div<ContainerProps>`
  width: 150px;
  height: ${({ isHovered }) => (isHovered ? '80px' : '0px')};
  background-color: black;
  display: flex;
  align-items: center;
  margin-left: ${({ width }) => width - 200}px;
  position: absolute;
  transition: height 0.2s linear;
  -webkit-transition: height 0.2s linear;
  -ms-transition: height 0.2s linear;
  -o-transition: height 0.2s linear;
  -moz-transition: height 0.2s linear;
`;

const Popin: React.FC<Props> = ({ text, width, isHovered }) => {
  return (
    <Container isHovered={isHovered} width={width}>
      {isHovered && (
        <TextContainer size={'14px'} align={'center'} color={'white'}>
          {text}
        </TextContainer>
      )}
    </Container>
  );
};

export default Popin;
