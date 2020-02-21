import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {font, color, themeVar} from 'assets/theme';

export const Header = styled.header`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${themeVar('layoutWidth')};
    height: ${themeVar('headerHeight')};
    background: ${color('greyLight')};
    border-bottom: 1px solid ${color('dark')};
    padding: 0 1rem;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
`;

export const LogoTitle = styled.div`
    font: ${font('pageHeading')};
    font-size: 1.125rem;
    color: ${color('font')};
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const NavigationList = styled.ul`
    display: flex;
    flex-direction: row;
`;
