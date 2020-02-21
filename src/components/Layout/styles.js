import styled from 'styled-components';

import {themeVar, color} from 'assets/theme';

export const AppLayout = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: ${color('greyLight')};
`;

export const Main = styled.main`
    position: relative;
    flex: 1 1 auto;
    width: ${themeVar('layoutWidth')};
    margin-left: auto;
    margin-right: auto;
    margin-top: ${themeVar('headerHeight')};
    margin-bottom: ${themeVar('footerHeigth')};
`;
