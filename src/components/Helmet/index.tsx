import React from 'react';
import { Helmet as RtHelmet } from 'react-helmet';
import {
  FaviconICO,
  Favicon32PNG,
  Favicon16PNG,
} from '../../assets/images/index';

const seoDescription =
  "Craig Lewis' personal website, computer science student at the University of Waterloo";

export interface HelmetProps {
  pageTitle?: string;
  description?: string;
}

const Helmet: React.FC<HelmetProps> = ({
  pageTitle,
  description = seoDescription,
}) => (
  <RtHelmet>
    <meta charSet="utf-8" />
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/png" sizes="32x32" href={Favicon32PNG} />
    <link rel="icon" type="image/png" sizes="16x16" href={Favicon16PNG} />
    <link rel="shortcut icon" href={FaviconICO} />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:type" content="website" />
  </RtHelmet>
);

export default Helmet;
