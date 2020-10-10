import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroSectionElements";
import Video from "../../videos/Data.mp4";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
