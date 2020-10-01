import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import PropTypes from "prop-types";

import s from "./Navigation.module.css";

const Navigation = (isAuthenticated) => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    {isAuthenticated && (
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

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

Navigation.propTypes = {
  isAuthenticated: PropTypes.string,
};
