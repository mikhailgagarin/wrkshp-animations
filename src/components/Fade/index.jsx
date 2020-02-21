import React, {useState, useCallback, useEffect} from 'react';

import * as S from './styles';

function Fade({isShown, children}) {
    const [on, toggle] = useState(false);

    const onAnimationEnd = useCallback(() => {
        if (!isShown) {
            toggle(false);
        }
    }, [isShown]);

    useEffect(() => {
        if (isShown) {
            toggle(true);
        }
    }, [isShown]);

    if (on) {
        return (
            <S.Fade isShown={isShown} onAnimationEnd={onAnimationEnd}>
                {children}
            </S.Fade>
        );
    }

    return null;
}

export default Fade;
