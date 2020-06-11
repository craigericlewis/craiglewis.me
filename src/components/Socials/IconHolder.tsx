import React from 'react';
import iconDict from '../Icon/Icons';
import styled from 'styled-components';

const IconContainer = styled.div`
  padding: 0px 9px 0px 9px;
`;

interface State {
  isHovered: boolean;
}

interface Props {
  fill: string;
  sideLength: number;
  name: string;
  onClick: () => void;
}

const IconHolder: React.FC<Props> = ({ fill, sideLength, name, onClick }) => {
  const [isHovered, setIsHovered] = React.useState<State['isHovered']>(false);
  const Icon = iconDict(fill, sideLength, name, isHovered);

  return (
    <IconContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick()}
    >
      {Icon}
    </IconContainer>
  );
};

export default IconHolder;
