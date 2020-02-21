import React from 'react';

import * as S from './styles';

function AnimatedRouter({style, children}) {
    return <S.Page style={style}>{children}</S.Page>;
}

export default AnimatedRouter;
