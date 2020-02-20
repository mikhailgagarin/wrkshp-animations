import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';

import * as S from "./styles";

function Fade({ isShown, children }) {
    const [shouldRender, setRender] = useState(isShown);

    const onAnimationEnd = useCallback(() => {
        if (!isShown) {
            setRender(false);
        }
    }, [isShown]);

    useEffect(() => {
        if (isShown) {
            setRender(true);
        }
    }, [isShown]);

    if (shouldRender) {
        return (
            <S.Fade isShown={isShown} onAnimationEnd={onAnimationEnd}>
                {children}
            </S.Fade>
        );
    }

    return null;
}

export default Fade;
