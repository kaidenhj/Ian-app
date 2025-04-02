import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import colors from '../../color';

export const Button = styled.nav`
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        color: ${colors.black};
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    };
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    // background: ${colors.grey};
    height: 80px;
    display: flex;
    align-items: center;

    ${({ active }) => active && `
        transition: all 0.3s ease-in-out;
        border-bottom: 5px solid ${colors.black};
        font-weight: bold;
    `}
`;

export const NavLinks = styled(LinkScroll)`
    height: 40px;
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: ${colors.black};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
 
    &:hover {
        background: ${colors.primary};
        transition: all 0.3s ease-in-out;
        font-weight: 900;
        color: ${colors.white};
    };
`;




