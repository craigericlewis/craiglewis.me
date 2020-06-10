import React from 'react';
import styled from 'styled-components';
import Subsection from './Subsection';
import Text from '../../components/Text';

interface Props {
  title: string;
}

interface State {
  width: number;
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
  return window.innerWidth > 600 ? '160px' : '18vw'
}

const caculateTitleMargin = () => {
  return window.innerWidth > 600 ? '-140px' : '-15.5vw'
}

const Content: React.FC<Props> = ({ title }) => {
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
      <Subsection color={'#3bab87'}></Subsection>
    </OuterContainer>
  );
};

export default Content;
