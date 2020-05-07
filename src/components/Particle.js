import React from 'react';
import { ConfettiPiece } from './ConfettiPiece';

export const Particle = ({ angle, startDistance, endDistance, children }) => {
    const convertDegreesToRadians = angle => (angle * Math.PI) / 180;

    const angleInRads = convertDegreesToRadians(angle);

    const x = Math.cos(angleInRads) * 5;
    const y = Math.sin(angleInRads) * 5;

    return (
        <ConfettiPiece />
    )
}