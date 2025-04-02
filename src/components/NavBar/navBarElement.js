import styled from 'styled-components';
import colors from '../../color';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`

    background: rgb(255, 255, 255);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    align-items: center;
`;

export const NavLogo = styled(LinkScroll)`
    height: 50px;
    border-radius: 50px;
    white-space: nowrap;
    padding: 5px 16px;
    color: ${colors.black};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-left: 25px;
    text-decoration: none;

    &:hover {
        background: ${colors.primary};
        color: ${colors.white};
        transition: 0.2s all ease-in-out;
`;

export const NavSignin = styled.div`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: ${colors.black};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${colors.primary};
        color: #fff;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;