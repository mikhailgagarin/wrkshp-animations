import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';

import * as S from './styles';
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
    const {pathname} = useLocation();

    return (
        <S.AppLayout pathname={pathname}>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </S.AppLayout>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
