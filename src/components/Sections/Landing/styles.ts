import styled from 'styled-components';
import {
  MouseSVG,
  ControllerSVG,
  PenSVG,
  NotebookSVG,
  KeyboardSVG,
} from '../../../assets/images/index';
import Text from '../../Text';

interface SVGProps {
  width?: number;
  height?: number;
}

export interface State {
  width: number;
  height: number;
  loading: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin-bottom: 200px;
`;

export const LandingContainer = styled.div`
  animation: expand 0.8s ease forwards;
  transition: all 0.8s ease;

  @keyframes expand {
    0% {
      transform: translateX(1400px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const LandingIconContainer = styled.div`
  position: absolute;
  z-index: 0;
  height: 100vh;
`;

export const TitleContainer = styled.div`
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

export const LandingNotebook = styled(NotebookSVG)<SVGProps>`
  transform: rotate(-45deg);
  position: absolute;
  margin-left: ${({ width }) => width - 525}px;
  top: -350px;
  width: 800px;
  height: 900px;

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

export const LandingKeyboard = styled(KeyboardSVG)<SVGProps>`
  position: absolute;
  width: 1100px;
  height: 1100px;
  transform: rotate(45deg);
  margin-left: -600px;
  margin-top: ${({ height }) => height - 850}px;

  ${({ theme }) => theme.mediaQueries.medium`
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

export const LandingController = styled(ControllerSVG)<SVGProps>`
  position: absolute;
  width: 600px;
  height: 600px;
  transform: rotate(-45deg);
  margin-top: ${({ height }) => height - 450}px;
  margin-left: ${({ width }) => width - 450}px;

  ${({ theme, width, height }) => theme.mediaQueries.medium`
    width: 500px;
    height: 500px;
    margin-left: ${({ width }) => width - 400}px;
    top: 94px;
    margin-top: ${({ height }) => height - 500}px;
  `}

  ${({ theme, width }) => theme.mediaQueries.xlMobile`
    width: 200px;
    height: 200px;
    margin-left: ${({ width }) => width - 150}px;
    top: 350px;
  `}
`;

export const LandingMouse = styled(MouseSVG)<SVGProps>`
  position: absolute;
  width: 600px;
  height: 600px;
  transform: rotate(135deg);
  margin-top: -200px;
  margin-left: -160px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 400px;
    height: 425px;
    margin-left: -100px;
    top: 95px;
  `}

  ${({ theme }) => theme.mediaQueries.xlMobile`
    width: 200px;
    height: 225px;
    margin-left: -51px;
    top: 150px;
  `}
`;

export const LandingPen = styled(PenSVG)<SVGProps>`
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

export const Name = styled(Text)`
  font-size: 120px;
  color: ${({ theme }) => theme.color.black};
  margin: 0px;
  ${({ theme }) => theme.mediaQueries.xlMobile`
    font-size: 60px;
  `};
`;

export const Subtitle = styled(Text)`
  font-size: 34px;
  ${({ theme }) => theme.mediaQueries.xlMobile`
    font-size: 20px;
  `};
`;
