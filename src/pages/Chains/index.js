import React, {useState, useRef} from 'react';
import {animated, useSpring, useTrail, useChain} from 'react-spring';

import {ButtonPrimary} from 'components/Button';

export default function Chains() {
    const [on, toggle] = useState(false);

    const springRef = useRef();
    const spring = useSpring({
        ref: springRef,
        from: {opacity: .5},
        to: {opacity: on ? 1 : .5},
        config: {tension: 250}
   });

    const trailRef = useRef();
    const trail = useTrail(5, {
        ref: trailRef,
        from: {fontSize: '0.75rem'},
        to: {fontSize: on ? '3rem' : '0.75rem'}
   });

    useChain(on ? [springRef, trailRef] : [trailRef, springRef]);

    return (
        <>
            <h1>Chains showcase</h1>

            <ButtonPrimary onClick={() => toggle(!on)}>Toggle</ButtonPrimary>

            {trail.map((animation, index) => (
                <animated.h1 style={{...animation, ...spring}} key={index}>
                    HELLO WORLD!
                </animated.h1>
            ))}
        </>
    );
};
