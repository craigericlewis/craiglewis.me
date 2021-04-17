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
  hoverFill: string;
  sideLength: number;
  name: string;
  url: string;
  iconPadding: string;
}

const IconContainer = styled.div<IconProps>`
  padding: ${({ iconPadding }) => iconPadding};
`;

const IconHolder: React.FC<Props> = ({
  fill,
  hoverFill,
  sideLength,
  name,
  url,
  iconPadding,
}) => {
  const [isHovered, setIsHovered] = React.useState<State['isHovered']>(false);
  const color = isHovered ? hoverFill : fill;
  const Icon = iconDict(color, sideLength, name, url);

  return (
    <IconContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      iconPadding={iconPadding}
    >
      {Icon}
    </IconContainer>
  );
};

export default IconHolder;
