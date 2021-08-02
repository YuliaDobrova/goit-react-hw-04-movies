import React from "react";
import { NavLink } from "react-router-dom";
import headerRoutes from "../../routes/headerRoutes";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="NavLinkList">
          {headerRoutes.map((route) => (
            <li className="NavLinkListItem" key={route.path}>
              <NavLink
                className="NavLink"
                activeClassName="NavLink--active"
                to={route.path}
                exact={route.exact}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
