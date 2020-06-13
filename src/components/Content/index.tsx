import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';

interface Props {
  title: string;
}

interface TitleProps {
  titleMargin: string;
}

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 240px;
  max-width: 1200px;
  width: 90%;
`;

const Title = styled.div<TitleProps>`
  position: absolute;
  margin-top: ${({ titleMargin }) => titleMargin};
`;

const Content: React.FC<Props> = ({ title, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const calculateTitleSize = () => {
    return ref.current && ref.current.offsetWidth > 540 ? '160px' : '18vw';
  };

  const caculateTitleMargin = () => {
    return ref.current && ref.current.offsetWidth > 540 ? '-140px' : '-15.5vw';
  };

  const [titleSize, setTitleSize] = useState(calculateTitleSize());
  const [titleMargin, setTitleMargin] = useState(caculateTitleMargin());

  useEffect(() => {
    function handleResize() {
      setTitleSize(calculateTitleSize());
      setTitleMargin(caculateTitleMargin());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setTitleSize(calculateTitleSize());
    setTitleMargin(caculateTitleMargin());
  }, [ref.current]);

  return (
    <OuterContainer ref={ref}>
      <Title titleMargin={titleMargin}>
        <Text size={titleSize} as={'h2'}>
          {title}
        </Text>
      </Title>
      {children}
    </OuterContainer>
  );
};

export default Content;
