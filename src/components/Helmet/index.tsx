import React, { useMemo } from 'react';
import { Helmet as RtHelmet } from 'react-helmet';

const seoDescription =
  'Personal website of Craig Lewis, computer science student at the University of Waterloo';

export interface HelmetProps {
  pageTitle?: string;
  description?: string;
}

const Helmet: React.FC<HelmetProps> = ({
  pageTitle,
  description = seoDescription,
}) => {
  return (
    <RtHelmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
    </RtHelmet>
  );
};

export default Helmet;
