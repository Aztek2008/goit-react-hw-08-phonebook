/*
 * TODO: Подписаться на name и avatar https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg
 * TODO: диспатч операцию logout
 */
import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth";

import s from "../components/ContactForm/ContactForm.module.css";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: 30,
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    textTransform: "none",
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>
      Welcome, <br /> {name}
    </span>
    <button className={s.Button} type="button" onClick={onLogout}>
      Logout
    </button>
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
