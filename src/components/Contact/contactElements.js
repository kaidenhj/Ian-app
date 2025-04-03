import styled from 'styled-components'
import colors from '../../color'

export const InfoContainer = styled.div`
    color : #fff;
    background: ${({lightBg}) => (lightBg ? colors.tan : colors.white )};
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
 
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 960px;
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
    margin-bottom: 10px;
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
    margin-bottom: 10px;
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

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 10%;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-items: center;
        align-content: center;
        width: 35%; // Full width on smaller screens
        height: 35%;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        justify-content: center;
        display: flex;
        align-items: center;
        transition: all 0.2s ease
    }
`


export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Form = styled.form` 
        background: #010101;
        max-width: 600px;
        height: auto;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding: 80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.9);

        @media screen and (max-width: 400px) {
            padding: 32px 32px;
        }
`

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormH2 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px; 
    font-size: 14px;
    color: #fff;    
`

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #63d2ff;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span` 
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`

export const FormTextArea = styled.textarea`
    resize: none;
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    height: 120px;
`
