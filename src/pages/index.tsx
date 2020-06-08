import React, { useState, useEffect } from "react";

import PageWrapper from "../components/PageWrapper";
import LandingSection from "./landing";

const IndexPage = () => {
//   const [FeaturedSection, setFeaturedSection] = useState<React.FC | null>(null);
//   const [AboutSection, setAboutSection] = useState<React.FC | null>(null);
//   const [ShowcaseSection, setShowcaseSection] = useState<React.FC | null>(null);
//   const [FooterSection, setFooterSection] = useState<React.FC | null>(null);

//   useEffect(() => {
//     const loadComponents = async () => {
//       const featuredSection = await importFeatured();
//       setFeaturedSection(featuredSection);

//       const aboutSection = await importAbout();
//       setAboutSection(aboutSection);

//       const showcaseSection = await importShowcase();
//       setShowcaseSection(showcaseSection);

//       const footerSection = await importFooter();
//       setFooterSection(footerSection);
//     };

//     loadComponents();
//   }, []);

  return (
    <PageWrapper>
      <LandingSection />
    </PageWrapper>
  );
};

export default IndexPage;