import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterInternalLink, 
    FooterInternalRoute, 
    FooterExternalLink, SocialMedia, 
    SocialMediaWrap, 
    SocialIcons, 
    SocialLogo, 
    SocialIconLink, 
    WebsiteRights
} from "./footerElements";

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Links:</FooterLinkTitle>
                                <FooterInternalRoute to='/exRoute'>Ex. Route</FooterInternalRoute>
                                <FooterInternalLink onClick={() => scrollToSection('home')}>Home</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('about')}>About</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('projects')}>Projects</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('contact')}>Contact</FooterInternalLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Socials:</FooterLinkTitle>
                                <FooterExternalLink href='https://www.linkedin.com/in/kaiden-jones-16888b2b2/'>LinkedIn</FooterExternalLink>
                                <FooterExternalLink href='https://github.com/kaidenhj'>Github</FooterExternalLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo onClick={() => scrollToSection('home')}>Kaiden Jones</SocialLogo>
                            <WebsiteRights>Kaiden Jones © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='https://www.linkedin.com/in/kaiden-jones-16888b2b2/' target='_blank' aria-label='LinkedIn'>
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href='https://github.com/kaidenhj' target='_blank' aria-label='Github'>
                                    <FaGithub />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
}

export default Footer;