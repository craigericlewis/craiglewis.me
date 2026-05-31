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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap"
    />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:type" content="website" />
  </RtHelmet>
);

export default Helmet;
