import styled from "styled-components";
import colors from "../../color";
import { Link as LinkRouter } from "react-router-dom";

export const ProjectContainer = styled.div`
    color: #fff;
    background: ${colors.tan};
`;

export const Icon = styled(LinkRouter)`
    height: 45px;
    width: 250px;
    border-radius: 75px;
    white-space: nowrap;
    position: absolute;
    top: 20px; /* Adjust this value as needed */
    left: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    cursor: pointer;
    align-content: center;
    display: flex;
    justify-content: center;

    &:hover {
        background: ${colors.primary};
        color: ${colors.white};
        transition: 0.2s all ease-in-out;

    @media screen and (max-width: 480px) {
        top: 10px;
        left: 16px;
    }
`;

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-top: 80px;
`;

export const ProjectIcon = styled.img`
    align-self: center;
    justify-self: center;
    width: 60%;
    height: 90%;
    margin-bottom: 10px;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
    }
`;

export const ProjectSection = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const ProjectH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const ProjectText = styled.p`
    margin-bottom: 10px;
`;

export const ProjectColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
        grid-template-columns: 1fr;
    }
`;

export const ProjectList = styled.ul`
    list-style-type: none;
`;

export const Item = styled.li`
    margin-bottom: 10px;
`;


