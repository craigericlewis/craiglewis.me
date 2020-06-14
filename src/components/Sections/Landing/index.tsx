import React, { useContext, useState, useEffect, useRef } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Pacman from 'react-spinners/PacmanLoader';
import {
  MouseSVG,
  ControllerSVG,
  PenSVG,
  NotebookSVG,
  KeyboardSVG,
} from '../../../assets/images/index';
import Text from '../../Text';
import IconContainer from '../../Socials';
import { deviceBreakpoints } from '../../../theme/breakpoints';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin-bottom: 200px;
`;

const LandingIconContainer = styled.div`
  position: absolute;
  z-index: 0;
`;

const TitleContainer = styled.div`
  // min-width: 650px;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: absolute;
`;

const LandingNotebook = styled(NotebookSVG)<SVGProps>`
  transform: rotate(-45deg);
  position: absolute;
  margin-left: ${({ width }) => width - 600}px;
  top: -380px;
  width: 900px;
  height: 1025px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 600px;
    height: 725px;
    margin-left: ${({ width }) => width - 400}px;
    top: -280px;
  `}

  ${({ theme }) => theme.mediaQueries.xlMobile`
    width: 300px;
    height: 425px;
    margin-left: ${({ width }) => width - 200}px;
    top: -175px;
  `}
`;

const LandingKeyboard = styled(KeyboardSVG)<SVGProps>`
  position: absolute;
  width: 1250px;
  height: 1250px;
  transform: rotate(45deg);
  margin-left: -600px;
  margin-top: ${({ height }) => height - 850}px;

  ${({ theme, width }) => theme.mediaQueries.medium`
    width: 950px;
    height: 950px;
    margin-left: -500px;
    top: 150px;
  `}

  ${({ theme }) => theme.mediaQueries.xlMobile`
    width: 450px;
    height: 450px;
    margin-left: -250px;
    top: 520px;
  `}
`;

const LandingController = styled(ControllerSVG)<SVGProps>`
  position: absolute;
  width: 700px;
  height: 700px;
  transform: rotate(-45deg);
  margin-top: ${({ height }) => height - 500}px;
  margin-left: ${({ width }) => width - 500}px;

  ${({ theme, width }) => theme.mediaQueries.medium`
    width: 500px;
    height: 500px;
    margin-left: ${({ width }) => width - 400}px;
    top: 94px;
  `}

  ${({ theme, width }) => theme.mediaQueries.xlMobile`
    width: 200px;
    height: 200px;
    margin-left: ${({ width }) => width - 150}px;
    top: 350px;
  `}
`;

const LandingMouse = styled(MouseSVG)<SVGProps>`
  position: absolute;
  width: 700px;
  height: 700px;
  transform: rotate(135deg);
  margin-top: -200px;
  margin-left: -180px;

  ${({ theme, width }) => theme.mediaQueries.medium`
    width: 400px;
    height: 425px;
    margin-left: -100px;
    top: 100px;
  `}

  ${({ theme, width }) => theme.mediaQueries.xlMobile`
    width: 200px;
    height: 225px;
    margin-left: -51px;
    top: 150px;
  `}
`;

const LandingPen = styled(PenSVG)<SVGProps>`
  transform: rotate(45deg);
  width: 200px;
  height: 200px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 150px;
    height: 150px;
  `}

  ${({ theme }) => theme.mediaQueries.xlMobile`
    width: 80px;
    height: 80px;
  `}
`;

const Name = styled(Text)`
  font-size: 120px;
  color: ${({ theme }) => theme.color.black};
  margin: 0px;
  ${({ theme }) => theme.mediaQueries.xlMobile`
    font-size: 60px;
  `};
`;

const Subtitle = styled(Text)`
  font-size: 34px;
  ${({ theme }) => theme.mediaQueries.xlMobile`
    font-size: 20px;
  `};
`;

interface SVGProps {
  width?: number;
  height?: number;
}

interface State {
  width: number;
  height: number;
  loading: boolean;
}

const Landing: React.FC = () => {
  const { color: themeColors } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<State['loading']>(true);

  const getWindowWidth = () => {
    return ref.current ? ref.current.offsetWidth : 1920;
  };
  const getWindowHeight = () => {
    return ref.current ? ref.current.offsetHeight : 1080;
  };

  const [width, setWidth] = useState<State['width']>(getWindowWidth());
  const [height, setHeight] = useState<State['height']>(getWindowHeight());

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
      setHeight(getWindowHeight());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setWidth(getWindowWidth());
    setHeight(getWindowHeight());
  }, [ref.current]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Container ref={ref}>
      {loading && (
        <TitleContainer>
          <Pacman color={themeColors.darkGrey} size={50} />
        </TitleContainer>
      )}
      {!loading && (
        <>
          <TitleContainer>
            <Name as={'h1'}>{'Craig Lewis'}</Name>
            <Subtitle size={'34px'} color={themeColors.black}>
              {'Yet another software engineer'}
            </Subtitle>
            {deviceBreakpoints.xlMobile >= width ? (
              <IconContainer
                margin={'20px auto 0px auto'}
                iconPadding={'0px 4px 0px 4px'}
                size={30}
                fill={themeColors.black}
                hoverFill={themeColors.mediumBlue}
              />
            ) : (
              <IconContainer
                margin={'20px auto 0px auto'}
                iconPadding={'0px 9px 0px 9px'}
                size={45}
                fill={themeColors.black}
                hoverFill={themeColors.mediumBlue}
              />
            )}
            <LandingPen />
          </TitleContainer>
          <LandingIconContainer>
            <LandingNotebook width={width} />
            <LandingKeyboard height={height} />
            <LandingController width={width} height={height} />
            <LandingMouse />
          </LandingIconContainer>
        </>
      )}
    </Container>
  );
};

export default Landing;
