import React from 'react';
import styled from 'styled-components';
import {
  MouseSVG,
  ControllerSVG,
  PenSVG,
  NotebookSVG,
  KeyboardSVG,
} from '../../../assets/images/index';
import Text from '../../Text';
import theme from '../../../theme';
import IconContainer from '../../Socials';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin-bottom: 200px;
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
  min-width: 650px;
  margin-top auto;
  margin-bottom: auto;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const LandingNotebook = styled(NotebookSVG)<SVGProps>`
  transform: rotate(-45deg);
  position: absolute;
  margin-left: ${({ width }) => width - 600}px;
  top: -380px;
  width: 900px;
  height: 1025px;
`;

const LandingKeyboard = styled(KeyboardSVG)<SVGProps>`
  position: absolute;
  width: 1250px;
  height: 1250px;
  transform: rotate(45deg);
  margin-left: -600px;
  margin-top: ${({ height }) => height - 850}px;
`;

const LandingController = styled(ControllerSVG)<SVGProps>`
  position: absolute;
  width: 700px;
  height: 700px;
  transform: rotate(-45deg);
  margin-top: ${({ height }) => height - 500}px;
  margin-left: ${({ width }) => width - 500}px;
`;

const LandingMouse = styled(MouseSVG)<SVGProps>`
  position: absolute;
  width: 700px;
  height: 700px;
  transform: rotate(135deg);
  margin-top: -200px;
  margin-left: -180px;
`;

interface SVGProps {
  width?: number;
  height?: number;
}

interface State {
  width: number;
  height: number;
}

const Landing: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const getWindowWidth = () => {
    return ref.current ? ref.current.offsetWidth : 1920;
  };
  const getWindowHeight = () => {
    return ref.current ? ref.current.offsetHeight : 1080;
  };

  const [width, setWidth] = React.useState<State['width']>(getWindowWidth());
  const [height, setHeight] = React.useState<State['height']>(
    getWindowHeight()
  );

  React.useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
      setHeight(getWindowHeight());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setWidth(getWindowWidth());
    setHeight(getWindowHeight());
  }, [ref.current]);

  return (
    <Container ref={ref}>
      <LandingNotebook width={width} />
      <LandingKeyboard height={height} />
      <LandingController width={width} height={height} />
      <LandingMouse />
      <TitleContainer>
        {/* <Text size={'30px'} color={theme.color.black}>{`Hey! I'm`}</Text> */}
        <Text size={'120px'} color={theme.color.black} as={'h1'}>
          {'Craig Lewis'}
        </Text>
        <Text size={'34px'} color={theme.color.black}>
          {'Yet another software engineer'}
        </Text>
        <IconContainer
          margin={'20px auto 100px auto'}
          iconPadding={'0px 9px 0px 9px'}
          size={45}
          fill={theme.color.black}
          hoverFill={theme.color.mediumBlue}
        />
      </TitleContainer>
      {/* <IconDivision>
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
        <IconContainer
          margin={'0px auto 100px auto'}
          iconPadding={'0px 9px 0px 9px'}
          size={45}
        />
      </TextDivision> */}
    </Container>
  );
};

export default Landing;
