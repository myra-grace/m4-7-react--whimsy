import React from 'react';
import { useSpring, animated } from 'react-spring';


const ScaleIn = ({ children }) => {
    const movement = useSpring({
        transform: 'scale(1)',
        from: {
            transform: 'scale(0)',
        },
        config: {
            tension: 200,
            friction: 12,
        }
    })

    return <animated.div style={movement}>{children}</animated.div>;
}

export default ScaleIn;