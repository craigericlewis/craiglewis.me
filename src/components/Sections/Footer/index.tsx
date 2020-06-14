import React, { useState } from 'react';
import styled from 'styled-components';
import Content from '../../Content';
import { Me } from '../../../assets/images';
import Text from '../../Text';
import Socials from '../../Socials';
import theme from '../../../theme';

interface State {
  isHovered: boolean;
}

const SubsectionContainer = styled.div`
  display: flex;
`;

const SubFooter = styled.div`
  background-color: ${({ color }) => color};
  cursor: pointer;
  width: 100%;
  flex: 1 1 0px;
`;

const MyPicture = styled.img`
  height: 580px;
  object-fit: cover;
  overflow-x: hidden;
  object-position: left;
  flex: 1 1 0px;
`;

const Email = styled(Text)`
  margin: 50px;
`;

const Divider = styled.div`
  display: block;
  position: relative;
  height: 3px;
  background-color: white;
  width: 60px;
  right: 0;
  margin: 60px auto 30px;
  transform: scaleX(0.8);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-left: 0;
  right: initial;
  margin-left: 50px;
  transform: scaleX(1);
`;

const Description = styled(Text)`
  max-width: 60%;
  margin: 0 0 2em;
  margin-left: 50px;
`;

const Name = styled(Text)`
  margin-left: 50px;
`;

const emailClick = () => {
  if (typeof window !== 'undefined') {
    window.location.href = 'mailto:celewis@uwaterloo.ca';
  }
};

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState<State['isHovered']>(false);
  return (
    <Content title={'Say Hi.'}>
      <SubsectionContainer>
        <SubFooter color={theme.color.darkBlue}>
          <Email
            color={theme.color.white}
            align={'left'}
            size={'60px'}
            bold={true}
            underline={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => emailClick()}
          >
            {'celewis'}
            <br />
            {'@uwaterloo.ca'}
          </Email>
          <Divider />
          <Description
            color={theme.color.white}
            size={'16px'}
            lineHeight={'1.9em'}
          >
            {"If I'm not feeding in League of Legends "}
            {'or engrossed in an obsure indie game, '}
            {'you can probably find me tinkering around '}
            {'in some random code base.'}
          </Description>
          <Name color={theme.color.white} size={'18px'} lineHeight={'1.9em'}>
            {'Craig Eric Lewis'}
          </Name>
          <Socials
            margin={'30px 0px 0px 40px'}
            iconPadding={'0px 5px 0px 5px'}
            size={30}
            fill={theme.color.beige}
            hoverFill={theme.color.lightBlue}
          />
        </SubFooter>
        <MyPicture src={Me} />
      </SubsectionContainer>
    </Content>
  );
};

export default Footer;
