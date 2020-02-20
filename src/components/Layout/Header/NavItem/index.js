import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";

import * as S from "./styles";

function NavItem({ label, to, exact }) {
  const match = useRouteMatch({
    path: to,
    exact
  });

  return (
    <li>
      <S.NavLink match={match} to={to}>
        {label}
      </S.NavLink>
    </li>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool
};

export default NavItem;
