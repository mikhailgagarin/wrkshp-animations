import React from 'react';
import {useLocation, Link} from 'react-router-dom';

import Flexbox from 'components/Flexbox';
import {ButtonSecondary} from 'components/Button';

import * as S from './styles';

export default function NotFound() {
    const location = useLocation();

    return (
        <Flexbox alignItems='center' flexDirection='column'>
            <S.ErrorCode>404</S.ErrorCode>
            <S.Text>
                No match for <code>{location.pathname}</code>
            </S.Text>
            <ButtonSecondary as={Link} to='/'>Back home</ButtonSecondary>
        </Flexbox>
    );
}
