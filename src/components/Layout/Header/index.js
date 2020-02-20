import React from "react";

import * as S from "./styles";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <S.Header>
      <S.LogoLink to="/">
        <S.LogoTitle>WRKSHP: Animations</S.LogoTitle>
      </S.LogoLink>

      <nav>
        <S.NavigationList>
          <NavItem exact to="/" label="Home" />
          <NavItem to="/some-route" label="Some" />
          <NavItem to="/another-route" label="Another" />
        </S.NavigationList>
      </nav>
    </S.Header>
  );
}
