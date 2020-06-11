import React from 'react';
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
  height: 580px;
  flex-direction: column;
  margin-top: 240px;
  max-width: 1200px;
  width: 90%;
`;

const Title = styled.div<TitleProps>`
  position: absolute;
  margin-top: ${({ titleMargin }) => titleMargin};
`;

const calculateTitleSize = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > 600 ? '160px' : '18vw';
  }
  return '160px';
};

const caculateTitleMargin = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > 600 ? '-140px' : '-15.5vw';
  }
  return '-140px';
};

const Content: React.FC<Props> = ({ title, children }) => {
  const [titleSize, setTitleSize] = React.useState(calculateTitleSize());
  const [titleMargin, setTitleMargin] = React.useState(caculateTitleMargin());

  React.useEffect(() => {
    function handleResize() {
      setTitleSize(calculateTitleSize());
      setTitleMargin(caculateTitleMargin());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <OuterContainer>
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
