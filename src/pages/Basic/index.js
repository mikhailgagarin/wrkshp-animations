import React, {useState} from 'react';
import {animated, useSpring, config} from 'react-spring';

import {ButtonPrimary} from 'components/Button';
import Fade from 'components/Fade';

const AnimatedButton = animated(ButtonPrimary);

export default function Basic() {
    const [on, toggle] = useState(true);
    // const {number} = useSpring({
    //     number: 100, from: {number: 0},
    //     config: config.slow,
    // });

    // return (
    //     <>
    //         <h1>Basic usage showcase</h1>

    //         {/* <ButtonPrimary
    //             onClick={() => toggle(!on)}
    //         >
    //             {on ? 'Hide' : 'Show'}
    //         </ButtonPrimary> */}

    //         <animated.div>{number}</animated.div>

    //         <div>Foo Bar</div>
    //     </>
    // );

    const props = useSpring({
        x: on ? 1 : 0,
        config: config.slow,
    })
    return (
        <>
            <AnimatedButton
                onClick={() => toggle(!on)}
                style={{
                    transform: props.x
                        .interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                    }}
            >
                {on ? 'Hide' : 'Show'}
            </AnimatedButton>
        </>
    )
}
