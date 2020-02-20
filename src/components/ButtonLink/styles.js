import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from 'assets/theme';

export const StyledLink = styled(Link)`
  min-width: 160px;
  display: inline-block;
  height: 42px;
  outline: none;
  border: 1px solid ${color('dark')};
  color: ${color('font')};
  background: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.19s linear;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  line-height: 42px;

  :hover,
  :focus {
    color: ${color('white')};
    background: ${color('dark')};
  }
`;
