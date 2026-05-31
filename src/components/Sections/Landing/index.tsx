import React, {
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { ThemeContext } from 'styled-components';
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

// useLayoutEffect runs synchronously before the browser paints, so the SVG
// positions are corrected before they become visible. Fall back to useEffect
// during SSR where useLayoutEffect would emit a warning.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Landing: React.FC = () => {
  const { color: themeColors } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<State['width']>(getWindowWidth(ref));
  const [height, setHeight] = useState<State['height']>(getWindowHeight(ref));

  const setDimensions = () => {
    setWidth(getWindowWidth(ref));
    setHeight(getWindowHeight(ref));
  };

  useEffect(() => {
    window.addEventListener('resize', setDimensions);
    return () => window.removeEventListener('resize', setDimensions);
  }, []);

  useIsomorphicLayoutEffect(() => {
    setDimensions();
  }, [ref.current]);

  return (
    <Container ref={ref}>
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
    </Container>
  );
};

export default Landing;
