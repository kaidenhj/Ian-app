import React from "react";
import heroImage from '../../images/hero-section-img.png';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP} from "./heroElements";

const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={heroImage} type=".png" alt={"Modern home in forest."} />
            </HeroBg>
            <HeroContent>
                <HeroH1><strong>Hi,</strong> my name is Ian. </HeroH1>
                <HeroP>
                    I am a recent graduate with a degree in Architecture, passionate about designing spaces that are both functional and inspiring.
                    I have experience in architectural design, drafting, and 3D modeling using tools like AutoCAD, Revit, and Rhino.
                    I am particularly interested in sustainable architecture and urban planning, striving to create designs that harmonize with the environment.
                    My goal is to use my skills to shape spaces that are innovative, accessible, and environmentally responsible.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};
 
export default HeroSection;