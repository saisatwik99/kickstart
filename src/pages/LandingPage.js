import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/LandingPageHero.js";
import Testimonial from "components/LandingPageTestinomial.js";
import SimpleWithSideImageFAQS from "components/Main-Faq.js";
import TrendingCard from "components/TrendingCard.js";
import Footer from "components/Footer.js";
import MainFeature1 from "components/LandingPageVision.js";

import mainImage from "images/Travel/main.jpg"
import secondMainImage from "images/Travel/second-main.jpg"

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  // const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Amazing & Affordable <HighlightedText>For You.</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={mainImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Let's Go"
        watchVideoButtonText="Meet Amazing.."
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to make holiday beautiful."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={secondMainImage}
        textOnLeft={false}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TrendingCard/>
      
      
      <Testimonial textOnLeft={true}/>
      <SimpleWithSideImageFAQS/>
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>travel App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
}
