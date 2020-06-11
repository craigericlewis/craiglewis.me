import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Landing from '../components/Sections/landing';
import Work from '../components/Sections/Work';
import Footer from '../components/Sections/Footer';

const IndexPage: React.FC = () => (
  <PageWrapper title={'Craig Lewis'}>
    <Landing />
    {/* <Work /> */}
    <Footer />
  </PageWrapper>
);
export default IndexPage;
