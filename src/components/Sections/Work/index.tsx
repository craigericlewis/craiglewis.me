import React from 'react';
import Content from '../../Content';
import Subsection from '../../Content/Subsection';
import theme from '../../../theme';

const Work = () => {
  return (
    <Content title={'Work.'}>
      <Subsection
        color={theme.color.green}
        title={'Postmates'}
        description={'As a Software Engineer Intern at Postmates'}
      ></Subsection>
    </Content>
  );
};

export default Work;
