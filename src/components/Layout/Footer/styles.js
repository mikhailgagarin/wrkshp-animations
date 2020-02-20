import styled from 'styled-components';

import { color, themeVar } from 'assets/theme';

export const Footer = styled.footer`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${themeVar('footerHeigth')};
  background: ${color('dark')};
  color: ${color('white')};
  font-size: 0.75rem;
`;
