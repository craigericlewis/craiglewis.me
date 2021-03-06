import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Content from '../../Content';
import Subsection from '../../Content/Subsection';
import { PostmatesSVG, VidyardSVG, GoogleSVG } from '../../../assets/images';

interface SVGProps {
  isHovered: boolean;
}

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
  width: 200px;
  margin: 50px auto 50px auto;
  display: block;
  transform: ${({ isHovered }) =>
    isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'};
  transition-duration: 0.3s;
`;

const StyledGoogle = styled(GoogleSVG)<SVGProps>`
  width: 150px;
  height: 150px;
  margin: 50px auto 50px auto;
  display: block;
  transform: ${({ isHovered }) =>
    isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'};
  transition-duration: 0.3s;
`;

const postmatesClick = () => {
  window.open(
    'https://www.forbes.com/sites/warrenshoulberg/2019/12/12/old-navy-sails-into-deliveries-with-postmates/#37ab3e9276f9',
    '_blank'
  );
};

const googleClick = () => {
  window.open('https://github.com/google/resultstoreui', '_blank');
};

const vidyardClick = () => {
  window.open('https://www.vidyard.com/', '__blank');
};

const Work: React.FC = () => {
  const { color: themeColors } = useContext(ThemeContext);
  const [postmatesHovered, setPostmatesHovered] = useState<
    SVGProps['isHovered']
  >(false);
  const [vidyardHovered, setVidyardHovered] = useState<SVGProps['isHovered']>(
    false
  );
  const [googleHovered, setGoogleHovered] = useState<SVGProps['isHovered']>(
    false
  );

  return (
    <Content title={'Work.'}>
      <Subsection
        color={themeColors.peach}
        title={'Google'}
        description={
          'I designed and implemented a web service to search, parse and visualize metrics associated with tests run on Google hardware'
        }
        popinEnabled={true}
        setSvgHovered={setGoogleHovered}
        onClick={googleClick}
        textColor={'black'}
        popinText={'View Project'}
      >
        <StyledGoogle isHovered={googleHovered} />
      </Subsection>
      <Subsection
        color={themeColors.red}
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
        color={themeColors.lighterBlue}
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
