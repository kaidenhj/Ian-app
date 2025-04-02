

import React, { useEffect, useState } from 'react';
import { Nav, NavContainer, NavLogo, NavSignin, NavBtnLink } from './navBarElement';
import NavButton from '../NavButton'; 

const NavBar = ({ toggle }) => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = Math.min(scrollY / 120, 1); // Gradually increase opacity up to 1
            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Nav opacity={scrollOpacity}>
            <NavContainer>
                <NavLogo onClick={toggleHome}>
                    <h1>Ian Denshaw</h1>
                </NavLogo>
                <NavButton toggle={toggle} />
                <NavSignin>
                    <NavBtnLink to='/resume'>Resume</NavBtnLink>
                </NavSignin>
            </NavContainer>
        </Nav>
    );
};

export default NavBar;

