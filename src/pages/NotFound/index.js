import React from 'react';
import { useLocation } from 'react-router-dom';

import Flexbox from 'components/Flexbox';
import ButtonLink from 'components/ButtonLink';

import * as S from './styles';

export default function NotFound() {
  const location = useLocation();

  return (
    <Flexbox alignItems="center" flexDirection="column">
      <S.ErrorCode>404</S.ErrorCode>
      <S.Text>
        No match for <code>{location.pathname}</code>
      </S.Text>
      <ButtonLink to="/">Back home</ButtonLink>
    </Flexbox>
  );
}
