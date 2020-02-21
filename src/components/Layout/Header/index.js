import React from 'react';

import * as S from './styles';
import NavItem from './NavItem';

export default function Header() {
    return (
        <S.Header>
            <S.LogoLink to='/'>
                <S.LogoTitle>WRKSHP: Animations</S.LogoTitle>
            </S.LogoLink>

            <nav>
                <S.NavigationList>
                    <NavItem exact to='/' label='Home' />
                    <NavItem to='/basic' label='Basic' />
                    <NavItem to='/springs' label='Springs' />
                    <NavItem to='/trails' label='Trails' />
                    <NavItem to='/chains' label='Chains' />
                </S.NavigationList>
            </nav>
        </S.Header>
    );
}
