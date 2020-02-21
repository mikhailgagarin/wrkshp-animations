import React from 'react';

import * as S from './styles';

function Fade({isShown, children}) {
    return (
        <S.Fade isShown={isShown}>
            {children}
        </S.Fade>
    );
}

export default Fade;
