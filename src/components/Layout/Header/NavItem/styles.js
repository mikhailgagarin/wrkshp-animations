import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, themeVar } from "assets/theme";

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  min-width: 6rem;
  height: ${themeVar("headerHeight")};
  font-weight: ${({ match }) => (match ? 600 : 400)};
  color: ${color("dark")};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${({ match }) =>
    match ? color("dark") : "transparent"};
  transition: color 200ms, border-bottom-color 200ms, font-weight 150ms;

  &:hover {
    color: ${color("primary")};
    border-bottom-color: ${color("primary")};
  }
`;
