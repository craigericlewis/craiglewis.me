import React from 'react';

import PageWrapper from '../components/PageWrapper';
import LandingSection from './landing';
import Content from '../components/Content';

const IndexPage: React.FC = () => (
  <PageWrapper title={'Craig Lewis'}>
    <LandingSection />
    <Content title={'Work.'} />
  </PageWrapper>
);
export default IndexPage;
