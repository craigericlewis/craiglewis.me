import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Popin from './Popin';

interface Props {
  color: string;
  popinEnabled?: boolean;
  title?: string;
  description?: string;
  setSvgHovered?: (arg0: boolean) => void;
  onClick?: () => void;
  textColor: string;
  popinText: string;
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
  width: 100%;
  flex: 1 1 0px;
`;

const InnerContainer = styled.div`
  margin: 90px 0px 90px 0px;
`;

const Description = styled(Text)`
  width: 80%;
  max-width: 500px;
  margin: 0 auto 60px;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const Subsection: React.FC<Props> = ({
  color,
  popinEnabled,
  title,
  description,
  children,
  setSvgHovered,
  onClick,
  textColor,
  popinText,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const getWindowWidth = () => {
    return ref.current ? ref.current.offsetWidth : 1200;
  };
  const [width, setWidth] = useState<State['width']>(getWindowWidth());
  const [isHovered, setIsHovered] = useState<State['isHovered']>(false);

  const setHovered = (isHovered: boolean) => {
    if (setSvgHovered !== undefined) {
      setSvgHovered(isHovered);
    }
    setIsHovered(isHovered);
  };

  const containerOnClick = () => {
    if (onClick !== undefined) {
      onClick();
    }
  };

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWidth(getWindowWidth());
  }, [ref.current]);

  return (
    <Container
      color={color}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => containerOnClick()}
      ref={ref}
    >
      {popinEnabled && (
        <Popin text={popinText} width={width} isHovered={isHovered} />
      )}
      <InnerContainer>
        <Text
          as={'h2'}
          align={'center'}
          color={textColor}
          size={'50px'}
          bold={true}
          lineHeight={'1.3em'}
          transform={isHovered ? 'translate3D(0, -6px, 0)' : 'translateZ(0)'}
          transitionDuration={'0.3s'}
        >
          {title}
        </Text>
        {children}
        <Description
          size={'16px'}
          align={'center'}
          color={textColor}
          lineHeight={'1.9em'}
          transform={isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'}
          transitionDuration={'0.3s'}
        >
          {description}
        </Description>
      </InnerContainer>
    </Container>
  );
};

export default Subsection;
