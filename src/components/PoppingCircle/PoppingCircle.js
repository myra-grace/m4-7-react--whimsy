import React from 'react';
import styled, { keyframes } from 'styled-components';


const PoppingCircle = ({size, color}) => {
    return <Wrapper style={{ width: size, height: size, background: color }} />
};



//------------------------------ STYLES ------------------------------

const size = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const color = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    display: block;
    border-radius: 50%;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${color} 500ms ease-in forwards, ${size} 300ms ease-in forwards;
    }

    @media (prefers-reduced-motion: reduce) {
        display: none;
    }
`;

//------------------------------ EXPORTS ------------------------------
export default PoppingCircle;