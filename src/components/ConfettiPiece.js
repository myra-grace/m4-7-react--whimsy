import React from 'react';
import styled from 'styled-components';

import { Particle } from './Particle';

export const ConfettiPiece = ({ angle, distance, color }) => {
    return (
        <CenteredWithinParent>
            <Particle 
                angle={angle} 
                startDistance={distance * 2}
                endDistance={distance}
            >
                <Circle 
                style={{
                    width: 10,
                    height: 10,
                    background: color,
                }}
                />
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
    border-radius: 50%;
`;