import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import colors from '../color'

export const Button = styled(LinkRouter)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? colors.primary : colors.black )};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? colors.black : colors.white )};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? colors.white : colors.primary )};
    }
`