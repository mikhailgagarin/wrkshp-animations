import React from 'react';

import * as S from './styles';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <S.Footer>
      <p>WRKSHP © 2019 - {currentYear}. Paralect</p>
    </S.Footer>
  );
}
