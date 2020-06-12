import React from 'react';
import styled from 'styled-components';
import Content from '../../Content';
import Subsection from '../../Content/Subsection';
import theme from '../../../theme';
import { PostmatesSVG, VidyardSVG } from '../../../assets/images';

const StyledPostmates = styled(PostmatesSVG)<SVGProps>`
  width: 200px;
  margin: 50px auto 50px auto;
  display: block;
  transform: ${({ isHovered }) =>
    isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'};
  transition-duration: 0.3s;
  fill: white;
`;

const StyledVidyard = styled(VidyardSVG)<SVGProps>`
  margin: 50px auto 50px auto;
  width: 200px;
  transform: ${({ isHovered }) =>
    isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'};
  transition-duration: 0.3s;
  display: block;
`;

interface SVGProps {
  isHovered: boolean;
}

const postmatesClick = () => {
  window.open(
    'https://www.forbes.com/sites/warrenshoulberg/2019/12/12/old-navy-sails-into-deliveries-with-postmates/#37ab3e9276f9',
    '_blank'
  );
};

const vidyardClick = () => {
  window.open('https://www.vidyard.com/', '__blank');
};

const Work = () => {
  const [postmatesHovered, setPostmatesHovered] = React.useState<
    SVGProps['isHovered']
  >(false);
  const [vidyardHovered, setVidyardHovered] = React.useState<
    SVGProps['isHovered']
  >(false);
  return (
    <Content title={'Co-ops.'}>
      <Subsection
        color={theme.color.red}
        title={'Postmates'}
        description={
          'As a Software Engineer Intern at Postmates I worked with third parties like Old Navy to enable retail delivery fulfilled through Postmates fleet'
        }
        popinEnabled={true}
        setSvgHovered={setPostmatesHovered}
        onClick={postmatesClick}
        textColor={'white'}
        popinText={'Read More'}
      >
        <StyledPostmates isHovered={postmatesHovered} />
      </Subsection>
      <Subsection
        color={theme.color.lighterBlue}
        title={'Vidyard'}
        description={
          "During my time at Vidyard I assisted in the migration of our video player by building out core features including the player's sharing, embed and playlist controls"
        }
        popinEnabled={true}
        setSvgHovered={setVidyardHovered}
        onClick={vidyardClick}
        textColor={'black'}
        popinText={'View Project'}
      >
        <StyledVidyard isHovered={vidyardHovered} />
      </Subsection>
    </Content>
  );
};

export default Work;
