import React, {useState} from 'react';

import {ButtonPrimary} from 'components/Button';
import Fade from 'components/Fade';

export default function Basic() {
    const [on, toggle] = useState(false);

    return (
        <>
            <h1>Basic usage showcase</h1>

            <ButtonPrimary onClick={() => toggle(!on)}>
                {on ? 'Hide' : 'Show'}
            </ButtonPrimary>

            <Fade isShown={on}>
                <div>HELLO WORLD!</div>
            </Fade>
        </>
    );
}
