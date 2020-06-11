import React from 'react';
import iconDict from '../Icon/Icons';
import styled from 'styled-components';

interface IconProps {
  iconPadding: string;
}

interface State {
  isHovered: boolean;
}

interface Props {
  fill: string;
  sideLength: number;
  name: string;
  onClick: () => void;
  iconPadding: string;
}

const IconContainer = styled.div<IconProps>`
  padding: ${({ iconPadding }) => iconPadding};
`;

const IconHolder: React.FC<Props> = ({
  fill,
  sideLength,
  name,
  onClick,
  iconPadding,
}) => {
  const [isHovered, setIsHovered] = React.useState<State['isHovered']>(false);
  const Icon = iconDict(fill, sideLength, name, isHovered);

  return (
    <IconContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick()}
      iconPadding={iconPadding}
    >
      {Icon}
    </IconContainer>
  );
};

export default IconHolder;
