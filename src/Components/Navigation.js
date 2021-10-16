import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectors } from "../redux/Auth";

import s from "./Components.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
