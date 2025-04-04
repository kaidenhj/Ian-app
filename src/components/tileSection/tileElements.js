import styled from 'styled-components'
import colors from '../../color'

export const InfoContainer = styled.div`
    color : ${colors.white};
    background: ${({lightBg}) => (lightBg ? colors.tan : colors.black)};
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
 
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px; // Add some breathing room on mobile
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {    
        grid-template-areas: 
            'col1'
            'col2'; 
        grid-template-columns: 1fr;
    }`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    justify-content: center;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%; // Full width on mobile
        padding: 0 10px; // Less padding for mobile
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    justify-content: center;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%; // Full width on mobile
        padding: 0 10px; // Less padding for mobile
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading = styled.h1`
    color: ${colors.black};
    margin-bottom: 18px;
    margin-top: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const SubTitle = styled.p`
    white-space: pre-line;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? colors.black : colors.white)};

    @media screen and (max-width: 768px) {
        font-size: 16px; // Adjust subtitle font size for small screens
    }
`


export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        justify-content: center; // Center button on small screens
    }
` 

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 10%;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-items: center;
        align-content: center;
        width: 50%; // Full width on smaller screens
        height: 50%;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;@media screen and (max-width: 768px) {
        justify-content: center;
        display: flex;
        align-items: center;
        transition: all 0.2s ease
        max-width: 25%; // Full width on smaller screens
        max-height: 25%;
    }
`