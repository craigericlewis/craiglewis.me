import React, { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import Loader from 'react-spinners/ScaleLoader';
import {
  State,
  Container,
  LandingContainer,
  LandingIconContainer,
  TitleContainer,
  LandingNotebook,
  LandingKeyboard,
  LandingController,
  LandingMouse,
  LandingPen,
  Name,
  Subtitle,
} from './styles';
import Socials from '../../Socials';
import { deviceBreakpoints } from '../../../theme/breakpoints';

const getWindowWidth = (ref: React.RefObject<HTMLDivElement>) => {
  return ref.current ? ref.current.offsetWidth : 1920;
};

const getWindowHeight = (ref: React.RefObject<HTMLDivElement>) => {
  return ref.current ? ref.current.offsetHeight : 1080;
};

const Landing: React.FC = () => {
  const { color: themeColors } = useContext(ThemeContext);
  const [loading, setLoading] = useState<State['loading']>(true);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<State['width']>(getWindowWidth(ref));
  const [height, setHeight] = useState<State['height']>(getWindowHeight(ref));

  const setDimensions = () => {
    setWidth(getWindowWidth(ref));
    setHeight(getWindowHeight(ref));
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.addEventListener('resize', setDimensions);
    return () => window.removeEventListener('resize', setDimensions);
  }, []);

  useEffect(() => {
    setDimensions();
  }, [ref.current]);

  return (
    <Container ref={ref}>
      {/* {loading ? (
        <TitleContainer>
          <Loader color={themeColors.black} />
        </TitleContainer>
      ) : ( */}
        <LandingContainer>
          <TitleContainer>
            <Name as={'h1'}>{'Craig Lewis'}</Name>
            <Subtitle size={'34px'} color={themeColors.black}>
              {'Yet another software engineer'}
            </Subtitle>
            {deviceBreakpoints.xlMobile >= width ? (
              <Socials
                margin={'20px auto 0px auto'}
                iconPadding={'0px 4px 0px 4px'}
                size={30}
                fill={themeColors.black}
                hoverFill={themeColors.mediumBlue}
              />
            ) : (
              <Socials
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
        </LandingContainer>
      {/* )} */}
    </Container>
  );
};

export default Landing;
