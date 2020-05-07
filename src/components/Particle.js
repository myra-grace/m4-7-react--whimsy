import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Particle = ({ angle, children, startDistance, endDistance }) => {
    const convertDegreesToRadians = angle => (angle * Math.PI) / 180;
    const angleInRads = convertDegreesToRadians(angle);

    const startX = Math.cos(angleInRads) * startDistance;
    const startY = Math.sin(angleInRads) * startDistance;

    const endX = Math.cos(angleInRads) * endDistance;
    const endY = Math.sin(angleInRads) * endDistance;

    const positionSpring = useSpring({
        transform: `translate(${endX}px, ${endY}px) scale(0)`,
        from: {
            transform: `translate(${startX}px, ${startY}px) scale(1)`,
        },
        config: {
            tension: 100,
            friction: 10,
        },
    });
    
    const opacitySpring = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            tension: 100,
            friction: 10,
        },
    });

    return (
        <animated.div
            style={{
                ...opacitySpring,
                ...positionSpring,
            }}
        >
            {children}
        </animated.div>
    )
}