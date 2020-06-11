import React from 'react';
import styled from 'styled-components';
import Content from '../../Content';
import Subsection from '../../Content/Subsection';
import theme from '../../../theme';
import { PostmatesSVG } from '../../../assets/images';

const StyledPostmates = styled(PostmatesSVG)<PostmatesProps>`
  width: 200px;
  margin: 50px auto 50px auto;
  display: block;
  transform: ${({ isHovered }) =>
    isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'};
  transition-duration: 0.3s;
`;

interface PostmatesProps {
  isHovered: boolean;
}

const postmatesClick = () => {
  window.open(
    'https://www.forbes.com/sites/warrenshoulberg/2019/12/12/old-navy-sails-into-deliveries-with-postmates/#37ab3e9276f9',
    '_blank'
  );
};

const Work = () => {
  const [isHovered, setIsHovered] = React.useState<PostmatesProps['isHovered']>(
    false
  );
  return (
    <Content title={'Co-ops.'}>
      <Subsection
        color={theme.color.red}
        title={'Postmates'}
        description={
          'As a Software Engineer Intern at Postmates I worked with third parties like Old Navy to enable delivery fulfilled through Postmates fleet'
        }
        popinEnabled={true}
        setSvgHovered={setIsHovered}
        onClick={postmatesClick}
      >
        <StyledPostmates isHovered={isHovered} />
      </Subsection>
    </Content>
  );
};

export default Work;
