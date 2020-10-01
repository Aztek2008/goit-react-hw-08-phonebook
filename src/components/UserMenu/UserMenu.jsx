import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "../Button/Button";

import PropTypes from "prop-types";

import s from "./UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.container}>
    <img src={avatar} alt="" width="32" className={s.avatar} />
    <span className={s.name}>
      Welcome, <br /> {name}
    </span>

    <Button buttonName="Logout" id={name} onClick={onLogout} />
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar:
    "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  onLogout: PropTypes.func,
};
