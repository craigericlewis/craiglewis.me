import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Popin from './Popin';
import { Size } from '../../types/Size';

interface Props {
  color: string;
}

interface State {
  isHovered: boolean;
  width: number;
}

interface ContainerProps {
  color: string;
}

const Container = styled.div<ContainerProps>`
  height: 580px;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

const InnerContainer = styled.div`
  margin: 90px 0px 90px 0px;
`;

const Subsection: React.FC<Props> = ({ color, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const getWindowWidth = () => {
    return ref.current ? ref.current.offsetWidth : 1200;
  };
  const [width, setWidth] = React.useState<State['width']>(getWindowWidth());
  const [isHovered, setIsHovered] = React.useState<State['isHovered']>(false);

  React.useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setWidth(getWindowWidth());
  }, [ref.current]);

  return (
    <Container
      color={color}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      <Popin text={'Read More'} width={width} isHovered={isHovered} />
      <InnerContainer>
        <Text
          as={'h2'}
          align={'center'}
          color={'white'}
          size={'46px'}
          lineHeight={Size.XLARGE}
        >
          {'Postmates'}
        </Text>
        {children}
        <Text size={'16px'} align={'center'} color={'white'}>
          {'As a Software Engineer Intern at Postmates'}
        </Text>
      </InnerContainer>
    </Container>
  );
};

export default Subsection;
