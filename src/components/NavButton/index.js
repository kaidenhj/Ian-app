import React, {useState, useEffect} from 'react';
import {MobileIcon, NavMenu, NavItem, NavLinks} from './navButtonElement';
import { FaBars } from 'react-icons/fa6';

const NavButton = ({toggle}) => {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('#home, #about, #portfolio, #contact');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.8 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleToggle = () => {
            toggle();
    };
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <MobileIcon onClick={() => { 
                handleToggle();
            }}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem active={activeSection === 'home'}>
                    <NavLinks onClick={() => scrollToSection('home')}>Home</NavLinks>
                </NavItem>
                <NavItem active={activeSection === 'about'}>
                    <NavLinks onClick={() => scrollToSection('about')}>About</NavLinks>
                </NavItem>
                <NavItem active={activeSection === 'portfolio'}>
                    <NavLinks onClick={() => scrollToSection('portfolio')}>Portfolio</NavLinks>
                </NavItem>
                <NavItem active={activeSection === 'contact'}>
                    <NavLinks onClick={() => scrollToSection('contact')}>Contact</NavLinks>
                </NavItem>
            </NavMenu>
        </>
    );
};

export default NavButton;
