import React, {useState} from 'react';
import {animated, useSprings} from 'react-spring';

import {ButtonPrimary} from 'components/Button';

export default function Springs() {
    const [on, toggle] = useState(false);

    const elements = Array.from(Array(5)).map((item, index) => {
        if (index % 2 === 0) {
            return {
                opacity: 0.25,
                color: 'black',
            };
        }

        return {
            opacity: 1,
            color: 'blue',
        };
    });

    const springs = useSprings(elements.length, elements.map(item => ({
        from: {color: '#fff', opacity: 0},
        to: {
            color: on ? item.color : '#fff',
            opacity: on ? item.opacity : 0
       }
   })));

    return (
        <>
            <h1>Springs showcase</h1>

            <ButtonPrimary onClick={() => toggle(!on)}>Toggle</ButtonPrimary>

            {springs.map((animation, index) => (
                <animated.div style={{...animation, fontSize: '2rem'}} key={index}>
                    HELLO WORLD!
                </animated.div>
            ))}
        </>
    )
};
