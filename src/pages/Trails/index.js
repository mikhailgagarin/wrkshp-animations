import React, {useState} from 'react';
import {animated, useTrail} from 'react-spring';

import {ButtonPrimary} from 'components/Button';

export default function Trails() {
    const [on, toggle] = useState(false);

    const trails = useTrail(5, {
        to: {opacity: on ? 1 : 0},
        config: {tension: 250}
   });

    return (
        <>
            <h1>Trails showcase</h1>

            <ButtonPrimary onClick={() => toggle(!on)}>Toggle</ButtonPrimary>

            {trails.map((animation, index) => (
                <animated.div style={animation} key={index}>HELLO WORLD!</animated.div>
            ))}
        </>
    );
};
