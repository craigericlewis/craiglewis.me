import React from 'react';
import styled from 'styled-components';
import { BaseElementProps } from '../../types/BaseElementProps';
import Helmet from '../Helmet';
import theme from '../../theme';

interface PageWrapperProps extends BaseElementProps {
  title?: string;
}

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  background-color: ${theme.color.beige};
`;

const InnerContainer = styled.div`
  position: relative;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > .PageWrapper--Heading {
    margin-bottom: 0.5em;
  }
`;

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  id,
  children,
  className,
}) => (
  <>
    <Helmet pageTitle={title} />
    <PageContainer>
      <InnerContainer className={className} id={id}>
        {children}
      </InnerContainer>
    </PageContainer>
  </>
);

export default PageWrapper;
