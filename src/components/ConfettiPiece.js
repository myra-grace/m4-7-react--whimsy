import React from 'react';
import styled from 'styled-components';

import { Particle } from './Particle';

export const ConfettiPiece = ({ angle, distance, color }) => {
    return (
        <CenteredWithinParent>
            <Particle angle={angle} distance={distance}>
                <Circle />
            </Particle>
        </CenteredWithinParent>
    )
};

const CenteredWithinParent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = styled.div`
    bacground-color: red;
    border-radius: 50%;
`;